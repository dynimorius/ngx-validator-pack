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
 * A validation function which assigns a required error to the controls with a name that
 * was specified in the requiredControlName filed of the config parameter if the control
 * with a name specified in the controlToCheckName parameter has no value.
 *
 * @param control                      - form group
 * @param config                       - config parameter, consists of a
 *                                       required field name, a field name to check and optional
 *                                       error string
 * @returns {ValidationErrors | null}   - Validation error
 */
export declare const requiredIfValidation: (control: AbstractControl, config: {
    required: string;
    check: string;
    error?: string;
}) => ValidationErrors | null;
/**
 * @internal
 * @description
 * A validation function which assigns a required error to the controls with a name that
 * was specified in the requiredControlName field of the config parameter if the control
 * with a name specified in the controlToCheckName parameter has a value.
 *
 * @param control                      - form group
 * @param config                       - config parameter, consists of a
 *                                       required field name, a field name to check and optional
 *                                       error string
 * @returns {ValidationErrors | null}   - Validation error
 */
export declare const requiredIfNotValidation: (control: AbstractControl, config: {
    required: string;
    check: string;
    error?: string;
}) => ValidationErrors | null;
/**
 * @internal
 * @description
 * A validation function which assigns a required error to the controls with a name that
 * was specified in the requiredControlName field of the config parameter nether that control
 * or the control with a name specified in the controlToCheckName parameter has a value.
 *
 * @param control                      - form group
 * @param config                       - config parameter, consists of a
 *                                       required field name, a field name to check and optional
 *                                       error string
 * @returns {ValidationErrors | null}   - Validation error
 */
export declare const requiredEtherValidation: (control: AbstractControl, config: {
    required: string;
    check: string;
    error?: string;
}) => ValidationErrors | null;
