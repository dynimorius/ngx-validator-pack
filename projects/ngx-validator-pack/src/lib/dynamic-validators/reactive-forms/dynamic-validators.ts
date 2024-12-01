/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import {
  PasswordConfigs,
  SequenceConfig,
  WordCountConfigs,
} from "../../interfaces/sequence-config.interface";
import { PasswordValidations, WordCountValidations } from "../../types";
import { sequentialValidation } from "../../validations/validations";
import { SequenceConfigFactory } from "../sequence-config-factory";
import { PasswordConfigMap } from "../sequence-maps/password-sequence-map";
import { WordRangeConfigMap } from "../sequence-maps/word-range-sequence-map";

export const sequentialValidator =
  (sequence: SequenceConfig[]): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return sequentialValidation(control, sequence);
  };

export const dynamicPasswordValidator = (
  passwordSequence: (PasswordValidations | PasswordConfigs)[] = [
    "noAlpha",
    "noNumeric",
    "noLowercase",
    "noUppercase",
    "noSpecial",
    "greaterOrLessThen",
    "minLength",
  ]
): ValidatorFn => {
  return sequentialValidator(
    SequenceConfigFactory(passwordSequence, PasswordConfigMap)
  );
};

export const dynamicWordCountValidator = (
  wordCountSequence: (WordCountValidations | WordCountConfigs)[] = [
    'min',
    'max'
  ]
): ValidatorFn => {
  return sequentialValidator(
    SequenceConfigFactory(wordCountSequence, WordRangeConfigMap)
  );
}
