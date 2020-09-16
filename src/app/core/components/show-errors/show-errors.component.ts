import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
 selector: 'show-errors,[show-errors]',
 template: `
 <ng-template [ngIf]="material" [ngIfElse]="errorTemplate">
  <mat-error *ngIf="shouldShowErrors()">
    {{ getError() }}
  </mat-error>
 </ng-template>
 <ng-template #errorTemplate>
    <ul *ngIf="shouldShowErrors()" class="has-error">
      <li class="help-block">{{getError()}}</li>
    </ul>
 </ng-template>
 `,
 encapsulation: ViewEncapsulation.None
})
export class ShowErrorsComponent {

    private static readonly errorMessages = {   
      'required': (params) => '##FIELD## é obrigatório.',  
      'minlength': (params) => `O campo ##FIELD## deve ter no mínimo ${params.requiredLength} caracteres.`,
      'maxlength': (params) => `O campo ##FIELD## não deve ser maior que ${params.requiredLength} caracteres.`,
      'min': (params) => `O campo ##FIELD## deve ser maior que ${params.min}.`,
      'max': (params) => `O campo ##FIELD## não deve ser maior que ${params.max}.`,
      'pattern': (params) => 'O valor do campo ##FIELD## é inválido.',   
      'email': (params) => "Digite um E-mail válido.",
      'cep': (params) => "Digite um ##FIELD## válido.",
      'cpf': (params) => "Digite um ##FIELD## válido.",
      'cnpj': (params) => "Digite um ##FIELD## válido.",
      'time': (params) => "Digite um ##FIELD## válido.",
      'percentage': (params) => "Digite um ##FIELD## válido.",
      'equalValue': (params) => `O valor do campo ##FIELD## é diferente de [##FIELD_EQUALS##].`, 
      'invalidCondition': (params) => `Valor de ##FIELD## válido somente para a condição [##FIELD_CONDITION##].`, 
      'file': (params) => `O valor do campo ##FIELD## é inválido ou seu tamanho é superior a ##FILE_SIZE## KB.` 
    };
    
    @Input('form-control') 
    public control: AbstractControlDirective | AbstractControl;
    
    @Input() 
    public caption: string;
    
    @Input() 
    public equalsCaption: string;
    
    @Input() 
    public condicionalCaption: string;
    
    @Input() 
    public fileSize: string;
    
    @Input('ng-material') 
    public material: boolean = false;

    shouldShowErrors(): boolean {
      return this.control && this.control.errors && (this.control.dirty || this.control.touched);
      /*&& this.control.invalid */
    }

    listOfErrors(): string[] {
        return Object.keys(this.control.errors)
                     .map(field => this.getMessage(field, this.control.errors[field], this.control));  
    }
    
    getError(): string {
      var errors = Object.keys(this.control.errors)
                         .map(field => this.getMessage(field, this.control.errors[field], this.control));   
      return errors[0];
   }
   
   private getMessage(type: string, params: any, control:any) {
      let fname = "";
      if (this.caption != null && this.caption !== "") {
        fname = this.caption;
      } else {
        fname = this.getControlName(control);
        fname = fname.replace("_"," ").replace(" id","").toLowerCase();
        fname = fname.replace(/\b\w/g, l => l.toUpperCase());
      } 
      const size = this.fileSize != null ? parseInt(this.fileSize,10)/1000:null;
      var msg = ShowErrorsComponent.errorMessages[type](params);
      
      return msg
        .replace("##FIELD##", fname)
        .replace('##FIELD_EQUALS##', this.equalsCaption)
        .replace('##FIELD_CONDITION##', this.condicionalCaption)
        .replace('##FILE_SIZE##', size);
    }

    getControlName(c: AbstractControl): string | null {
        const formGroup = c.parent.controls;
        return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
    }
   
}