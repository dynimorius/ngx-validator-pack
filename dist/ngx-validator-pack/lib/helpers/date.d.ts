/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
export type ComparisonOperations = '<' | '>' | '==' | '===' | '<=' | '>=';
export declare const prepareToCompare: (date: Date | string | undefined | null, bufferYears?: number) => number;
export declare const compareDates: (date1: Date, date2: Date, operation?: ComparisonOperations) => boolean;
