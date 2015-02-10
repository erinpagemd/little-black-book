/* jshint mocha: true, expr: true, strict: false, undef: false */

//remember! tests depend on other tests. data you put out should be cleared at the end of the test

describe('test suite', function () {
  it('should assert true', function () {
    true.should.be.true;
    false.should.be.false;
  });
});//end test suite

describe('banishFriend', function () {
  it('should delete the person from the view', function () {
    //do stuff here
    //before this function is ran, length = x. after length = x-1
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
    //$('#target').empty();
    var data = {
      name: "Mary",
      phone: "555-555-5555",
      email: "mary@aol.com",
      twitter: "@mary",
      photoURL: "http://i.imgur.com/L6wjzi7.jpg"
    };
    var uuid = '-JhlvtoxluCmZfaDs0fD';
    //run it!
    var friends = loadFriend(uuid, data);
    expect(friends.length).to.equal(1);

  });
  //empty the div for the next test
  $('#target').empty();
});//end loadFriend

describe('makeFriendDiv', function () {
  it('should make a div with a class of "tableBody"', function () {
    var data = {
      name: "Mary",
      phone: "555-555-5555",
      email: "mary@aol.com",
      twitter: "@mary",
      photoURL: "http://i.imgur.com/L6wjzi7.jpg"
    };
    var uuid = 'JhlvtoxluCmZfaDs0fD';
    //i have to run it
    var friendDiv = makeFriendDiv(uuid, data);
    expect(friendDiv).to.exist;
    //expect friendDiv to be an object
    expect(friendDiv).to.be.an('object');
    //expect it to have a data-uuid attribute equal to uuid
    expect(friendDiv.attr('data-uuid')).to.equal(uuid);
    //expect it to have 6 children
    expect(friendDiv.children().length).to.equal(6);
  });
  //empty the target at the end of the test
  $('#target').empty();
});//end makeFriendDiv

//isn't reading on preventDefault()... issue pass it an event!?!
//test that it grabs the info... issue clears at the end
//test that it sends the info
//test that it clears the info
describe('sendForm', function () {
  it('should clear the values of the input fields', function(){
    // $('#name').val('bob');
    // $('#phone').val('555-555-5555');
    // $('#email').val('bob@aol.com');
    // $('#twitter').val('@bob');
    // $('#photo').val('http:imgur.com/bob');
    // var event = {
    //   originalEvent: MouseEvent,
    //   type: "click"
    // };
    // var sentForm = sendForm(event);
    // expect($("#name").val()).to.equal(' ');
  });
});

describe('stringifyInputValues', function () {
  it('should produce a json string', function () {
    //set the values for the test
    // $('#name').val('bob');
    // $('#phone').val('555-555-5555');
    // $('#email').val('bob@aol.com');
    // $('#twitter').val('@bob');
    // $('#photo').val('http:imgur.com/bob');
    // var stringified = stringifyInputValues();
    // expect(stringified).to.be('object');
  });
});//end stringifyInputValues

describe('showForm', function () {
  it('should give a style attribute of "display:block" to the form', function () {
    //same issue as below accessing the style attribute of undefined!! b/c it is a jquery object??
  })
})

describe('hideForm', function () {
  it('should give a style attribute of "display:none" to the form', function () {
    //style='display:none'
    //hideForm();
    //
    //to have property of style??
    //var $displayAttr = $('#contactForm').style();
    //console.log($displayAttr.width);
    //expect($displayAttr.display).to.equal('none');
  });
});
