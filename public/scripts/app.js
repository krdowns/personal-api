console.log("Sanity Check: JS is working!");

$(document).ready(function () {
  $('form').on('submit', function (e) {
    e.preventDefault();


    //   $.ajax({
    //     method: 'GET',
    //     url: '/api/quotes',
    //     success: handleSuccess,
    //     error: handleError
    //   });
    // });


    //   function handleSuccess(json) {
    //     $('#quoteTarget').append(json);
    //  }

    $.ajax({
      url: '/api/quotes',
      method: 'GET',
      success: function (res) {
        $.each(res, function (key, val) {
          console.log(val.quote);
          $("#quoteTarget").append(`<li>${val.quote} - ${val.character} - ${val.episode}</li>`);

        });
      },
      error: function (res) {
        alert('Oh No!');
      }
    });
  });
});

//   function handleError(e) {
//     console.log('uh oh');
//     $('#quoteTarget').text('Failed to load quotes, is the server working?');
//   }
// });