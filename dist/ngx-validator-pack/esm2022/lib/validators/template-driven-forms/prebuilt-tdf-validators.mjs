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
import { RegExpValidatorInput } from "../../decorators/validator-input";
import { IPAddressV4, IPAddressV4AndV6, IPAddressV6, address, dateDD_MM_YYYY, dateYYYY_MM_DD, email, lettersOnly, noSpecial, numbersOnly, passport, passwordStrength, phoneNumber, singleSpace, spaceRestriction, ssn, timeHH_MM_12, timeHH_MM_24, timeHH_MM_SS_24, url, zipCode, } from "../../constant/regex";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlYnVpbHQtdGRmLXZhbGlkYXRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi92YWxpZGF0b3JzL3RlbXBsYXRlLWRyaXZlbi1mb3Jtcy9wcmVidWlsdC10ZGYtdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUVMLGFBQWEsR0FFZCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFDTCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxPQUFPLEVBQ1AsY0FBYyxFQUNkLGNBQWMsRUFDZCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxXQUFXLEVBQ1gsUUFBUSxFQUNSLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixHQUFHLEVBQ0gsWUFBWSxFQUNaLFlBQVksRUFDWixlQUFlLEVBQ2YsR0FBRyxFQUNILE9BQU8sR0FDUixNQUFNLHNCQUFzQixDQUFDOztBQUU5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQVlILE1BQU0sT0FBTyx5QkFBMEIsU0FBUSx3QkFBd0I7SUFRNUQsUUFBUSxDQUFDLE9BQXdCO1FBQ3hDLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOytHQVZVLHlCQUF5QjttR0FBekIseUJBQXlCLGlHQVJ6QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixXQUFXLEVBQUUs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RkFIVix5QkFBeUI7a0JBWHJDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsMkJBQTJCOzRCQUN0QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs4QkFJVSxLQUFLO3NCQURiLEtBQUs7dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBBYnN0cmFjdENvbnRyb2wsXHJcbiAgTkdfVkFMSURBVE9SUyxcclxuICBWYWxpZGF0aW9uRXJyb3JzLFxyXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBSZWdFeHBOb3RWYWxpZGF0b3JEaXJlY3RpdmUsIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB9IGZyb20gXCIuL3RlbXBsYXRlLWRyaXZlbi1mb3JtLXZhbGlkYXRvcnNcIjtcclxuaW1wb3J0IHsgUmVnRXhwVmFsaWRhdG9ySW5wdXQgfSBmcm9tIFwiLi4vLi4vZGVjb3JhdG9ycy92YWxpZGF0b3ItaW5wdXRcIjtcclxuaW1wb3J0IHtcclxuICBJUEFkZHJlc3NWNCxcclxuICBJUEFkZHJlc3NWNEFuZFY2LFxyXG4gIElQQWRkcmVzc1Y2LFxyXG4gIGFkZHJlc3MsXHJcbiAgZGF0ZUREX01NX1lZWVksXHJcbiAgZGF0ZVlZWVlfTU1fREQsXHJcbiAgZW1haWwsXHJcbiAgbGV0dGVyc09ubHksXHJcbiAgbm9TcGVjaWFsLFxyXG4gIG51bWJlcnNPbmx5LFxyXG4gIHBhc3Nwb3J0LFxyXG4gIHBhc3N3b3JkU3RyZW5ndGgsXHJcbiAgcGhvbmVOdW1iZXIsXHJcbiAgc2luZ2xlU3BhY2UsXHJcbiAgc3BhY2VSZXN0cmljdGlvbixcclxuICBzc24sXHJcbiAgdGltZUhIX01NXzEyLFxyXG4gIHRpbWVISF9NTV8yNCxcclxuICB0aW1lSEhfTU1fU1NfMjQsXHJcbiAgdXJsLFxyXG4gIHppcENvZGUsXHJcbn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50L3JlZ2V4XCI7XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgXHJcbiAqIGluIGEgcHJvcGVyIGFkZHJlc3MgZm9ybWF0IChTdHJlZXQgbnVtYmVyIFN0cmVldCBOYW1lLCBDaXR5LCBTdGF0ZSBaSVAgY29kZSlcclxuICogRXhhbXBsZTogMzM0NCBXIEFsYW1lZGEgQXZlbnVlLCBMYWtld29vZCwgQ08gODAyMjJcclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJhZGRyZXNzXCJcclxuICogICBbYWRkcmVzc109XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnYWRkcmVzcycsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyBhZGRyZXNzIGZvcm1hdC4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbYWRkcmVzc11cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogQWRkcmVzc1ZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRyZXNzVmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICBhZGRyZXNzLFxyXG4gICAgXCJhZGRyZXNzXCIsXHJcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0IG9mOiBTdHJlZXQgbnVtYmVyIFN0cmVldCBOYW1lLCBDaXR5LCBTdGF0ZSBaSVAgY29kZS5cIlxyXG4gIClcclxuICBASW5wdXQoXCJhZGRyZXNzXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGNvbnNpc3RzIG9mIG9ubHkgYWxwaGFiZXRpYyBjaGFyYWN0ZXJzLlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImFscGhhYmV0XCJcclxuICogICBbYWxwaGFiZXRPbmx5XT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICdhbHBoYWJldCcsXHJcbiAqICAgICAgZXJyb3I6ICdPbmx5IGxldHRlcnMgcGxlYXNlLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIlthbHBoYWJldE9ubHldXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IEFscGhhYmV0T25seVZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbHBoYWJldE9ubHlWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIGxldHRlcnNPbmx5LFxyXG4gICAgXCJhbHBoYWJldE9ubHlcIixcclxuICAgIFwiT25seSBhbHBoYWJldGljIGNoYXJhY3RlcnMgYXJlIGFsbG93ZWQuXCJcclxuICApXHJcbiAgQElucHV0KFwiYWxwaGFiZXRPbmx5XCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiBkZC1NTS1ZWVlZLCBkZC5NTS5ZWVlZIG9yIGRkL01NL1lZWVkuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiZGF0ZUREX01NX1lZWVlcIlxyXG4gKiAgIFtkYXRlRERfTU1fWVlZWV09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnZGF0ZUREX01NX1lZWVknLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgZGF0ZSBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2RhdGVERF9NTV9ZWVlZXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBEYXRlRERfTU1fWVlZWVZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlRERfTU1fWVlZWVZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgZGF0ZUREX01NX1lZWVksXHJcbiAgICBcImRhdGVERF9NTV9ZWVlZXCIsXHJcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6IGRkLU1NLVlZWVkgb3IgZGQuTU0uWVlZWSBvciBkZC9NTS9ZWVlZLlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcImRhdGVERF9NTV9ZWVlZXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBhIGZvbGxvd2luZyBmb3JtYXQ6IFlZWVktTU0tZGQuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiZGF0ZVlZWVlfTU1fRERcIlxyXG4gKiAgIFtkYXRlWVlZWV9NTV9ERF09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnZGF0ZVlZWVlfTU1fREQnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgZGF0ZSBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2RhdGVZWVlZX01NX0REXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBEYXRlWVlZWV9NTV9ERFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlWVlZWV9NTV9ERFZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgZGF0ZVlZWVlfTU1fREQsXHJcbiAgICBcImRhdGVZWVlZX01NX0REXCIsXHJcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiBZWVlZLU1NLWRkLlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcImRhdGVZWVlZX01NX0REXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBhIGZvbGxvd2luZyBmb3JtYXQ6IGxvY2FsLXBhcnRAZG9tYWluLmNvbS5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiXHJcbiAqICAgW2VtYWlsXT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICdlbWFpbCcsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyBlbWFpbCBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2VtYWlsXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBFbWFpbFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbFZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgZW1haWwsXHJcbiAgICBcImVtYWlsXCIsXHJcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiBsb2NhbC1wYXJ0QGRvbWFpbi5jb20uXCJcclxuICApXHJcbiAgQElucHV0KFwiZW1haWxcIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGluIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6IHgueC54Lnggb3IgeTp5Onk6eTp5Onk6eTp5LlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImlwQWRkcmVzc1wiXHJcbiAqICAgW2lwQWRkcmVzc109XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnaXBBZGRyZXNzJyxcclxuICogICAgICBlcnJvcjogJ1dyb25nIGlwIGFkZHJlc3MgZm9ybWF0LidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltpcEFkZHJlc3NdXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IElQQWRkcmVzc1ZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJUEFkZHJlc3NWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIElQQWRkcmVzc1Y0QW5kVjYsXHJcbiAgICBcImlwQWRkcmVzc1wiLFxyXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiB4LngueC54IG9yIHk6eTp5Onk6eTp5Onk6eS5cIlxyXG4gIClcclxuICBASW5wdXQoXCJpcEFkZHJlc3NcIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGluIGEgZm9sbG93aW5nIGZvcm1hdDogeC54LngueC5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJpUHY0XCJcclxuICogICBbaVB2NF09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnaVB2NCcsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyBpcCBhZGRyZXNzIGZvcm1hdC4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbaVB2NF1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogSVB2NFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJUHY0VmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICBJUEFkZHJlc3NWNCxcclxuICAgIFwiaVB2NFwiLFxyXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogeC54LngueC5cIlxyXG4gIClcclxuICBASW5wdXQoXCJpUHY0XCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBhIGZvbGxvd2luZyBmb3JtYXQ6ICB5Onk6eTp5Onk6eTp5OnkuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiaVB2NlwiXHJcbiAqICAgW2lQdjZdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ2lQdjYnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgaXAgYWRkcmVzcyBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2lQdjZdXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IElQdjZWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSVB2NlZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgSVBBZGRyZXNzVjYsXHJcbiAgICBcImlQdjZcIixcclxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBmb3JtYXQ6IHk6eTp5Onk6eTp5Onk6eS5cIlxyXG4gIClcclxuICBASW5wdXQoXCJpUHY2XCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBjb25zaXN0cyBvZiBvbmx5IG51bWVyaWMgY2hhcmFjdGVycy5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJudW1iZXJzXCJcclxuICogICBbbnVtZXJpY3NPbmx5XT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICdudW1iZXJzJyxcclxuICogICAgICBlcnJvcjogJ051bWJlcnMgb25seSBwbGVhc2UuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW251bWVyaWNzT25seV1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogTnVtZXJpY3NPbmx5VmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWVyaWNzT25seVZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgbnVtYmVyc09ubHksXHJcbiAgICBcIm51bWJlcnNPbmx5XCIsXHJcbiAgICBcIk9ubHkgbnVtZXJpYyBjaGFyYWN0ZXJzIGFyZSBhbGxvd2VkLlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcIm51bWVyaWNzT25seVwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogaGFzIGFueSBzcGVjaWFsIGNoYXJhY3RlcnMuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwibm9TcGVjaWFsc1wiXHJcbiAqICAgW25vU3BlY2lhbHNdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ25vU3BlY2lhbHMnLFxyXG4gKiAgICAgIGVycm9yOiAnUmVtb3ZlIGFueSBzcGVjaWFsIGNoYXJhY3RlcnMuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW25vU3BlY2lhbHNdXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IE5vU3BlY2lhbHNWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm9TcGVjaWFsc1ZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgbm9TcGVjaWFsLFxyXG4gICAgXCJub1NwZWNpYWxzXCIsXHJcbiAgICBcIk5vIHNwZWNpYWwgY2hhcmFjdGVycyBhcmUgYWxsb3dlZC5cIlxyXG4gIClcclxuICBASW5wdXQoXCJub1NwZWNpYWxzXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBhIHByb3BlciBwYXNzcG9ydCBmb3JtYXQuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3BvcnRcIlxyXG4gKiAgIFtwYXNzcG9ydF09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAncGFzc3BvcnQnLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgcGFzc3BvcnQgZm9ybWF0J1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3Bhc3Nwb3J0XVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBQYXNzcG9ydFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXNzcG9ydFZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KHBhc3Nwb3J0LCBcInBhc3Nwb3J0XCIsIFwiSW5jb3JyZWN0IHBhc3Nwb3J0IGZvcm1hdC5cIilcclxuICBASW5wdXQoXCJwYXNzcG9ydFwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogaXMgaW4gYSBzdHJvbmcgcGFzc3dvcmQgZm9ybWF0IChIYXMgYXQgbGVhc3QgMSBsb3dlcmNhc2UgbGV0dGVyLCAxIHVwcGVyY2FzZSBsZXR0ZXIsIFxyXG4gKiAxIG51bWJlciwgMSBzcGVjaWFsIGNoYXJhY3RlciBhbmQgaGFzIGxlbmd0aCBvZiBhdCBsZWFzdCA4IGNoYXJhY3RlcnMpLlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcclxuICogICBbcGFzc3dvcmRdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ3Bhc3N3b3JkJyxcclxuICogICAgICBlcnJvcjogJ1Bhc3N3b3JkIGlzIG5vdCBzdHJvbmcgZW5vdWdoLidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltwYXNzd29yZF1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogUGFzc3dvcmRWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIHBhc3N3b3JkU3RyZW5ndGgsXHJcbiAgICBcInBhc3N3b3JkXCIsXHJcbiAgICBcIlRoZSB2YWx1ZSBoYXMgdG8gY29udGFpbiBhdCBsZWFzdCAxIGxvd2VyY2FzZSBsZXR0ZXIsIDEgdXBwZXJjYXNlIGxldHRlciwgMSBzcGVjaWFsIGNoYXJhY3RlciBhbmQgaGFzIGEgbGVuZ3RoIG9mIDguXCJcclxuICApXHJcbiAgQElucHV0KFwicGFzc3dvcmRcIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGluIGEgZm9sbG93aW5nIGZvcm1hdDogKDAwMCkgMDAwIDAwMDAuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwicGhvbmVOdW1iZXJcIlxyXG4gKiAgIFtwaG9uZU51bWJlcl09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAncGhvbmVOdW1iZXInLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgcGhvbmUgbnVtYmVyIGZvcm1hdC4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbcGhvbmVOdW1iZXJdXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFBob25lTnVtYmVyVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBob25lTnVtYmVyVmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICBwaG9uZU51bWJlcixcclxuICAgIFwicGhvbmVOdW1iZXJcIixcclxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBmb3JtYXQ6ICgwMDApIDAwMCAwMDAwLlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcInBob25lTnVtYmVyXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBjb25zaXN0cyBvZiBhIHNpbmdsZSBzcGFjZSBjaGFyYWN0ZXIuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwic2luZ2xlU3BhY2VcIlxyXG4gKiAgIFtzaW5nbGVTcGFjZV09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnc2luZ2xlU3BhY2UnLFxyXG4gKiAgICAgIGVycm9yOiAnWW91ciBpbnB1dCBoYXMgb25seSBvbmUgc3BhY2UgaW4gaXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3NpbmdsZVNwYWNlXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBTaW5nbGVTcGFjZVZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVTcGFjZVZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cE5vdFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgc2luZ2xlU3BhY2UsXHJcbiAgICBcInNpbmdsZVNwYWNlXCIsXHJcbiAgICBcIkEgc2luZ2xlIHNwYWNlIGNoYXJhY3RlciBpcyBub3QgYWxsb3dlZC5cIlxyXG4gIClcclxuICBASW5wdXQoXCJzaW5nbGVTcGFjZVwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogc3RhcnRzIG9yIGVuZHMgd2l0aCBhIHNwYWNlIGNoYXJhY3Rlci5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJzcGFjZVJlc3RyaWN0aW9uXCJcclxuICogICBbc3BhY2VSZXN0cmljdGlvbl09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnc3BhY2VSZXN0cmljdGlvbicsXHJcbiAqICAgICAgZXJyb3I6ICdObyBzcGFjZXMgb24gdGhlIHN0YXJ0IG9yIHRoZSBlbmQgb2YgdGhlIHZhbHVlIHBsZWFzZS4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbc3BhY2VSZXN0cmljdGlvbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogU3BhY2VSZXN0cmljdGlvblZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGFjZVJlc3RyaWN0aW9uVmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICBzcGFjZVJlc3RyaWN0aW9uLFxyXG4gICAgXCJzcGFjZVJlc3RyaWN0aW9uXCIsXHJcbiAgICBcIlZhbHVlIGNhbiBub3Qgc3RhcnQgb3IgZW5kIHdpdGggYSBzcGFjZSBjaGFyYWN0ZXIuXCJcclxuICApXHJcbiAgQElucHV0KFwic3BhY2VSZXN0cmljdGlvblZhbGlkYXRpb25cIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGluIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6IEFBQS1HR0ctU1NTUyBvciBBQUFHR0dTU1NTLlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInNzblwiXHJcbiAqICAgW3Nzbl09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAnc3NuJyxcclxuICogICAgICBlcnJvcjogJ1dyb25nIHNzbiBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3Nzbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogU1NOVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNTTlZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgc3NuLFxyXG4gICAgXCJzc25cIixcclxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0czogQUFBLUdHRy1TU1NTIG9yIEFBQUdHR1NTU1MuXCJcclxuICApXHJcbiAgQElucHV0KFwic3NuXCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBhIFRpbWUgRm9ybWF0IEhIOk1NIDEyLWhvdXIgd2l0aCBvcHRpb25hbCBsZWFkaW5nIDAuXHJcbiAqIFxyXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxyXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXHJcbiAqIFxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAgPGlucHV0XHJcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcclxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwidGltZUhIX01NXzEyXCJcclxuICogICBbdGltZUhIX01NXzEyXT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICd0aW1lSEhfTU1fMTInLFxyXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgdGltZSBmb3JtYXQuJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3RpbWVISF9NTV8xMl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogVGltZUhIX01NXzEyVmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVISF9NTV8xMlZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XHJcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gICAgdGltZUhIX01NXzEyLFxyXG4gICAgXCJ0aW1lSEhfTU1fMTJcIixcclxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBISDpNTSAxMi1ob3VyIGZvcm1hdC5cIlxyXG4gIClcclxuICBASW5wdXQoXCJ0aW1lSEhfTU1fMTJcIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGluIGEgVGltZSBGb3JtYXQgSEg6TU0gMjQtaG91ciB3aXRoIG9wdGlvbmFsIGxlYWRpbmcgMC5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJ0aW1lSEhfTU1fMjRcIlxyXG4gKiAgIFt0aW1lSEhfTU1fMjRdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ3RpbWVISF9NTV8yNCcsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyB0aW1lIGZvcm1hdC4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbdGltZUhIX01NXzI0XVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBUaW1lSEhfTU1fMjRWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZUhIX01NXzI0VmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXHJcbiAgICB0aW1lSEhfTU1fMjQsXHJcbiAgICBcInRpbWVISF9NTV8yNFwiLFxyXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIEhIOk1NIDI0LWhvdXIgZm9ybWF0LlwiXHJcbiAgKVxyXG4gIEBJbnB1dChcInRpbWVISF9NTV8yNFwiKVxyXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xyXG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcclxuICogaXMgaW4gYSBUaW1lIEZvcm1hdCBISDpNTTpTUyAyNC1ob3VyLlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInRpbWVISF9NTV9TU18yNFwiXHJcbiAqICAgW3RpbWVISF9NTV9TU18yNF09XCJ7XHJcbiAqICAgICAgZXJyb3JOYW1lOiAndGltZUhIX01NX1NTXzI0JyxcclxuICogICAgICBlcnJvcjogJ1dyb25nIHRpbWUgZm9ybWF0LidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIlt0aW1lSEhfTU1fU1NfMjRdXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFRpbWVISF9NTV9TU18yNFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lSEhfTU1fU1NfMjRWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICAgIHRpbWVISF9NTV9TU18yNCxcclxuICAgIFwidGltZUhIX01NX1NTXzI0XCIsXHJcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgSEg6TU06U1MgMjQtaG91ciBmb3JtYXQuXCJcclxuICApXHJcbiAgQElucHV0KFwidGltZUhIX01NX1NTXzI0XCIpXHJcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XHJcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxyXG4gKiBpcyBpbiBhIGNvcnJlY3QgdXJsIGZvcm1hdC5cclxuICogXHJcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXHJcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcclxuICogXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICA8aW5wdXRcclxuICogICAgdHlwZT1cInRleHRcIlxyXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJ1cmxcIlxyXG4gKiAgIFt1cmxdPVwie1xyXG4gKiAgICAgIGVycm9yTmFtZTogJ3VybCcsXHJcbiAqICAgICAgZXJyb3I6ICdXcm9uZyB1cmwgZm9ybWF0LidcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIlt1cmxdXCIsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFVybFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVcmxWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xyXG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dCh1cmwsIFwidXJsXCIsIFwiSW1wcm9wZXIgVVJMIGZvcm1hdC5cIilcclxuICBASW5wdXQoXCJ1cmxcIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXHJcbiAqIGlzIGluIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6IDAwMDAwIG9yIDAwMDAwLTAwMDAuLlxyXG4gKiBcclxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcclxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxyXG4gKiBcclxuICogQHVzYWdlTm90ZXNcclxuICogIDxpbnB1dFxyXG4gKiAgICB0eXBlPVwidGV4dFwiXHJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInppcENvZGVcIlxyXG4gKiAgIFt6aXBDb2RlXT1cIntcclxuICogICAgICBlcnJvck5hbWU6ICd6aXBDb2RlJyxcclxuICogICAgICBlcnJvcjogJ1dyb25nIHppcCBjb2RlIGZvcm1hdC4nXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbemlwQ29kZV1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogWmlwQ29kZVZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBaaXBDb2RlVmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcclxuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoemlwQ29kZSwgXCJ6aXBDb2RlXCIsIFwiSW1wcm9wZXIgemlwIGNvZGUgZm9ybWF0LlwiKVxyXG4gIEBJbnB1dChcInppcENvZGVcIilcclxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcclxuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==