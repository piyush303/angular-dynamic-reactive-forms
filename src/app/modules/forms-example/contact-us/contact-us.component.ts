import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SchemaType } from '../../../models';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
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
    }
  ];

  form: FormGroup = new FormGroup({})

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('ContactUsComponent onClick', this.form);
  }
}
