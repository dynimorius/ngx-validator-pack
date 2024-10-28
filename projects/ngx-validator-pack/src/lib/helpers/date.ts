/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { ComparisonOperations } from "../types";
import { compare } from "./numbers";

/**
 * @internal
 */
const prepareToCompare = (
    date: Date | string | undefined | null,
    bufferYears?: number
): number => {
    if(date) {
        const p_Date = new Date(date);
        const year = p_Date.getFullYear() + (bufferYears ?? 0);
        const month = p_Date.getMonth() + 1;
        const day = p_Date.getDate();
        return Number.parseInt(
            `${year}${month.toString().replace.length > 1 ? month : '0' + month}${day.toString().length > 1 ? day : '0' + day}`
        );
    }
    else {
        return 0;
    }
} 

/**
 * @publicApi
 */
export const compareDates = (date1: Date, date2: Date, operation: ComparisonOperations = '==='): boolean => {
    return compare(prepareToCompare(date1), prepareToCompare(date2), operation);
}

