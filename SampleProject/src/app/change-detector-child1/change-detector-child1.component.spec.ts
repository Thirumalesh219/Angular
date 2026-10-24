import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectorChild1Component } from './change-detector-child1.component';

describe('ChangeDetectorChild1Component', () => {
  let component: ChangeDetectorChild1Component;
  let fixture: ComponentFixture<ChangeDetectorChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectorChild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectorChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
