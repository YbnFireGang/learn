function throttle(fn, wait, cb) {
  var before = Date.now(),
    first = true;
  return function () {
    var now = Date.now();
    var result = now - before >= wait || first;
    if (result) {
      before = now;
      first = false;
      fn();
    } else {
      cb();
    }
    return result;
  }
}

window.utils = {
  throttle: throttle
}