(function (doc, $) {
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

  var t = throttle(addFavorite, 3000, function () {
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

  function throttle(fn, wait, cb) {
    var before = Date.now();
    return function () {
      var now = Date.now();
      if (now - before >= wait) {
        before = now;
        fn();
      } else {
        cb();
      }
    }
  }

})(document, axios);