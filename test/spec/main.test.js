/* jshint mocha: true, expr: true, strict: false, undef: false */

describe('test suite', function () {
  it('should assert true', function () {
    true.should.be.true;
    false.should.be.false;
  });
});//end test suite

describe('banishFriend', function () {
  it('should delete the person from the view', function () {
    //do stuff here
  });
});//end banishFriend

describe('getData', function () {
  it('should getData from firebase', function () {
    //do stuff here
  });
});//end getData

describe('loadFriend', function () {
  it('should put a div in the view', function () {
    //do stuff here
  });
});//end loadFriend

describe('makeFriendDiv', function () {
  it('should make a div with all contact input info', function () {
    //do stuff here
  });
});//end makeFriendDiv

//isn't reading on preventDefault()... issue pass it an event!?!
//test that it grabs the info... issue clears at the end
//test that it sends the info
//test that it clears the info
// describe('sendForm', function () {
//   it('should clear the values of the input fields', function(){
//     $('#name').val('bob');
//     $('#phone').val('555-555-5555');
//     $('#email').val('bob@aol.com');
//     $('#twitter').val('@bob');
//     $('#photo').val('http:imgur.com/bob');
//     sendForm({originalEvent: MouseEvent, type: "click"});
//     expect('#name').val().to.equal(' ');
//   });
// });

describe('stringifyInputValues', function () {
  it('should produce a json string', function () {
    //do stuff here
  });
});//end stringifyInputValues

// describe('showForm', function () {
//   it('should give a style attribute of "display: block" to the form', function () {
//     //same issue as above accessing the style attribute of undefined!! b/c it is a jquery object??
//   })
// })

// describe('hideForm', function () {
//   it('should give a style attribute of "display: none" to the form', function () {
//     //style='display:none'
//     hideForm();
//     var displayAttr = document.querySelector('#contactForm').style;
//     expect(displayAttr).to.equal('none');
//   });
// });
