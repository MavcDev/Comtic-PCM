import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bar-info-detail',
  templateUrl: './bar-info-detail.component.html',
  styleUrls: ['./bar-info-detail.component.css']
})
export class BarInfoDetailComponent implements OnInit {

  @Input()
  text: string;

  constructor() { }

  ngOnInit() {
  }

}
