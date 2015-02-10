/* jshint mocha: true, expr: true, strict: false, undef: false */

describe('test suite', function () {
  it('should assert true', function () {
    true.should.be.true;
    false.should.be.false;
  });
});

// describe('hideForm', function () {
//   //it('should give a style attribute of "display: none" to the form', function () {
//     //style='display:none'
//     //var = the style attribute on the element with id
//     // hideForm();
//     // var $styleAttr = $('#contactForm').attr('style');
//     // expect($styleAttr).to.equal('display:none');
//     //expect that var to equal 'display:none'
//   });
// });

// describe('showForm', function () {
//   it('should give a style attribute of "display: block" to the form', function () {
//     //same issue as above accessing the style attribute of undefined!! b/c it is a jquery object??
//   })
// })
