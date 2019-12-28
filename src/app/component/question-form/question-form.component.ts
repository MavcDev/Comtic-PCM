import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ColorService} from './../../service/color.service';
import { Question } from './../../interface/interfaces';

@Component({
  selector: 'question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  listColorLine: Array<any>;
  listColorMain: Array<any>;
  selectAnswer: Array<boolean> = [false, false, false];
  indexAnswer: number = -1;

  classAnimation: string = "";

  @Input()
  indexQuestion: number = 0;

  @Input()
  indexColor: number = 0;

  @Input()
  question:Question;

  @Output() clickNextQuestion = new EventEmitter<number>();

  constructor(private colors: ColorService) { }

  ngOnInit() {
    this.init();
  }
  
  init(){
    this.listColorLine = this.colors.getListColors();
    this.listColorMain = this.colors.getListMainColors();
  }

  clickAnswer(index: number){
    const audioSelectAnswer = new Audio('assets/song/selectAnswer.wav');
    audioSelectAnswer.play();

    this.selectAnswer.fill(false);
    this.selectAnswer[index] =  true;
    this.indexAnswer = index;
    this.classAnimation = "pulse-btn-next";
  }

  clickNext(){
    if(!this.validateSelectQuestion()){
      alert("Debe selecionar al menos una de las opciones.");
      return;
    }
    
    this.clickNextQuestion.emit(this.indexAnswer);
    this.restart();
  }

  validateSelectQuestion(){
    let isSelect = this.selectAnswer.find(elm => {
      return elm == true;
    });
    return (isSelect);
  }

  restart(){
    this.selectAnswer.fill(false);
    this.indexAnswer = -1;
    this.classAnimation = "";
  }
}
