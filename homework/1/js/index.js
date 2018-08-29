SystemJS.import('js/dist/index.js').then(function (m) {
  $.fn.addFavorite = m;
});
