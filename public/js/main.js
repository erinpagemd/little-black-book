//use dev tool for iife??
var FIREBASE_URL = 'https://little-black-book.firebaseio.com/',
    fb = new Firebase(FIREBASE_URL),
    usersFbUrl;

$(document).ready(initialize);

function initialize () {

  //upon initialization, the following are hidden:
  //login form
  $('#loginForm').hide();
  //add contact button
  $('#addContact').hide();
  //contact form
  $('#contactForm').hide();
  //contact list
  $('.tableHeader').hide();
  $('#target').hide();

  //click 'login'
  $('#login').click(showLogin);

  //click Authorize Me!
  $('#authMe').click(authMe);

  //click Create an Account!
  $('#createAccount').click(createAccount);

  //click 'add new contact' and unhide the form
  //$('#addContact').click($('#contactForm').toggle());

  //click on the submit button and send the form
  $('#submit').click(sendForm);

  //event handler for remove button has to happen on #target
  $('#target').on('click', '.delete', banishFriend);

  //get the data of people already in firebase
  getData();
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
      console.log("Login Failed!", error);
    } else {
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
      console.log("User created successfully");
    } else {
      alert("REJECTED!!");
      console.log("Error creating user:", error);
    }
  });
}

//unhide the login form and hides the login button
function showLogin (event) {
  $('#loginForm').toggle();
  $('#login').toggle();
}

//when i click the remove button, the record is deleted from firebase and remove from view
function banishFriend (event) {
  var $divToRemove = $(event.target).parent().parent();
  var uuid = $divToRemove.data('uuid');

  var urlItem = FIREBASE_URL + uuid + '.json';
  $.ajax(urlItem, {type: 'DELETE'});

  $divToRemove.remove();
}

//get the data
function getData () {
  $('#target').empty();
  $.get(FIREBASE_URL, function(resFB){
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

function sendForm(event) {
  event.preventDefault();
  //grab all of the information and post to firebase
  $.post(FIREBASE_URL, stringifyInputValues(), function(res){});

  //clear the input fields
  $('input').val('');

  //change the current state of the form: hide the form
  //$('#contactForm').toggle();

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
