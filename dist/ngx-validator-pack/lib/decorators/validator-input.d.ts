/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @description
 * An decorator which handles the input value in directives which extend the
 * {@link RegExpValidatorDirective} and have an expected input in the form of
 * {@link RegExpValidationInput}.
 *
 * It will populate the error and the errorName values passed to it if it doesn't find
 * them in the input value.
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - parameter representing error name
 * @param {string}                    - parameter representing error value
 */
export declare function RegExpValidatorInput(regexp: RegExp, errorName: string, error: string): (target: any, propertyKey: string) => void;
