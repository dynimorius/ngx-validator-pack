/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { ValidationErrors } from "@angular/forms";
import { CountValidationConfig, LengthValidationConfig, RegExpValidationConfig } from "./validation-config.interface";
/**
 * @publicApi
 * @description
 * Represents a config for a validation that will be preformed in
 * a sequence.
 *
 * Consists of a validation function and an option config for
 * that function.
 */
export interface SequenceConfig {
    validationFun: (...args: any[]) => ValidationErrors | null;
    validationFunConfig?: {
        [key: string]: any;
    };
}
/**
 * @publicApi
 */
export interface PasswordConfigs {
    noAlpha?: RegExpValidationConfig;
    noNumeric?: RegExpValidationConfig;
    noLowercase?: RegExpValidationConfig;
    noUppercase?: RegExpValidationConfig;
    noSpecial?: RegExpValidationConfig;
    greaterOrLessThen?: RegExpValidationConfig;
    minLength?: LengthValidationConfig;
}
/**
 * @publicApi
 */
export interface WordCountConfigs {
    min: CountValidationConfig;
    max: CountValidationConfig;
}
