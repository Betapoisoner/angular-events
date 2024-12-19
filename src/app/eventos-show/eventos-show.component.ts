import { Component, OnInit } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css'],
})
export class EventosShowComponent implements OnInit {
  search: any = null;
  events: Evento[] = [];
  constructor(private eventoService: EventoService) {}
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
  orderId(id: number) {
    this.events = this.events.filter((e) => e.id != id);
  }
  deleteEevento(eventId: number) {
    this.eventoService.deleteEvent(eventId).subscribe({
      error: (error) => console.error(error),
      complete: () => {
        console.log('Evento - ' + eventId + ' - Borrado');
        this.orderId(eventId);
      },
    });
  }

  addEvento(event: Evento) {
    this.eventoService.addEvent(event).subscribe({
      next: () => this.events.push(event), // Success function
      error: (error) => console.error(error), // Error function (optional)
      complete: () => console.log('Event added'),
    });
  }
  getProducts() {
    this.eventoService.getEventos().subscribe({
      next: (event) => (this.events = event), // Success function
      error: (error) => console.error(error), // Error function (optional)
      complete: () => console.log('Events loaded'), // Finally function (optional)
    });
  }
  ngOnInit() {
    this.getProducts();
  }
}
