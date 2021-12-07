import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { GuardianGuard } from '../guard/guardian.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate:[GuardianGuard],
    children:[
      {
        path:'home',
    }   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}


