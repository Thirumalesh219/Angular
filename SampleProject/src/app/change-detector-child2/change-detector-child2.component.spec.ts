import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectorChild2Component } from './change-detector-child2.component';

describe('ChangeDetectorChild2Component', () => {
  let component: ChangeDetectorChild2Component;
  let fixture: ComponentFixture<ChangeDetectorChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectorChild2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectorChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
