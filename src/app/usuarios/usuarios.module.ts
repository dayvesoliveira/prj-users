import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { 
  MatButtonModule, 
  MatIconModule, 
  MatInputModule,
  MatCardModule,
  MatTableModule, 
  MatPaginatorModule 
} from '@angular/material';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosDetailComponent } from './usuarios-detail/usuarios-detail.component';
import { UsuariosGridComponent } from './usuarios-grid/usuarios-grid.component';
import { UsuariosComponent } from './usuarios.component';

import { UsuariosService } from './usuarios.service';
import { CoreModule } from '../core/core.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    CoreModule,

    UsuariosRoutingModule
  ],
  declarations: [
    UsuariosGridComponent,
    UsuariosDetailComponent,
    UsuariosComponent
  ],
  providers:[
    HttpClient,
    UsuariosService
  ]
})
export class UsuariosModule { }
