import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmeraldSheetComponent } from './emerald-sheet.component';

describe('EmeraldSheetComponent', () => {
  let component: EmeraldSheetComponent;
  let fixture: ComponentFixture<EmeraldSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmeraldSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmeraldSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
