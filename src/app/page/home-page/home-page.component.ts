import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  audioPlay: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loadAudio();
  }

  clickPlay(){
    this.audioPlay.play();
    this.router.navigate(['/play']);
  }

  clickInfo(){
    
  }

  loadAudio(){
    this.audioPlay = new Audio('assets/song/btnL.wav');
  }
}
