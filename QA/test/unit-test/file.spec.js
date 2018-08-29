describe('file.js test', function () {
  it('towNumberAdd test', function () {
    expect(towNumberAdd(1, 2)).toBe(3);
    expect(towNumberAdd('1', '2')).toBe(0);
  })
});