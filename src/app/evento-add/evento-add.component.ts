import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Component({
  selector: 'evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css'],
})
export class EventoAddComponent {
  newEvento: Evento = {
    title: '',
    description: '',
    image: '',
    price: NaN,
    date: '',
  };
  @Output() addEvent = new EventEmitter<Evento>();
  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.newEvento.image = reader.result as string;
    });
  }

  addEvento() {
    this.addEvent.emit({ ...this.newEvento });
  }
}
