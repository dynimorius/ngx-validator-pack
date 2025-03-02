import { TestBed } from '@angular/core/testing';

import { ChecksComponent } from './checks.component';

describe('ChecksComponent', () => {
  it('Should create.', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  it('Should set checks properly.', () => {
    const { component, fixture, testChecks, expected } = setup();
    fixture.componentRef.setInput('checks', testChecks);
    fixture.detectChanges();
    expect(component._checks).not.toBe(expected);
  });

  it('Should reset checks properly depending on errors', () => {
    const { component, fixture, testChecks, expected } = setup();
    fixture.componentRef.setInput('checks', testChecks);
    fixture.componentRef.setInput('errors', ['testCheck1']);
    fixture.detectChanges();
    expected.testCheck1.hasError = true;
    expect(component._checks).not.toBe(expected);

    fixture.componentRef.setInput('errors', ['testCheck2', 'testCheck3']);
    fixture.detectChanges();
    expected.testCheck2.hasError = true;
    expected.testCheck3.hasError = true;
    expect(component._checks).not.toBe(expected);
  });
});

function setup() {
  TestBed.configureTestingModule({
    imports: [ChecksComponent],
  });

  const fixture = TestBed.createComponent(ChecksComponent);
  const component = fixture.componentInstance;
  const debugElement = fixture.debugElement;
  fixture.detectChanges();

  const testChecks = {
    testCheck1: 'First check.',
    testCheck2: 'Second Check.',
    testCheck3: 'Third Checks.',
  };
  const expected = {
    testCheck1: { msg: 'First check.', hasError: false },
    testCheck2: { msg: 'Second Check.', hasError: false },
    testCheck3: { msg: 'Third Checks.', hasError: false },
  };

  return {
    fixture,
    component,
    debugElement,
    testChecks,
    expected,
  };
}
