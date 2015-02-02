var fn = (function() {
  return {
    // Returns a function that can only be called once
    once : function(f) {
      var used= false;
      return function() {
        if (!used) {
          used = true;
          return f.apply(this, arguments);
        }
      };
    },

    // Simple curry.  Returns a function that has only been partially applied.
    curry : function(f, x) {
      return function(y) {
        return f(x, y);
      };
    },

    // Returns last element in an array.
    last : function(arr) {
      return arr[arr.length-1];
    },

    first : function(arr) {
      return arr[0];
    },

    map : function(arr, callback) {
      var a = [];
      for (var i = 0; i < arr.length; i++) {
        a.push(callback(arr[i], i, arr));
      }
      return a;
    },

    reduce : function(arr, callback, initial) {
      if (arr.length < 1) { return undefined; }
      var acc = initial || arr[0];
      var i = initial === undefined ? 1 : 0;
      for (; i < arr.length; i++) {
        acc = callback(acc, arr[i], i, arr);
      };
      return acc;
    },

    filter : function(arr, callback) {
      var a = [];
      for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
          a.push(arr[i]);
        }
      };
      return a;
    },


    take : function(arr, count) {
      count = count < arr.length ? count : arr.length;
      var a = [];
      for (var i = 0; i < count; i++) {
        a.push(arr[i]);
      }
      return a;
    },

    take_while : function(arr, callback) {
      var a = [];
      for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
          a.push(arr[i]);
        } else {
          return a;
        }
      }
      return a;
    },
    // removes the nth element from the array
    // returns an array with the removed element
    // and the new array sans element
    remove_at : function(arr, position) {
      var elm  = arr[position];
      var list = Array.prototype.concat(arr.slice(0, position));
      list = list.concat(arr.slice(position+1, arr.length));
      return [elm, list];
    },

    flatten : function(arr) {
      var acc = [];
      for (var i = 0; i < arr.length; i++) {

      }
      return acc;
    },
  }
}());
