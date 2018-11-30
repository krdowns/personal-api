var db = require('./models');

var quotes_list = [
  {
    quote: "I got six numbers. One more would have been a complete telephone number.",
    character: "Kevin Malone",
    episode: "Niagara",
    image: "public/images/kevin.jpg"
  },
  {
    quote: "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    character: "Michael Scott",
    episode: "Stress Relief",
    image: "public/images/michael.jpg"
  },
  {
    quote: "Last week, Dwight found half a joint in the parking lot. And as it turns out, Dwight finding drugs is more dangerous than most people using drugs.",
    character: "Jim Halpert",
    episode: "Drug Testing",
    image: "public/images/jim.jpg"
  },
  {
    quote: "When my mother was pregnant with me, they did an ultrasound and found she was having twins, and they did another ultrasound a few weeks later, they discovered that I had resorbed the other fetus. Do I regret this? No. I believe his tissues made me stronger. I now have the strength of a grown man and a little baby.",
    character: "Dwight Schrute",
    episode: "Grief Counseling",
    image: "public/images/dwight.jpg"
  },
  {
    quote: "I can tell Michael's mood by which comedy routine he chooses to do. The more infantile, the more upset he is. And he just skipped the Ace Ventura talking butt thing. He never skips it. This is bad.",
    character: "Pam Beesly",
    episode: "New Boss",
    image: "public/images/pam.jpg"
  },
  {
    quote: "Guess what, I have flaws. What are they? Oh I don't know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car. So sue me.",
    character: "Michael Scott",
    episode: "Fun Run",
    image: "public/images/michael.jpg"
  },
  {
    quote: "Every week, I'm supposed to take four hours and do a quality spot-check at the paper mill. And of course the one year I blow it off, this happens.",
    character: "Creed Bratton",
    episode: "Product Recall",
    image: "public/images/creed.jpg"
  },
  {
    quote: "I wish there was a way to know you're in the good old days before you've actually left them",
    character: "Andy Bernard",
    episode: "Finale",
    image: "public/images/andy.jpg"
  },
];

// remove all records that match {} -- which means remove ALL records
db.Quote.deleteMany({}, function(err, quotes){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all quotes');

    // create new records based on the array books_list
    db.Quote.create(quotes_list, function(err, quotes){
      if (err) { return console.log('err', err); }
      console.log("created", quotes.length, "quotes");
      process.exit();
    });
  }
});