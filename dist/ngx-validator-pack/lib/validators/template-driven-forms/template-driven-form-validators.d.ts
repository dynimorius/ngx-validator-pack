import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { CompareValidationConfig, ConditionalValidationConfig, CountValidationConfig, DateValidationConfig, LengthValidationConfig, LinkValidationConfig, RangeValidationConfig, RegExpValidationConfig } from '../../interfaces/validation-config.interface';
import * as i0 from "@angular/core";
/**
 * @publicApi
 * @description
 * A Directive that preforms a RegEx check on value in the given
 * FromControl / AbstractControl
 *
 * Has an input in which you specify the regular expression
 * and optionally you can give it a custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="regexp"
 *   [regExp]="{
 *      regExp: /(s|regexp)/,
 *      errorName: 'regexpCheck',
 *      error: 'Failed regexp check.'
 *   }"
 * />
 */
export declare class RegExpValidatorDirective implements Validator {
    value: RegExpValidationConfig;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<RegExpValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RegExpValidatorDirective, "[regExp]", never, { "value": { "alias": "regExp"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @publicApi
 * @description
 * A Directive that preforms a date comparison between a specified date
 * and a date in the given input and returns an error if the date in
 * the given input is later then the specified one.
 *
 * Has an input in which you specify the date to compare to
 * and optionally you can give it a custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="earlierThen"
 *   [earlierThen]="{
 *      date: date,                              -- a variable of type Date
 *      errorName: 'earlierThen',
 *      error: 'The date is not earlier then the specified one.'
 *   }"
 * />
 */
export declare class EarlierThenValidatorDirective implements Validator {
    value: DateValidationConfig;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<EarlierThenValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EarlierThenValidatorDirective, "[earlierThen]", never, { "value": { "alias": "earlierThen"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @publicApi
 * @description
 * A Directive that preforms a date comparison between a specified date
 * and a date in the given input and returns an error if the date in
 * the given input is earlier then the specified one.
 *
 * Has an input in which you specify the date to compare to
 * and optionally you can give it a custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="laterThen"
 *   [laterThen]="{
 *      date: date,                              -- a variable of type Date
 *      errorName: 'laterThen',
 *      error: 'The date is not later then the specified one.'
 *   }"
 * />
 */
export declare class LaterThenValidatorDirective implements Validator {
    value: DateValidationConfig;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<LaterThenValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LaterThenValidatorDirective, "[laterThen]", never, { "value": { "alias": "laterThen"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @publicApi
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
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="compareTo"
 *   [compareTo]="{
 *      date: date,                              -- a variable of type Date
 *      comparison: '==='
 *      errorName: 'compareTo',
 *      error: 'The dates are not the same.'
 *   }"
 * />
 */
export declare class CompareToValidatorDirective implements Validator {
    value: CompareValidationConfig;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompareToValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CompareToValidatorDirective, "[compareTo]", never, { "value": { "alias": "compareTo"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @publicApi
 * @description
 * A Directive that preforms a conditional check and if the condition
 * passes it will return an error.
 *
 * Has an input in which you specify the condition that is to be checked
 * and optionally you can give it a custom name and a custom error
 * content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="requiredWhen"
 *   [requiredWhen]="{
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
    value: ConditionalValidationConfig;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<RequiredWhenValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RequiredWhenValidatorDirective, "[requiredWhen]", never, { "value": { "alias": "requiredWhen"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @publicApi
 * @description
 * A Directive that preforms a check if the specified FromControl / AbstractControl
 * has a value and a given input does not.
 *
 * Has an input in which you the name of the FromControl / AbstractControl to link
 * to and optionally you can give it a custom name and a custom error
 * content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="linkTo"
 *   [linkTo]="{
 *      link: 'linkedTo,                      - a name of a form control we want
 *      errorName: 'linkTo',                     to link the input to
 *      error: 'The linked input has a value but this one does not'
 *   }"
 * />
 */
export declare class LinkToValidatorDirective implements Validator {
    value: LinkValidationConfig;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<LinkToValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LinkToValidatorDirective, "[linkTo]", never, { "value": { "alias": "linkTo"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @publicApi
 * @description
 * A Directive that preforms a check if the specified FromControl / AbstractControl
 * does not have a value and a given input does.
 *
 * Has an input in which you the name of the FromControl / AbstractControl to link
 * to and optionally you can give it a custom name and a custom error
 * content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="linkedTo"
 *   [linkedTo]="{
 *      link: 'linkTo,                      - a name of a form control we want
 *      errorName: 'linkedTo',                     to link the input to
 *      error: 'The linked input does not have a value but this one does.'
 *   }"
 * />
 */
export declare class LinkedToValidatorDirective implements Validator {
    value: LinkValidationConfig;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<LinkedToValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LinkedToValidatorDirective, "[linkedTo]", never, { "value": { "alias": "linkedTo"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @publicApi
 * @description
 * A Directive that preforms a check on a specified FromControl / AbstractControl's
 * value and returns an error if the given comparison fails.
 *
 * Has an input in which you specify the length to compere to and the comparison
 * to preform. Optionally you can give it a custom name and a custom error
 * content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="length"
 *   [length]="{
 *      length: 8,
 *      comparison: ">",
 *      errorName: 'length',
 *      error: 'Value is not long enough.'
 *   }"
 * />
 */
export declare class LengthValidatorDirective implements Validator {
    value: LengthValidationConfig;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<LengthValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LengthValidatorDirective, "[length]", never, { "value": { "alias": "length"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @publicApi
 * @description
 * A Directive that preforms a check on a specified FromControl / AbstractControl's
 * value and returns an error if the value is not in the specified range.
 *
 * Has an input in which you specify the range start value, range end value
 * and optionally you can give it a custom name and a custom error content / message.
 *
 * NOTE: The range is inclusive.
 *
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="range"
 *   [range]="{
 *      start: 8,
 *      end: 14,
 *      errorName: 'range',
 *      error: 'Value is not in the specified range.'
 *   }"
 * />
 */
export declare class RangeValidatorDirective implements Validator {
    value: RangeValidationConfig;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<RangeValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RangeValidatorDirective, "[range]", never, { "value": { "alias": "range"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @publicApi
 * @description
 * A Directive that preforms a check on a specified FromControl / AbstractControl's
 * value and returns an error if it doesn't have a required word count.
 *
 * Has an input in which you specify the word count to compere to and the comparison
 * to preform. Optionally you can give it a custom name and a custom error
 * content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="wordCount"
 *   [wordCount]="{
 *      count: 8,
 *      comparison: ">",
 *      errorName: 'wordCount',
 *      error: 'The minimum required word count is 8.'
 *   }"
 * />
 */
export declare class WordCountValidatorDirective implements Validator {
    value: CountValidationConfig;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<WordCountValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<WordCountValidatorDirective, "[wordCount]", never, { "value": { "alias": "wordCount"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @publicApi
 * @description
 * A Directive that preforms a check on a specified FromControl / AbstractControl's
 * value and returns an error if the value is not in the specified word count range.
 *
 * Has an input in which you specify the range start value, range end value
 * and optionally you can give it a custom name and a custom error content / message.
 *
 * NOTE: The range is inclusive.
 *
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="wordCountRange"
 *   [wordCountRange]="{
 *      start: 8,
 *      end: 14,
 *      errorName: 'wordCountRange',
 *      error: 'Value is not in the specified word count range.'
 *   }"
 * />
 */
export declare class WordCountRangeValidatorDirective implements Validator {
    value: RangeValidationConfig;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<WordCountRangeValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<WordCountRangeValidatorDirective, "[wordCountRange]", never, { "value": { "alias": "wordCountRange"; "required": false; }; }, {}, never, never, true, never>;
}
