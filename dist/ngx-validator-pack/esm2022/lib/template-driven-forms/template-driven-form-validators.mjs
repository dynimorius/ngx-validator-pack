import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, } from "@angular/forms";
import { compareToValidation, earlierThenValidation, laterThenValidation, linkToValidation, linkedToValidation, regexpTestValidation, requiredWhenValidation, regexpTestNotValidation, } from "../validations/validations";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtZHJpdmVuLWZvcm0tdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3RlbXBsYXRlLWRyaXZlbi1mb3Jtcy90ZW1wbGF0ZS1kcml2ZW4tZm9ybS12YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFFTCxhQUFhLEdBR2QsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIsc0JBQXNCLEVBQ3RCLHVCQUF1QixHQUN4QixNQUFNLDRCQUE0QixDQUFDOztBQUVwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFZSCxNQUFNLE9BQU8sd0JBQXdCO0lBR25DLFFBQVEsQ0FBQyxPQUF3QjtRQUMvQixPQUFPLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQzsrR0FMVSx3QkFBd0I7bUdBQXhCLHdCQUF3QiwrRkFSeEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOzs0RkFFVSx3QkFBd0I7a0JBWHBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsMEJBQTBCOzRCQUNyQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFD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QUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOzs0RkFFVSx3QkFBd0I7a0JBWHBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsMEJBQTBCOzRCQUNyQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs4QkFFa0IsS0FBSztzQkFBckIsS0FBSzt1QkFBQyxRQUFROztBQU1qQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFZSCxNQUFNLE9BQU8sMEJBQTBCO0lBRXJDLFFBQVEsQ0FBQyxPQUF3QjtRQUMvQixPQUFPLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzsrR0FKVSwwQkFBMEI7bUdBQTFCLDBCQUEwQixtR0FSMUI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOzs0RkFFVSwwQkFBMEI7a0JBWHRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsNEJBQTRCOzRCQUN2QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs4QkFFb0IsS0FBSztzQkFBdkIsS0FBSzt1QkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ29tcGFyZVZhbGlkYXRpb25JbnB1dCxcclxuICBDb25kaXRpb25hbFZhbGlkYXRpb25JbnB1dCxcclxuICBEYXRlVmFsaWRhdGlvbklucHV0LFxyXG4gIExpbmtWYWxpZGF0aW9uSW5wdXQsXHJcbn0gZnJvbSBcIi4vLi4vaW50ZXJmYWNlcy9kaXJlY3RpdmUtaW5wdXQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEFic3RyYWN0Q29udHJvbCxcclxuICBOR19WQUxJREFUT1JTLFxyXG4gIFZhbGlkYXRpb25FcnJvcnMsXHJcbiAgVmFsaWRhdG9yLFxyXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBSZWdFeHBWYWxpZGF0aW9uSW5wdXQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9kaXJlY3RpdmUtaW5wdXQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgY29tcGFyZVRvVmFsaWRhdGlvbixcclxuICBlYXJsaWVyVGhlblZhbGlkYXRpb24sXHJcbiAgbGF0ZXJUaGVuVmFsaWRhdGlvbixcclxuICBsaW5rVG9WYWxpZGF0aW9uLFxyXG4gIGxpbmtlZFRvVmFsaWRhdGlvbixcclxuICByZWdleHBUZXN0VmFsaWRhdGlvbixcclxuICByZXF1aXJlZFdoZW5WYWxpZGF0aW9uLFxyXG4gIHJlZ2V4cFRlc3ROb3RWYWxpZGF0aW9uLFxyXG59IGZyb20gXCIuLi92YWxpZGF0aW9ucy92YWxpZGF0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBSZWdFeCBjaGVjayBvbiB2YWx1ZSBpbiB0aGUgZ2l2ZW5cclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2xcclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSByZWd1bGFyIGV4cHJlc3Npb25cclxuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicmVnZXhwXCJcclxuICogICBbcmVnRXhwXT1cIntcclxuICogICAgICByZWdFeHA6IC8oc3xyZWdleHApLyxcclxuICogICAgICBlcnJvck5hbWU6ICdyZWdleHBDaGVjaycsXHJcbiAqICAgICAgZXJyb3I6ICdGYWlsZWQgcmVnZXhwIGNoZWNrLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltyZWdFeHBdXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcInJlZ0V4cFwiKSB2YWx1ZSE6IFJlZ0V4cFZhbGlkYXRpb25JbnB1dDtcclxuXHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFRlc3RWYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy52YWx1ZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgUmVnRXggY2hlY2sgb24gdmFsdWUgaW4gdGhlIGdpdmVuXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGFuZCByZXR1cm5zIGFuIGVycm9yIGlmIHJlZ2V4XHJcbiAqIGZvdW5kIGEgbWF0Y2hcclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSByZWd1bGFyIGV4cHJlc3Npb25cclxuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicmVnZXhwTm90XCJcclxuICogICBbcmVnRXhwTm90XT1cIntcclxuICogICAgICByZWdFeHA6IC8oc3xyZWdleHApLyxcclxuICogICAgICBlcnJvck5hbWU6ICdyZWdleHBOb3RDaGVjaycsXHJcbiAqICAgICAgZXJyb3I6ICdGYWlsZWQgcmVnZXhwTm90IGNoZWNrLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltyZWdFeHBOb3RdXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFJlZ0V4cE5vdFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWdFeHBOb3RWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcInJlZ0V4cE5vdFwiKSB2YWx1ZSE6IFJlZ0V4cFZhbGlkYXRpb25JbnB1dDtcclxuXHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFRlc3ROb3RWYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy52YWx1ZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgZGF0ZSBjb21wYXJpc29uIGJldHdlZW4gYSBzcGVjaWZpZWQgZGF0ZVxyXG4gKiBhbmQgYSBkYXRlIGluIHRoZSBnaXZlbiBpbnB1dCBhbmQgcmV0dXJucyBhbiBlcnJvciBpZiB0aGUgZGF0ZSBpblxyXG4gKiB0aGUgZ2l2ZW4gaW5wdXQgaXMgbGF0ZXIgdGhlbiB0aGUgc3BlY2lmaWVkIG9uZS5cclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSBkYXRlIHRvIGNvbXBhcmUgdG9cclxuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiZWFybGllclRoZW5cIlxyXG4gKiAgIFtlYXJsaWVyVGhlbl09XCJ7XHJcbiAqICAgICAgZGF0ZTogZGF0ZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLSBhIHZhcmlhYmxlIG9mIHR5cGUgRGF0ZVxyXG4gKiAgICAgIGVycm9yTmFtZTogJ2VhcmxpZXJUaGVuJyxcclxuICogICAgICBlcnJvcjogJ1RoZSBkYXRlIGlzIG5vdCBlYXJsaWVyIHRoZW4gdGhlIHNwZWNpZmllZCBvbmUuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2VhcmxpZXJUaGVuXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBFYXJsaWVyVGhlblZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFYXJsaWVyVGhlblZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwiZWFybGllclRoZW5cIikgdmFsdWUhOiBEYXRlVmFsaWRhdGlvbklucHV0O1xyXG5cclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gZWFybGllclRoZW5WYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy52YWx1ZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgZGF0ZSBjb21wYXJpc29uIGJldHdlZW4gYSBzcGVjaWZpZWQgZGF0ZVxyXG4gKiBhbmQgYSBkYXRlIGluIHRoZSBnaXZlbiBpbnB1dCBhbmQgcmV0dXJucyBhbiBlcnJvciBpZiB0aGUgZGF0ZSBpblxyXG4gKiB0aGUgZ2l2ZW4gaW5wdXQgaXMgZWFybGllciB0aGVuIHRoZSBzcGVjaWZpZWQgb25lLlxyXG4gKlxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIGRhdGUgdG8gY29tcGFyZSB0b1xyXG4gKiBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b21cclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJsYXRlclRoZW5cIlxyXG4gKiAgIFtsYXRlclRoZW5dPVwie1xyXG4gKiAgICAgIGRhdGU6IGRhdGUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS0gYSB2YXJpYWJsZSBvZiB0eXBlIERhdGVcclxuICogICAgICBlcnJvck5hbWU6ICdsYXRlclRoZW4nLFxyXG4gKiAgICAgIGVycm9yOiAnVGhlIGRhdGUgaXMgbm90IGxhdGVyIHRoZW4gdGhlIHNwZWNpZmllZCBvbmUuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2xhdGVyVGhlbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogTGF0ZXJUaGVuVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExhdGVyVGhlblZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwibGF0ZXJUaGVuXCIpIHZhbHVlITogRGF0ZVZhbGlkYXRpb25JbnB1dDtcclxuXHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGxhdGVyVGhlblZhbGlkYXRpb24oY29udHJvbCwgeyAuLi50aGlzLnZhbHVlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBkYXRlIGNvbXBhcmlzb24gYmV0d2VlbiBhIHNwZWNpZmllZCBkYXRlXHJcbiAqIGFuZCBhIGRhdGUgaW4gdGhlIGdpdmVuIGlucHV0IGFuZCByZXR1cm5zIGFuIGVycm9yIGlmIGNob3NlbiBjb21wYXJpc29uXHJcbiAqIGZhaWxzLlxyXG4gKlxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIGRhdGUgdG8gY29tcGFyZSB0byxcclxuICogY29tcGFyaXNvbiB0byBwcmVmb3JtIGFuZCBvcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lXHJcbiAqIGFuZCBhIGN1c3RvbSBlcnJvciBjb250ZW50IC8gbWVzc2FnZS5cclxuICpcclxuICogQXZhaWxhYmxlIGNvbXBhcmlzb25zIGFyZTogJzwnICwgJz4nICwgJz09JyAsICc9PT0nICwgJzw9JyAsICc+PScuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJjb21wYXJlVG9cIlxyXG4gKiAgIFtjb21wYXJlVG9dPVwie1xyXG4gKiAgICAgIGRhdGU6IGRhdGUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS0gYSB2YXJpYWJsZSBvZiB0eXBlIERhdGVcclxuICogICAgICBjb21wYXJpc29uOiAnPT09J1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ2NvbXBhcmVUbycsXHJcbiAqICAgICAgZXJyb3I6ICdUaGUgZGF0ZXMgYXJlIG5vdCB0aGUgc2FtZS4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbY29tcGFyZVRvXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBDb21wYXJlVG9WYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcGFyZVRvVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICBASW5wdXQoXCJjb21wYXJlVG9cIikgdmFsdWUhOiBDb21wYXJlVmFsaWRhdGlvbklucHV0O1xyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBjb21wYXJlVG9WYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy52YWx1ZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgY29uZGl0aW9uYWwgY2hlY2sgYW5kIGlmIHRoZSBjb25kaXRpb25cclxuICogcGFzc2VzIGl0IHdpbGwgcmV0dXJuIGFuIGVycm9yLlxyXG4gKlxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIGNvbmRpdGlvbiB0aGF0IGlzIHRvIGJlIGNoZWNrZWRcclxuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIGVycm9yXHJcbiAqIGNvbnRlbnQgLyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicmVxdWlyZWRXaGVuXCJcclxuICogICBbcmVxdWlyZWRXaGVuXT1cIntcclxuICogICAgICBjb25kaXRpb25hbDogaXNUcnVlLCAgICAgICAgICAgICAgICAgICAgIC0gdGhpcyBjYW4gYmUgZXRoZXIgYSBib29sZWFuXHJcbiAqICAgICAgZXJyb3JOYW1lOiAncmVxdWlyZWRXaGVuJywgICAgICAgICAgICAgICAgICAgICBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGJvb2xlYW5cclxuICogICAgICBlcnJvcjogJ1RoZSBjb25kaXRpb24gaXMgdHJ1ZS4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqXHJcbiAqIE5PVEU6IEl0IGlzIG5vdCByZWNvbW1lbmRlZCB0byBwYXNzIGEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaW4gdGhlIHRlbXBsYXRlLFxyXG4gKiBhcyB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZS5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltyZXF1aXJlZFdoZW5dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFJlcXVpcmVkV2hlblZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXF1aXJlZFdoZW5WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcInJlcXVpcmVkV2hlblwiKSB2YWx1ZSE6IENvbmRpdGlvbmFsVmFsaWRhdGlvbklucHV0O1xyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiByZXF1aXJlZFdoZW5WYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy52YWx1ZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgY2hlY2sgaWYgdGhlIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbFxyXG4gKiBoYXMgYSB2YWx1ZSBhbmQgYSBnaXZlbiBpbnB1dCBkb2VzIG5vdC5cclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSB0aGUgbmFtZSBvZiB0aGUgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgdG8gbGlua1xyXG4gKiB0byBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gZXJyb3JcclxuICogY29udGVudCAvIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJsaW5rVG9cIlxyXG4gKiAgIFtsaW5rVG9dPVwie1xyXG4gKiAgICAgIGxpbms6ICdsaW5rZWRUbywgICAgICAgICAgICAgICAgICAgICAgLSBhIG5hbWUgb2YgYSBmb3JtIGNvbnRyb2wgd2Ugd2FudFxyXG4gKiAgICAgIGVycm9yTmFtZTogJ2xpbmtUbycsICAgICAgICAgICAgICAgICAgICAgdG8gbGluayB0aGUgaW5wdXQgdG9cclxuICogICAgICBlcnJvcjogJ1RoZSBsaW5rZWQgaW5wdXQgaGFzIGEgdmFsdWUgYnV0IHRoaXMgb25lIGRvZXMgbm90J1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2xpbmtUb11cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogTGlua1RvVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmtUb1ZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwibGlua1RvXCIpIHZhbHVlITogTGlua1ZhbGlkYXRpb25JbnB1dDtcclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gbGlua1RvVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIGNoZWNrIGlmIHRoZSBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2xcclxuICogZG9lcyBub3QgaGF2ZSBhIHZhbHVlIGFuZCBhIGdpdmVuIGlucHV0IGRvZXMuXHJcbiAqXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3UgdGhlIG5hbWUgb2YgdGhlIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIHRvIGxpbmtcclxuICogdG8gYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIGVycm9yXHJcbiAqIGNvbnRlbnQgLyBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwibGlua2VkVG9cIlxyXG4gKiAgIFtsaW5rZWRUb109XCJ7XHJcbiAqICAgICAgbGluazogJ2xpbmtUbywgICAgICAgICAgICAgICAgICAgICAgLSBhIG5hbWUgb2YgYSBmb3JtIGNvbnRyb2wgd2Ugd2FudFxyXG4gKiAgICAgIGVycm9yTmFtZTogJ2xpbmtlZFRvJywgICAgICAgICAgICAgICAgICAgICB0byBsaW5rIHRoZSBpbnB1dCB0b1xyXG4gKiAgICAgIGVycm9yOiAnVGhlIGxpbmtlZCBpbnB1dCBkb2VzIG5vdCBoYXZlIGEgdmFsdWUgYnV0IHRoaXMgb25lIGRvZXMuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2xpbmtlZFRvXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBMaW5rZWRUb1ZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rZWRUb1ZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwibGlua2VkVG9cIikgdmFsdWUhOiBMaW5rVmFsaWRhdGlvbklucHV0O1xyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBsaW5rZWRUb1ZhbGlkYXRpb24oY29udHJvbCwgeyAuLi50aGlzLnZhbHVlIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=