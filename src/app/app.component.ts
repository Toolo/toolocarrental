import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FORM_DIRECTIVES}  from '@angular/common';

@Component({
  selector: 'search-app',
  directives: [ ROUTER_DIRECTIVES, FORM_DIRECTIVES ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
