/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { BaseValidationInput, RegExpValidationInput } from "../interfaces/directive-input.interface";

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
export function RegExpValidatorInput(
  regexp: RegExp,
  errorName: string,
  error: string
): (target: any, propertyKey: string) => void {
  return function (target: any, propertyKey: string) {
    type ObjectKey = keyof typeof target;
    let original: BaseValidationInput = target[propertyKey as ObjectKey];
    
    let newData: BaseValidationInput = {
     ...original
    };

    const getter = function (): RegExpValidationInput {
      (newData as RegExpValidationInput) = {
        regExp: regexp,
        errorName: newData.errorName ?? errorName,
        error: newData.error ?? error
      }
      return newData as RegExpValidationInput;
    };

    const setter = function (val: RegExpValidationInput) {
      newData = val;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}
