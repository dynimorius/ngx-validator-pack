/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { AbstractControl, ValidationErrors } from "@angular/forms";
/**
 * @internal
 * @description
 * Sets an error on a given control
 *
 * @param control                     - FromControl / AbstractControl to set the error to
 * @param error                       - error content { [key: string]: unknown }
 */
export declare const setErrors: (control: AbstractControl, error: ValidationErrors) => void;
/**
 * @internal
 * @description
 * Removes errors on a given control
 *
 * @param control                     - FromControl / AbstractControl from which
 *                                      to remove error
 * @param keys                        - array of error names
 */
export declare const removeErrors: (control: AbstractControl, keys: string[]) => void;
