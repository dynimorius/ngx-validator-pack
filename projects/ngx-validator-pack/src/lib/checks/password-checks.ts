/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { checkFactory } from "../helpers/check-factory";
import { lengthValidator, regexpValidator } from "../validators/reactive-forms/reactive-forms-validators";

export const PasswordChecks = () => checkFactory([
    {
      validator: regexpValidator,
      args: [/[a-zA-Z]/, '!!'],
      errorName: 'noAlpha',
      errorMsg: 'A password must contain letters.',
    },
    {
      validator: regexpValidator,
      args: [/[a-z]/, '!!'],
      errorName: 'noLowercase',
      errorMsg: 'A password must contain lowercase letters.',
    },
    {
      validator: regexpValidator,
      args: [/[A-Z]/, '!!'],
      errorName: 'noUppercase',
      errorMsg: 'A password must contain uppercase letters.',
    },
    {
      validator: regexpValidator,
      args: [/\d/, '!!'],
      errorName: 'noNumeric',
      errorMsg: 'A password must contain numbers.',
    },
    {
      validator: regexpValidator,
      args: [/^[A-Za-z0-9 ]+$/, '!'],
      errorName: 'noSpecial',
      errorMsg: 'A password must contain special characters.',
    },
    {
      validator: regexpValidator,
      args: [/(?=.*[<>])/, '!'],
      errorName: 'greaterOrLessThen',
      errorMsg: 'A password must not contain < or > characters.',
    },
    {
      validator: lengthValidator,
      args: [8, '<'],
      errorName: 'minLength',
      errorMsg: 'A password is not long enough.',
    },
  ]);