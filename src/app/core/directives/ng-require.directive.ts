import { Directive, Input, ElementRef, Inject, Renderer, SimpleChanges, HostBinding } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

@Directive({
  selector: '[ng-required], mat-form-field'
})
export class NgRequireDirective {

  constructor(
    @Inject(Renderer) private renderer: Renderer,
    @Inject(ElementRef) private element: ElementRef) {
  }

  @Input('ng-required') set ngRequire(value: boolean | AbstractControlDirective | AbstractControl) {
    if (typeof value == 'boolean')
      this.configMaskField(this.element.nativeElement, value);
    else {
      console.log(value)
      this.configMaskField(this.element.nativeElement, value.hasError && value.errors.required);
    }

  }

  private showErrors(control): boolean {
    return control && control.errors && (control.dirty || control.touched);
  }
  
  private configMaskField(element, isRequired):void {
    if (element) {
      const input = element.querySelector('input[required]:not(:disabled)');
      if (input && input.parentElement.classList.contains('mat-form-field-infix') ) {
        input.parentElement.classList.remove('mat-form-field-infix-required');
        if (isRequired) {
          input.parentElement.classList.add('mat-form-field-infix-required');
        }  
      }
    }
  }

}