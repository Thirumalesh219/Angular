import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecourseApiComponent } from './recourse-api.component';

describe('RecourseApiComponent', () => {
  let component: RecourseApiComponent;
  let fixture: ComponentFixture<RecourseApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecourseApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecourseApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
