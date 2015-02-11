/* jshint mocha: true, expr: true, strict: false, undef: false */

describe('beforeEach test', function () {
  beforeEach(function(done){
    $('#contactForm').addClass('hidden');
    $('#target').empty();
    done();
  });
});

describe('test suite', function () {
  it('should assert true', function () {
    true.should.be.true;
    false.should.be.false;
  });
});//end test suite

describe('logout', function () {
  it('should log out', function () {
    //stuff here
  })
})

describe('authMe', function () {
  it('should auth the user in firebase', function () {
    //stuff here
  })
})

describe('createAccount', function () {
  it('should create an account in firebase', function () {
    //stuff here
  })
})

describe('showLogin', function () {
  it('should unhide the login form')
})

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
    //expect it to have a data-uuid attribute equal to uuid
    expect(friendDiv.attr('data-uuid')).to.equal(uuid);
    //expect it to have 6 children
    expect(friendDiv.children().length).to.equal(6);
  });
});//end makeFriendDiv

//isn't reading on preventDefault()... issue pass it an event!?!
//test that it grabs the info... issue clears at the end
//test that it sends the info
//test that it clears the info
describe('sendForm', function () {
  it('should clear the values of the input fields', function(){
    // var $name = $('#name'),
    //     $phone = $('#phone'),
    //     $email = $('#email'),
    //     $twitter = $('#twitter');
    //     $photo = $('#photo');
    // console.log($name);//right back to this same object or whatever it is!!
    //
    // $name.val('bob');
    // $phone.val('555-555-5555');
    // $email.val('bob@aol.com');
    // $twitter.val('@bob');
    // $photo.val('http:imgur.com/bob');
    //
    // //simulate the click event that triggers sendForm
    // $('#submit').click();
    // expect($name.val()).to.equal(' ');
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
