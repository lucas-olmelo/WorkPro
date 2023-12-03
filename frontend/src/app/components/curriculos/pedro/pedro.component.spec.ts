import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedroComponent } from './pedro.component';

describe('PedroComponent', () => {
  let component: PedroComponent;
  let fixture: ComponentFixture<PedroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedroComponent]
    });
    fixture = TestBed.createComponent(PedroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
