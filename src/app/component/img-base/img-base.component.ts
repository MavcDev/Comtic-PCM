import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'img-base',
  templateUrl: './img-base.component.html',
  styleUrls: ['./img-base.component.css']
})
export class ImgBaseComponent implements OnInit {

  @Input()
  src: string = "https://picsum.photos/500/500";

  constructor() { }

  ngOnInit() {
  }

}
