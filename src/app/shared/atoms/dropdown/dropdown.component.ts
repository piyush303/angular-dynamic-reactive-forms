import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DropDown } from '../../../models/dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() controller: string = '';
  @Input() props: DropDown = { key: '', type: 'dropdown', label: '', options: [''], value: '' };

  @Output() selected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectionChange(event: any) {
    this.selected.emit(event.value);
  }
}
