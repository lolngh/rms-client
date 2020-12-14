import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterationComponent } from './updateration.component';

describe('UpdaterationComponent', () => {
  let component: UpdaterationComponent;
  let fixture: ComponentFixture<UpdaterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdaterationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
