import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sib1Component } from './sib1.component';

describe('Sib1Component', () => {
  let component: Sib1Component;
  let fixture: ComponentFixture<Sib1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sib1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sib1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
