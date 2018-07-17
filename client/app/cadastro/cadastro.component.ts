import { Component } from '@angular/core';
import {FotoComponent} from '../foto/foto.component';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Http, Headers} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent{
    
    foto: FotoComponent = new FotoComponent();
    http: Http;
    meuForm: FormGroup;
     
    constructor(http: Http, fb: FormBuilder){
        this.http = http;
        this.meuForm = fb.group({
            titulo: ['',Validators.required],
            url: ['',Validators.required],
            descricao: ['']
        });
    }
       
    cadastrar(event: Event){
        event.preventDefault();
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        this.http.post('v1/fotos', JSON.stringify(this.foto), {headers: headers})
            .subscribe(()=>{
                this.limpar();
                console.log('Foto salva com sucesso');
            }, erro=> console.log(erro));
    }
    
    limpar(){
        this.foto = new FotoComponent();
    }
}