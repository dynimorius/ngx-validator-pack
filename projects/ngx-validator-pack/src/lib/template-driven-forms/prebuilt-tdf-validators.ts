import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from "@angular/forms";
import { RegExpValidatorDirective } from "./template-driven-form-validators";

@Directive({
  selector: "[addressValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class AddressValidatorDirective extends RegExpValidatorDirective {
  @Input("addressValidation") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[alphabetOnlyValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class AlphabetOnlyValidatorDirective extends RegExpValidatorDirective {
  @Input("alphabetOnlyValidation") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[dateDD_MM_YYYY]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class DateDD_MM_YYYYValidatorDirective extends RegExpValidatorDirective {
  @Input("dateDD_MM_YYYY") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[dateYYYY_MM_DD]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class DateYYYY_MM_DDValidatorDirective extends RegExpValidatorDirective {
  @Input("dateYYYY_MM_DD") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[emailValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective extends RegExpValidatorDirective {
  @Input("emailValidation") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[ipAddressValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class IPAddressValidatorDirective extends RegExpValidatorDirective {
  @Input("ipAddressValidation") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[iPv4Validation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class IPv4ValidatorDirective extends RegExpValidatorDirective {
  @Input("iPv4Validation") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[iPv6Validation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class IPv6ValidatorDirective extends RegExpValidatorDirective {
  @Input("iPv6Validation") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[numericsOnlyValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class NumericsOnlyValidatorDirective extends RegExpValidatorDirective {
  @Input("numericsOnlyValidation") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[noSpecialsValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class NoSpecialsValidatorDirective extends RegExpValidatorDirective {
  @Input("noSpecialsValidation") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[passportValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class PassportValidatorDirective extends RegExpValidatorDirective {
  @Input("passportValidation") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[PasswordValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordValidatorDirective extends RegExpValidatorDirective {
  @Input("passwordValidation") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[phoneNumberValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class PhoneNumberValidatorDirective extends RegExpValidatorDirective {
  @Input("phoneNumberValidation") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[singleSpaceValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class SingleSpaceValidatorDirective extends RegExpValidatorDirective {
  @Input("singleSpaceValidation") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[spaceRestrictionValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class SpaceRestrictionValidatorDirective extends RegExpValidatorDirective {
  @Input("spaceRestrictionValidation") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[ssnValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class SSNValidatorDirective extends RegExpValidatorDirective {
  @Input("ssnValidation") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[timeHH_MM_12]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class TimeHH_MM_12ValidatorDirective extends RegExpValidatorDirective {
  @Input("timeHH_MM_12") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[timeHH_MM_24]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class TimeHH_MM_24ValidatorDirective extends RegExpValidatorDirective {
  @Input("timeHH_MM_24") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[timeHH_MM_SS_24]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class TimeHH_MM_SS_24ValidatorDirective extends RegExpValidatorDirective {
  @Input("timeHH_MM_SS_24") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[urlValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class UrlValidatorDirective extends RegExpValidatorDirective {
  @Input("urlValidation") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

@Directive({
  selector: "[zipCodeValidation]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class ZipCodeValidatorDirective extends RegExpValidatorDirective {
  @Input("zipCodeValidation") override regexp!: RegExp;
  @Input("errorName") override errorName!: string;
  @Input("error") override error!: string;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}