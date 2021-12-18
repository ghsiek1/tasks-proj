import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'event-button',
  templateUrl: './event-button.component.html',
  styleUrls: ['./event-button.component.less']
})
export class EventButtonComponent implements OnInit {

  constructor() { }
  @Input() color: string;
  @Input() text: string;
  @Output() btnclick = new EventEmitter<string>();
  
  onClick(message:string):void {
    this.btnclick.emit(message);
  }
  
  
  
  ngOnInit(): void {
  }

}
