/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { SequenceConfig } from "../interfaces/sequence-config.interface";
import { CompareValidationConfig, ConditionalValidationConfig, DateValidationConfig, LengthValidationConfig, LinkValidationConfig, RangeValidationConfig, RegExpValidationConfig } from "../interfaces/validation-config.interface";
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
export declare const regexpValidation: (control: AbstractControl, config: RegExpValidationConfig) => ValidationErrors | null;
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
export declare const earlierThenValidation: (control: AbstractControl, config: DateValidationConfig) => ValidationErrors | null;
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
export declare const laterThenValidation: (control: AbstractControl, config: DateValidationConfig) => ValidationErrors | null;
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
export declare const compareToValidation: (control: AbstractControl, config: CompareValidationConfig) => ValidationErrors | null;
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
export declare const requiredWhenValidation: (control: AbstractControl, config: ConditionalValidationConfig) => ValidationErrors | null;
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
export declare const linkToValidation: (control: AbstractControl, config: LinkValidationConfig) => ValidationErrors | null;
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
 * @returns {ValidationErrors | null}  - Validation error
 */
export declare const linkedToValidation: (control: AbstractControl, config: LinkValidationConfig) => ValidationErrors | null;
/**
 * @internal
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl has a value that fails a given
 * length comparison.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       length to check, comparison to preform
 *                                       and optional error and error name string
 * @returns {ValidationErrors | null}  - Validation error
 */
export declare const lengthValidation: (control: AbstractControl, config: LengthValidationConfig) => ValidationErrors | null;
/**
 * @internal
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl value is not in a given range.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       start value to check and end value to check
 *                                       as well as optional error and error name string
 * @returns {ValidationErrors | null}  - Validation error
 */
export declare const rangeValidation: (control: AbstractControl, config: RangeValidationConfig) => ValidationErrors | null;
/**
 * @internal
 * @description
 * A validation function which returns a validation error if any
 * of the validations from the given sequence return an error.
 * The sequence order meters as the first fail will be returned.
 *
 * @param control                      - form control
 * @param sequence                     - sequence of configs that consists of
 *                                       validation functions and configs for those
 *                                       functions.
 * @returns {ValidationErrors | null}  - Validation error
 */
export declare const sequentialValidation: (control: AbstractControl, sequence: SequenceConfig[]) => ValidationErrors | null;
