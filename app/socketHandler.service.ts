import {Injectable} from 'angular2/core';

@Injectable()
export class SocketHandlerService {
    socket : any;
    constructor(){
        this.socket = io.connect(window.location.origin, {
            path: window.location.pathname + 'socket.io'
        });
    }
    getSocket(){
        return this.socket;
    }
}