describe('add Favorite test', function () {
  it('add Favorite test', function () {
    var addFavorite = $.fn.addFavorite;
    var af = new addFavorite(1);
    expect(af.favorite).toBe(1);
  })
});