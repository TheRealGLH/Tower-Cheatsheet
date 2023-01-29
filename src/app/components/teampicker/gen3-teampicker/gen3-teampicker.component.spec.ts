import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gen3TeampickerComponent } from './gen3-teampicker.component';

describe('Gen3TeampickerComponent', () => {
  let component: Gen3TeampickerComponent;
  let fixture: ComponentFixture<Gen3TeampickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gen3TeampickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gen3TeampickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
