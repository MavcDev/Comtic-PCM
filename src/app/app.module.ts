import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './component/question/question.component';
import { AnswerComponent } from './component/answer/answer.component';
import { QuestionFormComponent } from './component/question-form/question-form.component';
import { LineQuestionComponent } from './component/line-question/line-question.component';
import { BtnfinishComponent } from './component/btnfinish/btnfinish.component';
import { LabelNextComponent } from './component/label-next/label-next.component';
import { PlayPageComponent } from './page/play-page/play-page.component';
import { ResultComponent } from './component/result/result.component';
import { BarInfoComponent } from './component/bar-info/bar-info.component';
import { ImgBaseComponent } from './component/img-base/img-base.component';
import { ChartInfoComponent } from './component/chart-info/chart-info.component';
import { ChartDataComponent } from './component/chart-data/chart-data.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { LoaderMsgComponent } from './component/loader-msg/loader-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    QuestionFormComponent,
    LineQuestionComponent,
    BtnfinishComponent,
    LabelNextComponent,
    PlayPageComponent,
    ResultComponent,
    BarInfoComponent,
    ImgBaseComponent,
    ChartInfoComponent,
    ChartDataComponent,
    HomePageComponent,
    LoaderMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
