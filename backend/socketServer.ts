import {Proposition} from '../app/proposition';

export class SocketServer {
    propositions: Proposition[];
    constructor(){
        this.propositions = [];
    }
    connect(io) {
        io.on('connection', (socket) => {
            console.log(socket.id + ' connected');
            socket.on('newProposal', (proposition) => {
                this.propositions.push(proposition);
                io.emit('newProposal', {newItem: proposition, allItems: this.propositions});
            });
        });
    }
}