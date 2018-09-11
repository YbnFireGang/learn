describe('test add favorite', function () {
  it('test throttle function', function () {
    var emptyFn = function () {

    };
    var cb = function () {

    };
    var t = throttle(emptyFn, 5000, cb);
    expect(t()).toBe(true);
  })
});