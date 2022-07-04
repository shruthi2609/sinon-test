const Router = require('express').Router;
const Controller = require('./ContactController');
const router = new Router();
router.get('/:id', Controller.get);
router.post('/', Controller.create);
module.exports = router;