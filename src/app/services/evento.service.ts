import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  getEventos(): Evento[] {
    return [
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
  }
}
