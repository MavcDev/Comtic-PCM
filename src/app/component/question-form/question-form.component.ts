import { Component, OnInit } from '@angular/core';
import {ColorService} from './../../service/color.service'

@Component({
  selector: 'question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  listColorLine: Array<any>;
  listColorMain: Array<any>;

  indexQuestion: number = 0;
  indexColor: number = 0;

  constructor(private colors: ColorService) { }

  ngOnInit() {
    this.init();
  }

  init(){
    this.listColorLine = this.colors.getListColors();
    this.listColorMain = this.colors.getListMainColors();
  }

}
