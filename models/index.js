const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/personal-api', { useNewUrlParser: true });

module.exports = {
    Quote : require('./quotes'),
    Profile : require('./profile'),
    Character : require('./characters')
}