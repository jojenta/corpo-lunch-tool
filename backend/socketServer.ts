export class SocketServer {
    connect(io) {
        io.on('connection', function (socket) {
            console.log(socket.id + ' connected');
            socket.on('event', function (message) {
                console.log(message);
            });
            socket.emit('event', { message: 'Message >.<' });
        });
    }
}