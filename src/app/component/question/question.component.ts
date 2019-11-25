import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  colorRnd: string = "";

  constructor() { }

  ngOnInit() {
    this.getBackGroundColor();
  }

  getBackGroundColor(){
    //var(--aux-1-color)
    //let rndNum = Math.floor((Math.random() * 5) + 1) - 1;
    //this.colorRnd = `var(--aux-${rndNum}-color)`;
  }

}
