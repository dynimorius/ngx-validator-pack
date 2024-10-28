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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl is
 * in a proper address format (Street number Street Name, City, State ZIP code)
 * Example: 3344 W Alameda Avenue, Lakewood, CO 80222
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that hecks if a value in the given FromControl / AbstractControl
 * consists of only alphabetic characters.
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * is in one of the following formats: dd-MM-YYYY, dd.MM.YYYY or dd/MM/YYYY.
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * is a following format: YYYY-MM-dd.
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * is a following format: local-part@domain.com.
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * is in one of the following formats: x.x.x.x or y:y:y:y:y:y:y:y.
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * is in a following format: x.x.x.x.
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * is in a following format:  y:y:y:y:y:y:y:y.
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * consists of only numeric characters.
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * has any special characters.
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * is in a proper passport format.
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * is in a strong password format (Has at least 1 lowercase letter, 1 uppercase letter,
 * 1 number, 1 special character and has length of at least 8 characters).
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * is in a following format: (000) 000 0000.
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * consists of a single space character.
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * starts or ends with a space character.
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * is in one of the following formats: AAA-GGG-SSSS or AAAGGGSSSS.
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * is in a Time Format HH:MM 12-hour with optional leading 0.
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * is in a Time Format HH:MM 24-hour with optional leading 0.
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * is in a Time Format HH:MM:SS 24-hour.
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * is in a correct url format.
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
 * @publicApi
 * @description
 * A Directive that checks if a value in the given FromControl / AbstractControl
 * is in one of the following formats: 00000 or 00000-0000..
 *
 * Has an optional input in which you specify custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlYnVpbHQtdGRmLXZhbGlkYXRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi90ZW1wbGF0ZS1kcml2ZW4tZm9ybXMvcHJlYnVpbHQtdGRmLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFFTCxhQUFhLEdBRWQsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsT0FBTyxFQUNQLGNBQWMsRUFDZCxjQUFjLEVBQ2QsS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFFBQVEsRUFDUixnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsR0FBRyxFQUNILFlBQVksRUFDWixZQUFZLEVBQ1osZUFBZSxFQUNmLEdBQUcsRUFDSCxPQUFPLEdBQ1IsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFZSCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsd0JBQXdCO0lBUTVELFFBQVEsQ0FBQyxPQUF3QjtRQUN4QyxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzsrR0FWVSx5QkFBeUI7bUdBQXpCLHlCQUF5QixpR0FSekI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMs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QVhyQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLDJCQUEyQjs0QkFDdEMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7OEJBSVUsS0FBSztzQkFEYixLQUFLO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgQWJzdHJhY3RDb250cm9sLFxyXG4gIE5HX1ZBTElEQVRPUlMsXHJcbiAgVmFsaWRhdGlvbkVycm9ycyxcclxufSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgUmVnRXhwTm90VmFsaWRhdG9yRGlyZWN0aXZlLCBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUgfSBmcm9tIFwiLi90ZW1wbGF0ZS1kcml2ZW4tZm9ybS12YWxpZGF0b3JzXCI7XHJcbmltcG9ydCB7IFJlZ0V4cFZhbGlkYXRvcklucHV0IH0gZnJvbSBcIi4uL2RlY29yYXRvcnMvdmFsaWRhdG9yLWlucHV0XCI7XHJcbmltcG9ydCB7XHJcbiAgSVBBZGRyZXNzVjQsXHJcbiAgSVBBZGRyZXNzVjRBbmRWNixcclxuICBJUEFkZHJlc3NWNixcclxuICBhZGRyZXNzLFxyXG4gIGRhdGVERF9NTV9ZWVlZLFxyXG4gIGRhdGVZWVlZX01NX0RELFxyXG4gIGVtYWlsLFxyXG4gIGxldHRlcnNPbmx5LFxyXG4gIG5vU3BlY2lhbCxcclxuICBudW1iZXJzT25seSxcclxuICBwYXNzcG9ydCxcclxuICBwYXNzd29yZFN0cmVuZ3RoLFxyXG4gIHBob25lTnVtYmVyLFxyXG4gIHNpbmdsZVNwYWNlLFxyXG4gIHNwYWNlUmVzdHJpY3Rpb24sXHJcbiAgc3NuLFxyXG4gIHRpbWVISF9NTV8xMixcclxuICB0aW1lSEhfTU1fMjQsXHJcbiAgdGltZUhIX01NX1NTXzI0LFxyXG4gIHVybCxcclxuICB6aXBDb2RlLFxyXG59IGZyb20gXCIuLi9jb25zdGFudC9yZWdleFwiO1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIFxyXG4gKiBpbiBhIHByb3BlciBhZGRyZXNzIGZvcm1hdCAoU3RyZWV0IG51bWJlciBTdHJlZXQgTmFtZSwgQ2l0eSwgU3RhdGUgWklQIGNvZGUpXHJcbiAqIEV4YW1wbGU6IDMzNDQgVyBBbGFtZWRhIEF2ZW51ZSwgTGFrZXdvb2QsIENPIDgwMjIyXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiYWRkcmVzc1wiXHJcbiAqICAgW2FkZHJlc3NdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ2FkZHJlc3MnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgYWRkcmVzcyBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2FkZHJlc3NdXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IEFkZHJlc3NWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc1ZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgYWRkcmVzcyxcclxuICAgIFwiYWRkcmVzc1wiLFxyXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdCBvZjogU3RyZWV0IG51bWJlciBTdHJlZXQgTmFtZSwgQ2l0eSwgU3RhdGUgWklQIGNvZGUuXCJcclxuICApXHJcbiAgQElucHV0KFwiYWRkcmVzc1wiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGhlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBjb25zaXN0cyBvZiBvbmx5IGFscGhhYmV0aWMgY2hhcmFjdGVycy5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJhbHBoYWJldFwiXHJcbiAqICAgW2FscGhhYmV0T25seV09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnYWxwaGFiZXQnLFxyXG4gKiAgICAgIGVycm9yOiAnT25seSBsZXR0ZXJzIHBsZWFzZS4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbYWxwaGFiZXRPbmx5XVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBBbHBoYWJldE9ubHlWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxwaGFiZXRPbmx5VmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICBsZXR0ZXJzT25seSxcclxuICAgIFwiYWxwaGFiZXRPbmx5XCIsXHJcbiAgICBcIk9ubHkgYWxwaGFiZXRpYyBjaGFyYWN0ZXJzIGFyZSBhbGxvd2VkLlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcImFscGhhYmV0T25seVwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogaXMgaW4gb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0czogZGQtTU0tWVlZWSwgZGQuTU0uWVlZWSBvciBkZC9NTS9ZWVlZLlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImRhdGVERF9NTV9ZWVlZXCJcclxuICogICBbZGF0ZUREX01NX1lZWVldPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ2RhdGVERF9NTV9ZWVlZJyxcclxuICogICAgICBlcnJvcjogJ1dyb25nIGRhdGUgZm9ybWF0LidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltkYXRlRERfTU1fWVlZWV1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogRGF0ZUREX01NX1lZWVlWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZUREX01NX1lZWVlWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIGRhdGVERF9NTV9ZWVlZLFxyXG4gICAgXCJkYXRlRERfTU1fWVlZWVwiLFxyXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiBkZC1NTS1ZWVlZIG9yIGRkLk1NLllZWVkgb3IgZGQvTU0vWVlZWS5cIlxyXG4gIClcclxuICBASW5wdXQoXCJkYXRlRERfTU1fWVlZWVwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogaXMgYSBmb2xsb3dpbmcgZm9ybWF0OiBZWVlZLU1NLWRkLlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImRhdGVZWVlZX01NX0REXCJcclxuICogICBbZGF0ZVlZWVlfTU1fRERdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ2RhdGVZWVlZX01NX0REJyxcclxuICogICAgICBlcnJvcjogJ1dyb25nIGRhdGUgZm9ybWF0LidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltkYXRlWVlZWV9NTV9ERF1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogRGF0ZVlZWVlfTU1fRERWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVlZWVlfTU1fRERWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIGRhdGVZWVlZX01NX0RELFxyXG4gICAgXCJkYXRlWVlZWV9NTV9ERFwiLFxyXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogWVlZWS1NTS1kZC5cIlxyXG4gIClcclxuICBASW5wdXQoXCJkYXRlWVlZWV9NTV9ERFwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogaXMgYSBmb2xsb3dpbmcgZm9ybWF0OiBsb2NhbC1wYXJ0QGRvbWFpbi5jb20uXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIlxyXG4gKiAgIFtlbWFpbF09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnZW1haWwnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgZW1haWwgZm9ybWF0LidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltlbWFpbF1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogRW1haWxWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1haWxWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIGVtYWlsLFxyXG4gICAgXCJlbWFpbFwiLFxyXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogbG9jYWwtcGFydEBkb21haW4uY29tLlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcImVtYWlsXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiB4LngueC54IG9yIHk6eTp5Onk6eTp5Onk6eS5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJpcEFkZHJlc3NcIlxyXG4gKiAgIFtpcEFkZHJlc3NdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ2lwQWRkcmVzcycsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyBpcCBhZGRyZXNzIGZvcm1hdC4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbaXBBZGRyZXNzXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBJUEFkZHJlc3NWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSVBBZGRyZXNzVmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICBJUEFkZHJlc3NWNEFuZFY2LFxyXG4gICAgXCJpcEFkZHJlc3NcIixcclxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0czogeC54LngueCBvciB5Onk6eTp5Onk6eTp5OnkuXCJcclxuICApXHJcbiAgQElucHV0KFwiaXBBZGRyZXNzXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBhIGZvbGxvd2luZyBmb3JtYXQ6IHgueC54LnguXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiaVB2NFwiXHJcbiAqICAgW2lQdjRdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ2lQdjQnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgaXAgYWRkcmVzcyBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2lQdjRdXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IElQdjRWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSVB2NFZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgSVBBZGRyZXNzVjQsXHJcbiAgICBcImlQdjRcIixcclxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBmb3JtYXQ6IHgueC54LnguXCJcclxuICApXHJcbiAgQElucHV0KFwiaVB2NFwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OiAgeTp5Onk6eTp5Onk6eTp5LlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImlQdjZcIlxyXG4gKiAgIFtpUHY2XT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICdpUHY2JyxcclxuICogICAgICBlcnJvcjogJ1dyb25nIGlwIGFkZHJlc3MgZm9ybWF0LidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltpUHY2XVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBJUHY2VmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIElQdjZWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIElQQWRkcmVzc1Y2LFxyXG4gICAgXCJpUHY2XCIsXHJcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiB5Onk6eTp5Onk6eTp5OnkuXCJcclxuICApXHJcbiAgQElucHV0KFwiaVB2NlwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogY29uc2lzdHMgb2Ygb25seSBudW1lcmljIGNoYXJhY3RlcnMuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwibnVtYmVyc1wiXHJcbiAqICAgW251bWVyaWNzT25seV09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnbnVtYmVycycsXHJcbiAqICAgICAgZXJyb3I6ICdOdW1iZXJzIG9ubHkgcGxlYXNlLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltudW1lcmljc09ubHldXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IE51bWVyaWNzT25seVZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1lcmljc09ubHlWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIG51bWJlcnNPbmx5LFxyXG4gICAgXCJudW1iZXJzT25seVwiLFxyXG4gICAgXCJPbmx5IG51bWVyaWMgY2hhcmFjdGVycyBhcmUgYWxsb3dlZC5cIlxyXG4gIClcclxuICBASW5wdXQoXCJudW1lcmljc09ubHlcIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGhhcyBhbnkgc3BlY2lhbCBjaGFyYWN0ZXJzLlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cIm5vU3BlY2lhbHNcIlxyXG4gKiAgIFtub1NwZWNpYWxzXT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICdub1NwZWNpYWxzJyxcclxuICogICAgICBlcnJvcjogJ1JlbW92ZSBhbnkgc3BlY2lhbCBjaGFyYWN0ZXJzLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltub1NwZWNpYWxzXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBOb1NwZWNpYWxzVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5vU3BlY2lhbHNWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIG5vU3BlY2lhbCxcclxuICAgIFwibm9TcGVjaWFsc1wiLFxyXG4gICAgXCJObyBzcGVjaWFsIGNoYXJhY3RlcnMgYXJlIGFsbG93ZWQuXCJcclxuICApXHJcbiAgQElucHV0KFwibm9TcGVjaWFsc1wiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogaXMgaW4gYSBwcm9wZXIgcGFzc3BvcnQgZm9ybWF0LlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3Nwb3J0XCJcclxuICogICBbcGFzc3BvcnRdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ3Bhc3Nwb3J0JyxcclxuICogICAgICBlcnJvcjogJ1dyb25nIHBhc3Nwb3J0IGZvcm1hdCdcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltwYXNzcG9ydF1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogUGFzc3BvcnRWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFzc3BvcnRWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChwYXNzcG9ydCwgXCJwYXNzcG9ydFwiLCBcIkluY29ycmVjdCBwYXNzcG9ydCBmb3JtYXQuXCIpXHJcbiAgQElucHV0KFwicGFzc3BvcnRcIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGluIGEgc3Ryb25nIHBhc3N3b3JkIGZvcm1hdCAoSGFzIGF0IGxlYXN0IDEgbG93ZXJjYXNlIGxldHRlciwgMSB1cHBlcmNhc2UgbGV0dGVyLCBcclxuICogMSBudW1iZXIsIDEgc3BlY2lhbCBjaGFyYWN0ZXIgYW5kIGhhcyBsZW5ndGggb2YgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzKS5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiXHJcbiAqICAgW3Bhc3N3b3JkXT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICdwYXNzd29yZCcsXHJcbiAqICAgICAgZXJyb3I6ICdQYXNzd29yZCBpcyBub3Qgc3Ryb25nIGVub3VnaC4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbcGFzc3dvcmRdXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFBhc3N3b3JkVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkVmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICBwYXNzd29yZFN0cmVuZ3RoLFxyXG4gICAgXCJwYXNzd29yZFwiLFxyXG4gICAgXCJUaGUgdmFsdWUgaGFzIHRvIGNvbnRhaW4gYXQgbGVhc3QgMSBsb3dlcmNhc2UgbGV0dGVyLCAxIHVwcGVyY2FzZSBsZXR0ZXIsIDEgc3BlY2lhbCBjaGFyYWN0ZXIgYW5kIGhhcyBhIGxlbmd0aCBvZiA4LlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcInBhc3N3b3JkXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBhIGZvbGxvd2luZyBmb3JtYXQ6ICgwMDApIDAwMCAwMDAwLlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInBob25lTnVtYmVyXCJcclxuICogICBbcGhvbmVOdW1iZXJdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ3Bob25lTnVtYmVyJyxcclxuICogICAgICBlcnJvcjogJ1dyb25nIHBob25lIG51bWJlciBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3Bob25lTnVtYmVyXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBQaG9uZU51bWJlclZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaG9uZU51bWJlclZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgcGhvbmVOdW1iZXIsXHJcbiAgICBcInBob25lTnVtYmVyXCIsXHJcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiAoMDAwKSAwMDAgMDAwMC5cIlxyXG4gIClcclxuICBASW5wdXQoXCJwaG9uZU51bWJlclwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogY29uc2lzdHMgb2YgYSBzaW5nbGUgc3BhY2UgY2hhcmFjdGVyLlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInNpbmdsZVNwYWNlXCJcclxuICogICBbc2luZ2xlU3BhY2VdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ3NpbmdsZVNwYWNlJyxcclxuICogICAgICBlcnJvcjogJ1lvdXIgaW5wdXQgaGFzIG9ubHkgb25lIHNwYWNlIGluIGl0LidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltzaW5nbGVTcGFjZV1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogU2luZ2xlU3BhY2VWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2luZ2xlU3BhY2VWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBOb3RWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIHNpbmdsZVNwYWNlLFxyXG4gICAgXCJzaW5nbGVTcGFjZVwiLFxyXG4gICAgXCJBIHNpbmdsZSBzcGFjZSBjaGFyYWN0ZXIgaXMgbm90IGFsbG93ZWQuXCJcclxuICApXHJcbiAgQElucHV0KFwic2luZ2xlU3BhY2VcIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIHN0YXJ0cyBvciBlbmRzIHdpdGggYSBzcGFjZSBjaGFyYWN0ZXIuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwic3BhY2VSZXN0cmljdGlvblwiXHJcbiAqICAgW3NwYWNlUmVzdHJpY3Rpb25dPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ3NwYWNlUmVzdHJpY3Rpb24nLFxyXG4gKiAgICAgIGVycm9yOiAnTm8gc3BhY2VzIG9uIHRoZSBzdGFydCBvciB0aGUgZW5kIG9mIHRoZSB2YWx1ZSBwbGVhc2UuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3NwYWNlUmVzdHJpY3Rpb25dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFNwYWNlUmVzdHJpY3Rpb25WYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BhY2VSZXN0cmljdGlvblZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgc3BhY2VSZXN0cmljdGlvbixcclxuICAgIFwic3BhY2VSZXN0cmljdGlvblwiLFxyXG4gICAgXCJWYWx1ZSBjYW4gbm90IHN0YXJ0IG9yIGVuZCB3aXRoIGEgc3BhY2UgY2hhcmFjdGVyLlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcInNwYWNlUmVzdHJpY3Rpb25WYWxpZGF0aW9uXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiBBQUEtR0dHLVNTU1Mgb3IgQUFBR0dHU1NTUy5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJzc25cIlxyXG4gKiAgIFtzc25dPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ3NzbicsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyBzc24gZm9ybWF0LidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltzc25dXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFNTTlZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTU05WYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIHNzbixcclxuICAgIFwic3NuXCIsXHJcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6IEFBQS1HR0ctU1NTUyBvciBBQUFHR0dTU1NTLlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcInNzblwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogaXMgaW4gYSBUaW1lIEZvcm1hdCBISDpNTSAxMi1ob3VyIHdpdGggb3B0aW9uYWwgbGVhZGluZyAwLlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInRpbWVISF9NTV8xMlwiXHJcbiAqICAgW3RpbWVISF9NTV8xMl09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAndGltZUhIX01NXzEyJyxcclxuICogICAgICBlcnJvcjogJ1dyb25nIHRpbWUgZm9ybWF0LidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIlt0aW1lSEhfTU1fMTJdXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFRpbWVISF9NTV8xMlZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lSEhfTU1fMTJWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIHRpbWVISF9NTV8xMixcclxuICAgIFwidGltZUhIX01NXzEyXCIsXHJcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgSEg6TU0gMTItaG91ciBmb3JtYXQuXCJcclxuICApXHJcbiAgQElucHV0KFwidGltZUhIX01NXzEyXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBhIFRpbWUgRm9ybWF0IEhIOk1NIDI0LWhvdXIgd2l0aCBvcHRpb25hbCBsZWFkaW5nIDAuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwidGltZUhIX01NXzI0XCJcclxuICogICBbdGltZUhIX01NXzI0XT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICd0aW1lSEhfTU1fMjQnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgdGltZSBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3RpbWVISF9NTV8yNF1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogVGltZUhIX01NXzI0VmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVISF9NTV8yNFZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgdGltZUhIX01NXzI0LFxyXG4gICAgXCJ0aW1lSEhfTU1fMjRcIixcclxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBISDpNTSAyNC1ob3VyIGZvcm1hdC5cIlxyXG4gIClcclxuICBASW5wdXQoXCJ0aW1lSEhfTU1fMjRcIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGluIGEgVGltZSBGb3JtYXQgSEg6TU06U1MgMjQtaG91ci5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJ0aW1lSEhfTU1fU1NfMjRcIlxyXG4gKiAgIFt0aW1lSEhfTU1fU1NfMjRdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ3RpbWVISF9NTV9TU18yNCcsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyB0aW1lIGZvcm1hdC4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbdGltZUhIX01NX1NTXzI0XVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBUaW1lSEhfTU1fU1NfMjRWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZUhIX01NX1NTXzI0VmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICB0aW1lSEhfTU1fU1NfMjQsXHJcbiAgICBcInRpbWVISF9NTV9TU18yNFwiLFxyXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIEhIOk1NOlNTIDI0LWhvdXIgZm9ybWF0LlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcInRpbWVISF9NTV9TU18yNFwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogaXMgaW4gYSBjb3JyZWN0IHVybCBmb3JtYXQuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwidXJsXCJcclxuICogICBbdXJsXT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICd1cmwnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgdXJsIGZvcm1hdC4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbdXJsXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBVcmxWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXJsVmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQodXJsLCBcInVybFwiLCBcIkltcHJvcGVyIFVSTCBmb3JtYXQuXCIpXHJcbiAgQElucHV0KFwidXJsXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiAwMDAwMCBvciAwMDAwMC0wMDAwLi5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJ6aXBDb2RlXCJcclxuICogICBbemlwQ29kZV09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnemlwQ29kZScsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyB6aXAgY29kZSBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3ppcENvZGVdXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFppcENvZGVWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgWmlwQ29kZVZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KHppcENvZGUsIFwiemlwQ29kZVwiLCBcIkltcHJvcGVyIHppcCBjb2RlIGZvcm1hdC5cIilcclxuICBASW5wdXQoXCJ6aXBDb2RlXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG4iXX0=