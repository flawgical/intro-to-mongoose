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

// Article.create(
//   {
//     title: 'Python',
//     author: 'Shahzad'
//   },
//   (err, article) => {
//     //first argument is an error message from mongo
//     // second is the document you created and you can all it whatever
//     if(err) {
//       console.log(err)
//     } else {
//       console.log(article);
//     }
//   }
// )


//first argument is what we want to find by,
// Article.find({author:'Shahzad'}, (err, articles) => {
//   console.log(articles) //will return an array;
// })

//update
// Article.update(
//     {author: 'Shahzad'}, //thing it update
//     { $set: {author: 'Shahzad Khan'}}, //object with property
//     {multi: true}, //this is the options. Multi true says update all
//     // things that are Shahzad to Shahzad Khan
//     (err, updateArticle) => {
//       if(err) {
//         console.log(err)
//       } else {
//         console.log(updateArticle)//tells your action was succeed
//       }
//     }
// )

//delete
Article.remove(
    {title: 'Python'},
    (err, response) => {
      console.log(response)
    }
)
