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
});

  function handleSuccess(json) {
    allQuotes = json;
    console.log(json);
 }

  function handleError(e) {
    console.log('uh oh');
    $('#quoteTarget').text('Failed to load quotes, is the server working?');
  }

// function handleSuccess(response) {
//   console.log(response);
//   var quoteInfo = response;

//   var listItemHTML = `<li>
//                           <h2>Quote: ${quoteInfo.quote}</h2>
//                           <p>Character: ${quoteInfo.character}</p>
//                           <img src="${quoteInfo.image}">
//                           <p>Episode: ${quoteInfo.episode}</p>
//                         </li>`

//   $('.quotes').append(listItemHTML);
// }

// function handleError(error, error2, error3) {
//   console.log(error);
//   console.log(error2);
//   console.log(error3);
//   alert(error2);
// }
//   quoteList = $('#quoteTarget');
//   $.ajax({
//     method: 'GET',
//     url: '/api/quotes',
//     success: handleSuccess,
//     error: handleError
//   });

//   $('#newQuoteForm').on('submit', function(e) {
//     e.preventDefault();
//     $.ajax({
//       method: 'POST',
//       url: '/api/quotes',
//       data: $(this).serialize(),
//       success: newQuoteSuccess,
//       error: newQuoteError
//     });
//   });

//   $('quotesList').on('click', '.deleteBtn', function() {
//     console.log('clicked delete button to', '/api/quotes/'+$(this).attr('data-id'));
//     $.ajax({
//       method: 'DELETE',
//       url: '/api/quotes/'+$(this).attr('data-id'),
//       success: deleteQuoteSuccess,
//       error: deleteQuoteError
//     });
//   });

// });

// function getQuoteHtml(quote) {
//   return `<hr>
//           <p>
//             <b>${quote.quote}</b>
//             by ${quote.character.name}
//             <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id=${quote._id}>Delete</button>
//           </p>`;
// }

// function getAllQuotesHtml(quotes) {
//   return quotes.map(getQuoteHtml).join("");
// }

// // helper function to render all posts to view
// // note: we empty and re-render the collection each time our post data changes
// function render () {
//   // empty existing posts from view
//   $('quotesList').empty();

//   // pass `allQuotes` into the template function
//   var quotesHtml = getAllQuotesHtml(allQuotes);

//   // append html to the view
//   $('quotesList').append(quotesHtml);
// };


function handleError(e) {
  console.log('uh oh');
  $('#quoteTarget').text('Failed to load quotes, is the server working?');
}

// function newQuoteSuccess(json) {
//   $('#newQuoteForm input').val('');
//   allQuote.push(json);
//   render();
// }

// function newQuoteError() {
//   console.log('newquote error!');
// }

// function deleteQuoteSuccess(json) {
//   var quote = json;
//   console.log(json);
//   var quoteId = quote._id;
//   console.log('delete quote', quoteId);
//   // find the quote with the correct ID and remove it from our allQuotes array
//   for(var index = 0; index < allQuotes.length; index++) {
//     if(allQuotes[index]._id === quoteId) {
//       allQuotes.splice(index, 1);
//       break;  // we found our quote - no reason to keep searching (this is why we didn't use forEach)
//     }
//   }
//   render();
// }

// function deleteQuoteError() {
//   console.log('deletequote error!');
// }