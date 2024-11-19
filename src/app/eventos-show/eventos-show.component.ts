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

  deleteEevento(event: Evento) {
    this.events = this.events.filter((e) => e.title != event.title);
  }
  addEvento(event: Evento) {
    this.events.push(event);
  }
  ngOnInit() {
    this.events = this.eventoService.getEventos();
  }
}
