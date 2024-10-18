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
} from "@angular/forms";
import { RegExpNotValidatorDirective, RegExpValidatorDirective } from "./template-driven-form-validators";
import { RegExpValidatorInput } from "../decorators/validator-input";
import {
  IPAddressV4,
  IPAddressV4AndV6,
  IPAddressV6,
  address,
  dateDD_MM_YYYY,
  dateYYYY_MM_DD,
  email,
  lettersOnly,
  noSpecial,
  numbersOnly,
  passport,
  passwordStrength,
  phoneNumber,
  singleSpace,
  spaceRestriction,
  ssn,
  timeHH_MM_12,
  timeHH_MM_24,
  timeHH_MM_SS_24,
  url,
  zipCode,
} from "../constant/regex";

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl is 
 * in a proper address format (Street number Street Name, City, State ZIP code)
 * Example: 3344 W Alameda Avenue, Lakewood, CO 80222
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="address"
 *    id="address"
 *    formControlName="address"
 *   [addressValidation]="{
 *      errorName: 'address',
 *      error: 'Wrong address format.'
 *   }"
 * />
 */
@Directive({
  selector: "[addressValidation]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressValidatorDirective,
      multi: true,
    },
  ],
})
export class AddressValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(
    address,
    "address",
    "Please input a value in a format of: Street number Street Name, City, State ZIP code."
  )
  @Input("addressValidation")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that hecks if a value in the given FromControl / AbstractControl 
 * consists of only alphabetic characters.
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="alphabet"
 *    id="alphabet"
 *    formControlName="alphabet"
 *   [alphabetOnlyValidation]="{
 *      errorName: 'alphabet',
 *      error: 'Only letters please.'
 *   }"
 * />
 */
@Directive({
  selector: "[alphabetOnlyValidation]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AlphabetOnlyValidatorDirective,
      multi: true,
    },
  ],
})
export class AlphabetOnlyValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(
    lettersOnly,
    "alphabetOnly",
    "Only alphabetic characters are allowed."
  )
  @Input("alphabetOnlyValidation")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * is in one of the following formats: dd-MM-YYYY, dd.MM.YYYY or dd/MM/YYYY.
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="dateDD_MM_YYYY"
 *    id="dateDD_MM_YYYY"
 *    formControlName="dateDD_MM_YYYY"
 *   [dateDD_MM_YYYY]="{
 *      errorName: 'dateDD_MM_YYYY',
 *      error: 'Wrong date format.'
 *   }"
 * />
 */
@Directive({
  selector: "[dateDD_MM_YYYY]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateDD_MM_YYYYValidatorDirective,
      multi: true,
    },
  ],
})
export class DateDD_MM_YYYYValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(
    dateDD_MM_YYYY,
    "dateDD_MM_YYYY",
    "Please input a value one of the following formats: dd-MM-YYYY or dd.MM.YYYY or dd/MM/YYYY."
  )
  @Input("dateDD_MM_YYYY")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * is a following format: YYYY-MM-dd.
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="dateYYYY_MM_DD"
 *    id="dateYYYY_MM_DD"
 *    formControlName="dateYYYY_MM_DD"
 *   [dateYYYY_MM_DD]="{
 *      errorName: 'dateYYYY_MM_DD',
 *      error: 'Wrong date format.'
 *   }"
 * />
 */
@Directive({
  selector: "[dateYYYY_MM_DD]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateYYYY_MM_DDValidatorDirective,
      multi: true,
    },
  ],
})
export class DateYYYY_MM_DDValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(
    dateYYYY_MM_DD,
    "dateYYYY_MM_DD",
    "Please input a value in a format: YYYY-MM-dd."
  )
  @Input("dateYYYY_MM_DD")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * is a following format: local-part@domain.com.
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="email"
 *    id="email"
 *    formControlName="email"
 *   [emailValidation]="{
 *      errorName: 'email',
 *      error: 'Wrong email format.'
 *   }"
 * />
 */
@Directive({
  selector: "[emailValidation]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(
    email,
    "email",
    "Please input a value in a format: local-part@domain.com."
  )
  @Input("emailValidation")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * is in one of the following formats: x.x.x.x or y:y:y:y:y:y:y:y.
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="ipAddress"
 *    id="ipAddress"
 *    formControlName="ipAddress"
 *   [ipAddressValidation]="{
 *      errorName: 'ipAddress',
 *      error: 'Wrong ip address format.'
 *   }"
 * />
 */
@Directive({
  selector: "[ipAddressValidation]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IPAddressValidatorDirective,
      multi: true,
    },
  ],
})
export class IPAddressValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(
    IPAddressV4AndV6,
    "ipAddress",
    "Please input a value one of the following formats: x.x.x.x or y:y:y:y:y:y:y:y."
  )
  @Input("ipAddressValidation")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * is in a following format: x.x.x.x.
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="iPv4"
 *    id="iPv4"
 *    formControlName="iPv4"
 *   [iPv4Validation]="{
 *      errorName: 'iPv4',
 *      error: 'Wrong ip address format.'
 *   }"
 * />
 */
@Directive({
  selector: "[iPv4Validation]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IPv4ValidatorDirective,
      multi: true,
    },
  ],
})
export class IPv4ValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(
    IPAddressV4,
    "iPv4",
    "Please input a value in a format: x.x.x.x."
  )
  @Input("iPv4Validation")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * is in a following format:  y:y:y:y:y:y:y:y.
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="iPv6"
 *    id="iPv6"
 *    formControlName="iPv6"
 *   [iPv6Validation]="{
 *      errorName: 'iPv6',
 *      error: 'Wrong ip address format.'
 *   }"
 * />
 */
@Directive({
  selector: "[iPv6Validation]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IPv6ValidatorDirective,
      multi: true,
    },
  ],
})
export class IPv6ValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(
    IPAddressV6,
    "iPv6",
    "Please input a value in a format: y:y:y:y:y:y:y:y."
  )
  @Input("iPv6Validation")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * consists of only numeric characters.
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="numbers"
 *    id="numbers"
 *    formControlName="numbers"
 *   [numericsOnlyValidation]="{
 *      errorName: 'numbers',
 *      error: 'Numbers only please.'
 *   }"
 * />
 */
@Directive({
  selector: "[numericsOnlyValidation]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NumericsOnlyValidatorDirective,
      multi: true,
    },
  ],
})
export class NumericsOnlyValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(
    numbersOnly,
    "numbersOnly",
    "Only numeric characters are allowed."
  )
  @Input("numericsOnlyValidation")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * has any special characters.
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="noSpecials"
 *    id="noSpecials"
 *    formControlName="noSpecials"
 *   [noSpecialsValidation]="{
 *      errorName: 'noSpecials',
 *      error: 'Remove any special characters.'
 *   }"
 * />
 */
@Directive({
  selector: "[noSpecialsValidation]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NoSpecialsValidatorDirective,
      multi: true,
    },
  ],
})
export class NoSpecialsValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(
    noSpecial,
    "noSpecials",
    "No special characters are allowed."
  )
  @Input("noSpecialsValidation")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * is in a proper passport format.
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="passport"
 *    id="passport"
 *    formControlName="passport"
 *   [passportValidation]="{
 *      errorName: 'passport',
 *      error: 'Wrong passport format'
 *   }"
 * />
 */
@Directive({
  selector: "[passportValidation]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PassportValidatorDirective,
      multi: true,
    },
  ],
})
export class PassportValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(passport, "passport", "Incorrect passport format.")
  @Input("passportValidation")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * is in a strong password format (Has at least 1 lowercase letter, 1 uppercase letter, 
 * 1 number, 1 special character and has length of at least 8 characters).
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="password"
 *    id="password"
 *    formControlName="password"
 *   [passwordValidation]="{
 *      errorName: 'password',
 *      error: 'Password is not strong enough.'
 *   }"
 * />
 */
@Directive({
  selector: "[passwordValidation]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(
    passwordStrength,
    "password",
    "The value has to contain at least 1 lowercase letter, 1 uppercase letter, 1 special character and has a length of 8."
  )
  @Input("passwordValidation")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * is in a following format: (000) 000 0000.
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="phoneNumber"
 *    id="phoneNumber"
 *    formControlName="phoneNumber"
 *   [phoneNumberValidation]="{
 *      errorName: 'phoneNumber',
 *      error: 'Wrong phone number format.'
 *   }"
 * />
 */
@Directive({
  selector: "[phoneNumberValidation]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneNumberValidatorDirective,
      multi: true,
    },
  ],
})
export class PhoneNumberValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(
    phoneNumber,
    "phoneNumber",
    "Please input a value in a format: (000) 000 0000."
  )
  @Input("phoneNumberValidation")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * consists of a single space character.
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="singleSpace"
 *    id="singleSpace"
 *    formControlName="singleSpace"
 *   [singleSpaceValidation]="{
 *      errorName: 'singleSpace',
 *      error: 'Your input has only one space in it.'
 *   }"
 * />
 */
@Directive({
  selector: "[singleSpaceValidation]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SingleSpaceValidatorDirective,
      multi: true,
    },
  ],
})
export class SingleSpaceValidatorDirective extends RegExpNotValidatorDirective {
  @RegExpValidatorInput(
    singleSpace,
    "singleSpace",
    "A single space character is not allowed."
  )
  @Input("singleSpaceValidation")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * starts or ends with a space character.
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="spaceRestriction"
 *    id="spaceRestriction"
 *    formControlName="spaceRestriction"
 *   [spaceRestrictionValidation]="{
 *      errorName: 'spaceRestriction',
 *      error: 'No spaces on the start or the end of the value please.'
 *   }"
 * />
 */
@Directive({
  selector: "[spaceRestrictionValidation]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SpaceRestrictionValidatorDirective,
      multi: true,
    },
  ],
})
export class SpaceRestrictionValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(
    spaceRestriction,
    "spaceRestriction",
    "Value can not start or end with a space character."
  )
  @Input("spaceRestrictionValidation")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * is in one of the following formats: AAA-GGG-SSSS or AAAGGGSSSS.
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="ssn"
 *    id="ssn"
 *    formControlName="ssn"
 *   [ssnValidation]="{
 *      errorName: 'ssn',
 *      error: 'Wrong ssn format.'
 *   }"
 * />
 */
@Directive({
  selector: "[ssnValidation]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SSNValidatorDirective,
      multi: true,
    },
  ],
})
export class SSNValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(
    ssn,
    "ssn",
    "Please input a value one of the following formats: AAA-GGG-SSSS or AAAGGGSSSS."
  )
  @Input("ssnValidation")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * is in a Time Format HH:MM 12-hour with optional leading 0.
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="timeHH_MM_12"
 *    id="timeHH_MM_12"
 *    formControlName="timeHH_MM_12"
 *   [timeHH_MM_12]="{
 *      errorName: 'timeHH_MM_12',
 *      error: 'Wrong time format.'
 *   }"
 * />
 */
@Directive({
  selector: "[timeHH_MM_12]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TimeHH_MM_12ValidatorDirective,
      multi: true,
    },
  ],
})
export class TimeHH_MM_12ValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(
    timeHH_MM_12,
    "timeHH_MM_12",
    "Please input a value in a HH:MM 12-hour format."
  )
  @Input("timeHH_MM_12")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * is in a Time Format HH:MM 24-hour with optional leading 0.
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="timeHH_MM_24"
 *    id="timeHH_MM_24"
 *    formControlName="timeHH_MM_24"
 *   [timeHH_MM_24]="{
 *      errorName: 'timeHH_MM_24',
 *      error: 'Wrong time format.'
 *   }"
 * />
 */
@Directive({
  selector: "[timeHH_MM_24]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TimeHH_MM_24ValidatorDirective,
      multi: true,
    },
  ],
})
export class TimeHH_MM_24ValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(
    timeHH_MM_24,
    "timeHH_MM_24",
    "Please input a value in a HH:MM 24-hour format."
  )
  @Input("timeHH_MM_24")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * is in a Time Format HH:MM:SS 24-hour.
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="timeHH_MM_SS_24"
 *    id="timeHH_MM_SS_24"
 *    formControlName="timeHH_MM_SS_24"
 *   [timeHH_MM_SS_24]="{
 *      errorName: 'timeHH_MM_SS_24',
 *      error: 'Wrong time format.'
 *   }"
 * />
 */
@Directive({
  selector: "[timeHH_MM_SS_24]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TimeHH_MM_SS_24ValidatorDirective,
      multi: true,
    },
  ],
})
export class TimeHH_MM_SS_24ValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(
    timeHH_MM_SS_24,
    "timeHH_MM_SS_24",
    "Please input a value in a HH:MM:SS 24-hour format."
  )
  @Input("timeHH_MM_SS_24")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * is in a correct url format.
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="url"
 *    id="url"
 *    formControlName="url"
 *   [urlValidation]="{
 *      errorName: 'url',
 *      error: 'Wrong url format.'
 *   }"
 * />
 */
@Directive({
  selector: "[urlValidation]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UrlValidatorDirective,
      multi: true,
    },
  ],
})
export class UrlValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(url, "url", "Improper URL format.")
  @Input("urlValidation")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}

/**
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl 
 * is in one of the following formats: 00000 or 00000-0000..
 * 
 * Has an optional input in which you specify custom name and a custom 
 * error content / message. 
 * 
 * @example
 *  <input
 *    type="text"
 *    name="zipCode"
 *    id="zipCode"
 *    formControlName="zipCode"
 *   [zipCodeValidation]="{
 *      errorName: 'zipCode',
 *      error: 'Wrong zip code format.'
 *   }"
 * />
 */
@Directive({
  selector: "[zipCodeValidation]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ZipCodeValidatorDirective,
      multi: true,
    },
  ],
})
export class ZipCodeValidatorDirective extends RegExpValidatorDirective {
  @RegExpValidatorInput(zipCode, "zipCode", "Improper zip code format.")
  @Input("zipCodeValidation")
  override value!: any;
  override validate(control: AbstractControl): ValidationErrors | null {
    return super.validate(control);
  }
}
