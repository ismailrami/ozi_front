import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
 
export class AppComponent {
    title = 'Ozitem';
   
    constructor(
      private router: Router

    ) {}

    menu: Array<Object> = [
        { name: 'ADMINISTRATION', url: '/'},
        { name: 'DOSSIER DE CANDIDATURE', url :"/add-contact"},
        { name: 'ITOP', redirectTo: 'https://www.cc28tech.com/cathy-wun' },
        { name: 'ENTRETIEN', redirectTo: 'https://www.cc28tech.com/cathy-wun' },
        { name: 'QUITTER', redirectTo: 'https://www.cc28tech.com/cathy-wun' }
    ];
}