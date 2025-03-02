/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

/**
 * @publicApi
 */
export type ComparisonOperations = "<" | ">" | "==" | "===" | "<=" | ">=";

/**
 * @publicApi
 */
export type RegExpLogicalOperations = "!" | "!!" | "match";

/**
 * @publicApi
 */
export type PasswordValidations =
  | "noAlpha"
  | "noNumeric"
  | "noLowercase"
  | "noUppercase"
  | "noSpecial"
  | "greaterOrLessThen"
  | "minLength";


/**
 * @publicApi
 */
export type WordCountValidations = 'min' | 'max';
