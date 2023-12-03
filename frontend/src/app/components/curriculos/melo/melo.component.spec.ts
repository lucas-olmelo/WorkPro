import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeloComponent } from './melo.component';

describe('MeloComponent', () => {
  let component: MeloComponent;
  let fixture: ComponentFixture<MeloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeloComponent]
    });
    fixture = TestBed.createComponent(MeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
