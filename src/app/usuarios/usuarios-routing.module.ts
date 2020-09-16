import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosDetailComponent } from './usuarios-detail/usuarios-detail.component';
import { UsuariosGridComponent } from './usuarios-grid/usuarios-grid.component';


const routes: Routes = [
  { path: '', component: UsuariosGridComponent },
  { path: 'add', component: UsuariosDetailComponent },
  { path: ':id', component: UsuariosDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
