import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit
// , OnChanges 
{

  @Input()
  color: any;

  @Input()
  isSelect: boolean;

  constructor() { }

  ngOnInit() {
  }

  // ngOnChanges(changes: SimpleChanges){
    
  // }
}
