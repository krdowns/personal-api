const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({

    quote: {
      type: String,
      default: ""
    },

    character: {
      type: String,
      default: ""
    },

    image: {
      type: String,
      default: ""
    },

    episode: {
      type: String,
      default: ""
    }
  });

const Quote = mongoose.model('Quote', quoteSchema);
module.exports = Quote;



  