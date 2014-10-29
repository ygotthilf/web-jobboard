'use strict';

var mongoose = require('mongoose');
var Job = require('../job/job.model');

var ApplySchema = new mongoose.Schema ({
    email : { type : String , required : true, lowercase: true},
    message : String,
    job: { type : mongoose.Schema.ObjectId , ref : 'Job', required : true }
});

ApplySchema.path('job').validate(function (value, respond){

  Job.findById (value, function (err, job){

      if(err || !job) return respond(false);

      respond();
  });
},'Job not found');

module.exports = mongoose.model('Apply', ApplySchema);
