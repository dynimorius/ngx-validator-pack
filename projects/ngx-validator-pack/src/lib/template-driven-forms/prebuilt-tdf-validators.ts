import { Directive, Input } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
} from "@angular/forms";
import { RegExpValidatorDirective } from "./template-driven-form-validators";
import {
  RegExpValidationInput,
  regExpInputFactory,
} from "../interfaces/directive-input.interface";

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
  @Input("addressValidation") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(
        value,
        "address",
        "Please input a value in a format of: Street number Street Name, City, State ZIP code."
      )
    );
  }
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
  @Input("alphabetOnlyValidation") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(
        value,
        "alphabetOnly",
        "Only alphabetic characters are allowed."
      )
    );
  }
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
  @Input("dateDD_MM_YYYY") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(
        value,
        "dateDD_MM_YYYY",
        "Please input a value one of the following formats: dd-MM-YYYY or dd.MM.YYYY or dd/MM/YYYY."
      )
    );
  }
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
  @Input("dateYYYY_MM_DD") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(
        value,
        "dateYYYY_MM_DD",
        "Please input a value in a format: YYYY-MM-dd."
      )
    );
  }
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
  @Input("emailValidation") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(
        value,
        "email",
        "Please input a value in a format: local-part@domain.com."
      )
    );
  }
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
  @Input("ipAddressValidation") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(
        value,
        "ipAddress",
        "Please input a value one of the following formats: x.x.x.x or y:y:y:y:y:y:y:y."
      )
    );
  }
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
  @Input("iPv4Validation") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(
        value,
        "iPv4",
        "Please input a value in a format: x.x.x.x."
      )
    );
  }
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
  @Input("iPv6Validation") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(
        value,
        "iPv6",
        "Please input a value in a format: y:y:y:y:y:y:y:y."
      )
    );
  }
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
  @Input("numericsOnlyValidation") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(
        value,
        "numericsOnly",
        "Only numeric characters are allowed."
      )
    );
  }
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
  @Input("noSpecialsValidation") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(
        value,
        "noSpecials",
        "No special characters are allowed."
      )
    );
  }
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
  @Input("passportValidation") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(value, "passport", "Incorrect passport format.")
    );
  }
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
  @Input("passwordValidation") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(
        value,
        "password",
        "The value has to contain at least 1 lowercase letter, 1 uppercase letter, 1 special character and has a length of 8."
      )
    );
  }
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
  @Input("phoneNumberValidation") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(
        value,
        "phoneNumber",
        "Please input a value in a format: (000) 000 0000."
      )
    );
  }
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
  @Input("singleSpaceValidation") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(
        value,
        "singleSpace",
        "A single space character is not allowed."
      )
    );
  }
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
  @Input("spaceRestrictionValidation") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(
        value,
        "spaceRestriction",
        "Value can not start or end with a space character."
      )
    );
  }
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
  @Input("ssnValidation") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(
        value,
        "ssn",
        "Please input a value one of the following formats: AAA-GGG-SSSS or AAAGGGSSSS."
      )
    );
  }
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
  @Input("timeHH_MM_12") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(
        value,
        "timeHH_MM_12",
        "Please input a value in a HH:MM 12-hour format."
      )
    );
  }
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
  @Input("timeHH_MM_24") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(
        value,
        "timeHH_MM_24",
        "Please input a value in a HH:MM 24-hour format."
      )
    );
  }
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
  @Input("timeHH_MM_SS_24") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(
        value,
        "timeHH_MM_SS_24",
        "Please input a value in a HH:MM:SS 24-hour format."
      )
    );
  }
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
  @Input("urlValidation") set input(value: RegExpValidationInput) {
    super.setValue(regExpInputFactory(value, "url", "Improper URL format."));
  }
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
  @Input("zipCodeValidation") set input(value: RegExpValidationInput) {
    super.setValue(
      regExpInputFactory(value, "zipCode", "Improper zip code format.")
    );
  }
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}
