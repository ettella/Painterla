import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToShopComponent } from './how-to-shop.component';

describe('HowToShopComponent', () => {
  let component: HowToShopComponent;
  let fixture: ComponentFixture<HowToShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
