import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimatePlanComponent } from './ultimate-plan.component';

describe('UltimatePlanComponent', () => {
  let component: UltimatePlanComponent;
  let fixture: ComponentFixture<UltimatePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimatePlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimatePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
