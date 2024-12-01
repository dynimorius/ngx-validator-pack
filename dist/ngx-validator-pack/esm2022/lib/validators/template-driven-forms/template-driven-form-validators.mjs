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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RegExpValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RegExpValidatorDirective, isStandalone: true, selector: "[regExp]", inputs: { value: ["regExp", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RegExpValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RegExpValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EarlierThenValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: EarlierThenValidatorDirective, isStandalone: true, selector: "[earlierThen]", inputs: { value: ["earlierThen", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: EarlierThenValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EarlierThenValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LaterThenValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: LaterThenValidatorDirective, isStandalone: true, selector: "[laterThen]", inputs: { value: ["laterThen", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: LaterThenValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LaterThenValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CompareToValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: CompareToValidatorDirective, isStandalone: true, selector: "[compareTo]", inputs: { value: ["compareTo", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: CompareToValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CompareToValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredWhenValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RequiredWhenValidatorDirective, isStandalone: true, selector: "[requiredWhen]", inputs: { value: ["requiredWhen", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RequiredWhenValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredWhenValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LinkToValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: LinkToValidatorDirective, isStandalone: true, selector: "[linkTo]", inputs: { value: ["linkTo", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: LinkToValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LinkToValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LinkedToValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: LinkedToValidatorDirective, isStandalone: true, selector: "[linkedTo]", inputs: { value: ["linkedTo", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: LinkedToValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LinkedToValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LengthValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: LengthValidatorDirective, isStandalone: true, selector: "[length]", inputs: { value: ["length", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: LengthValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LengthValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RangeValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RangeValidatorDirective, isStandalone: true, selector: "[range]", inputs: { value: ["range", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RangeValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RangeValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: WordCountValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: WordCountValidatorDirective, isStandalone: true, selector: "[wordCount]", inputs: { value: ["wordCount", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: WordCountValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: WordCountValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: WordCountRangeValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: WordCountRangeValidatorDirective, isStandalone: true, selector: "[wordCountRange]", inputs: { value: ["wordCountRange", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: WordCountRangeValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: WordCountRangeValidatorDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtZHJpdmVuLWZvcm0tdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3ZhbGlkYXRvcnMvdGVtcGxhdGUtZHJpdmVuLWZvcm1zL3RlbXBsYXRlLWRyaXZlbi1mb3JtLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDaEQsT0FBTyxFQUVILGFBQWEsR0FHaEIsTUFBTSxnQkFBZ0IsQ0FBQTtBQVd2QixPQUFPLEVBQ0gsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixzQkFBc0IsRUFDdEIsd0JBQXdCLEVBQ3hCLG1CQUFtQixHQUN0QixNQUFNLCtCQUErQixDQUFBOztBQUV0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFZSCxNQUFNLE9BQU8sd0JBQXdCO0lBR2pDLFFBQVEsQ0FBQyxPQUF3QjtRQUM3QixPQUFPLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDdkQsQ0FBQzsrR0FMUSx3QkFBd0I7bUdBQXhCLHdCQUF3QiwrRkFSdEI7WUFDUDtnQkFDSSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsS0FBSyxFQUFFLElBQUk7YUFDZDtTQUNKOzs0RkFFUSx3QkFBd0I7a0JBWHBDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUU7d0JBQ1A7NEJBQ0ksT0FBTyxF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LEtBQUs7dUJBQUMsV0FBVzs7QUFNdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQkc7QUFZSCxNQUFNLE9BQU8sZ0NBQWdDO0lBRXpDLFFBQVEsQ0FBQyxPQUF3QjtRQUM3QixPQUFPLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDL0QsQ0FBQzsrR0FKUSxnQ0FBZ0M7bUdBQWhDLGdDQUFnQywrR0FSOUI7WUFDUDtnQkFDSSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsS0FBSyxFQUFFLElBQUk7YUFDZDtTQUNKOzs0RkFFUSxnQ0FBZ0M7a0JBWDVDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFNBQVMsRUFBRTt3QkFDUDs0QkFDSSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxrQ0FBa0M7NEJBQzdDLEtBQUssRUFBRSxJQUFJO3lCQUNkO3FCQUNKO2lCQUNKOzhCQUU0QixLQUFLO3NCQUE3QixLQUFLO3VCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtcbiAgICBBYnN0cmFjdENvbnRyb2wsXG4gICAgTkdfVkFMSURBVE9SUyxcbiAgICBWYWxpZGF0aW9uRXJyb3JzLFxuICAgIFZhbGlkYXRvcixcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQge1xuICAgIENvbXBhcmVWYWxpZGF0aW9uQ29uZmlnLFxuICAgIENvbmRpdGlvbmFsVmFsaWRhdGlvbkNvbmZpZyxcbiAgICBDb3VudFZhbGlkYXRpb25Db25maWcsXG4gICAgRGF0ZVZhbGlkYXRpb25Db25maWcsXG4gICAgTGVuZ3RoVmFsaWRhdGlvbkNvbmZpZyxcbiAgICBMaW5rVmFsaWRhdGlvbkNvbmZpZyxcbiAgICBSYW5nZVZhbGlkYXRpb25Db25maWcsXG4gICAgUmVnRXhwVmFsaWRhdGlvbkNvbmZpZyxcbn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy92YWxpZGF0aW9uLWNvbmZpZy5pbnRlcmZhY2UnXG5pbXBvcnQge1xuICAgIGNvbXBhcmVUb1ZhbGlkYXRpb24sXG4gICAgZWFybGllclRoZW5WYWxpZGF0aW9uLFxuICAgIGxhdGVyVGhlblZhbGlkYXRpb24sXG4gICAgbGVuZ3RoVmFsaWRhdGlvbixcbiAgICBsaW5rVG9WYWxpZGF0aW9uLFxuICAgIGxpbmtlZFRvVmFsaWRhdGlvbixcbiAgICByYW5nZVZhbGlkYXRpb24sXG4gICAgcmVnZXhwVmFsaWRhdGlvbixcbiAgICByZXF1aXJlZFdoZW5WYWxpZGF0aW9uLFxuICAgIHdvcmRDb3VudFJhbmdlVmFsaWRhdGlvbixcbiAgICB3b3JkQ291bnRWYWxpZGF0aW9uLFxufSBmcm9tICcuLi8uLi92YWxpZGF0aW9ucy92YWxpZGF0aW9ucydcblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBSZWdFeCBjaGVjayBvbiB2YWx1ZSBpbiB0aGUgZ2l2ZW5cbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sXG4gKlxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSByZWd1bGFyIGV4cHJlc3Npb25cbiAqIGFuZCBvcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbVxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqICA8aW5wdXRcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInJlZ2V4cFwiXG4gKiAgIFtyZWdFeHBdPVwie1xuICogICAgICByZWdFeHA6IC8oc3xyZWdleHApLyxcbiAqICAgICAgZXJyb3JOYW1lOiAncmVnZXhwQ2hlY2snLFxuICogICAgICBlcnJvcjogJ0ZhaWxlZCByZWdleHAgY2hlY2suJ1xuICogICB9XCJcbiAqIC8+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3JlZ0V4cF0nLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICBASW5wdXQoJ3JlZ0V4cCcpIHZhbHVlITogUmVnRXhwVmFsaWRhdGlvbkNvbmZpZ1xuXG4gICAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgICAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSlcbiAgICB9XG59XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgZGF0ZSBjb21wYXJpc29uIGJldHdlZW4gYSBzcGVjaWZpZWQgZGF0ZVxuICogYW5kIGEgZGF0ZSBpbiB0aGUgZ2l2ZW4gaW5wdXQgYW5kIHJldHVybnMgYW4gZXJyb3IgaWYgdGhlIGRhdGUgaW5cbiAqIHRoZSBnaXZlbiBpbnB1dCBpcyBsYXRlciB0aGVuIHRoZSBzcGVjaWZpZWQgb25lLlxuICpcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgZGF0ZSB0byBjb21wYXJlIHRvXG4gKiBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b21cbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiAgPGlucHV0XG4gKiAgICB0eXBlPVwidGV4dFwiXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJlYXJsaWVyVGhlblwiXG4gKiAgIFtlYXJsaWVyVGhlbl09XCJ7XG4gKiAgICAgIGRhdGU6IGRhdGUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS0gYSB2YXJpYWJsZSBvZiB0eXBlIERhdGVcbiAqICAgICAgZXJyb3JOYW1lOiAnZWFybGllclRoZW4nLFxuICogICAgICBlcnJvcjogJ1RoZSBkYXRlIGlzIG5vdCBlYXJsaWVyIHRoZW4gdGhlIHNwZWNpZmllZCBvbmUuJ1xuICogICB9XCJcbiAqIC8+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2VhcmxpZXJUaGVuXScsXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBFYXJsaWVyVGhlblZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIEVhcmxpZXJUaGVuVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICBASW5wdXQoJ2VhcmxpZXJUaGVuJykgdmFsdWUhOiBEYXRlVmFsaWRhdGlvbkNvbmZpZ1xuXG4gICAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgICAgICByZXR1cm4gZWFybGllclRoZW5WYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy52YWx1ZSB9KVxuICAgIH1cbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBkYXRlIGNvbXBhcmlzb24gYmV0d2VlbiBhIHNwZWNpZmllZCBkYXRlXG4gKiBhbmQgYSBkYXRlIGluIHRoZSBnaXZlbiBpbnB1dCBhbmQgcmV0dXJucyBhbiBlcnJvciBpZiB0aGUgZGF0ZSBpblxuICogdGhlIGdpdmVuIGlucHV0IGlzIGVhcmxpZXIgdGhlbiB0aGUgc3BlY2lmaWVkIG9uZS5cbiAqXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIGRhdGUgdG8gY29tcGFyZSB0b1xuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogIDxpbnB1dFxuICogICAgdHlwZT1cInRleHRcIlxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwibGF0ZXJUaGVuXCJcbiAqICAgW2xhdGVyVGhlbl09XCJ7XG4gKiAgICAgIGRhdGU6IGRhdGUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS0gYSB2YXJpYWJsZSBvZiB0eXBlIERhdGVcbiAqICAgICAgZXJyb3JOYW1lOiAnbGF0ZXJUaGVuJyxcbiAqICAgICAgZXJyb3I6ICdUaGUgZGF0ZSBpcyBub3QgbGF0ZXIgdGhlbiB0aGUgc3BlY2lmaWVkIG9uZS4nXG4gKiAgIH1cIlxuICogLz5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbGF0ZXJUaGVuXScsXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBMYXRlclRoZW5WYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMYXRlclRoZW5WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICAgIEBJbnB1dCgnbGF0ZXJUaGVuJykgdmFsdWUhOiBEYXRlVmFsaWRhdGlvbkNvbmZpZ1xuXG4gICAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgICAgICByZXR1cm4gbGF0ZXJUaGVuVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSlcbiAgICB9XG59XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgZGF0ZSBjb21wYXJpc29uIGJldHdlZW4gYSBzcGVjaWZpZWQgZGF0ZVxuICogYW5kIGEgZGF0ZSBpbiB0aGUgZ2l2ZW4gaW5wdXQgYW5kIHJldHVybnMgYW4gZXJyb3IgaWYgY2hvc2VuIGNvbXBhcmlzb25cbiAqIGZhaWxzLlxuICpcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgZGF0ZSB0byBjb21wYXJlIHRvLFxuICogY29tcGFyaXNvbiB0byBwcmVmb3JtIGFuZCBvcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lXG4gKiBhbmQgYSBjdXN0b20gZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuXG4gKlxuICogQXZhaWxhYmxlIGNvbXBhcmlzb25zIGFyZTogJzwnICwgJz4nICwgJz09JyAsICc9PT0nICwgJzw9JyAsICc+PScuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqICA8aW5wdXRcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImNvbXBhcmVUb1wiXG4gKiAgIFtjb21wYXJlVG9dPVwie1xuICogICAgICBkYXRlOiBkYXRlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tIGEgdmFyaWFibGUgb2YgdHlwZSBEYXRlXG4gKiAgICAgIGNvbXBhcmlzb246ICc9PT0nXG4gKiAgICAgIGVycm9yTmFtZTogJ2NvbXBhcmVUbycsXG4gKiAgICAgIGVycm9yOiAnVGhlIGRhdGVzIGFyZSBub3QgdGhlIHNhbWUuJ1xuICogICB9XCJcbiAqIC8+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2NvbXBhcmVUb10nLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogQ29tcGFyZVRvVmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29tcGFyZVRvVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICBASW5wdXQoJ2NvbXBhcmVUbycpIHZhbHVlITogQ29tcGFyZVZhbGlkYXRpb25Db25maWdcbiAgICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiBjb21wYXJlVG9WYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy52YWx1ZSB9KVxuICAgIH1cbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBjb25kaXRpb25hbCBjaGVjayBhbmQgaWYgdGhlIGNvbmRpdGlvblxuICogcGFzc2VzIGl0IHdpbGwgcmV0dXJuIGFuIGVycm9yLlxuICpcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgY29uZGl0aW9uIHRoYXQgaXMgdG8gYmUgY2hlY2tlZFxuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIGVycm9yXG4gKiBjb250ZW50IC8gbWVzc2FnZS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogIDxpbnB1dFxuICogICAgdHlwZT1cInRleHRcIlxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicmVxdWlyZWRXaGVuXCJcbiAqICAgW3JlcXVpcmVkV2hlbl09XCJ7XG4gKiAgICAgIGNvbmRpdGlvbmFsOiBpc1RydWUsICAgICAgICAgICAgICAgICAgICAgLSB0aGlzIGNhbiBiZSBldGhlciBhIGJvb2xlYW5cbiAqICAgICAgZXJyb3JOYW1lOiAncmVxdWlyZWRXaGVuJywgICAgICAgICAgICAgICAgICAgICBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGJvb2xlYW5cbiAqICAgICAgZXJyb3I6ICdUaGUgY29uZGl0aW9uIGlzIHRydWUuJ1xuICogICB9XCJcbiAqIC8+XG4gKlxuICogTk9URTogSXQgaXMgbm90IHJlY29tbWVuZGVkIHRvIHBhc3MgYSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBpbiB0aGUgdGVtcGxhdGUsXG4gKiBhcyB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcmVxdWlyZWRXaGVuXScsXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBSZXF1aXJlZFdoZW5WYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXF1aXJlZFdoZW5WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICAgIEBJbnB1dCgncmVxdWlyZWRXaGVuJykgdmFsdWUhOiBDb25kaXRpb25hbFZhbGlkYXRpb25Db25maWdcbiAgICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiByZXF1aXJlZFdoZW5WYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy52YWx1ZSB9KVxuICAgIH1cbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBjaGVjayBpZiB0aGUgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sXG4gKiBoYXMgYSB2YWx1ZSBhbmQgYSBnaXZlbiBpbnB1dCBkb2VzIG5vdC5cbiAqXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHRoZSBuYW1lIG9mIHRoZSBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCB0byBsaW5rXG4gKiB0byBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gZXJyb3JcbiAqIGNvbnRlbnQgLyBtZXNzYWdlLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiAgPGlucHV0XG4gKiAgICB0eXBlPVwidGV4dFwiXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJsaW5rVG9cIlxuICogICBbbGlua1RvXT1cIntcbiAqICAgICAgbGluazogJ2xpbmtlZFRvLCAgICAgICAgICAgICAgICAgICAgICAtIGEgbmFtZSBvZiBhIGZvcm0gY29udHJvbCB3ZSB3YW50XG4gKiAgICAgIGVycm9yTmFtZTogJ2xpbmtUbycsICAgICAgICAgICAgICAgICAgICAgdG8gbGluayB0aGUgaW5wdXQgdG9cbiAqICAgICAgZXJyb3I6ICdUaGUgbGlua2VkIGlucHV0IGhhcyBhIHZhbHVlIGJ1dCB0aGlzIG9uZSBkb2VzIG5vdCdcbiAqICAgfVwiXG4gKiAvPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tsaW5rVG9dJyxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IExpbmtUb1ZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIExpbmtUb1ZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gICAgQElucHV0KCdsaW5rVG8nKSB2YWx1ZSE6IExpbmtWYWxpZGF0aW9uQ29uZmlnXG4gICAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgICAgICByZXR1cm4gbGlua1RvVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSlcbiAgICB9XG59XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgY2hlY2sgaWYgdGhlIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbFxuICogZG9lcyBub3QgaGF2ZSBhIHZhbHVlIGFuZCBhIGdpdmVuIGlucHV0IGRvZXMuXG4gKlxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSB0aGUgbmFtZSBvZiB0aGUgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgdG8gbGlua1xuICogdG8gYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIGVycm9yXG4gKiBjb250ZW50IC8gbWVzc2FnZS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogIDxpbnB1dFxuICogICAgdHlwZT1cInRleHRcIlxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwibGlua2VkVG9cIlxuICogICBbbGlua2VkVG9dPVwie1xuICogICAgICBsaW5rOiAnbGlua1RvLCAgICAgICAgICAgICAgICAgICAgICAtIGEgbmFtZSBvZiBhIGZvcm0gY29udHJvbCB3ZSB3YW50XG4gKiAgICAgIGVycm9yTmFtZTogJ2xpbmtlZFRvJywgICAgICAgICAgICAgICAgICAgICB0byBsaW5rIHRoZSBpbnB1dCB0b1xuICogICAgICBlcnJvcjogJ1RoZSBsaW5rZWQgaW5wdXQgZG9lcyBub3QgaGF2ZSBhIHZhbHVlIGJ1dCB0aGlzIG9uZSBkb2VzLidcbiAqICAgfVwiXG4gKiAvPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tsaW5rZWRUb10nLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogTGlua2VkVG9WYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMaW5rZWRUb1ZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gICAgQElucHV0KCdsaW5rZWRUbycpIHZhbHVlITogTGlua1ZhbGlkYXRpb25Db25maWdcbiAgICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiBsaW5rZWRUb1ZhbGlkYXRpb24oY29udHJvbCwgeyAuLi50aGlzLnZhbHVlIH0pXG4gICAgfVxufVxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIGNoZWNrIG9uIGEgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sJ3NcbiAqIHZhbHVlIGFuZCByZXR1cm5zIGFuIGVycm9yIGlmIHRoZSBnaXZlbiBjb21wYXJpc29uIGZhaWxzLlxuICpcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgbGVuZ3RoIHRvIGNvbXBlcmUgdG8gYW5kIHRoZSBjb21wYXJpc29uXG4gKiB0byBwcmVmb3JtLiBPcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBlcnJvclxuICogY29udGVudCAvIG1lc3NhZ2UuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqICA8aW5wdXRcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImxlbmd0aFwiXG4gKiAgIFtsZW5ndGhdPVwie1xuICogICAgICBsZW5ndGg6IDgsXG4gKiAgICAgIGNvbXBhcmlzb246IFwiPlwiLFxuICogICAgICBlcnJvck5hbWU6ICdsZW5ndGgnLFxuICogICAgICBlcnJvcjogJ1ZhbHVlIGlzIG5vdCBsb25nIGVub3VnaC4nXG4gKiAgIH1cIlxuICogLz5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbGVuZ3RoXScsXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBMZW5ndGhWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMZW5ndGhWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICAgIEBJbnB1dCgnbGVuZ3RoJykgdmFsdWUhOiBMZW5ndGhWYWxpZGF0aW9uQ29uZmlnXG4gICAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgICAgICByZXR1cm4gbGVuZ3RoVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSlcbiAgICB9XG59XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgY2hlY2sgb24gYSBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wnc1xuICogdmFsdWUgYW5kIHJldHVybnMgYW4gZXJyb3IgaWYgdGhlIHZhbHVlIGlzIG5vdCBpbiB0aGUgc3BlY2lmaWVkIHJhbmdlLlxuICpcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgcmFuZ2Ugc3RhcnQgdmFsdWUsIHJhbmdlIGVuZCB2YWx1ZVxuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLlxuICpcbiAqIE5PVEU6IFRoZSByYW5nZSBpcyBpbmNsdXNpdmUuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqICA8aW5wdXRcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInJhbmdlXCJcbiAqICAgW3JhbmdlXT1cIntcbiAqICAgICAgc3RhcnQ6IDgsXG4gKiAgICAgIGVuZDogMTQsXG4gKiAgICAgIGVycm9yTmFtZTogJ3JhbmdlJyxcbiAqICAgICAgZXJyb3I6ICdWYWx1ZSBpcyBub3QgaW4gdGhlIHNwZWNpZmllZCByYW5nZS4nXG4gKiAgIH1cIlxuICogLz5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcmFuZ2VdJyxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IFJhbmdlVmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICAgIEBJbnB1dCgncmFuZ2UnKSB2YWx1ZSE6IFJhbmdlVmFsaWRhdGlvbkNvbmZpZ1xuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSlcbiAgICB9XG59XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgY2hlY2sgb24gYSBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wnc1xuICogdmFsdWUgYW5kIHJldHVybnMgYW4gZXJyb3IgaWYgaXQgZG9lc24ndCBoYXZlIGEgcmVxdWlyZWQgd29yZCBjb3VudC5cbiAqXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIHdvcmQgY291bnQgdG8gY29tcGVyZSB0byBhbmQgdGhlIGNvbXBhcmlzb25cbiAqIHRvIHByZWZvcm0uIE9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIGVycm9yXG4gKiBjb250ZW50IC8gbWVzc2FnZS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogIDxpbnB1dFxuICogICAgdHlwZT1cInRleHRcIlxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwid29yZENvdW50XCJcbiAqICAgW3dvcmRDb3VudF09XCJ7XG4gKiAgICAgIGNvdW50OiA4LFxuICogICAgICBjb21wYXJpc29uOiBcIj5cIixcbiAqICAgICAgZXJyb3JOYW1lOiAnd29yZENvdW50JyxcbiAqICAgICAgZXJyb3I6ICdUaGUgbWluaW11bSByZXF1aXJlZCB3b3JkIGNvdW50IGlzIDguJ1xuICogICB9XCJcbiAqIC8+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3dvcmRDb3VudF0nLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogV29yZENvdW50VmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgV29yZENvdW50VmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICBASW5wdXQoJ3dvcmRDb3VudCcpIHZhbHVlITogQ291bnRWYWxpZGF0aW9uQ29uZmlnXG4gICAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgICAgICByZXR1cm4gd29yZENvdW50VmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSlcbiAgICB9XG59XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgY2hlY2sgb24gYSBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wnc1xuICogdmFsdWUgYW5kIHJldHVybnMgYW4gZXJyb3IgaWYgdGhlIHZhbHVlIGlzIG5vdCBpbiB0aGUgc3BlY2lmaWVkIHdvcmQgY291bnQgcmFuZ2UuXG4gKlxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSByYW5nZSBzdGFydCB2YWx1ZSwgcmFuZ2UgZW5kIHZhbHVlXG4gKiBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuXG4gKlxuICogTk9URTogVGhlIHJhbmdlIGlzIGluY2x1c2l2ZS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogIDxpbnB1dFxuICogICAgdHlwZT1cInRleHRcIlxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwid29yZENvdW50UmFuZ2VcIlxuICogICBbd29yZENvdW50UmFuZ2VdPVwie1xuICogICAgICBzdGFydDogOCxcbiAqICAgICAgZW5kOiAxNCxcbiAqICAgICAgZXJyb3JOYW1lOiAnd29yZENvdW50UmFuZ2UnLFxuICogICAgICBlcnJvcjogJ1ZhbHVlIGlzIG5vdCBpbiB0aGUgc3BlY2lmaWVkIHdvcmQgY291bnQgcmFuZ2UuJ1xuICogICB9XCJcbiAqIC8+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3dvcmRDb3VudFJhbmdlXScsXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBXb3JkQ291bnRSYW5nZVZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIFdvcmRDb3VudFJhbmdlVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICBASW5wdXQoJ3dvcmRDb3VudFJhbmdlJykgdmFsdWUhOiBSYW5nZVZhbGlkYXRpb25Db25maWdcbiAgICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB3b3JkQ291bnRSYW5nZVZhbGlkYXRpb24oY29udHJvbCwgeyAuLi50aGlzLnZhbHVlIH0pXG4gICAgfVxufVxuIl19