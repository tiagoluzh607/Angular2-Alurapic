import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component'
})

export class ListagemComponent{
    
    fotos: Object[] = [];

    constructor(http : Http){ //injeção de dependencia de http por type usando typescript
        
        http.get('v1/fotos')
            .subscribe(res => {
                this.fotos = res.json();
                console.log(this.fotos);
            }, erro => console.log(erro));
    }
}