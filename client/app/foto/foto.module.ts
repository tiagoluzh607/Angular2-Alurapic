import{NgModule} from '@angular/core';
import {FotoComponent} from './foto.component';
import {FiltroPorTitulo} from './foto.pipes';

@NgModule({
    declarations: [FotoComponent, FiltroPorTitulo ], //tuod que faz parte do modulo
    exports: [FotoComponent, FiltroPorTitulo] //tudo que eu quero que seja possivel usar de outros modulos
})
export class FotoModule{
    
    
}
