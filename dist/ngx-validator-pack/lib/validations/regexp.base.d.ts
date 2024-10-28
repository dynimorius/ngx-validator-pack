/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { RegExpValidationConfig } from "../interfaces/validation-config.interface";
export declare function regExpBase(control: AbstractControl, config: RegExpValidationConfig, logic: "!" | "!!"): ValidationErrors | null;
