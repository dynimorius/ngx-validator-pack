/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, } from "@angular/forms";
import { compareToValidation, earlierThenValidation, laterThenValidation, lengthValidation, linkToValidation, linkedToValidation, rangeValidation, regexpValidation, requiredWhenValidation, } from "../../validations/validations";
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
                    selector: "[regExp]",
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
                args: ["regExp"]
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
                    selector: "[earlierThen]",
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
                args: ["earlierThen"]
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
                    selector: "[laterThen]",
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
                args: ["laterThen"]
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
                    selector: "[compareTo]",
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
                args: ["compareTo"]
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
                    selector: "[requiredWhen]",
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
                args: ["requiredWhen"]
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
                    selector: "[linkTo]",
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
                args: ["linkTo"]
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
                    selector: "[linkedTo]",
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
                args: ["linkedTo"]
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
                    selector: "[length]",
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
                args: ["length"]
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
                    selector: "[range]",
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
                args: ["range"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtZHJpdmVuLWZvcm0tdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3ZhbGlkYXRvcnMvdGVtcGxhdGUtZHJpdmVuLWZvcm1zL3RlbXBsYXRlLWRyaXZlbi1mb3JtLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUVMLGFBQWEsR0FHZCxNQUFNLGdCQUFnQixDQUFDO0FBVXhCLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIscUJBQXFCLEVBQ3JCLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLHNCQUFzQixHQUN2QixNQUFNLCtCQUErQixDQUFDOztBQUV2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFZSCxNQUFNLE9BQU8sd0JBQXdCO0lBR25DLFFBQVEsQ0FBQyxPQUF3QjtRQUMvQixPQUFPLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQzsrR0FMVSx3QkFBd0I7bUdBQXhCLHdCQUF3QiwrRkFSeEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOzs0RkFFVSx3QkFBd0I7a0JBWHBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsMEJBQTBC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ZUFBZSxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQzsrR0FKVSx1QkFBdUI7bUdBQXZCLHVCQUF1Qiw2RkFSdkI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOzs0RkFFVSx1QkFBdUI7a0JBWG5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcseUJBQXlCOzRCQUNwQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs4QkFFaUIsS0FBSztzQkFBcEIsS0FBSzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEFic3RyYWN0Q29udHJvbCxcclxuICBOR19WQUxJREFUT1JTLFxyXG4gIFZhbGlkYXRpb25FcnJvcnMsXHJcbiAgVmFsaWRhdG9yLFxyXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG4gIENvbXBhcmVWYWxpZGF0aW9uQ29uZmlnLFxyXG4gIENvbmRpdGlvbmFsVmFsaWRhdGlvbkNvbmZpZyxcclxuICBEYXRlVmFsaWRhdGlvbkNvbmZpZyxcclxuICBMZW5ndGhWYWxpZGF0aW9uQ29uZmlnLFxyXG4gIExpbmtWYWxpZGF0aW9uQ29uZmlnLFxyXG4gIFJhbmdlVmFsaWRhdGlvbkNvbmZpZyxcclxuICBSZWdFeHBWYWxpZGF0aW9uQ29uZmlnLFxyXG59IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL3ZhbGlkYXRpb24tY29uZmlnLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge1xyXG4gIGNvbXBhcmVUb1ZhbGlkYXRpb24sXHJcbiAgZWFybGllclRoZW5WYWxpZGF0aW9uLFxyXG4gIGxhdGVyVGhlblZhbGlkYXRpb24sXHJcbiAgbGVuZ3RoVmFsaWRhdGlvbixcclxuICBsaW5rVG9WYWxpZGF0aW9uLFxyXG4gIGxpbmtlZFRvVmFsaWRhdGlvbixcclxuICByYW5nZVZhbGlkYXRpb24sXHJcbiAgcmVnZXhwVmFsaWRhdGlvbixcclxuICByZXF1aXJlZFdoZW5WYWxpZGF0aW9uLFxyXG59IGZyb20gXCIuLi8uLi92YWxpZGF0aW9ucy92YWxpZGF0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBSZWdFeCBjaGVjayBvbiB2YWx1ZSBpbiB0aGUgZ2l2ZW5cclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2xcclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSByZWd1bGFyIGV4cHJlc3Npb25cclxuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicmVnZXhwXCJcclxuICogICBbcmVnRXhwXT1cIntcclxuICogICAgICByZWdFeHA6IC8oc3xyZWdleHApLyxcclxuICogICAgICBlcnJvck5hbWU6ICdyZWdleHBDaGVjaycsXHJcbiAqICAgICAgZXJyb3I6ICdGYWlsZWQgcmVnZXhwIGNoZWNrLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltyZWdFeHBdXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcInJlZ0V4cFwiKSB2YWx1ZSE6IFJlZ0V4cFZhbGlkYXRpb25Db25maWc7XHJcblxyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy52YWx1ZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgZGF0ZSBjb21wYXJpc29uIGJldHdlZW4gYSBzcGVjaWZpZWQgZGF0ZVxyXG4gKiBhbmQgYSBkYXRlIGluIHRoZSBnaXZlbiBpbnB1dCBhbmQgcmV0dXJucyBhbiBlcnJvciBpZiB0aGUgZGF0ZSBpblxyXG4gKiB0aGUgZ2l2ZW4gaW5wdXQgaXMgbGF0ZXIgdGhlbiB0aGUgc3BlY2lmaWVkIG9uZS5cclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSBkYXRlIHRvIGNvbXBhcmUgdG9cclxuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiZWFybGllclRoZW5cIlxyXG4gKiAgIFtlYXJsaWVyVGhlbl09XCJ7XHJcbiAqICAgICAgZGF0ZTogZGF0ZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLSBhIHZhcmlhYmxlIG9mIHR5cGUgRGF0ZVxyXG4gKiAgICAgIGVycm9yTmFtZTogJ2VhcmxpZXJUaGVuJyxcclxuICogICAgICBlcnJvcjogJ1RoZSBkYXRlIGlzIG5vdCBlYXJsaWVyIHRoZW4gdGhlIHNwZWNpZmllZCBvbmUuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2VhcmxpZXJUaGVuXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBFYXJsaWVyVGhlblZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXJsaWVyVGhlblZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwiZWFybGllclRoZW5cIikgdmFsdWUhOiBEYXRlVmFsaWRhdGlvbkNvbmZpZztcclxuXHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGVhcmxpZXJUaGVuVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIGRhdGUgY29tcGFyaXNvbiBiZXR3ZWVuIGEgc3BlY2lmaWVkIGRhdGVcclxuICogYW5kIGEgZGF0ZSBpbiB0aGUgZ2l2ZW4gaW5wdXQgYW5kIHJldHVybnMgYW4gZXJyb3IgaWYgdGhlIGRhdGUgaW5cclxuICogdGhlIGdpdmVuIGlucHV0IGlzIGVhcmxpZXIgdGhlbiB0aGUgc3BlY2lmaWVkIG9uZS5cclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSBkYXRlIHRvIGNvbXBhcmUgdG9cclxuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwibGF0ZXJUaGVuXCJcclxuICogICBbbGF0ZXJUaGVuXT1cIntcclxuICogICAgICBkYXRlOiBkYXRlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tIGEgdmFyaWFibGUgb2YgdHlwZSBEYXRlXHJcbiAqICAgICAgZXJyb3JOYW1lOiAnbGF0ZXJUaGVuJyxcclxuICogICAgICBlcnJvcjogJ1RoZSBkYXRlIGlzIG5vdCBsYXRlciB0aGVuIHRoZSBzcGVjaWZpZWQgb25lLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltsYXRlclRoZW5dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IExhdGVyVGhlblZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXRlclRoZW5WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcImxhdGVyVGhlblwiKSB2YWx1ZSE6IERhdGVWYWxpZGF0aW9uQ29uZmlnO1xyXG5cclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gbGF0ZXJUaGVuVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIGRhdGUgY29tcGFyaXNvbiBiZXR3ZWVuIGEgc3BlY2lmaWVkIGRhdGVcclxuICogYW5kIGEgZGF0ZSBpbiB0aGUgZ2l2ZW4gaW5wdXQgYW5kIHJldHVybnMgYW4gZXJyb3IgaWYgY2hvc2VuIGNvbXBhcmlzb25cclxuICogZmFpbHMuXHJcbiAqXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgZGF0ZSB0byBjb21wYXJlIHRvLFxyXG4gKiBjb21wYXJpc29uIHRvIHByZWZvcm0gYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWVcclxuICogYW5kIGEgY3VzdG9tIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBBdmFpbGFibGUgY29tcGFyaXNvbnMgYXJlOiAnPCcgLCAnPicgLCAnPT0nICwgJz09PScgLCAnPD0nICwgJz49Jy5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImNvbXBhcmVUb1wiXHJcbiAqICAgW2NvbXBhcmVUb109XCJ7XHJcbiAqICAgICAgZGF0ZTogZGF0ZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLSBhIHZhcmlhYmxlIG9mIHR5cGUgRGF0ZVxyXG4gKiAgICAgIGNvbXBhcmlzb246ICc9PT0nXHJcbiAqICAgICAgZXJyb3JOYW1lOiAnY29tcGFyZVRvJyxcclxuICogICAgICBlcnJvcjogJ1RoZSBkYXRlcyBhcmUgbm90IHRoZSBzYW1lLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltjb21wYXJlVG9dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IENvbXBhcmVUb1ZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wYXJlVG9WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcImNvbXBhcmVUb1wiKSB2YWx1ZSE6IENvbXBhcmVWYWxpZGF0aW9uQ29uZmlnO1xyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBjb21wYXJlVG9WYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy52YWx1ZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgY29uZGl0aW9uYWwgY2hlY2sgYW5kIGlmIHRoZSBjb25kaXRpb25cclxuICogcGFzc2VzIGl0IHdpbGwgcmV0dXJuIGFuIGVycm9yLlxyXG4gKlxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIGNvbmRpdGlvbiB0aGF0IGlzIHRvIGJlIGNoZWNrZWRcclxuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIGVycm9yXHJcbiAqIGNvbnRlbnQgLyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicmVxdWlyZWRXaGVuXCJcclxuICogICBbcmVxdWlyZWRXaGVuXT1cIntcclxuICogICAgICBjb25kaXRpb25hbDogaXNUcnVlLCAgICAgICAgICAgICAgICAgICAgIC0gdGhpcyBjYW4gYmUgZXRoZXIgYSBib29sZWFuXHJcbiAqICAgICAgZXJyb3JOYW1lOiAncmVxdWlyZWRXaGVuJywgICAgICAgICAgICAgICAgICAgICBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGJvb2xlYW5cclxuICogICAgICBlcnJvcjogJ1RoZSBjb25kaXRpb24gaXMgdHJ1ZS4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqXHJcbiAqIE5PVEU6IEl0IGlzIG5vdCByZWNvbW1lbmRlZCB0byBwYXNzIGEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaW4gdGhlIHRlbXBsYXRlLFxyXG4gKiBhcyB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZS5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltyZXF1aXJlZFdoZW5dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFJlcXVpcmVkV2hlblZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXF1aXJlZFdoZW5WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcInJlcXVpcmVkV2hlblwiKSB2YWx1ZSE6IENvbmRpdGlvbmFsVmFsaWRhdGlvbkNvbmZpZztcclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gcmVxdWlyZWRXaGVuVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIGNoZWNrIGlmIHRoZSBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2xcclxuICogaGFzIGEgdmFsdWUgYW5kIGEgZ2l2ZW4gaW5wdXQgZG9lcyBub3QuXHJcbiAqXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3UgdGhlIG5hbWUgb2YgdGhlIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIHRvIGxpbmtcclxuICogdG8gYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIGVycm9yXHJcbiAqIGNvbnRlbnQgLyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwibGlua1RvXCJcclxuICogICBbbGlua1RvXT1cIntcclxuICogICAgICBsaW5rOiAnbGlua2VkVG8sICAgICAgICAgICAgICAgICAgICAgIC0gYSBuYW1lIG9mIGEgZm9ybSBjb250cm9sIHdlIHdhbnRcclxuICogICAgICBlcnJvck5hbWU6ICdsaW5rVG8nLCAgICAgICAgICAgICAgICAgICAgIHRvIGxpbmsgdGhlIGlucHV0IHRvXHJcbiAqICAgICAgZXJyb3I6ICdUaGUgbGlua2VkIGlucHV0IGhhcyBhIHZhbHVlIGJ1dCB0aGlzIG9uZSBkb2VzIG5vdCdcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltsaW5rVG9dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IExpbmtUb1ZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rVG9WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcImxpbmtUb1wiKSB2YWx1ZSE6IExpbmtWYWxpZGF0aW9uQ29uZmlnO1xyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBsaW5rVG9WYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy52YWx1ZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgY2hlY2sgaWYgdGhlIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbFxyXG4gKiBkb2VzIG5vdCBoYXZlIGEgdmFsdWUgYW5kIGEgZ2l2ZW4gaW5wdXQgZG9lcy5cclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSB0aGUgbmFtZSBvZiB0aGUgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgdG8gbGlua1xyXG4gKiB0byBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gZXJyb3JcclxuICogY29udGVudCAvIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJsaW5rZWRUb1wiXHJcbiAqICAgW2xpbmtlZFRvXT1cIntcclxuICogICAgICBsaW5rOiAnbGlua1RvLCAgICAgICAgICAgICAgICAgICAgICAtIGEgbmFtZSBvZiBhIGZvcm0gY29udHJvbCB3ZSB3YW50XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnbGlua2VkVG8nLCAgICAgICAgICAgICAgICAgICAgIHRvIGxpbmsgdGhlIGlucHV0IHRvXHJcbiAqICAgICAgZXJyb3I6ICdUaGUgbGlua2VkIGlucHV0IGRvZXMgbm90IGhhdmUgYSB2YWx1ZSBidXQgdGhpcyBvbmUgZG9lcy4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbbGlua2VkVG9dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IExpbmtlZFRvVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmtlZFRvVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICBASW5wdXQoXCJsaW5rZWRUb1wiKSB2YWx1ZSE6IExpbmtWYWxpZGF0aW9uQ29uZmlnO1xyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBsaW5rZWRUb1ZhbGlkYXRpb24oY29udHJvbCwgeyAuLi50aGlzLnZhbHVlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBjaGVjayBvbiBhIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCdzXHJcbiAqIHZhbHVlIGFuZCByZXR1cm5zIGFuIGVycm9yIGlmIHRoZSBnaXZlbiBjb21wYXJpc29uIGZhaWxzLlxyXG4gKlxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIGxlbmd0aCB0byBjb21wZXJlIHRvIGFuZCB0aGUgY29tcGFyaXNvblxyXG4gKiB0byBwcmVmb3JtLiBPcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBlcnJvclxyXG4gKiBjb250ZW50IC8gbWVzc2FnZS5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImxlbmd0aFwiXHJcbiAqICAgW2xlbmd0aF09XCJ7XHJcbiAqICAgICAgbGVuZ3RoOiA4LCAgICAgICAgICAgICAgICAgICAgICBcclxuICogICAgICBjb21wYXJpc29uOiBcIj5cIixcclxuICogICAgICBlcnJvck5hbWU6ICdsZW5ndGgnLCAgICAgICAgICAgICAgICAgICAgIFxyXG4gKiAgICAgIGVycm9yOiAnVmFsdWUgaXMgbm90IGxvbmcgZW5vdWdoLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltsZW5ndGhdXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IExlbmd0aFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMZW5ndGhWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcImxlbmd0aFwiKSB2YWx1ZSE6IExlbmd0aFZhbGlkYXRpb25Db25maWc7XHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGxlbmd0aFZhbGlkYXRpb24oY29udHJvbCwgeyAuLi50aGlzLnZhbHVlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBjaGVjayBvbiBhIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCdzXHJcbiAqIHZhbHVlIGFuZCByZXR1cm5zIGFuIGVycm9yIGlmIHRoZSB2YWx1ZSBpcyBub3QgaW4gdGhlIHNwZWNpZmllZCByYW5nZS5cclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSByYW5nZSBzdGFydCB2YWx1ZSwgcmFuZ2UgZW5kIHZhbHVlIFxyXG4gKiBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuXHJcbiAqIFxyXG4gKiBOT1RFOiBUaGUgcmFuZ2UgaXMgaW5jbHVzaXZlLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicmFuZ2VcIlxyXG4gKiAgIFtyYW5nZV09XCJ7XHJcbiAqICAgICAgc3RhcnQ6IDgsICAgICAgICAgICAgICAgICAgICAgIFxyXG4gKiAgICAgIGVuZDogMTQsXHJcbiAqICAgICAgZXJyb3JOYW1lOiAncmFuZ2UnLCAgICAgICAgICAgICAgICAgICAgIFxyXG4gKiAgICAgIGVycm9yOiAnVmFsdWUgaXMgbm90IGluIHRoZSBzcGVjaWZpZWQgcmFuZ2UuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3JhbmdlXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBSYW5nZVZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYW5nZVZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwicmFuZ2VcIikgdmFsdWUhOiBSYW5nZVZhbGlkYXRpb25Db25maWc7XHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHJhbmdlVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==