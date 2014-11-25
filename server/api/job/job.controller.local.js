'use strict';

var data = require('../../config/data.json');

exports.index = function (req, res){
  res.json(data.jobs);
}

exports.show = function (req, res){

  var id = req.param('id');

  if(!id) res.json(400, 'Invalid id');

  data.jobs.forEach(function (job){
    if(job._id === id){
      res.json(job);
    }
  });

  res.status(204).end();
}

exports.create = function (req, res){

  data.jobs.push(req.body);
  res.end();
}
