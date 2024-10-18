import { AbstractControl, ValidationErrors } from "@angular/forms";
import { RegExpNotValidatorDirective, RegExpValidatorDirective } from "./template-driven-form-validators";
import * as i0 from "@angular/core";
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
export declare class AddressValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddressValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AddressValidatorDirective, "[addressValidation]", never, { "value": { "alias": "addressValidation"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class AlphabetOnlyValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlphabetOnlyValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AlphabetOnlyValidatorDirective, "[alphabetOnlyValidation]", never, { "value": { "alias": "alphabetOnlyValidation"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class DateDD_MM_YYYYValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateDD_MM_YYYYValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DateDD_MM_YYYYValidatorDirective, "[dateDD_MM_YYYY]", never, { "value": { "alias": "dateDD_MM_YYYY"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class DateYYYY_MM_DDValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateYYYY_MM_DDValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DateYYYY_MM_DDValidatorDirective, "[dateYYYY_MM_DD]", never, { "value": { "alias": "dateYYYY_MM_DD"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class EmailValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EmailValidatorDirective, "[emailValidation]", never, { "value": { "alias": "emailValidation"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class IPAddressValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<IPAddressValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IPAddressValidatorDirective, "[ipAddressValidation]", never, { "value": { "alias": "ipAddressValidation"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class IPv4ValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<IPv4ValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IPv4ValidatorDirective, "[iPv4Validation]", never, { "value": { "alias": "iPv4Validation"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class IPv6ValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<IPv6ValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IPv6ValidatorDirective, "[iPv6Validation]", never, { "value": { "alias": "iPv6Validation"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class NumericsOnlyValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumericsOnlyValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NumericsOnlyValidatorDirective, "[numericsOnlyValidation]", never, { "value": { "alias": "numericsOnlyValidation"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class NoSpecialsValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<NoSpecialsValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NoSpecialsValidatorDirective, "[noSpecialsValidation]", never, { "value": { "alias": "noSpecialsValidation"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class PassportValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<PassportValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PassportValidatorDirective, "[passportValidation]", never, { "value": { "alias": "passportValidation"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class PasswordValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<PasswordValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PasswordValidatorDirective, "[passwordValidation]", never, { "value": { "alias": "passwordValidation"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class PhoneNumberValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhoneNumberValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PhoneNumberValidatorDirective, "[phoneNumberValidation]", never, { "value": { "alias": "phoneNumberValidation"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class SingleSpaceValidatorDirective extends RegExpNotValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<SingleSpaceValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SingleSpaceValidatorDirective, "[singleSpaceValidation]", never, { "value": { "alias": "singleSpaceValidation"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class SpaceRestrictionValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpaceRestrictionValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SpaceRestrictionValidatorDirective, "[spaceRestrictionValidation]", never, { "value": { "alias": "spaceRestrictionValidation"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class SSNValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<SSNValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SSNValidatorDirective, "[ssnValidation]", never, { "value": { "alias": "ssnValidation"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class TimeHH_MM_12ValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeHH_MM_12ValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TimeHH_MM_12ValidatorDirective, "[timeHH_MM_12]", never, { "value": { "alias": "timeHH_MM_12"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class TimeHH_MM_24ValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeHH_MM_24ValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TimeHH_MM_24ValidatorDirective, "[timeHH_MM_24]", never, { "value": { "alias": "timeHH_MM_24"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class TimeHH_MM_SS_24ValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeHH_MM_SS_24ValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TimeHH_MM_SS_24ValidatorDirective, "[timeHH_MM_SS_24]", never, { "value": { "alias": "timeHH_MM_SS_24"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class UrlValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<UrlValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UrlValidatorDirective, "[urlValidation]", never, { "value": { "alias": "urlValidation"; "required": false; }; }, {}, never, never, true, never>;
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
export declare class ZipCodeValidatorDirective extends RegExpValidatorDirective {
    value: any;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<ZipCodeValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ZipCodeValidatorDirective, "[zipCodeValidation]", never, { "value": { "alias": "zipCodeValidation"; "required": false; }; }, {}, never, never, true, never>;
}
