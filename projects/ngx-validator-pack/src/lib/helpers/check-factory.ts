/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { ValidatorFn } from '@angular/forms';
import { CheckConfig, PreparedChecks } from '../interfaces/check-config.interface';

export const checkFactory = (configs: CheckConfig[]): PreparedChecks  => {
  const validators: ValidatorFn[] = [];
  const checks: { [key: string]: string } = {};
  configs.forEach((config: CheckConfig) => {
    validators.push(
      config.validator(...config.args, config.errorName, config.errorMsg)
    );
    checks[config.errorName] = config.errorMsg;
  });

  return {
    validators,
    checks,
  };
};
