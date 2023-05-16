import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMissionConfirmationDialogComponent } from './create-mission-confirmation-dialog.component';

describe('CreateMissionConfirmationDialogComponent', () => {
  let component: CreateMissionConfirmationDialogComponent;
  let fixture: ComponentFixture<CreateMissionConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMissionConfirmationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMissionConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
