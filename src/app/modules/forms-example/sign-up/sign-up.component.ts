import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SchemaType } from '../../../models';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  schema: Array<SchemaType> = [
    {
      key: 'name',
      type: 'text-field',
      label: 'Name',
      placeholder: 'Enter your Name',
      value: ''
    },
    {
      key: 'email',
      type: 'text-field',
      label: 'Email',
      placeholder: 'Enter your Email',
      value: ''
    },
    {
      key: 'contact',
      type: 'number-field',
      label: 'Contact',
      placeholder: 'Enter your Contact Number',
      value: ''
    },
    {
      key: 'password',
      type: 'password-field',
      label: 'Password',
      placeholder: 'Enter your Password',
      value: ''
    },
    {
      key: 'confPass',
      type: 'password-field',
      label: 'Confirm Password',
      placeholder: 'Enter your Confirm Password',
      value: ''
    }
  ];

  form: FormGroup = new FormGroup({})

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('SignUpComponent onClick', this.form);
  }
}
