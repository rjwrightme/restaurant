const express = require('express');
const bodyParser = require('body-parser');

const reserve = express.Router();

reserve.use(bodyParser.json());

//this group is one single unit implemented by using
//dish router on this particular router
//all there are chained together
reserve.route('/')
    //second parameter is callback function
    .all((req, res, next) => {
        //inside the callback function we are going to handle the incoming request
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.send('Will send all the reservations to you!');
    })

    .post((req, res, next) => {
        res.end('Will add the reservations: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation is not supported on /dishes');
    })

    .delete((req, res, next) => {
        res.send('Deleting all the reservations!');
    });



module.exports = reserve;

