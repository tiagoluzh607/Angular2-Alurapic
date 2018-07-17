import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id, //permite achar template em diretorio relativo
    selector: 'app', //como ele será acessado nos templates
    templateUrl: './app.component.html' //qual é o template obs: só funciona o caminho relativo quando o module.id esta junto
})

export class AppComponent{ 
    
}