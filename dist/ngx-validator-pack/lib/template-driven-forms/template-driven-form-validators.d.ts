/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { CompareValidationInput, ConditionalValidationInput, DateValidationInput, LinkValidationInput } from "./../interfaces/directive-input.interface";
import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";
import { RegExpValidationInput } from "../interfaces/directive-input.interface";
import * as i0 from "@angular/core";
/**
 * @description
 * A Directive that preforms a RegEx check on value in the given
 * FromControl / AbstractControl
 *
 * Has an input in which you specify the regular expression
 * and optionally you can give it a custom name and a custom
 * error content / message.
 *
 * @example
 *  <input
 *    type="text"
 *    name="regexp"
 *    id="regexp"
 *    formControlName="regexp"
 *   [regexpValidation]="{
 *      regExp: /(s|regexp)/,
 *      errorName: 'regexpCheck',
 *      error: 'Failed regexp check.'
 *   }"
 * />
 */
export declare class RegExpValidatorDirective implements Validator {
    value: RegExpValidationInput;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<RegExpValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RegExpValidatorDirective, "[regexpValidation]", never, { "value": { "alias": "regexpValidation"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @description
 * A Directive that preforms a RegEx check on value in the given
 * FromControl / AbstractControl and returns an error if regex
 * found a match
 *
 * Has an input in which you specify the regular expression
 * and optionally you can give it a custom name and a custom
 * error content / message.
 *
 * @example
 *  <input
 *    type="text"
 *    name="regexpNot"
 *    id="regexpNot"
 *    formControlName="regexpNot"
 *   [regexpNotValidation]="{
 *      regExp: /(s|regexp)/,
 *      errorName: 'regexpNotCheck',
 *      error: 'Failed regexpNot check.'
 *   }"
 * />
 */
export declare class RegExpNotValidatorDirective implements Validator {
    value: RegExpValidationInput;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<RegExpNotValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RegExpNotValidatorDirective, "[regexpNotValidation]", never, { "value": { "alias": "regexpNotValidation"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @description
 * A Directive that preforms a date comparison between a specified date
 * and a date in the given input and returns an error if the date in
 * the given input is later then the specified one.
 *
 * Has an input in which you specify the date to compare to
 * and optionally you can give it a custom name and a custom
 * error content / message.
 *
 * @example
 *  <input
 *    type="text"
 *    name="earlierThen"
 *    id="earlierThen"
 *    formControlName="earlierThen"
 *   [earlierThenValidation]="{
 *      date: date,                              -- a variable of type Date
 *      errorName: 'earlierThen',
 *      error: 'The date is not earlier then the specified one.'
 *   }"
 * />
 */
export declare class EarlierThenValidatorDirective implements Validator {
    value: DateValidationInput;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<EarlierThenValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EarlierThenValidatorDirective, "[earlierThenValidation]", never, { "value": { "alias": "earlierThenValidation"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @description
 * A Directive that preforms a date comparison between a specified date
 * and a date in the given input and returns an error if the date in
 * the given input is earlier then the specified one.
 *
 * Has an input in which you specify the date to compare to
 * and optionally you can give it a custom name and a custom
 * error content / message.
 *
 * @example
 *  <input
 *    type="text"
 *    name="laterThen"
 *    id="laterThen"
 *    formControlName="laterThen"
 *   [laterThenValidation]="{
 *      date: date,                              -- a variable of type Date
 *      errorName: 'laterThen',
 *      error: 'The date is not later then the specified one.'
 *   }"
 * />
 */
export declare class LaterThenValidatorDirective implements Validator {
    value: DateValidationInput;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<LaterThenValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LaterThenValidatorDirective, "[laterThenValidation]", never, { "value": { "alias": "laterThenValidation"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @description
 * A Directive that preforms a date comparison between a specified date
 * and a date in the given input and returns an error if chosen comparison
 * fails.
 *
 * Has an input in which you specify the date to compare to,
 * comparison to preform and optionally you can give it a custom name
 * and a custom error content / message.
 *
 * Available comparisons are: '<' , '>' , '==' , '===' , '<=' , '>='.
 *
 * @example
 *  <input
 *    type="text"
 *    name="compareTo"
 *    id="compareTo"
 *    formControlName="compareTo"
 *   [compareToValidation]="{
 *      date: date,                              -- a variable of type Date
 *      comparison: '==='
 *      errorName: 'compareTo',
 *      error: 'The dates are not the same.'
 *   }"
 * />
 */
export declare class CompareToValidatorDirective implements Validator {
    value: CompareValidationInput;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompareToValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CompareToValidatorDirective, "[compareToValidation]", never, { "value": { "alias": "compareToValidation"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @description
 * A Directive that preforms a conditional check and if the condition
 * passes it will return an error.
 *
 * Has an input in which you specify the condition that is to be checked
 * and optionally you can give it a custom name and a custom error
 * content / message.
 *
 * @example
 *  <input
 *    type="text"
 *    name="requiredWhen"
 *    id="requiredWhen"
 *    formControlName="requiredWhen"
 *   [requiredWhenValidation]="{
 *      conditional: isTrue,                     - this can be ether a boolean
 *      errorName: 'requiredWhen',                     or a function that returns a boolean
 *      error: 'The condition is true.'
 *   }"
 * />
 *
 * NOTE: It is not recommended to pass a function to be executed in the template,
 * as this function will be executed every change detection cycle.
 */
export declare class RequiredWhenValidatorDirective implements Validator {
    value: ConditionalValidationInput;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<RequiredWhenValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RequiredWhenValidatorDirective, "[requiredWhenValidation]", never, { "value": { "alias": "requiredWhenValidation"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @description
 * A Directive that preforms a check if the specified FromControl / AbstractControl
 * has a value and a given input does not.
 *
 * Has an input in which you the name of the FromControl / AbstractControl to link
 * to and optionally you can give it a custom name and a custom error
 * content / message.
 *
 * @example
 *  <input
 *    type="text"
 *    name="linkTo"
 *    id="linkTo"
 *    formControlName="linkTo"
 *   [linkToValidation]="{
 *      link: 'linkedTo,                      - a name of a form control we want
 *      errorName: 'linkTo',                     to link the input to
 *      error: 'The linked input has a value but this one does not'
 *   }"
 * />
 */
export declare class LinkToValidatorDirective implements Validator {
    value: LinkValidationInput;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<LinkToValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LinkToValidatorDirective, "[linkToValidation]", never, { "value": { "alias": "linkToValidation"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @description
 * A Directive that preforms a check if the specified FromControl / AbstractControl
 * does not have a value and a given input does.
 *
 * Has an input in which you the name of the FromControl / AbstractControl to link
 * to and optionally you can give it a custom name and a custom error
 * content / message.
 *
 * @example
 *  <input
 *    type="text"
 *    name="linkedTo"
 *    id="linkedTo"
 *    formControlName="linkedTo"
 *   [linkedToValidation]="{
 *      link: 'linkTo,                      - a name of a form control we want
 *      errorName: 'linkedTo',                     to link the input to
 *      error: 'The linked input does not have a value but this one does.'
 *   }"
 * />
 */
export declare class LinkedToValidatorDirective implements Validator {
    value: LinkValidationInput;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<LinkedToValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LinkedToValidatorDirective, "[linkedToValidation]", never, { "value": { "alias": "linkedToValidation"; "required": false; }; }, {}, never, never, true, never>;
}
