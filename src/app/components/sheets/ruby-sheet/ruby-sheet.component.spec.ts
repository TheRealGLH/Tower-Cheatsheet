import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubySheetComponent } from './ruby-sheet.component';

describe('RubySheetComponent', () => {
  let component: RubySheetComponent;
  let fixture: ComponentFixture<RubySheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubySheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RubySheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
