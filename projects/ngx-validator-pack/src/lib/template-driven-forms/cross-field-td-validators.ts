/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { Directive, Input } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";
import {
  requiredEtherValidation,
  requiredIfNotValidation,
  requiredIfValidation,
} from "../validations/cross-field-validations";

/**
 * @description
 * A Directive that assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has no value.
 *
 * Has an input in which you specify the control which needs to receive the required error,
 * and the control which needs to be checked.
 *
 * @example
 * <form #exampleForm="ngForm"
 *   [requiredIf]="{
 *      required: 'field_name',
 *      check: 'field_name'
 *   }"
 * />
 */
@Directive({
  selector: "[requiredIf]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RequiredIfValidatorDirective,
      multi: true,
    },
  ],
  standalone: true,
})
export class RequiredIfValidatorDirective implements Validator {
  @Input("requiredIf") controls!: {
    required: string;
    check: string;
  };
  validate(control: AbstractControl): ValidationErrors | null {
    return requiredIfValidation(control, {
      requiredControlName: this.controls.required,
      controlToCheckName: this.controls.check,
    });
  }
}

/**
 * @description
 * A Directive that assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has a value.
 *
 * Has an input in which you specify the control which needs to receive the required error,
 * and the control which needs to be checked.
 *
 * @example
 * <form #exampleForm="ngForm"
 *   [requiredIfNot]="{
 *      required: 'field_name',
 *      check: 'field_name'
 *   }"
 * />
 */
@Directive({
  selector: "[requiredIfNot]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RequiredIfNotValidatorDirective,
      multi: true,
    },
  ],
  standalone: true,
})
export class RequiredIfNotValidatorDirective implements Validator {
  @Input("requiredIfNot") controls!: {
    required: string;
    check: string;
  };
  validate(control: AbstractControl): ValidationErrors | null {
    return requiredIfNotValidation(control, {
      requiredControlName: this.controls.required,
      controlToCheckName: this.controls.check,
    });
  }
}

/**
 * @description
 * A Directive that assigns a required error to both controls who's names are specified if nether one
 * has a value.
 *
 * Has an input in which you specify the control which needs to receive the required error,
 * and the control which needs to be checked.
 *
 * @example
 * <form #exampleForm="ngForm"
 *   [requiredIfNot]="{
 *      required: 'field_name',
 *      check: 'field_name'
 *   }"
 * />
 */
@Directive({
  selector: "[requiredEther]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RequiredIfNotValidatorDirective,
      multi: true,
    },
  ],
  standalone: true,
})
export class RequiredEtherValidatorDirective implements Validator {
  @Input("requiredEther") controls!: {
    required: string;
    check: string;
  };
  validate(control: AbstractControl): ValidationErrors | null {
    return requiredEtherValidation(control, {
      requiredControlName: this.controls.required,
      controlToCheckName: this.controls.check,
    });
  }
}
