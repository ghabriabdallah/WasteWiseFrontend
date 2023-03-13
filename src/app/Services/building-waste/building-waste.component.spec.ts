import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingWasteComponent } from './building-waste.component';

describe('BuildingWasteComponent', () => {
  let component: BuildingWasteComponent;
  let fixture: ComponentFixture<BuildingWasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingWasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
