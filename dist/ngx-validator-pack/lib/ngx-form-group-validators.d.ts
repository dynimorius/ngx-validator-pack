/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { AbstractControl, ValidationErrors } from "@angular/forms";
export declare const requiredIf: (requiredControlName: string, controlToCheckName: string) => (control: AbstractControl) => ValidationErrors | null;
export declare const requiredIfNot: (requiredControlName: string, controlToCheckName: string) => (control: AbstractControl) => ValidationErrors | null;
export declare const requiredEther: (requiredControlName: string, controlToCheckName: string) => (control: AbstractControl) => ValidationErrors | null;
