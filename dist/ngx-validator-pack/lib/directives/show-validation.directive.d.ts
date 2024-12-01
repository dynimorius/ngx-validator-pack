/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { ElementRef, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
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
export declare class ShowValidationDirective implements OnInit, OnDestroy {
    private readonly viewContainerRef;
    private readonly elementRef;
    private readonly renderer;
    private readonly control;
    controlSub: Subscription;
    self: HTMLElement;
    retrievedStyles: CSSStyleDeclaration;
    vClass: string;
    vStyle: string;
    constructor(viewContainerRef: ViewContainerRef, elementRef: ElementRef, renderer: Renderer2, control: NgControl);
    ngOnInit(): void;
    ngOnDestroy(): void;
    showError(errors: ValidationErrors | null): void;
    hideError(): void;
    getValidationMessage(errors: ValidationErrors | null): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShowValidationDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ShowValidationDirective, "[showValidation]", never, { "vClass": { "alias": "vClass"; "required": false; }; "vStyle": { "alias": "vStyle"; "required": false; }; }, {}, never, never, true, never>;
}
