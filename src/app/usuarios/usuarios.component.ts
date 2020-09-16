import { Component, OnInit } from '@angular/core';
import { Page } from '../core/interface/page';

@Component({
  selector: 'app-usuarios',
  template: '<router-outlet></router-outlet>'
})
export class UsuariosComponent implements OnInit {


  public page: Page;
  //Usuario

  constructor() { }

  ngOnInit() {
  }

}
