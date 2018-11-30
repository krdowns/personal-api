console.log("Sanity Check: JS is working!");

$(document).ready(function () {

  //CREATE QUOTE//
  $('.add-btn').on('click', function (e) {
      e.preventDefault();

    $.ajax({
      url: '/api/quotes',
      method: 'POST',
      data: JSON.stringify($(this).parent()),
      success: function(res) {
        $('#quoteTarget').append(`<li><img src="#"><br> ${res.quote}<br> - ${res.episode}</li>`);  
      }
    });  
  });

  //RETREIVE QUOTES//
  $('.retrieve-btn').one('click', function (e) {
    e.preventDefault();

    $.ajax({
      url: '/api/quotes',
      method: 'GET',
      success: function (res) {
        $.each(res, function (key, val) {
          $("#quoteTarget").append(`<li><img src="${val.image}"><br>  ${val.quote}<br> - ${val.episode}</li>`);
        });
      },
      error: function (res) {
        alert('Oh No!');
      }
    });
  });

  //UPDATE QUOTES//

  //DELETE QUOTES//















});