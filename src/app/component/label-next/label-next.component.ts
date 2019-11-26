import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'label-next',
  templateUrl: './label-next.component.html',
  styleUrls: ['./label-next.component.css']
})
export class LabelNextComponent implements OnInit {

  @Input()
  color: string;

  constructor() { }

  ngOnInit() {
  }

}
