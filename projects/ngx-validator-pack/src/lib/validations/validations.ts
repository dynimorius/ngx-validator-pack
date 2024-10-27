/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { AbstractControl, ValidationErrors } from "@angular/forms";
import {
  ComparisonOperations,
  compareDates,
  prepareToCompare,
} from "../helpers/date";

export const regexpValidation = (
  control: AbstractControl,
  config: {
    regExp: RegExp;
    error?: string;
    errorName?: string;
  }
): ValidationErrors | null => {
  const error =
    config.error ?? "This control did not match a given regular expression.";
  const errors: ValidationErrors = {
    [config.errorName ?? "regexpValidator"]: error,
  };

  return !control.value || config.regExp.test(control.value) ? null : errors;
};

export const regexpNotValidation = (
  control: AbstractControl,
  config: {
    regExp: RegExp;
    error?: string;
    errorName?: string;
  }
): ValidationErrors | null => {
  const error =
    config.error ?? "This control matched a given regular expression.";
  const errors: ValidationErrors = {
    [config.errorName ?? "regexpNotValidator"]: error,
  };

  return !control.value || !config.regExp.test(control.value) ? null : errors;
};

export const earlierThenValidation = (
  control: AbstractControl,
  config: {
    date: Date;
    error?: string;
    errorName?: string;
  }
): ValidationErrors | null => {
  const error =
    config.error ??
    `This control must have a value earlier then ${config.date}.`;
  const errors: ValidationErrors = {
    [config.errorName ?? "earlierThen"]: error,
  };

  return prepareToCompare(control?.value) < prepareToCompare(config.date)
    ? null
    : errors;
};

export const laterThenValidation = (
  control: AbstractControl,
  config: {
    date: Date;
    error?: string;
    errorName?: string;
  }
): ValidationErrors | null => {
  const error =
    config.error ?? `This control must have a value later then ${config.date}.`;
  const errors: ValidationErrors = { [config.errorName ?? "laterThen"]: error };

  return prepareToCompare(control?.value) > prepareToCompare(config.date)
    ? null
    : errors;
};

export const compareToValidation = (
  control: AbstractControl,
  config: {
    fieldName: string;
    comparison: ComparisonOperations;
    error?: string;
    errorName?: string;
  }
): ValidationErrors | null => {
  const date = control.parent?.get(config.fieldName)?.value;
  if (date) {
    const error = config.error ?? `Value comparison with ${date} failed.`;
    const errors: ValidationErrors = {
      [config.errorName ?? "dateComparison"]: error,
    };
    return control.value && compareDates(control.value, date, config.comparison)
      ? null
      : errors;
  }
  return null;
};

export const requiredWhenValidation = (
  control: AbstractControl,
  config: {
    conditional: (() => boolean) | boolean;
    error?: string;
    errorName?: string;
  }
): ValidationErrors | null => {
  const error = config.error ?? "This control has a conditional set on it.";
  const errors: ValidationErrors = {
    [config.errorName ?? "requiredWhen"]: error,
  };

  const outcome =
    typeof config.conditional === "function"
      ? config.conditional()
      : config.conditional;
  return !control.value && outcome ? errors : null;
};

export const linkToValidation = (
  control: AbstractControl,
  config: {
    link: string;
    error?: string;
    errorName?: string;
  }
): ValidationErrors | null => {
  const error = config.error ?? `This control has a link to ${config.link}.`;
  const errors: ValidationErrors = { [config.errorName ?? "linkTo"]: error };
  const linkedTo = control.parent?.get(config.link);

  return !control?.value && !!linkedTo?.value ? errors : null;
};

export const linkedToValidation = (
  control: AbstractControl,
  config: {
    link: string;
    error?: string;
    errorName?: string;
  }
): ValidationErrors | null => {
  const error = config.error ?? `This control is linked to ${config.link}.`;
  const errors: ValidationErrors = { [config.errorName ?? "linkTo"]: error };
  const link = control.parent?.get(config.link);

  return !!control?.value && !link?.value ? errors : null;
};
