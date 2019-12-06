import { Component, OnInit, Input } from '@angular/core';
import { fadeBasic } from '../../animation';

@Component({
  selector: 'img-base',
  templateUrl: './img-base.component.html',
  styleUrls: ['./img-base.component.css'],
  animations: [
    fadeBasic("1", "0", "0.1s")
  ]
})
export class ImgBaseComponent implements OnInit {

  open: boolean = false;
  srcImg: string;
  srcAux: string;

  @Input()
  set src(src: string){      
    this.srcAux = src;
    this.open = false;
  }

  constructor() { }

  ngOnInit() {
  }

  endFade(){
    this.srcImg = this.srcAux;
  }

  loadImg(){
    this.open = true;
  }

}
