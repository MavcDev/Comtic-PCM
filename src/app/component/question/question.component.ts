import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  colorRnd: string = "var(--aux-1-color)";

  constructor() { }

  ngOnInit() {
    this.getBackGroundColor();
  }

  getBackGroundColor(){
    let rndNum = Math.floor((Math.random() * 5) + 1) - 1;
    this.colorRnd = `var(--aux-${rndNum}-color)`;
  }

}
