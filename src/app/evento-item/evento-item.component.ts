import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Component({
  selector: 'evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css'],
})
export class EventoItemComponent {
  @Output() deleteEvent = new EventEmitter<void>();
  @Input() event!: Evento;
  deleteEvento() {
    this.deleteEvent.emit();
  }
}
