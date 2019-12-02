import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bar-info',
  templateUrl: './bar-info.component.html',
  styleUrls: ['./bar-info.component.css']
})
export class BarInfoComponent implements OnInit {

  @Input()
  title: string = "Competencia pedagogica";

  @Input()
  content: string = "Capacidad de utilizar las tic para fortslecer los procesos de enselanza y aprendizaje reconocimiento alcances y limitaciones de las incporracion de estas tecnologiuas en la formacion imntegral de los estudiantes en su propio desarrollo personal";

  @Input()
  color: any = 'red';

  constructor() { }

  ngOnInit() {
  }

}
