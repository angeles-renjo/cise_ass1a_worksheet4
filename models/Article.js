const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    // required: true
  },
  description: {
    type: String
  },
  pubyear: {
    type: Date
  },
  publisher: {
    type: String
  },
  claim: {
    type: String,
  },
  evidence: {
    type: String,
  },
  source:{
    type:String,
  }
});

module.exports = Article = mongoose.model('article', BookSchema);