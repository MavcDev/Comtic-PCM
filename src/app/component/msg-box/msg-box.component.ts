import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'msg-box',
  templateUrl: './msg-box.component.html',
  styleUrls: ['./msg-box.component.css']
})
export class MsgBoxComponent implements OnInit {

  @Input()
  color: any;

  @Input()
  show: boolean;

  constructor() { }

  ngOnInit() {
  }

}
