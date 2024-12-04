import { TestBed } from '@angular/core/testing';

import { ValidationErrorComponent } from './validation-error.component';
import { Component } from '@angular/core';

describe('ValidationErrorComponent', () => {
  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });
});

function setup() {
  TestBed.configureTestingModule({
    imports: [ValidationErrorComponent],
  });

  const fixture = TestBed.createComponent(ValidationErrorComponent);
  const component = fixture.componentInstance;
  fixture.detectChanges();

  return {
    fixture,
    component,
  };
}
