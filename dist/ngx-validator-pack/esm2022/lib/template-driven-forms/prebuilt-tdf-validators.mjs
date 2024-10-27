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
 *   [address]="{
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AddressValidatorDirective, isStandalone: true, selector: "[address]", inputs: { value: ["address", "value"] }, providers: [
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
                    selector: "[address]",
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
                args: ["address"]
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
 *   [alphabetOnly]="{
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AlphabetOnlyValidatorDirective, isStandalone: true, selector: "[alphabetOnly]", inputs: { value: ["alphabetOnly", "value"] }, providers: [
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
                    selector: "[alphabetOnly]",
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
                args: ["alphabetOnly"]
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
 *   [email]="{
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: EmailValidatorDirective, isStandalone: true, selector: "[email]", inputs: { value: ["email", "value"] }, providers: [
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
                    selector: "[email]",
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
                args: ["email"]
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
 *   [ipAddress]="{
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: IPAddressValidatorDirective, isStandalone: true, selector: "[ipAddress]", inputs: { value: ["ipAddress", "value"] }, providers: [
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
                    selector: "[ipAddress]",
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
                args: ["ipAddress"]
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
 *   [iPv4]="{
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: IPv4ValidatorDirective, isStandalone: true, selector: "[iPv4]", inputs: { value: ["iPv4", "value"] }, providers: [
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
                    selector: "[iPv4]",
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
                args: ["iPv4"]
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
 *   [iPv6]="{
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: IPv6ValidatorDirective, isStandalone: true, selector: "[iPv6]", inputs: { value: ["iPv6", "value"] }, providers: [
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
                    selector: "[iPv6]",
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
                args: ["iPv6"]
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
 *   [numericsOnly]="{
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: NumericsOnlyValidatorDirective, isStandalone: true, selector: "[numericsOnly]", inputs: { value: ["numericsOnly", "value"] }, providers: [
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
                    selector: "[numericsOnly]",
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
                args: ["numericsOnly"]
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
 *   [noSpecials]="{
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: NoSpecialsValidatorDirective, isStandalone: true, selector: "[noSpecials]", inputs: { value: ["noSpecials", "value"] }, providers: [
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
                    selector: "[noSpecials]",
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
                args: ["noSpecials"]
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
 *   [passport]="{
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: PassportValidatorDirective, isStandalone: true, selector: "[passport]", inputs: { value: ["passport", "value"] }, providers: [
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
                    selector: "[passport]",
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
                args: ["passport"]
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
 *   [password]="{
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: PasswordValidatorDirective, isStandalone: true, selector: "[password]", inputs: { value: ["password", "value"] }, providers: [
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
                    selector: "[password]",
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
                args: ["password"]
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
 *   [phoneNumber]="{
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: PhoneNumberValidatorDirective, isStandalone: true, selector: "[phoneNumber]", inputs: { value: ["phoneNumber", "value"] }, providers: [
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
                    selector: "[phoneNumber]",
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
                args: ["phoneNumber"]
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
 *   [singleSpace]="{
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: SingleSpaceValidatorDirective, isStandalone: true, selector: "[singleSpace]", inputs: { value: ["singleSpace", "value"] }, providers: [
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
                    selector: "[singleSpace]",
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
                args: ["singleSpace"]
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
 *   [spaceRestriction]="{
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: SpaceRestrictionValidatorDirective, isStandalone: true, selector: "[spaceRestriction]", inputs: { value: ["spaceRestrictionValidation", "value"] }, providers: [
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
                    selector: "[spaceRestriction]",
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
 *   [ssn]="{
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: SSNValidatorDirective, isStandalone: true, selector: "[ssn]", inputs: { value: ["ssn", "value"] }, providers: [
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
                    selector: "[ssn]",
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
                args: ["ssn"]
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
 *   [url]="{
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: UrlValidatorDirective, isStandalone: true, selector: "[url]", inputs: { value: ["url", "value"] }, providers: [
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
                    selector: "[url]",
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
                args: ["url"]
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
 *   [zipCode]="{
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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: ZipCodeValidatorDirective, isStandalone: true, selector: "[zipCode]", inputs: { value: ["zipCode", "value"] }, providers: [
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
                    selector: "[zipCode]",
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
                args: ["zipCode"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlYnVpbHQtdGRmLXZhbGlkYXRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi90ZW1wbGF0ZS1kcml2ZW4tZm9ybXMvcHJlYnVpbHQtdGRmLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFFTCxhQUFhLEdBRWQsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsT0FBTyxFQUNQLGNBQWMsRUFDZCxjQUFjLEVBQ2QsS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFFBQVEsRUFDUixnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsR0FBRyxFQUNILFlBQVksRUFDWixZQUFZLEVBQ1osZUFBZSxFQUNmLEdBQUcsRUFDSCxPQUFPLEdBQ1IsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBWUgsTUFBTSxPQUFPLHlCQUEwQixTQUFRLHdCQUF3QjtJQVE1RCxRQUFRLENBQUMsT0FBd0I7UUFDeEMsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7K0dBVlUseUJBQXlCO21HQUF6Qix5QkFBeUIsaUdBUnpCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RD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REFFakQ7NEZBSFYseUJBQXlCO2tCQVhyQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLDJCQUEyQjs0QkFDdEMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7OEJBSVUsS0FBSztzQkFEYixLQUFLO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgQWJzdHJhY3RDb250cm9sLFxyXG4gIE5HX1ZBTElEQVRPUlMsXHJcbiAgVmFsaWRhdGlvbkVycm9ycyxcclxufSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgUmVnRXhwTm90VmFsaWRhdG9yRGlyZWN0aXZlLCBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUgfSBmcm9tIFwiLi90ZW1wbGF0ZS1kcml2ZW4tZm9ybS12YWxpZGF0b3JzXCI7XHJcbmltcG9ydCB7IFJlZ0V4cFZhbGlkYXRvcklucHV0IH0gZnJvbSBcIi4uL2RlY29yYXRvcnMvdmFsaWRhdG9yLWlucHV0XCI7XHJcbmltcG9ydCB7XHJcbiAgSVBBZGRyZXNzVjQsXHJcbiAgSVBBZGRyZXNzVjRBbmRWNixcclxuICBJUEFkZHJlc3NWNixcclxuICBhZGRyZXNzLFxyXG4gIGRhdGVERF9NTV9ZWVlZLFxyXG4gIGRhdGVZWVlZX01NX0RELFxyXG4gIGVtYWlsLFxyXG4gIGxldHRlcnNPbmx5LFxyXG4gIG5vU3BlY2lhbCxcclxuICBudW1iZXJzT25seSxcclxuICBwYXNzcG9ydCxcclxuICBwYXNzd29yZFN0cmVuZ3RoLFxyXG4gIHBob25lTnVtYmVyLFxyXG4gIHNpbmdsZVNwYWNlLFxyXG4gIHNwYWNlUmVzdHJpY3Rpb24sXHJcbiAgc3NuLFxyXG4gIHRpbWVISF9NTV8xMixcclxuICB0aW1lSEhfTU1fMjQsXHJcbiAgdGltZUhIX01NX1NTXzI0LFxyXG4gIHVybCxcclxuICB6aXBDb2RlLFxyXG59IGZyb20gXCIuLi9jb25zdGFudC9yZWdleFwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBcclxuICogaW4gYSBwcm9wZXIgYWRkcmVzcyBmb3JtYXQgKFN0cmVldCBudW1iZXIgU3RyZWV0IE5hbWUsIENpdHksIFN0YXRlIFpJUCBjb2RlKVxyXG4gKiBFeGFtcGxlOiAzMzQ0IFcgQWxhbWVkYSBBdmVudWUsIExha2V3b29kLCBDTyA4MDIyMlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJhZGRyZXNzXCJcclxuICogICAgaWQ9XCJhZGRyZXNzXCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiYWRkcmVzc1wiXHJcbiAqICAgW2FkZHJlc3NdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ2FkZHJlc3MnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgYWRkcmVzcyBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2FkZHJlc3NdXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IEFkZHJlc3NWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc1ZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgYWRkcmVzcyxcclxuICAgIFwiYWRkcmVzc1wiLFxyXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdCBvZjogU3RyZWV0IG51bWJlciBTdHJlZXQgTmFtZSwgQ2l0eSwgU3RhdGUgWklQIGNvZGUuXCJcclxuICApXHJcbiAgQElucHV0KFwiYWRkcmVzc1wiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogY29uc2lzdHMgb2Ygb25seSBhbHBoYWJldGljIGNoYXJhY3RlcnMuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cImFscGhhYmV0XCJcclxuICogICAgaWQ9XCJhbHBoYWJldFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImFscGhhYmV0XCJcclxuICogICBbYWxwaGFiZXRPbmx5XT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICdhbHBoYWJldCcsXHJcbiAqICAgICAgZXJyb3I6ICdPbmx5IGxldHRlcnMgcGxlYXNlLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIlthbHBoYWJldE9ubHldXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IEFscGhhYmV0T25seVZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbHBoYWJldE9ubHlWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIGxldHRlcnNPbmx5LFxyXG4gICAgXCJhbHBoYWJldE9ubHlcIixcclxuICAgIFwiT25seSBhbHBoYWJldGljIGNoYXJhY3RlcnMgYXJlIGFsbG93ZWQuXCJcclxuICApXHJcbiAgQElucHV0KFwiYWxwaGFiZXRPbmx5XCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogaXMgaW4gb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0czogZGQtTU0tWVlZWSwgZGQuTU0uWVlZWSBvciBkZC9NTS9ZWVlZLlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJkYXRlRERfTU1fWVlZWVwiXHJcbiAqICAgIGlkPVwiZGF0ZUREX01NX1lZWVlcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJkYXRlRERfTU1fWVlZWVwiXHJcbiAqICAgW2RhdGVERF9NTV9ZWVlZXT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICdkYXRlRERfTU1fWVlZWScsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyBkYXRlIGZvcm1hdC4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbZGF0ZUREX01NX1lZWVldXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IERhdGVERF9NTV9ZWVlZVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVERF9NTV9ZWVlZVmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICBkYXRlRERfTU1fWVlZWSxcclxuICAgIFwiZGF0ZUREX01NX1lZWVlcIixcclxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0czogZGQtTU0tWVlZWSBvciBkZC5NTS5ZWVlZIG9yIGRkL01NL1lZWVkuXCJcclxuICApXHJcbiAgQElucHV0KFwiZGF0ZUREX01NX1lZWVlcIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBhIGZvbGxvd2luZyBmb3JtYXQ6IFlZWVktTU0tZGQuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cImRhdGVZWVlZX01NX0REXCJcclxuICogICAgaWQ9XCJkYXRlWVlZWV9NTV9ERFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImRhdGVZWVlZX01NX0REXCJcclxuICogICBbZGF0ZVlZWVlfTU1fRERdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ2RhdGVZWVlZX01NX0REJyxcclxuICogICAgICBlcnJvcjogJ1dyb25nIGRhdGUgZm9ybWF0LidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltkYXRlWVlZWV9NTV9ERF1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogRGF0ZVlZWVlfTU1fRERWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVlZWVlfTU1fRERWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIGRhdGVZWVlZX01NX0RELFxyXG4gICAgXCJkYXRlWVlZWV9NTV9ERFwiLFxyXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogWVlZWS1NTS1kZC5cIlxyXG4gIClcclxuICBASW5wdXQoXCJkYXRlWVlZWV9NTV9ERFwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGEgZm9sbG93aW5nIGZvcm1hdDogbG9jYWwtcGFydEBkb21haW4uY29tLlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAqICAgIGlkPVwiZW1haWxcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiXHJcbiAqICAgW2VtYWlsXT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICdlbWFpbCcsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyBlbWFpbCBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2VtYWlsXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBFbWFpbFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbFZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgZW1haWwsXHJcbiAgICBcImVtYWlsXCIsXHJcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiBsb2NhbC1wYXJ0QGRvbWFpbi5jb20uXCJcclxuICApXHJcbiAgQElucHV0KFwiZW1haWxcIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiB4LngueC54IG9yIHk6eTp5Onk6eTp5Onk6eS5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwiaXBBZGRyZXNzXCJcclxuICogICAgaWQ9XCJpcEFkZHJlc3NcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJpcEFkZHJlc3NcIlxyXG4gKiAgIFtpcEFkZHJlc3NdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ2lwQWRkcmVzcycsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyBpcCBhZGRyZXNzIGZvcm1hdC4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbaXBBZGRyZXNzXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBJUEFkZHJlc3NWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSVBBZGRyZXNzVmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICBJUEFkZHJlc3NWNEFuZFY2LFxyXG4gICAgXCJpcEFkZHJlc3NcIixcclxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0czogeC54LngueCBvciB5Onk6eTp5Onk6eTp5OnkuXCJcclxuICApXHJcbiAgQElucHV0KFwiaXBBZGRyZXNzXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OiB4LngueC54LlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJpUHY0XCJcclxuICogICAgaWQ9XCJpUHY0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiaVB2NFwiXHJcbiAqICAgW2lQdjRdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ2lQdjQnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgaXAgYWRkcmVzcyBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2lQdjRdXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IElQdjRWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSVB2NFZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgSVBBZGRyZXNzVjQsXHJcbiAgICBcImlQdjRcIixcclxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBmb3JtYXQ6IHgueC54LnguXCJcclxuICApXHJcbiAgQElucHV0KFwiaVB2NFwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGluIGEgZm9sbG93aW5nIGZvcm1hdDogIHk6eTp5Onk6eTp5Onk6eS5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwiaVB2NlwiXHJcbiAqICAgIGlkPVwiaVB2NlwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImlQdjZcIlxyXG4gKiAgIFtpUHY2XT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICdpUHY2JyxcclxuICogICAgICBlcnJvcjogJ1dyb25nIGlwIGFkZHJlc3MgZm9ybWF0LidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltpUHY2XVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBJUHY2VmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIElQdjZWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIElQQWRkcmVzc1Y2LFxyXG4gICAgXCJpUHY2XCIsXHJcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiB5Onk6eTp5Onk6eTp5OnkuXCJcclxuICApXHJcbiAgQElucHV0KFwiaVB2NlwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGNvbnNpc3RzIG9mIG9ubHkgbnVtZXJpYyBjaGFyYWN0ZXJzLlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJudW1iZXJzXCJcclxuICogICAgaWQ9XCJudW1iZXJzXCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwibnVtYmVyc1wiXHJcbiAqICAgW251bWVyaWNzT25seV09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnbnVtYmVycycsXHJcbiAqICAgICAgZXJyb3I6ICdOdW1iZXJzIG9ubHkgcGxlYXNlLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltudW1lcmljc09ubHldXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IE51bWVyaWNzT25seVZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1lcmljc09ubHlWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIG51bWJlcnNPbmx5LFxyXG4gICAgXCJudW1iZXJzT25seVwiLFxyXG4gICAgXCJPbmx5IG51bWVyaWMgY2hhcmFjdGVycyBhcmUgYWxsb3dlZC5cIlxyXG4gIClcclxuICBASW5wdXQoXCJudW1lcmljc09ubHlcIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBoYXMgYW55IHNwZWNpYWwgY2hhcmFjdGVycy5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwibm9TcGVjaWFsc1wiXHJcbiAqICAgIGlkPVwibm9TcGVjaWFsc1wiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cIm5vU3BlY2lhbHNcIlxyXG4gKiAgIFtub1NwZWNpYWxzXT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICdub1NwZWNpYWxzJyxcclxuICogICAgICBlcnJvcjogJ1JlbW92ZSBhbnkgc3BlY2lhbCBjaGFyYWN0ZXJzLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltub1NwZWNpYWxzXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBOb1NwZWNpYWxzVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5vU3BlY2lhbHNWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIG5vU3BlY2lhbCxcclxuICAgIFwibm9TcGVjaWFsc1wiLFxyXG4gICAgXCJObyBzcGVjaWFsIGNoYXJhY3RlcnMgYXJlIGFsbG93ZWQuXCJcclxuICApXHJcbiAgQElucHV0KFwibm9TcGVjaWFsc1wiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGluIGEgcHJvcGVyIHBhc3Nwb3J0IGZvcm1hdC5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwicGFzc3BvcnRcIlxyXG4gKiAgICBpZD1cInBhc3Nwb3J0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3BvcnRcIlxyXG4gKiAgIFtwYXNzcG9ydF09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAncGFzc3BvcnQnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgcGFzc3BvcnQgZm9ybWF0J1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3Bhc3Nwb3J0XVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBQYXNzcG9ydFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXNzcG9ydFZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KHBhc3Nwb3J0LCBcInBhc3Nwb3J0XCIsIFwiSW5jb3JyZWN0IHBhc3Nwb3J0IGZvcm1hdC5cIilcclxuICBASW5wdXQoXCJwYXNzcG9ydFwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGluIGEgc3Ryb25nIHBhc3N3b3JkIGZvcm1hdCAoSGFzIGF0IGxlYXN0IDEgbG93ZXJjYXNlIGxldHRlciwgMSB1cHBlcmNhc2UgbGV0dGVyLCBcclxuICogMSBudW1iZXIsIDEgc3BlY2lhbCBjaGFyYWN0ZXIgYW5kIGhhcyBsZW5ndGggb2YgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzKS5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gKiAgICBpZD1cInBhc3N3b3JkXCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIlxyXG4gKiAgIFtwYXNzd29yZF09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAncGFzc3dvcmQnLFxyXG4gKiAgICAgIGVycm9yOiAnUGFzc3dvcmQgaXMgbm90IHN0cm9uZyBlbm91Z2guJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3Bhc3N3b3JkXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBQYXNzd29yZFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZFZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgcGFzc3dvcmRTdHJlbmd0aCxcclxuICAgIFwicGFzc3dvcmRcIixcclxuICAgIFwiVGhlIHZhbHVlIGhhcyB0byBjb250YWluIGF0IGxlYXN0IDEgbG93ZXJjYXNlIGxldHRlciwgMSB1cHBlcmNhc2UgbGV0dGVyLCAxIHNwZWNpYWwgY2hhcmFjdGVyIGFuZCBoYXMgYSBsZW5ndGggb2YgOC5cIlxyXG4gIClcclxuICBASW5wdXQoXCJwYXNzd29yZFwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGluIGEgZm9sbG93aW5nIGZvcm1hdDogKDAwMCkgMDAwIDAwMDAuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cInBob25lTnVtYmVyXCJcclxuICogICAgaWQ9XCJwaG9uZU51bWJlclwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInBob25lTnVtYmVyXCJcclxuICogICBbcGhvbmVOdW1iZXJdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ3Bob25lTnVtYmVyJyxcclxuICogICAgICBlcnJvcjogJ1dyb25nIHBob25lIG51bWJlciBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3Bob25lTnVtYmVyXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBQaG9uZU51bWJlclZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaG9uZU51bWJlclZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgcGhvbmVOdW1iZXIsXHJcbiAgICBcInBob25lTnVtYmVyXCIsXHJcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiAoMDAwKSAwMDAgMDAwMC5cIlxyXG4gIClcclxuICBASW5wdXQoXCJwaG9uZU51bWJlclwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGNvbnNpc3RzIG9mIGEgc2luZ2xlIHNwYWNlIGNoYXJhY3Rlci5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwic2luZ2xlU3BhY2VcIlxyXG4gKiAgICBpZD1cInNpbmdsZVNwYWNlXCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwic2luZ2xlU3BhY2VcIlxyXG4gKiAgIFtzaW5nbGVTcGFjZV09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnc2luZ2xlU3BhY2UnLFxyXG4gKiAgICAgIGVycm9yOiAnWW91ciBpbnB1dCBoYXMgb25seSBvbmUgc3BhY2UgaW4gaXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3NpbmdsZVNwYWNlXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBTaW5nbGVTcGFjZVZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVTcGFjZVZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cE5vdFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgc2luZ2xlU3BhY2UsXHJcbiAgICBcInNpbmdsZVNwYWNlXCIsXHJcbiAgICBcIkEgc2luZ2xlIHNwYWNlIGNoYXJhY3RlciBpcyBub3QgYWxsb3dlZC5cIlxyXG4gIClcclxuICBASW5wdXQoXCJzaW5nbGVTcGFjZVwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIHN0YXJ0cyBvciBlbmRzIHdpdGggYSBzcGFjZSBjaGFyYWN0ZXIuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgbmFtZT1cInNwYWNlUmVzdHJpY3Rpb25cIlxyXG4gKiAgICBpZD1cInNwYWNlUmVzdHJpY3Rpb25cIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJzcGFjZVJlc3RyaWN0aW9uXCJcclxuICogICBbc3BhY2VSZXN0cmljdGlvbl09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnc3BhY2VSZXN0cmljdGlvbicsXHJcbiAqICAgICAgZXJyb3I6ICdObyBzcGFjZXMgb24gdGhlIHN0YXJ0IG9yIHRoZSBlbmQgb2YgdGhlIHZhbHVlIHBsZWFzZS4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbc3BhY2VSZXN0cmljdGlvbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogU3BhY2VSZXN0cmljdGlvblZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGFjZVJlc3RyaWN0aW9uVmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICBzcGFjZVJlc3RyaWN0aW9uLFxyXG4gICAgXCJzcGFjZVJlc3RyaWN0aW9uXCIsXHJcbiAgICBcIlZhbHVlIGNhbiBub3Qgc3RhcnQgb3IgZW5kIHdpdGggYSBzcGFjZSBjaGFyYWN0ZXIuXCJcclxuICApXHJcbiAgQElucHV0KFwic3BhY2VSZXN0cmljdGlvblZhbGlkYXRpb25cIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiBBQUEtR0dHLVNTU1Mgb3IgQUFBR0dHU1NTUy5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwic3NuXCJcclxuICogICAgaWQ9XCJzc25cIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJzc25cIlxyXG4gKiAgIFtzc25dPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ3NzbicsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyBzc24gZm9ybWF0LidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltzc25dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFNTTlZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTU05WYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIHNzbixcclxuICAgIFwic3NuXCIsXHJcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6IEFBQS1HR0ctU1NTUyBvciBBQUFHR0dTU1NTLlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcInNzblwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGluIGEgVGltZSBGb3JtYXQgSEg6TU0gMTItaG91ciB3aXRoIG9wdGlvbmFsIGxlYWRpbmcgMC5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwidGltZUhIX01NXzEyXCJcclxuICogICAgaWQ9XCJ0aW1lSEhfTU1fMTJcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJ0aW1lSEhfTU1fMTJcIlxyXG4gKiAgIFt0aW1lSEhfTU1fMTJdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ3RpbWVISF9NTV8xMicsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyB0aW1lIGZvcm1hdC4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbdGltZUhIX01NXzEyXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBUaW1lSEhfTU1fMTJWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZUhIX01NXzEyVmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICB0aW1lSEhfTU1fMTIsXHJcbiAgICBcInRpbWVISF9NTV8xMlwiLFxyXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIEhIOk1NIDEyLWhvdXIgZm9ybWF0LlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcInRpbWVISF9NTV8xMlwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGluIGEgVGltZSBGb3JtYXQgSEg6TU0gMjQtaG91ciB3aXRoIG9wdGlvbmFsIGxlYWRpbmcgMC5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwidGltZUhIX01NXzI0XCJcclxuICogICAgaWQ9XCJ0aW1lSEhfTU1fMjRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJ0aW1lSEhfTU1fMjRcIlxyXG4gKiAgIFt0aW1lSEhfTU1fMjRdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ3RpbWVISF9NTV8yNCcsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyB0aW1lIGZvcm1hdC4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbdGltZUhIX01NXzI0XVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBUaW1lSEhfTU1fMjRWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZUhIX01NXzI0VmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICB0aW1lSEhfTU1fMjQsXHJcbiAgICBcInRpbWVISF9NTV8yNFwiLFxyXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIEhIOk1NIDI0LWhvdXIgZm9ybWF0LlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcInRpbWVISF9NTV8yNFwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGluIGEgVGltZSBGb3JtYXQgSEg6TU06U1MgMjQtaG91ci5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBuYW1lPVwidGltZUhIX01NX1NTXzI0XCJcclxuICogICAgaWQ9XCJ0aW1lSEhfTU1fU1NfMjRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJ0aW1lSEhfTU1fU1NfMjRcIlxyXG4gKiAgIFt0aW1lSEhfTU1fU1NfMjRdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ3RpbWVISF9NTV9TU18yNCcsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyB0aW1lIGZvcm1hdC4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbdGltZUhIX01NX1NTXzI0XVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBUaW1lSEhfTU1fU1NfMjRWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZUhIX01NX1NTXzI0VmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICB0aW1lSEhfTU1fU1NfMjQsXHJcbiAgICBcInRpbWVISF9NTV9TU18yNFwiLFxyXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIEhIOk1NOlNTIDI0LWhvdXIgZm9ybWF0LlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcInRpbWVISF9NTV9TU18yNFwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGluIGEgY29ycmVjdCB1cmwgZm9ybWF0LlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJ1cmxcIlxyXG4gKiAgICBpZD1cInVybFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInVybFwiXHJcbiAqICAgW3VybF09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAndXJsJyxcclxuICogICAgICBlcnJvcjogJ1dyb25nIHVybCBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3VybF1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogVXJsVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFVybFZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KHVybCwgXCJ1cmxcIiwgXCJJbXByb3BlciBVUkwgZm9ybWF0LlwiKVxyXG4gIEBJbnB1dChcInVybFwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGluIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6IDAwMDAwIG9yIDAwMDAwLTAwMDAuLlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIG5hbWU9XCJ6aXBDb2RlXCJcclxuICogICAgaWQ9XCJ6aXBDb2RlXCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiemlwQ29kZVwiXHJcbiAqICAgW3ppcENvZGVdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ3ppcENvZGUnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgemlwIGNvZGUgZm9ybWF0LidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIlt6aXBDb2RlXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBaaXBDb2RlVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFppcENvZGVWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dCh6aXBDb2RlLCBcInppcENvZGVcIiwgXCJJbXByb3BlciB6aXAgY29kZSBmb3JtYXQuXCIpXHJcbiAgQElucHV0KFwiemlwQ29kZVwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuIl19