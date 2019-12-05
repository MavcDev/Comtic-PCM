import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input()
  color: any;

  @Input()
  isSelect: boolean;

  constructor() { }

  ngOnInit() {
  }
}
