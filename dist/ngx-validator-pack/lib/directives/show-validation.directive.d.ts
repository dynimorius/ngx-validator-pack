/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { ElementRef, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { NgControl, ValidationErrors } from "@angular/forms";
import { Subscription } from "rxjs";
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
 *  [errorStyle]="{                  - Optional style input
 *    font_size: 'medium',              used for customizing the look
 *    color: '#ad03fc',
 *  }"
 * />
 */
export declare class ShowValidationDirective implements OnInit, OnDestroy {
    private readonly elementRef;
    private readonly renderer;
    private readonly control;
    controlSub: Subscription;
    parent: HTMLElement;
    self: HTMLElement;
    container: HTMLElement;
    span: HTMLElement | null;
    retrievedStyles: CSSStyleDeclaration;
    errorStyle: {
        [key: string]: string;
    };
    constructor(elementRef: ElementRef, renderer: Renderer2, control: NgControl);
    ngOnInit(): void;
    ngOnDestroy(): void;
    setContainerStyles(): void;
    setSpanStyles(): void;
    setZIndex(): void;
    setStyles(element: HTMLElement | null, styles: {
        [key: string]: string;
    }): void;
    showError(errors: ValidationErrors | null): void;
    hideError(): void;
    getValidationMessage(errors: ValidationErrors | null): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShowValidationDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ShowValidationDirective, "[showValidation]", never, { "errorStyle": { "alias": "errorStyle"; "required": false; }; }, {}, never, never, true, never>;
}
