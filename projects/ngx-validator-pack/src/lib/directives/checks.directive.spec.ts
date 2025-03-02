import { ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { ChecksDirective } from './checks.directive';
import { TestBed } from '@angular/core/testing';
import { NgControl } from '@angular/forms';

describe('ChecksDirective', () => {
  let viewContainerRef: ViewContainerRef;
  let elementRef: ElementRef;
  let renderer: Renderer2;
  let control: NgControl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewContainerRef, ElementRef, Renderer2, NgControl],
    });
  })
  
  it('should create an instance', () => {
    const directive = new ChecksDirective(
      viewContainerRef,
      elementRef,
      renderer,
      control
    );
    expect(directive).toBeTruthy();
  });
});

