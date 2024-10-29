/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { RegExpLogicalOperations } from "../types";

/**
 * @internal
 */
export const test = (regexp: RegExp, value: string, logic: RegExpLogicalOperations): boolean => {
  const operations = {
    '!': (): boolean => !regexp.test(value),
    '!!': (): boolean => regexp.test(value),
    'match': (): boolean => !!regexp.exec(value)
  };

  return operations[logic]();
}