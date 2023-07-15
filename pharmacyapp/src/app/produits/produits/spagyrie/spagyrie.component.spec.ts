import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpagyrieComponent } from './spagyrie.component';

describe('SpagyrieComponent', () => {
  let component: SpagyrieComponent;
  let fixture: ComponentFixture<SpagyrieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpagyrieComponent]
    });
    fixture = TestBed.createComponent(SpagyrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
