/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @internal
 */
export declare class CheckedPipe implements PipeTransform {
    transform(value: boolean | null | undefined): unknown;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckedPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<CheckedPipe, "checked", true>;
}
