/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { AbstractControl } from "@angular/forms";
/**
 * @description
 * Sets an error on a given control
 *
 * @param {AbstractControl}           - FromControl / AbstractControl to set the error to
 * @param {{ [key: string]: unknown }}- error content
 */
export declare const setErrors: (control: AbstractControl, error: {
    [key: string]: unknown;
}) => void;
/**
 * @description
 * Removes errors on a given control
 *
 * @param {AbstractControl}           - FromControl / AbstractControl from which
 *                                      to remove error
 * @param {string[]}                  - list of error names
 */
export declare const removeErrors: (control: AbstractControl, keys: string[]) => void;
