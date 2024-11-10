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
import {
  DefaultContainerStyles,
  DefaultSpanStyles,
  DefaultStyle,
} from "../constant/default-show-validation-style";

/**
 * @publicApi
 * @description
 * A directive which will show a validation error message to the
 * user.
 * @implementation
 * <input
 *  type="text"
 *  formControlName="demoControlName"
 *  showValidation
 *  [errorStyle]="{                  - Optional style input
 *    font_size: 'medium',              used for customizing the look
 *    color: '#ad03fc',
 *  }"
 * />
 */
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
  retrievedStyles!: CSSStyleDeclaration;

  @Input() errorStyle: {[key: string]: string} = DefaultStyle;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
    private readonly control: NgControl
  ) {}

  ngOnInit(): void {
    const formControl = this.control.control as FormControl;
    this.parent = this.elementRef.nativeElement.parentElement;
    this.self = this.elementRef.nativeElement;
    this.retrievedStyles = getComputedStyle(this.self);
    this.container = this.renderer.createElement("div");
    this.renderer.appendChild(this.container, this.self);
    this.renderer.appendChild(this.parent, this.container);
    this.setContainerStyles();

    this.controlSub.add(
      formControl.statusChanges.subscribe((status): void => {
        this.hideError();
        if (status === "INVALID") {
          if (!this.span) {
            this.showError(formControl.errors);
          }
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.controlSub.unsubscribe();
  }

  setContainerStyles(): void {
    this.setStyles(this.container, DefaultContainerStyles);
    this.renderer.setStyle(this.container, "width", this.retrievedStyles.width);
  }

  setSpanStyles(): void {
    this.setZIndex();
    this.setStyles(this.span, { ...DefaultSpanStyles, ...this.errorStyle });
  }

  setZIndex(): void {
    const indexNum = Number.parseInt(this.retrievedStyles.zIndex);
    const zIndex = Number.isNaN(indexNum) ? 1 : indexNum;
    this.renderer.setStyle(this.self, "zIndex", `${zIndex}`);
    this.renderer.setStyle(this.span, "zIndex", `${zIndex - 1}`);
  }

  setStyles(
    element: HTMLElement | null,
    styles: { [key: string]: string }
  ): void {
    Object.entries(styles).forEach((style): void => {
      this.renderer.setStyle(element, style[0], style[1]);
    });
  }

  showError(errors: ValidationErrors | null): void {
    this.span = this.renderer.createElement("span");
    (this.span as HTMLElement).innerHTML = this.getValidationMessage(errors);
    this.renderer.appendChild(this.container, this.span);
    this.setSpanStyles();
  }

  hideError(): void {
    if (this.container && this.span) {
      this.renderer.removeChild(this.container, this.span);
      this.span = null;
    }
  }

  getValidationMessage(errors: ValidationErrors | null): string {
    return errors ? Object.values(errors)[0] : "Invalid Input.";
  }
}
