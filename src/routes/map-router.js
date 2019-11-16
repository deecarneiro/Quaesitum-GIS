'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/map-controller');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/user/:userId', controller.getByUser);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;