import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string = '';
  @Output() click: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.click.emit();
  }
}
