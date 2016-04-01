import {Component} from 'angular2/core';
import {MainComponent} from './main.component';
import {LoginComponent} from './login.component';
import {SocketHandlerService} from './socketHandler.service';
import {NotificationHandlerService} from './notificationHandler.service';
import {UserService} from './user.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES, MainComponent],
    providers: [ROUTER_PROVIDERS, SocketHandlerService, NotificationHandlerService, UserService]
})
@RouteConfig([
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent,
        useAsDefault: true
    },
    {
        path: '/main',
        name: 'Main',
        component: MainComponent
    }
])
export class AppComponent {

    constructor(private _socketHandlerService:SocketHandlerService, private userService:UserService,
                private _notificationHandlerService:NotificationHandlerService) {
    }
}