const mongoose = require('mongoose');
const db = mongoose.connection;
// Require our model
const Article = require('./article');

// The article or anything after localhost
// is what your mongodb database will be called
mongoose.connect('mongodb://localhost:27017/article');

db.on('error', (err) => {
  // error message of a failed connection
  console.log(err, ' this is the error message')
});

db.on('connected', () => {
  console.log('mongoose is connected to mongodb')
});
