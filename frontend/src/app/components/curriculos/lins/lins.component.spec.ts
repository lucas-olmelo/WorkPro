import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinsComponent } from './lins.component';

describe('LinsComponent', () => {
  let component: LinsComponent;
  let fixture: ComponentFixture<LinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinsComponent]
    });
    fixture = TestBed.createComponent(LinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
