var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/library');
var db = mongoose.connection;

db.on('error', function(msg) {
    console.log('Mongoose connection error %s', msg);
});

db.once('open', function() {
    console.log('Mongoose connection established');
});

var Book = require('../models/book');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({"status":"Success"});
});

router.get('/all', function(req, res, next){
    Book.find({}).exec(function(err, data){
        if(err){
            console.log(err);
            res.status(500);
        } else {
        res.json({data: data});
        }
    })
})

module.exports = router;