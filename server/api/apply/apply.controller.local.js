'use strict';

var data = require('../../config/data.json');

exports.index = function (req, res){
  res.json(data.applies);
}

exports.show = function (req, res){

  var id = req.param('id');

  if(!id) res.json(400, 'Invalid id');

  data.applies.forEach(function (apply){
    if(apply.id === id){
      res.json(apply);
    }
  });
}

exports.create = function (req, res){

  data.applies.push(req.body);
  res.end();
}
