import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayrationComponent } from './displayration.component';

describe('DisplayrationComponent', () => {
  let component: DisplayrationComponent;
  let fixture: ComponentFixture<DisplayrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
