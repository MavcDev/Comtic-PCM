import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'msg-box',
  templateUrl: './msg-box.component.html',
  styleUrls: ['./msg-box.component.css']
})
export class MsgBoxComponent implements OnInit {

  @Input()
  color: any;

  @Output() clickClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  click(){
    this.clickClose.emit();
  }

}
