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
 * @publicApi
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
 * @publicApi
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
            this.hideError();
            if (status === "INVALID") {
                if (!this.span) {
                    this.showError(formControl.errors);
                }
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
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @internal
 * @description
 * Sets an error on a given control
 *
 * @param control                     - FromControl / AbstractControl to set the error to
 * @param error                       - error content { [key: string]: unknown }
 */
const setErrors = (control, error) => {
    control.setErrors({ ...control.errors, ...error });
};
/**
 * @internal
 * @description
 * Removes errors on a given control
 *
 * @param control                     - FromControl / AbstractControl from which
 *                                      to remove error
 * @param keys                        - array of error names
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
 * @internal
 * @description
 * A validation function which assigns a required error to the controls with a name that
 * was specified in the requiredControlName filed of the config parameter if the control
 * with a name specified in the controlToCheckName parameter has no value.
 *
 * @param control                      - form group
 * @param config                       - config parameter, consists of a
 *                                       required field name, a field name to check and optional
 *                                       error string
 * @returns {ValidationErrors | null}   - Validation error
 */
const requiredIfValidation = (control, config) => {
    const required = control?.get(config.required);
    const toCheck = control?.get(config.check);
    if (required?.value || !toCheck?.value) {
        removeErrors(required, ["required"]);
        return null;
    }
    else {
        const errorVal = config.error ??
            `Required is ${config.required} when having ${config.check}.`;
        setErrors(required, { required: errorVal });
        return { [errorVal]: true };
    }
};
/**
 * @internal
 * @description
 * A validation function which assigns a required error to the controls with a name that
 * was specified in the requiredControlName field of the config parameter if the control
 * with a name specified in the controlToCheckName parameter has a value.
 *
 * @param control                      - form group
 * @param config                       - config parameter, consists of a
 *                                       required field name, a field name to check and optional
 *                                       error string
 * @returns {ValidationErrors | null}   - Validation error
 */
const requiredIfNotValidation = (control, config) => {
    const required = control?.get(config.required);
    const toCheck = control?.get(config.check);
    if (required?.value || toCheck?.value) {
        removeErrors(required, ["required"]);
        return null;
    }
    else {
        const errorVal = config.error ??
            `Required is ${config.required} when not having ${config.check}.`;
        setErrors(required, { required: errorVal });
        return { [errorVal]: true };
    }
};
/**
 * @internal
 * @description
 * A validation function which assigns a required error to the controls with a name that
 * was specified in the requiredControlName field of the config parameter nether that control
 * or the control with a name specified in the controlToCheckName parameter has a value.
 *
 * @param control                      - form group
 * @param config                       - config parameter, consists of a
 *                                       required field name, a field name to check and optional
 *                                       error string
 * @returns {ValidationErrors | null}   - Validation error
 */
const requiredEtherValidation = (control, config) => {
    const required = control?.get(config.required);
    const toCheck = control?.get(config.check);
    if (required?.value || toCheck?.value) {
        removeErrors(required, ["required"]);
        removeErrors(toCheck, ["required"]);
        return null;
    }
    else {
        const errorVal = config.error ??
            `Required either ${config.required} or ${config.check}.`;
        setErrors(required, { required: errorVal });
        setErrors(toCheck, { required: errorVal });
        return { [errorVal]: true };
    }
};

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @publicApi
 * @description
 * Assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has no value.
 *
 * @param required                    - control name to receive the required error
 * @param check                       - control name who's value needs to be checked
 * @param error                       - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
const requiredIf = (required, check, error) => {
    return (control) => {
        return requiredIfValidation(control, { required, check, error });
    };
};
/**
 * @publicApi
 * @description
 * Assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has a value.
 *
 * @param required                    - control name to receive the required error
 * @param check                       - control name who's value needs to be checked
 * @param error                       - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
const requiredIfNot = (required, check, error) => {
    return (control) => {
        return requiredIfNotValidation(control, { required, check, error });
    };
};
/**
 * @publicApi
 * @description
 * Assigns a required error to both controls who's names are specified if nether one
 * has a value.
 *
 * @param required                    - name of the first control
 * @param check                       - name of the second control
 * @param error                       - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
const requiredEther = (required, check, error) => {
    return (control) => {
        return requiredEtherValidation(control, { required, check, error });
    };
};

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
// @internal Checks id an input in a format of Street number Street Name, City, State ZIP code
const address = /^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/;
// @internal Checks for date format YYYY-MM-dd
const dateYYYY_MM_DD = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
// Checks for date format  dd-MM-YYYY or dd.MM.YYYY or dd/MM/YYYY
// @internal with check for leap year
const dateDD_MM_YYYY = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
// @internal Checks if input is an email
const email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// @internal Checks if input is in a IPv4 format
const IPAddressV4 = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
// @internal Checks if input is in a IPv6 format
const IPAddressV6 = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/;
// @internal Checks if input is in a IPv4 or IPv6 format
const IPAddressV4AndV6 = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;
// @internal Checks if an input consists of letters only
const lettersOnly = /^[A-Za-z]+$/;
// @internal Checks if an input has letters 
const hasLetters = /[a-zA-Z]/;
// @internal Checks if an input has lowercase letters 
const hasLowercase = /[a-z]/;
// @internal Checks if an input has uppercase letters 
const hasUppercase = /[A-Z]/;
// @internal Checks if the input consists of letters, periods, hyphens and spaces
const lettersPeriodsHyphensAndSpaces = /^[a-zA-Z\s.-]+$/;
// @internal Checks if input contains < or >;
const greaterOrLessThen = /(?=.*[<>])/;
// @internal Checks if input contains any special characters
const noSpecial = /^[A-Za-z0-9 ]+$/;
// @internal Checks if an input consists of numbers only
const numbersOnly = /^\d+$/;
// @internal Checks if an input has numbers
const hasNumbers = /\d/;
// @internal Checks if input is in passport format
const passport = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/;
// Checks if input consist of at least 1 lowercase letter, 1 uppercase letter,
// @internal 1 number, 1 special character and has length of at least 8 characters
const passwordStrength = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
// @internal Checks for a (000) 000 0000 phone format
const phoneNumber = /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
// @internal Checks for a single space character
const singleSpace = /[\s]/;
// @internal Restrict only spaces, spaces at the beginning and end of the field
const spaceRestriction = /^\S$|^\S[\s\S]*\S$/;
// @internal Checks if input is in an Social Security Number format
const ssn = /^((?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4})|((?!219 09 9999|078 05 1120)(?!666|000|9\d{2})\d{3} (?!00)\d{2} (?!0{4})\d{4})|((?!219099999|078051120)(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4})$/;
// @internal Checks for Time Format HH:MM 12-hour with optional leading 0
const timeHH_MM_12 = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/;
// @internal Checks for Time Format HH:MM 24-hour with optional leading 0
const timeHH_MM_24 = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
// @internal Checks for Time Format HH:MM:SS 24-hour
const timeHH_MM_SS_24 = /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/;
// @internal Checks if input is a url
const url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
// @internal Checks of a zip code in formats 00000 or 00000-0000
const zipCode = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @internal
 */
const compare = (num1, num2, comparison) => {
    const operations = {
        '<': (a, b) => a < b,
        '>': (a, b) => a > b,
        '==': (a, b) => a == b,
        '===': (a, b) => a === b,
        '<=': (a, b) => a <= b,
        '>=': (a, b) => a >= b,
    };
    return operations[comparison](num1, num2);
};

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @internal
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
/**
 * @publicApi
 */
const compareDates = (date1, date2, operation = '===') => {
    return compare(prepareToCompare(date1), prepareToCompare(date2), operation);
};

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
const test = (regexp, value, logic) => {
    const operations = {
        '!': () => !regexp.test(value),
        '!!': () => regexp.test(value),
        'match': () => !!regexp.exec(value)
    };
    return operations[logic]();
};

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
function regExpBase(control, config, logic) {
    const errors = {
        [config.errorName ?? "regexp"]: config.error,
    };
    return !control.value || test(config.regExp, control.value, logic)
        ? null
        : errors;
}

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @internal
 * @description
 * A validation function which preforms a RegEx check on value in the
 * given FromControl / AbstractControl.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       regexp to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}  - Validation error
 */
const regexpValidation = (control, config) => {
    const error = config.error ?? "This control did not match a given regular expression.";
    return regExpBase(control, { ...config, error }, "!!");
};
/**
 * @internal
 * @description
 * A validation function which preforms a RegEx check on value in the
 * given FromControl / AbstractControl.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       regexp to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}          - Validation error
 */
const regexpNotValidation = (control, config) => {
    const error = config.error ?? "This control matched a given regular expression.";
    return regExpBase(control, { ...config, error }, "!");
};
/**
 * @internal
 * @description
 * A validation function which checks if the date in the given
 * FromControl / AbstractControl is earlier then the value in the specified
 * FromControl / AbstractControl.
 *
 * @param {AbstractControl}                    - form control
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       date to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
const earlierThenValidation = (control, config) => {
    const error = config.error ??
        `This control must have a value earlier then ${config.date}.`;
    const errors = {
        [config.errorName ?? "earlierThen"]: error,
    };
    return compareDates(control.value, config.date, "<") ? null : errors;
};
/**
 * @internal
 * @description
 * A validation function which checks if the date in the given
 * FromControl / AbstractControl is greater then the value in the specified
 * FromControl / AbstractControl.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       date to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}     - Validation error
 */
const laterThenValidation = (control, config) => {
    const error = config.error ?? `This control must have a value later then ${config.date}.`;
    const errors = { [config.errorName ?? "laterThen"]: error };
    return compareDates(control.value, config.date, ">") ? null : errors;
};
/**
 * @internal
 * @description
 * A validation function which compares the date values of the given
 * FromControl / AbstractControl and specified FromControl / AbstractControl.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       field name to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
const compareToValidation = (control, config) => {
    const date = control.parent?.get(config.fieldName)?.value;
    if (date) {
        const error = config.error ?? `Value comparison with ${date} failed.`;
        const errors = {
            [config.errorName ?? "dateComparison"]: error,
        };
        return control.value && compareDates(control.value, date, config.comparison)
            ? null
            : errors;
    }
    return null;
};
/**
 * @internal
 * @description
 * A validation function which returns a validation error if a condition is met.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       conditional function or boolean to check
 *                                       and optional error and error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
const requiredWhenValidation = (control, config) => {
    const error = config.error ?? "This control has a conditional set on it.";
    const errors = {
        [config.errorName ?? "requiredWhen"]: error,
    };
    const outcome = typeof config.conditional === "function"
        ? config.conditional()
        : config.conditional;
    return !control.value && outcome ? errors : null;
};
/**
 * @internal
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl has no value and specified
 * FromControl / AbstractControl has it.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       field name to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
const linkToValidation = (control, config) => {
    const error = config.error ?? `This control has a link to ${config.link}.`;
    const errors = { [config.errorName ?? "linkTo"]: error };
    const linkedTo = control.parent?.get(config.link);
    return !control?.value && !!linkedTo?.value ? errors : null;
};
/**
 * @internal
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl has a value and specified
 * FromControl / AbstractControl does not.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       field name to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
const linkedToValidation = (control, config) => {
    const error = config.error ?? `This control is linked to ${config.link}.`;
    const errors = { [config.errorName ?? "linkTo"]: error };
    const link = control.parent?.get(config.link);
    return !!control?.value && !link?.value ? errors : null;
};
const lengthValidation = (control, config) => {
    const error = config.error ?? `The minimum required length is ${config.length}.`;
    const errors = { [config.errorName ?? "length"]: error };
    return !!control?.value &&
        compare(control?.value?.length, config.length, config.comparison ?? "<")
        ? errors
        : null;
};
const sequentialValidation = (control, sequence) => {
    let validationError;
    const hasError = sequence.some((validation) => {
        const error = validation.validationFun(control, {
            ...validation.validationFunConfig,
        });
        if (error) {
            validationError = error;
            return true;
        }
        return false;
    });
    return hasError ? validationError : null;
};

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a proper address format
 * (Street number Street Name, City, State ZIP code)
 * Example: 3344 W Alameda Avenue, Lakewood, CO 80222
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const addressValidator = (errorName = "address", error = "Please input a value in a format of: Street number Street Name, City, State ZIP code.") => (control) => {
    return regexpValidation(control, { regExp: address, error, errorName });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl consists of only
 * alphabetic characters.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const alphabetOnlyValidator = (errorName = "alphabetOnly", error = "Only alphabetic characters are allowed.") => (control) => {
    return regexpValidation(control, {
        regExp: lettersOnly,
        error,
        errorName,
    });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: dd-MM-YYYY, dd.MM.YYYY or dd/MM/YYYY.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const dateDD_MM_YYYYValidator = (errorName = "dateDD_MM_YYYY", error = "Please input a value one of the following formats: dd-MM-YYYY or dd.MM.YYYY or dd/MM/YYYY.") => (control) => {
    return regexpValidation(control, {
        regExp: dateDD_MM_YYYY,
        error,
        errorName,
    });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * YYYY-MM-dd.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const dateYYYY_MM_DDValidator = (errorName = "dateYYYY_MM_DD", error = "Please input a value in a format: YYYY-MM-dd.") => (control) => {
    return regexpValidation(control, {
        regExp: dateYYYY_MM_DD,
        error,
        errorName,
    });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * local-part@domain.com.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const emailValidator = (errorName = "email", error = "Please input a value in a format: local-part@domain.com.") => (control) => {
    return regexpValidation(control, { regExp: email, error, errorName });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: x.x.x.x or y:y:y:y:y:y:y:y.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const ipAddressValidator = (errorName = "ipAddress", error = "Please input a value one of the following formats: x.x.x.x or y:y:y:y:y:y:y:y.") => (control) => {
    return regexpValidation(control, {
        regExp: IPAddressV4AndV6,
        error,
        errorName,
    });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * x.x.x.x.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const iPv4Validator = (errorName = "iPv4", error = "Please input a value in a format: x.x.x.x.") => (control) => {
    return regexpValidation(control, {
        regExp: IPAddressV4,
        error,
        errorName,
    });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * y:y:y:y:y:y:y:y.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const iPv6Validator = (errorName = "iPv6", error = "Please input a value in a format: y:y:y:y:y:y:y:y.") => (control) => {
    return regexpValidation(control, {
        regExp: IPAddressV6,
        error,
        errorName,
    });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl consists of only
 * numeric characters.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const numericsOnlyValidator = (errorName = "numericsOnly", error = "Only numeric characters are allowed.") => (control) => {
    return regexpValidation(control, {
        regExp: numbersOnly,
        error,
        errorName,
    });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl has any special characters.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const noSpecialsValidator = (errorName = "noSpecials", error = "No special characters are allowed.") => (control) => {
    return regexpValidation(control, {
        regExp: noSpecial,
        error,
        errorName,
    });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a proper passport format
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const passportValidator = (errorName = "passport", error = "Incorrect passport format.") => (control) => {
    return regexpValidation(control, {
        regExp: passport,
        error,
        errorName,
    });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a strong password format
 * (Has at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and has
 * length of at least 8 characters).
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const passwordValidator = (errorName = "password", error = "The value has to contain at least 1 lowercase letter, 1 uppercase letter, 1 special character and has a length of 8.") => (control) => {
    return regexpValidation(control, {
        regExp: passwordStrength,
        error,
        errorName,
    });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * (000) 000 0000.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const phoneNumberValidator = (errorName = "phoneNumber", error = "Please input a value in a format: (000) 000 0000.") => (control) => {
    return regexpValidation(control, {
        regExp: phoneNumber,
        error,
        errorName,
    });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl consists of a single space
 * character.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const singleSpaceValidator = (errorName = "singleSpace", error = "A single space character is not allowed.") => (control) => {
    return regexpValidation(control, {
        regExp: singleSpace,
        error,
        errorName,
    });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl starts or ends with a
 * space character.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const spaceRestrictionValidator = (errorName = "spaceRestriction", error = "Value can not start or end with a space character.") => (control) => {
    return regexpValidation(control, {
        regExp: spaceRestriction,
        error,
        errorName,
    });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: AAA-GGG-SSSS or AAAGGGSSSS.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const ssnValidator = (errorName = "ssn", error = "Please input a value one of the following formats: AAA-GGG-SSSS or AAAGGGSSSS.") => (control) => {
    return regexpValidation(control, { regExp: ssn, error, errorName });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM 12-hour with optional leading 0.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const timeHH_MM_12Validator = (errorName = "timeHH_MM_12", error = "Please input a value in a HH:MM 12-hour format.") => (control) => {
    return regexpValidation(control, {
        regExp: timeHH_MM_12,
        error,
        errorName,
    });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM 24-hour with optional leading 0.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const timeHH_MM_24Validator = (errorName = "timeHH_MM_24", error = "Please input a value in a HH:MM 24-hour format.") => (control) => {
    return regexpValidation(control, {
        regExp: timeHH_MM_24,
        error,
        errorName,
    });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM:SS 24-hour.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const timeHH_MM_SS_24Validator = (errorName = "timeHH_MM_SS_24", error = "Please input a value in a HH:MM:SS 24-hour format.") => (control) => {
    return regexpValidation(control, {
        regExp: timeHH_MM_SS_24,
        error,
        errorName,
    });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * correct url format.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const urlValidator = (errorName = "url", error = "Improper URL format.") => (control) => {
    return regexpValidation(control, { regExp: url, error, errorName });
};
/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: 00000 or 00000-0000.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const zipCodeValidator = (errorName = "zipCode", error = "Improper zip code format.") => (control) => {
    return regexpValidation(control, { regExp: zipCode, error, errorName });
};

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @publicApi
 * @description
 * Preforms a RegEx check on value in the given FromControl / AbstractControl.
 *
 * @param regExp                      - Regular expression to check
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const regexpValidator = (regExp, errorName, error) => (control) => {
    return regexpValidation(control, { regExp, error, errorName });
};
/**
 * @publicApi
 * @description
 * Preforms a RegEx check on value in the given FromControl / AbstractControl.
 *
 * @param regExp                      - Regular expression to check
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const regexpNotValidator = (regExp, errorName, error) => (control) => {
    return regexpNotValidation(control, { regExp, error, errorName });
};
/**
 * @publicApi
 * @description
 * Checks if the date in the given FromControl / AbstractControl is earlier then
 * the value in the specified FromControl / AbstractControl.
 *
 * @param date                        - Date to preform the check against
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const earlierThenValidator = (date, errorName, error) => (control) => {
    return earlierThenValidation(control, { date, error, errorName });
};
/**
 * @description
 * Checks if the date in the given FromControl / AbstractControl is greater then
 * the value in the specified FromControl / AbstractControl.
 *
 * @param date                        - Date to preform the check against
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const laterThenValidator = (date, errorName, error) => (control) => {
    return laterThenValidation(control, { date, error, errorName });
};
/**
 * @description
 * Compares the date values of the given FromControl / AbstractControl and
 * specified FromControl / AbstractControl.
 *
 * @param fieldName                   - name of the filed to compare against
 * @param comparison                  - comparison to preform
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const compareToValidator = (fieldName, comparison, errorName, error) => (control) => {
    return compareToValidation(control, {
        fieldName,
        comparison,
        error,
        errorName,
    });
};
/**
 * @description
 * Returns a validation error if a condition is met.
 *
 * @param conditional                 - conditional function or a boolean value
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const requiredWhenValidator = (conditional, errorName, error) => (control) => {
    return requiredWhenValidation(control, { conditional, error, errorName });
};
/**
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has no value
 * and specified FromControl / AbstractControl has it.
 *
 * @param link                        - name of the FromControl / AbstractControl to link to
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const linkToValidator = (link, errorName, error) => (control) => {
    return linkToValidation(control, { link, error, errorName });
};
/**
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has a value
 * and specified FromControl / AbstractControl does not.
 *
 * @param link                        - name of the FromControl / AbstractControl
 *                                      which a given FromControl / AbstractControl is linked to
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const linkedToValidator = (link, errorName, error) => (control) => {
    return linkedToValidation(control, { link, error, errorName });
};

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @publicApi
 * @description
 * A Directive that assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has no value.
 *
 * Has an input in which you specify the control which needs to receive the required error,
 * and the control which needs to be checked.
 *
 * @usageNotes
 * <form #exampleForm="ngForm"
 *   [requiredIf]="{
 *      required: 'field_name',
 *      check: 'field_name'
 *   }"
 * />
 */
class RequiredIfValidatorDirective {
    validate(control) {
        return requiredIfValidation(control, { ...this.controls });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredIfValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RequiredIfValidatorDirective, isStandalone: true, selector: "[requiredIf]", inputs: { controls: ["requiredIf", "controls"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RequiredIfValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredIfValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[requiredIf]",
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: RequiredIfValidatorDirective,
                            multi: true,
                        },
                    ],
                    standalone: true,
                }]
        }], propDecorators: { controls: [{
                type: Input,
                args: ["requiredIf"]
            }] } });
/**
 * @publicApi
 * @description
 * A Directive that assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has a value.
 *
 * Has an input in which you specify the control which needs to receive the required error,
 * and the control which needs to be checked.
 *
 * @usageNotes
 * <form #exampleForm="ngForm"
 *   [requiredIfNot]="{
 *      required: 'field_name',
 *      check: 'field_name'
 *   }"
 * />
 */
class RequiredIfNotValidatorDirective {
    validate(control) {
        return requiredIfNotValidation(control, { ...this.controls });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredIfNotValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RequiredIfNotValidatorDirective, isStandalone: true, selector: "[requiredIfNot]", inputs: { controls: ["requiredIfNot", "controls"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RequiredIfNotValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredIfNotValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[requiredIfNot]",
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: RequiredIfNotValidatorDirective,
                            multi: true,
                        },
                    ],
                    standalone: true,
                }]
        }], propDecorators: { controls: [{
                type: Input,
                args: ["requiredIfNot"]
            }] } });
/**
 * @publicApi
 * @description
 * A Directive that assigns a required error to both controls who's names are specified if nether one
 * has a value.
 *
 * Has an input in which you specify the control which needs to receive the required error,
 * and the control which needs to be checked.
 *
 * @usageNotes
 * <form #exampleForm="ngForm"
 *   [requiredEther]="{
 *      required: 'field_name',
 *      check: 'field_name'
 *   }"
 * />
 */
class RequiredEtherValidatorDirective {
    validate(control) {
        return requiredEtherValidation(control, { ...this.controls });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredEtherValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RequiredEtherValidatorDirective, isStandalone: true, selector: "[requiredEther]", inputs: { controls: ["requiredEther", "controls"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RequiredIfNotValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredEtherValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[requiredEther]",
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: RequiredIfNotValidatorDirective,
                            multi: true,
                        },
                    ],
                    standalone: true,
                }]
        }], propDecorators: { controls: [{
                type: Input,
                args: ["requiredEther"]
            }] } });

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @publicApi
 * @description
 * A Directive that preforms a RegEx check on value in the given
 * FromControl / AbstractControl
 *
 * Has an input in which you specify the regular expression
 * and optionally you can give it a custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="regexp"
 *   [regExp]="{
 *      regExp: /(s|regexp)/,
 *      errorName: 'regexpCheck',
 *      error: 'Failed regexp check.'
 *   }"
 * />
 */
class RegExpValidatorDirective {
    validate(control) {
        return regexpValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RegExpValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RegExpValidatorDirective, isStandalone: true, selector: "[regExp]", inputs: { value: ["regExp", "value"] }, providers: [
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
                    selector: "[regExp]",
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
                args: ["regExp"]
            }] } });
/**
 * @publicApi
 * @description
 * A Directive that preforms a RegEx check on value in the given
 * FromControl / AbstractControl and returns an error if regex
 * found a match
 *
 * Has an input in which you specify the regular expression
 * and optionally you can give it a custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="regexpNot"
 *   [regExpNot]="{
 *      regExp: /(s|regexp)/,
 *      errorName: 'regexpNotCheck',
 *      error: 'Failed regexpNot check.'
 *   }"
 * />
 */
class RegExpNotValidatorDirective {
    validate(control) {
        return regexpNotValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RegExpNotValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RegExpNotValidatorDirective, isStandalone: true, selector: "[regExpNot]", inputs: { value: ["regExpNot", "value"] }, providers: [
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
                    selector: "[regExpNot]",
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
                args: ["regExpNot"]
            }] } });
/**
 * @publicApi
 * @description
 * A Directive that preforms a date comparison between a specified date
 * and a date in the given input and returns an error if the date in
 * the given input is later then the specified one.
 *
 * Has an input in which you specify the date to compare to
 * and optionally you can give it a custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="earlierThen"
 *   [earlierThen]="{
 *      date: date,                              -- a variable of type Date
 *      errorName: 'earlierThen',
 *      error: 'The date is not earlier then the specified one.'
 *   }"
 * />
 */
class EarlierThenValidatorDirective {
    validate(control) {
        return earlierThenValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EarlierThenValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: EarlierThenValidatorDirective, isStandalone: true, selector: "[earlierThen]", inputs: { value: ["earlierThen", "value"] }, providers: [
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
                    selector: "[earlierThen]",
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
                args: ["earlierThen"]
            }] } });
/**
 * @publicApi
 * @description
 * A Directive that preforms a date comparison between a specified date
 * and a date in the given input and returns an error if the date in
 * the given input is earlier then the specified one.
 *
 * Has an input in which you specify the date to compare to
 * and optionally you can give it a custom name and a custom
 * error content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="laterThen"
 *   [laterThen]="{
 *      date: date,                              -- a variable of type Date
 *      errorName: 'laterThen',
 *      error: 'The date is not later then the specified one.'
 *   }"
 * />
 */
class LaterThenValidatorDirective {
    validate(control) {
        return laterThenValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LaterThenValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: LaterThenValidatorDirective, isStandalone: true, selector: "[laterThen]", inputs: { value: ["laterThen", "value"] }, providers: [
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
                    selector: "[laterThen]",
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
                args: ["laterThen"]
            }] } });
/**
 * @publicApi
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
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="compareTo"
 *   [compareTo]="{
 *      date: date,                              -- a variable of type Date
 *      comparison: '==='
 *      errorName: 'compareTo',
 *      error: 'The dates are not the same.'
 *   }"
 * />
 */
class CompareToValidatorDirective {
    validate(control) {
        return compareToValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CompareToValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: CompareToValidatorDirective, isStandalone: true, selector: "[compareTo]", inputs: { value: ["compareTo", "value"] }, providers: [
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
                    selector: "[compareTo]",
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
                args: ["compareTo"]
            }] } });
/**
 * @publicApi
 * @description
 * A Directive that preforms a conditional check and if the condition
 * passes it will return an error.
 *
 * Has an input in which you specify the condition that is to be checked
 * and optionally you can give it a custom name and a custom error
 * content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="requiredWhen"
 *   [requiredWhen]="{
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
        return requiredWhenValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredWhenValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RequiredWhenValidatorDirective, isStandalone: true, selector: "[requiredWhen]", inputs: { value: ["requiredWhen", "value"] }, providers: [
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
                    selector: "[requiredWhen]",
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
                args: ["requiredWhen"]
            }] } });
/**
 * @publicApi
 * @description
 * A Directive that preforms a check if the specified FromControl / AbstractControl
 * has a value and a given input does not.
 *
 * Has an input in which you the name of the FromControl / AbstractControl to link
 * to and optionally you can give it a custom name and a custom error
 * content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="linkTo"
 *   [linkTo]="{
 *      link: 'linkedTo,                      - a name of a form control we want
 *      errorName: 'linkTo',                     to link the input to
 *      error: 'The linked input has a value but this one does not'
 *   }"
 * />
 */
class LinkToValidatorDirective {
    validate(control) {
        return linkToValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LinkToValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: LinkToValidatorDirective, isStandalone: true, selector: "[linkTo]", inputs: { value: ["linkTo", "value"] }, providers: [
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
                    selector: "[linkTo]",
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
                args: ["linkTo"]
            }] } });
/**
 * @publicApi
 * @description
 * A Directive that preforms a check if the specified FromControl / AbstractControl
 * does not have a value and a given input does.
 *
 * Has an input in which you the name of the FromControl / AbstractControl to link
 * to and optionally you can give it a custom name and a custom error
 * content / message.
 *
 * @usageNotes
 *  <input
 *    type="text"
 *    formControlName="linkedTo"
 *   [linkedTo]="{
 *      link: 'linkTo,                      - a name of a form control we want
 *      errorName: 'linkedTo',                     to link the input to
 *      error: 'The linked input does not have a value but this one does.'
 *   }"
 * />
 */
class LinkedToValidatorDirective {
    validate(control) {
        return linkedToValidation(control, { ...this.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LinkedToValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: LinkedToValidatorDirective, isStandalone: true, selector: "[linkedTo]", inputs: { value: ["linkedTo", "value"] }, providers: [
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
                    selector: "[linkedTo]",
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
                args: ["linkedTo"]
            }] } });

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @internal
 * @description
 * An decorator which handles the input value in directives which extend the
 * {@link RegExpValidatorDirective} and have an expected input in the form of
 * {@link RegExpValidationConfig}.
 *
 * It will populate the error and the errorName values passed to it if it doesn't find
 * them in the input value.
 * @param regexp                      - Regular expression to check
 * @param errorName                   - parameter representing error name
 * @param error                       - parameter representing error value
 */
function RegExpValidatorInput(regexp, errorName, error) {
    return function (target, propertyKey) {
        let original = target[propertyKey];
        let newData = {
            ...original,
        };
        const getter = function () {
            newData = {
                regExp: regexp,
                errorName: newData.errorName ?? errorName,
                error: newData.error ?? error,
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
class AddressValidatorDirective extends RegExpValidatorDirective {
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
class AlphabetOnlyValidatorDirective extends RegExpValidatorDirective {
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
class EmailValidatorDirective extends RegExpValidatorDirective {
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
class IPAddressValidatorDirective extends RegExpValidatorDirective {
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
class IPv4ValidatorDirective extends RegExpValidatorDirective {
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
class IPv6ValidatorDirective extends RegExpValidatorDirective {
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
class NumericsOnlyValidatorDirective extends RegExpValidatorDirective {
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
class NoSpecialsValidatorDirective extends RegExpValidatorDirective {
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
class PassportValidatorDirective extends RegExpValidatorDirective {
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
class PasswordValidatorDirective extends RegExpValidatorDirective {
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
class PhoneNumberValidatorDirective extends RegExpValidatorDirective {
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
class SingleSpaceValidatorDirective extends RegExpNotValidatorDirective {
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
class SpaceRestrictionValidatorDirective extends RegExpValidatorDirective {
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
class SSNValidatorDirective extends RegExpValidatorDirective {
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
class UrlValidatorDirective extends RegExpValidatorDirective {
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
class ZipCodeValidatorDirective extends RegExpValidatorDirective {
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

export { AddressValidatorDirective, AlphabetOnlyValidatorDirective, CompareToValidatorDirective, DateDD_MM_YYYYValidatorDirective, DateYYYY_MM_DDValidatorDirective, EarlierThenValidatorDirective, EmailValidatorDirective, IPAddressValidatorDirective, IPv4ValidatorDirective, IPv6ValidatorDirective, LaterThenValidatorDirective, LinkToValidatorDirective, LinkedToValidatorDirective, NoSpecialsValidatorDirective, NumericsOnlyValidatorDirective, PassportValidatorDirective, PasswordValidatorDirective, PhoneNumberValidatorDirective, RegExpNotValidatorDirective, RegExpValidatorDirective, RequiredEtherValidatorDirective, RequiredIfNotValidatorDirective, RequiredIfValidatorDirective, RequiredWhenValidatorDirective, SSNValidatorDirective, ShowValidationDirective, SingleSpaceValidatorDirective, SpaceRestrictionValidatorDirective, TimeHH_MM_12ValidatorDirective, TimeHH_MM_24ValidatorDirective, TimeHH_MM_SS_24ValidatorDirective, UrlValidatorDirective, ZipCodeValidatorDirective, addressValidator, alphabetOnlyValidator, compareToValidator, dateDD_MM_YYYYValidator, dateYYYY_MM_DDValidator, earlierThenValidator, emailValidator, iPv4Validator, iPv6Validator, ipAddressValidator, laterThenValidator, linkToValidator, linkedToValidator, noSpecialsValidator, numericsOnlyValidator, passportValidator, passwordValidator, phoneNumberValidator, regexpNotValidator, regexpValidator, requiredEther, requiredIf, requiredIfNot, requiredWhenValidator, singleSpaceValidator, spaceRestrictionValidator, ssnValidator, timeHH_MM_12Validator, timeHH_MM_24Validator, timeHH_MM_SS_24Validator, urlValidator, zipCodeValidator };
//# sourceMappingURL=dynamize-ngx-validator-pack.mjs.map
