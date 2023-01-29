import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubyTrainerPickerComponent } from './ruby-trainer-picker.component';

describe('RubyTrainerPickerComponent', () => {
  let component: RubyTrainerPickerComponent;
  let fixture: ComponentFixture<RubyTrainerPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubyTrainerPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RubyTrainerPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
