/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { ComparisonOperations } from "../helpers/date";
export declare const regexpValidation: (control: AbstractControl, config: {
    regExp: RegExp;
    error?: string;
    errorName?: string;
}) => ValidationErrors | null;
export declare const regexpNotValidation: (control: AbstractControl, config: {
    regExp: RegExp;
    error?: string;
    errorName?: string;
}) => ValidationErrors | null;
export declare const earlierThenValidation: (control: AbstractControl, config: {
    date: Date;
    error?: string;
    errorName?: string;
}) => ValidationErrors | null;
export declare const laterThenValidation: (control: AbstractControl, config: {
    date: Date;
    error?: string;
    errorName?: string;
}) => ValidationErrors | null;
export declare const compareToValidation: (control: AbstractControl, config: {
    fieldName: string;
    comparison: ComparisonOperations;
    error?: string;
    errorName?: string;
}) => ValidationErrors | null;
export declare const requiredWhenValidation: (control: AbstractControl, config: {
    conditional: (() => boolean) | boolean;
    error?: string;
    errorName?: string;
}) => ValidationErrors | null;
export declare const linkToValidation: (control: AbstractControl, config: {
    link: string;
    error?: string;
    errorName?: string;
}) => ValidationErrors | null;
export declare const linkedToValidation: (control: AbstractControl, config: {
    link: string;
    error?: string;
    errorName?: string;
}) => ValidationErrors | null;
