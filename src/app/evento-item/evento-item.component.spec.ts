import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoItemComponent } from './evento-item.component';

describe('EventoItemComponent', () => {
  let component: EventoItemComponent;
  let fixture: ComponentFixture<EventoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventoItemComponent]
    });
    fixture = TestBed.createComponent(EventoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
