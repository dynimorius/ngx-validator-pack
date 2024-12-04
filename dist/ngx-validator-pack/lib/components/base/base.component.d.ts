/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { ChangeDetectorRef, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BaseComponent implements AfterViewInit {
    readonly renderer: Renderer2;
    readonly changeDetectorRef: ChangeDetectorRef;
    content: HTMLDivElement;
    _class: string;
    defaultClass: string;
    zIndex: string | number;
    style: string;
    set class(css: string | undefined | null);
    contentRef: ElementRef;
    constructor(renderer: Renderer2, changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseComponent, "ng-component", never, { "zIndex": { "alias": "zIndex"; "required": false; }; "style": { "alias": "style"; "required": false; }; "class": { "alias": "class"; "required": false; }; }, {}, never, never, true, never>;
}
