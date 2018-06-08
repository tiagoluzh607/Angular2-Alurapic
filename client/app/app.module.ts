import{NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

@NgModule({ //tranforma essa classe em ts em modulo do angular
    imports: [BrowserModule],
    declarations: [AppComponent], //componentes importados no meu modulo
    bootstrap: [AppComponent] //quando o modulo for carregado carregar Appcomponent  
})
export class AppModule{}

