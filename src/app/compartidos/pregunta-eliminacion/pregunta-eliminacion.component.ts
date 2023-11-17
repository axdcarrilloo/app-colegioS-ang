import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pregunta-eliminacion',
  templateUrl: './pregunta-eliminacion.component.html',
  styleUrls: ['./pregunta-eliminacion.component.scss']
})
export class PreguntaEliminacionComponent {

  @Output() respuestaEmit = new EventEmitter<string>();

  responder(): void {
    this.respuestaEmit.emit('Si');
  }

}
