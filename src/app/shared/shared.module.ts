import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Atoms
import { TextFieldComponent } from './atoms/text-field/text-field.component';
import { ButtonComponent } from './atoms/button/button.component';
import { TextareaComponent } from './atoms/textarea/textarea.component';
import { DropdownComponent } from './atoms/dropdown/dropdown.component';
import { NumberFieldComponent } from './atoms/number-field/number-field.component';
import { PasswordFieldComponent } from './atoms/password-field/password-field.component';

// Templates
import { ReactiveFormComponent } from './templates/reactive-form/reactive-form.component';

const ATOMS = [
  TextFieldComponent,
  ButtonComponent,
  TextareaComponent,
  DropdownComponent,
  NumberFieldComponent,
  PasswordFieldComponent
];

const TEMPLATES = [
  ReactiveFormComponent
];

const COMPONENTS = [
  ...ATOMS,
  ...TEMPLATES
];

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES
  ]
})
export class SharedModule { }
