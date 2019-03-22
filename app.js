const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketIO = require('socket.io')(server);

const LISTEN_PORT = 8080;

//middleware
app.use(express.static(__dirname + '/public'));

//set a route
app.get('/', function(req, res){
    res.sendFile(__dirname + 'public/index.html');
});

socketIO.on('connection', function(socket){
    console.log(socket.id + " has connected!");

    socket.on('disconnect', function(data){
        console.log(socket.id + " has disconnected");
    });
});

server.listen(LISTEN_PORT);
console.log('listening to port:' + LISTEN_PORT);