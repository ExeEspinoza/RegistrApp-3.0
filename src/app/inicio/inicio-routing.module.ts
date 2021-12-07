import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteDosComponent } from '../components/componente-dos/componente-dos.component';
import { ComponenteTresComponent } from '../components/componente-tres/componente-tres.component';
import { ComponenteUnoComponent } from '../components/componente-uno/componente-uno.component';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children: [
      {
        path:'uno',
        component:ComponenteUnoComponent
      },
      {
        path:'dos',
        component:ComponenteDosComponent
      },
      {
        path:'tres',
        component:ComponenteTresComponent
      }
    ] 
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioPageRoutingModule { }
