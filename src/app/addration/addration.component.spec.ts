import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrationComponent } from './addration.component';

describe('AddrationComponent', () => {
  let component: AddrationComponent;
  let fixture: ComponentFixture<AddrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
