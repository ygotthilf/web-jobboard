'use strict';

var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema ({
    title : { type : String, required : true, trim : true},
    description : String,
    publisher : { type : String, required : true, trim : true},
    created : Date,
    location: String,
    duration: String,
    price: String,
    start: String
});

module.exports = mongoose.model('Job', JobSchema);
