import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../model';

@Component({
  selector: 'app-usuarios-detail',
  templateUrl: './usuarios-detail.component.html',
  styleUrls: ['./usuarios-detail.component.scss']
})
export class UsuariosDetailComponent implements OnInit {

  private idSelected: number;
  private urlImage: string = null;
  public formGroup: FormGroup;
  // https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg
  // https://github.com/melcor76/gravatar-directive/blob/master/src/app/app.component.html

  public id: AbstractControl;
  public first_name: AbstractControl;
  public last_name: AbstractControl;
  public email: AbstractControl;
  public avatar: AbstractControl;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public service: UsuariosService,
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    this.idSelected = this.data.id;
    this.configFormBuilder();
  }

  ngOnInit() {
    console.log(this.idSelected)
  }

  private configFormBuilder() {
    const groupFormBuilder = new Usuario();

    this.formGroup = this.fb.group(groupFormBuilder);
    this.defineFormGroup(groupFormBuilder);
  }

  private defineFormGroup(group: any) {
    Object.keys(group).forEach(key => {
        this[key] = this.formGroup.controls[key];
    });
  }

  public onSubmit(event){

  }
}
