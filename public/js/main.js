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

//display the contents of the json on the page


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
    console.log(res);
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


  //on submit contact form disappears
  //POST to firebase
  //display on the page the new information

//contact list
  //displays a row with: small photo or placeholder image, name, phone number, email, twitter
  //remove button
