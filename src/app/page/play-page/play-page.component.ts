import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/interface/interfaces';
import { PlayDataService } from './../../service/play-data.service'

@Component({
  selector: 'play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.css']
})
export class PlayPageComponent implements OnInit {

  isLoader: boolean = false;
  isFinishQuestion: boolean = false;
  questionList: Array<Question>;
  questionMain: Question;
  indexQuestion: number = 0;
  indexColor: number = 0;
  scoreCategory: Array<number> = [0, 0, 0, 0, 0];
  answerQuestion: Array<number> = [];
  resultQuestion: Array<number> = [0, 0, 0, 0, 0];

  audioResult: any;
  audioNextQuestion: any;

  constructor(private playService: PlayDataService) { 
    this.loadAudio();
  }

  ngOnInit() {
    this.init();
  }

  async init(){
    this.questionList = await this.playService.getQuestion();
    this.questionMain = this.questionList[0];
    this.isLoader = true;
  }

  nextQuestion(indexAnswer: number){
    this.answerQuestion.push(indexAnswer);
    this.scoreCategory[ this.getIndexCategory(this.questionMain.category) ] += this.questionMain.answer[indexAnswer].score;
    this.indexQuestion++;

    if(this.indexQuestion >= 15){
      this.audioResult.play();
      this.calculatedValueCategory();
      this.isFinishQuestion = true;
      return;
    }

    this.audioNextQuestion.play();
    if ((this.indexQuestion) % 3 == 0)
      this.indexColor++;

    this.questionMain = this.questionList[this.indexQuestion];
  }

  calculatedValueCategory(){
    for(var i = 0; i < this.scoreCategory.length; i++){
      let media =  9 / this.scoreCategory[i];
      let pos = 0;
      if(media >= 1 && media < 1.5)
        pos = 2;
      else if(media >= 1.5 && media < 3)
        pos = 1;
      
      this.resultQuestion[i] = pos;
    }
  }

  getIndexCategory(id: number){
    switch(id){
      case 9: return 0;
      case 6: return 1;
      case 7: return 2;
      case 8: return 3;
      case 10: return 4;
    }
  }

  loadAudio(){
    this.audioResult = new Audio('assets/song/nextQuestion.wav');
    this.audioNextQuestion = new Audio('assets/song/nextQuestion.wav');
  }
}
