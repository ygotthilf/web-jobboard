'use strict';

var express= require('express');
var controller = require('./apply.controller');

var router = express.Router ();


router.get('/', controller.index);
router.post('/', controller.create);
router.get('/:id', controller.show);

module.exports = router;
