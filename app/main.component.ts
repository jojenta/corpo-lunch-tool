import {Component} from 'angular2/core';
import {PropositionFormComponent} from './proposition-form.component';
import {PropositionsComponent} from './propositions.component';
import {SocketHandlerService} from './socketHandler.service';
import {NotificationHandlerService} from './notificationHandler.service';
import {Notification} from './notification';

@Component({
    selector: 'main',
    templateUrl: 'main.component.html',
    directives: [PropositionsComponent, PropositionFormComponent],
})
export class MainComponent{
    public notifications: Notification[];

    constructor(
        private _socketHandlerService : SocketHandlerService,
        private _notificationHandlerService: NotificationHandlerService
    ){}

    ngOnInit() {
        this.notifications = this._notificationHandlerService.getAllNotif();
        this._createListeners();
    }

    openNotifs() {
        $('#notifications').openModal();
    }

    closeNotifs() {
        $('#notifications').closeModal();
        this.notifications = [];
        this._notificationHandlerService.clearNotif();
    }

    _createListeners() {
        this._socketHandlerService.getSocket().on('closing_proposals', (notif) =>{
            this._updateNotif(notif);
        });
        this._socketHandlerService.getSocket().on('closing_votings', (notif) =>{
            this._updateNotif(notif);
        });
        this._socketHandlerService.getSocket().on('newProposal', (data) =>{
            var notif = {
                msg: "New proposal added by",
                name: data.newItem.name
            }
            this._updateNotif(notif);
        });
    }

    _updateNotif(notif) {
        this._notificationHandlerService.addNotification(notif);
        this.notifications = this._notificationHandlerService.getAllNotif();
    }
}
