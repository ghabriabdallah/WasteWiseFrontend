import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseWasteComponent } from './house-waste.component';

describe('HouseWasteComponent', () => {
  let component: HouseWasteComponent;
  let fixture: ComponentFixture<HouseWasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseWasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
