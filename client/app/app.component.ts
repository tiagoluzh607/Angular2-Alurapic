import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id, //permite achar template em diretorio relativo
    selector: 'app', //como ele será acessado nos templates
    templateUrl: './app.component.html' //qual é o template obs: só funciona o caminho relativo quando o module.id esta junto
})

export class AppComponent{ 

    fotos: Object[] = [];

    constructor(http : Http){ //injeção de dependencia de http por type usando typescript
        
        http.get('v1/fotos')
            .subscribe(res => {
                this.fotos = res.json();
                console.log(this.fotos);
            }, erro => console.log(erro));
    }
}