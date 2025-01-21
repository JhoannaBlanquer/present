import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinnotComponent } from './checkinnot.component';

describe('CheckinnotComponent', () => {
  let component: CheckinnotComponent;
  let fixture: ComponentFixture<CheckinnotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckinnotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckinnotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
