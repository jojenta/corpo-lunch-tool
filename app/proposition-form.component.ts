import {Component} from 'angular2/core';
import {Proposition} from './proposition';
import {SocketHandlerService} from './socketHandler.service';

@Component({
    selector: 'proposition-form',
    templateUrl: 'app/proposition-form.component.html'
})

export class PropositionFormComponent {
    public proposition: Proposition;
    public proposing = false;

    constructor( private _socketHandlerService: SocketHandlerService ){
        this._resetForm();
    }
    propose() {
        this.proposing = true;
        this._socketHandlerService.getSocket().emit('newProposal', this.proposition);
        this._resetForm();
    }
    _resetForm() {
        this.proposition = { name: "", time: "", place: "", votes: 0 };
        this.proposing = false;
    }
}