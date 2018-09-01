describe('add Favorite test', function () {
  it('add praiseButton', function () {
    var praiseButton = new PraiseButton();
    praiseButton.addFavorite();
    expect(praiseButton.getFavorite()).toBe(1);
  });

  it('test thumb', function () {
    var thumb = new Thumb();
    thumb.addFavorite();
    expect(thumb.getFavorite()).toBe(1);
  });

  it('test init touch finger', function () {
    var thumb = new Thumb();
    expect(thumb.getFingerType()).toBe('Thumb');
  });

  it('test init number', function () {
    var thumb = new Thumb(1);
    expect(thumb.getFavorite()).toBe(1);
  });
});
