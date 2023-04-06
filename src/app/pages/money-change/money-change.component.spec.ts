import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyChangeComponent } from './money-change.component';

describe('MoneyChangeComponent', () => {
  let component: MoneyChangeComponent;
  let fixture: ComponentFixture<MoneyChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
