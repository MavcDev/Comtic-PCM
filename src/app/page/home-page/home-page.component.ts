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
    this.preload();
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
    this.audioFondo.volume = 0.25;
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

  preload(){
    let urls = ["./assets/result/tecnologico.png",
    "./assets/result/CTecnologica.png", 
    "./assets/result/comunicativa.png",
    "./assets/result/CComunicativa.png",
    "./assets/result/investigativa.png",
    "./assets/result/CInvestigativa.png",
    "./assets/result/gestion.png",
    "./assets/result/CGestion.png",
    "./assets/result/pedagogica.png",
    "./assets/result/CPedagogica.png"];
    
    for (var i = 0; i < urls.length; i++) {
      let img = new Image();
      img.src = urls[i];
    }
  }
}
