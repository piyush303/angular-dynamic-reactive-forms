import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsExampleRoutingModule } from './forms-example-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../../shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    ListComponent,
    ContactUsComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsExampleRoutingModule
  ]
})
export class FormsExampleModule { }
