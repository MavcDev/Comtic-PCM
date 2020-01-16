import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  audioPlay: any;
  audioFondo: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loadAudio();
  }

  async ngOnDestroy(){
    this.audioFondo.pause();
    this.audioFondo.currentTime = 0;
  }

  clickPlay(){
    this.audioPlay.play();
    this.audioFondo.pause();
    this.audioFondo.currentTime = 0;
    this.router.navigate(['/play']);
  }

  clickInfo(){
    
  }

  loadAudio(){
    this.audioPlay = new Audio('assets/song/btnL.wav');
    this.audioFondo = new Audio('assets/song/fondoMenu.wav');
    this.audioFondo.loop = true; 
    setTimeout((function(){ 
      this.audioFondo.play();
    }), 1000);
  }

  playAudio(){
    console.log('event');
    if(this.audioFondo.paused)
      this.audioFondo.play();
  }
}
