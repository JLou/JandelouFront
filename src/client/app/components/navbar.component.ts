import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {MaterializeDirective} from 'angular2-materialize';

@Component({
  selector: 'sd-navbar',
  templateUrl: 'app/components/navbar.component.html',
  styleUrls: ['app/components/navbar.component.css'],
  directives: [ROUTER_DIRECTIVES, MaterializeDirective]
})
export class NavbarComponent {}
