import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TextField } from '../../../models/text-field';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss']
})
export class PasswordFieldComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() controller: string = '';
  @Input() props: TextField = { key: '', type: 'text-field', label: '', placeholder: '', value: '' }

  constructor() { }

  ngOnInit(): void {
  }

}
