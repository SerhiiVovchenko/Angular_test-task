import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValBlocComponent } from './form-val-bloc.component';

describe('FormValBlocComponent', () => {
  let component: FormValBlocComponent;
  let fixture: ComponentFixture<FormValBlocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormValBlocComponent],
    });
    fixture = TestBed.createComponent(FormValBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
