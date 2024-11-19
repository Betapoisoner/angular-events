import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoAddComponent } from './evento-add.component';

describe('EventoAddComponent', () => {
  let component: EventoAddComponent;
  let fixture: ComponentFixture<EventoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventoAddComponent]
    });
    fixture = TestBed.createComponent(EventoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
