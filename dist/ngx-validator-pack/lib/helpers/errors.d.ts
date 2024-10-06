/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { AbstractControl } from "@angular/forms";
export declare const setErrors: (control: AbstractControl, error: {
    [key: string]: unknown;
}) => void;
export declare const removeErrors: (control: AbstractControl, keys: string[]) => void;
