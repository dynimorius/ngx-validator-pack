import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, } from "@angular/forms";
import { compareDates, prepareToCompare } from "../helpers/date";
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
export class RegExpValidatorDirective {
    validate(control) {
        const error = this.value.error ??
            "This control did not match a given regular expression.";
        const errors = {
            [this.value.errorName ?? "regexpValidation"]: error,
        };
        return !this.value.regExp ||
            !control.value ||
            this.value.regExp.test(control.value)
            ? null
            : errors;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RegExpValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RegExpValidatorDirective, isStandalone: true, selector: "[regexpValidation]", inputs: { value: ["regexpValidation", "value"] }, providers: [
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
                    selector: "[regexpValidation]",
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
                args: ["regexpValidation"]
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
 *   [regexpNotValidation]="{
 *      regExp: /(s|regexp)/,
 *      errorName: 'regexpNotCheck',
 *      error: 'Failed regexpNot check.'
 *   }"
 * />
 */
export class RegExpNotValidatorDirective {
    validate(control) {
        const error = this.value.error ?? "This control matched a given regular expression.";
        const errors = {
            [this.value.errorName ?? "regexpNotValidation"]: error,
        };
        return !this.value.regExp ||
            !control.value ||
            !this.value.regExp.test(control.value)
            ? null
            : errors;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RegExpNotValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RegExpNotValidatorDirective, isStandalone: true, selector: "[regexpNotValidation]", inputs: { value: ["regexpNotValidation", "value"] }, providers: [
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
                    selector: "[regexpNotValidation]",
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
                args: ["regexpNotValidation"]
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
 *   [earlierThenValidation]="{
 *      date: date,                              -- a variable of type Date
 *      errorName: 'earlierThen',
 *      error: 'The date is not earlier then the specified one.'
 *   }"
 * />
 */
export class EarlierThenValidatorDirective {
    validate(control) {
        const error = this.value.error ??
            `This control must have a value earlier then ${this.value.date}.`;
        const errors = {
            [this.value.errorName ?? "earlierThenValidation"]: error,
        };
        return !this.value.date ||
            prepareToCompare(control?.value) < prepareToCompare(this.value.date)
            ? null
            : errors;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EarlierThenValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: EarlierThenValidatorDirective, isStandalone: true, selector: "[earlierThenValidation]", inputs: { value: ["earlierThenValidation", "value"] }, providers: [
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
                    selector: "[earlierThenValidation]",
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
                args: ["earlierThenValidation"]
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
 *   [laterThenValidation]="{
 *      date: date,                              -- a variable of type Date
 *      errorName: 'laterThen',
 *      error: 'The date is not later then the specified one.'
 *   }"
 * />
 */
export class LaterThenValidatorDirective {
    validate(control) {
        const error = this.value.error ??
            `This control must have a value later then ${this.value.date}.`;
        const errors = {
            [this.value.errorName ?? "laterThenValidation"]: error,
        };
        return !this.value.date ||
            prepareToCompare(control?.value) > prepareToCompare(this.value.date)
            ? null
            : errors;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LaterThenValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: LaterThenValidatorDirective, isStandalone: true, selector: "[laterThenValidation]", inputs: { value: ["laterThenValidation", "value"] }, providers: [
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
                    selector: "[laterThenValidation]",
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
                args: ["laterThenValidation"]
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
 *   [compareToValidation]="{
 *      date: date,                              -- a variable of type Date
 *      comparison: '==='
 *      errorName: 'compareTo',
 *      error: 'The dates are not the same.'
 *   }"
 * />
 */
export class CompareToValidatorDirective {
    validate(control) {
        const error = this.value.error ?? `Value comparison with ${this.value.date} failed.`;
        const errors = {
            [this.value.errorName ?? "compareToValidation"]: error,
        };
        return !this.value.date ||
            !control.value ||
            compareDates(control.value, this.value.date, this.value.comparison)
            ? null
            : errors;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CompareToValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: CompareToValidatorDirective, isStandalone: true, selector: "[compareToValidation]", inputs: { value: ["compareToValidation", "value"] }, providers: [
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
                    selector: "[compareToValidation]",
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
                args: ["compareToValidation"]
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
export class RequiredWhenValidatorDirective {
    validate(control) {
        const error = this.value.error ?? "This control has a conditional set on it.";
        const errors = {
            [this.value.errorName ?? "requiredWhen"]: error,
        };
        const outcome = typeof this.value.conditional === "function"
            ? this.value.conditional()
            : this.value.conditional;
        return !control.value && outcome ? errors : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredWhenValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RequiredWhenValidatorDirective, isStandalone: true, selector: "[requiredWhenValidation]", inputs: { value: ["requiredWhenValidation", "value"] }, providers: [
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
                    selector: "[requiredWhenValidation]",
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
                args: ["requiredWhenValidation"]
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
 *   [linkToValidation]="{
 *      link: 'linkedTo,                      - a name of a form control we want
 *      errorName: 'linkTo',                     to link the input to
 *      error: 'The linked input has a value but this one does not'
 *   }"
 * />
 */
export class LinkToValidatorDirective {
    validate(control) {
        const error = this.value.error ?? `This control has a link to ${this.value.link}.`;
        const errors = {
            [this.value.errorName ?? "linkToValidation"]: error,
        };
        const linkedTo = control.parent?.get(this.value.link);
        return !control?.value && !!linkedTo?.value ? errors : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LinkToValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: LinkToValidatorDirective, isStandalone: true, selector: "[linkToValidation]", inputs: { value: ["linkToValidation", "value"] }, providers: [
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
                    selector: "[linkToValidation]",
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
                args: ["linkToValidation"]
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
 *   [linkedToValidation]="{
 *      link: 'linkTo,                      - a name of a form control we want
 *      errorName: 'linkedTo',                     to link the input to
 *      error: 'The linked input does not have a value but this one does.'
 *   }"
 * />
 */
export class LinkedToValidatorDirective {
    validate(control) {
        const error = this.value.error ?? `This control is linked to ${this.value.link}.`;
        const errors = {
            [this.value.errorName ?? "linkedToValidation"]: error,
        };
        const link = control.parent?.get(this.value.link);
        return !!control?.value && !link?.value ? errors : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LinkedToValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: LinkedToValidatorDirective, isStandalone: true, selector: "[linkedToValidation]", inputs: { value: ["linkedToValidation", "value"] }, providers: [
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
                    selector: "[linkedToValidation]",
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
                args: ["linkedToValidation"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtZHJpdmVuLWZvcm0tdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3RlbXBsYXRlLWRyaXZlbi1mb3Jtcy90ZW1wbGF0ZS1kcml2ZW4tZm9ybS12YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFFTCxhQUFhLEdBR2QsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBR2pFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFZSCxNQUFNLE9BQU8sd0JBQXdCO0lBR25DLFFBQVEsQ0FBQyxPQUF3QjtRQUMvQixNQUFNLEtBQUssR0FDVCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDaEIsd0RBQXdELENBQUM7UUFDM0QsTUFBTSxNQUFNLEdBQXFCO1lBQy9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksa0JBQWtCLENBQUMsRUFBRSxLQUFLO1NBQ3BELENBQUM7UUFFRixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQ3ZCLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNyQyxDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDYixDQUFDOytHQWhCVSx3QkFBd0I7bUdBQXhCLHdCQUF3QixtSEFSeEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsS0FBSyxFQUFFLElBQUk7YUFD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QUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMxRCxDQUFDOytHQVhVLDBCQUEwQjttR0FBMUIsMEJBQTBCLHVIQVIxQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7OzRGQUVVLDBCQUEwQjtrQkFYdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLDRCQUE0Qjs0QkFDdkMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7OEJBRThCLEtBQUs7c0JBQWpDLEtBQUs7dUJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ29tcGFyZVZhbGlkYXRpb25JbnB1dCxcclxuICBDb25kaXRpb25hbFZhbGlkYXRpb25JbnB1dCxcclxuICBEYXRlVmFsaWRhdGlvbklucHV0LFxyXG4gIExpbmtWYWxpZGF0aW9uSW5wdXQsXHJcbn0gZnJvbSBcIi4vLi4vaW50ZXJmYWNlcy9kaXJlY3RpdmUtaW5wdXQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEFic3RyYWN0Q29udHJvbCxcclxuICBOR19WQUxJREFUT1JTLFxyXG4gIFZhbGlkYXRpb25FcnJvcnMsXHJcbiAgVmFsaWRhdG9yLFxyXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBjb21wYXJlRGF0ZXMsIHByZXBhcmVUb0NvbXBhcmUgfSBmcm9tIFwiLi4vaGVscGVycy9kYXRlXCI7XHJcbmltcG9ydCB7IFJlZ0V4cFZhbGlkYXRpb25JbnB1dCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2RpcmVjdGl2ZS1pbnB1dC5pbnRlcmZhY2VcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIFJlZ0V4IGNoZWNrIG9uIHZhbHVlIGluIHRoZSBnaXZlbiBcclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2xcclxuICogXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgcmVndWxhciBleHByZXNzaW9uIFxyXG4gKiBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwicmVnZXhwXCJcclxuICogICAgaWQ9XCJyZWdleHBcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJyZWdleHBcIlxyXG4gKiAgIFtyZWdleHBWYWxpZGF0aW9uXT1cIntcclxuICogICAgICByZWdFeHA6IC8oc3xyZWdleHApLyxcclxuICogICAgICBlcnJvck5hbWU6ICdyZWdleHBDaGVjaycsXHJcbiAqICAgICAgZXJyb3I6ICdGYWlsZWQgcmVnZXhwIGNoZWNrLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltyZWdleHBWYWxpZGF0aW9uXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICBASW5wdXQoXCJyZWdleHBWYWxpZGF0aW9uXCIpIHZhbHVlITogUmVnRXhwVmFsaWRhdGlvbklucHV0O1xyXG5cclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICBjb25zdCBlcnJvciA9XHJcbiAgICAgIHRoaXMudmFsdWUuZXJyb3IgPz9cclxuICAgICAgXCJUaGlzIGNvbnRyb2wgZGlkIG5vdCBtYXRjaCBhIGdpdmVuIHJlZ3VsYXIgZXhwcmVzc2lvbi5cIjtcclxuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgICAgW3RoaXMudmFsdWUuZXJyb3JOYW1lID8/IFwicmVnZXhwVmFsaWRhdGlvblwiXTogZXJyb3IsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAhdGhpcy52YWx1ZS5yZWdFeHAgfHxcclxuICAgICAgIWNvbnRyb2wudmFsdWUgfHxcclxuICAgICAgdGhpcy52YWx1ZS5yZWdFeHAudGVzdChjb250cm9sLnZhbHVlKVxyXG4gICAgICA/IG51bGxcclxuICAgICAgOiBlcnJvcnM7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBSZWdFeCBjaGVjayBvbiB2YWx1ZSBpbiB0aGUgZ2l2ZW4gXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGFuZCByZXR1cm5zIGFuIGVycm9yIGlmIHJlZ2V4XHJcbiAqIGZvdW5kIGEgbWF0Y2hcclxuICogXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgcmVndWxhciBleHByZXNzaW9uIFxyXG4gKiBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwicmVnZXhwTm90XCJcclxuICogICAgaWQ9XCJyZWdleHBOb3RcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJyZWdleHBOb3RcIlxyXG4gKiAgIFtyZWdleHBOb3RWYWxpZGF0aW9uXT1cIntcclxuICogICAgICByZWdFeHA6IC8oc3xyZWdleHApLyxcclxuICogICAgICBlcnJvck5hbWU6ICdyZWdleHBOb3RDaGVjaycsXHJcbiAqICAgICAgZXJyb3I6ICdGYWlsZWQgcmVnZXhwTm90IGNoZWNrLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltyZWdleHBOb3RWYWxpZGF0aW9uXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBSZWdFeHBOb3RWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnRXhwTm90VmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICBASW5wdXQoXCJyZWdleHBOb3RWYWxpZGF0aW9uXCIpIHZhbHVlITogUmVnRXhwVmFsaWRhdGlvbklucHV0O1xyXG5cclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICBjb25zdCBlcnJvciA9XHJcbiAgICAgIHRoaXMudmFsdWUuZXJyb3IgPz8gXCJUaGlzIGNvbnRyb2wgbWF0Y2hlZCBhIGdpdmVuIHJlZ3VsYXIgZXhwcmVzc2lvbi5cIjtcclxuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgICAgW3RoaXMudmFsdWUuZXJyb3JOYW1lID8/IFwicmVnZXhwTm90VmFsaWRhdGlvblwiXTogZXJyb3IsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAhdGhpcy52YWx1ZS5yZWdFeHAgfHxcclxuICAgICAgIWNvbnRyb2wudmFsdWUgfHxcclxuICAgICAgIXRoaXMudmFsdWUucmVnRXhwLnRlc3QoY29udHJvbC52YWx1ZSlcclxuICAgICAgPyBudWxsXHJcbiAgICAgIDogZXJyb3JzO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgZGF0ZSBjb21wYXJpc29uIGJldHdlZW4gYSBzcGVjaWZpZWQgZGF0ZSBcclxuICogYW5kIGEgZGF0ZSBpbiB0aGUgZ2l2ZW4gaW5wdXQgYW5kIHJldHVybnMgYW4gZXJyb3IgaWYgdGhlIGRhdGUgaW5cclxuICogdGhlIGdpdmVuIGlucHV0IGlzIGxhdGVyIHRoZW4gdGhlIHNwZWNpZmllZCBvbmUuXHJcbiAqIFxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIGRhdGUgdG8gY29tcGFyZSB0b1xyXG4gKiBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwiZWFybGllclRoZW5cIlxyXG4gKiAgICBpZD1cImVhcmxpZXJUaGVuXCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiZWFybGllclRoZW5cIlxyXG4gKiAgIFtlYXJsaWVyVGhlblZhbGlkYXRpb25dPVwie1xyXG4gKiAgICAgIGRhdGU6IGRhdGUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS0gYSB2YXJpYWJsZSBvZiB0eXBlIERhdGVcclxuICogICAgICBlcnJvck5hbWU6ICdlYXJsaWVyVGhlbicsXHJcbiAqICAgICAgZXJyb3I6ICdUaGUgZGF0ZSBpcyBub3QgZWFybGllciB0aGVuIHRoZSBzcGVjaWZpZWQgb25lLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltlYXJsaWVyVGhlblZhbGlkYXRpb25dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IEVhcmxpZXJUaGVuVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVhcmxpZXJUaGVuVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICBASW5wdXQoXCJlYXJsaWVyVGhlblZhbGlkYXRpb25cIikgdmFsdWUhOiBEYXRlVmFsaWRhdGlvbklucHV0O1xyXG5cclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICBjb25zdCBlcnJvciA9XHJcbiAgICAgIHRoaXMudmFsdWUuZXJyb3IgPz9cclxuICAgICAgYFRoaXMgY29udHJvbCBtdXN0IGhhdmUgYSB2YWx1ZSBlYXJsaWVyIHRoZW4gJHt0aGlzLnZhbHVlLmRhdGV9LmA7XHJcbiAgICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XHJcbiAgICAgIFt0aGlzLnZhbHVlLmVycm9yTmFtZSA/PyBcImVhcmxpZXJUaGVuVmFsaWRhdGlvblwiXTogZXJyb3IsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAhdGhpcy52YWx1ZS5kYXRlIHx8XHJcbiAgICAgIHByZXBhcmVUb0NvbXBhcmUoY29udHJvbD8udmFsdWUpIDwgcHJlcGFyZVRvQ29tcGFyZSh0aGlzLnZhbHVlLmRhdGUpXHJcbiAgICAgID8gbnVsbFxyXG4gICAgICA6IGVycm9ycztcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIGRhdGUgY29tcGFyaXNvbiBiZXR3ZWVuIGEgc3BlY2lmaWVkIGRhdGUgXHJcbiAqIGFuZCBhIGRhdGUgaW4gdGhlIGdpdmVuIGlucHV0IGFuZCByZXR1cm5zIGFuIGVycm9yIGlmIHRoZSBkYXRlIGluXHJcbiAqIHRoZSBnaXZlbiBpbnB1dCBpcyBlYXJsaWVyIHRoZW4gdGhlIHNwZWNpZmllZCBvbmUuXHJcbiAqIFxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIGRhdGUgdG8gY29tcGFyZSB0b1xyXG4gKiBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwibGF0ZXJUaGVuXCJcclxuICogICAgaWQ9XCJsYXRlclRoZW5cIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJsYXRlclRoZW5cIlxyXG4gKiAgIFtsYXRlclRoZW5WYWxpZGF0aW9uXT1cIntcclxuICogICAgICBkYXRlOiBkYXRlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tIGEgdmFyaWFibGUgb2YgdHlwZSBEYXRlXHJcbiAqICAgICAgZXJyb3JOYW1lOiAnbGF0ZXJUaGVuJyxcclxuICogICAgICBlcnJvcjogJ1RoZSBkYXRlIGlzIG5vdCBsYXRlciB0aGVuIHRoZSBzcGVjaWZpZWQgb25lLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltsYXRlclRoZW5WYWxpZGF0aW9uXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBMYXRlclRoZW5WYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF0ZXJUaGVuVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICBASW5wdXQoXCJsYXRlclRoZW5WYWxpZGF0aW9uXCIpIHZhbHVlITogRGF0ZVZhbGlkYXRpb25JbnB1dDtcclxuXHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgY29uc3QgZXJyb3IgPVxyXG4gICAgICB0aGlzLnZhbHVlLmVycm9yID8/XHJcbiAgICAgIGBUaGlzIGNvbnRyb2wgbXVzdCBoYXZlIGEgdmFsdWUgbGF0ZXIgdGhlbiAke3RoaXMudmFsdWUuZGF0ZX0uYDtcclxuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgICAgW3RoaXMudmFsdWUuZXJyb3JOYW1lID8/IFwibGF0ZXJUaGVuVmFsaWRhdGlvblwiXTogZXJyb3IsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAhdGhpcy52YWx1ZS5kYXRlIHx8XHJcbiAgICAgIHByZXBhcmVUb0NvbXBhcmUoY29udHJvbD8udmFsdWUpID4gcHJlcGFyZVRvQ29tcGFyZSh0aGlzLnZhbHVlLmRhdGUpXHJcbiAgICAgID8gbnVsbFxyXG4gICAgICA6IGVycm9ycztcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIGRhdGUgY29tcGFyaXNvbiBiZXR3ZWVuIGEgc3BlY2lmaWVkIGRhdGUgXHJcbiAqIGFuZCBhIGRhdGUgaW4gdGhlIGdpdmVuIGlucHV0IGFuZCByZXR1cm5zIGFuIGVycm9yIGlmIGNob3NlbiBjb21wYXJpc29uXHJcbiAqIGZhaWxzLlxyXG4gKiBcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSBkYXRlIHRvIGNvbXBhcmUgdG8sXHJcbiAqIGNvbXBhcmlzb24gdG8gcHJlZm9ybSBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBcclxuICogYW5kIGEgY3VzdG9tIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEF2YWlsYWJsZSBjb21wYXJpc29ucyBhcmU6ICc8JyAsICc+JyAsICc9PScgLCAnPT09JyAsICc8PScgLCAnPj0nLlxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJjb21wYXJlVG9cIlxyXG4gKiAgICBpZD1cImNvbXBhcmVUb1wiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImNvbXBhcmVUb1wiXHJcbiAqICAgW2NvbXBhcmVUb1ZhbGlkYXRpb25dPVwie1xyXG4gKiAgICAgIGRhdGU6IGRhdGUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS0gYSB2YXJpYWJsZSBvZiB0eXBlIERhdGVcclxuICogICAgICBjb21wYXJpc29uOiAnPT09J1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ2NvbXBhcmVUbycsXHJcbiAqICAgICAgZXJyb3I6ICdUaGUgZGF0ZXMgYXJlIG5vdCB0aGUgc2FtZS4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbY29tcGFyZVRvVmFsaWRhdGlvbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogQ29tcGFyZVRvVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBhcmVUb1ZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwiY29tcGFyZVRvVmFsaWRhdGlvblwiKSB2YWx1ZSE6IENvbXBhcmVWYWxpZGF0aW9uSW5wdXQ7XHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgY29uc3QgZXJyb3IgPVxyXG4gICAgICB0aGlzLnZhbHVlLmVycm9yID8/IGBWYWx1ZSBjb21wYXJpc29uIHdpdGggJHt0aGlzLnZhbHVlLmRhdGV9IGZhaWxlZC5gO1xyXG4gICAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0ge1xyXG4gICAgICBbdGhpcy52YWx1ZS5lcnJvck5hbWUgPz8gXCJjb21wYXJlVG9WYWxpZGF0aW9uXCJdOiBlcnJvcixcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuICF0aGlzLnZhbHVlLmRhdGUgfHxcclxuICAgICAgIWNvbnRyb2wudmFsdWUgfHxcclxuICAgICAgY29tcGFyZURhdGVzKGNvbnRyb2wudmFsdWUsIHRoaXMudmFsdWUuZGF0ZSwgdGhpcy52YWx1ZS5jb21wYXJpc29uKVxyXG4gICAgICA/IG51bGxcclxuICAgICAgOiBlcnJvcnM7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBjb25kaXRpb25hbCBjaGVjayBhbmQgaWYgdGhlIGNvbmRpdGlvblxyXG4gKiBwYXNzZXMgaXQgd2lsbCByZXR1cm4gYW4gZXJyb3IuXHJcbiAqIFxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIGNvbmRpdGlvbiB0aGF0IGlzIHRvIGJlIGNoZWNrZWRcclxuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIGVycm9yIFxyXG4gKiBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqICBcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJyZXF1aXJlZFdoZW5cIlxyXG4gKiAgICBpZD1cInJlcXVpcmVkV2hlblwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInJlcXVpcmVkV2hlblwiXHJcbiAqICAgW3JlcXVpcmVkV2hlblZhbGlkYXRpb25dPVwie1xyXG4gKiAgICAgIGNvbmRpdGlvbmFsOiBpc1RydWUsICAgICAgICAgICAgICAgICAgICAgLSB0aGlzIGNhbiBiZSBldGhlciBhIGJvb2xlYW5cclxuICogICAgICBlcnJvck5hbWU6ICdyZXF1aXJlZFdoZW4nLCAgICAgICAgICAgICAgICAgICAgIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgYm9vbGVhblxyXG4gKiAgICAgIGVycm9yOiAnVGhlIGNvbmRpdGlvbiBpcyB0cnVlLidcclxuICogICB9XCJcclxuICogLz5cclxuICogXHJcbiAqIE5PVEU6IEl0IGlzIG5vdCByZWNvbW1lbmRlZCB0byBwYXNzIGEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaW4gdGhlIHRlbXBsYXRlLFxyXG4gKiBhcyB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZS5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltyZXF1aXJlZFdoZW5WYWxpZGF0aW9uXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBSZXF1aXJlZFdoZW5WYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVxdWlyZWRXaGVuVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICBASW5wdXQoXCJyZXF1aXJlZFdoZW5WYWxpZGF0aW9uXCIpIHZhbHVlITogQ29uZGl0aW9uYWxWYWxpZGF0aW9uSW5wdXQ7XHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgY29uc3QgZXJyb3IgPVxyXG4gICAgICB0aGlzLnZhbHVlLmVycm9yID8/IFwiVGhpcyBjb250cm9sIGhhcyBhIGNvbmRpdGlvbmFsIHNldCBvbiBpdC5cIjtcclxuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgICAgW3RoaXMudmFsdWUuZXJyb3JOYW1lID8/IFwicmVxdWlyZWRXaGVuXCJdOiBlcnJvcixcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb3V0Y29tZSA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLnZhbHVlLmNvbmRpdGlvbmFsID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgICA/IHRoaXMudmFsdWUuY29uZGl0aW9uYWwoKVxyXG4gICAgICAgIDogdGhpcy52YWx1ZS5jb25kaXRpb25hbDtcclxuICAgIHJldHVybiAhY29udHJvbC52YWx1ZSAmJiBvdXRjb21lID8gZXJyb3JzIDogbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIGNoZWNrIGlmIHRoZSBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2xcclxuICogaGFzIGEgdmFsdWUgYW5kIGEgZ2l2ZW4gaW5wdXQgZG9lcyBub3QuXHJcbiAqIFxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHRoZSBuYW1lIG9mIHRoZSBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCB0byBsaW5rXHJcbiAqIHRvIGFuZCBvcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBlcnJvciBcclxuICogY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiAgXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwibGlua1RvXCJcclxuICogICAgaWQ9XCJsaW5rVG9cIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJsaW5rVG9cIlxyXG4gKiAgIFtsaW5rVG9WYWxpZGF0aW9uXT1cIntcclxuICogICAgICBsaW5rOiAnbGlua2VkVG8sICAgICAgICAgICAgICAgICAgICAgIC0gYSBuYW1lIG9mIGEgZm9ybSBjb250cm9sIHdlIHdhbnQgIFxyXG4gKiAgICAgIGVycm9yTmFtZTogJ2xpbmtUbycsICAgICAgICAgICAgICAgICAgICAgdG8gbGluayB0aGUgaW5wdXQgdG9cclxuICogICAgICBlcnJvcjogJ1RoZSBsaW5rZWQgaW5wdXQgaGFzIGEgdmFsdWUgYnV0IHRoaXMgb25lIGRvZXMgbm90J1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2xpbmtUb1ZhbGlkYXRpb25dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IExpbmtUb1ZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rVG9WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcImxpbmtUb1ZhbGlkYXRpb25cIikgdmFsdWUhOiBMaW5rVmFsaWRhdGlvbklucHV0O1xyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIGNvbnN0IGVycm9yID1cclxuICAgICAgdGhpcy52YWx1ZS5lcnJvciA/PyBgVGhpcyBjb250cm9sIGhhcyBhIGxpbmsgdG8gJHt0aGlzLnZhbHVlLmxpbmt9LmA7XHJcbiAgICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XHJcbiAgICAgIFt0aGlzLnZhbHVlLmVycm9yTmFtZSA/PyBcImxpbmtUb1ZhbGlkYXRpb25cIl06IGVycm9yLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsaW5rZWRUbyA9IGNvbnRyb2wucGFyZW50Py5nZXQodGhpcy52YWx1ZS5saW5rKTtcclxuICAgIHJldHVybiAhY29udHJvbD8udmFsdWUgJiYgISFsaW5rZWRUbz8udmFsdWUgPyBlcnJvcnMgOiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgY2hlY2sgaWYgdGhlIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbFxyXG4gKiBkb2VzIG5vdCBoYXZlIGEgdmFsdWUgYW5kIGEgZ2l2ZW4gaW5wdXQgZG9lcy5cclxuICogXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3UgdGhlIG5hbWUgb2YgdGhlIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIHRvIGxpbmtcclxuICogdG8gYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIGVycm9yIFxyXG4gKiBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqICBcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJsaW5rZWRUb1wiXHJcbiAqICAgIGlkPVwibGlua2VkVG9cIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJsaW5rZWRUb1wiXHJcbiAqICAgW2xpbmtlZFRvVmFsaWRhdGlvbl09XCJ7XHJcbiAqICAgICAgbGluazogJ2xpbmtUbywgICAgICAgICAgICAgICAgICAgICAgLSBhIG5hbWUgb2YgYSBmb3JtIGNvbnRyb2wgd2Ugd2FudCAgXHJcbiAqICAgICAgZXJyb3JOYW1lOiAnbGlua2VkVG8nLCAgICAgICAgICAgICAgICAgICAgIHRvIGxpbmsgdGhlIGlucHV0IHRvXHJcbiAqICAgICAgZXJyb3I6ICdUaGUgbGlua2VkIGlucHV0IGRvZXMgbm90IGhhdmUgYSB2YWx1ZSBidXQgdGhpcyBvbmUgZG9lcy4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbbGlua2VkVG9WYWxpZGF0aW9uXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBMaW5rZWRUb1ZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rZWRUb1ZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwibGlua2VkVG9WYWxpZGF0aW9uXCIpIHZhbHVlITogTGlua1ZhbGlkYXRpb25JbnB1dDtcclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICBjb25zdCBlcnJvciA9XHJcbiAgICAgIHRoaXMudmFsdWUuZXJyb3IgPz8gYFRoaXMgY29udHJvbCBpcyBsaW5rZWQgdG8gJHt0aGlzLnZhbHVlLmxpbmt9LmA7XHJcbiAgICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XHJcbiAgICAgIFt0aGlzLnZhbHVlLmVycm9yTmFtZSA/PyBcImxpbmtlZFRvVmFsaWRhdGlvblwiXTogZXJyb3IsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxpbmsgPSBjb250cm9sLnBhcmVudD8uZ2V0KHRoaXMudmFsdWUubGluayk7XHJcbiAgICByZXR1cm4gISFjb250cm9sPy52YWx1ZSAmJiAhbGluaz8udmFsdWUgPyBlcnJvcnMgOiBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=