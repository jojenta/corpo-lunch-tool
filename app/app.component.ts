import {Component, OnInit} from 'angular2/core';
import {PropositionFormComponent} from './proposition-form.component'
import {SocketHandlerService} from './socketHandler.service';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><proposition-form></proposition-form>',
    directives: [PropositionFormComponent],
    providers: [SocketHandlerService]
})
export class AppComponent implements OnInit{
    constructor( private _socketHandlerService : SocketHandlerService ){}
    ngOnInit(){
        this._socketHandlerService.initialize();
    }
}
