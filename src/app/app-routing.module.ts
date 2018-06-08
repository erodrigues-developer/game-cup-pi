import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { CadastroTorneioComponent } from './cadastro-torneio/cadastro-torneio.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-torneio', component: CadastroTorneioComponent },
  { path: '', redirectTo: '/cadastro-torneio', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
