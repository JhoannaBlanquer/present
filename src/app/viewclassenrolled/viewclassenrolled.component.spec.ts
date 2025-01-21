import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewclassenrolledComponent } from './viewclassenrolled.component';

describe('ViewclassenrolledComponent', () => {
  let component: ViewclassenrolledComponent;
  let fixture: ComponentFixture<ViewclassenrolledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewclassenrolledComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewclassenrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
