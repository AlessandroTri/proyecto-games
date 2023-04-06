import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTreasureComponent } from './card-treasure.component';

describe('CardTreasureComponent', () => {
  let component: CardTreasureComponent;
  let fixture: ComponentFixture<CardTreasureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTreasureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTreasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
