import { Component } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Component({
  selector: 'eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css'],
})
export class EventosShowComponent {
  search: any = null;
  newEvento: Evento = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: '',
  };
  events: Evento[] = [
    {
      title: 'Evento de prueva',
      image: 'assets/evento1.jpg',
      date: '2019-03-15',
      description: 'Nos lo pasaremos genial',
      price: 23.95,
    },
    {
      title: 'Evento de prueva 2',
      image: 'assets/evento2.jpg',
      date: '2019-03-21',
      description: 'Este es peor',
      price: 15.5,
    },
  ];
  orderDate() {
    this.search = null;
    this.events = this.events.sort(
      (a, b) => Date.parse(a.date) - Date.parse(b.date)
    );
  }
  orderPrice() {
    this.search = null;
    this.events = this.events.sort((a, b) => a.price - b.price);
  }
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
  addEvento() {}
}
