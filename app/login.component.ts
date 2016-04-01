import {Component} from 'angular2/core';
import {User} from './user';
import {UserService} from './user.service';
import { Router } from 'angular2/router';

@Component({
    selector: 'login-form',
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    user:User;
    constructor(  private _router: Router, private _userService:UserService ){
        this.user = {name:"",password:""};
    }

    login(){
        if (this.user.name!=="" && this.user.password!==""){
            this._userService.setCurrentUser(this.user);
            let link= ['Main'];
            this._router.navigate(link);
        }
    }

}