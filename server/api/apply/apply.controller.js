'use strict';

var Apply = require ('./apply.model');

function isValidId (req, res){
  req.checkParams('id', 'Invalid id').isObjectId();

  var errors = req.validationErrors();
  if(!errors){
    return true;
  }
  res.json(400, errors)
  return false;
}

exports.index = function (req, res){

  Apply.find({}, function (err, applies){
    if(err) return res.json(500, err);

    res.json(applies);
  });
}

exports.show = function (req, res){

  if(!isValidId(req, res)) return ;

  Apply.findById(req.param('id')).populate('job').exec(function (err, apply){
    if(err) return res.json(500, err);

    res.json(apply);
  });
}

exports.create = function (req, res){

  var apply = new Apply(req.body);

  apply.save(function (err){
    if(err) return res.json(400, err);

    res.json(apply);
  });
}
