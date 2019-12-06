import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/interface/interfaces';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  color: any;

  @Input()
  question: Question;

  constructor() { }

  ngOnInit() {
  }
}
