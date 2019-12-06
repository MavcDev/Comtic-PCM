import { Injectable } from '@angular/core';
import { Question, Answer } from './../interface/interfaces';
import { HttpService } from './http.service';
import { UrlDefaultService } from './url-default.service';

@Injectable({
  providedIn: 'root'
})
export class PlayDataService {

  maxQuestion: number = 15;

  constructor(private http: HttpService, 
    private urlConst: UrlDefaultService) { }

  async getQuestion() : Promise<Question[]> {
    await this.http.init( this.urlConst.getUrlApiGame() );
    let dataResponse = await this.http.get("pregunta/GetPreguntasAsignatura", {"Asignatura": 6});
    console.log(dataResponse.body)
    if(!dataResponse || !dataResponse.ok || dataResponse.status != 200) return [];
    return this.getCastQuestion(dataResponse.body);
  }

  getCastQuestion(data: Array<any>){
    if(!data || !Array.isArray(data)) return[];
    let questions: Array<Question> = [];
    data.forEach(aq => {
      let q: Question = <Question> {
        id: aq.PK_Id,
        text: aq.Contexto,
        category: aq.fkCategoria.PK_Id,
        answer: this.getCastAnswer(aq.opcions)
      }
      questions.push(q);
    })
    return questions;
  }

  getCastAnswer(data: any){
    if(!data) return [];
    let answs: Array<Answer> = [];
    data.forEach(answ => {
      answs.push(
        <Answer> {
          id: answ.PK_Id,
          text: answ.Nombre,
          score: answ.Puntaje
        }
      );
    });
    return answs;
  }

  // async getQuestion(nivel: number, categoria: number) : Promise<Question[]> {
  //   await this.http.init( this.urlConst.getUrlApiGame() );
  //   let dataResponse = await fetch("./assets/data.json");
  //   if(!dataResponse || !dataResponse.ok || dataResponse.status != 200) return [];
  //   let aux = this.getCastQuestion(await dataResponse.json());
  //   return aux;
  // }

  // async setSaveAnswers(data: HeaderAnswer){
  //   await this.http.init( this.urlConst.getUrlApiGame() );
  //   let dataResponse = await this.http.post("pregunta/Respuesta", data);
  //   if(!dataResponse) return false;
  //   return dataResponse.ok;
  // }
}
