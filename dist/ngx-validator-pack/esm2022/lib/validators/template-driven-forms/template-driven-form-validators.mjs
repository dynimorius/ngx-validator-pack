/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, } from '@angular/forms';
import { compareToValidation, earlierThenValidation, laterThenValidation, lengthValidation, linkToValidation, linkedToValidation, rangeValidation, regexpValidation, requiredWhenValidation, wordCountRangeValidation, wordCountValidation, } from '../../validations/validations';
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
export class RegExpValidatorDirective {
    validate(control) {
        return regexpValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RegExpValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: RegExpValidatorDirective, isStandalone: true, selector: "[regExp]", inputs: { value: ["regExp", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RegExpValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RegExpValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[regExp]',
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: RegExpValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ['regExp']
            }] } });
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
export class EarlierThenValidatorDirective {
    validate(control) {
        return earlierThenValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EarlierThenValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: EarlierThenValidatorDirective, isStandalone: true, selector: "[earlierThen]", inputs: { value: ["earlierThen", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: EarlierThenValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EarlierThenValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[earlierThen]',
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: EarlierThenValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ['earlierThen']
            }] } });
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
export class LaterThenValidatorDirective {
    validate(control) {
        return laterThenValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LaterThenValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: LaterThenValidatorDirective, isStandalone: true, selector: "[laterThen]", inputs: { value: ["laterThen", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: LaterThenValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LaterThenValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[laterThen]',
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: LaterThenValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ['laterThen']
            }] } });
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
export class CompareToValidatorDirective {
    validate(control) {
        return compareToValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CompareToValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: CompareToValidatorDirective, isStandalone: true, selector: "[compareTo]", inputs: { value: ["compareTo", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: CompareToValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CompareToValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[compareTo]',
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: CompareToValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ['compareTo']
            }] } });
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
export class RequiredWhenValidatorDirective {
    validate(control) {
        return requiredWhenValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RequiredWhenValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: RequiredWhenValidatorDirective, isStandalone: true, selector: "[requiredWhen]", inputs: { value: ["requiredWhen", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RequiredWhenValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RequiredWhenValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[requiredWhen]',
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: RequiredWhenValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ['requiredWhen']
            }] } });
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
export class LinkToValidatorDirective {
    validate(control) {
        return linkToValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LinkToValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: LinkToValidatorDirective, isStandalone: true, selector: "[linkTo]", inputs: { value: ["linkTo", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: LinkToValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LinkToValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[linkTo]',
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: LinkToValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ['linkTo']
            }] } });
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
export class LinkedToValidatorDirective {
    validate(control) {
        return linkedToValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LinkedToValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: LinkedToValidatorDirective, isStandalone: true, selector: "[linkedTo]", inputs: { value: ["linkedTo", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: LinkedToValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LinkedToValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[linkedTo]',
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: LinkedToValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ['linkedTo']
            }] } });
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
export class LengthValidatorDirective {
    validate(control) {
        return lengthValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LengthValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: LengthValidatorDirective, isStandalone: true, selector: "[length]", inputs: { value: ["length", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: LengthValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LengthValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[length]',
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: LengthValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ['length']
            }] } });
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
export class RangeValidatorDirective {
    validate(control) {
        return rangeValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RangeValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: RangeValidatorDirective, isStandalone: true, selector: "[range]", inputs: { value: ["range", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RangeValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RangeValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[range]',
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: RangeValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ['range']
            }] } });
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
export class WordCountValidatorDirective {
    validate(control) {
        return wordCountValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: WordCountValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: WordCountValidatorDirective, isStandalone: true, selector: "[wordCount]", inputs: { value: ["wordCount", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: WordCountValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: WordCountValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[wordCount]',
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: WordCountValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ['wordCount']
            }] } });
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
export class WordCountRangeValidatorDirective {
    validate(control) {
        return wordCountRangeValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: WordCountRangeValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: WordCountRangeValidatorDirective, isStandalone: true, selector: "[wordCountRange]", inputs: { value: ["wordCountRange", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: WordCountRangeValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: WordCountRangeValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[wordCountRange]',
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: WordCountRangeValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ['wordCountRange']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtZHJpdmVuLWZvcm0tdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3ZhbGlkYXRvcnMvdGVtcGxhdGUtZHJpdmVuLWZvcm1zL3RlbXBsYXRlLWRyaXZlbi1mb3JtLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDaEQsT0FBTyxFQUVILGFBQWEsR0FHaEIsTUFBTSxnQkFBZ0IsQ0FBQTtBQVd2QixPQUFPLEVBQ0gsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLG1CQUFtQixHQUN0QixNQUFNLCtCQUErQixDQUFBOztBQUV0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFZSCxNQUFNLE9BQU8sd0JBQXdCO0lBR2pDLFFBQVEsQ0FBQyxPQUF3QjtRQUM3QixPQUFPLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDdkQsQ0FBQzsrR0FMUSx3QkFBd0I7bUdBQXhCLHdCQUF3QiwrRkFSdEI7WUFDUDtnQkFDSSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsS0FBSyxFQUFFLElBQUk7YUFDZDtTQUNKOzs0RkFFUSx3QkFBd0I7a0JBWHBDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUU7d0JBQ1A7NEJBQ0ksT0FBTyxF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LEtBQUs7dUJBQUMsV0FBVzs7QUFNdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQkc7QUFZSCxNQUFNLE9BQU8sZ0NBQWdDO0lBRXpDLFFBQVEsQ0FBQyxPQUF3QjtRQUM3QixPQUFPLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDL0QsQ0FBQzsrR0FKUSxnQ0FBZ0M7bUdBQWhDLGdDQUFnQywrR0FSOUI7WUFDUDtnQkFDSSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsS0FBSyxFQUFFLElBQUk7YUFDZDtTQUNKOzs0RkFFUSxnQ0FBZ0M7a0JBWDVDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFNBQVMsRUFBRTt3QkFDUDs0QkFDSSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxrQ0FBa0M7NEJBQzdDLEtBQUssRUFBRSxJQUFJO3lCQUNkO3FCQUNKO2lCQUNKOzhCQUU0QixLQUFLO3NCQUE3QixLQUFLO3VCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtcclxuICAgIEFic3RyYWN0Q29udHJvbCxcclxuICAgIE5HX1ZBTElEQVRPUlMsXHJcbiAgICBWYWxpZGF0aW9uRXJyb3JzLFxyXG4gICAgVmFsaWRhdG9yLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xyXG5pbXBvcnQge1xyXG4gICAgQ29tcGFyZVZhbGlkYXRpb25Db25maWcsXHJcbiAgICBDb25kaXRpb25hbFZhbGlkYXRpb25Db25maWcsXHJcbiAgICBDb3VudFZhbGlkYXRpb25Db25maWcsXHJcbiAgICBEYXRlVmFsaWRhdGlvbkNvbmZpZyxcclxuICAgIExlbmd0aFZhbGlkYXRpb25Db25maWcsXHJcbiAgICBMaW5rVmFsaWRhdGlvbkNvbmZpZyxcclxuICAgIFJhbmdlVmFsaWRhdGlvbkNvbmZpZyxcclxuICAgIFJlZ0V4cFZhbGlkYXRpb25Db25maWcsXHJcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy92YWxpZGF0aW9uLWNvbmZpZy5pbnRlcmZhY2UnXHJcbmltcG9ydCB7XHJcbiAgICBjb21wYXJlVG9WYWxpZGF0aW9uLFxyXG4gICAgZWFybGllclRoZW5WYWxpZGF0aW9uLFxyXG4gICAgbGF0ZXJUaGVuVmFsaWRhdGlvbixcclxuICAgIGxlbmd0aFZhbGlkYXRpb24sXHJcbiAgICBsaW5rVG9WYWxpZGF0aW9uLFxyXG4gICAgbGlua2VkVG9WYWxpZGF0aW9uLFxyXG4gICAgcmFuZ2VWYWxpZGF0aW9uLFxyXG4gICAgcmVnZXhwVmFsaWRhdGlvbixcclxuICAgIHJlcXVpcmVkV2hlblZhbGlkYXRpb24sXHJcbiAgICB3b3JkQ291bnRSYW5nZVZhbGlkYXRpb24sXHJcbiAgICB3b3JkQ291bnRWYWxpZGF0aW9uLFxyXG59IGZyb20gJy4uLy4uL3ZhbGlkYXRpb25zL3ZhbGlkYXRpb25zJ1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBSZWdFeCBjaGVjayBvbiB2YWx1ZSBpbiB0aGUgZ2l2ZW5cclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2xcclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSByZWd1bGFyIGV4cHJlc3Npb25cclxuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicmVnZXhwXCJcclxuICogICBbcmVnRXhwXT1cIntcclxuICogICAgICByZWdFeHA6IC8oc3xyZWdleHApLyxcclxuICogICAgICBlcnJvck5hbWU6ICdyZWdleHBDaGVjaycsXHJcbiAqICAgICAgZXJyb3I6ICdGYWlsZWQgcmVnZXhwIGNoZWNrLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbcmVnRXhwXScsXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgICBASW5wdXQoJ3JlZ0V4cCcpIHZhbHVlITogUmVnRXhwVmFsaWRhdGlvbkNvbmZpZ1xyXG5cclxuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSlcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBkYXRlIGNvbXBhcmlzb24gYmV0d2VlbiBhIHNwZWNpZmllZCBkYXRlXHJcbiAqIGFuZCBhIGRhdGUgaW4gdGhlIGdpdmVuIGlucHV0IGFuZCByZXR1cm5zIGFuIGVycm9yIGlmIHRoZSBkYXRlIGluXHJcbiAqIHRoZSBnaXZlbiBpbnB1dCBpcyBsYXRlciB0aGVuIHRoZSBzcGVjaWZpZWQgb25lLlxyXG4gKlxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIGRhdGUgdG8gY29tcGFyZSB0b1xyXG4gKiBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b21cclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJlYXJsaWVyVGhlblwiXHJcbiAqICAgW2VhcmxpZXJUaGVuXT1cIntcclxuICogICAgICBkYXRlOiBkYXRlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tIGEgdmFyaWFibGUgb2YgdHlwZSBEYXRlXHJcbiAqICAgICAgZXJyb3JOYW1lOiAnZWFybGllclRoZW4nLFxyXG4gKiAgICAgIGVycm9yOiAnVGhlIGRhdGUgaXMgbm90IGVhcmxpZXIgdGhlbiB0aGUgc3BlY2lmaWVkIG9uZS4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2VhcmxpZXJUaGVuXScsXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogRWFybGllclRoZW5WYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWFybGllclRoZW5WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gICAgQElucHV0KCdlYXJsaWVyVGhlbicpIHZhbHVlITogRGF0ZVZhbGlkYXRpb25Db25maWdcclxuXHJcbiAgICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIGVhcmxpZXJUaGVuVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSlcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBkYXRlIGNvbXBhcmlzb24gYmV0d2VlbiBhIHNwZWNpZmllZCBkYXRlXHJcbiAqIGFuZCBhIGRhdGUgaW4gdGhlIGdpdmVuIGlucHV0IGFuZCByZXR1cm5zIGFuIGVycm9yIGlmIHRoZSBkYXRlIGluXHJcbiAqIHRoZSBnaXZlbiBpbnB1dCBpcyBlYXJsaWVyIHRoZW4gdGhlIHNwZWNpZmllZCBvbmUuXHJcbiAqXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgZGF0ZSB0byBjb21wYXJlIHRvXHJcbiAqIGFuZCBvcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbVxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImxhdGVyVGhlblwiXHJcbiAqICAgW2xhdGVyVGhlbl09XCJ7XHJcbiAqICAgICAgZGF0ZTogZGF0ZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLSBhIHZhcmlhYmxlIG9mIHR5cGUgRGF0ZVxyXG4gKiAgICAgIGVycm9yTmFtZTogJ2xhdGVyVGhlbicsXHJcbiAqICAgICAgZXJyb3I6ICdUaGUgZGF0ZSBpcyBub3QgbGF0ZXIgdGhlbiB0aGUgc3BlY2lmaWVkIG9uZS4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2xhdGVyVGhlbl0nLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IExhdGVyVGhlblZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXRlclRoZW5WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gICAgQElucHV0KCdsYXRlclRoZW4nKSB2YWx1ZSE6IERhdGVWYWxpZGF0aW9uQ29uZmlnXHJcblxyXG4gICAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiBsYXRlclRoZW5WYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy52YWx1ZSB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIGRhdGUgY29tcGFyaXNvbiBiZXR3ZWVuIGEgc3BlY2lmaWVkIGRhdGVcclxuICogYW5kIGEgZGF0ZSBpbiB0aGUgZ2l2ZW4gaW5wdXQgYW5kIHJldHVybnMgYW4gZXJyb3IgaWYgY2hvc2VuIGNvbXBhcmlzb25cclxuICogZmFpbHMuXHJcbiAqXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgZGF0ZSB0byBjb21wYXJlIHRvLFxyXG4gKiBjb21wYXJpc29uIHRvIHByZWZvcm0gYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWVcclxuICogYW5kIGEgY3VzdG9tIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBBdmFpbGFibGUgY29tcGFyaXNvbnMgYXJlOiAnPCcgLCAnPicgLCAnPT0nICwgJz09PScgLCAnPD0nICwgJz49Jy5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImNvbXBhcmVUb1wiXHJcbiAqICAgW2NvbXBhcmVUb109XCJ7XHJcbiAqICAgICAgZGF0ZTogZGF0ZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLSBhIHZhcmlhYmxlIG9mIHR5cGUgRGF0ZVxyXG4gKiAgICAgIGNvbXBhcmlzb246ICc9PT0nXHJcbiAqICAgICAgZXJyb3JOYW1lOiAnY29tcGFyZVRvJyxcclxuICogICAgICBlcnJvcjogJ1RoZSBkYXRlcyBhcmUgbm90IHRoZSBzYW1lLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbY29tcGFyZVRvXScsXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogQ29tcGFyZVRvVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBhcmVUb1ZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgICBASW5wdXQoJ2NvbXBhcmVUbycpIHZhbHVlITogQ29tcGFyZVZhbGlkYXRpb25Db25maWdcclxuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gY29tcGFyZVRvVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSlcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBjb25kaXRpb25hbCBjaGVjayBhbmQgaWYgdGhlIGNvbmRpdGlvblxyXG4gKiBwYXNzZXMgaXQgd2lsbCByZXR1cm4gYW4gZXJyb3IuXHJcbiAqXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgY29uZGl0aW9uIHRoYXQgaXMgdG8gYmUgY2hlY2tlZFxyXG4gKiBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gZXJyb3JcclxuICogY29udGVudCAvIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJyZXF1aXJlZFdoZW5cIlxyXG4gKiAgIFtyZXF1aXJlZFdoZW5dPVwie1xyXG4gKiAgICAgIGNvbmRpdGlvbmFsOiBpc1RydWUsICAgICAgICAgICAgICAgICAgICAgLSB0aGlzIGNhbiBiZSBldGhlciBhIGJvb2xlYW5cclxuICogICAgICBlcnJvck5hbWU6ICdyZXF1aXJlZFdoZW4nLCAgICAgICAgICAgICAgICAgICAgIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgYm9vbGVhblxyXG4gKiAgICAgIGVycm9yOiAnVGhlIGNvbmRpdGlvbiBpcyB0cnVlLidcclxuICogICB9XCJcclxuICogLz5cclxuICpcclxuICogTk9URTogSXQgaXMgbm90IHJlY29tbWVuZGVkIHRvIHBhc3MgYSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBpbiB0aGUgdGVtcGxhdGUsXHJcbiAqIGFzIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBleGVjdXRlZCBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tyZXF1aXJlZFdoZW5dJyxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBSZXF1aXJlZFdoZW5WYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVxdWlyZWRXaGVuVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICAgIEBJbnB1dCgncmVxdWlyZWRXaGVuJykgdmFsdWUhOiBDb25kaXRpb25hbFZhbGlkYXRpb25Db25maWdcclxuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gcmVxdWlyZWRXaGVuVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSlcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBjaGVjayBpZiB0aGUgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sXHJcbiAqIGhhcyBhIHZhbHVlIGFuZCBhIGdpdmVuIGlucHV0IGRvZXMgbm90LlxyXG4gKlxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHRoZSBuYW1lIG9mIHRoZSBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCB0byBsaW5rXHJcbiAqIHRvIGFuZCBvcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBlcnJvclxyXG4gKiBjb250ZW50IC8gbWVzc2FnZS5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImxpbmtUb1wiXHJcbiAqICAgW2xpbmtUb109XCJ7XHJcbiAqICAgICAgbGluazogJ2xpbmtlZFRvLCAgICAgICAgICAgICAgICAgICAgICAtIGEgbmFtZSBvZiBhIGZvcm0gY29udHJvbCB3ZSB3YW50XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnbGlua1RvJywgICAgICAgICAgICAgICAgICAgICB0byBsaW5rIHRoZSBpbnB1dCB0b1xyXG4gKiAgICAgIGVycm9yOiAnVGhlIGxpbmtlZCBpbnB1dCBoYXMgYSB2YWx1ZSBidXQgdGhpcyBvbmUgZG9lcyBub3QnXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2xpbmtUb10nLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IExpbmtUb1ZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rVG9WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gICAgQElucHV0KCdsaW5rVG8nKSB2YWx1ZSE6IExpbmtWYWxpZGF0aW9uQ29uZmlnXHJcbiAgICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIGxpbmtUb1ZhbGlkYXRpb24oY29udHJvbCwgeyAuLi50aGlzLnZhbHVlIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgY2hlY2sgaWYgdGhlIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbFxyXG4gKiBkb2VzIG5vdCBoYXZlIGEgdmFsdWUgYW5kIGEgZ2l2ZW4gaW5wdXQgZG9lcy5cclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSB0aGUgbmFtZSBvZiB0aGUgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgdG8gbGlua1xyXG4gKiB0byBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gZXJyb3JcclxuICogY29udGVudCAvIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJsaW5rZWRUb1wiXHJcbiAqICAgW2xpbmtlZFRvXT1cIntcclxuICogICAgICBsaW5rOiAnbGlua1RvLCAgICAgICAgICAgICAgICAgICAgICAtIGEgbmFtZSBvZiBhIGZvcm0gY29udHJvbCB3ZSB3YW50XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnbGlua2VkVG8nLCAgICAgICAgICAgICAgICAgICAgIHRvIGxpbmsgdGhlIGlucHV0IHRvXHJcbiAqICAgICAgZXJyb3I6ICdUaGUgbGlua2VkIGlucHV0IGRvZXMgbm90IGhhdmUgYSB2YWx1ZSBidXQgdGhpcyBvbmUgZG9lcy4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2xpbmtlZFRvXScsXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogTGlua2VkVG9WYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlua2VkVG9WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gICAgQElucHV0KCdsaW5rZWRUbycpIHZhbHVlITogTGlua1ZhbGlkYXRpb25Db25maWdcclxuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gbGlua2VkVG9WYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy52YWx1ZSB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIGNoZWNrIG9uIGEgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sJ3NcclxuICogdmFsdWUgYW5kIHJldHVybnMgYW4gZXJyb3IgaWYgdGhlIGdpdmVuIGNvbXBhcmlzb24gZmFpbHMuXHJcbiAqXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgbGVuZ3RoIHRvIGNvbXBlcmUgdG8gYW5kIHRoZSBjb21wYXJpc29uXHJcbiAqIHRvIHByZWZvcm0uIE9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIGVycm9yXHJcbiAqIGNvbnRlbnQgLyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwibGVuZ3RoXCJcclxuICogICBbbGVuZ3RoXT1cIntcclxuICogICAgICBsZW5ndGg6IDgsXHJcbiAqICAgICAgY29tcGFyaXNvbjogXCI+XCIsXHJcbiAqICAgICAgZXJyb3JOYW1lOiAnbGVuZ3RoJyxcclxuICogICAgICBlcnJvcjogJ1ZhbHVlIGlzIG5vdCBsb25nIGVub3VnaC4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2xlbmd0aF0nLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IExlbmd0aFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMZW5ndGhWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gICAgQElucHV0KCdsZW5ndGgnKSB2YWx1ZSE6IExlbmd0aFZhbGlkYXRpb25Db25maWdcclxuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gbGVuZ3RoVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSlcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBjaGVjayBvbiBhIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCdzXHJcbiAqIHZhbHVlIGFuZCByZXR1cm5zIGFuIGVycm9yIGlmIHRoZSB2YWx1ZSBpcyBub3QgaW4gdGhlIHNwZWNpZmllZCByYW5nZS5cclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSByYW5nZSBzdGFydCB2YWx1ZSwgcmFuZ2UgZW5kIHZhbHVlXHJcbiAqIGFuZCBvcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBlcnJvciBjb250ZW50IC8gbWVzc2FnZS5cclxuICpcclxuICogTk9URTogVGhlIHJhbmdlIGlzIGluY2x1c2l2ZS5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInJhbmdlXCJcclxuICogICBbcmFuZ2VdPVwie1xyXG4gKiAgICAgIHN0YXJ0OiA4LFxyXG4gKiAgICAgIGVuZDogMTQsXHJcbiAqICAgICAgZXJyb3JOYW1lOiAncmFuZ2UnLFxyXG4gKiAgICAgIGVycm9yOiAnVmFsdWUgaXMgbm90IGluIHRoZSBzcGVjaWZpZWQgcmFuZ2UuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tyYW5nZV0nLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IFJhbmdlVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJhbmdlVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICAgIEBJbnB1dCgncmFuZ2UnKSB2YWx1ZSE6IFJhbmdlVmFsaWRhdGlvbkNvbmZpZ1xyXG4gICAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiByYW5nZVZhbGlkYXRpb24oY29udHJvbCwgeyAuLi50aGlzLnZhbHVlIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgY2hlY2sgb24gYSBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wnc1xyXG4gKiB2YWx1ZSBhbmQgcmV0dXJucyBhbiBlcnJvciBpZiBpdCBkb2Vzbid0IGhhdmUgYSByZXF1aXJlZCB3b3JkIGNvdW50LlxyXG4gKlxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIHdvcmQgY291bnQgdG8gY29tcGVyZSB0byBhbmQgdGhlIGNvbXBhcmlzb25cclxuICogdG8gcHJlZm9ybS4gT3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gZXJyb3JcclxuICogY29udGVudCAvIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJ3b3JkQ291bnRcIlxyXG4gKiAgIFt3b3JkQ291bnRdPVwie1xyXG4gKiAgICAgIGNvdW50OiA4LFxyXG4gKiAgICAgIGNvbXBhcmlzb246IFwiPlwiLFxyXG4gKiAgICAgIGVycm9yTmFtZTogJ3dvcmRDb3VudCcsXHJcbiAqICAgICAgZXJyb3I6ICdUaGUgbWluaW11bSByZXF1aXJlZCB3b3JkIGNvdW50IGlzIDguJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t3b3JkQ291bnRdJyxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBXb3JkQ291bnRWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgV29yZENvdW50VmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICAgIEBJbnB1dCgnd29yZENvdW50JykgdmFsdWUhOiBDb3VudFZhbGlkYXRpb25Db25maWdcclxuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gd29yZENvdW50VmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSlcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBjaGVjayBvbiBhIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCdzXHJcbiAqIHZhbHVlIGFuZCByZXR1cm5zIGFuIGVycm9yIGlmIHRoZSB2YWx1ZSBpcyBub3QgaW4gdGhlIHNwZWNpZmllZCB3b3JkIGNvdW50IHJhbmdlLlxyXG4gKlxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIHJhbmdlIHN0YXJ0IHZhbHVlLCByYW5nZSBlbmQgdmFsdWVcclxuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBOT1RFOiBUaGUgcmFuZ2UgaXMgaW5jbHVzaXZlLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwid29yZENvdW50UmFuZ2VcIlxyXG4gKiAgIFt3b3JkQ291bnRSYW5nZV09XCJ7XHJcbiAqICAgICAgc3RhcnQ6IDgsXHJcbiAqICAgICAgZW5kOiAxNCxcclxuICogICAgICBlcnJvck5hbWU6ICd3b3JkQ291bnRSYW5nZScsXHJcbiAqICAgICAgZXJyb3I6ICdWYWx1ZSBpcyBub3QgaW4gdGhlIHNwZWNpZmllZCB3b3JkIGNvdW50IHJhbmdlLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbd29yZENvdW50UmFuZ2VdJyxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBXb3JkQ291bnRSYW5nZVZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXb3JkQ291bnRSYW5nZVZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgICBASW5wdXQoJ3dvcmRDb3VudFJhbmdlJykgdmFsdWUhOiBSYW5nZVZhbGlkYXRpb25Db25maWdcclxuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gd29yZENvdW50UmFuZ2VWYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy52YWx1ZSB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=