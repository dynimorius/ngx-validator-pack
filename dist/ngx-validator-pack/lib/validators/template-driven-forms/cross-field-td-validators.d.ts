import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";
import * as i0 from "@angular/core";
/**
 * @publicApi
 * @description
 * A Directive that assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has no value.
 *
 * Has an input in which you specify the control which needs to receive the required error,
 * and the control which needs to be checked.
 *
 * @usageNotes
 * <form #exampleForm="ngForm"
 *   [requiredIf]="{
 *      required: 'field_name',
 *      check: 'field_name'
 *   }"
 * />
 */
export declare class RequiredIfValidatorDirective implements Validator {
    controls: {
        required: string;
        check: string;
    };
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<RequiredIfValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RequiredIfValidatorDirective, "[requiredIf]", never, { "controls": { "alias": "requiredIf"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @publicApi
 * @description
 * A Directive that assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has a value.
 *
 * Has an input in which you specify the control which needs to receive the required error,
 * and the control which needs to be checked.
 *
 * @usageNotes
 * <form #exampleForm="ngForm"
 *   [requiredIfNot]="{
 *      required: 'field_name',
 *      check: 'field_name'
 *   }"
 * />
 */
export declare class RequiredIfNotValidatorDirective implements Validator {
    controls: {
        required: string;
        check: string;
    };
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<RequiredIfNotValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RequiredIfNotValidatorDirective, "[requiredIfNot]", never, { "controls": { "alias": "requiredIfNot"; "required": false; }; }, {}, never, never, true, never>;
}
/**
 * @publicApi
 * @description
 * A Directive that assigns a required error to both controls who's names are specified if nether one
 * has a value.
 *
 * Has an input in which you specify the control which needs to receive the required error,
 * and the control which needs to be checked.
 *
 * @usageNotes
 * <form #exampleForm="ngForm"
 *   [requiredEther]="{
 *      required: 'field_name',
 *      check: 'field_name'
 *   }"
 * />
 */
export declare class RequiredEtherValidatorDirective implements Validator {
    controls: {
        required: string;
        check: string;
    };
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<RequiredEtherValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RequiredEtherValidatorDirective, "[requiredEther]", never, { "controls": { "alias": "requiredEther"; "required": false; }; }, {}, never, never, true, never>;
}
