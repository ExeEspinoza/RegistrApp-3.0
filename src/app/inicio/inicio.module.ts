import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { ComponenteUnoComponent } from '../components/componente-uno/componente-uno.component';
import { ComponenteDosComponent } from '../components/componente-dos/componente-dos.component';
import { ComponenteTresComponent } from '../components/componente-tres/componente-tres.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
  ],
  declarations: [InicioPage,ComponenteUnoComponent,ComponenteDosComponent,ComponenteTresComponent]
})
export class InicioPageModule {}
