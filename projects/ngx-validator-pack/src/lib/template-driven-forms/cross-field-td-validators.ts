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
