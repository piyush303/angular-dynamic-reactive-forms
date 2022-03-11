import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DropDown, TextArea, TextField } from '../../../models';

type schemaType = DropDown | TextField | TextArea;

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  @Input() schema: Array<any> | [] = [];
  @Input() form: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.schema.map((control) => {
      let formControl = new FormControl(control.value || '')
      this.form.addControl(control.key, formControl);
    });

    return;
  }

}
