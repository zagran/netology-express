'use strict';

let express = require('express');
let router = express.Router();
let user = require('./user');
let NotFoundError = require('../errors/NotFoundError');
let apiMiddleware = require('../middlewares/api');


router.use(apiMiddleware);
router.use('/user', user);

router.all('*', (req, res) => {
    res.withError(new NotFoundError());
});

module.exports = router;