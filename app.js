var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server, {
    path: '/socket.io'
});
var socketServer = require('./backend/socketServer').connect(io);
var port = process.env.PORT || 8080;

app.use(express.static('app'));
app.use(express.static('.'));

server.listen(port, function(){
    console.log("Server started with port", port);
});