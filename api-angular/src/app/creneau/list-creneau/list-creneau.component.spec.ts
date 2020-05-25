import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCreneauComponent } from './list-creneau.component';

describe('ListCreneauComponent', () => {
  let component: ListCreneauComponent;
  let fixture: ComponentFixture<ListCreneauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCreneauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCreneauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
