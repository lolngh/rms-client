import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RationstatewiseComponent } from './rationstatewise.component';

describe('RationstatewiseComponent', () => {
  let component: RationstatewiseComponent;
  let fixture: ComponentFixture<RationstatewiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RationstatewiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RationstatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
