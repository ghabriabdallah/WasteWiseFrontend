import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialWasteComponent } from './commercial-waste.component';

describe('CommercialWasteComponent', () => {
  let component: CommercialWasteComponent;
  let fixture: ComponentFixture<CommercialWasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialWasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
