/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { SequenceConfig } from "../interfaces/sequence-config.interface";
import { ComparisonOperations } from "../types";
/**
 * @internal
 * @description
 * A validation function which preforms a RegEx check on value in the
 * given FromControl / AbstractControl.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       regexp to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}  - Validation error
 */
export declare const regexpValidation: (control: AbstractControl, config: {
    regExp: RegExp;
    error?: string;
    errorName?: string;
}) => ValidationErrors | null;
/**
 * @internal
 * @description
 * A validation function which preforms a RegEx check on value in the
 * given FromControl / AbstractControl.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       regexp to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}          - Validation error
 */
export declare const regexpNotValidation: (control: AbstractControl, config: {
    regExp: RegExp;
    error?: string;
    errorName?: string;
}) => ValidationErrors | null;
/**
 * @internal
 * @description
 * A validation function which checks if the date in the given
 * FromControl / AbstractControl is earlier then the value in the specified
 * FromControl / AbstractControl.
 *
 * @param {AbstractControl}                    - form control
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       date to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
export declare const earlierThenValidation: (control: AbstractControl, config: {
    date: Date;
    error?: string;
    errorName?: string;
}) => ValidationErrors | null;
/**
 * @internal
 * @description
 * A validation function which checks if the date in the given
 * FromControl / AbstractControl is greater then the value in the specified
 * FromControl / AbstractControl.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       date to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}     - Validation error
 */
export declare const laterThenValidation: (control: AbstractControl, config: {
    date: Date;
    error?: string;
    errorName?: string;
}) => ValidationErrors | null;
/**
 * @internal
 * @description
 * A validation function which compares the date values of the given
 * FromControl / AbstractControl and specified FromControl / AbstractControl.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       field name to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
export declare const compareToValidation: (control: AbstractControl, config: {
    fieldName: string;
    comparison: ComparisonOperations;
    error?: string;
    errorName?: string;
}) => ValidationErrors | null;
/**
 * @internal
 * @description
 * A validation function which returns a validation error if a condition is met.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       conditional function or boolean to check
 *                                       and optional error and error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
export declare const requiredWhenValidation: (control: AbstractControl, config: {
    conditional: (() => boolean) | boolean;
    error?: string;
    errorName?: string;
}) => ValidationErrors | null;
/**
 * @internal
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl has no value and specified
 * FromControl / AbstractControl has it.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       field name to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
export declare const linkToValidation: (control: AbstractControl, config: {
    link: string;
    error?: string;
    errorName?: string;
}) => ValidationErrors | null;
/**
 * @internal
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl has a value and specified
 * FromControl / AbstractControl does not.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       field name to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
export declare const linkedToValidation: (control: AbstractControl, config: {
    link: string;
    error?: string;
    errorName?: string;
}) => ValidationErrors | null;
export declare const lengthValidation: (control: AbstractControl, config: {
    length: number;
    comparison: ComparisonOperations;
    error?: string;
    errorName?: string;
}) => ValidationErrors | null;
export declare const sequentialValidation: (control: AbstractControl, sequence: SequenceConfig[]) => ValidationErrors | null;
