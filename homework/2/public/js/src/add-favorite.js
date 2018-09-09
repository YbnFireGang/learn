(function ($) {
  $.get('/get-favorite')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  setTimeout(function () {
    $.post('/add-favorite')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, 2000);

})(axios);