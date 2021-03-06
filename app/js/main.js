//use dev tool for iife??
/* jshint node: true */

'use strict'

// var $ = require('jquery'),
//     _ = require('lodash'),
//     Firebase = require('firebase');

var FIREBASE_URL = 'https://little-black-book.firebaseio.com/',
    fb = new Firebase(FIREBASE_URL),
    usersFbUrl;

$(document).ready(initialize);

function initialize () {
  //if already logged in, (ie getAuth is true)
  if(fb.getAuth()) {
    //hide the login button
    $('#login').hide();
    //hide the login form
    $('#loginForm').hide();
    //hide the contact form
    $('#contactForm').hide();

    usersFbUrl = FIREBASE_URL + '/users/' + fb.getAuth().uid + '/data';
    getData();

  } else {
    //if not logged in when first coming to the page, the following are hidden:
    //login form
    $('#loginForm').hide();
    //add contact button
    $('#addContact').hide();
    //contact form
    $('#contactForm').hide();
    //contact list
    $('.tableHeader').hide();
    $('#target').hide();

  }
  /////////////////////////////////////
  //button events//////////////////////
  ////////////////////////////////////
  //click 'login'
  $('#login').click(showLogin);
  //click Authorize Me!
  $('#authMe').click(authMe);
  //click Create an Account!
  $('#createAccount').click(createAccount);
  //click 'add new contact' and unhide the form
  $('#addContact').click(function(event){
    $('#contactForm').toggle();
    $('#addContact').toggle();
  });
  //click on the submit button and send the contact form
  $('#submitContact').click(sendContactForm);
  //event handler for remove button has to happen on #target
  $('#target').on('click', '.delete', banishFriend);
  //click on logout to logout!
  $('#logout').click(logout);

}

//logout
function logout (event) {
  fb.unauth();
  location.reload(true);
}

//authorize,login the user and remove the login form
function authMe (event) {
  event.preventDefault();
  var emailLogin = $('#emailLogin').val(),
      passwordLogin = $('#passwordLogin').val(),
      loginObj = {
        email: emailLogin,
        password: passwordLogin
      };
  fb.authWithPassword(loginObj, function(error, authData) {
    if (error) {
      alert('Rejected!!  ' + error.code)
      console.log("Login Failed!", error);
    } else {
      //hide the login
      $('#loginForm').toggle();
      //show the add contact button
      $('#addContact').toggle();
      //show the contact list
      $('.tableHeader').toggle();
      $('#target').toggle();

      usersFbUrl = FIREBASE_URL + '/users/' + fb.getAuth().uid + '/data';

      //get the data already in firebase
      getData();

      console.log("Authenticated successfully with payload:", authData);
    }
  });
}

//create an account
function createAccount (event) {
  event.preventDefault();
  var emailLogin = $('#emailLogin').val(),
      passwordLogin = $('#passwordLogin').val(),
      loginObj = {
        email: emailLogin,
        password: passwordLogin
      };
  fb.createUser(loginObj, function(error) {
    if (error === null) {
      //login the user
      authMe(event);
      //show contact form
      $('#contactForm').toggle();
      //hide add contact button
      $('#addContact').toggle();
      //hide the contact list ... they do not have one yet!
      $('.tableHeader').toggle();
      console.log("User created successfully");
    } else {
      alert("REJECTED!!  " + error.code );
      console.log("Error creating user:", error);
    }
  });
}//end create account

//unhide the login form and hides the login button
function showLogin (event) {
  $('#loginForm').toggle();
  $('#login').toggle();
}

//when i click the remove button, the record is deleted from firebase and remove from view
function banishFriend (event) {
  var $divToRemove = $(event.target).parent().parent();
  var uuid = $divToRemove.data('uuid');

  var urlItem = usersFbUrl + '/contacts/' + uuid + '.json';
  $.ajax(urlItem, {type: 'DELETE'});

  $divToRemove.remove();
}

//get the data
function getData () {
  $('#target').empty();
  $.get(usersFbUrl + '/contacts.json', function(resFB){
    Object.keys(resFB).forEach(function(uuid){
      loadFriend(uuid, resFB[uuid]);
    })
  });
}

function loadFriend (uuid, data) {
  var friends = [];

  friends.push(makeFriendDiv(uuid, data));

  $('#target').append(friends);

  return friends;
}

function makeFriendDiv (uuid, data) {
  var $div = $('<div class="row tableBody"></div>');

  //making the list of items to append to the main div
  var $divName = $('<div class="large-2 columns">' + data.name + '</div>'),
      $divPhone = $('<div class="large-2 columns">' + data.phone + '</div>'),
      $divEmail = $('<div class="large-2 columns">' + data.email + '</div>'),
      $divTwitter = $('<div class="large-2 columns">' + data.twitter + '</div>'),
      $divPhoto = $('<div class="large-2 columns"><object id="portrait" data="' + data.photoURL + '" type="image/jpg"><img src="http://i.imgur.com/hFXVIaV.jpg"></img></object></div>'),
      $divButton = $('<div class="large-2 columns"><button class="delete button alert">Banished</button></div>')

  $div.append($divName);
  $div.append($divPhone);
  $div.append($divEmail);
  $div.append($divTwitter);
  $div.append($divPhoto);
  $div.append($divButton);
  $div.attr('data-uuid', uuid);

  return $div;
}

function sendContactForm(event) {
  event.preventDefault();
  usersFbUrl = FIREBASE_URL + '/users/' + fb.getAuth().uid + '/data';
  //grab all of the information and post to firebase
  $.post(usersFbUrl + '/contacts.json', stringifyInputValues(), function(res){});

  //clear the input fields
  $('input').val('');

  //hide the form
   $('#contactForm').toggle();
   //show the add contact button
  $('#addContact').toggle();

  //add info to the contact list.. by load friend??
  getData();
}

//grab all of the input information and turn it into json
function stringifyInputValues () {
  var $name = $('#name').val();
  var $phone = $('#phone').val();
  var $email = $('#email').val();
  var $twitter = $('#twitter').val();
  var $url = $('#photo').val();

  var friend = {name: $name, phone: $phone, email: $email, twitter: $twitter, photoURL: $url}
  var data = JSON.stringify(friend);
  return data;
}
