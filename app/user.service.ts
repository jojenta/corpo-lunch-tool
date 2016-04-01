import {Injectable} from 'angular2/core';
import {User} from 'user';

@Injectable()
export class UserService {
    currentUser:User;
    constructor(){}
    setCurrentUser(user:User){
        this.currentUser=user;
    }
    getCurrentUser(){
        return this.currentUser;
    }


}