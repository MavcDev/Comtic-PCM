import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/interface/interfaces';

@Component({
  selector: 'play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.css']
})
export class PlayPageComponent implements OnInit {

  isFinishQuestion: boolean = false;
  questionList: Array<Question>;
  questionMain: Question;
  indexQuestion: number = 0;
  indexColor: number = 0;
  scoreCategory: Array<number> = [0, 0, 0, 0, 0];
  answerQuestion: Array<number> = []
  resultQuestion: Array<number> = [0, 0, 0, 0, 0]

  constructor() { }

  ngOnInit() {
  }

  init(){
    // cargar los datos
  }

  nextQuestion(indexAnswer: number){
    this.answerQuestion.push(indexAnswer);
    //this.scoreCategory[this.indexColor] += this.questionMain.answer[indexAnswer].score;
    this.indexQuestion++;

    if(this.indexQuestion >= 15){      
      this.isFinishQuestion = true;
      this.calculatedValueCategory();
      return;
    }

    if ((this.indexQuestion) % 3 == 0)
      this.indexColor++;

    this.questionMain = this.questionList[this.indexQuestion];
  }

  calculatedValueCategory(){
    for(var i = 0; i < this.scoreCategory.length; i++){
      let media =  this.questionList.length / this.scoreCategory[i];
      let pos = 0;
      if(media >= 1 && media < 1.5)
        pos = 2;
      else if(media >= 1.5 && media < 3)
        pos = 1;
      
      this.resultQuestion[i] = pos;
    }
  }
}
