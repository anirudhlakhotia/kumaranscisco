import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonsignupComponent } from './commonsignup.component';

describe('CommonsignupComponent', () => {
  let component: CommonsignupComponent;
  let fixture: ComponentFixture<CommonsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
