import {Injectable} from 'angular2/core';
import {Notification} from './notification'

@Injectable()
export class NotificationHandlerService {
    private notifications: Notification[];

    constructor(){
        this.notifications = [];
    }

    addNotification(notif){
        this.notifications.push(notif);
    }

    getAllNotif() {
        return this.notifications;
    }

    clearNotif() {
        this.notifications = [];
    }
}