var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = process.env.PORT || 8080;

app.set('port', (process.env.PORT || 8080));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.set('view engine', 'ejs');

io.on('connection', function (socket) {
    socket.send("connect");
    socket.on('disconnect', function () {
    });
});

io.on('fontStyle', function(data){
    io.emit('fontStyle', data);
});

http.listen(PORT, function () {
    console.log('listen', PORT);
})
