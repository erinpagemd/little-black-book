//upon initialization, the form is hidden
hiddenForm();

//first i need a new contact button
var $addContact = $('#addContact');
  //click on the button and unhide it

//create hidden form
function hiddenForm () {
  var $contactForm = $('#contactForm').hide();
  return $contactForm;
}


//new contact form
  //name, phone number, email, twitter handle, photo url
  //submit
  //on submit contact for disappears
  //POST to firebase
  //display on the page the new information

//contact list
  //displays a row with: small photo or placeholder image, name, phone number, email, twitter
  //remove button
