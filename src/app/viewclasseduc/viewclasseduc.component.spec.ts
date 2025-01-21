import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewclasseducComponent } from './viewclasseduc.component';

describe('ViewclasseducComponent', () => {
  let component: ViewclasseducComponent;
  let fixture: ComponentFixture<ViewclasseducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewclasseducComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewclasseducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
