import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryList } from './try-list';

describe('TryList', () => {
  let component: TryList;
  let fixture: ComponentFixture<TryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TryList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
