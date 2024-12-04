/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { ChangeDetectorRef, Renderer2 } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import * as i0 from "@angular/core";
/**
 * @internal
 * @description
 * A component showing the validation error to the user
 */
export declare class ValidationErrorComponent extends BaseComponent {
    readonly renderer: Renderer2;
    readonly changeDetectorRef: ChangeDetectorRef;
    defaultClass: string;
    error: string;
    constructor(renderer: Renderer2, changeDetectorRef: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ValidationErrorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ValidationErrorComponent, "ng-component", never, { "error": { "alias": "error"; "required": false; }; }, {}, never, never, true, never>;
}
