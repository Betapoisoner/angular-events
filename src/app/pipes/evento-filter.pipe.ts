import { Pipe, PipeTransform } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Pipe({
  name: 'eventoFilter',
})
export class EventoFilterPipe implements PipeTransform {
  transform(eventos: Evento[], filterBy: string): Evento[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    if (filter) {
      return eventos.filter((event) =>
        event.title.toLocaleLowerCase().includes(filter)
      );
    }
    return eventos;
  }
}
