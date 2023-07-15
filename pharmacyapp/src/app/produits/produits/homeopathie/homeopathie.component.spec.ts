import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeopathieComponent } from './homeopathie.component';

describe('HomeopathieComponent', () => {
  let component: HomeopathieComponent;
  let fixture: ComponentFixture<HomeopathieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeopathieComponent]
    });
    fixture = TestBed.createComponent(HomeopathieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
