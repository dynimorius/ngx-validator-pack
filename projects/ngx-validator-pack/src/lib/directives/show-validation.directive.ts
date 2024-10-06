/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from "@angular/core";
import { FormControl, NgControl, ValidationErrors } from "@angular/forms";
import { Subscription } from "rxjs";
import { ShowValidationStyle } from '../interfaces/show-validation-styles';
import { DefaultStyle } from "../constant/default-show-validation-style";

@Directive({
  selector: "[showValidation]",
  standalone: true,
})
export class ShowValidationDirective implements OnInit, OnDestroy {
  controlSub: Subscription = new Subscription();
  parent!: HTMLElement;
  self!: HTMLElement;
  container!: HTMLElement;
  span!: HTMLElement | null;

  @Input() errorStyle: ShowValidationStyle = DefaultStyle;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private control: NgControl
  ) {}

  ngOnInit(): void {
    const formControl = this.control.control as FormControl;
    this.parent = this.elementRef.nativeElement.parentElement;
    this.self = this.elementRef.nativeElement;
    this.container = this.renderer.createElement("div");
    this.renderer.appendChild(this.container, this.self);
    this.renderer.appendChild(this.parent, this.container);
    this.setStyles();

    this.controlSub.add(
      formControl.statusChanges.subscribe((status) => {
        if (status === "INVALID") {
          if (!this.span) {
            this.showError(formControl.errors);
          }
        } else {
          this.hideError();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.controlSub.unsubscribe();
  }

  setStyles(): void {
    this.renderer.setStyle(this.container, "display", "flex");
    this.renderer.setStyle(this.container, "flex-direction", "column");
    this.renderer.setStyle(this.container, "gap", "10px");
    Object.entries(this.errorStyle).forEach((style) => {
      this.renderer.setStyle(this.container, style[0].replace('_', '-'), style[1]);
    })
  }

  showError(errors: ValidationErrors | null): void {
    this.span = this.renderer.createElement("span");
    (this.span as HTMLElement).innerHTML = this.getValidationMessage(errors);
    this.renderer.appendChild(this.container, this.span);
    this.renderer.setStyle(this.span, 'padding', '0px 0px 10px 10px');
  }

  hideError(): void {
    if(this.container, this.span) {
      this.renderer.removeChild(this.container, this.span);
      this.span = null;
    }
  }

  getValidationMessage(errors: ValidationErrors | null): string {
    return errors ? Object.values(errors)[0] : "Invalid Input.";
  }
}
