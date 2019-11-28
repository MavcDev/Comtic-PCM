import { Component, OnInit, Input } from '@angular/core';
import {ColorService} from './../../service/color.service'
import { Question } from './../../interface/interfaces';

@Component({
  selector: 'question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  /**
   * Crear question y answer interfcae pasarlas como pinput
   * 
   */

  listColorLine: Array<any>;
  listColorMain: Array<any>;

  indexQuestion: number = 14;
  indexColor: number = 0;

  @Input()
  question:Question;

  constructor(private colors: ColorService) { }

  ngOnInit() {
    this.init();
  }
  
  init(){
    this.listColorLine = this.colors.getListColors();
    this.listColorMain = this.colors.getListMainColors();
  }

  clickAnswer(index: number){
    
  }

}
