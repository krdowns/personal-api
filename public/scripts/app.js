console.log("Sanity Check: JS is working!");

$(document).ready(function () {
  $('form').on('submit', function (e) {
    e.preventDefault();


    $.ajax({
      method: 'GET',
      url: '/api/quotes',
      success: handleSuccess,
      error: handleError
    });
  });


  function handleSuccess(json) {
    allQuotes = json;
    $('#quoteTarget').append(json);
 }

  function handleError(e) {
    console.log('uh oh');
    $('#quoteTarget').text('Failed to load quotes, is the server working?');
  }
});