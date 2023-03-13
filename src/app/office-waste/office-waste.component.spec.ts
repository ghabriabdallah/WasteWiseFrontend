import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeWasteComponent } from './office-waste.component';

describe('OfficeWasteComponent', () => {
  let component: OfficeWasteComponent;
  let fixture: ComponentFixture<OfficeWasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeWasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
