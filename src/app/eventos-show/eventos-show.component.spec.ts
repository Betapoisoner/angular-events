import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosShowComponent } from './eventos-show.component';

describe('EventosShowComponent', () => {
  let component: EventosShowComponent;
  let fixture: ComponentFixture<EventosShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventosShowComponent]
    });
    fixture = TestBed.createComponent(EventosShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
