//use dev tool for iife

//upon initialization, the form is hidden
hideForm();

//click 'add new contact' and unhide the form
$('#addContact').click(showForm);

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
  //on submit contact for disappears
  //POST to firebase
  //display on the page the new information

//contact list
  //displays a row with: small photo or placeholder image, name, phone number, email, twitter
  //remove button
