import { __decorate } from "tslib";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, } from "@angular/forms";
import { RegExpNotValidatorDirective, RegExpValidatorDirective } from "./template-driven-form-validators";
import { RegExpValidatorInput } from "../decorators/validator-input";
import { IPAddressV4, IPAddressV4AndV6, IPAddressV6, address, dateDD_MM_YYYY, dateYYYY_MM_DD, email, lettersOnly, noSpecial, numbersOnly, passport, passwordStrength, phoneNumber, singleSpace, spaceRestriction, ssn, timeHH_MM_12, timeHH_MM_24, timeHH_MM_SS_24, url, zipCode, } from "../constant/regex";
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
export class AddressValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AddressValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AddressValidatorDirective, isStandalone: true, selector: "[addressValidation]", inputs: { value: ["addressValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: AddressValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(address, "address", "Please input a value in a format of: Street number Street Name, City, State ZIP code.")
], AddressValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AddressValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[addressValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: AddressValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["addressValidation"]
            }] } });
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
export class AlphabetOnlyValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AlphabetOnlyValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AlphabetOnlyValidatorDirective, isStandalone: true, selector: "[alphabetOnlyValidation]", inputs: { value: ["alphabetOnlyValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: AlphabetOnlyValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(lettersOnly, "alphabetOnly", "Only alphabetic characters are allowed.")
], AlphabetOnlyValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AlphabetOnlyValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[alphabetOnlyValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: AlphabetOnlyValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["alphabetOnlyValidation"]
            }] } });
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
export class DateDD_MM_YYYYValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DateDD_MM_YYYYValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: DateDD_MM_YYYYValidatorDirective, isStandalone: true, selector: "[dateDD_MM_YYYY]", inputs: { value: ["dateDD_MM_YYYY", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: DateDD_MM_YYYYValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(dateDD_MM_YYYY, "dateDD_MM_YYYY", "Please input a value one of the following formats: dd-MM-YYYY or dd.MM.YYYY or dd/MM/YYYY.")
], DateDD_MM_YYYYValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DateDD_MM_YYYYValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[dateDD_MM_YYYY]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: DateDD_MM_YYYYValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["dateDD_MM_YYYY"]
            }] } });
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
export class DateYYYY_MM_DDValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DateYYYY_MM_DDValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: DateYYYY_MM_DDValidatorDirective, isStandalone: true, selector: "[dateYYYY_MM_DD]", inputs: { value: ["dateYYYY_MM_DD", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: DateYYYY_MM_DDValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(dateYYYY_MM_DD, "dateYYYY_MM_DD", "Please input a value in a format: YYYY-MM-dd.")
], DateYYYY_MM_DDValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DateYYYY_MM_DDValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[dateYYYY_MM_DD]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: DateYYYY_MM_DDValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["dateYYYY_MM_DD"]
            }] } });
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
export class EmailValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EmailValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: EmailValidatorDirective, isStandalone: true, selector: "[emailValidation]", inputs: { value: ["emailValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: EmailValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(email, "email", "Please input a value in a format: local-part@domain.com.")
], EmailValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EmailValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[emailValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: EmailValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["emailValidation"]
            }] } });
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
export class IPAddressValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IPAddressValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: IPAddressValidatorDirective, isStandalone: true, selector: "[ipAddressValidation]", inputs: { value: ["ipAddressValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: IPAddressValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(IPAddressV4AndV6, "ipAddress", "Please input a value one of the following formats: x.x.x.x or y:y:y:y:y:y:y:y.")
], IPAddressValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IPAddressValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[ipAddressValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: IPAddressValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["ipAddressValidation"]
            }] } });
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
export class IPv4ValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IPv4ValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: IPv4ValidatorDirective, isStandalone: true, selector: "[iPv4Validation]", inputs: { value: ["iPv4Validation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: IPv4ValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(IPAddressV4, "iPv4", "Please input a value in a format: x.x.x.x.")
], IPv4ValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IPv4ValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[iPv4Validation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: IPv4ValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["iPv4Validation"]
            }] } });
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
export class IPv6ValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IPv6ValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: IPv6ValidatorDirective, isStandalone: true, selector: "[iPv6Validation]", inputs: { value: ["iPv6Validation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: IPv6ValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(IPAddressV6, "iPv6", "Please input a value in a format: y:y:y:y:y:y:y:y.")
], IPv6ValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IPv6ValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[iPv6Validation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: IPv6ValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["iPv6Validation"]
            }] } });
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
export class NumericsOnlyValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NumericsOnlyValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: NumericsOnlyValidatorDirective, isStandalone: true, selector: "[numericsOnlyValidation]", inputs: { value: ["numericsOnlyValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: NumericsOnlyValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(numbersOnly, "numbersOnly", "Only numeric characters are allowed.")
], NumericsOnlyValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NumericsOnlyValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[numericsOnlyValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: NumericsOnlyValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["numericsOnlyValidation"]
            }] } });
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
export class NoSpecialsValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NoSpecialsValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: NoSpecialsValidatorDirective, isStandalone: true, selector: "[noSpecialsValidation]", inputs: { value: ["noSpecialsValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: NoSpecialsValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(noSpecial, "noSpecials", "No special characters are allowed.")
], NoSpecialsValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NoSpecialsValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[noSpecialsValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: NoSpecialsValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["noSpecialsValidation"]
            }] } });
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
export class PassportValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PassportValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: PassportValidatorDirective, isStandalone: true, selector: "[passportValidation]", inputs: { value: ["passportValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: PassportValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(passport, "passport", "Incorrect passport format.")
], PassportValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PassportValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[passportValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: PassportValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["passportValidation"]
            }] } });
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
export class PasswordValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PasswordValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: PasswordValidatorDirective, isStandalone: true, selector: "[passwordValidation]", inputs: { value: ["passwordValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: PasswordValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(passwordStrength, "password", "The value has to contain at least 1 lowercase letter, 1 uppercase letter, 1 special character and has a length of 8.")
], PasswordValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PasswordValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[passwordValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: PasswordValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["passwordValidation"]
            }] } });
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
export class PhoneNumberValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PhoneNumberValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: PhoneNumberValidatorDirective, isStandalone: true, selector: "[phoneNumberValidation]", inputs: { value: ["phoneNumberValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: PhoneNumberValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(phoneNumber, "phoneNumber", "Please input a value in a format: (000) 000 0000.")
], PhoneNumberValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PhoneNumberValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[phoneNumberValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: PhoneNumberValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["phoneNumberValidation"]
            }] } });
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
export class SingleSpaceValidatorDirective extends RegExpNotValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SingleSpaceValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: SingleSpaceValidatorDirective, isStandalone: true, selector: "[singleSpaceValidation]", inputs: { value: ["singleSpaceValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: SingleSpaceValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(singleSpace, "singleSpace", "A single space character is not allowed.")
], SingleSpaceValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SingleSpaceValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[singleSpaceValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: SingleSpaceValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["singleSpaceValidation"]
            }] } });
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
export class SpaceRestrictionValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SpaceRestrictionValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: SpaceRestrictionValidatorDirective, isStandalone: true, selector: "[spaceRestrictionValidation]", inputs: { value: ["spaceRestrictionValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: SpaceRestrictionValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(spaceRestriction, "spaceRestriction", "Value can not start or end with a space character.")
], SpaceRestrictionValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SpaceRestrictionValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[spaceRestrictionValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: SpaceRestrictionValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["spaceRestrictionValidation"]
            }] } });
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
export class SSNValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SSNValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: SSNValidatorDirective, isStandalone: true, selector: "[ssnValidation]", inputs: { value: ["ssnValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: SSNValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(ssn, "ssn", "Please input a value one of the following formats: AAA-GGG-SSSS or AAAGGGSSSS.")
], SSNValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SSNValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[ssnValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: SSNValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["ssnValidation"]
            }] } });
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
export class TimeHH_MM_12ValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TimeHH_MM_12ValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: TimeHH_MM_12ValidatorDirective, isStandalone: true, selector: "[timeHH_MM_12]", inputs: { value: ["timeHH_MM_12", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: TimeHH_MM_12ValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(timeHH_MM_12, "timeHH_MM_12", "Please input a value in a HH:MM 12-hour format.")
], TimeHH_MM_12ValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TimeHH_MM_12ValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[timeHH_MM_12]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: TimeHH_MM_12ValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["timeHH_MM_12"]
            }] } });
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
export class TimeHH_MM_24ValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TimeHH_MM_24ValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: TimeHH_MM_24ValidatorDirective, isStandalone: true, selector: "[timeHH_MM_24]", inputs: { value: ["timeHH_MM_24", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: TimeHH_MM_24ValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(timeHH_MM_24, "timeHH_MM_24", "Please input a value in a HH:MM 24-hour format.")
], TimeHH_MM_24ValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TimeHH_MM_24ValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[timeHH_MM_24]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: TimeHH_MM_24ValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["timeHH_MM_24"]
            }] } });
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
export class TimeHH_MM_SS_24ValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TimeHH_MM_SS_24ValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: TimeHH_MM_SS_24ValidatorDirective, isStandalone: true, selector: "[timeHH_MM_SS_24]", inputs: { value: ["timeHH_MM_SS_24", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: TimeHH_MM_SS_24ValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(timeHH_MM_SS_24, "timeHH_MM_SS_24", "Please input a value in a HH:MM:SS 24-hour format.")
], TimeHH_MM_SS_24ValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TimeHH_MM_SS_24ValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[timeHH_MM_SS_24]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: TimeHH_MM_SS_24ValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["timeHH_MM_SS_24"]
            }] } });
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
export class UrlValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UrlValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: UrlValidatorDirective, isStandalone: true, selector: "[urlValidation]", inputs: { value: ["urlValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: UrlValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(url, "url", "Improper URL format.")
], UrlValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UrlValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[urlValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: UrlValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["urlValidation"]
            }] } });
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
export class ZipCodeValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ZipCodeValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: ZipCodeValidatorDirective, isStandalone: true, selector: "[zipCodeValidation]", inputs: { value: ["zipCodeValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: ZipCodeValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(zipCode, "zipCode", "Improper zip code format.")
], ZipCodeValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ZipCodeValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[zipCodeValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: ZipCodeValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["zipCodeValidation"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlYnVpbHQtdGRmLXZhbGlkYXRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi90ZW1wbGF0ZS1kcml2ZW4tZm9ybXMvcHJlYnVpbHQtdGRmLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFFTCxhQUFhLEdBRWQsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsT0FBTyxFQUNQLGNBQWMsRUFDZCxjQUFjLEVBQ2QsS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFFBQVEsRUFDUixnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsR0FBRyxFQUNILFlBQVksRUFDWixZQUFZLEVBQ1osZUFBZSxFQUNmLEdBQUcsRUFDSCxPQUFPLEdBQ1IsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBWUgsTUFBTSxPQUFPLHlCQUEwQixTQUFRLHdCQUF3QjtJQVE1RCxRQUFRLENBQUMsT0FBd0I7UUFDeEMsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7K0dBVlUseUJBQXlCO21HQUF6Qix5QkFBeUIscUhBUnpCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7QUFTUTtJQU5SLG9CQUFvQixDQUNuQixPQUFPLEVBQ1AsU0FBUyxFQUNULHVGQUF1RixDQUN4Rjt3REFFb0I7NEZBUFYseUJBQXlCO2tCQVhyQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsMkJBQTJCOzRCQUN0QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs4QkFRVSxLQUFLO3NCQURiLEtBQUs7dUJBQUMsbUJBQW1COztBQU81Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQVlILE1BQU0sT0FBTyw4QkFBK0IsU0FBUSx3QkFBd0I7SUFRakUsUUFBUSxDQUFDLE9BQXdCO1FBQ3hDLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOytHQVZVLDhCQUE4QjttR0FBOUIsOEJBQThCLCtIQVI5QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7O0FBU1E7SUFOUixvQkFBb0IsQ0FDbkIsV0FBVyxFQUNYLGNBQWMsRUFDZCx5Q0FBeUMsQ0FDMUM7NkRBRW9COzRGQVBWLDhCQUE4QjtrQkFYMUMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLGdDQUFnQzs0QkFDM0MsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7OEJBUVUsS0FBSztzQkFEYixLQUFLO3VCQUFDLHdCQUF3Qjs7QUFPakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFZSCxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsd0JBQXdCO0lBUW5FLFFBQVEsQ0FBQyxPQUF3QjtRQUN4QyxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzsrR0FWVSxnQ0FBZ0M7bUdBQWhDLGdDQUFnQywrR0FSaEM7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOztBQVNRO0lBTlIsb0JBQW9CLENBQ25CLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsNEZBQTRGLENBQzdGOytEQUVvQjs0RkFQVixnQ0FBZ0M7a0JBWDVDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxrQ0FBa0M7NEJBQzdDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOzhCQVFVLEtBQUs7c0JBRGIsS0FBSzt1QkFBQyxnQkFBZ0I7O0FBT3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBWUgsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLHdCQUF3QjtJQVFuRSxRQUFRLENBQUMsT0FBd0I7UUFDeEMsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7K0dBVlUsZ0NBQWdDO21HQUFoQyxnQ0FBZ0MsK0dBUmhDO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7QUFTUTtJQU5SLG9CQUFvQixDQUNuQixjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLCtDQUErQyxDQUNoRDsrREFFb0I7NEZBUFYsZ0NBQWdDO2tCQVg1QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsa0NBQWtDOzRCQUM3QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs4QkFRVSxLQUFLO3NCQURiLEtBQUs7dUJBQUMsZ0JBQWdCOztBQU96Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQVlILE1BQU0sT0FBTyx1QkFBd0IsU0FBUSx3QkFBd0I7SUFRMUQsUUFBUSxDQUFDLE9BQXdCO1FBQ3hDLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOytHQVZVLHVCQUF1QjttR0FBdkIsdUJBQXVCLGlIQVJ2QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7O0FBU1E7SUFOUixvQkFBb0IsQ0FDbkIsS0FBSyxFQUNMLE9BQU8sRUFDUCwwREFBMEQsQ0FDM0Q7c0RBRW9COzRGQVBWLHVCQUF1QjtrQkFYbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLHlCQUF5Qjs0QkFDcEMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7OEJBUVUsS0FBSztzQkFEYixLQUFLO3VCQUFDLGlCQUFpQjs7QUFPMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFZSCxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsd0JBQXdCO0lBUTlELFFBQVEsQ0FBQyxPQUF3QjtRQUN4QyxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzsrR0FWVSwyQkFBMkI7bUdBQTNCLDJCQUEyQix5SEFSM0I7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOztBQVNRO0lBTlIsb0JBQW9CLENBQ25CLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsZ0ZBQWdGLENBQ2pGOzBEQUVvQjs0RkFQViwyQkFBMkI7a0JBWHZDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyw2QkFBNkI7NEJBQ3hDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOzhCQVFVLEtBQUs7c0JBRGIsS0FBSzt1QkFBQyxxQkFBcUI7O0FBTzlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBWUgsTUFBTSxPQUFPLHNCQUF1QixTQUFRLHdCQUF3QjtJQVF6RCxRQUFRLENBQUMsT0FBd0I7UUFDeEMsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7K0dBVlUsc0JBQXNCO21HQUF0QixzQkFBc0IsK0dBUnRCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFdBQVcsRUFBRSxzQkFBc0I7Z0JBQ25DLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7QUFTUTtJQU5SLG9CQUFvQixDQUNuQixXQUFXLEVBQ1gsTUFBTSxFQUNOLDRDQUE0QyxDQUM3QztxREFFb0I7NEZBUFYsc0JBQXNCO2tCQVhsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsd0JBQXdCOzRCQUNuQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs4QkFRVSxLQUFLO3NCQURiLEtBQUs7dUJBQUMsZ0JBQWdCOztBQU96Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQVlILE1BQU0sT0FBTyxzQkFBdUIsU0FBUSx3QkFBd0I7SUFRekQsUUFBUSxDQUFDLE9BQXdCO1FBQ3hDLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOytHQVZVLHNCQUFzQjttR0FBdEIsc0JBQXNCLCtHQVJ0QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixXQUFXLEVBQUUsc0JBQXNCO2dCQUNuQyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7O0FBU1E7SUFOUixvQkFBb0IsQ0FDbkIsV0FBVyxFQUNYLE1BQU0sRUFDTixvREFBb0QsQ0FDckQ7cURBRW9COzRGQVBWLHNCQUFzQjtrQkFYbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLHdCQUF3Qjs0QkFDbkMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7OEJBUVUsS0FBSztzQkFEYixLQUFLO3VCQUFDLGdCQUFnQjs7QUFPekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFZSCxNQUFNLE9BQU8sOEJBQStCLFNBQVEsd0JBQXdCO0lBUWpFLFFBQVEsQ0FBQyxPQUF3QjtRQUN4QyxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzsrR0FWVSw4QkFBOEI7bUdBQTlCLDhCQUE4QiwrSEFSOUI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOztBQVNRO0lBTlIsb0JBQW9CLENBQ25CLFdBQVcsRUFDWCxhQUFhLEVBQ2Isc0NBQXNDLENBQ3ZDOzZEQUVvQjs0RkFQViw4QkFBOEI7a0JBWDFDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxnQ0FBZ0M7NEJBQzNDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOzhCQVFVLEtBQUs7c0JBRGIsS0FBSzt1QkFBQyx3QkFBd0I7O0FBT2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBWUgsTUFBTSxPQUFPLDRCQUE2QixTQUFRLHdCQUF3QjtJQVEvRCxRQUFRLENBQUMsT0FBd0I7UUFDeEMsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7K0dBVlUsNEJBQTRCO21HQUE1Qiw0QkFBNEIsMkhBUjVCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7QUFTUTtJQU5SLG9CQUFvQixDQUNuQixTQUFTLEVBQ1QsWUFBWSxFQUNaLG9DQUFvQyxDQUNyQzsyREFFb0I7NEZBUFYsNEJBQTRCO2tCQVh4QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsOEJBQThCOzRCQUN6QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs4QkFRVSxLQUFLO3NCQURiLEtBQUs7dUJBQUMsc0JBQXNCOztBQU8vQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQVlILE1BQU0sT0FBTywwQkFBMkIsU0FBUSx3QkFBd0I7SUFJN0QsUUFBUSxDQUFDLE9BQXdCO1FBQ3hDLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOytHQU5VLDBCQUEwQjttR0FBMUIsMEJBQTBCLHVIQVIxQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7O0FBS1E7SUFGUixvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLDRCQUE0QixDQUFDO3lEQUVwRDs0RkFIViwwQkFBMEI7a0JBWHRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyw0QkFBNEI7NEJBQ3ZDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOzhCQUlVLEtBQUs7c0JBRGIsS0FBSzt1QkFBQyxvQkFBb0I7O0FBTzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQVlILE1BQU0sT0FBTywwQkFBMkIsU0FBUSx3QkFBd0I7SUFRN0QsUUFBUSxDQUFDLE9BQXdCO1FBQ3hDLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOytHQVZVLDBCQUEwQjttR0FBMUIsMEJBQTBCLHVIQVIxQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7O0FBU1E7SUFOUixvQkFBb0IsQ0FDbkIsZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDVixzSEFBc0gsQ0FDdkg7eURBRW9COzRGQVBWLDBCQUEwQjtrQkFYdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLDRCQUE0Qjs0QkFDdkMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7OEJBUVUsS0FBSztzQkFEYixLQUFLO3VCQUFDLG9CQUFvQjs7QUFPN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFZSCxNQUFNLE9BQU8sNkJBQThCLFNBQVEsd0JBQXdCO0lBUWhFLFFBQVEsQ0FBQyxPQUF3QjtRQUN4QyxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzsrR0FWVSw2QkFBNkI7bUdBQTdCLDZCQUE2Qiw2SEFSN0I7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOztBQVNRO0lBTlIsb0JBQW9CLENBQ25CLFdBQVcsRUFDWCxhQUFhLEVBQ2IsbURBQW1ELENBQ3BEOzREQUVvQjs0RkFQViw2QkFBNkI7a0JBWHpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVywrQkFBK0I7NEJBQzFDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOzhCQVFVLEtBQUs7c0JBRGIsS0FBSzt1QkFBQyx1QkFBdUI7O0FBT2hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBWUgsTUFBTSxPQUFPLDZCQUE4QixTQUFRLDJCQUEyQjtJQVFuRSxRQUFRLENBQUMsT0FBd0I7UUFDeEMsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7K0dBVlUsNkJBQTZCO21HQUE3Qiw2QkFBNkIsNkhBUjdCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7QUFTUTtJQU5SLG9CQUFvQixDQUNuQixXQUFXLEVBQ1gsYUFBYSxFQUNiLDBDQUEwQyxDQUMzQzs0REFFb0I7NEZBUFYsNkJBQTZCO2tCQVh6QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsK0JBQStCOzRCQUMxQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs4QkFRVSxLQUFLO3NCQURiLEtBQUs7dUJBQUMsdUJBQXVCOztBQU9oQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQVlILE1BQU0sT0FBTyxrQ0FBbUMsU0FBUSx3QkFBd0I7SUFRckUsUUFBUSxDQUFDLE9BQXdCO1FBQ3hDLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOytHQVZVLGtDQUFrQzttR0FBbEMsa0NBQWtDLHVJQVJsQztZQUNUO2dCQUNFLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7O0FBU1E7SUFOUixvQkFBb0IsQ0FDbkIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixvREFBb0QsQ0FDckQ7aUVBRW9COzRGQVBWLGtDQUFrQztrQkFYOUMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLG9DQUFvQzs0QkFDL0MsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7OEJBUVUsS0FBSztzQkFEYixLQUFLO3VCQUFDLDRCQUE0Qjs7QUFPckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFZSCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsd0JBQXdCO0lBUXhELFFBQVEsQ0FBQyxPQUF3QjtRQUN4QyxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzsrR0FWVSxxQkFBcUI7bUdBQXJCLHFCQUFxQiw2R0FSckI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLHFCQUFxQjtnQkFDbEMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOztBQVNRO0lBTlIsb0JBQW9CLENBQ25CLEdBQUcsRUFDSCxLQUFLLEVBQ0wsZ0ZBQWdGLENBQ2pGO29EQUVvQjs0RkFQVixxQkFBcUI7a0JBWGpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyx1QkFBdUI7NEJBQ2xDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOzhCQVFVLEtBQUs7c0JBRGIsS0FBSzt1QkFBQyxlQUFlOztBQU94Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQVlILE1BQU0sT0FBTyw4QkFBK0IsU0FBUSx3QkFBd0I7SUFRakUsUUFBUSxDQUFDLE9BQXdCO1FBQ3hDLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOytHQVZVLDhCQUE4QjttR0FBOUIsOEJBQThCLDJHQVI5QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7O0FBU1E7SUFOUixvQkFBb0IsQ0FDbkIsWUFBWSxFQUNaLGNBQWMsRUFDZCxpREFBaUQsQ0FDbEQ7NkRBRW9COzRGQVBWLDhCQUE4QjtrQkFYMUMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLGdDQUFnQzs0QkFDM0MsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7OEJBUVUsS0FBSztzQkFEYixLQUFLO3VCQUFDLGNBQWM7O0FBT3ZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBWUgsTUFBTSxPQUFPLDhCQUErQixTQUFRLHdCQUF3QjtJQVFqRSxRQUFRLENBQUMsT0FBd0I7UUFDeEMsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7K0dBVlUsOEJBQThCO21HQUE5Qiw4QkFBOEIsMkdBUjlCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7QUFTUTtJQU5SLG9CQUFvQixDQUNuQixZQUFZLEVBQ1osY0FBYyxFQUNkLGlEQUFpRCxDQUNsRDs2REFFb0I7NEZBUFYsOEJBQThCO2tCQVgxQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsZ0NBQWdDOzRCQUMzQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs4QkFRVSxLQUFLO3NCQURiLEtBQUs7dUJBQUMsY0FBYzs7QUFPdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFZSCxNQUFNLE9BQU8saUNBQWtDLFNBQVEsd0JBQXdCO0lBUXBFLFFBQVEsQ0FBQyxPQUF3QjtRQUN4QyxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzsrR0FWVSxpQ0FBaUM7bUdBQWpDLGlDQUFpQyxpSEFSakM7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOztBQVNRO0lBTlIsb0JBQW9CLENBQ25CLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsb0RBQW9ELENBQ3JEO2dFQUVvQjs0RkFQVixpQ0FBaUM7a0JBWDdDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxtQ0FBbUM7NEJBQzlDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOzhCQVFVLEtBQUs7c0JBRGIsS0FBSzt1QkFBQyxpQkFBaUI7O0FBTzFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBWUgsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHdCQUF3QjtJQUl4RCxRQUFRLENBQUMsT0FBd0I7UUFDeEMsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7K0dBTlUscUJBQXFCO21HQUFyQixxQkFBcUIsNkdBUnJCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFdBQVcsRUFBRSxxQkFBcUI7Z0JBQ2xDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7QUFLUTtJQUZSLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLENBQUM7b0RBRXBDOzRGQUhWLHFCQUFxQjtrQkFYakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLHVCQUF1Qjs0QkFDbEMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7OEJBSVUsS0FBSztzQkFEYixLQUFLO3VCQUFDLGVBQWU7O0FBT3hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBWUgsTUFBTSxPQUFPLHlCQUEwQixTQUFRLHdCQUF3QjtJQUk1RCxRQUFRLENBQUMsT0FBd0I7UUFDeEMsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7K0dBTlUseUJBQXlCO21HQUF6Qix5QkFBeUIscUhBUnpCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7QUFLUTtJQUZSLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsMkJBQTJCLENBQUM7d0RBRWpEOzRGQUhWLHlCQUF5QjtrQkFYckMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLDJCQUEyQjs0QkFDdEMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7OEJBSVUsS0FBSztzQkFEYixLQUFLO3VCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBBYnN0cmFjdENvbnRyb2wsXHJcbiAgTkdfVkFMSURBVE9SUyxcclxuICBWYWxpZGF0aW9uRXJyb3JzLFxyXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBSZWdFeHBOb3RWYWxpZGF0b3JEaXJlY3RpdmUsIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB9IGZyb20gXCIuL3RlbXBsYXRlLWRyaXZlbi1mb3JtLXZhbGlkYXRvcnNcIjtcclxuaW1wb3J0IHsgUmVnRXhwVmFsaWRhdG9ySW5wdXQgfSBmcm9tIFwiLi4vZGVjb3JhdG9ycy92YWxpZGF0b3ItaW5wdXRcIjtcclxuaW1wb3J0IHtcclxuICBJUEFkZHJlc3NWNCxcclxuICBJUEFkZHJlc3NWNEFuZFY2LFxyXG4gIElQQWRkcmVzc1Y2LFxyXG4gIGFkZHJlc3MsXHJcbiAgZGF0ZUREX01NX1lZWVksXHJcbiAgZGF0ZVlZWVlfTU1fREQsXHJcbiAgZW1haWwsXHJcbiAgbGV0dGVyc09ubHksXHJcbiAgbm9TcGVjaWFsLFxyXG4gIG51bWJlcnNPbmx5LFxyXG4gIHBhc3Nwb3J0LFxyXG4gIHBhc3N3b3JkU3RyZW5ndGgsXHJcbiAgcGhvbmVOdW1iZXIsXHJcbiAgc2luZ2xlU3BhY2UsXHJcbiAgc3BhY2VSZXN0cmljdGlvbixcclxuICBzc24sXHJcbiAgdGltZUhIX01NXzEyLFxyXG4gIHRpbWVISF9NTV8yNCxcclxuICB0aW1lSEhfTU1fU1NfMjQsXHJcbiAgdXJsLFxyXG4gIHppcENvZGUsXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50L3JlZ2V4XCI7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIFxyXG4gKiBpbiBhIHByb3BlciBhZGRyZXNzIGZvcm1hdCAoU3RyZWV0IG51bWJlciBTdHJlZXQgTmFtZSwgQ2l0eSwgU3RhdGUgWklQIGNvZGUpXHJcbiAqIEV4YW1wbGU6IDMzNDQgVyBBbGFtZWRhIEF2ZW51ZSwgTGFrZXdvb2QsIENPIDgwMjIyXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cImFkZHJlc3NcIlxyXG4gKiAgICBpZD1cImFkZHJlc3NcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJhZGRyZXNzXCJcclxuICogICBbYWRkcmVzc1ZhbGlkYXRpb25dPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ2FkZHJlc3MnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgYWRkcmVzcyBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2FkZHJlc3NWYWxpZGF0aW9uXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBBZGRyZXNzVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZHJlc3NWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIGFkZHJlc3MsXHJcbiAgICBcImFkZHJlc3NcIixcclxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBmb3JtYXQgb2Y6IFN0cmVldCBudW1iZXIgU3RyZWV0IE5hbWUsIENpdHksIFN0YXRlIFpJUCBjb2RlLlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcImFkZHJlc3NWYWxpZGF0aW9uXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGhlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBjb25zaXN0cyBvZiBvbmx5IGFscGhhYmV0aWMgY2hhcmFjdGVycy5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwiYWxwaGFiZXRcIlxyXG4gKiAgICBpZD1cImFscGhhYmV0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiYWxwaGFiZXRcIlxyXG4gKiAgIFthbHBoYWJldE9ubHlWYWxpZGF0aW9uXT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICdhbHBoYWJldCcsXHJcbiAqICAgICAgZXJyb3I6ICdPbmx5IGxldHRlcnMgcGxlYXNlLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIlthbHBoYWJldE9ubHlWYWxpZGF0aW9uXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBBbHBoYWJldE9ubHlWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxwaGFiZXRPbmx5VmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICBsZXR0ZXJzT25seSxcclxuICAgIFwiYWxwaGFiZXRPbmx5XCIsXHJcbiAgICBcIk9ubHkgYWxwaGFiZXRpYyBjaGFyYWN0ZXJzIGFyZSBhbGxvd2VkLlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcImFscGhhYmV0T25seVZhbGlkYXRpb25cIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiBkZC1NTS1ZWVlZLCBkZC5NTS5ZWVlZIG9yIGRkL01NL1lZWVkuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cImRhdGVERF9NTV9ZWVlZXCJcclxuICogICAgaWQ9XCJkYXRlRERfTU1fWVlZWVwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImRhdGVERF9NTV9ZWVlZXCJcclxuICogICBbZGF0ZUREX01NX1lZWVldPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ2RhdGVERF9NTV9ZWVlZJyxcclxuICogICAgICBlcnJvcjogJ1dyb25nIGRhdGUgZm9ybWF0LidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltkYXRlRERfTU1fWVlZWV1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogRGF0ZUREX01NX1lZWVlWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZUREX01NX1lZWVlWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIGRhdGVERF9NTV9ZWVlZLFxyXG4gICAgXCJkYXRlRERfTU1fWVlZWVwiLFxyXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiBkZC1NTS1ZWVlZIG9yIGRkLk1NLllZWVkgb3IgZGQvTU0vWVlZWS5cIlxyXG4gIClcclxuICBASW5wdXQoXCJkYXRlRERfTU1fWVlZWVwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGEgZm9sbG93aW5nIGZvcm1hdDogWVlZWS1NTS1kZC5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwiZGF0ZVlZWVlfTU1fRERcIlxyXG4gKiAgICBpZD1cImRhdGVZWVlZX01NX0REXCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiZGF0ZVlZWVlfTU1fRERcIlxyXG4gKiAgIFtkYXRlWVlZWV9NTV9ERF09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnZGF0ZVlZWVlfTU1fREQnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgZGF0ZSBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2RhdGVZWVlZX01NX0REXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBEYXRlWVlZWV9NTV9ERFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlWVlZWV9NTV9ERFZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgZGF0ZVlZWVlfTU1fREQsXHJcbiAgICBcImRhdGVZWVlZX01NX0REXCIsXHJcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiBZWVlZLU1NLWRkLlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcImRhdGVZWVlZX01NX0REXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogaXMgYSBmb2xsb3dpbmcgZm9ybWF0OiBsb2NhbC1wYXJ0QGRvbWFpbi5jb20uXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cImVtYWlsXCJcclxuICogICAgaWQ9XCJlbWFpbFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCJcclxuICogICBbZW1haWxWYWxpZGF0aW9uXT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICdlbWFpbCcsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyBlbWFpbCBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2VtYWlsVmFsaWRhdGlvbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogRW1haWxWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1haWxWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIGVtYWlsLFxyXG4gICAgXCJlbWFpbFwiLFxyXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogbG9jYWwtcGFydEBkb21haW4uY29tLlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcImVtYWlsVmFsaWRhdGlvblwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGluIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6IHgueC54Lnggb3IgeTp5Onk6eTp5Onk6eTp5LlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJpcEFkZHJlc3NcIlxyXG4gKiAgICBpZD1cImlwQWRkcmVzc1wiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImlwQWRkcmVzc1wiXHJcbiAqICAgW2lwQWRkcmVzc1ZhbGlkYXRpb25dPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ2lwQWRkcmVzcycsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyBpcCBhZGRyZXNzIGZvcm1hdC4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbaXBBZGRyZXNzVmFsaWRhdGlvbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogSVBBZGRyZXNzVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIElQQWRkcmVzc1ZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgSVBBZGRyZXNzVjRBbmRWNixcclxuICAgIFwiaXBBZGRyZXNzXCIsXHJcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6IHgueC54Lnggb3IgeTp5Onk6eTp5Onk6eTp5LlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcImlwQWRkcmVzc1ZhbGlkYXRpb25cIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBhIGZvbGxvd2luZyBmb3JtYXQ6IHgueC54LnguXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cImlQdjRcIlxyXG4gKiAgICBpZD1cImlQdjRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJpUHY0XCJcclxuICogICBbaVB2NFZhbGlkYXRpb25dPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ2lQdjQnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgaXAgYWRkcmVzcyBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2lQdjRWYWxpZGF0aW9uXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBJUHY0VmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIElQdjRWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIElQQWRkcmVzc1Y0LFxyXG4gICAgXCJpUHY0XCIsXHJcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiB4LngueC54LlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcImlQdjRWYWxpZGF0aW9uXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OiAgeTp5Onk6eTp5Onk6eTp5LlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJpUHY2XCJcclxuICogICAgaWQ9XCJpUHY2XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiaVB2NlwiXHJcbiAqICAgW2lQdjZWYWxpZGF0aW9uXT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICdpUHY2JyxcclxuICogICAgICBlcnJvcjogJ1dyb25nIGlwIGFkZHJlc3MgZm9ybWF0LidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltpUHY2VmFsaWRhdGlvbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogSVB2NlZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJUHY2VmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICBJUEFkZHJlc3NWNixcclxuICAgIFwiaVB2NlwiLFxyXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogeTp5Onk6eTp5Onk6eTp5LlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcImlQdjZWYWxpZGF0aW9uXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogY29uc2lzdHMgb2Ygb25seSBudW1lcmljIGNoYXJhY3RlcnMuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cIm51bWJlcnNcIlxyXG4gKiAgICBpZD1cIm51bWJlcnNcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJudW1iZXJzXCJcclxuICogICBbbnVtZXJpY3NPbmx5VmFsaWRhdGlvbl09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnbnVtYmVycycsXHJcbiAqICAgICAgZXJyb3I6ICdOdW1iZXJzIG9ubHkgcGxlYXNlLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltudW1lcmljc09ubHlWYWxpZGF0aW9uXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBOdW1lcmljc09ubHlWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtZXJpY3NPbmx5VmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICBudW1iZXJzT25seSxcclxuICAgIFwibnVtYmVyc09ubHlcIixcclxuICAgIFwiT25seSBudW1lcmljIGNoYXJhY3RlcnMgYXJlIGFsbG93ZWQuXCJcclxuICApXHJcbiAgQElucHV0KFwibnVtZXJpY3NPbmx5VmFsaWRhdGlvblwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGhhcyBhbnkgc3BlY2lhbCBjaGFyYWN0ZXJzLlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJub1NwZWNpYWxzXCJcclxuICogICAgaWQ9XCJub1NwZWNpYWxzXCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwibm9TcGVjaWFsc1wiXHJcbiAqICAgW25vU3BlY2lhbHNWYWxpZGF0aW9uXT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICdub1NwZWNpYWxzJyxcclxuICogICAgICBlcnJvcjogJ1JlbW92ZSBhbnkgc3BlY2lhbCBjaGFyYWN0ZXJzLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltub1NwZWNpYWxzVmFsaWRhdGlvbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogTm9TcGVjaWFsc1ZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb1NwZWNpYWxzVmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICBub1NwZWNpYWwsXHJcbiAgICBcIm5vU3BlY2lhbHNcIixcclxuICAgIFwiTm8gc3BlY2lhbCBjaGFyYWN0ZXJzIGFyZSBhbGxvd2VkLlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcIm5vU3BlY2lhbHNWYWxpZGF0aW9uXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogaXMgaW4gYSBwcm9wZXIgcGFzc3BvcnQgZm9ybWF0LlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJwYXNzcG9ydFwiXHJcbiAqICAgIGlkPVwicGFzc3BvcnRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJwYXNzcG9ydFwiXHJcbiAqICAgW3Bhc3Nwb3J0VmFsaWRhdGlvbl09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAncGFzc3BvcnQnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgcGFzc3BvcnQgZm9ybWF0J1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3Bhc3Nwb3J0VmFsaWRhdGlvbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogUGFzc3BvcnRWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFzc3BvcnRWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChwYXNzcG9ydCwgXCJwYXNzcG9ydFwiLCBcIkluY29ycmVjdCBwYXNzcG9ydCBmb3JtYXQuXCIpXHJcbiAgQElucHV0KFwicGFzc3BvcnRWYWxpZGF0aW9uXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogaXMgaW4gYSBzdHJvbmcgcGFzc3dvcmQgZm9ybWF0IChIYXMgYXQgbGVhc3QgMSBsb3dlcmNhc2UgbGV0dGVyLCAxIHVwcGVyY2FzZSBsZXR0ZXIsIFxyXG4gKiAxIG51bWJlciwgMSBzcGVjaWFsIGNoYXJhY3RlciBhbmQgaGFzIGxlbmd0aCBvZiBhdCBsZWFzdCA4IGNoYXJhY3RlcnMpLlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAqICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiXHJcbiAqICAgW3Bhc3N3b3JkVmFsaWRhdGlvbl09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAncGFzc3dvcmQnLFxyXG4gKiAgICAgIGVycm9yOiAnUGFzc3dvcmQgaXMgbm90IHN0cm9uZyBlbm91Z2guJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3Bhc3N3b3JkVmFsaWRhdGlvbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogUGFzc3dvcmRWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIHBhc3N3b3JkU3RyZW5ndGgsXHJcbiAgICBcInBhc3N3b3JkXCIsXHJcbiAgICBcIlRoZSB2YWx1ZSBoYXMgdG8gY29udGFpbiBhdCBsZWFzdCAxIGxvd2VyY2FzZSBsZXR0ZXIsIDEgdXBwZXJjYXNlIGxldHRlciwgMSBzcGVjaWFsIGNoYXJhY3RlciBhbmQgaGFzIGEgbGVuZ3RoIG9mIDguXCJcclxuICApXHJcbiAgQElucHV0KFwicGFzc3dvcmRWYWxpZGF0aW9uXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OiAoMDAwKSAwMDAgMDAwMC5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwicGhvbmVOdW1iZXJcIlxyXG4gKiAgICBpZD1cInBob25lTnVtYmVyXCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicGhvbmVOdW1iZXJcIlxyXG4gKiAgIFtwaG9uZU51bWJlclZhbGlkYXRpb25dPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ3Bob25lTnVtYmVyJyxcclxuICogICAgICBlcnJvcjogJ1dyb25nIHBob25lIG51bWJlciBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3Bob25lTnVtYmVyVmFsaWRhdGlvbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogUGhvbmVOdW1iZXJWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGhvbmVOdW1iZXJWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIHBob25lTnVtYmVyLFxyXG4gICAgXCJwaG9uZU51bWJlclwiLFxyXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogKDAwMCkgMDAwIDAwMDAuXCJcclxuICApXHJcbiAgQElucHV0KFwicGhvbmVOdW1iZXJWYWxpZGF0aW9uXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogY29uc2lzdHMgb2YgYSBzaW5nbGUgc3BhY2UgY2hhcmFjdGVyLlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJzaW5nbGVTcGFjZVwiXHJcbiAqICAgIGlkPVwic2luZ2xlU3BhY2VcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJzaW5nbGVTcGFjZVwiXHJcbiAqICAgW3NpbmdsZVNwYWNlVmFsaWRhdGlvbl09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnc2luZ2xlU3BhY2UnLFxyXG4gKiAgICAgIGVycm9yOiAnWW91ciBpbnB1dCBoYXMgb25seSBvbmUgc3BhY2UgaW4gaXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3NpbmdsZVNwYWNlVmFsaWRhdGlvbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogU2luZ2xlU3BhY2VWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2luZ2xlU3BhY2VWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBOb3RWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIHNpbmdsZVNwYWNlLFxyXG4gICAgXCJzaW5nbGVTcGFjZVwiLFxyXG4gICAgXCJBIHNpbmdsZSBzcGFjZSBjaGFyYWN0ZXIgaXMgbm90IGFsbG93ZWQuXCJcclxuICApXHJcbiAgQElucHV0KFwic2luZ2xlU3BhY2VWYWxpZGF0aW9uXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogc3RhcnRzIG9yIGVuZHMgd2l0aCBhIHNwYWNlIGNoYXJhY3Rlci5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwic3BhY2VSZXN0cmljdGlvblwiXHJcbiAqICAgIGlkPVwic3BhY2VSZXN0cmljdGlvblwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInNwYWNlUmVzdHJpY3Rpb25cIlxyXG4gKiAgIFtzcGFjZVJlc3RyaWN0aW9uVmFsaWRhdGlvbl09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnc3BhY2VSZXN0cmljdGlvbicsXHJcbiAqICAgICAgZXJyb3I6ICdObyBzcGFjZXMgb24gdGhlIHN0YXJ0IG9yIHRoZSBlbmQgb2YgdGhlIHZhbHVlIHBsZWFzZS4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbc3BhY2VSZXN0cmljdGlvblZhbGlkYXRpb25dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFNwYWNlUmVzdHJpY3Rpb25WYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BhY2VSZXN0cmljdGlvblZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgc3BhY2VSZXN0cmljdGlvbixcclxuICAgIFwic3BhY2VSZXN0cmljdGlvblwiLFxyXG4gICAgXCJWYWx1ZSBjYW4gbm90IHN0YXJ0IG9yIGVuZCB3aXRoIGEgc3BhY2UgY2hhcmFjdGVyLlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcInNwYWNlUmVzdHJpY3Rpb25WYWxpZGF0aW9uXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogaXMgaW4gb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0czogQUFBLUdHRy1TU1NTIG9yIEFBQUdHR1NTU1MuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cInNzblwiXHJcbiAqICAgIGlkPVwic3NuXCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwic3NuXCJcclxuICogICBbc3NuVmFsaWRhdGlvbl09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnc3NuJyxcclxuICogICAgICBlcnJvcjogJ1dyb25nIHNzbiBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3NzblZhbGlkYXRpb25dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFNTTlZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTU05WYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIHNzbixcclxuICAgIFwic3NuXCIsXHJcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6IEFBQS1HR0ctU1NTUyBvciBBQUFHR0dTU1NTLlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcInNzblZhbGlkYXRpb25cIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBhIFRpbWUgRm9ybWF0IEhIOk1NIDEyLWhvdXIgd2l0aCBvcHRpb25hbCBsZWFkaW5nIDAuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cInRpbWVISF9NTV8xMlwiXHJcbiAqICAgIGlkPVwidGltZUhIX01NXzEyXCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwidGltZUhIX01NXzEyXCJcclxuICogICBbdGltZUhIX01NXzEyXT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICd0aW1lSEhfTU1fMTInLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgdGltZSBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3RpbWVISF9NTV8xMl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogVGltZUhIX01NXzEyVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVISF9NTV8xMlZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgdGltZUhIX01NXzEyLFxyXG4gICAgXCJ0aW1lSEhfTU1fMTJcIixcclxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBISDpNTSAxMi1ob3VyIGZvcm1hdC5cIlxyXG4gIClcclxuICBASW5wdXQoXCJ0aW1lSEhfTU1fMTJcIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBhIFRpbWUgRm9ybWF0IEhIOk1NIDI0LWhvdXIgd2l0aCBvcHRpb25hbCBsZWFkaW5nIDAuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cInRpbWVISF9NTV8yNFwiXHJcbiAqICAgIGlkPVwidGltZUhIX01NXzI0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwidGltZUhIX01NXzI0XCJcclxuICogICBbdGltZUhIX01NXzI0XT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICd0aW1lSEhfTU1fMjQnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgdGltZSBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3RpbWVISF9NTV8yNF1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogVGltZUhIX01NXzI0VmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVISF9NTV8yNFZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgdGltZUhIX01NXzI0LFxyXG4gICAgXCJ0aW1lSEhfTU1fMjRcIixcclxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBISDpNTSAyNC1ob3VyIGZvcm1hdC5cIlxyXG4gIClcclxuICBASW5wdXQoXCJ0aW1lSEhfTU1fMjRcIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBhIFRpbWUgRm9ybWF0IEhIOk1NOlNTIDI0LWhvdXIuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cInRpbWVISF9NTV9TU18yNFwiXHJcbiAqICAgIGlkPVwidGltZUhIX01NX1NTXzI0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwidGltZUhIX01NX1NTXzI0XCJcclxuICogICBbdGltZUhIX01NX1NTXzI0XT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICd0aW1lSEhfTU1fU1NfMjQnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgdGltZSBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3RpbWVISF9NTV9TU18yNF1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogVGltZUhIX01NX1NTXzI0VmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVISF9NTV9TU18yNFZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgdGltZUhIX01NX1NTXzI0LFxyXG4gICAgXCJ0aW1lSEhfTU1fU1NfMjRcIixcclxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBISDpNTTpTUyAyNC1ob3VyIGZvcm1hdC5cIlxyXG4gIClcclxuICBASW5wdXQoXCJ0aW1lSEhfTU1fU1NfMjRcIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBhIGNvcnJlY3QgdXJsIGZvcm1hdC5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwidXJsXCJcclxuICogICAgaWQ9XCJ1cmxcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJ1cmxcIlxyXG4gKiAgIFt1cmxWYWxpZGF0aW9uXT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICd1cmwnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgdXJsIGZvcm1hdC4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbdXJsVmFsaWRhdGlvbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogVXJsVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFVybFZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KHVybCwgXCJ1cmxcIiwgXCJJbXByb3BlciBVUkwgZm9ybWF0LlwiKVxyXG4gIEBJbnB1dChcInVybFZhbGlkYXRpb25cIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiAwMDAwMCBvciAwMDAwMC0wMDAwLi5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwiemlwQ29kZVwiXHJcbiAqICAgIGlkPVwiemlwQ29kZVwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInppcENvZGVcIlxyXG4gKiAgIFt6aXBDb2RlVmFsaWRhdGlvbl09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnemlwQ29kZScsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyB6aXAgY29kZSBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3ppcENvZGVWYWxpZGF0aW9uXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBaaXBDb2RlVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFppcENvZGVWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dCh6aXBDb2RlLCBcInppcENvZGVcIiwgXCJJbXByb3BlciB6aXAgY29kZSBmb3JtYXQuXCIpXHJcbiAgQElucHV0KFwiemlwQ29kZVZhbGlkYXRpb25cIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==