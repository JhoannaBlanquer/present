import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewclassdeduComponent } from './viewclassdedu.component';

describe('ViewclassdeduComponent', () => {
  let component: ViewclassdeduComponent;
  let fixture: ComponentFixture<ViewclassdeduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewclassdeduComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewclassdeduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
