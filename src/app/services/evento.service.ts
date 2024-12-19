import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ResponseEvents } from '../interfaces/responses';
@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private productURL = 'http://localhost:3000';
  private api = '/api/tutorial/event';
  constructor(private http: HttpClient) {}
  getEventos(): Observable<Evento[]> {
    return this.http.get<ResponseEvents>(this.productURL + this.api+"/getevents").pipe(
      map((response) => response.events),
      catchError((resp: HttpErrorResponse) => {
        return throwError(
          () =>
            new Error(
              `Error obteniendo Eventos. Código de servidor: ${resp.status}. Mensaje: ${resp.message}`
            )
        );
      })
    );
  }
  deleteEvent(eventId: number) {
    return this.http.delete(`${this.productURL}${this.api}/${eventId}/delete`);
  }
  addEvent(evento: Evento) {
    return this.http.post(`${this.productURL}${this.api}/insert`, {
      "title": evento.title,
      "image": evento.image,
      "date": evento.date,
      "description": evento.description,
      "price": evento.price,
    });
  }
}
