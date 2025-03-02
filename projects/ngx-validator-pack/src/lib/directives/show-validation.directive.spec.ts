import { NgControl } from '@angular/forms';
import { ShowValidationDirective } from './show-validation.directive';
import {
  ElementRef,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('ShowValidationDirective', () => {
  TestBed.configureTestingModule({
    providers: [ViewContainerRef, ElementRef, Renderer2, NgControl],
  });

  let viewContainerRef: ViewContainerRef;
  let elementRef: ElementRef;
  let renderer: Renderer2;
  let control: NgControl;

  it('should create an instance', () => {
    const directive = new ShowValidationDirective(
      viewContainerRef,
      elementRef,
      renderer,
      control
    );
    expect(directive).toBeTruthy();
  });
});
