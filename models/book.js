var mongoose = require('mongoose');

var schema = mongoose.Schema({
    title: String,
    author: Number,
    read: Boolean
});

var Book = mongoose.model('books', schema);

module.exports = Book;