import { Directive, Input, ElementRef, Inject, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[disableControl]'
})
export class DisableControlDirective {
  
  constructor(
    @Inject(Renderer) private renderer: Renderer,
    @Inject(ElementRef) private element: ElementRef,
    private ngControl: NgControl) {
  }

  @Input('disableControl') set disableControl(condition: boolean) {
    this.setDisabledState(condition);
  }


  setDisabledState(isDisabled: boolean) {
    if (this.element.nativeElement.classList.contains('ng-select')){
      if (isDisabled) {
        this.ngControl.control.disable();
      } else {
        this.ngControl.control.enable();
      }
    } else 
      this.renderer.setElementProperty(this.element.nativeElement, 'disabled', isDisabled);
  }

}