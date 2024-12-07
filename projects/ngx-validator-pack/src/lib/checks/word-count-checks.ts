/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { checkFactory } from "../helpers/check-factory";
import { wordCountValidator } from "../validators/reactive-forms/reactive-forms-validators";

export const WordCountChecks = (min: number, max: number) => checkFactory([
    {
        validator: wordCountValidator,
        args: [min, '>'],
        errorName: 'minWordCount',
        errorMsg: `The minimum number of words is ${min}.`
    },
    {
        validator: wordCountValidator,
        args: [max, '<'],
        errorName: 'maxWordCount',
        errorMsg: `The maximum number of words is ${max}.`
    }
]);