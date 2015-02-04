var expect = chai.expect;

describe('fn', function() {

  describe('first', function() {
    it('should return the first element of an array', function() {
      var f = fn.first([9,8,7]);
      expect(f).to.equal(9);
    });
    it('should return undefined if the array is empty', function() {
      var f = fn.first([]);
      expect(f).to.equal(undefined);
    });
  });

  describe('last', function() {
    it('should return the last element of an array', function() {
      var l = fn.last([9,8,7]);
      expect(l).to.equal(7);
    });

    it('should return undefined if the array is empty', function() {
      var l = fn.last([]);
      expect(l).to.equal(undefined);
    });
  });

  describe('tail', function() {
    it('should return an array with all elements except the first', function() {
      var t = fn.tail([0,1,2,3,4]);
      expect(t).to.eql([1,2,3,4]);
    });
    it('should return empty array when array only has 1 elem', function() {
      var t = fn.tail([1]);
      expect(t).to.eql([]);
    });
    it('should return undefined on empty array', function() {
      var t = fn.tail([]);
      expect(t).to.equal(undefined);
    });
  });

  describe('unzip', function() {
    it('should return two arrays, one containing the even members, the other containing the odd members',
        function() {
          var uz = fn.unzip([0,1,2,3,4,5]);
          expect(uz.length).to.equal(2);
          expect(uz[0]).to.eql([0,2,4]);
          expect(uz[1]).to.eql([1,3,5]);
        });
    it('should return two arrays of even length, if the array is odd then the last element is lost',
        function() {
          var uz = fn.unzip([0,1,2,3,4]);
          expect(uz[0].length).to.equal(uz[1].length);
          expect(uz[0]).to.eql([0,2]);
          expect(uz[1]).to.eql([1,3]);
        });
  });


  describe('zip', function() {
    it('should interleave two arrays into one', function() {
      var z = fn.zip([0,2,4], [1,3,5]);
      expect(z).to.eql([0,1,2,3,4,5]);
      expect(z.length).to.equal(6);
    });

    it('should determine how many items to zip based on the shortest array',
        function() {
          var first = [0,1,2];
          var second = [3,4,5,6];
          var z = fn.zip(first, second);
          expect(z.length).to.equal(first.length * 2);

          first = [0,1,2,3];
          second = [4,5];
          z = fn.zip(first, second);
          expect(z.length).to.equal(second.length * 2);
    });
  });

  describe('zipWith', function() {
    it('should return an array with that combine same index elements via a comback',
        function() {
          var zw = fn.zipWith([0,1,2], [3,4,5],
              function(x, y) { return x + y; });
          expect(zw).to.eql([3,5,7]);
    });
    it('should determine how many items to zip based on the shortest array',
        function() {
          var first = [0,1,2];
          var second = [0,1,2,3];
          var zw = fn.zipWith(first, second,
              function(x, y) { return x + y; });
          expect(zw.length).to.equal(first.length);
          first = [0,1,2,3];
          second = [0,1];
          zw = fn.zipWith(first, second,
              function(x, y) { return x + y; });
          expect(zw.length).to.equal(second.length);
      });

  });

});
