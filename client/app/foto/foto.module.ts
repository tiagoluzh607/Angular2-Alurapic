import{NgModule} from '@angular/core';
import {FotoComponent} from './foto.component';

@NgModule({
    declarations: [ FotoComponent ], //tuod que faz parte do modulo
    exports: [FotoComponent] //tudo que eu quero que seja possivel usar de outros modulos
})
export class FotoModule{
    
    
}
