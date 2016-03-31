import {Component, OnInit} from 'angular2/core';
import {Proposition} from './proposition';
import {SocketHandlerService} from './socketHandler.service'

@Component({
    selector: 'propositions',
    templateUrl: 'propositions.component.html'
})

export class PropositionsComponent  implements OnInit {
    propositions: Proposition[];

    constructor(private _socketHandlerService:SocketHandlerService){
        this.propositions=[];
    }
    ngOnInit() {

        this._socketHandlerService.getSocket().emit("getPropositions");
        this._socketHandlerService.getSocket().on("newProposal", (msg:any)=>{
            this.propositions=msg.allItems;
        });
        this._socketHandlerService.getSocket().on("getPropositions", (msg:any)=>{
            this.propositions=msg;
        });
    }
    arePropositionsAvailable(){
        return (this.propositions && this.propositions.length>0);
    }
}
