import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCtoPComponent } from './parent-cto-p.component';

describe('ParentCtoPComponent', () => {
  let component: ParentCtoPComponent;
  let fixture: ComponentFixture<ParentCtoPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentCtoPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentCtoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
