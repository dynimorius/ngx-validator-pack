/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

export type ComparisonOperations = '<' | '>' | '==' | '===' | '<=' | '>=';

export const prepareToCompare = (
    date: Date | string | undefined | null,
    bufferYears?: number
): number => {
    if(date) {
        const p_Date = new Date(date);
        const year = p_Date.getFullYear() + (bufferYears || 0);
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

export const compareDates = (date1: Date, date2: Date, operation: ComparisonOperations = '==='): boolean => {
    return compare(date1, date2, operation);
}

const compare = (date1: Date, date2: Date, comparison: ComparisonOperations): boolean => {
    const operations = {
        '<': (a: Date, b: Date) => prepareToCompare(a) < prepareToCompare(b),
        '>': (a: Date, b: Date) => prepareToCompare(a) > prepareToCompare(b),
        '==': (a: Date, b: Date) => prepareToCompare(a) == prepareToCompare(b),
        '===': (a: Date, b: Date) => prepareToCompare(a) === prepareToCompare(b),
        '<=': (a: Date, b: Date) => prepareToCompare(a) <= prepareToCompare(b),
        '>=': (a: Date, b: Date) => prepareToCompare(a) >= prepareToCompare(b),
    }
    return operations[comparison](date1, date2);
}