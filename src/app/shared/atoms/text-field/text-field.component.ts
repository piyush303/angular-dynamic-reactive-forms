import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TextField } from '../../../models/text-field';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() controller: string = '';
  @Input() props: TextField = { key: '', type: 'text-field', label: '', placeholder: '', value: '' }

  constructor() { }

  ngOnInit(): void {
  }
}
