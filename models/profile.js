const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    name: {
      type: String,
      default: ""
    },
    githubUsername: {
      type: String,
      default: ""
    },
    githubLink: {
      type: String,
      default: ""
    },
    githubProfileImage: {
      type: String,
      default: ""
    },
    personalSiteLink: {
      type: String,
      default: ""
    },
    currentCity: {
      type: String,
      default: ""
    },
    pets: {
      type: String,
      default: ""
    }
  });

  const Profile = mongoose.model('Profile', profileSchema);
  module.exports = Profile;