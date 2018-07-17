import{NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FotoModule} from './foto/foto.module';

@NgModule({ //tranforma essa classe em ts em modulo do angular
    imports: [BrowserModule, FotoModule],
    declarations: [AppComponent], //componentes importados no meu modulo
    bootstrap: [AppComponent] //quando o modulo for carregado carregar Appcomponent  
})
export class AppModule{}

