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
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: RegExpValidatorDirective,
                            multi: true,
                        },
                    ],
                    standalone: true,
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
                useExisting: RegExpValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RegExpNotValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[regexpNotValidation]",
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: RegExpValidatorDirective,
                            multi: true,
                        },
                    ],
                    standalone: true,
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
 *    name="regexpNot"
 *    id="regexpNot"
 *    formControlName="regexpNot"
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: EarlierThenValidatorDirective, selector: "[earlierThenValidation]", inputs: { value: ["earlierThenValidation", "value"] }, providers: [
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
 *    name="regexpNot"
 *    id="regexpNot"
 *    formControlName="regexpNot"
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: LaterThenValidatorDirective, selector: "[laterThenValidation]", inputs: { value: ["laterThenValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: EarlierThenValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LaterThenValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[laterThenValidation]",
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
 *    name="regexpNot"
 *    id="regexpNot"
 *    formControlName="regexpNot"
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: CompareToValidatorDirective, selector: "[compareToValidation]", inputs: { value: ["compareToValidation", "value"] }, providers: [
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
 *    name="regexpNot"
 *    id="regexpNot"
 *    formControlName="regexpNot"
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RequiredWhenValidatorDirective, selector: "[requiredWhenValidation]", inputs: { value: ["requiredWhenValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: CompareToValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredWhenValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[requiredWhenValidation]",
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
 *    name="regexpNot"
 *    id="regexpNot"
 *    formControlName="regexpNot"
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: LinkToValidatorDirective, selector: "[linkToValidation]", inputs: { value: ["linkToValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: CompareToValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LinkToValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[linkToValidation]",
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
 *    name="regexpNot"
 *    id="regexpNot"
 *    formControlName="regexpNot"
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: LinkedToValidatorDirective, selector: "[linkedToValidation]", inputs: { value: ["linkToValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: CompareToValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LinkedToValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[linkedToValidation]",
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
                args: ["linkToValidation"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtZHJpdmVuLWZvcm0tdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3RlbXBsYXRlLWRyaXZlbi1mb3Jtcy90ZW1wbGF0ZS1kcml2ZW4tZm9ybS12YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFFTCxhQUFhLEdBR2QsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBR2pFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFZSCxNQUFNLE9BQU8sd0JBQXdCO0lBR25DLFFBQVEsQ0FBQyxPQUF3QjtRQUMvQixNQUFNLEtBQUssR0FDVCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDaEIsd0RBQXdELENBQUM7UUFDM0QsTUFBTSxNQUFNLEdBQXFCO1lBQy9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksa0JBQWtCLENBQUMsRUFBRSxLQUFLO1NBQ3BELENBQUM7UUFFRixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQ3ZCLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNyQyxDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDYixDQUFDOytHQWhCVSx3QkFBd0I7bUdBQXhCLHdCQUF3QixtSEFUeEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsS0FBSyxFQUFFLElBQUk7YUFD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LGlHQVIxQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7OzRGQUVVLDBCQUEwQjtrQkFWdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsRUFBRSwyQkFBMkI7NEJBQ3hDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOzhCQUU0QixLQUFLO3NCQUEvQixLQUFLO3VCQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENvbXBhcmVWYWxpZGF0aW9uSW5wdXQsXHJcbiAgQ29uZGl0aW9uYWxWYWxpZGF0aW9uSW5wdXQsXHJcbiAgRGF0ZVZhbGlkYXRpb25JbnB1dCxcclxuICBMaW5rVmFsaWRhdGlvbklucHV0LFxyXG59IGZyb20gXCIuLy4uL2ludGVyZmFjZXMvZGlyZWN0aXZlLWlucHV0LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBBYnN0cmFjdENvbnRyb2wsXHJcbiAgTkdfVkFMSURBVE9SUyxcclxuICBWYWxpZGF0aW9uRXJyb3JzLFxyXG4gIFZhbGlkYXRvcixcclxufSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgY29tcGFyZURhdGVzLCBwcmVwYXJlVG9Db21wYXJlIH0gZnJvbSBcIi4uL2hlbHBlcnMvZGF0ZVwiO1xyXG5pbXBvcnQgeyBSZWdFeHBWYWxpZGF0aW9uSW5wdXQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9kaXJlY3RpdmUtaW5wdXQuaW50ZXJmYWNlXCI7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBSZWdFeCBjaGVjayBvbiB2YWx1ZSBpbiB0aGUgZ2l2ZW4gXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sXHJcbiAqIFxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBcclxuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cInJlZ2V4cFwiXHJcbiAqICAgIGlkPVwicmVnZXhwXCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicmVnZXhwXCJcclxuICogICBbcmVnZXhwVmFsaWRhdGlvbl09XCJ7XHJcbiAqICAgICAgcmVnRXhwOiAvKHN8cmVnZXhwKS8sXHJcbiAqICAgICAgZXJyb3JOYW1lOiAncmVnZXhwQ2hlY2snLFxyXG4gKiAgICAgIGVycm9yOiAnRmFpbGVkIHJlZ2V4cCBjaGVjay4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbcmVnZXhwVmFsaWRhdGlvbl1cIixcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwicmVnZXhwVmFsaWRhdGlvblwiKSB2YWx1ZSE6IFJlZ0V4cFZhbGlkYXRpb25JbnB1dDtcclxuXHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgY29uc3QgZXJyb3IgPVxyXG4gICAgICB0aGlzLnZhbHVlLmVycm9yID8/XHJcbiAgICAgIFwiVGhpcyBjb250cm9sIGRpZCBub3QgbWF0Y2ggYSBnaXZlbiByZWd1bGFyIGV4cHJlc3Npb24uXCI7XHJcbiAgICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XHJcbiAgICAgIFt0aGlzLnZhbHVlLmVycm9yTmFtZSA/PyBcInJlZ2V4cFZhbGlkYXRpb25cIl06IGVycm9yLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gIXRoaXMudmFsdWUucmVnRXhwIHx8XHJcbiAgICAgICFjb250cm9sLnZhbHVlIHx8XHJcbiAgICAgIHRoaXMudmFsdWUucmVnRXhwLnRlc3QoY29udHJvbC52YWx1ZSlcclxuICAgICAgPyBudWxsXHJcbiAgICAgIDogZXJyb3JzO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgUmVnRXggY2hlY2sgb24gdmFsdWUgaW4gdGhlIGdpdmVuIFxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBhbmQgcmV0dXJucyBhbiBlcnJvciBpZiByZWdleFxyXG4gKiBmb3VuZCBhIG1hdGNoXHJcbiAqIFxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBcclxuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cInJlZ2V4cE5vdFwiXHJcbiAqICAgIGlkPVwicmVnZXhwTm90XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicmVnZXhwTm90XCJcclxuICogICBbcmVnZXhwTm90VmFsaWRhdGlvbl09XCJ7XHJcbiAqICAgICAgcmVnRXhwOiAvKHN8cmVnZXhwKS8sXHJcbiAqICAgICAgZXJyb3JOYW1lOiAncmVnZXhwTm90Q2hlY2snLFxyXG4gKiAgICAgIGVycm9yOiAnRmFpbGVkIHJlZ2V4cE5vdCBjaGVjay4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbcmVnZXhwTm90VmFsaWRhdGlvbl1cIixcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZ0V4cE5vdFZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwicmVnZXhwTm90VmFsaWRhdGlvblwiKSB2YWx1ZSE6IFJlZ0V4cFZhbGlkYXRpb25JbnB1dDtcclxuXHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgY29uc3QgZXJyb3IgPVxyXG4gICAgICB0aGlzLnZhbHVlLmVycm9yID8/IFwiVGhpcyBjb250cm9sIG1hdGNoZWQgYSBnaXZlbiByZWd1bGFyIGV4cHJlc3Npb24uXCI7XHJcbiAgICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XHJcbiAgICAgIFt0aGlzLnZhbHVlLmVycm9yTmFtZSA/PyBcInJlZ2V4cE5vdFZhbGlkYXRpb25cIl06IGVycm9yLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gIXRoaXMudmFsdWUucmVnRXhwIHx8XHJcbiAgICAgICFjb250cm9sLnZhbHVlIHx8XHJcbiAgICAgICF0aGlzLnZhbHVlLnJlZ0V4cC50ZXN0KGNvbnRyb2wudmFsdWUpXHJcbiAgICAgID8gbnVsbFxyXG4gICAgICA6IGVycm9ycztcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBwcmVmb3JtcyBhIGRhdGUgY29tcGFyaXNvbiBiZXR3ZWVuIGEgc3BlY2lmaWVkIGRhdGUgXHJcbiAqIGFuZCBhIGRhdGUgaW4gdGhlIGdpdmVuIGlucHV0IGFuZCByZXR1cm5zIGFuIGVycm9yIGlmIHRoZSBkYXRlIGluXHJcbiAqIHRoZSBnaXZlbiBpbnB1dCBpcyBsYXRlciB0aGVuIHRoZSBzcGVjaWZpZWQgb25lLlxyXG4gKiBcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSBkYXRlIHRvIGNvbXBhcmUgdG9cclxuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cInJlZ2V4cE5vdFwiXHJcbiAqICAgIGlkPVwicmVnZXhwTm90XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicmVnZXhwTm90XCJcclxuICogICBbZWFybGllclRoZW5WYWxpZGF0aW9uXT1cIntcclxuICogICAgICBkYXRlOiBkYXRlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tIGEgdmFyaWFibGUgb2YgdHlwZSBEYXRlXHJcbiAqICAgICAgZXJyb3JOYW1lOiAnZWFybGllclRoZW4nLFxyXG4gKiAgICAgIGVycm9yOiAnVGhlIGRhdGUgaXMgbm90IGVhcmxpZXIgdGhlbiB0aGUgc3BlY2lmaWVkIG9uZS4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbZWFybGllclRoZW5WYWxpZGF0aW9uXVwiLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogRWFybGllclRoZW5WYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWFybGllclRoZW5WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcImVhcmxpZXJUaGVuVmFsaWRhdGlvblwiKSB2YWx1ZSE6IERhdGVWYWxpZGF0aW9uSW5wdXQ7XHJcblxyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIGNvbnN0IGVycm9yID1cclxuICAgICAgdGhpcy52YWx1ZS5lcnJvciA/P1xyXG4gICAgICBgVGhpcyBjb250cm9sIG11c3QgaGF2ZSBhIHZhbHVlIGVhcmxpZXIgdGhlbiAke3RoaXMudmFsdWUuZGF0ZX0uYDtcclxuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgICAgW3RoaXMudmFsdWUuZXJyb3JOYW1lID8/IFwiZWFybGllclRoZW5WYWxpZGF0aW9uXCJdOiBlcnJvcixcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuICF0aGlzLnZhbHVlLmRhdGUgfHxcclxuICAgICAgcHJlcGFyZVRvQ29tcGFyZShjb250cm9sPy52YWx1ZSkgPCBwcmVwYXJlVG9Db21wYXJlKHRoaXMudmFsdWUuZGF0ZSlcclxuICAgICAgPyBudWxsXHJcbiAgICAgIDogZXJyb3JzO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgZGF0ZSBjb21wYXJpc29uIGJldHdlZW4gYSBzcGVjaWZpZWQgZGF0ZSBcclxuICogYW5kIGEgZGF0ZSBpbiB0aGUgZ2l2ZW4gaW5wdXQgYW5kIHJldHVybnMgYW4gZXJyb3IgaWYgdGhlIGRhdGUgaW5cclxuICogdGhlIGdpdmVuIGlucHV0IGlzIGVhcmxpZXIgdGhlbiB0aGUgc3BlY2lmaWVkIG9uZS5cclxuICogXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgZGF0ZSB0byBjb21wYXJlIHRvXHJcbiAqIGFuZCBvcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJyZWdleHBOb3RcIlxyXG4gKiAgICBpZD1cInJlZ2V4cE5vdFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInJlZ2V4cE5vdFwiXHJcbiAqICAgW2xhdGVyVGhlblZhbGlkYXRpb25dPVwie1xyXG4gKiAgICAgIGRhdGU6IGRhdGUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS0gYSB2YXJpYWJsZSBvZiB0eXBlIERhdGVcclxuICogICAgICBlcnJvck5hbWU6ICdsYXRlclRoZW4nLFxyXG4gKiAgICAgIGVycm9yOiAnVGhlIGRhdGUgaXMgbm90IGxhdGVyIHRoZW4gdGhlIHNwZWNpZmllZCBvbmUuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2xhdGVyVGhlblZhbGlkYXRpb25dXCIsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBFYXJsaWVyVGhlblZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXRlclRoZW5WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcImxhdGVyVGhlblZhbGlkYXRpb25cIikgdmFsdWUhOiBEYXRlVmFsaWRhdGlvbklucHV0O1xyXG5cclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICBjb25zdCBlcnJvciA9XHJcbiAgICAgIHRoaXMudmFsdWUuZXJyb3IgPz9cclxuICAgICAgYFRoaXMgY29udHJvbCBtdXN0IGhhdmUgYSB2YWx1ZSBsYXRlciB0aGVuICR7dGhpcy52YWx1ZS5kYXRlfS5gO1xyXG4gICAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0ge1xyXG4gICAgICBbdGhpcy52YWx1ZS5lcnJvck5hbWUgPz8gXCJsYXRlclRoZW5WYWxpZGF0aW9uXCJdOiBlcnJvcixcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuICF0aGlzLnZhbHVlLmRhdGUgfHxcclxuICAgICAgcHJlcGFyZVRvQ29tcGFyZShjb250cm9sPy52YWx1ZSkgPiBwcmVwYXJlVG9Db21wYXJlKHRoaXMudmFsdWUuZGF0ZSlcclxuICAgICAgPyBudWxsXHJcbiAgICAgIDogZXJyb3JzO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IHByZWZvcm1zIGEgZGF0ZSBjb21wYXJpc29uIGJldHdlZW4gYSBzcGVjaWZpZWQgZGF0ZSBcclxuICogYW5kIGEgZGF0ZSBpbiB0aGUgZ2l2ZW4gaW5wdXQgYW5kIHJldHVybnMgYW4gZXJyb3IgaWYgY2hvc2VuIGNvbXBhcmlzb25cclxuICogZmFpbHMuXHJcbiAqIFxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIGRhdGUgdG8gY29tcGFyZSB0byxcclxuICogY29tcGFyaXNvbiB0byBwcmVmb3JtIGFuZCBvcHRpb25hbGx5IHlvdSBjYW4gZ2l2ZSBpdCBhIGN1c3RvbSBuYW1lIFxyXG4gKiBhbmQgYSBjdXN0b20gZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQXZhaWxhYmxlIGNvbXBhcmlzb25zIGFyZTogJzwnICwgJz4nICwgJz09JyAsICc9PT0nICwgJzw9JyAsICc+PScuXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cInJlZ2V4cE5vdFwiXHJcbiAqICAgIGlkPVwicmVnZXhwTm90XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicmVnZXhwTm90XCJcclxuICogICBbY29tcGFyZVRvVmFsaWRhdGlvbl09XCJ7XHJcbiAqICAgICAgZGF0ZTogZGF0ZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLSBhIHZhcmlhYmxlIG9mIHR5cGUgRGF0ZVxyXG4gKiAgICAgIGNvbXBhcmlzb246ICc9PT0nXHJcbiAqICAgICAgZXJyb3JOYW1lOiAnY29tcGFyZVRvJyxcclxuICogICAgICBlcnJvcjogJ1RoZSBkYXRlcyBhcmUgbm90IHRoZSBzYW1lLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltjb21wYXJlVG9WYWxpZGF0aW9uXVwiLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogQ29tcGFyZVRvVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBhcmVUb1ZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwiY29tcGFyZVRvVmFsaWRhdGlvblwiKSB2YWx1ZSE6IENvbXBhcmVWYWxpZGF0aW9uSW5wdXQ7XHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgY29uc3QgZXJyb3IgPVxyXG4gICAgICB0aGlzLnZhbHVlLmVycm9yID8/IGBWYWx1ZSBjb21wYXJpc29uIHdpdGggJHt0aGlzLnZhbHVlLmRhdGV9IGZhaWxlZC5gO1xyXG4gICAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0ge1xyXG4gICAgICBbdGhpcy52YWx1ZS5lcnJvck5hbWUgPz8gXCJjb21wYXJlVG9WYWxpZGF0aW9uXCJdOiBlcnJvcixcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuICF0aGlzLnZhbHVlLmRhdGUgfHxcclxuICAgICAgIWNvbnRyb2wudmFsdWUgfHxcclxuICAgICAgY29tcGFyZURhdGVzKGNvbnRyb2wudmFsdWUsIHRoaXMudmFsdWUuZGF0ZSwgdGhpcy52YWx1ZS5jb21wYXJpc29uKVxyXG4gICAgICA/IG51bGxcclxuICAgICAgOiBlcnJvcnM7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBjb25kaXRpb25hbCBjaGVjayBhbmQgaWYgdGhlIGNvbmRpdGlvblxyXG4gKiBwYXNzZXMgaXQgd2lsbCByZXR1cm4gYW4gZXJyb3IuXHJcbiAqIFxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIGNvbmRpdGlvbiB0aGF0IGlzIHRvIGJlIGNoZWNrZWRcclxuICogYW5kIG9wdGlvbmFsbHkgeW91IGNhbiBnaXZlIGl0IGEgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIGVycm9yIFxyXG4gKiBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqICBcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJyZWdleHBOb3RcIlxyXG4gKiAgICBpZD1cInJlZ2V4cE5vdFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInJlZ2V4cE5vdFwiXHJcbiAqICAgW3JlcXVpcmVkV2hlblZhbGlkYXRpb25dPVwie1xyXG4gKiAgICAgIGNvbmRpdGlvbmFsOiBpc1RydWUsICAgICAgICAgICAgICAgICAgICAgLSB0aGlzIGNhbiBiZSBldGhlciBhIGJvb2xlYW5cclxuICogICAgICBlcnJvck5hbWU6ICdyZXF1aXJlZFdoZW4nLCAgICAgICAgICAgICAgICAgICAgIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgYm9vbGVhblxyXG4gKiAgICAgIGVycm9yOiAnVGhlIGNvbmRpdGlvbiBpcyB0cnVlLidcclxuICogICB9XCJcclxuICogLz5cclxuICogXHJcbiAqIE5PVEU6IEl0IGlzIG5vdCByZWNvbW1lbmRlZCB0byBwYXNzIGEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgaW4gdGhlIHRlbXBsYXRlLFxyXG4gKiBhcyB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZS5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltyZXF1aXJlZFdoZW5WYWxpZGF0aW9uXVwiLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogQ29tcGFyZVRvVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcXVpcmVkV2hlblZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwicmVxdWlyZWRXaGVuVmFsaWRhdGlvblwiKSB2YWx1ZSE6IENvbmRpdGlvbmFsVmFsaWRhdGlvbklucHV0O1xyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIGNvbnN0IGVycm9yID1cclxuICAgICAgdGhpcy52YWx1ZS5lcnJvciA/PyBcIlRoaXMgY29udHJvbCBoYXMgYSBjb25kaXRpb25hbCBzZXQgb24gaXQuXCI7XHJcbiAgICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XHJcbiAgICAgIFt0aGlzLnZhbHVlLmVycm9yTmFtZSA/PyBcInJlcXVpcmVkV2hlblwiXTogZXJyb3IsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG91dGNvbWUgPVxyXG4gICAgICB0eXBlb2YgdGhpcy52YWx1ZS5jb25kaXRpb25hbCA9PT0gXCJmdW5jdGlvblwiXHJcbiAgICAgICAgPyB0aGlzLnZhbHVlLmNvbmRpdGlvbmFsKClcclxuICAgICAgICA6IHRoaXMudmFsdWUuY29uZGl0aW9uYWw7XHJcbiAgICByZXR1cm4gIWNvbnRyb2wudmFsdWUgJiYgb3V0Y29tZSA/IGVycm9ycyA6IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBjaGVjayBpZiB0aGUgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sXHJcbiAqIGhhcyBhIHZhbHVlIGFuZCBhIGdpdmVuIGlucHV0IGRvZXMgbm90LlxyXG4gKiBcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSB0aGUgbmFtZSBvZiB0aGUgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgdG8gbGlua1xyXG4gKiB0byBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gZXJyb3IgXHJcbiAqIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cInJlZ2V4cE5vdFwiXHJcbiAqICAgIGlkPVwicmVnZXhwTm90XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicmVnZXhwTm90XCJcclxuICogICBbbGlua1RvVmFsaWRhdGlvbl09XCJ7XHJcbiAqICAgICAgbGluazogJ2xpbmtlZFRvLCAgICAgICAgICAgICAgICAgICAgICAtIGEgbmFtZSBvZiBhIGZvcm0gY29udHJvbCB3ZSB3YW50ICBcclxuICogICAgICBlcnJvck5hbWU6ICdsaW5rVG8nLCAgICAgICAgICAgICAgICAgICAgIHRvIGxpbmsgdGhlIGlucHV0IHRvXHJcbiAqICAgICAgZXJyb3I6ICdUaGUgbGlua2VkIGlucHV0IGhhcyBhIHZhbHVlIGJ1dCB0aGlzIG9uZSBkb2VzIG5vdCdcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltsaW5rVG9WYWxpZGF0aW9uXVwiLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogQ29tcGFyZVRvVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmtUb1ZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwibGlua1RvVmFsaWRhdGlvblwiKSB2YWx1ZSE6IExpbmtWYWxpZGF0aW9uSW5wdXQ7XHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgY29uc3QgZXJyb3IgPVxyXG4gICAgICB0aGlzLnZhbHVlLmVycm9yID8/IGBUaGlzIGNvbnRyb2wgaGFzIGEgbGluayB0byAke3RoaXMudmFsdWUubGlua30uYDtcclxuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgICAgW3RoaXMudmFsdWUuZXJyb3JOYW1lID8/IFwibGlua1RvVmFsaWRhdGlvblwiXTogZXJyb3IsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxpbmtlZFRvID0gY29udHJvbC5wYXJlbnQ/LmdldCh0aGlzLnZhbHVlLmxpbmspO1xyXG4gICAgcmV0dXJuICFjb250cm9sPy52YWx1ZSAmJiAhIWxpbmtlZFRvPy52YWx1ZSA/IGVycm9ycyA6IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgcHJlZm9ybXMgYSBjaGVjayBpZiB0aGUgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sXHJcbiAqIGRvZXMgbm90IGhhdmUgYSB2YWx1ZSBhbmQgYSBnaXZlbiBpbnB1dCBkb2VzLlxyXG4gKiBcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSB0aGUgbmFtZSBvZiB0aGUgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgdG8gbGlua1xyXG4gKiB0byBhbmQgb3B0aW9uYWxseSB5b3UgY2FuIGdpdmUgaXQgYSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gZXJyb3IgXHJcbiAqIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cInJlZ2V4cE5vdFwiXHJcbiAqICAgIGlkPVwicmVnZXhwTm90XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicmVnZXhwTm90XCJcclxuICogICBbbGlua2VkVG9WYWxpZGF0aW9uXT1cIntcclxuICogICAgICBsaW5rOiAnbGlua1RvLCAgICAgICAgICAgICAgICAgICAgICAtIGEgbmFtZSBvZiBhIGZvcm0gY29udHJvbCB3ZSB3YW50ICBcclxuICogICAgICBlcnJvck5hbWU6ICdsaW5rZWRUbycsICAgICAgICAgICAgICAgICAgICAgdG8gbGluayB0aGUgaW5wdXQgdG9cclxuICogICAgICBlcnJvcjogJ1RoZSBsaW5rZWQgaW5wdXQgZG9lcyBub3QgaGF2ZSBhIHZhbHVlIGJ1dCB0aGlzIG9uZSBkb2VzLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltsaW5rZWRUb1ZhbGlkYXRpb25dXCIsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBDb21wYXJlVG9WYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlua2VkVG9WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcImxpbmtUb1ZhbGlkYXRpb25cIikgdmFsdWUhOiBMaW5rVmFsaWRhdGlvbklucHV0O1xyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIGNvbnN0IGVycm9yID1cclxuICAgICAgdGhpcy52YWx1ZS5lcnJvciA/PyBgVGhpcyBjb250cm9sIGlzIGxpbmtlZCB0byAke3RoaXMudmFsdWUubGlua30uYDtcclxuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgICAgW3RoaXMudmFsdWUuZXJyb3JOYW1lID8/IFwibGlua2VkVG9WYWxpZGF0aW9uXCJdOiBlcnJvcixcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbGluayA9IGNvbnRyb2wucGFyZW50Py5nZXQodGhpcy52YWx1ZS5saW5rKTtcclxuICAgIHJldHVybiAhIWNvbnRyb2w/LnZhbHVlICYmICFsaW5rPy52YWx1ZSA/IGVycm9ycyA6IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==