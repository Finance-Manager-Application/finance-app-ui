import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionTrackerComponent } from './subscription-tracker.component';

describe('SubscriptionTrackerComponent', () => {
  let component: SubscriptionTrackerComponent;
  let fixture: ComponentFixture<SubscriptionTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
