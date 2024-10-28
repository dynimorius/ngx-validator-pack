/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { AbstractControl, ValidationErrors } from "@angular/forms";
export declare function regExpBase(control: AbstractControl, config: {
    regExp: RegExp;
    error?: string;
    errorName?: string;
}, logic: "!" | "!!"): ValidationErrors | null;
