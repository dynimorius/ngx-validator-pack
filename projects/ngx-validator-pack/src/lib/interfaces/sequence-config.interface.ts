/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { ValidationErrors } from "@angular/forms";

export interface SequenceConfig {
  validationFun: (...args: any[]) => ValidationErrors | null,
  validationFunConfig?: {[key: string]: any},
}