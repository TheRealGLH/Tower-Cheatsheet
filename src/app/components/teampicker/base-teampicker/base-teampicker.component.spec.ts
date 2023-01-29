import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTeampickerComponent } from './base-teampicker.component';

describe('BaseTeampickerComponent', () => {
  let component: BaseTeampickerComponent;
  let fixture: ComponentFixture<BaseTeampickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseTeampickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseTeampickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
