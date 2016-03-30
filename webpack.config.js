'use strict';
var webpack = require('webpack'),
    path = require('path');

module.exports = {
    devtool: 'source-map',
    context:  path.join(__dirname, 'app'),
    entry: [
        path.join(__dirname, 'app/main.js')
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    }
};