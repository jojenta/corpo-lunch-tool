import {Component, OnInit} from 'angular2/core';
import {SocketHandlerService} from './socketHandler.service';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>',
    providers: [SocketHandlerService]
})
export class AppComponent implements OnInit{
    constructor(
        private _socketHandlerService : SocketHandlerService ){}
    ngOnInit(){
        this._socketHandlerService.initialize();
    }
}
