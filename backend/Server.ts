import * as express from 'express';
import * as http from 'http';
import * as socketIo from 'socket.io';
import * as config from '../config.json';
import {SocketServer} from './socketServer';
import {ProposingHandler} from './ProposingHandler';
import {VotingHandler} from './VotingHandler';

export class Server {
    private app: express.Express;
    private port = process.env.PORT || 8080;
    private server: http.Server;
    private io: socketIo.io;
    private socketServer: SocketServer;

    constructor() {
        this.app = express();
        this.server = http.Server(this.app);
        this.socketServer = new SocketServer();
        this.io = socketIo(this.server, {
            path: '/socket.io'
        });
    }

    startServer() {
        this._initializeApp(this.io);
        this.socketServer.connect(this.io);
        this.app.use(express.static('app'));
        this.app.use(express.static('.'));

        this.server.listen(this.port, () => {
            console.log("Server started with port", this.port);

        });
    }
    _initializeApp(io) {
        new ProposingHandler(io, config);
        new VotingHandler(io, config);
    }
}

