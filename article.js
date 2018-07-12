const mongoose = require('mongoose');
const Schema = mongoose.Schema; //the Schema is a constructor function or a class


const articleSchema = new Schema({
  title: {type: String, required: true, unique: true},
  author: {type: String, required: true},
  body: String,
  comments: [{body: String, commentDate: Date}],
  publishDate: {type: Date, default: Date.now},
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
})

// mongoose injects your model into mongodb
// first argument will be the name of your mongo colelction
// sencond will be what those documents look like

const Article = mongoose.model('Article', articleSchema);

// this is just like the fruits array but it also allows us to talk
// to the database so we can have persistent data 
module.exports = Article;
