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
import { RegExpValidatorDirective } from "./template-driven-form-validators";
import { RegExpValidatorInput } from "../../decorators/validator-input";
import { IPAddressV4, IPAddressV4AndV6, IPAddressV6, address, dateDD_MM_YYYY, dateYYYY_MM_DD, email, lettersOnly, noSpecial, numbersOnly, passport, passwordStrength, phoneNumber, space, spaceRestriction, ssn, timeHH_MM_12, timeHH_MM_24, timeHH_MM_SS_24, url, zipCode, } from "../../constant/regex";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AddressValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: AddressValidatorDirective, isStandalone: true, selector: "[address]", inputs: { value: ["address", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AddressValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AlphabetOnlyValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: AlphabetOnlyValidatorDirective, isStandalone: true, selector: "[alphabetOnly]", inputs: { value: ["alphabetOnly", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AlphabetOnlyValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DateDD_MM_YYYYValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: DateDD_MM_YYYYValidatorDirective, isStandalone: true, selector: "[dateDD_MM_YYYY]", inputs: { value: ["dateDD_MM_YYYY", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DateDD_MM_YYYYValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DateYYYY_MM_DDValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: DateYYYY_MM_DDValidatorDirective, isStandalone: true, selector: "[dateYYYY_MM_DD]", inputs: { value: ["dateYYYY_MM_DD", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DateYYYY_MM_DDValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EmailValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: EmailValidatorDirective, isStandalone: true, selector: "[email]", inputs: { value: ["email", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EmailValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: IPAddressValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: IPAddressValidatorDirective, isStandalone: true, selector: "[ipAddress]", inputs: { value: ["ipAddress", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: IPAddressValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: IPv4ValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: IPv4ValidatorDirective, isStandalone: true, selector: "[iPv4]", inputs: { value: ["iPv4", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: IPv4ValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: IPv6ValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: IPv6ValidatorDirective, isStandalone: true, selector: "[iPv6]", inputs: { value: ["iPv6", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: IPv6ValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NumericsOnlyValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: NumericsOnlyValidatorDirective, isStandalone: true, selector: "[numericsOnly]", inputs: { value: ["numericsOnly", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NumericsOnlyValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NoSpecialsValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: NoSpecialsValidatorDirective, isStandalone: true, selector: "[noSpecials]", inputs: { value: ["noSpecials", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NoSpecialsValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: PassportValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: PassportValidatorDirective, isStandalone: true, selector: "[passport]", inputs: { value: ["passport", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: PassportValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: PasswordValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: PasswordValidatorDirective, isStandalone: true, selector: "[password]", inputs: { value: ["password", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: PasswordValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: PhoneNumberValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: PhoneNumberValidatorDirective, isStandalone: true, selector: "[phoneNumber]", inputs: { value: ["phoneNumber", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: PhoneNumberValidatorDirective, decorators: [{
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
export class SpaceValidatorDirective extends RegExpValidatorDirective {
    validate(control) {
        return super.validate(control);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SpaceValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: SpaceValidatorDirective, isStandalone: true, selector: "[space]", inputs: { value: ["singleSpace", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: SpaceValidatorDirective,
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    RegExpValidatorInput(space, "space", "A single space character is not allowed.", '!')
], SpaceValidatorDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SpaceValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[space]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: SpaceValidatorDirective,
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SpaceRestrictionValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: SpaceRestrictionValidatorDirective, isStandalone: true, selector: "[spaceRestriction]", inputs: { value: ["spaceRestrictionValidation", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SpaceRestrictionValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SSNValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: SSNValidatorDirective, isStandalone: true, selector: "[ssn]", inputs: { value: ["ssn", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SSNValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TimeHH_MM_12ValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: TimeHH_MM_12ValidatorDirective, isStandalone: true, selector: "[timeHH_MM_12]", inputs: { value: ["timeHH_MM_12", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TimeHH_MM_12ValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TimeHH_MM_24ValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: TimeHH_MM_24ValidatorDirective, isStandalone: true, selector: "[timeHH_MM_24]", inputs: { value: ["timeHH_MM_24", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TimeHH_MM_24ValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TimeHH_MM_SS_24ValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: TimeHH_MM_SS_24ValidatorDirective, isStandalone: true, selector: "[timeHH_MM_SS_24]", inputs: { value: ["timeHH_MM_SS_24", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TimeHH_MM_SS_24ValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UrlValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: UrlValidatorDirective, isStandalone: true, selector: "[url]", inputs: { value: ["url", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UrlValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ZipCodeValidatorDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: ZipCodeValidatorDirective, isStandalone: true, selector: "[zipCode]", inputs: { value: ["zipCode", "value"] }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ZipCodeValidatorDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlYnVpbHQtdGRmLXZhbGlkYXRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi92YWxpZGF0b3JzL3RlbXBsYXRlLWRyaXZlbi1mb3Jtcy9wcmVidWlsdC10ZGYtdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUVMLGFBQWEsR0FFZCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFDTCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxPQUFPLEVBQ1AsY0FBYyxFQUNkLGNBQWMsRUFDZCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxXQUFXLEVBQ1gsUUFBUSxFQUNSLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsS0FBSyxFQUNMLGdCQUFnQixFQUNoQixHQUFHLEVBQ0gsWUFBWSxFQUNaLFlBQVksRUFDWixlQUFlLEVBQ2YsR0FBRyxFQUNILE9BQU8sR0FDUixNQUFNLHNCQUFzQixDQUFDOztBQUU5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQVlILE1BQU0sT0FBTyx5QkFBMEIsU0FBUSx3QkFBd0I7SUFRNUQsUUFBUSxDQUFDLE9BQXdCO1FBQ3hDLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOytHQVZVLHlCQUF5QjttR0FBekIseUJBQXlCLGlHQVJ6QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixXQUFXLEVBQUUseUJBQXlCO2dCQUN0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SFYseUJBQXlCO2tCQVhyQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLDJCQUEyQjs0QkFDdEMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7OEJBSVUsS0FBSztzQkFEYixLQUFLO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgTkdfVkFMSURBVE9SUyxcbiAgVmFsaWRhdGlvbkVycm9ycyxcbn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUgfSBmcm9tIFwiLi90ZW1wbGF0ZS1kcml2ZW4tZm9ybS12YWxpZGF0b3JzXCI7XG5pbXBvcnQgeyBSZWdFeHBWYWxpZGF0b3JJbnB1dCB9IGZyb20gXCIuLi8uLi9kZWNvcmF0b3JzL3ZhbGlkYXRvci1pbnB1dFwiO1xuaW1wb3J0IHtcbiAgSVBBZGRyZXNzVjQsXG4gIElQQWRkcmVzc1Y0QW5kVjYsXG4gIElQQWRkcmVzc1Y2LFxuICBhZGRyZXNzLFxuICBkYXRlRERfTU1fWVlZWSxcbiAgZGF0ZVlZWVlfTU1fREQsXG4gIGVtYWlsLFxuICBsZXR0ZXJzT25seSxcbiAgbm9TcGVjaWFsLFxuICBudW1iZXJzT25seSxcbiAgcGFzc3BvcnQsXG4gIHBhc3N3b3JkU3RyZW5ndGgsXG4gIHBob25lTnVtYmVyLFxuICBzcGFjZSxcbiAgc3BhY2VSZXN0cmljdGlvbixcbiAgc3NuLFxuICB0aW1lSEhfTU1fMTIsXG4gIHRpbWVISF9NTV8yNCxcbiAgdGltZUhIX01NX1NTXzI0LFxuICB1cmwsXG4gIHppcENvZGUsXG59IGZyb20gXCIuLi8uLi9jb25zdGFudC9yZWdleFwiO1xuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgXG4gKiBpbiBhIHByb3BlciBhZGRyZXNzIGZvcm1hdCAoU3RyZWV0IG51bWJlciBTdHJlZXQgTmFtZSwgQ2l0eSwgU3RhdGUgWklQIGNvZGUpXG4gKiBFeGFtcGxlOiAzMzQ0IFcgQWxhbWVkYSBBdmVudWUsIExha2V3b29kLCBDTyA4MDIyMlxuICogXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxuICogXG4gKiBAdXNhZ2VOb3Rlc1xuICogIDxpbnB1dFxuICogICAgdHlwZT1cInRleHRcIlxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiYWRkcmVzc1wiXG4gKiAgIFthZGRyZXNzXT1cIntcbiAqICAgICAgZXJyb3JOYW1lOiAnYWRkcmVzcycsXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgYWRkcmVzcyBmb3JtYXQuJ1xuICogICB9XCJcbiAqIC8+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbYWRkcmVzc11cIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBBZGRyZXNzVmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQWRkcmVzc1ZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcbiAgICBhZGRyZXNzLFxuICAgIFwiYWRkcmVzc1wiLFxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBmb3JtYXQgb2Y6IFN0cmVldCBudW1iZXIgU3RyZWV0IE5hbWUsIENpdHksIFN0YXRlIFpJUCBjb2RlLlwiXG4gIClcbiAgQElucHV0KFwiYWRkcmVzc1wiKVxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQSBEaXJlY3RpdmUgdGhhdCBoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcbiAqIGNvbnNpc3RzIG9mIG9ubHkgYWxwaGFiZXRpYyBjaGFyYWN0ZXJzLlxuICogXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxuICogXG4gKiBAdXNhZ2VOb3Rlc1xuICogIDxpbnB1dFxuICogICAgdHlwZT1cInRleHRcIlxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiYWxwaGFiZXRcIlxuICogICBbYWxwaGFiZXRPbmx5XT1cIntcbiAqICAgICAgZXJyb3JOYW1lOiAnYWxwaGFiZXQnLFxuICogICAgICBlcnJvcjogJ09ubHkgbGV0dGVycyBwbGVhc2UuJ1xuICogICB9XCJcbiAqIC8+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbYWxwaGFiZXRPbmx5XVwiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IEFscGhhYmV0T25seVZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFscGhhYmV0T25seVZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcbiAgICBsZXR0ZXJzT25seSxcbiAgICBcImFscGhhYmV0T25seVwiLFxuICAgIFwiT25seSBhbHBoYWJldGljIGNoYXJhY3RlcnMgYXJlIGFsbG93ZWQuXCJcbiAgKVxuICBASW5wdXQoXCJhbHBoYWJldE9ubHlcIilcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxuICogaXMgaW4gb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0czogZGQtTU0tWVlZWSwgZGQuTU0uWVlZWSBvciBkZC9NTS9ZWVlZLlxuICogXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxuICogXG4gKiBAdXNhZ2VOb3Rlc1xuICogIDxpbnB1dFxuICogICAgdHlwZT1cInRleHRcIlxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiZGF0ZUREX01NX1lZWVlcIlxuICogICBbZGF0ZUREX01NX1lZWVldPVwie1xuICogICAgICBlcnJvck5hbWU6ICdkYXRlRERfTU1fWVlZWScsXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgZGF0ZSBmb3JtYXQuJ1xuICogICB9XCJcbiAqIC8+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbZGF0ZUREX01NX1lZWVldXCIsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogRGF0ZUREX01NX1lZWVlWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlRERfTU1fWVlZWVZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcbiAgICBkYXRlRERfTU1fWVlZWSxcbiAgICBcImRhdGVERF9NTV9ZWVlZXCIsXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiBkZC1NTS1ZWVlZIG9yIGRkLk1NLllZWVkgb3IgZGQvTU0vWVlZWS5cIlxuICApXG4gIEBJbnB1dChcImRhdGVERF9NTV9ZWVlZXCIpXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xuICB9XG59XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcbiAqIGlzIGEgZm9sbG93aW5nIGZvcm1hdDogWVlZWS1NTS1kZC5cbiAqIFxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcbiAqIFxuICogQHVzYWdlTm90ZXNcbiAqICA8aW5wdXRcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImRhdGVZWVlZX01NX0REXCJcbiAqICAgW2RhdGVZWVlZX01NX0REXT1cIntcbiAqICAgICAgZXJyb3JOYW1lOiAnZGF0ZVlZWVlfTU1fREQnLFxuICogICAgICBlcnJvcjogJ1dyb25nIGRhdGUgZm9ybWF0LidcbiAqICAgfVwiXG4gKiAvPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW2RhdGVZWVlZX01NX0REXVwiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IERhdGVZWVlZX01NX0REVmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVlZWVlfTU1fRERWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXG4gICAgZGF0ZVlZWVlfTU1fREQsXG4gICAgXCJkYXRlWVlZWV9NTV9ERFwiLFxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBmb3JtYXQ6IFlZWVktTU0tZGQuXCJcbiAgKVxuICBASW5wdXQoXCJkYXRlWVlZWV9NTV9ERFwiKVxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXG4gKiBpcyBhIGZvbGxvd2luZyBmb3JtYXQ6IGxvY2FsLXBhcnRAZG9tYWluLmNvbS5cbiAqIFxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcbiAqIFxuICogQHVzYWdlTm90ZXNcbiAqICA8aW5wdXRcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCJcbiAqICAgW2VtYWlsXT1cIntcbiAqICAgICAgZXJyb3JOYW1lOiAnZW1haWwnLFxuICogICAgICBlcnJvcjogJ1dyb25nIGVtYWlsIGZvcm1hdC4nXG4gKiAgIH1cIlxuICogLz5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcIltlbWFpbF1cIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBFbWFpbFZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEVtYWlsVmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxuICAgIGVtYWlsLFxuICAgIFwiZW1haWxcIixcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiBsb2NhbC1wYXJ0QGRvbWFpbi5jb20uXCJcbiAgKVxuICBASW5wdXQoXCJlbWFpbFwiKVxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXG4gKiBpcyBpbiBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiB4LngueC54IG9yIHk6eTp5Onk6eTp5Onk6eS5cbiAqIFxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcbiAqIFxuICogQHVzYWdlTm90ZXNcbiAqICA8aW5wdXRcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cImlwQWRkcmVzc1wiXG4gKiAgIFtpcEFkZHJlc3NdPVwie1xuICogICAgICBlcnJvck5hbWU6ICdpcEFkZHJlc3MnLFxuICogICAgICBlcnJvcjogJ1dyb25nIGlwIGFkZHJlc3MgZm9ybWF0LidcbiAqICAgfVwiXG4gKiAvPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW2lwQWRkcmVzc11cIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBJUEFkZHJlc3NWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJUEFkZHJlc3NWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXG4gICAgSVBBZGRyZXNzVjRBbmRWNixcbiAgICBcImlwQWRkcmVzc1wiLFxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0czogeC54LngueCBvciB5Onk6eTp5Onk6eTp5OnkuXCJcbiAgKVxuICBASW5wdXQoXCJpcEFkZHJlc3NcIilcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxuICogaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OiB4LngueC54LlxuICogXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxuICogXG4gKiBAdXNhZ2VOb3Rlc1xuICogIDxpbnB1dFxuICogICAgdHlwZT1cInRleHRcIlxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwiaVB2NFwiXG4gKiAgIFtpUHY0XT1cIntcbiAqICAgICAgZXJyb3JOYW1lOiAnaVB2NCcsXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgaXAgYWRkcmVzcyBmb3JtYXQuJ1xuICogICB9XCJcbiAqIC8+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbaVB2NF1cIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBJUHY0VmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSVB2NFZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcbiAgICBJUEFkZHJlc3NWNCxcbiAgICBcImlQdjRcIixcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiB4LngueC54LlwiXG4gIClcbiAgQElucHV0KFwiaVB2NFwiKVxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXG4gKiBpcyBpbiBhIGZvbGxvd2luZyBmb3JtYXQ6ICB5Onk6eTp5Onk6eTp5OnkuXG4gKiBcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXG4gKiBcbiAqIEB1c2FnZU5vdGVzXG4gKiAgPGlucHV0XG4gKiAgICB0eXBlPVwidGV4dFwiXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJpUHY2XCJcbiAqICAgW2lQdjZdPVwie1xuICogICAgICBlcnJvck5hbWU6ICdpUHY2JyxcbiAqICAgICAgZXJyb3I6ICdXcm9uZyBpcCBhZGRyZXNzIGZvcm1hdC4nXG4gKiAgIH1cIlxuICogLz5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcIltpUHY2XVwiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IElQdjZWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJUHY2VmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxuICAgIElQQWRkcmVzc1Y2LFxuICAgIFwiaVB2NlwiLFxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBmb3JtYXQ6IHk6eTp5Onk6eTp5Onk6eS5cIlxuICApXG4gIEBJbnB1dChcImlQdjZcIilcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxuICogY29uc2lzdHMgb2Ygb25seSBudW1lcmljIGNoYXJhY3RlcnMuXG4gKiBcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXG4gKiBcbiAqIEB1c2FnZU5vdGVzXG4gKiAgPGlucHV0XG4gKiAgICB0eXBlPVwidGV4dFwiXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJudW1iZXJzXCJcbiAqICAgW251bWVyaWNzT25seV09XCJ7XG4gKiAgICAgIGVycm9yTmFtZTogJ251bWJlcnMnLFxuICogICAgICBlcnJvcjogJ051bWJlcnMgb25seSBwbGVhc2UuJ1xuICogICB9XCJcbiAqIC8+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbbnVtZXJpY3NPbmx5XVwiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IE51bWVyaWNzT25seVZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE51bWVyaWNzT25seVZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcbiAgICBudW1iZXJzT25seSxcbiAgICBcIm51bWJlcnNPbmx5XCIsXG4gICAgXCJPbmx5IG51bWVyaWMgY2hhcmFjdGVycyBhcmUgYWxsb3dlZC5cIlxuICApXG4gIEBJbnB1dChcIm51bWVyaWNzT25seVwiKVxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXG4gKiBoYXMgYW55IHNwZWNpYWwgY2hhcmFjdGVycy5cbiAqIFxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcbiAqIFxuICogQHVzYWdlTm90ZXNcbiAqICA8aW5wdXRcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cIm5vU3BlY2lhbHNcIlxuICogICBbbm9TcGVjaWFsc109XCJ7XG4gKiAgICAgIGVycm9yTmFtZTogJ25vU3BlY2lhbHMnLFxuICogICAgICBlcnJvcjogJ1JlbW92ZSBhbnkgc3BlY2lhbCBjaGFyYWN0ZXJzLidcbiAqICAgfVwiXG4gKiAvPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW25vU3BlY2lhbHNdXCIsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogTm9TcGVjaWFsc1ZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vU3BlY2lhbHNWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXG4gICAgbm9TcGVjaWFsLFxuICAgIFwibm9TcGVjaWFsc1wiLFxuICAgIFwiTm8gc3BlY2lhbCBjaGFyYWN0ZXJzIGFyZSBhbGxvd2VkLlwiXG4gIClcbiAgQElucHV0KFwibm9TcGVjaWFsc1wiKVxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXG4gKiBpcyBpbiBhIHByb3BlciBwYXNzcG9ydCBmb3JtYXQuXG4gKiBcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXG4gKiBcbiAqIEB1c2FnZU5vdGVzXG4gKiAgPGlucHV0XG4gKiAgICB0eXBlPVwidGV4dFwiXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJwYXNzcG9ydFwiXG4gKiAgIFtwYXNzcG9ydF09XCJ7XG4gKiAgICAgIGVycm9yTmFtZTogJ3Bhc3Nwb3J0JyxcbiAqICAgICAgZXJyb3I6ICdXcm9uZyBwYXNzcG9ydCBmb3JtYXQnXG4gKiAgIH1cIlxuICogLz5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcIltwYXNzcG9ydF1cIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBQYXNzcG9ydFZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFBhc3Nwb3J0VmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KHBhc3Nwb3J0LCBcInBhc3Nwb3J0XCIsIFwiSW5jb3JyZWN0IHBhc3Nwb3J0IGZvcm1hdC5cIilcbiAgQElucHV0KFwicGFzc3BvcnRcIilcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxuICogaXMgaW4gYSBzdHJvbmcgcGFzc3dvcmQgZm9ybWF0IChIYXMgYXQgbGVhc3QgMSBsb3dlcmNhc2UgbGV0dGVyLCAxIHVwcGVyY2FzZSBsZXR0ZXIsIFxuICogMSBudW1iZXIsIDEgc3BlY2lhbCBjaGFyYWN0ZXIgYW5kIGhhcyBsZW5ndGggb2YgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzKS5cbiAqIFxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcbiAqIFxuICogQHVzYWdlTm90ZXNcbiAqICA8aW5wdXRcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcbiAqICAgW3Bhc3N3b3JkXT1cIntcbiAqICAgICAgZXJyb3JOYW1lOiAncGFzc3dvcmQnLFxuICogICAgICBlcnJvcjogJ1Bhc3N3b3JkIGlzIG5vdCBzdHJvbmcgZW5vdWdoLidcbiAqICAgfVwiXG4gKiAvPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW3Bhc3N3b3JkXVwiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IFBhc3N3b3JkVmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQoXG4gICAgcGFzc3dvcmRTdHJlbmd0aCxcbiAgICBcInBhc3N3b3JkXCIsXG4gICAgXCJUaGUgdmFsdWUgaGFzIHRvIGNvbnRhaW4gYXQgbGVhc3QgMSBsb3dlcmNhc2UgbGV0dGVyLCAxIHVwcGVyY2FzZSBsZXR0ZXIsIDEgc3BlY2lhbCBjaGFyYWN0ZXIgYW5kIGhhcyBhIGxlbmd0aCBvZiA4LlwiXG4gIClcbiAgQElucHV0KFwicGFzc3dvcmRcIilcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxuICogaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OiAoMDAwKSAwMDAgMDAwMC5cbiAqIFxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcbiAqIFxuICogQHVzYWdlTm90ZXNcbiAqICA8aW5wdXRcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInBob25lTnVtYmVyXCJcbiAqICAgW3Bob25lTnVtYmVyXT1cIntcbiAqICAgICAgZXJyb3JOYW1lOiAncGhvbmVOdW1iZXInLFxuICogICAgICBlcnJvcjogJ1dyb25nIHBob25lIG51bWJlciBmb3JtYXQuJ1xuICogICB9XCJcbiAqIC8+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbcGhvbmVOdW1iZXJdXCIsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogUGhvbmVOdW1iZXJWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQaG9uZU51bWJlclZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcbiAgICBwaG9uZU51bWJlcixcbiAgICBcInBob25lTnVtYmVyXCIsXG4gICAgXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogKDAwMCkgMDAwIDAwMDAuXCJcbiAgKVxuICBASW5wdXQoXCJwaG9uZU51bWJlclwiKVxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXG4gKiBjb25zaXN0cyBvZiBhIHNpbmdsZSBzcGFjZSBjaGFyYWN0ZXIuXG4gKiBcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXG4gKiBcbiAqIEB1c2FnZU5vdGVzXG4gKiAgPGlucHV0XG4gKiAgICB0eXBlPVwidGV4dFwiXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJzaW5nbGVTcGFjZVwiXG4gKiAgIFtzaW5nbGVTcGFjZV09XCJ7XG4gKiAgICAgIGVycm9yTmFtZTogJ3NpbmdsZVNwYWNlJyxcbiAqICAgICAgZXJyb3I6ICdZb3VyIGlucHV0IGhhcyBvbmx5IG9uZSBzcGFjZSBpbiBpdC4nXG4gKiAgIH1cIlxuICogLz5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcIltzcGFjZV1cIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBTcGFjZVZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNwYWNlVmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxuICAgIHNwYWNlLFxuICAgIFwic3BhY2VcIixcbiAgICBcIkEgc2luZ2xlIHNwYWNlIGNoYXJhY3RlciBpcyBub3QgYWxsb3dlZC5cIixcbiAgICAnISdcbiAgKVxuICBASW5wdXQoXCJzaW5nbGVTcGFjZVwiKVxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXG4gKiBzdGFydHMgb3IgZW5kcyB3aXRoIGEgc3BhY2UgY2hhcmFjdGVyLlxuICogXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxuICogXG4gKiBAdXNhZ2VOb3Rlc1xuICogIDxpbnB1dFxuICogICAgdHlwZT1cInRleHRcIlxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwic3BhY2VSZXN0cmljdGlvblwiXG4gKiAgIFtzcGFjZVJlc3RyaWN0aW9uXT1cIntcbiAqICAgICAgZXJyb3JOYW1lOiAnc3BhY2VSZXN0cmljdGlvbicsXG4gKiAgICAgIGVycm9yOiAnTm8gc3BhY2VzIG9uIHRoZSBzdGFydCBvciB0aGUgZW5kIG9mIHRoZSB2YWx1ZSBwbGVhc2UuJ1xuICogICB9XCJcbiAqIC8+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbc3BhY2VSZXN0cmljdGlvbl1cIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBTcGFjZVJlc3RyaWN0aW9uVmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3BhY2VSZXN0cmljdGlvblZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcbiAgICBzcGFjZVJlc3RyaWN0aW9uLFxuICAgIFwic3BhY2VSZXN0cmljdGlvblwiLFxuICAgIFwiVmFsdWUgY2FuIG5vdCBzdGFydCBvciBlbmQgd2l0aCBhIHNwYWNlIGNoYXJhY3Rlci5cIlxuICApXG4gIEBJbnB1dChcInNwYWNlUmVzdHJpY3Rpb25WYWxpZGF0aW9uXCIpXG4gIG92ZXJyaWRlIHZhbHVlITogYW55O1xuICBvdmVycmlkZSB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvbnRyb2wpO1xuICB9XG59XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGNoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBcbiAqIGlzIGluIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6IEFBQS1HR0ctU1NTUyBvciBBQUFHR0dTU1NTLlxuICogXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxuICogXG4gKiBAdXNhZ2VOb3Rlc1xuICogIDxpbnB1dFxuICogICAgdHlwZT1cInRleHRcIlxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwic3NuXCJcbiAqICAgW3Nzbl09XCJ7XG4gKiAgICAgIGVycm9yTmFtZTogJ3NzbicsXG4gKiAgICAgIGVycm9yOiAnV3Jvbmcgc3NuIGZvcm1hdC4nXG4gKiAgIH1cIlxuICogLz5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcIltzc25dXCIsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogU1NOVmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU1NOVmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KFxuICAgIHNzbixcbiAgICBcInNzblwiLFxuICAgIFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0czogQUFBLUdHRy1TU1NTIG9yIEFBQUdHR1NTU1MuXCJcbiAgKVxuICBASW5wdXQoXCJzc25cIilcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxuICogaXMgaW4gYSBUaW1lIEZvcm1hdCBISDpNTSAxMi1ob3VyIHdpdGggb3B0aW9uYWwgbGVhZGluZyAwLlxuICogXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxuICogXG4gKiBAdXNhZ2VOb3Rlc1xuICogIDxpbnB1dFxuICogICAgdHlwZT1cInRleHRcIlxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwidGltZUhIX01NXzEyXCJcbiAqICAgW3RpbWVISF9NTV8xMl09XCJ7XG4gKiAgICAgIGVycm9yTmFtZTogJ3RpbWVISF9NTV8xMicsXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgdGltZSBmb3JtYXQuJ1xuICogICB9XCJcbiAqIC8+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbdGltZUhIX01NXzEyXVwiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IFRpbWVISF9NTV8xMlZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVISF9NTV8xMlZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcbiAgICB0aW1lSEhfTU1fMTIsXG4gICAgXCJ0aW1lSEhfTU1fMTJcIixcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgSEg6TU0gMTItaG91ciBmb3JtYXQuXCJcbiAgKVxuICBASW5wdXQoXCJ0aW1lSEhfTU1fMTJcIilcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxuICogaXMgaW4gYSBUaW1lIEZvcm1hdCBISDpNTSAyNC1ob3VyIHdpdGggb3B0aW9uYWwgbGVhZGluZyAwLlxuICogXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxuICogXG4gKiBAdXNhZ2VOb3Rlc1xuICogIDxpbnB1dFxuICogICAgdHlwZT1cInRleHRcIlxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwidGltZUhIX01NXzI0XCJcbiAqICAgW3RpbWVISF9NTV8yNF09XCJ7XG4gKiAgICAgIGVycm9yTmFtZTogJ3RpbWVISF9NTV8yNCcsXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgdGltZSBmb3JtYXQuJ1xuICogICB9XCJcbiAqIC8+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbdGltZUhIX01NXzI0XVwiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IFRpbWVISF9NTV8yNFZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVISF9NTV8yNFZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcbiAgICB0aW1lSEhfTU1fMjQsXG4gICAgXCJ0aW1lSEhfTU1fMjRcIixcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgSEg6TU0gMjQtaG91ciBmb3JtYXQuXCJcbiAgKVxuICBASW5wdXQoXCJ0aW1lSEhfTU1fMjRcIilcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxuICogaXMgaW4gYSBUaW1lIEZvcm1hdCBISDpNTTpTUyAyNC1ob3VyLlxuICogXG4gKiBIYXMgYW4gb3B0aW9uYWwgaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgY3VzdG9tIG5hbWUgYW5kIGEgY3VzdG9tIFxuICogZXJyb3IgY29udGVudCAvIG1lc3NhZ2UuIFxuICogXG4gKiBAdXNhZ2VOb3Rlc1xuICogIDxpbnB1dFxuICogICAgdHlwZT1cInRleHRcIlxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwidGltZUhIX01NX1NTXzI0XCJcbiAqICAgW3RpbWVISF9NTV9TU18yNF09XCJ7XG4gKiAgICAgIGVycm9yTmFtZTogJ3RpbWVISF9NTV9TU18yNCcsXG4gKiAgICAgIGVycm9yOiAnV3JvbmcgdGltZSBmb3JtYXQuJ1xuICogICB9XCJcbiAqIC8+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbdGltZUhIX01NX1NTXzI0XVwiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IFRpbWVISF9NTV9TU18yNFZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVISF9NTV9TU18yNFZhbGlkYXRvckRpcmVjdGl2ZSBleHRlbmRzIFJlZ0V4cFZhbGlkYXRvckRpcmVjdGl2ZSB7XG4gIEBSZWdFeHBWYWxpZGF0b3JJbnB1dChcbiAgICB0aW1lSEhfTU1fU1NfMjQsXG4gICAgXCJ0aW1lSEhfTU1fU1NfMjRcIixcbiAgICBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgSEg6TU06U1MgMjQtaG91ciBmb3JtYXQuXCJcbiAgKVxuICBASW5wdXQoXCJ0aW1lSEhfTU1fU1NfMjRcIilcbiAgb3ZlcnJpZGUgdmFsdWUhOiBhbnk7XG4gIG92ZXJyaWRlIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gc3VwZXIudmFsaWRhdGUoY29udHJvbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgRGlyZWN0aXZlIHRoYXQgY2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIFxuICogaXMgaW4gYSBjb3JyZWN0IHVybCBmb3JtYXQuXG4gKiBcbiAqIEhhcyBhbiBvcHRpb25hbCBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSBjdXN0b20gbmFtZSBhbmQgYSBjdXN0b20gXG4gKiBlcnJvciBjb250ZW50IC8gbWVzc2FnZS4gXG4gKiBcbiAqIEB1c2FnZU5vdGVzXG4gKiAgPGlucHV0XG4gKiAgICB0eXBlPVwidGV4dFwiXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJ1cmxcIlxuICogICBbdXJsXT1cIntcbiAqICAgICAgZXJyb3JOYW1lOiAndXJsJyxcbiAqICAgICAgZXJyb3I6ICdXcm9uZyB1cmwgZm9ybWF0LidcbiAqICAgfVwiXG4gKiAvPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW3VybF1cIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBVcmxWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBVcmxWYWxpZGF0b3JEaXJlY3RpdmUgZXh0ZW5kcyBSZWdFeHBWYWxpZGF0b3JEaXJlY3RpdmUge1xuICBAUmVnRXhwVmFsaWRhdG9ySW5wdXQodXJsLCBcInVybFwiLCBcIkltcHJvcGVyIFVSTCBmb3JtYXQuXCIpXG4gIEBJbnB1dChcInVybFwiKVxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQSBEaXJlY3RpdmUgdGhhdCBjaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgXG4gKiBpcyBpbiBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiAwMDAwMCBvciAwMDAwMC0wMDAwLi5cbiAqIFxuICogSGFzIGFuIG9wdGlvbmFsIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IGN1c3RvbSBuYW1lIGFuZCBhIGN1c3RvbSBcbiAqIGVycm9yIGNvbnRlbnQgLyBtZXNzYWdlLiBcbiAqIFxuICogQHVzYWdlTm90ZXNcbiAqICA8aW5wdXRcbiAqICAgIHR5cGU9XCJ0ZXh0XCJcbiAqICAgIGZvcm1Db250cm9sTmFtZT1cInppcENvZGVcIlxuICogICBbemlwQ29kZV09XCJ7XG4gKiAgICAgIGVycm9yTmFtZTogJ3ppcENvZGUnLFxuICogICAgICBlcnJvcjogJ1dyb25nIHppcCBjb2RlIGZvcm1hdC4nXG4gKiAgIH1cIlxuICogLz5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcIlt6aXBDb2RlXVwiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IFppcENvZGVWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBaaXBDb2RlVmFsaWRhdG9yRGlyZWN0aXZlIGV4dGVuZHMgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlIHtcbiAgQFJlZ0V4cFZhbGlkYXRvcklucHV0KHppcENvZGUsIFwiemlwQ29kZVwiLCBcIkltcHJvcGVyIHppcCBjb2RlIGZvcm1hdC5cIilcbiAgQElucHV0KFwiemlwQ29kZVwiKVxuICBvdmVycmlkZSB2YWx1ZSE6IGFueTtcbiAgb3ZlcnJpZGUgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBzdXBlci52YWxpZGF0ZShjb250cm9sKTtcbiAgfVxufVxuIl19