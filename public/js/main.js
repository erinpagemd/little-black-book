//use dev tool for iife??
var urlFB = 'https://little-black-book.firebaseio.com/.json';

$(document).ready(initialize);

function initialize () {
  //upon initialization, the form is hidden
  hideForm();
  //click 'add new contact' and unhide the form
  $('#addContact').click(showForm);
  //click on the submit button and send the form
  $('#submit').click(sendForm);
  //get the data of people already in firebase
  getData();
}

//get the data
function getData () {
  $('#target').empty();
  $.get(urlFB, function(resFB){
    Object.keys(resFB).forEach(function(uuid){
      loadFriend(uuid, resFB[uuid]);
    })
  });
}

function loadFriend (uuid, data) {
  var friends = [];
  var $div = $('<div class="row tableBody"></div>');

  //making the list of items to append to the main div
  var $divName = $('<div class="large-2 columns">' + data.name + '</div>'),
      $divPhone = $('<div class="large-2 columns">' + data.phone + '</div>'),
      $divEmail = $('<div class="large-2 columns">' + data.email + '</div>'),
      $divTwitter = $('<div class="large-2 columns">' + data.twitter + '</div>'),
      $divPhoto = $('<div class="large-2 columns"><object data="' + data.photoURL + '" type="image/jpg"><img src="http://i.imgur.com/hFXVIaV.jpg"></img></object></div>'),
      $divButton = $('<div class="large-2 columns"><button class="delete button alert">Banished</button></div>')

  $div.append($divName);
  $div.append($divPhone);
  $div.append($divEmail);
  $div.append($divTwitter);
  $div.append($divPhoto);
  $div.append($divButton);
  $div.attr('data-uuid', uuid);

  friends.push($div);

  $('#target').append(friends);
}

function sendForm(event) {
  event.preventDefault();
  //grab all of the information
  var $name = $('#name').val();
  var $phone = $('#phone').val();
  var $email = $('#email').val();
  var $twitter = $('#twitter').val();
  var $url = $('#photo').val();

  var friend = {name: $name, phone: $phone, email: $email, twitter: $twitter, photoURL: $url}
  var data = JSON.stringify(friend);
  $.post(urlFB, data, function(res){
  })

  //clear the input fields
  var $name = $('#name').val(' ');
  var $phone = $('#phone').val(' ');
  var $email = $('#email').val(' ');
  var $twitter = $('#twitter').val(' ');
  var $url = $('#photo').val(' ');

  //hide the form
  hideForm();

  //add info to the contact list
  getData();
}

//change how i hide the form
//I would just toggle a class of hidden. Much easier
//then you can do hasClass

//show the form
function showForm () {
  var $contactForm = $('#contactForm').show();
  return $contactForm;
}

//hide the form
function hideForm () {
  var $contactForm = $('#contactForm').hide();
  return $contactForm;
}

//remove button
