import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterChallengeComponent } from './center-challenge.component';

describe('CenterChallengeComponent', () => {
  let component: CenterChallengeComponent;
  let fixture: ComponentFixture<CenterChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
