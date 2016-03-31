import {Component} from 'angular2/core';
import {MainComponent} from './main.component';
import {SocketHandlerService} from './socketHandler.service';
import {NotificationHandlerService} from './notificationHandler.service';
import {Notification} from './notification';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [MainComponent],
    providers: [SocketHandlerService, NotificationHandlerService]
})
export class AppComponent {
    public notifications:Notification[];

    constructor(private _socketHandlerService:SocketHandlerService,
                private _notificationHandlerService:NotificationHandlerService) {
    }
}