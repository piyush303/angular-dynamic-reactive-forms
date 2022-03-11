import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TextField } from '../../../models/text-field';

@Component({
  selector: 'app-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.scss']
})
export class NumberFieldComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() controller: string = '';
  @Input() props: TextField = { key: '', type: 'text-field', label: '', placeholder: '', value: '' }

  constructor() { }

  ngOnInit(): void {
  }

}
