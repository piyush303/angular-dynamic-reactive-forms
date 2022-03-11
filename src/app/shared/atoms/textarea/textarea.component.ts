import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TextArea } from '../../../models/textarea';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() controller: string = '';
  @Input() props: TextArea = { key: '', type: 'textarea', label: '', value: ''}

  constructor() { }

  ngOnInit(): void {
  }

}
