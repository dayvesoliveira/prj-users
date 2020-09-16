import { Directive, Input, ElementRef, Inject, Renderer, OnChanges, DoCheck, HostBinding, HostListener } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[ng-require-control]'
})
export class RequireControlDirective {

  constructor(
    @Inject(Renderer) private renderer: Renderer,
    @Inject(ElementRef) private element: ElementRef,
    public ngControl: NgControl) {
  }

  @Input('ng-require-control') set requireControl(condition: boolean) {
    this.setRequireState(condition);
  }

  private setRequireState(isRequired: boolean) {
    this.renderer.setElementProperty(this.element.nativeElement, 'required', isRequired);
    if (this.ngControl.control) {
      this.ngControl.control.setValidators(isRequired ? Validators.required : null);
      this.ngControl.control.updateValueAndValidity();
    }
  }

  private configMaskField(label, isRequired):void {
    if (label) {
        if (isRequired && !label.classList.contains('required')) {
            label.classList.add('required');
        } else {
            label.classList.remove('required');
        }
    }
  }

}