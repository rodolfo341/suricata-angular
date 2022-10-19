import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

    imagen_colacion = "../../../assets/img/colaciones.jpg";

    constructor() { }

    ngOnInit(): void {
    }

    verMas: string = "Ver mass";

    cambiaVerMas() {
        this.verMas = "Ya vio mucho";
    }

}
