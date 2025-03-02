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
  ViewContainerRef,
} from '@angular/core';
import { FormControl, NgControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ValidationErrorComponent } from '../components/validation-error/validation-error.component';

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
 *  [vClass]="customClass"            - Optional param of a custom class
 * />
 */
@Directive({
  selector: '[showValidation]',
  standalone: true,
})
export class ShowValidationDirective implements OnInit, OnDestroy {
  controlSub: Subscription = new Subscription();
  self!: HTMLElement;
  retrievedStyles!: CSSStyleDeclaration;

  @Input() vClass!: string;
  @Input() vStyle!: string;

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
    private readonly control: NgControl
  ) {}

  ngOnInit(): void {
    const formControl = this.control.control as FormControl;
    this.self = this.elementRef.nativeElement;
    this.retrievedStyles = getComputedStyle(this.self);

    this.controlSub.add(
      formControl.statusChanges.subscribe((status): void => {
        this.hideError();
        if (status === 'INVALID') {
          this.showError(formControl.errors);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.controlSub.unsubscribe();
  }

  showError(errors: ValidationErrors | null): void {
    const valErrorComponentRef = this.viewContainerRef.createComponent(
      ValidationErrorComponent
    );
    valErrorComponentRef.setInput('error', this.getValidationMessage(errors));
    const indexNum = Number.parseInt(this.retrievedStyles.zIndex);
    const zIndex = Number.isNaN(indexNum) ? 1 : indexNum;
    this.renderer.setStyle(this.self, 'zIndex', `${zIndex}`);
    valErrorComponentRef.setInput('zIndex', `${zIndex - 1}`);
    valErrorComponentRef.setInput('class', this.vClass);
    valErrorComponentRef.setInput('style', this.vStyle);
  }

  hideError(): void {
    this.viewContainerRef.clear();
  }

  getValidationMessage(errors: ValidationErrors | null): string {
    return errors ? Object.values(errors)[0] : 'Invalid Input.';
  }
}
