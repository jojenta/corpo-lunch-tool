import {Component} from 'angular2/core';
import {PropositionFormComponent} from './proposition-form.component';
import {PropositionsComponent} from './propositions.component';
import {SocketHandlerService} from './socketHandler.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [PropositionsComponent, PropositionFormComponent],
    providers: [SocketHandlerService]
})
export class AppComponent{
    constructor( private _socketHandlerService : SocketHandlerService ){}
}
