import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroiteComponent } from './droite.component';

describe('DroiteComponent', () => {
  let component: DroiteComponent;
  let fixture: ComponentFixture<DroiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
