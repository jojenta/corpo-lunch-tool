import {Component} from 'angular2/core';
import {Proposition} from './proposition';

@Component({
    selector: 'propositions',
    templateUrl: 'propositions.component.html'
})

export class PropositionsComponent  {
    propositions: Proposition[];
    propositions= PROPOSITIONS;

}

var PROPOSITIONS: Proposition[] =  [
    {"time": "11 am", "place": "BonChon", "name":"Torg", "votes": 0},
    {"time": "10:30 am", "place": "Kanin Club", "name":"Shell", "votes": 0},
    {"time": "11:00 am", "place": "Yellow Cab", "name":"Jobeth", "votes": 0},
    {"time": "12 noon", "place": "Ramen Nagi", "name":"Gino", "votes": 0}
];