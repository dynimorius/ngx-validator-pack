import { ComponentRef, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @internal
 * @description
 * A base directive which will show a validation error message to the
 * user.
 */
export declare abstract class BaseValidationDirective {
    readonly viewContainerRef: ViewContainerRef;
    readonly elementRef: ElementRef;
    readonly renderer: Renderer2;
    readonly control: NgControl;
    controlSub: Subscription;
    valErrorComponentRef: ComponentRef<unknown>;
    self: HTMLElement;
    retrievedStyles: CSSStyleDeclaration;
    vClass: string;
    vStyle: string;
    constructor(viewContainerRef: ViewContainerRef, elementRef: ElementRef, renderer: Renderer2, control: NgControl);
    abstract checked: boolean;
    abstract setComponentRef(): ComponentRef<unknown>;
    abstract getValidationMessage(errors: ValidationErrors | null): string | string[];
    ngOnInit(): void;
    ngOnDestroy(): void;
    showError(errors: ValidationErrors | null): void;
    hideError(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseValidationDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BaseValidationDirective, "[]", never, { "vClass": { "alias": "vClass"; "required": false; }; "vStyle": { "alias": "vStyle"; "required": false; }; }, {}, never, never, true, never>;
}
