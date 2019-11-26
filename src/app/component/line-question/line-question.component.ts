import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'line-question',
  templateUrl: './line-question.component.html',
  styleUrls: ['./line-question.component.css']
})
export class LineQuestionComponent implements OnInit {

  @Input()
  listColors: Array<any>;

  @Input()
  postLine: number;

  constructor() { }

  ngOnInit() {
  }

}
