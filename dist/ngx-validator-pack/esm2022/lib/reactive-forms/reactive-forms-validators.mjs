/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { compareToValidation, earlierThenValidation, laterThenValidation, linkToValidation, linkedToValidation, regexpNotValidation, regexpValidation, requiredWhenValidation, } from "../validations/validations";
/**
 * @description
 * Preforms a RegEx check on value in the given FromControl / AbstractControl.
 *
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const regexpValidator = (regExp, errorName, error) => (control) => {
    return regexpValidation(control, { regExp, error, errorName });
};
/**
 * @description
 * Preforms a RegEx check on value in the given FromControl / AbstractControl.
 *
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const regexpNotValidator = (regExp, errorName, error) => (control) => {
    return regexpNotValidation(control, { regExp, error, errorName });
};
/**
 * @description
 * Checks if the date in the given FromControl / AbstractControl is earlier then
 * the value in the specified FromControl / AbstractControl.
 *
 * @param {AbstractControl}           - AbstractControl to preform the check against
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const earlierThenValidator = (date, errorName, error) => (control) => {
    return earlierThenValidation(control, { date, error, errorName });
};
/**
 * @description
 * Checks if the date in the given FromControl / AbstractControl is greater then
 * the value in the specified FromControl / AbstractControl.
 *
 * @param {AbstractControl}           - AbstractControl to preform the check against
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const laterThenValidator = (date, errorName, error) => (control) => {
    return laterThenValidation(control, { date, error, errorName });
};
/**
 * @description
 * Compares the date values of the given FromControl / AbstractControl and
 * specified FromControl / AbstractControl.
 *
 * @param {string}                    - name of the filed to compare against
 * @param {ComparisonOperations}      - comparison to preform
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const compareToValidator = (fieldName, comparison, errorName, error) => (control) => {
    return compareToValidation(control, {
        fieldName,
        comparison,
        error,
        errorName,
    });
};
/**
 * @description
 * Returns a validation error if a condition is met.
 *
 * @param {Function | boolean}        - conditional function or a boolean value
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredWhenValidator = (conditional, errorName, error) => (control) => {
    return requiredWhenValidation(control, { conditional, error, errorName });
};
/**
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has no value
 * and specified FromControl / AbstractControl has it.
 *
 * @param {string}                    - name of the FromControl / AbstractControl to link to
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const linkToValidator = (link, errorName, error) => (control) => {
    return linkToValidation(control, { link, error, errorName });
};
/**
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has a value
 * and specified FromControl / AbstractControl does not.
 *
 * @param {string}                    - name of the FromControl / AbstractControl
 *                                      which a given FromControl / AbstractControl is linked to
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const linkedToValidator = (link, errorName, error) => (control) => {
    return linkedToValidation(control, { link, error, errorName });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUtZm9ybXMtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3JlYWN0aXZlLWZvcm1zL3JlYWN0aXZlLWZvcm1zLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBSUgsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixzQkFBc0IsR0FDdkIsTUFBTSw0QkFBNEIsQ0FBQztBQUVwQzs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FDMUIsQ0FBQyxNQUFjLEVBQUUsU0FBa0IsRUFBRSxLQUFjLEVBQWUsRUFBRSxDQUNwRSxDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FDN0IsQ0FBQyxNQUFjLEVBQUUsU0FBa0IsRUFBRSxLQUFjLEVBQWUsRUFBRSxDQUNwRSxDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDcEUsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQy9CLENBQUMsSUFBVSxFQUFFLFNBQWtCLEVBQUUsS0FBYyxFQUFlLEVBQUUsQ0FDaEUsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8scUJBQXFCLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ3BFLENBQUMsQ0FBQztBQUVKOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUM3QixDQUFDLElBQVUsRUFBRSxTQUFrQixFQUFFLEtBQWMsRUFBZSxFQUFFLENBQ2hFLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxPQUFPLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQzdCLENBQ0UsU0FBaUIsRUFDakIsVUFBZ0MsRUFDaEMsU0FBa0IsRUFDbEIsS0FBYyxFQUNELEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sbUJBQW1CLENBQUMsT0FBTyxFQUFFO1FBQ2xDLFNBQVM7UUFDVCxVQUFVO1FBQ1YsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUNoQyxDQUNFLFdBQXNDLEVBQ3RDLFNBQWtCLEVBQ2xCLEtBQWMsRUFDRCxFQUFFLENBQ2pCLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxPQUFPLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUM1RSxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQzFCLENBQUMsSUFBWSxFQUFFLFNBQWtCLEVBQUUsS0FBYyxFQUFlLEVBQUUsQ0FDbEUsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELENBQUMsQ0FBQztBQUVKOzs7Ozs7Ozs7O0dBVUc7QUFDSCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FDNUIsQ0FBQyxJQUFZLEVBQUUsU0FBa0IsRUFBRSxLQUFjLEVBQWUsRUFBRSxDQUNsRSxDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ29tcGFyaXNvbk9wZXJhdGlvbnMgfSBmcm9tIFwiLi4vaGVscGVycy9kYXRlXCI7XHJcbmltcG9ydCB7XHJcbiAgY29tcGFyZVRvVmFsaWRhdGlvbixcclxuICBlYXJsaWVyVGhlblZhbGlkYXRpb24sXHJcbiAgbGF0ZXJUaGVuVmFsaWRhdGlvbixcclxuICBsaW5rVG9WYWxpZGF0aW9uLFxyXG4gIGxpbmtlZFRvVmFsaWRhdGlvbixcclxuICByZWdleHBOb3RWYWxpZGF0aW9uLFxyXG4gIHJlZ2V4cFZhbGlkYXRpb24sXHJcbiAgcmVxdWlyZWRXaGVuVmFsaWRhdGlvbixcclxufSBmcm9tIFwiLi4vdmFsaWRhdGlvbnMvdmFsaWRhdGlvbnNcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUHJlZm9ybXMgYSBSZWdFeCBjaGVjayBvbiB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVnRXhwfSAgICAgICAgICAgICAgICAgICAgLSBSZWd1bGFyIGV4cHJlc3Npb24gdG8gY2hlY2tcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlZ2V4cFZhbGlkYXRvciA9XHJcbiAgKHJlZ0V4cDogUmVnRXhwLCBlcnJvck5hbWU/OiBzdHJpbmcsIGVycm9yPzogc3RyaW5nKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwgeyByZWdFeHAsIGVycm9yLCBlcnJvck5hbWUgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUHJlZm9ybXMgYSBSZWdFeCBjaGVjayBvbiB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVnRXhwfSAgICAgICAgICAgICAgICAgICAgLSBSZWd1bGFyIGV4cHJlc3Npb24gdG8gY2hlY2tcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlZ2V4cE5vdFZhbGlkYXRvciA9XHJcbiAgKHJlZ0V4cDogUmVnRXhwLCBlcnJvck5hbWU/OiBzdHJpbmcsIGVycm9yPzogc3RyaW5nKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cE5vdFZhbGlkYXRpb24oY29udHJvbCwgeyByZWdFeHAsIGVycm9yLCBlcnJvck5hbWUgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIHRoZSBkYXRlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBlYXJsaWVyIHRoZW5cclxuICogdGhlIHZhbHVlIGluIHRoZSBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSAgICAgICAgICAgLSBBYnN0cmFjdENvbnRyb2wgdG8gcHJlZm9ybSB0aGUgY2hlY2sgYWdhaW5zdFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZWFybGllclRoZW5WYWxpZGF0b3IgPVxyXG4gIChkYXRlOiBEYXRlLCBlcnJvck5hbWU/OiBzdHJpbmcsIGVycm9yPzogc3RyaW5nKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIGVhcmxpZXJUaGVuVmFsaWRhdGlvbihjb250cm9sLCB7IGRhdGUsIGVycm9yLCBlcnJvck5hbWUgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIHRoZSBkYXRlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBncmVhdGVyIHRoZW5cclxuICogdGhlIHZhbHVlIGluIHRoZSBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSAgICAgICAgICAgLSBBYnN0cmFjdENvbnRyb2wgdG8gcHJlZm9ybSB0aGUgY2hlY2sgYWdhaW5zdFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGF0ZXJUaGVuVmFsaWRhdG9yID1cclxuICAoZGF0ZTogRGF0ZSwgZXJyb3JOYW1lPzogc3RyaW5nLCBlcnJvcj86IHN0cmluZyk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiBsYXRlclRoZW5WYWxpZGF0aW9uKGNvbnRyb2wsIHsgZGF0ZSwgZXJyb3IsIGVycm9yTmFtZSB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb21wYXJlcyB0aGUgZGF0ZSB2YWx1ZXMgb2YgdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGFuZFxyXG4gKiBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBuYW1lIG9mIHRoZSBmaWxlZCB0byBjb21wYXJlIGFnYWluc3RcclxuICogQHBhcmFtIHtDb21wYXJpc29uT3BlcmF0aW9uc30gICAgICAtIGNvbXBhcmlzb24gdG8gcHJlZm9ybVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY29tcGFyZVRvVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcclxuICAgIGNvbXBhcmlzb246IENvbXBhcmlzb25PcGVyYXRpb25zLFxyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBzdHJpbmdcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gY29tcGFyZVRvVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIGZpZWxkTmFtZSxcclxuICAgICAgY29tcGFyaXNvbixcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGVycm9yTmFtZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgY29uZGl0aW9uIGlzIG1ldC5cclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbiB8IGJvb2xlYW59ICAgICAgICAtIGNvbmRpdGlvbmFsIGZ1bmN0aW9uIG9yIGEgYm9vbGVhbiB2YWx1ZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVxdWlyZWRXaGVuVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBjb25kaXRpb25hbDogKCgpID0+IGJvb2xlYW4pIHwgYm9vbGVhbixcclxuICAgIGVycm9yTmFtZT86IHN0cmluZyxcclxuICAgIGVycm9yPzogc3RyaW5nXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVpcmVkV2hlblZhbGlkYXRpb24oY29udHJvbCwgeyBjb25kaXRpb25hbCwgZXJyb3IsIGVycm9yTmFtZSB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBSZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBubyB2YWx1ZVxyXG4gKiBhbmQgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBpdC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG5hbWUgb2YgdGhlIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIHRvIGxpbmsgdG9cclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxpbmtUb1ZhbGlkYXRvciA9XHJcbiAgKGxpbms6IHN0cmluZywgZXJyb3JOYW1lPzogc3RyaW5nLCBlcnJvcj86IHN0cmluZyk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiBsaW5rVG9WYWxpZGF0aW9uKGNvbnRyb2wsIHsgbGluaywgZXJyb3IsIGVycm9yTmFtZSB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBSZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhIHZhbHVlXHJcbiAqIGFuZCBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgZG9lcyBub3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBuYW1lIG9mIHRoZSBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpY2ggYSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBsaW5rZWQgdG9cclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxpbmtlZFRvVmFsaWRhdG9yID1cclxuICAobGluazogc3RyaW5nLCBlcnJvck5hbWU/OiBzdHJpbmcsIGVycm9yPzogc3RyaW5nKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIGxpbmtlZFRvVmFsaWRhdGlvbihjb250cm9sLCB7IGxpbmssIGVycm9yLCBlcnJvck5hbWUgfSk7XHJcbiAgfTtcclxuIl19