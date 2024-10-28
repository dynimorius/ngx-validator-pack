/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @publicApi
 */
export type ComparisonOperations = '<' | '>' | '==' | '===' | '<=' | '>=';
/**
 * @publicApi
 */
export declare const compareDates: (date1: Date, date2: Date, operation?: ComparisonOperations) => boolean;
