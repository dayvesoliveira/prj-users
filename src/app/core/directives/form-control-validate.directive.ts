import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: '[ng-validate]',
  template: `<div [ngClass]="{'has-error':this.showErrors(),'has-success': this.showSuccess()}">
                <ng-content></ng-content>
             </div>`
})
export class FormControlValidateDirective {

  @Input('form-control') control: AbstractControlDirective | AbstractControl;

  constructor() {}

  public showErrors(): boolean {
    return this.control && this.control.errors && (this.control.dirty || this.control.touched);
  }

  public showSuccess(): boolean {
    return this.control && this.control.valid && (this.control.dirty || this.control.touched);
  }
}
