import {
  CompareValidationInput,
  ConditionalValidationInput,
  DateValidationInput,
  LinkValidationInput,
} from "./../interfaces/directive-input.interface";
import { Directive, Input } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";
import { compareDates, prepareToCompare } from "../helpers/date";
import { RegExpValidationInput } from "../interfaces/directive-input.interface";
import { BaseValidator } from "./base-validator";

@Directive({
  selector: "[regexpValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RegExpValidatorDirective,
      multi: true,
    },
  ],
})
export class RegExpValidatorDirective
  extends BaseValidator
  implements Validator
{
  @Input("regexpValidation") override value!: RegExpValidationInput;

  validate(control: AbstractControl): ValidationErrors | null {
    const error =
      this.value.error ??
      "This control did not match a given regular expression.";
    const errors: ValidationErrors = {
      [this.value.errorName ?? "regexpValidation"]: error,
    };

    return !this.value.regExp ||
      !control.value ||
      this.value.regExp.test(control.value)
      ? null
      : errors;
  }
}

@Directive({
  selector: "[earlierThenValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EarlierThenValidatorDirective,
      multi: true,
    },
  ],
})
export class EarlierThenValidatorDirective
  extends BaseValidator
  implements Validator
{
  @Input("earlierThenValidation") override value!: DateValidationInput;

  validate(control: AbstractControl): ValidationErrors | null {
    const error =
      this.value.error ??
      `This control must have a value earlier then ${this.value.date}.`;
    const errors: ValidationErrors = {
      [this.value.errorName ?? "earlierThenValidation"]: error,
    };

    return !this.value.date ||
      prepareToCompare(control?.value) < prepareToCompare(this.value.date)
      ? null
      : errors;
  }
}

@Directive({
  selector: "[laterThenValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EarlierThenValidatorDirective,
      multi: true,
    },
  ],
})
export class LaterThenValidatorDirective
  extends BaseValidator
  implements Validator
{
  @Input("laterThenValidation") override value!: DateValidationInput;

  validate(control: AbstractControl): ValidationErrors | null {
    const error =
      this.value.error ??
      `This control must have a value later then ${this.value.date}.`;
    const errors: ValidationErrors = {
      [this.value.errorName ?? "laterThenValidation"]: error,
    };

    return !this.value.date ||
      prepareToCompare(control?.value) > prepareToCompare(this.value.date)
      ? null
      : errors;
  }
}

@Directive({
  selector: "[compareToValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CompareToValidatorDirective,
      multi: true,
    },
  ],
})
export class CompareToValidatorDirective
  extends BaseValidator
  implements Validator
{
  @Input("compareToValidation") override value!: CompareValidationInput;
  validate(control: AbstractControl): ValidationErrors | null {
    const error =
      this.value.error ?? `Value comparison with ${this.value.date} failed.`;
    const errors: ValidationErrors = {
      [this.value.errorName ?? "compareToValidation"]: error,
    };

    return !this.value.date ||
      !control.value ||
      compareDates(control.value, this.value.date, this.value.comparison)
      ? null
      : errors;
  }
}

@Directive({
  selector: "[requiredWhenValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CompareToValidatorDirective,
      multi: true,
    },
  ],
})
export class RequiredWhenValidatorDirective
  extends BaseValidator
  implements Validator
{
  @Input("requiredWhenValidation") override value!: ConditionalValidationInput;
  validate(control: AbstractControl): ValidationErrors | null {
    const error =
      this.value.error ?? "This control has a conditional set on it.";
    const errors: ValidationErrors = {
      [this.value.errorName ?? "requiredWhen"]: error,
    };

    const outcome =
      typeof this.value.conditional === "function"
        ? this.value.conditional()
        : this.value.conditional;
    return !control.value && outcome ? errors : null;
  }
}

@Directive({
  selector: "[linkToValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CompareToValidatorDirective,
      multi: true,
    },
  ],
})
export class LinkToValidatorDirective
  extends BaseValidator
  implements Validator
{
  @Input("linkToValidation") override value!: LinkValidationInput;
  validate(control: AbstractControl): ValidationErrors | null {
    const error =
      this.value.error ?? `This control has a link to ${this.value.link}.`;
    const errors: ValidationErrors = {
      [this.value.errorName ?? "linkToValidation"]: error,
    };

    const linkedTo = control.parent?.get(this.value.link);
    return !control?.value && !!linkedTo?.value ? errors : null;
  }
}

@Directive({
  selector: "[linkedToValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CompareToValidatorDirective,
      multi: true,
    },
  ],
})
export class LinkedToValidatorDirective
  extends BaseValidator
  implements Validator
{
  @Input("linkToValidation") override value!: LinkValidationInput;
  validate(control: AbstractControl): ValidationErrors | null {
    const error =
      this.value.error ?? `This control is linked to ${this.value.link}.`;
    const errors: ValidationErrors = {
      [this.value.errorName ?? "linkedToValidation"]: error,
    };

    const link = control.parent?.get(this.value.link);
    return !!control?.value && !link?.value ? errors : null;
  }
}
