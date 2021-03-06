import{NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FotoModule} from './foto/foto.module';
import {PainelModule} from './painel/painel.module';
import {CadastroComponent} from './cadastro/cadastro.component';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import {ListagemComponent} from './listagem/listagem.component';
import { routing } from './app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({ //tranforma essa classe em ts em modulo do angular
    imports: [
        BrowserModule, 
        routing,
        FotoModule, 
        PainelModule, 
        HttpModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [AppComponent, CadastroComponent, ListagemComponent], //componentes importados no meu modulo
    bootstrap: [AppComponent] //quando o modulo for carregado carregar Appcomponent  
})
export class AppModule{}

