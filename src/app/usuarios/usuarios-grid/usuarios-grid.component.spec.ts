import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosGridComponent } from './usuarios-grid.component';
import { MatButtonModule, MatIconModule, MatInputModule, MatCardModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { UsuariosService } from '../usuarios.service';

describe('UsuariosGridComponent', () => {
  let component: UsuariosGridComponent;
  let fixture: ComponentFixture<UsuariosGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        RouterTestingModule,
      ],
      declarations: [ 
        UsuariosGridComponent
      ],      
      providers:[
        UsuariosService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
