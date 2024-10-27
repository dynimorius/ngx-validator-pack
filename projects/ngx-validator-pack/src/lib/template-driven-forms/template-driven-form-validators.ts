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
import { compareDates, prepareToCompare } from "../helpers/date";
import { RegExpValidationInput } from "../interfaces/directive-input.interface";

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
@Directive({
  selector: "[regexpValidation]",
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
  @Input("regexpValidation") value!: RegExpValidationInput;

  validate(control: AbstractControl): ValidationErrors | null {
    const error =
      this.value.error ??
      "This control did not match a given regular expression.";

    const errors: ValidationErrors = {
      [this.value.errorName ?? "regexpValidation"]: error,
    };

    return !this.value.regExp ||
      !control.value ||
      this.value.regExp.test(control.value)
      ? null
      : errors;
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
 *   [regexpNotValidation]="{
 *      regExp: /(s|regexp)/,
 *      errorName: 'regexpNotCheck',
 *      error: 'Failed regexpNot check.'
 *   }"
 * />
 */
@Directive({
  selector: "[regexpNotValidation]",
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
  @Input("regexpNotValidation") value!: RegExpValidationInput;

  validate(control: AbstractControl): ValidationErrors | null {
    const error =
      this.value.error ?? "This control matched a given regular expression.";
      
    const errors: ValidationErrors = {
      [this.value.errorName ?? "regexpNotValidation"]: error,
    };

    return !this.value.regExp ||
      !control.value ||
      !this.value.regExp.test(control.value)
      ? null
      : errors;
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
 *   [earlierThenValidation]="{
 *      date: date,                              -- a variable of type Date
 *      errorName: 'earlierThen',
 *      error: 'The date is not earlier then the specified one.'
 *   }"
 * />
 */
@Directive({
  selector: "[earlierThenValidation]",
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
  @Input("earlierThenValidation") value!: DateValidationInput;

  validate(control: AbstractControl): ValidationErrors | null {
    const error =
      this.value.error ??
      `This control must have a value earlier then ${this.value.date}.`;

    const errors: ValidationErrors = {
      [this.value.errorName ?? "earlierThenValidation"]: error,
    };

    return !this.value.date ||
      prepareToCompare(control?.value) < prepareToCompare(this.value.date)
      ? null
      : errors;
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
 *   [laterThenValidation]="{
 *      date: date,                              -- a variable of type Date
 *      errorName: 'laterThen',
 *      error: 'The date is not later then the specified one.'
 *   }"
 * />
 */
@Directive({
  selector: "[laterThenValidation]",
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
  @Input("laterThenValidation") value!: DateValidationInput;

  validate(control: AbstractControl): ValidationErrors | null {
    const error =
      this.value.error ??
      `This control must have a value later then ${this.value.date}.`;

    const errors: ValidationErrors = {
      [this.value.errorName ?? "laterThenValidation"]: error,
    };

    return !this.value.date ||
      prepareToCompare(control?.value) > prepareToCompare(this.value.date)
      ? null
      : errors;
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
 *   [compareToValidation]="{
 *      date: date,                              -- a variable of type Date
 *      comparison: '==='
 *      errorName: 'compareTo',
 *      error: 'The dates are not the same.'
 *   }"
 * />
 */
@Directive({
  selector: "[compareToValidation]",
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
  @Input("compareToValidation") value!: CompareValidationInput;
  validate(control: AbstractControl): ValidationErrors | null {
    const error =
      this.value.error ?? `Value comparison with ${this.value.date} failed.`;

    const errors: ValidationErrors = {
      [this.value.errorName ?? "compareToValidation"]: error,
    };

    return !this.value.date ||
      !control.value ||
      compareDates(control.value, this.value.date, this.value.comparison)
      ? null
      : errors;
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
@Directive({
  selector: "[requiredWhenValidation]",
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
  @Input("requiredWhenValidation") value!: ConditionalValidationInput;
  validate(control: AbstractControl): ValidationErrors | null {
    const error =
      this.value.error ?? "This control has a conditional set on it.";

    const errors: ValidationErrors = {
      [this.value.errorName ?? "requiredWhen"]: error,
    };

    const outcome =
      typeof this.value.conditional === "function"
        ? this.value.conditional()
        : this.value.conditional;
    return !control.value && outcome ? errors : null;
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
  selector: "[linkToValidation]",
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
  @Input("linkToValidation") value!: LinkValidationInput;
  validate(control: AbstractControl): ValidationErrors | null {
    const error =
      this.value.error ?? `This control has a link to ${this.value.link}.`;

    const errors: ValidationErrors = {
      [this.value.errorName ?? "linkToValidation"]: error,
    };

    const linkedTo = control.parent?.get(this.value.link);
    return !control?.value && !!linkedTo?.value ? errors : null;
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
  selector: "[linkedToValidation]",
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
  @Input("linkedToValidation") value!: LinkValidationInput;
  validate(control: AbstractControl): ValidationErrors | null {
    const error =
      this.value.error ?? `This control is linked to ${this.value.link}.`;

    const errors: ValidationErrors = {
      [this.value.errorName ?? "linkedToValidation"]: error,
    };

    const link = control.parent?.get(this.value.link);
    return !!control?.value && !link?.value ? errors : null;
  }
}
