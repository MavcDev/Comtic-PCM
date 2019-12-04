import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chart-info',
  templateUrl: './chart-info.component.html',
  styleUrls: ['./chart-info.component.css']
})
export class ChartInfoComponent implements OnInit {

  @Input()
  src: string = "https://picsum.photos/500/500";

  constructor() { }

  ngOnInit() {
  }

}
