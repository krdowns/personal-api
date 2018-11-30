// require express and other modules
const express = require('express');
const app = express();


// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

const db = require('./models');

/************
 *   DATA   * 
 ************/

var newQuoteUUID = 18;


/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static(__dirname + '/public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', (req, res) => {

  res.json({
    message: "Welcome to my personal api!",
    documentationUrl: "https://github.com/krdowns/personal-api/blob/master/README.md",
    baseUrl: "https://fierce-gorge-11749.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "About Me"}, 
      {method: "GET", path: "/api/quotes", description: "Retrieve All Available Quotes"},
      {method: "POST", path: "/api/quotes", description: "Create New Quote"},
      {method: "PUT", path: "/api/quotes/:id", description: "Edit a particular quote and update"},
      {method: "DELETE", path: "/api/quotes/:id", description: "Delete a quote"}
    ]
  })
});



// define a root route: localhost:3000/
app.get('/', function (req, res) {
    res.sendFile('views/index.html', {
      root: __dirname
    });
  });


// PROFILE API

var profile = [{

  name: 'Kenny',

  githubUsername: 'krdowns',

  githubLink: 'https://github.com/krdowns',

  currentCity: 'San Francisco',

  pets: [
      {
      name: 'Lucky',
      type: 'Cat',
      breed: 'Tortoise'
      },
      {
      name: 'Binx',
      type: 'Cat',
      breed: 'Tuxedo'
      }
  ]

}];

app.get('/api/profile', (req, res) => {
  res.json(profile);
});






// GET ALL QUOTES
app.get('/api/quotes', function(req, res) {
  // send all quotes as a json response
  db.Quote.find({}, (err, quotes) => {
    if (err) {return console.log(err)}
    res.json(quotes);
  });
  // populate fills in the character id with all the character data
    // .populate('character')
    // .exec(function(err, quotes){
    //   if (err) { return console.log(`index error: ${err}`); }
    //   console.log(quotes);
    //   res.json(quotes);
    // })
});

// GET ONE QUOTE
app.get('/api/quotes/:id', function(req,res) {
    // get book id from url params(`req.params`)
    let quoteId = req.params.id;
    console.log(quoteId);
  
    // find book in db by id
    db.Quote.findOne({_id: quoteId }, (err, foundQuote) => {
      if(err) {return console.log(err)}
      res.json(foundQuote);
    });
  });

// CREATE QUOTE
app.post('/api/quotes', (req , res) => {
    // create a temp variable with form data (`req.body`)
    let newQuote = new db.Quote({
      quote: req.body.quote,
      character: req.body.quote,
      episode: req.body.episode,
    });
  });


  // UPDATE QUOTE
app.put('/api/quotes/:id', (req,res) => {
    // get quote id from url params (`req.params`)
    let quoteId = req.params.id;
    // get update body from req.body
    let updateBody = req.body;
    
    console.log(updateBody);
  
    // find and update the quote's attributes
    db.Quote.findOneAndUpdate(
      { _id: quoteId }, // search condition
      updateBody, // new content you want to update
      {new:true}, // you want to receive the new object
      (err, updatedQuote) => { // callback function
      if(err) return console.log(err)
      res.json(updatedQuote);
      });
  });

  // DELETE QUOTE
app.delete('/api/quotes/:id', (req,res) => {
    // get quote id from url params (`req.params`)
    let quoteId = req.params.id;
  
    // find qipte in db by id and delete
    db.Quote.deleteOne(
      { _id: quoteId },
      (err, deletedQuote) => {
        if(err) {return console.log(err)}
        res.json(deletedQuote);
    });
  });
/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});