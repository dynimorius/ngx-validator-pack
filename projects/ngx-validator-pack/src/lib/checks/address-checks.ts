/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { checkFactory, regexpValidator } from "ngx-validator-pack";

export const AddressChecks = () => checkFactory([
    {
        validator: regexpValidator,
        args: [/(\d{1,})/, '!!'],
        errorName: 'streetNumber',
        errorMsg: 'Street number.',
    },
    {
        validator: regexpValidator,
        args: [/(\d{1,}) [a-zA-Z0-9\s]+(\,)/, '!!'],
        errorName: 'streetName',
        errorMsg: 'Street name.',
    },
    {
        validator: regexpValidator,
        args: [/(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)/, '!!'],
        errorName: 'city',
        errorMsg: 'City.',
    },
    {
        validator: regexpValidator,
        args: [/(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2}/, '!!'],
        errorName: 'state',
        errorMsg: 'State.',
    },
    {
        validator: regexpValidator,
        args: [/(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}/, '!!'],
        errorName: 'zip',
        errorMsg: 'ZipCode.',
    }
]);