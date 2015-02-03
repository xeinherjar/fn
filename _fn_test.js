var expect = chai.expect;

describe('fn', function() {
  describe('zip', function() {
    it('should interleave two arrays into one', function() {
      var z = fn.zip([0,2,4], [1,3,5]);
      expect(z.length).to.equal(6);
    });
  });


});
