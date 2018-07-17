import {Component, Input, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit{
    
    @Input() titulo : String;
    
    //Essa funcao vem do implements oninit e é executada assim que recebemos os nossos atributos input
    ngOnInit(){
        this.titulo = this.titulo.length > 7 ? this.titulo.substring(0,7) + '...' : this.titulo;
    }
}