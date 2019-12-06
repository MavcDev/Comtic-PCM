import { Component, OnInit, Input } from '@angular/core';
import { Answer } from 'src/app/interface/interfaces';

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

  @Input()
  answer: Answer;

  constructor() { }

  ngOnInit() {
  }
}
