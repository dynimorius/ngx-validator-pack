import { Directive, Input } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";
import {
  ComparisonOperations,
  compareDates,
  prepareToCompare,
} from "../helpers/date";

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
export class RegExpValidatorDirective implements Validator {
  @Input("regexpValidation") regexp!: RegExp;
  @Input("errorName") errorName!: string;
  @Input("error") error!: string;
  validate(control: AbstractControl): ValidationErrors | null {
    this.error =
      this.error ?? "This control did not match a given regular expression.";
    const errors: ValidationErrors = {
      [this.errorName ?? "regexpValidation"]: this.error,
    };

    return !this.regexp || !control.value || this.regexp.test(control.value)
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
export class EarlierThenValidatorDirective implements Validator {
  @Input("earlierThenValidation") date!: Date;
  @Input("errorName") errorName!: string;
  @Input("error") error!: string;
  validate(control: AbstractControl): ValidationErrors | null {
    this.error =
      this.error ?? `This control must have a value earlier then ${this.date}.`;
    const errors: ValidationErrors = {
      [this.errorName ?? "earlierThenValidation"]: this.error,
    };

    return !this.date ||
      prepareToCompare(control?.value) < prepareToCompare(this.date)
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
export class LaterThenValidatorDirective implements Validator {
  @Input("laterThenValidation") date!: Date;
  @Input("errorName") errorName!: string;
  @Input("error") error!: string;
  validate(control: AbstractControl): ValidationErrors | null {
    this.error =
      this.error ?? `This control must have a value later then ${this.date}.`;
    const errors: ValidationErrors = {
      [this.errorName ?? "laterThenValidation"]: this.error,
    };

    return !this.date ||
      prepareToCompare(control?.value) > prepareToCompare(this.date)
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
export class CompareToValidatorDirective implements Validator {
  @Input("compareToValidation") data!: [Date, ComparisonOperations];
  @Input("errorName") errorName!: string;
  @Input("error") error!: string;
  validate(control: AbstractControl): ValidationErrors | null {
    this.error = this.error ?? `Value comparison with ${this.data[0]} failed.`;
    const errors: ValidationErrors = {
      [this.errorName ?? "compareToValidation"]: this.error,
    };

    return !this.data ||
      !control.value ||
      compareDates(control.value, this.data[0], this.data[1])
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
export class RequiredWhenValidatorDirective implements Validator {
  @Input("requiredWhenValidation") conditional!: (() => boolean) | boolean;
  @Input("errorName") errorName!: string;
  @Input("error") error!: string;
  validate(control: AbstractControl): ValidationErrors | null {
    this.error = this.error ?? "This control has a conditional set on it.";
    const errors: ValidationErrors = {
      [this.errorName ?? "requiredWhen"]: this.error,
    };

    const outcome =
      typeof this.conditional === "function"
        ? this.conditional()
        : this.conditional;
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
export class LinkToValidatorDirective implements Validator {
  @Input("linkToValidation") linkTo!: string;
  @Input("errorName") errorName!: string;
  @Input("error") error!: string;
  validate(control: AbstractControl): ValidationErrors | null {
    this.error = this.error ?? "This control has a conditional set on it.";
    const errors: ValidationErrors = {
      [this.errorName ?? "linkToValidation"]: this.error,
    };

    const linkedTo = control.parent?.get(this.linkTo);
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
export class LinkedToValidatorDirective implements Validator {
  @Input("linkToValidation") linkedTo!: string;
  @Input("errorName") errorName!: string;
  @Input("error") error!: string;
  validate(control: AbstractControl): ValidationErrors | null {
    this.error = this.error ?? `This control is linked to ${this.linkedTo}.`;
    const errors: ValidationErrors = {
      [this.errorName ?? "linkedToValidation"]: this.error,
    };

    const link = control.parent?.get(this.linkedTo);
    return !!control?.value && !link?.value ? errors : null;
  }
}
