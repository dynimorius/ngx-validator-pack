/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, } from "@angular/forms";
import { compareToValidation, earlierThenValidation, laterThenValidation, linkToValidation, linkedToValidation, regexpTestNotValidation, regexpTestValidation, requiredWhenValidation } from "../../validations/validations";
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
        return regexpTestValidation(control, { ...this.value });
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
 * A Directive that preforms a RegEx check on value in the given
 * FromControl / AbstractControl and returns an error if regex
 * found a match
 *
 * Has an input in which you specify the regular expression
 * and optionally you can give it a custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="regexpNot"
 *   [regExpNot]="{
 *      regExp: /(s|regexp)/,
 *      errorName: 'regexpNotCheck',
 *      error: 'Failed regexpNot check.'
 *   }"
 * />
 */
export class RegExpNotValidatorDirective {
    validate(control) {
        return regexpTestNotValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RegExpNotValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RegExpNotValidatorDirective, isStandalone: true, selector: "[regExpNot]", inputs: { value: ["regExpNot", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RegExpNotValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RegExpNotValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[regExpNot]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: RegExpNotValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["regExpNot"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtZHJpdmVuLWZvcm0tdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3ZhbGlkYXRvcnMvdGVtcGxhdGUtZHJpdmVuLWZvcm1zL3RlbXBsYXRlLWRyaXZlbi1mb3JtLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBR0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUVMLGFBQWEsR0FHZCxNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUc3Tjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFZSCxNQUFNLE9BQU8sd0JBQXdCO0lBR25DLFFBQVEsQ0FBQyxPQUF3QjtRQUMvQixPQUFPLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQzsrR0FMVSx3QkFBd0I7bUdBQXhCLHdCQUF3QiwrRkFSeEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOzs0RkFFVSx3QkFBd0I7a0JBWHBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsMEJBQTBCOzRCQUNyQyxLQUFLLEVBQUUs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QiwrRkFSeEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOzs0RkFFVSx3QkFBd0I7a0JBWHBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsMEJBQTBCOzRCQUNyQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs4QkFFa0IsS0FBSztzQkFBckIsS0FBSzt1QkFBQyxRQUFROztBQU1qQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFZSCxNQUFNLE9BQU8sMEJBQTBCO0lBRXJDLFFBQVEsQ0FBQyxPQUF3QjtRQUMvQixPQUFPLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzsrR0FKVSwwQkFBMEI7bUdBQTFCLDBCQUEwQixtR0FSMUI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOzs0RkFFVSwwQkFBMEI7a0JBWHRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsNEJBQTRCOzRCQUN2QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs4QkFFb0IsS0FBSztzQkFBdkIsS0FBSzt1QkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xyXG4gKi9cclxuXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBBYnN0cmFjdENvbnRyb2wsXHJcbiAgTkdfVkFMSURBVE9SUyxcclxuICBWYWxpZGF0aW9uRXJyb3JzLFxyXG4gIFZhbGlkYXRvcixcclxufSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ29tcGFyZVZhbGlkYXRpb25JbnB1dCwgQ29uZGl0aW9uYWxWYWxpZGF0aW9uSW5wdXQsIERhdGVWYWxpZGF0aW9uSW5wdXQsIExpbmtWYWxpZGF0aW9uSW5wdXQsIFJlZ0V4cFZhbGlkYXRpb25JbnB1dCB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2RpcmVjdGl2ZS1pbnB1dC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgY29tcGFyZVRvVmFsaWRhdGlvbiwgZWFybGllclRoZW5WYWxpZGF0aW9uLCBsYXRlclRoZW5WYWxpZGF0aW9uLCBsaW5rVG9WYWxpZGF0aW9uLCBsaW5rZWRUb1ZhbGlkYXRpb24sIHJlZ2V4cFRlc3ROb3RWYWxpZGF0aW9uLCByZWdleHBUZXN0VmFsaWRhdGlvbiwgcmVxdWlyZWRXaGVuVmFsaWRhdGlvbiB9IGZyb20gXCIuLi8uLi92YWxpZGF0aW9ucy92YWxpZGF0aW9uc1wiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgUmVnRXggY2hlY2sgb24gdmFsdWUgaW4gdGhlIGdpdmVuXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sXHJcbiAqXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgcmVndWxhciBleHByZXNzaW9uXHJcbiAqIGFuZCBvcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbVxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInJlZ2V4cFwiXHJcbiAqICAgW3JlZ0V4cF09XCJ7XHJcbiAqICAgICAgcmVnRXhwOiAvKHN8cmVnZXhwKS8sXHJcbiAqICAgICAgZXJyb3JOYW1lOiAncmVnZXhwQ2hlY2snLFxyXG4gKiAgICAgIGVycm9yOiAnRmFpbGVkIHJlZ2V4cCBjaGVjay4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbcmVnRXhwXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICBASW5wdXQoXCJyZWdFeHBcIikgdmFsdWUhOiBSZWdFeHBWYWxpZGF0aW9uSW5wdXQ7XHJcblxyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiByZWdleHBUZXN0VmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIFJlZ0V4IGNoZWNrIG9uIHZhbHVlIGluIHRoZSBnaXZlblxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBhbmQgcmV0dXJucyBhbiBlcnJvciBpZiByZWdleFxyXG4gKiBmb3VuZCBhIG1hdGNoXHJcbiAqXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgcmVndWxhciBleHByZXNzaW9uXHJcbiAqIGFuZCBvcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbVxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInJlZ2V4cE5vdFwiXHJcbiAqICAgW3JlZ0V4cE5vdF09XCJ7XHJcbiAqICAgICAgcmVnRXhwOiAvKHN8cmVnZXhwKS8sXHJcbiAqICAgICAgZXJyb3JOYW1lOiAncmVnZXhwTm90Q2hlY2snLFxyXG4gKiAgICAgIGVycm9yOiAnRmFpbGVkIHJlZ2V4cE5vdCBjaGVjay4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbcmVnRXhwTm90XVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBSZWdFeHBOb3RWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnRXhwTm90VmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICBASW5wdXQoXCJyZWdFeHBOb3RcIikgdmFsdWUhOiBSZWdFeHBWYWxpZGF0aW9uSW5wdXQ7XHJcblxyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiByZWdleHBUZXN0Tm90VmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIGRhdGUgY29tcGFyaXNvbiBiZXR3ZWVuIGEgc3BlY2lmaWVkIGRhdGVcclxuICogYW5kIGEgZGF0ZSBpbiB0aGUgZ2l2ZW4gaW5wdXQgYW5kIHJldHVybnMgYW4gZXJyb3IgaWYgdGhlIGRhdGUgaW5cclxuICogdGhlIGdpdmVuIGlucHV0IGlzIGxhdGVyIHRoZW4gdGhlIHNwZWNpZmllZCBvbmUuXHJcbiAqXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgZGF0ZSB0byBjb21wYXJlIHRvXHJcbiAqIGFuZCBvcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbVxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImVhcmxpZXJUaGVuXCJcclxuICogICBbZWFybGllclRoZW5dPVwie1xyXG4gKiAgICAgIGRhdGU6IGRhdGUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS0gYSB2YXJpYWJsZSBvZiB0eXBlIERhdGVcclxuICogICAgICBlcnJvck5hbWU6ICdlYXJsaWVyVGhlbicsXHJcbiAqICAgICAgZXJyb3I6ICdUaGUgZGF0ZSBpcyBub3QgZWFybGllciB0aGVuIHRoZSBzcGVjaWZpZWQgb25lLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltlYXJsaWVyVGhlbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogRWFybGllclRoZW5WYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWFybGllclRoZW5WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcImVhcmxpZXJUaGVuXCIpIHZhbHVlITogRGF0ZVZhbGlkYXRpb25JbnB1dDtcclxuXHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGVhcmxpZXJUaGVuVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIGRhdGUgY29tcGFyaXNvbiBiZXR3ZWVuIGEgc3BlY2lmaWVkIGRhdGVcclxuICogYW5kIGEgZGF0ZSBpbiB0aGUgZ2l2ZW4gaW5wdXQgYW5kIHJldHVybnMgYW4gZXJyb3IgaWYgdGhlIGRhdGUgaW5cclxuICogdGhlIGdpdmVuIGlucHV0IGlzIGVhcmxpZXIgdGhlbiB0aGUgc3BlY2lmaWVkIG9uZS5cclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSBkYXRlIHRvIGNvbXBhcmUgdG9cclxuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwibGF0ZXJUaGVuXCJcclxuICogICBbbGF0ZXJUaGVuXT1cIntcclxuICogICAgICBkYXRlOiBkYXRlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tIGEgdmFyaWFibGUgb2YgdHlwZSBEYXRlXHJcbiAqICAgICAgZXJyb3JOYW1lOiAnbGF0ZXJUaGVuJyxcclxuICogICAgICBlcnJvcjogJ1RoZSBkYXRlIGlzIG5vdCBsYXRlciB0aGVuIHRoZSBzcGVjaWZpZWQgb25lLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltsYXRlclRoZW5dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IExhdGVyVGhlblZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXRlclRoZW5WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcImxhdGVyVGhlblwiKSB2YWx1ZSE6IERhdGVWYWxpZGF0aW9uSW5wdXQ7XHJcblxyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBsYXRlclRoZW5WYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy52YWx1ZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgZGF0ZSBjb21wYXJpc29uIGJldHdlZW4gYSBzcGVjaWZpZWQgZGF0ZVxyXG4gKiBhbmQgYSBkYXRlIGluIHRoZSBnaXZlbiBpbnB1dCBhbmQgcmV0dXJucyBhbiBlcnJvciBpZiBjaG9zZW4gY29tcGFyaXNvblxyXG4gKiBmYWlscy5cclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSBkYXRlIHRvIGNvbXBhcmUgdG8sXHJcbiAqIGNvbXBhcmlzb24gdG8gcHJlZm9ybSBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZVxyXG4gKiBhbmQgYSBjdXN0b20gZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEF2YWlsYWJsZSBjb21wYXJpc29ucyBhcmU6ICc8JyAsICc+JyAsICc9PScgLCAnPT09JyAsICc8PScgLCAnPj0nLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiY29tcGFyZVRvXCJcclxuICogICBbY29tcGFyZVRvXT1cIntcclxuICogICAgICBkYXRlOiBkYXRlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tIGEgdmFyaWFibGUgb2YgdHlwZSBEYXRlXHJcbiAqICAgICAgY29tcGFyaXNvbjogJz09PSdcclxuICogICAgICBlcnJvck5hbWU6ICdjb21wYXJlVG8nLFxyXG4gKiAgICAgIGVycm9yOiAnVGhlIGRhdGVzIGFyZSBub3QgdGhlIHNhbWUuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2NvbXBhcmVUb11cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogQ29tcGFyZVRvVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBhcmVUb1ZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwiY29tcGFyZVRvXCIpIHZhbHVlITogQ29tcGFyZVZhbGlkYXRpb25JbnB1dDtcclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gY29tcGFyZVRvVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIGNvbmRpdGlvbmFsIGNoZWNrIGFuZCBpZiB0aGUgY29uZGl0aW9uXHJcbiAqIHBhc3NlcyBpdCB3aWxsIHJldHVybiBhbiBlcnJvci5cclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSBjb25kaXRpb24gdGhhdCBpcyB0byBiZSBjaGVja2VkXHJcbiAqIGFuZCBvcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBlcnJvclxyXG4gKiBjb250ZW50IC8gbWVzc2FnZS5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInJlcXVpcmVkV2hlblwiXHJcbiAqICAgW3JlcXVpcmVkV2hlbl09XCJ7XHJcbiAqICAgICAgY29uZGl0aW9uYWw6IGlzVHJ1ZSwgICAgICAgICAgICAgICAgICAgICAtIHRoaXMgY2FuIGJlIGV0aGVyIGEgYm9vbGVhblxyXG4gKiAgICAgIGVycm9yTmFtZTogJ3JlcXVpcmVkV2hlbicsICAgICAgICAgICAgICAgICAgICAgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBib29sZWFuXHJcbiAqICAgICAgZXJyb3I6ICdUaGUgY29uZGl0aW9uIGlzIHRydWUuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKlxyXG4gKiBOT1RFOiBJdCBpcyBub3QgcmVjb21tZW5kZWQgdG8gcGFzcyBhIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGluIHRoZSB0ZW1wbGF0ZSxcclxuICogYXMgdGhpcyBmdW5jdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbcmVxdWlyZWRXaGVuXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBSZXF1aXJlZFdoZW5WYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVxdWlyZWRXaGVuVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICBASW5wdXQoXCJyZXF1aXJlZFdoZW5cIikgdmFsdWUhOiBDb25kaXRpb25hbFZhbGlkYXRpb25JbnB1dDtcclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gcmVxdWlyZWRXaGVuVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIGNoZWNrIGlmIHRoZSBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2xcclxuICogaGFzIGEgdmFsdWUgYW5kIGEgZ2l2ZW4gaW5wdXQgZG9lcyBub3QuXHJcbiAqXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3UgdGhlIG5hbWUgb2YgdGhlIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIHRvIGxpbmtcclxuICogdG8gYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIGVycm9yXHJcbiAqIGNvbnRlbnQgLyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwibGlua1RvXCJcclxuICogICBbbGlua1RvXT1cIntcclxuICogICAgICBsaW5rOiAnbGlua2VkVG8sICAgICAgICAgICAgICAgICAgICAgIC0gYSBuYW1lIG9mIGEgZm9ybSBjb250cm9sIHdlIHdhbnRcclxuICogICAgICBlcnJvck5hbWU6ICdsaW5rVG8nLCAgICAgICAgICAgICAgICAgICAgIHRvIGxpbmsgdGhlIGlucHV0IHRvXHJcbiAqICAgICAgZXJyb3I6ICdUaGUgbGlua2VkIGlucHV0IGhhcyBhIHZhbHVlIGJ1dCB0aGlzIG9uZSBkb2VzIG5vdCdcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltsaW5rVG9dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IExpbmtUb1ZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rVG9WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcImxpbmtUb1wiKSB2YWx1ZSE6IExpbmtWYWxpZGF0aW9uSW5wdXQ7XHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGxpbmtUb1ZhbGlkYXRpb24oY29udHJvbCwgeyAuLi50aGlzLnZhbHVlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBjaGVjayBpZiB0aGUgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sXHJcbiAqIGRvZXMgbm90IGhhdmUgYSB2YWx1ZSBhbmQgYSBnaXZlbiBpbnB1dCBkb2VzLlxyXG4gKlxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHRoZSBuYW1lIG9mIHRoZSBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCB0byBsaW5rXHJcbiAqIHRvIGFuZCBvcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBlcnJvclxyXG4gKiBjb250ZW50IC8gbWVzc2FnZS5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImxpbmtlZFRvXCJcclxuICogICBbbGlua2VkVG9dPVwie1xyXG4gKiAgICAgIGxpbms6ICdsaW5rVG8sICAgICAgICAgICAgICAgICAgICAgIC0gYSBuYW1lIG9mIGEgZm9ybSBjb250cm9sIHdlIHdhbnRcclxuICogICAgICBlcnJvck5hbWU6ICdsaW5rZWRUbycsICAgICAgICAgICAgICAgICAgICAgdG8gbGluayB0aGUgaW5wdXQgdG9cclxuICogICAgICBlcnJvcjogJ1RoZSBsaW5rZWQgaW5wdXQgZG9lcyBub3QgaGF2ZSBhIHZhbHVlIGJ1dCB0aGlzIG9uZSBkb2VzLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltsaW5rZWRUb11cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogTGlua2VkVG9WYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlua2VkVG9WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcImxpbmtlZFRvXCIpIHZhbHVlITogTGlua1ZhbGlkYXRpb25JbnB1dDtcclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gbGlua2VkVG9WYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy52YWx1ZSB9KTtcclxuICB9XHJcbn1cclxuIl19