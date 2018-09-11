(function (doc, $, utils) {
  var $addFavorite = doc.querySelector('.j-add-favorite'),
    $favoriteNum = doc.querySelector('.j-favorite-num');

  $.get('/get-favorite')
    .then(function (resp) {
      var data = resp.data;
      if (data.code === 1) {
        $favoriteNum.innerHTML = data.data;
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  var t = utils.throttle(addFavorite, 3000, function () {
    console.log('to much times')
  });

  $addFavorite.addEventListener('click', function () {
    t();
  });

  function addFavorite() {
    $.post('/add-favorite')
      .then(function (resp) {
        var data = resp.data;
        if (data.code === 1) {
          $favoriteNum.innerHTML = data.data;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

})(document, axios, utils);