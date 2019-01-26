var mongoose = require('mongoose');

var schema = mongoose.Schema({
    title: String,
    author: String,
    read: Boolean
});

var Book = mongoose.model('books', schema);

module.exports = Book;