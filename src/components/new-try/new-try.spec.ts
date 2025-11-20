import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTry } from './new-try';

describe('NewTry', () => {
  let component: NewTry;
  let fixture: ComponentFixture<NewTry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
