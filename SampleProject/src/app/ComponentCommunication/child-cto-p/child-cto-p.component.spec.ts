import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCtoPComponent } from './child-cto-p.component';

describe('ChildCtoPComponent', () => {
  let component: ChildCtoPComponent;
  let fixture: ComponentFixture<ChildCtoPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildCtoPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCtoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
