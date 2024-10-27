/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import {
  CompareValidationInput,
  ConditionalValidationInput,
  DateValidationInput,
  LinkValidationInput,
} from "./../interfaces/directive-input.interface";
import { Directive, Input } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";
import { RegExpValidationInput } from "../interfaces/directive-input.interface";
import {
  compareToValidation,
  earlierThenValidation,
  laterThenValidation,
  linkToValidation,
  linkedToValidation,
  regexpNotValidation,
  regexpValidation,
  requiredWhenValidation,
} from "../validations/validations";

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
 *   [regExp]="{
 *      regExp: /(s|regexp)/,
 *      errorName: 'regexpCheck',
 *      error: 'Failed regexp check.'
 *   }"
 * />
 */
@Directive({
  selector: "[regExp]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RegExpValidatorDirective,
      multi: true,
    },
  ],
})
export class RegExpValidatorDirective implements Validator {
  @Input("regExp") value!: RegExpValidationInput;

  validate(control: AbstractControl): ValidationErrors | null {
    return regexpValidation(control, { ...this.value });
  }
}

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
 *   [regExpNot]="{
 *      regExp: /(s|regexp)/,
 *      errorName: 'regexpNotCheck',
 *      error: 'Failed regexpNot check.'
 *   }"
 * />
 */
@Directive({
  selector: "[regExpNot]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RegExpNotValidatorDirective,
      multi: true,
    },
  ],
})
export class RegExpNotValidatorDirective implements Validator {
  @Input("regExpNot") value!: RegExpValidationInput;

  validate(control: AbstractControl): ValidationErrors | null {
    return regexpNotValidation(control, { ...this.value });
  }
}

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
 *   [earlierThen]="{
 *      date: date,                              -- a variable of type Date
 *      errorName: 'earlierThen',
 *      error: 'The date is not earlier then the specified one.'
 *   }"
 * />
 */
@Directive({
  selector: "[earlierThen]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EarlierThenValidatorDirective,
      multi: true,
    },
  ],
})
export class EarlierThenValidatorDirective implements Validator {
  @Input("earlierThen") value!: DateValidationInput;

  validate(control: AbstractControl): ValidationErrors | null {
    return earlierThenValidation(control, { ...this.value });
  }
}

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
 *   [laterThen]="{
 *      date: date,                              -- a variable of type Date
 *      errorName: 'laterThen',
 *      error: 'The date is not later then the specified one.'
 *   }"
 * />
 */
@Directive({
  selector: "[laterThen]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: LaterThenValidatorDirective,
      multi: true,
    },
  ],
})
export class LaterThenValidatorDirective implements Validator {
  @Input("laterThen") value!: DateValidationInput;

  validate(control: AbstractControl): ValidationErrors | null {
    return laterThenValidation(control, { ...this.value });
  }
}

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
 *   [compareTo]="{
 *      date: date,                              -- a variable of type Date
 *      comparison: '==='
 *      errorName: 'compareTo',
 *      error: 'The dates are not the same.'
 *   }"
 * />
 */
@Directive({
  selector: "[compareTo]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CompareToValidatorDirective,
      multi: true,
    },
  ],
})
export class CompareToValidatorDirective implements Validator {
  @Input("compareTo") value!: CompareValidationInput;
  validate(control: AbstractControl): ValidationErrors | null {
    return compareToValidation(control, { ...this.value });
  }
}

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
@Directive({
  selector: "[requiredWhen]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RequiredWhenValidatorDirective,
      multi: true,
    },
  ],
})
export class RequiredWhenValidatorDirective implements Validator {
  @Input("requiredWhen") value!: ConditionalValidationInput;
  validate(control: AbstractControl): ValidationErrors | null {
    return requiredWhenValidation(control, { ...this.value });
  }
}

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
@Directive({
  selector: "[linkTo]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: LinkToValidatorDirective,
      multi: true,
    },
  ],
})
export class LinkToValidatorDirective implements Validator {
  @Input("linkTo") value!: LinkValidationInput;
  validate(control: AbstractControl): ValidationErrors | null {
    return linkToValidation(control, { ...this.value });
  }
}

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
@Directive({
  selector: "[linkedTo]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: LinkedToValidatorDirective,
      multi: true,
    },
  ],
})
export class LinkedToValidatorDirective implements Validator {
  @Input("linkedTo") value!: LinkValidationInput;
  validate(control: AbstractControl): ValidationErrors | null {
    return linkedToValidation(control, { ...this.value });
  }
}
