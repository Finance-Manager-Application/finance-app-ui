import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

//MODULES
import { LoginModule } from './features/login/login.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    LoginModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
