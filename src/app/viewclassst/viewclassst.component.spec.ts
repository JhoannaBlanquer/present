import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewclassstComponent } from './viewclassst.component';

describe('ViewclassstComponent', () => {
  let component: ViewclassstComponent;
  let fixture: ComponentFixture<ViewclassstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewclassstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewclassstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
