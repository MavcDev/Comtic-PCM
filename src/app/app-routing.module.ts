import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayPageComponent } from './page/play-page/play-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';

const routes: Routes = [
  {path: 'play', component: PlayPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: '', redirectTo: 'home', pathMatch:  'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
