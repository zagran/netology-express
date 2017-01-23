'use strict';

let express = require('express');
let api = express.Router();
const _ = require('lodash');

api.post('/', (req, res) => {
    req.validate({
        name: {type: 'string', required: true},
        score: {type: 'number', required: true},
    });

    res.withSuccess({
        "id": 1,
        "name": req.param('name'),
        "score": req.param('score')
    });
});

api.get('/:id', (req, res) => {
    res.withSuccess({
        "id": _.toInteger(req.param('id')),
        "name": 'name',
        "score": 777
    });
});


api.put('/:id', (req, res) => {
    req.validate({
        name: {type: 'string', required: true},
        score: {type: 'number', required: true},
    });

    res.withSuccess({
        "id": _.toInteger(req.param('id')),
        "name": req.param('name'),
        "score": req.param('score')
    });
});

api.delete('/:id', (req, res) => {
    req.validate({
        name: {type: 'string', required: true},
        score: {type: 'number', required: true},
    });

    res.withSuccess({
        "success": true
    });
});

/**
 * Remove all?
 */
api.delete('/all', (req, res) => {

    res.withSuccess({
        "success": true
    });
});

module.exports = api;