/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { ComparisonOperations } from "../types";

/**
 * @internal
 */
export const compare = (num1: number, num2: number, comparison: ComparisonOperations): boolean => {
  const operations = {
      '<': (a: number, b: number): boolean => a < b,
      '>': (a: number, b: number): boolean => a > b,
      '==': (a: number, b: number): boolean => a == b,
      '===': (a: number, b: number): boolean => a === b,
      '<=': (a: number, b: number): boolean => a <= b,
      '>=': (a: number, b: number): boolean => a >= b,
  }
  return operations[comparison](num1, num2);
}