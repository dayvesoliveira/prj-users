import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingComponent } from './loading/loading.component';
import { PopupComponent } from './components/popup/popup.component';
import { MatDialogModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisableControlDirective } from './directives/disable-control.directive';
import { FormControlValidateDirective } from './directives/form-control-validate.directive';
import { NgRequireDirective } from './directives/ng-require.directive';
import { ShowErrorsComponent } from './components/show-errors/show-errors.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    LoadingComponent,
    ShowErrorsComponent,
    DisableControlDirective,
    NgRequireDirective,
    FormControlValidateDirective,
    PopupComponent
  ],
  exports: [
    LoadingComponent,
    ShowErrorsComponent,
    DisableControlDirective,
    NgRequireDirective,
    FormControlValidateDirective,
    PopupComponent
  ],
  entryComponents:[
    PopupComponent
  ]
})
export class CoreModule { }
