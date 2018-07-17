import{NgModule} from '@angular/core';
import {PainelComponent} from './painel.component';

@NgModule({
    declarations: [ PainelComponent ], //tuod que faz parte do modulo
    exports: [PainelComponent] //tudo que eu quero que seja possivel usar de outros modulos
})
export class PainelModule{
    
    
}
