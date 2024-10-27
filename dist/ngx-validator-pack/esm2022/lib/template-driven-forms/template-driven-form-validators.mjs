import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, } from "@angular/forms";
import { compareToValidation, earlierThenValidation, laterThenValidation, linkToValidation, linkedToValidation, regexpNotValidation, regexpValidation, requiredWhenValidation, } from "../validations/validations";
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
 *   [regExpNot]="{
 *      regExp: /(s|regexp)/,
 *      errorName: 'regexpNotCheck',
 *      error: 'Failed regexpNot check.'
 *   }"
 * />
 */
export class RegExpNotValidatorDirective {
    validate(control) {
        return regexpNotValidation(control, { ...this.value });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtZHJpdmVuLWZvcm0tdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3RlbXBsYXRlLWRyaXZlbi1mb3Jtcy90ZW1wbGF0ZS1kcml2ZW4tZm9ybS12YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFFTCxhQUFhLEdBR2QsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLHNCQUFzQixHQUN2QixNQUFNLDRCQUE0QixDQUFDOztBQUVwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBWUgsTUFBTSxPQUFPLHdCQUF3QjtJQUduQyxRQUFRLENBQUMsT0FBd0I7UUFDL0IsT0FBTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7K0dBTFUsd0JBQXdCO21HQUF4Qix3QkFBd0IsK0ZBUnhCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7NEZBRVUsd0JBQXdCO2tCQVhwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLDBCQUEwQjs0QkFDckMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJB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Z0JBQ0UsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7NEZBRVUsd0JBQXdCO2tCQVhwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLDBCQUEwQjs0QkFDckMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7OEJBRWtCLEtBQUs7c0JBQXJCLEtBQUs7dUJBQUMsUUFBUTs7QUFNakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQVlILE1BQU0sT0FBTywwQkFBMEI7SUFFckMsUUFBUSxDQUFDLE9BQXdCO1FBQy9CLE9BQU8sa0JBQWtCLENBQUMsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOytHQUpVLDBCQUEwQjttR0FBMUIsMEJBQTBCLG1HQVIxQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7OzRGQUVVLDBCQUEwQjtrQkFYdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyw0QkFBNEI7NEJBQ3ZDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOzhCQUVvQixLQUFLO3NCQUF2QixLQUFLO3VCQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDb21wYXJlVmFsaWRhdGlvbklucHV0LFxyXG4gIENvbmRpdGlvbmFsVmFsaWRhdGlvbklucHV0LFxyXG4gIERhdGVWYWxpZGF0aW9uSW5wdXQsXHJcbiAgTGlua1ZhbGlkYXRpb25JbnB1dCxcclxufSBmcm9tIFwiLi8uLi9pbnRlcmZhY2VzL2RpcmVjdGl2ZS1pbnB1dC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgQWJzdHJhY3RDb250cm9sLFxyXG4gIE5HX1ZBTElEQVRPUlMsXHJcbiAgVmFsaWRhdGlvbkVycm9ycyxcclxuICBWYWxpZGF0b3IsXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFJlZ0V4cFZhbGlkYXRpb25JbnB1dCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2RpcmVjdGl2ZS1pbnB1dC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtcclxuICBjb21wYXJlVG9WYWxpZGF0aW9uLFxyXG4gIGVhcmxpZXJUaGVuVmFsaWRhdGlvbixcclxuICBsYXRlclRoZW5WYWxpZGF0aW9uLFxyXG4gIGxpbmtUb1ZhbGlkYXRpb24sXHJcbiAgbGlua2VkVG9WYWxpZGF0aW9uLFxyXG4gIHJlZ2V4cE5vdFZhbGlkYXRpb24sXHJcbiAgcmVnZXhwVmFsaWRhdGlvbixcclxuICByZXF1aXJlZFdoZW5WYWxpZGF0aW9uLFxyXG59IGZyb20gXCIuLi92YWxpZGF0aW9ucy92YWxpZGF0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgUmVnRXggY2hlY2sgb24gdmFsdWUgaW4gdGhlIGdpdmVuXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sXHJcbiAqXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgcmVndWxhciBleHByZXNzaW9uXHJcbiAqIGFuZCBvcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbVxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJyZWdleHBcIlxyXG4gKiAgICBpZD1cInJlZ2V4cFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInJlZ2V4cFwiXHJcbiAqICAgW3JlZ0V4cF09XCJ7XHJcbiAqICAgICAgcmVnRXhwOiAvKHN8cmVnZXhwKS8sXHJcbiAqICAgICAgZXJyb3JOYW1lOiAncmVnZXhwQ2hlY2snLFxyXG4gKiAgICAgIGVycm9yOiAnRmFpbGVkIHJlZ2V4cCBjaGVjay4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbcmVnRXhwXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICBASW5wdXQoXCJyZWdFeHBcIikgdmFsdWUhOiBSZWdFeHBWYWxpZGF0aW9uSW5wdXQ7XHJcblxyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy52YWx1ZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIFJlZ0V4IGNoZWNrIG9uIHZhbHVlIGluIHRoZSBnaXZlblxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBhbmQgcmV0dXJucyBhbiBlcnJvciBpZiByZWdleFxyXG4gKiBmb3VuZCBhIG1hdGNoXHJcbiAqXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgcmVndWxhciBleHByZXNzaW9uXHJcbiAqIGFuZCBvcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbVxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJyZWdleHBOb3RcIlxyXG4gKiAgICBpZD1cInJlZ2V4cE5vdFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInJlZ2V4cE5vdFwiXHJcbiAqICAgW3JlZ0V4cE5vdF09XCJ7XHJcbiAqICAgICAgcmVnRXhwOiAvKHN8cmVnZXhwKS8sXHJcbiAqICAgICAgZXJyb3JOYW1lOiAncmVnZXhwTm90Q2hlY2snLFxyXG4gKiAgICAgIGVycm9yOiAnRmFpbGVkIHJlZ2V4cE5vdCBjaGVjay4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbcmVnRXhwTm90XVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBSZWdFeHBOb3RWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnRXhwTm90VmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICBASW5wdXQoXCJyZWdFeHBOb3RcIikgdmFsdWUhOiBSZWdFeHBWYWxpZGF0aW9uSW5wdXQ7XHJcblxyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiByZWdleHBOb3RWYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy52YWx1ZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIGRhdGUgY29tcGFyaXNvbiBiZXR3ZWVuIGEgc3BlY2lmaWVkIGRhdGVcclxuICogYW5kIGEgZGF0ZSBpbiB0aGUgZ2l2ZW4gaW5wdXQgYW5kIHJldHVybnMgYW4gZXJyb3IgaWYgdGhlIGRhdGUgaW5cclxuICogdGhlIGdpdmVuIGlucHV0IGlzIGxhdGVyIHRoZW4gdGhlIHNwZWNpZmllZCBvbmUuXHJcbiAqXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgZGF0ZSB0byBjb21wYXJlIHRvXHJcbiAqIGFuZCBvcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbVxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJlYXJsaWVyVGhlblwiXHJcbiAqICAgIGlkPVwiZWFybGllclRoZW5cIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJlYXJsaWVyVGhlblwiXHJcbiAqICAgW2VhcmxpZXJUaGVuXT1cIntcclxuICogICAgICBkYXRlOiBkYXRlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tIGEgdmFyaWFibGUgb2YgdHlwZSBEYXRlXHJcbiAqICAgICAgZXJyb3JOYW1lOiAnZWFybGllclRoZW4nLFxyXG4gKiAgICAgIGVycm9yOiAnVGhlIGRhdGUgaXMgbm90IGVhcmxpZXIgdGhlbiB0aGUgc3BlY2lmaWVkIG9uZS4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbZWFybGllclRoZW5dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IEVhcmxpZXJUaGVuVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVhcmxpZXJUaGVuVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICBASW5wdXQoXCJlYXJsaWVyVGhlblwiKSB2YWx1ZSE6IERhdGVWYWxpZGF0aW9uSW5wdXQ7XHJcblxyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBlYXJsaWVyVGhlblZhbGlkYXRpb24oY29udHJvbCwgeyAuLi50aGlzLnZhbHVlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgZGF0ZSBjb21wYXJpc29uIGJldHdlZW4gYSBzcGVjaWZpZWQgZGF0ZVxyXG4gKiBhbmQgYSBkYXRlIGluIHRoZSBnaXZlbiBpbnB1dCBhbmQgcmV0dXJucyBhbiBlcnJvciBpZiB0aGUgZGF0ZSBpblxyXG4gKiB0aGUgZ2l2ZW4gaW5wdXQgaXMgZWFybGllciB0aGVuIHRoZSBzcGVjaWZpZWQgb25lLlxyXG4gKlxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIGRhdGUgdG8gY29tcGFyZSB0b1xyXG4gKiBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b21cclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwibGF0ZXJUaGVuXCJcclxuICogICAgaWQ9XCJsYXRlclRoZW5cIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJsYXRlclRoZW5cIlxyXG4gKiAgIFtsYXRlclRoZW5dPVwie1xyXG4gKiAgICAgIGRhdGU6IGRhdGUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS0gYSB2YXJpYWJsZSBvZiB0eXBlIERhdGVcclxuICogICAgICBlcnJvck5hbWU6ICdsYXRlclRoZW4nLFxyXG4gKiAgICAgIGVycm9yOiAnVGhlIGRhdGUgaXMgbm90IGxhdGVyIHRoZW4gdGhlIHNwZWNpZmllZCBvbmUuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2xhdGVyVGhlbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogTGF0ZXJUaGVuVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExhdGVyVGhlblZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwibGF0ZXJUaGVuXCIpIHZhbHVlITogRGF0ZVZhbGlkYXRpb25JbnB1dDtcclxuXHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGxhdGVyVGhlblZhbGlkYXRpb24oY29udHJvbCwgeyAuLi50aGlzLnZhbHVlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgZGF0ZSBjb21wYXJpc29uIGJldHdlZW4gYSBzcGVjaWZpZWQgZGF0ZVxyXG4gKiBhbmQgYSBkYXRlIGluIHRoZSBnaXZlbiBpbnB1dCBhbmQgcmV0dXJucyBhbiBlcnJvciBpZiBjaG9zZW4gY29tcGFyaXNvblxyXG4gKiBmYWlscy5cclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSBkYXRlIHRvIGNvbXBhcmUgdG8sXHJcbiAqIGNvbXBhcmlzb24gdG8gcHJlZm9ybSBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZVxyXG4gKiBhbmQgYSBjdXN0b20gZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEF2YWlsYWJsZSBjb21wYXJpc29ucyBhcmU6ICc8JyAsICc+JyAsICc9PScgLCAnPT09JyAsICc8PScgLCAnPj0nLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cImNvbXBhcmVUb1wiXHJcbiAqICAgIGlkPVwiY29tcGFyZVRvXCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiY29tcGFyZVRvXCJcclxuICogICBbY29tcGFyZVRvXT1cIntcclxuICogICAgICBkYXRlOiBkYXRlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tIGEgdmFyaWFibGUgb2YgdHlwZSBEYXRlXHJcbiAqICAgICAgY29tcGFyaXNvbjogJz09PSdcclxuICogICAgICBlcnJvck5hbWU6ICdjb21wYXJlVG8nLFxyXG4gKiAgICAgIGVycm9yOiAnVGhlIGRhdGVzIGFyZSBub3QgdGhlIHNhbWUuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2NvbXBhcmVUb11cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogQ29tcGFyZVRvVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBhcmVUb1ZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwiY29tcGFyZVRvXCIpIHZhbHVlITogQ29tcGFyZVZhbGlkYXRpb25JbnB1dDtcclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gY29tcGFyZVRvVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBjb25kaXRpb25hbCBjaGVjayBhbmQgaWYgdGhlIGNvbmRpdGlvblxyXG4gKiBwYXNzZXMgaXQgd2lsbCByZXR1cm4gYW4gZXJyb3IuXHJcbiAqXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgY29uZGl0aW9uIHRoYXQgaXMgdG8gYmUgY2hlY2tlZFxyXG4gKiBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gZXJyb3JcclxuICogY29udGVudCAvIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwicmVxdWlyZWRXaGVuXCJcclxuICogICAgaWQ9XCJyZXF1aXJlZFdoZW5cIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJyZXF1aXJlZFdoZW5cIlxyXG4gKiAgIFtyZXF1aXJlZFdoZW5dPVwie1xyXG4gKiAgICAgIGNvbmRpdGlvbmFsOiBpc1RydWUsICAgICAgICAgICAgICAgICAgICAgLSB0aGlzIGNhbiBiZSBldGhlciBhIGJvb2xlYW5cclxuICogICAgICBlcnJvck5hbWU6ICdyZXF1aXJlZFdoZW4nLCAgICAgICAgICAgICAgICAgICAgIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgYm9vbGVhblxyXG4gKiAgICAgIGVycm9yOiAnVGhlIGNvbmRpdGlvbiBpcyB0cnVlLidcclxuICogICB9XCJcclxuICogLz5cclxuICpcclxuICogTk9URTogSXQgaXMgbm90IHJlY29tbWVuZGVkIHRvIHBhc3MgYSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBpbiB0aGUgdGVtcGxhdGUsXHJcbiAqIGFzIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBleGVjdXRlZCBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3JlcXVpcmVkV2hlbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogUmVxdWlyZWRXaGVuVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcXVpcmVkV2hlblZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwicmVxdWlyZWRXaGVuXCIpIHZhbHVlITogQ29uZGl0aW9uYWxWYWxpZGF0aW9uSW5wdXQ7XHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHJlcXVpcmVkV2hlblZhbGlkYXRpb24oY29udHJvbCwgeyAuLi50aGlzLnZhbHVlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgY2hlY2sgaWYgdGhlIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbFxyXG4gKiBoYXMgYSB2YWx1ZSBhbmQgYSBnaXZlbiBpbnB1dCBkb2VzIG5vdC5cclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSB0aGUgbmFtZSBvZiB0aGUgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgdG8gbGlua1xyXG4gKiB0byBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gZXJyb3JcclxuICogY29udGVudCAvIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwibGlua1RvXCJcclxuICogICAgaWQ9XCJsaW5rVG9cIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJsaW5rVG9cIlxyXG4gKiAgIFtsaW5rVG9dPVwie1xyXG4gKiAgICAgIGxpbms6ICdsaW5rZWRUbywgICAgICAgICAgICAgICAgICAgICAgLSBhIG5hbWUgb2YgYSBmb3JtIGNvbnRyb2wgd2Ugd2FudFxyXG4gKiAgICAgIGVycm9yTmFtZTogJ2xpbmtUbycsICAgICAgICAgICAgICAgICAgICAgdG8gbGluayB0aGUgaW5wdXQgdG9cclxuICogICAgICBlcnJvcjogJ1RoZSBsaW5rZWQgaW5wdXQgaGFzIGEgdmFsdWUgYnV0IHRoaXMgb25lIGRvZXMgbm90J1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2xpbmtUb11cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogTGlua1RvVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmtUb1ZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwibGlua1RvXCIpIHZhbHVlITogTGlua1ZhbGlkYXRpb25JbnB1dDtcclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gbGlua1RvVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBjaGVjayBpZiB0aGUgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sXHJcbiAqIGRvZXMgbm90IGhhdmUgYSB2YWx1ZSBhbmQgYSBnaXZlbiBpbnB1dCBkb2VzLlxyXG4gKlxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHRoZSBuYW1lIG9mIHRoZSBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCB0byBsaW5rXHJcbiAqIHRvIGFuZCBvcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBlcnJvclxyXG4gKiBjb250ZW50IC8gbWVzc2FnZS5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJsaW5rZWRUb1wiXHJcbiAqICAgIGlkPVwibGlua2VkVG9cIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJsaW5rZWRUb1wiXHJcbiAqICAgW2xpbmtlZFRvXT1cIntcclxuICogICAgICBsaW5rOiAnbGlua1RvLCAgICAgICAgICAgICAgICAgICAgICAtIGEgbmFtZSBvZiBhIGZvcm0gY29udHJvbCB3ZSB3YW50XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnbGlua2VkVG8nLCAgICAgICAgICAgICAgICAgICAgIHRvIGxpbmsgdGhlIGlucHV0IHRvXHJcbiAqICAgICAgZXJyb3I6ICdUaGUgbGlua2VkIGlucHV0IGRvZXMgbm90IGhhdmUgYSB2YWx1ZSBidXQgdGhpcyBvbmUgZG9lcy4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbbGlua2VkVG9dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IExpbmtlZFRvVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmtlZFRvVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICBASW5wdXQoXCJsaW5rZWRUb1wiKSB2YWx1ZSE6IExpbmtWYWxpZGF0aW9uSW5wdXQ7XHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGxpbmtlZFRvVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMudmFsdWUgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==