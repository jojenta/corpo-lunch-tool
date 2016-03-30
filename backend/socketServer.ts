import {Proposition} from '../app/proposition';

export class SocketServer {
    propositions: Proposition[];
    connect(io) {
        io.on('connection', function (socket) {
            console.log(socket.id + ' connected');
            socket.on('newProposal', function (proposition) {
                this.propositions.push(proposition);
                io.emit('newProposal', {newItem: proposition, allItems: this.propositions});
            });
        });
    }
}