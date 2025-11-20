import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoolPgia } from './bool-pgia';

describe('BoolPgia', () => {
  let component: BoolPgia;
  let fixture: ComponentFixture<BoolPgia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoolPgia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoolPgia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
