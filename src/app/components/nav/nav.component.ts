import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    nav_link_1: string = "INICIO";
    nav_link_2: string = "PRODUCTOS";
    nav_link_3: string = "CONTACTO";
    
    constructor() { }

    ngOnInit(): void {
    }

}
