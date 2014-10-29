'use strict';

var _ = require('lodash');

var Job = require('./job.model');

function isValidId (req, res){
  req.checkParams('id', 'Invalid id').isObjectId();

  var errors = req.validationErrors();
  if(!errors){
    return true;
  }
  res.json(400, errors)
  return false;
}

exports.index =  function (req, res){

  Job.find ().select('title created').limit(20).exec(function (err, jobs){

    if(err) return res.json(500, err);

    res.json(jobs);
  });
}

exports.show = function (req, res){

  if(!isValidId(req,res)) return;

  var id = req.param('id');

  Job.findById (id, function (err, job){

    if(err) return res.json(500, err);

    if(job) return res.json(job);

    res.send(204);
  });
};

exports.create = function (req,res){

  var job = new Job(req.body);

  job.save(function (err){
    if(err) return res.json(400, err);

    res.json(job);
  });
};

exports.destroy = function (req,res){

  if(!isValidId(req,res)) return;

  var id = req.param('id');

  Job.findByIdAndRemove (id, function (err, job){

    if(err) return res.json(500, err);

    if(job) return res.json(job);

    res.send(204);
  });
};

exports.update = function (req, res){

  if(!isValidId(req,res)) return;

  if(req.body._id) {
    delete req.body._id;
  }

  var id = req.param('id');

  Job.findById (id, function (err, job){

    if(err) return res.json(500, err);

    if(!job) res.send(204);

    var updatedJob = _.merge(job, req.body);

    updatedJob.save(function (err){

      if(err) return res.json(500, err);

      res.json(job);
    });
  });
}
