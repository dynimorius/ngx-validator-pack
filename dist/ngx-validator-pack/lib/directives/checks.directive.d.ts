/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { AfterViewInit, ComponentRef, ElementRef, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { ChecksComponent } from '../components/checks/checks.component';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ChecksDirective implements OnInit, AfterViewInit {
    private readonly viewContainerRef;
    private readonly elementRef;
    private readonly renderer;
    private readonly control;
    checkComponentRef: ComponentRef<ChecksComponent>;
    controlSub: Subscription;
    self: HTMLElement;
    retrievedStyles: CSSStyleDeclaration;
    checks: {
        [key: string]: string;
    };
    vClass: string;
    vStyle: string;
    constructor(viewContainerRef: ViewContainerRef, elementRef: ElementRef, renderer: Renderer2, control: NgControl);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    resetErrors(formControl: FormControl): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChecksDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ChecksDirective, "[checks]", never, { "checks": { "alias": "checks"; "required": false; }; "vClass": { "alias": "vClass"; "required": false; }; "vStyle": { "alias": "vStyle"; "required": false; }; }, {}, never, never, true, never>;
}
