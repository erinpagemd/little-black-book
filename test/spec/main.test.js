/* jshint mocha: true, expr: true, strict: false, undef: false */

describe('test suite', function () {
  it('should assert true', function () {
    true.should.be.true;
    false.should.be.false;
  });
});

// describe('hideForm', function () {
//   it('should give a style attribute of "display: none" to the form', function () {
//     //style='display:none'
//     hideForm();
//     var displayAttr = document.querySelector('#contactForm').style.display;
//     expect(displayAttr).to.equal('none');
//   });
// });

// describe('showForm', function () {
//   it('should give a style attribute of "display: block" to the form', function () {
//     //same issue as above accessing the style attribute of undefined!! b/c it is a jquery object??
//   })
// })
