import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './component/question/question.component';
import { AnswerComponent } from './component/answer/answer.component';
import { QuestionFormComponent } from './component/question-form/question-form.component';
import { LineQuestionComponent } from './component/line-question/line-question.component';
import { BtnfinishComponent } from './component/btnfinish/btnfinish.component';
import { LabelNextComponent } from './component/label-next/label-next.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    QuestionFormComponent,
    LineQuestionComponent,
    BtnfinishComponent,
    LabelNextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
