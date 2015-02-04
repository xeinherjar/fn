# fn

A small JS library to make my life a little easier.

### first
``` JavaScript
fn.first([9,8,7]);
//=> 9
```

### last
``` JavaScript
fn.last([9,8,7]);
//=> 7
```

### tail
``` JavaScript
fn.tail([0,1,2,3,4,5]);
//=> [1,2,3,4,5]
```

### unzip
``` JavaScript
fn.unzip([1,2,3,4,5,6]);
//=> [[1,3,5], [2,4,6]]
```

### zip
``` JavaScript
fn.zip([1,3,5], [2,3,6]);
//=> [1,2,3,4,5,6]
```

### zipWith

``` JavaScript
fn.zipWith([1,2,3], [4,5,6], function(x, y) { return x + y; });
//=> [5,7,9]
```
