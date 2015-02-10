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
}

function sendForm(event) {
  event.preventDefault();

  //grab all of the information
  var $name = $('#name').val();
  var $phone = $('#phone').val();
  var $email = $('#email').val();
  var $twitter = $('#twitter').val();
  var $url = $('#photo').val();

  console.log($name, $phone, $email, $twitter, $url);

  var friend = {name: $name, phone: $phone, email: $email, twitter: $twitter, photoURL: $url}
  var data = JSON.stringify(friend);
  $.post(urlFB, data, function(res){
    console.log(res);
  })
}



  //post it to firebase
  //clear the form
  //hide the form
  //add info to the contact list

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


  //on submit contact form disappears
  //POST to firebase
  //display on the page the new information

//contact list
  //displays a row with: small photo or placeholder image, name, phone number, email, twitter
  //remove button
