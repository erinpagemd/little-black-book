//use dev tool for iife??
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
  var $name = $('#name').val();
  var $phone = $('#phone').val();
  var $email = $('#email').val();
  var $twitter = $('#twitter').val();
  var $url = $('#photo').val();

  console.log($name, $phone, $email, $twitter, $url);
}

//post the form
  //grab all of the information
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


//new contact form
  //name, phone number, email, twitter handle, photo url
  //submit
  //on submit contact form disappears
  //prevent default
  //POST to firebase
  //display on the page the new information

//contact list
  //displays a row with: small photo or placeholder image, name, phone number, email, twitter
  //remove button
