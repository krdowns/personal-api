var db = require('./models');

var quotes_list = [
  {
    quote: "I got six numbers. One more would have been a complete telephone number.",
    character: "Kevin Malone",
    episode: "Niagara"
  },
  {
    quote: "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    character: "Michael Scott",
    episode: "Stress Relief"
  },
  {
    quote: "Last week, Dwight found half a joint in the parking lot. And as it turns out, Dwight finding drugs is more dangerous than most people using drugs.",
    character: "Jim Halpert",
    episode: "Drug Testing"
  },
  {
    quote: "When my mother was pregnant with me, they did an ultrasound and found she was having twins, and they did another ultrasound a few weeks later, they discovered that I had resorbed the other fetus. Do I regret this? No. I believe his tissues made me stronger. I now have the strength of a grown man and a little baby.",
    character: "Dwight Schrute",
    episode: "Grief Counseling"
  },
  {
    quote: "I can tell Michael's mood by which comedy routine he chooses to do. The more infantile, the more upset he is. And he just skipped the Ace Ventura talking butt thing. He never skips it. This is bad.",
    character: "Pam Beesly",
    episode: "New Boss"
  },
  {
    quote: "Guess what, I have flaws. What are they? Oh I don't know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car. So sue me.",
    character: "Michael Scott",
    episode: "Fun Run"
  },
  {
    quote: "Every week, I'm supposed to take four hours and do a quality spot-check at the paper mill. And of course the one year I blow it off, this happens.",
    character: "Creed Bratton",
    episode: "Product Recall"
  },
  {
    quote: "I wish there was a way to know you're in the good old days before you've actually left them",
    character: "Andy Bernard",
    episode: "Finale"
  },
];

var characters_list = [
  {
    name: "Michael Scott",
    seasons: "1-6",
    image: "public/images/michael.jpg"
  },
  {
    name: "Dwight Schrute",
    seasons: "1-9",
    image: "public/images/dwight.jpg"
  },
  {
    name: "Jim Halpert",
    seasons: "1-9",
    image: "public/images/jim.jpg"
  },
  {
    name: "Pam Beesly",
    seasons: "1-9",
    image: "public/images/pam.jpg"
  },
  {
    name: "Andy Bernard",
    seasons: "2-9",
    image: "public/images/andy.jpg"
  },
  {
    name: "Kevin Malone",
    seasons: "1-9",
    image: "public/images/kevin.jpg"
  },
  {
    name: "Creed Bratton",
    seasons: "1-9",
    image: "public/images/creed.jpg"
  }
];


// remove all records that match {} -- which means remove ALL records
db.Character.deleteMany({}, function(err, characters) {
    console.log('removed all characters');
    db.Character.create(characters_list, function(err, characters){
      if (err) {
        console.log(err);
        return;
      }
      console.log('recreated all characters');
      console.log("created", characters.length, "characters");
  
  
      db.Quote.deleteMany({}, function(err, quotes){
        console.log('removed all quotes');
        db.Quote.create(quotes_list, function(err, quotes){
            if (err) {
                console.log(err);
                return;
            }
            console.log('recreated all quotes');
            console.log(`created ${quotes.length}, quotes`);
        })
        // quotes_list.forEach(function (quoteData) {
        //   var quote = new db.Quote({
        //     quote: quoteData.quote,
        //     character: quoteData.character,
        //     episode: quoteData.episode
        //   });
        //   db.Character.findOne({name: quoteData.character}, function (err, foundCharacter) {
        //     console.log('found character ' + foundCharacter.name + ' for quote ' + quote.quote);
        //     if (err) {
        //       console.log(err);
        //       return;
        //     }
        //     quote.character = foundCharacter;
        //     quote.save(function(err, savedQuote){
        //       if (err) {
        //         console.log(err);
        //       }
        //       console.log('saved ' + savedQuote.quote + ' by ' + foundCharacter.name);
        //     });
        //   });
        // });
      });
  
    });
  });