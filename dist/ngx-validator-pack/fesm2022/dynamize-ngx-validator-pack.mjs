import * as i0 from '@angular/core';
import { Directive, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i1 from '@angular/forms';
import { NG_VALIDATORS } from '@angular/forms';
import { __decorate } from 'tslib';

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @description
 * Default styles for the showValidation Directive
 * {@link ShowValidationDirective}
 */
const DefaultStyle = {
    font_size: "small",
    font_family: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    color: "salmon",
    background_color: "",
    border: "none",
    border_radius: "5px",
};

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @description
 * A directive which will show a validation error message to the
 * user.
 * @implementation
 * <input
 *  type="text"
 *  formControlName="demoControlName"
 *  showValidation
 *  [errorStyle]="{                  - Optional style input
 *    font_size: 'medium',              used for customizing the look
 *    color: '#ad03fc',
 *  }"
 * />
 */
class ShowValidationDirective {
    constructor(elementRef, renderer, control) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.control = control;
        this.controlSub = new Subscription();
        this.errorStyle = DefaultStyle;
    }
    ngOnInit() {
        const formControl = this.control.control;
        this.parent = this.elementRef.nativeElement.parentElement;
        this.self = this.elementRef.nativeElement;
        this.container = this.renderer.createElement("div");
        this.renderer.appendChild(this.container, this.self);
        this.renderer.appendChild(this.parent, this.container);
        this.setStyles();
        this.controlSub.add(formControl.statusChanges.subscribe((status) => {
            if (status === "INVALID") {
                if (!this.span) {
                    this.showError(formControl.errors);
                }
            }
            else {
                this.hideError();
            }
        }));
    }
    ngOnDestroy() {
        this.controlSub.unsubscribe();
    }
    setStyles() {
        this.renderer.setStyle(this.container, "display", "flex");
        this.renderer.setStyle(this.container, "flex-direction", "column");
        this.renderer.setStyle(this.container, "gap", "10px");
        Object.entries(this.errorStyle).forEach((style) => {
            this.renderer.setStyle(this.container, style[0].replace('_', '-'), style[1]);
        });
    }
    showError(errors) {
        this.span = this.renderer.createElement("span");
        this.span.innerHTML = this.getValidationMessage(errors);
        this.renderer.appendChild(this.container, this.span);
        this.renderer.setStyle(this.span, 'padding', '0px 0px 10px 10px');
    }
    hideError() {
        if (this.container && this.span) {
            this.renderer.removeChild(this.container, this.span);
            this.span = null;
        }
    }
    getValidationMessage(errors) {
        return errors ? Object.values(errors)[0] : "Invalid Input.";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ShowValidationDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: ShowValidationDirective, isStandalone: true, selector: "[showValidation]", inputs: { errorStyle: "errorStyle" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ShowValidationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[showValidation]",
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NgControl }], propDecorators: { errorStyle: [{
                type: Input
            }] } });

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @description
 * Sets an error on a given control
 *
 * @param {AbstractControl}           - FromControl / AbstractControl to set the error to
 * @param {{ [key: string]: unknown }}- error content
 */
const setErrors = (control, error) => {
    control.setErrors({ ...control.errors, ...error });
};
/**
 * @description
 * Removes errors on a given control
 *
 * @param {AbstractControl}           - FromControl / AbstractControl from which
 *                                      to remove error
 * @param {string[]}                  - list of error names
 */
const removeErrors = (control, keys) => {
    const remainingErrors = keys.reduce((errors, key) => {
        delete errors[key];
        return errors;
    }, {
        ...control.errors,
    });
    control.setErrors(Object.keys(remainingErrors).length > 0 ? remainingErrors : null);
};

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @description
 * Assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has no value.
 *
 * @param {string}                    - control name to receive the required error
 * @param {string}                    - control name who's value needs to be checked
 * @param {string}                    - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
const requiredIf = (requiredControlName, controlToCheckName, error) => {
    return (control) => {
        const required = control?.get(requiredControlName);
        const toCheck = control?.get(controlToCheckName);
        if (required?.value || !toCheck?.value) {
            removeErrors(required, ["required"]);
            return null;
        }
        else {
            const errorVal = error ??
                `Required is ${requiredControlName} when having ${controlToCheckName}.`;
            setErrors(required, { required: errorVal });
            return { [errorVal]: true };
        }
    };
};
/**
 * @description
 * Assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has a value.
 *
 * @param {string}                    - control name to receive the required error
 * @param {string}                    - control name who's value needs to be checked
 * @param {string}                    - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
const requiredIfNot = (requiredControlName, controlToCheckName, error) => {
    return (control) => {
        const required = control?.get(requiredControlName);
        const toCheck = control?.get(controlToCheckName);
        if (required?.value || toCheck?.value) {
            removeErrors(required, ["required"]);
            return null;
        }
        else {
            const errorVal = error ??
                `Required is ${requiredControlName} when not having ${controlToCheckName}.`;
            setErrors(required, { required: errorVal });
            return { [errorVal]: true };
        }
    };
};
/**
 * @description
 * Assigns a required error to both controls who's names are specified if nether one
 * has a value.
 *
 * @param {string}                    - name of the first control
 * @param {string}                    - name of the second control
 * @param {string}                    - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
const requiredEther = (requiredControlName, controlToCheckName, error) => {
    return (control) => {
        const required = control?.get(requiredControlName);
        const toCheck = control?.get(controlToCheckName);
        if (required?.value || toCheck?.value) {
            removeErrors(required, ["required"]);
            removeErrors(toCheck, ["required"]);
            return null;
        }
        else {
            const errorVal = error ??
                `Required either ${requiredControlName} or ${controlToCheckName}.`;
            setErrors(required, { required: errorVal });
            setErrors(toCheck, { required: errorVal });
            return { [errorVal]: true };
        }
    };
};

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
// Checks id an input in a format of Street number Street Name, City, State ZIP code
const address = /^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/;
// Checks for date format YYYY-MM-dd
const dateYYYY_MM_DD = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
// Checks for date format  dd-MM-YYYY or dd.MM.YYYY or dd/MM/YYYY
// with check for leap year
const dateDD_MM_YYYY = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
// Checks if input is an email
const email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// Checks if input is in a IPv4 format
const IPAddressV4 = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
// Checks if input is in a IPv6 format
const IPAddressV6 = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/;
// Checks if input is in a IPv4 or IPv6 format
const IPAddressV4AndV6 = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;
// Checks if an input consists of letters only
const lettersOnly = /^[A-Za-z]+$/;
// Checks if the input consists of letters, periods, hyphens and spaces
const lettersPeriodsHyphensAndSpaces = /^[a-zA-Z\s.-]+$/;
// Checks if input contains any special characters
const noSpecial = /^[A-Za-z0-9 ]+$/;
// Checks if an input consists of numbers only
const numbersOnly = /^\d+$/;
// Checks if input is in passport format
const passport = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/;
// Checks if input consist of at least 1 lowercase letter, 1 uppercase letter,
// 1 number, 1 special character and has length of at least 8 characters
const passwordStrength = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
// Checks for a (000) 000 0000 phone format
const phoneNumber = /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
// Checks for a single space character
const singleSpace = /[\s]/;
// Restrict only spaces, spaces at the beginning and end of the field
const spaceRestriction = /^\S$|^\S[\s\S]*\S$/;
// Checks if input is in an Social Security Number format
const ssn = /^((?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4})|((?!219 09 9999|078 05 1120)(?!666|000|9\d{2})\d{3} (?!00)\d{2} (?!0{4})\d{4})|((?!219099999|078051120)(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4})$/;
// Checks for Time Format HH:MM 12-hour with optional leading 0
const timeHH_MM_12 = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/;
// Checks for Time Format HH:MM 24-hour with optional leading 0
const timeHH_MM_24 = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
// Checks for Time Format HH:MM:SS 24-hour
const timeHH_MM_SS_24 = /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/;
// Checks if input is a url
const url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
// Checks of a zip code in formats 00000 or 00000-0000
const zipCode = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
const prepareToCompare = (date, bufferYears) => {
    if (date) {
        const p_Date = new Date(date);
        const year = p_Date.getFullYear() + (bufferYears ?? 0);
        const month = p_Date.getMonth() + 1;
        const day = p_Date.getDate();
        return Number.parseInt(`${year}${month.toString().replace.length > 1 ? month : '0' + month}${day.toString().length > 1 ? day : '0' + day}`);
    }
    else {
        return 0;
    }
};
const compareDates = (date1, date2, operation = '===') => {
    return compare(date1, date2, operation);
};
const compare = (date1, date2, comparison) => {
    const operations = {
        '<': (a, b) => prepareToCompare(a) < prepareToCompare(b),
        '>': (a, b) => prepareToCompare(a) > prepareToCompare(b),
        '==': (a, b) => prepareToCompare(a) == prepareToCompare(b),
        '===': (a, b) => prepareToCompare(a) === prepareToCompare(b),
        '<=': (a, b) => prepareToCompare(a) <= prepareToCompare(b),
        '>=': (a, b) => prepareToCompare(a) >= prepareToCompare(b),
    };
    return operations[comparison](date1, date2);
};

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @description
 * Preforms a RegEx check on value in the given FromControl / AbstractControl
 *
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const regexpValidator = (regexp, errorName, error) => (control) => {
    error = error ?? "This control did not match a given regular expression.";
    const errors = {
        [errorName ?? "regexpValidator"]: error,
    };
    return !control.value || regexp.test(control.value) ? null : errors;
};
/**
 * @description
 * Preforms a RegEx check on value in the given FromControl / AbstractControl
 *
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const regexpNotValidator = (regexp, errorName, error) => (control) => {
    error = error ?? "This control matched a given regular expression.";
    const errors = {
        [errorName ?? "regexpNotValidator"]: error,
    };
    return !control.value || !regexp.test(control.value) ? null : errors;
};
/**
 * @description
 * Checks if the date in the given FromControl / AbstractControl is earlier then
 * the value in the specified FromControl / AbstractControl
 *
 * @param {AbstractControl}           - AbstractControl to preform the check against
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const earlierThenValidator = (date, errorName, error) => (control) => {
    error = error ?? `This control must have a value earlier then ${date}.`;
    const errors = { [errorName ?? "earlierThen"]: error };
    return prepareToCompare(control?.value) < prepareToCompare(date)
        ? null
        : errors;
};
/**
 * @description
 * Checks if the date in the given FromControl / AbstractControl is greater then
 * the value in the specified FromControl / AbstractControl
 *
 * @param {AbstractControl}           - AbstractControl to preform the check against
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const laterThenValidator = (date, errorName, error) => (control) => {
    error = error ?? `This control must have a value later then ${date}.`;
    const errors = { [errorName ?? "laterThen"]: error };
    return prepareToCompare(control?.value) > prepareToCompare(date)
        ? null
        : errors;
};
/**
 * @description
 * Compares the date values of the given FromControl / AbstractControl and
 * specified FromControl / AbstractControl
 *
 * @param {string}                    - name of the filed to compare against
 * @param {ComparisonOperations}      - comparison to preform
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const compareToValidator = (filedName, comparison, errorName, error) => (control) => {
    const date = control.parent?.get(filedName)?.value;
    if (date) {
        error = error ?? `Value comparison with ${date} failed.`;
        const errors = {
            [errorName ?? "dateComparison"]: error,
        };
        return control.value && compareDates(control.value, date, comparison)
            ? null
            : errors;
    }
    return null;
};
/**
 * @description
 * Returns a validation error if a condition is met
 *
 * @param {Function | boolean}        - conditional function or a boolean value
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const requiredWhenValidator = (conditional, errorName, error) => (control) => {
    error = error ?? "This control has a conditional set on it.";
    const errors = { [errorName ?? "requiredWhen"]: error };
    const outcome = typeof conditional === "function" ? conditional() : conditional;
    return !control.value && outcome ? errors : null;
};
/**
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has no value
 * and specified FromControl / AbstractControl has it
 *
 * @param {string}                    - name of the FromControl / AbstractControl to link to
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const linkToValidator = (linkTo, errorName, error) => (control) => {
    error = error ?? `This control has a link to ${linkTo}.`;
    const errors = { [errorName ?? "linkTo"]: error };
    const linkedTo = control.parent?.get(linkTo);
    return !control?.value && !!linkedTo?.value ? errors : null;
};
/**
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has a value
 * and specified FromControl / AbstractControl does not
 *
 * @param {string}                    - name of the FromControl / AbstractControl
 *                                      which a given FromControl / AbstractControl is linked to
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const linkedToValidator = (linkedTo, errorName, error) => (control) => {
    error = error ?? `This control is linked to ${linkedTo}.`;
    const errors = { [errorName ?? "linkTo"]: error };
    const link = control.parent?.get(linkedTo);
    return !!control?.value && !link?.value ? errors : null;
};

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a proper address format
 * (Street number Street Name, City, State ZIP code)
 * Example: 3344 W Alameda Avenue, Lakewood, CO 80222
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const addressValidator = (errorName = "address", error = "Please input a value in a format of: Street number Street Name, City, State ZIP code.") => regexpValidator(address, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl consists of only
 * alphabetic characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const alphabetOnlyValidator = (errorName = "alphabetOnly", error = "Only alphabetic characters are allowed.") => regexpValidator(lettersOnly, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: dd-MM-YYYY, dd.MM.YYYY or dd/MM/YYYY.
 *
 * @param {string}                    - optional parameter representing error name
 * @param { string}                   - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const dateDD_MM_YYYYValidator = (errorName = "dateDD_MM_YYYY", error = "Please input a value one of the following formats: dd-MM-YYYY or dd.MM.YYYY or dd/MM/YYYY.") => regexpValidator(dateDD_MM_YYYY, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * YYYY-MM-dd.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const dateYYYY_MM_DDValidator = (errorName = "dateYYYY_MM_DD", error = "Please input a value in a format: YYYY-MM-dd.") => regexpValidator(dateYYYY_MM_DD, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * local-part@domain.com.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const emailValidator = (errorName = "email", error = "Please input a value in a format: local-part@domain.com.") => regexpValidator(email, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: x.x.x.x or y:y:y:y:y:y:y:y.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const ipAddressValidator = (errorName = "ipAddress", error = "Please input a value one of the following formats: x.x.x.x or y:y:y:y:y:y:y:y.") => regexpValidator(IPAddressV4AndV6, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * x.x.x.x.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const iPv4Validator = (errorName = "iPv4", error = "Please input a value in a format: x.x.x.x.") => regexpValidator(IPAddressV4, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * y:y:y:y:y:y:y:y.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const iPv6Validator = (errorName = "iPv6", error = "Please input a value in a format: y:y:y:y:y:y:y:y.") => regexpValidator(IPAddressV6, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl consists of only
 * numeric characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const numericsOnlyValidator = (errorName = "numericsOnly", error = "Only numeric characters are allowed.") => regexpValidator(numbersOnly, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl has any special characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const noSpecialsValidator = (errorName = "noSpecials", error = "No special characters are allowed.") => regexpValidator(noSpecial, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a proper passport format
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const passportValidator = (errorName = "passport", error = "Incorrect passport format.") => regexpValidator(passport, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a strong password format
 * (Has at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and has
 * length of at least 8 characters).
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const passwordValidator = (errorName = "password", error = "The value has to contain at least 1 lowercase letter, 1 uppercase letter, 1 special character and has a length of 8.") => regexpValidator(passwordStrength, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * (000) 000 0000.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const phoneNumberValidator = (errorName = "phoneNumber", error = "Please input a value in a format: (000) 000 0000.") => regexpValidator(phoneNumber, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl consists of a single space
 * character.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const singleSpaceValidator = (errorName = "singleSpace", error = "A single space character is not allowed.") => regexpNotValidator(singleSpace, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl starts or ends with a
 * space character.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const spaceRestrictionValidator = (errorName = "spaceRestriction", error = "Value can not start or end with a space character.") => regexpValidator(spaceRestriction, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: AAA-GGG-SSSS or AAAGGGSSSS.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const ssnValidator = (errorName = "ssn", error = "Please input a value one of the following formats: AAA-GGG-SSSS or AAAGGGSSSS.") => regexpValidator(ssn, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM 12-hour with optional leading 0.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const timeHH_MM_12Validator = (errorName = "timeHH_MM_12", error = "Please input a value in a HH:MM 12-hour format.") => regexpValidator(timeHH_MM_12, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM 24-hour with optional leading 0.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const timeHH_MM_24Validator = (errorName = "timeHH_MM_24", error = "Please input a value in a HH:MM 24-hour format.") => regexpValidator(timeHH_MM_24, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM:SS 24-hour.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const timeHH_MM_SS_24Validator = (errorName = "timeHH_MM_SS_24", error = "Please input a value in a HH:MM:SS 24-hour format.") => regexpValidator(timeHH_MM_SS_24, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * correct url format.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const urlValidator = (errorName = "url", error = "Improper URL format.") => regexpValidator(url, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: 00000 or 00000-0000.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const zipCodeValidator = (errorName = "zipCode", error = "Improper zip code format.") => regexpValidator(zipCode, errorName, error);

/**
 * @description
 * A Directive that preforms a RegEx check on value in the given
 * FromControl / AbstractControl
 *
 * Has an input in which you specify the regular expression
 * and optionally you can give it a custom name and a custom
 * error content / message.
 *
 * @example
 *  <input
 *    type="text"
 *    name="regexp"
 *    id="regexp"
 *    formControlName="regexp"
 *   [regexpValidation]="{
 *      regExp: /(s|regexp)/,
 *      errorName: 'regexpCheck',
 *      error: 'Failed regexp check.'
 *   }"
 * />
 */
class RegExpValidatorDirective {
    validate(control) {
        const error = this.value.error ??
            "This control did not match a given regular expression.";
        const errors = {
            [this.value.errorName ?? "regexpValidation"]: error,
        };
        return !this.value.regExp ||
            !control.value ||
            this.value.regExp.test(control.value)
            ? null
            : errors;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RegExpValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RegExpValidatorDirective, isStandalone: true, selector: "[regexpValidation]", inputs: { value: ["regexpValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RegExpValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RegExpValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[regexpValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: RegExpValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["regexpValidation"]
            }] } });
/**
 * @description
 * A Directive that preforms a RegEx check on value in the given
 * FromControl / AbstractControl and returns an error if regex
 * found a match
 *
 * Has an input in which you specify the regular expression
 * and optionally you can give it a custom name and a custom
 * error content / message.
 *
 * @example
 *  <input
 *    type="text"
 *    name="regexpNot"
 *    id="regexpNot"
 *    formControlName="regexpNot"
 *   [regexpNotValidation]="{
 *      regExp: /(s|regexp)/,
 *      errorName: 'regexpNotCheck',
 *      error: 'Failed regexpNot check.'
 *   }"
 * />
 */
class RegExpNotValidatorDirective {
    validate(control) {
        const error = this.value.error ?? "This control matched a given regular expression.";
        const errors = {
            [this.value.errorName ?? "regexpNotValidation"]: error,
        };
        return !this.value.regExp ||
            !control.value ||
            !this.value.regExp.test(control.value)
            ? null
            : errors;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RegExpNotValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RegExpNotValidatorDirective, isStandalone: true, selector: "[regexpNotValidation]", inputs: { value: ["regexpNotValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RegExpNotValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RegExpNotValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[regexpNotValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: RegExpNotValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["regexpNotValidation"]
            }] } });
/**
 * @description
 * A Directive that preforms a date comparison between a specified date
 * and a date in the given input and returns an error if the date in
 * the given input is later then the specified one.
 *
 * Has an input in which you specify the date to compare to
 * and optionally you can give it a custom name and a custom
 * error content / message.
 *
 * @example
 *  <input
 *    type="text"
 *    name="earlierThen"
 *    id="earlierThen"
 *    formControlName="earlierThen"
 *   [earlierThenValidation]="{
 *      date: date,                              -- a variable of type Date
 *      errorName: 'earlierThen',
 *      error: 'The date is not earlier then the specified one.'
 *   }"
 * />
 */
class EarlierThenValidatorDirective {
    validate(control) {
        const error = this.value.error ??
            `This control must have a value earlier then ${this.value.date}.`;
        const errors = {
            [this.value.errorName ?? "earlierThenValidation"]: error,
        };
        return !this.value.date ||
            prepareToCompare(control?.value) < prepareToCompare(this.value.date)
            ? null
            : errors;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EarlierThenValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: EarlierThenValidatorDirective, isStandalone: true, selector: "[earlierThenValidation]", inputs: { value: ["earlierThenValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: EarlierThenValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EarlierThenValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[earlierThenValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: EarlierThenValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["earlierThenValidation"]
            }] } });
/**
 * @description
 * A Directive that preforms a date comparison between a specified date
 * and a date in the given input and returns an error if the date in
 * the given input is earlier then the specified one.
 *
 * Has an input in which you specify the date to compare to
 * and optionally you can give it a custom name and a custom
 * error content / message.
 *
 * @example
 *  <input
 *    type="text"
 *    name="laterThen"
 *    id="laterThen"
 *    formControlName="laterThen"
 *   [laterThenValidation]="{
 *      date: date,                              -- a variable of type Date
 *      errorName: 'laterThen',
 *      error: 'The date is not later then the specified one.'
 *   }"
 * />
 */
class LaterThenValidatorDirective {
    validate(control) {
        const error = this.value.error ??
            `This control must have a value later then ${this.value.date}.`;
        const errors = {
            [this.value.errorName ?? "laterThenValidation"]: error,
        };
        return !this.value.date ||
            prepareToCompare(control?.value) > prepareToCompare(this.value.date)
            ? null
            : errors;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LaterThenValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: LaterThenValidatorDirective, isStandalone: true, selector: "[laterThenValidation]", inputs: { value: ["laterThenValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: LaterThenValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LaterThenValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[laterThenValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: LaterThenValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["laterThenValidation"]
            }] } });
/**
 * @description
 * A Directive that preforms a date comparison between a specified date
 * and a date in the given input and returns an error if chosen comparison
 * fails.
 *
 * Has an input in which you specify the date to compare to,
 * comparison to preform and optionally you can give it a custom name
 * and a custom error content / message.
 *
 * Available comparisons are: '<' , '>' , '==' , '===' , '<=' , '>='.
 *
 * @example
 *  <input
 *    type="text"
 *    name="compareTo"
 *    id="compareTo"
 *    formControlName="compareTo"
 *   [compareToValidation]="{
 *      date: date,                              -- a variable of type Date
 *      comparison: '==='
 *      errorName: 'compareTo',
 *      error: 'The dates are not the same.'
 *   }"
 * />
 */
class CompareToValidatorDirective {
    validate(control) {
        const error = this.value.error ?? `Value comparison with ${this.value.date} failed.`;
        const errors = {
            [this.value.errorName ?? "compareToValidation"]: error,
        };
        return !this.value.date ||
            !control.value ||
            compareDates(control.value, this.value.date, this.value.comparison)
            ? null
            : errors;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CompareToValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: CompareToValidatorDirective, isStandalone: true, selector: "[compareToValidation]", inputs: { value: ["compareToValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: CompareToValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CompareToValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[compareToValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: CompareToValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["compareToValidation"]
            }] } });
/**
 * @description
 * A Directive that preforms a conditional check and if the condition
 * passes it will return an error.
 *
 * Has an input in which you specify the condition that is to be checked
 * and optionally you can give it a custom name and a custom error
 * content / message.
 *
 * @example
 *  <input
 *    type="text"
 *    name="requiredWhen"
 *    id="requiredWhen"
 *    formControlName="requiredWhen"
 *   [requiredWhenValidation]="{
 *      conditional: isTrue,                     - this can be ether a boolean
 *      errorName: 'requiredWhen',                     or a function that returns a boolean
 *      error: 'The condition is true.'
 *   }"
 * />
 *
 * NOTE: It is not recommended to pass a function to be executed in the template,
 * as this function will be executed every change detection cycle.
 */
class RequiredWhenValidatorDirective {
    validate(control) {
        const error = this.value.error ?? "This control has a conditional set on it.";
        const errors = {
            [this.value.errorName ?? "requiredWhen"]: error,
        };
        const outcome = typeof this.value.conditional === "function"
            ? this.value.conditional()
            : this.value.conditional;
        return !control.value && outcome ? errors : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredWhenValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RequiredWhenValidatorDirective, isStandalone: true, selector: "[requiredWhenValidation]", inputs: { value: ["requiredWhenValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RequiredWhenValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredWhenValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[requiredWhenValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: RequiredWhenValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["requiredWhenValidation"]
            }] } });
/**
 * @description
 * A Directive that preforms a check if the specified FromControl / AbstractControl
 * has a value and a given input does not.
 *
 * Has an input in which you the name of the FromControl / AbstractControl to link
 * to and optionally you can give it a custom name and a custom error
 * content / message.
 *
 * @example
 *  <input
 *    type="text"
 *    name="linkTo"
 *    id="linkTo"
 *    formControlName="linkTo"
 *   [linkToValidation]="{
 *      link: 'linkedTo,                      - a name of a form control we want
 *      errorName: 'linkTo',                     to link the input to
 *      error: 'The linked input has a value but this one does not'
 *   }"
 * />
 */
class LinkToValidatorDirective {
    validate(control) {
        const error = this.value.error ?? `This control has a link to ${this.value.link}.`;
        const errors = {
            [this.value.errorName ?? "linkToValidation"]: error,
        };
        const linkedTo = control.parent?.get(this.value.link);
        return !control?.value && !!linkedTo?.value ? errors : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LinkToValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: LinkToValidatorDirective, isStandalone: true, selector: "[linkToValidation]", inputs: { value: ["linkToValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: LinkToValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LinkToValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[linkToValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: LinkToValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["linkToValidation"]
            }] } });
/**
 * @description
 * A Directive that preforms a check if the specified FromControl / AbstractControl
 * does not have a value and a given input does.
 *
 * Has an input in which you the name of the FromControl / AbstractControl to link
 * to and optionally you can give it a custom name and a custom error
 * content / message.
 *
 * @example
 *  <input
 *    type="text"
 *    name="linkedTo"
 *    id="linkedTo"
 *    formControlName="linkedTo"
 *   [linkedToValidation]="{
 *      link: 'linkTo,                      - a name of a form control we want
 *      errorName: 'linkedTo',                     to link the input to
 *      error: 'The linked input does not have a value but this one does.'
 *   }"
 * />
 */
class LinkedToValidatorDirective {
    validate(control) {
        const error = this.value.error ?? `This control is linked to ${this.value.link}.`;
        const errors = {
            [this.value.errorName ?? "linkedToValidation"]: error,
        };
        const link = control.parent?.get(this.value.link);
        return !!control?.value && !link?.value ? errors : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LinkedToValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: LinkedToValidatorDirective, isStandalone: true, selector: "[linkedToValidation]", inputs: { value: ["linkedToValidation", "value"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: LinkedToValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LinkedToValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[linkedToValidation]",
                    standalone: true,
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: LinkedToValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ["linkedToValidation"]
            }] } });

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @description
 * An decorator which handles the input value in directives which extend the
 * {@link RegExpValidatorDirective} and have an expected input in the form of
 * {@link RegExpValidationInput}.
 *
 * It will populate the error and the errorName values passed to it if it doesn't find
 * them in the input value.
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - parameter representing error name
 * @param {string}                    - parameter representing error value
 */
function RegExpValidatorInput(regexp, errorName, error) {
    return function (target, propertyKey) {
        let original = target[propertyKey];
        let newData = {
            ...original
        };
        const getter = function () {
            newData = {
                regExp: regexp,
                errorName: newData.errorName ?? errorName,
                error: newData.error ?? error
            };
            return newData;
        };
        const setter = function (val) {
            newData = val;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}

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
class AddressValidatorDirective extends RegExpValidatorDirective {
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
class AlphabetOnlyValidatorDirective extends RegExpValidatorDirective {
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
class DateDD_MM_YYYYValidatorDirective extends RegExpValidatorDirective {
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
class DateYYYY_MM_DDValidatorDirective extends RegExpValidatorDirective {
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
class EmailValidatorDirective extends RegExpValidatorDirective {
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
class IPAddressValidatorDirective extends RegExpValidatorDirective {
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
class IPv4ValidatorDirective extends RegExpValidatorDirective {
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
class IPv6ValidatorDirective extends RegExpValidatorDirective {
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
class NumericsOnlyValidatorDirective extends RegExpValidatorDirective {
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
class NoSpecialsValidatorDirective extends RegExpValidatorDirective {
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
class PassportValidatorDirective extends RegExpValidatorDirective {
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
class PasswordValidatorDirective extends RegExpValidatorDirective {
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
class PhoneNumberValidatorDirective extends RegExpValidatorDirective {
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
class SingleSpaceValidatorDirective extends RegExpNotValidatorDirective {
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
class SpaceRestrictionValidatorDirective extends RegExpValidatorDirective {
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
class SSNValidatorDirective extends RegExpValidatorDirective {
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
class TimeHH_MM_12ValidatorDirective extends RegExpValidatorDirective {
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
class TimeHH_MM_24ValidatorDirective extends RegExpValidatorDirective {
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
class TimeHH_MM_SS_24ValidatorDirective extends RegExpValidatorDirective {
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
class UrlValidatorDirective extends RegExpValidatorDirective {
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
class ZipCodeValidatorDirective extends RegExpValidatorDirective {
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

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 *
 * Public API Surface of ngx-validator-pack
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AddressValidatorDirective, AlphabetOnlyValidatorDirective, CompareToValidatorDirective, DateDD_MM_YYYYValidatorDirective, DateYYYY_MM_DDValidatorDirective, EarlierThenValidatorDirective, EmailValidatorDirective, IPAddressValidatorDirective, IPv4ValidatorDirective, IPv6ValidatorDirective, LaterThenValidatorDirective, LinkToValidatorDirective, LinkedToValidatorDirective, NoSpecialsValidatorDirective, NumericsOnlyValidatorDirective, PassportValidatorDirective, PasswordValidatorDirective, PhoneNumberValidatorDirective, RegExpNotValidatorDirective, RegExpValidatorDirective, RequiredWhenValidatorDirective, SSNValidatorDirective, ShowValidationDirective, SingleSpaceValidatorDirective, SpaceRestrictionValidatorDirective, TimeHH_MM_12ValidatorDirective, TimeHH_MM_24ValidatorDirective, TimeHH_MM_SS_24ValidatorDirective, UrlValidatorDirective, ZipCodeValidatorDirective, addressValidator, alphabetOnlyValidator, compareToValidator, dateDD_MM_YYYYValidator, dateYYYY_MM_DDValidator, earlierThenValidator, emailValidator, iPv4Validator, iPv6Validator, ipAddressValidator, laterThenValidator, linkToValidator, linkedToValidator, noSpecialsValidator, numericsOnlyValidator, passportValidator, passwordValidator, phoneNumberValidator, regexpNotValidator, regexpValidator, requiredEther, requiredIf, requiredIfNot, requiredWhenValidator, singleSpaceValidator, spaceRestrictionValidator, ssnValidator, timeHH_MM_12Validator, timeHH_MM_24Validator, timeHH_MM_SS_24Validator, urlValidator, zipCodeValidator };
//# sourceMappingURL=dynamize-ngx-validator-pack.mjs.map
