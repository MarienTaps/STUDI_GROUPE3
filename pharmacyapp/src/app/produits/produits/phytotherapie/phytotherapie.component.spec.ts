import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhytotherapieComponent } from './phytotherapie.component';

describe('PhytotherapieComponent', () => {
  let component: PhytotherapieComponent;
  let fixture: ComponentFixture<PhytotherapieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhytotherapieComponent]
    });
    fixture = TestBed.createComponent(PhytotherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
