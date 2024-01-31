const express = require("express");
const con = require("../config/connection");
const path = require('path');

module.exports = app => {
    const router = express.Router();

    app.set('views', path.join(__dirname, '../ui'));
    app.set('view engine', 'ejs');
    const publicPath = path.join(__dirname, '../public');
    console.log(publicPath)
    app.use(express.static(publicPath));
    router.get('/', (req, res) => {
        res.render('index', {title: 'Express', session: req.session});
    });

    app.use('/', router);
};