import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityChallengeComponent } from './identity-challenge.component';

describe('IdentityChallengeComponent', () => {
  let component: IdentityChallengeComponent;
  let fixture: ComponentFixture<IdentityChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentityChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
