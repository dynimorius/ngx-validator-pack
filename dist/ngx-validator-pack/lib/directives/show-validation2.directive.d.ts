import { ElementRef, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ShowValidation2Directive implements OnInit, OnDestroy {
    private viewContainerRef;
    private readonly elementRef;
    private renderer;
    private readonly control;
    controlSub: Subscription;
    self: HTMLElement;
    retrievedStyles: CSSStyleDeclaration;
    constructor(viewContainerRef: ViewContainerRef, elementRef: ElementRef, renderer: Renderer2, control: NgControl);
    ngOnInit(): void;
    ngOnDestroy(): void;
    showError(errors: ValidationErrors | null): void;
    hideError(): void;
    getValidationMessage(errors: ValidationErrors | null): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShowValidation2Directive, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ShowValidation2Directive, "[dmzShowValidation2]", never, {}, {}, never, never, true, never>;
}
