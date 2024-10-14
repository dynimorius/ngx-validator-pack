/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { compareDates, prepareToCompare, } from "../helpers/date";
/**
 * @description
 * Preforms a RegEx check on value in the given FromControl / AbstractControl
 *
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const regexpValidator = (regexp, errorName, error) => (control) => {
    error = error ?? "This control did not match a given regular expression.";
    const errors = {
        [errorName ?? "regexpValidator"]: error,
    };
    return !control.value || regexp.test(control.value) ? null : errors;
};
/**
 * @description
 * Preforms a RegEx check on value in the given FromControl / AbstractControl
 *
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const regexpNotValidator = (regexp, errorName, error) => (control) => {
    error = error ?? "This control matched a given regular expression.";
    const errors = {
        [errorName ?? "regexpNotValidator"]: error,
    };
    return !control.value || !regexp.test(control.value) ? null : errors;
};
/**
 * @description
 * Checks if the date in the given FromControl / AbstractControl is earlier then
 * the value in the specified FromControl / AbstractControl
 *
 * @param {AbstractControl}           - AbstractControl to preform the check against
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const earlierThenValidator = (date, errorName, error) => (control) => {
    error = error ?? `This control must have a value earlier then ${date}.`;
    const errors = { [errorName ?? "earlierThen"]: error };
    return prepareToCompare(control?.value) < prepareToCompare(date)
        ? null
        : errors;
};
/**
 * @description
 * Checks if the date in the given FromControl / AbstractControl is greater then
 * the value in the specified FromControl / AbstractControl
 *
 * @param {AbstractControl}           - AbstractControl to preform the check against
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const laterThenValidator = (date, errorName, error) => (control) => {
    error = error ?? `This control must have a value later then ${date}.`;
    const errors = { [errorName ?? "laterThen"]: error };
    return prepareToCompare(control?.value) > prepareToCompare(date)
        ? null
        : errors;
};
/**
 * @description
 * Compares the date values of the given FromControl / AbstractControl and
 * specified FromControl / AbstractControl
 *
 * @param {string}                    - name of the filed to compare against
 * @param {ComparisonOperations}      - comparison to preform
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const compareToValidator = (filedName, comparison, errorName, error) => (control) => {
    const date = control.parent?.get(filedName)?.value;
    if (date) {
        error = error ?? `Value comparison with ${date} failed.`;
        const errors = {
            [errorName ?? "dateComparison"]: error,
        };
        return control.value && compareDates(control.value, date, comparison)
            ? null
            : errors;
    }
    return null;
};
/**
 * @description
 * Returns a validation error if a condition is met
 *
 * @param {Function | boolean}        - conditional function or a boolean value
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredWhenValidator = (conditional, errorName, error) => (control) => {
    error = error ?? "This control has a conditional set on it.";
    const errors = { [errorName ?? "requiredWhen"]: error };
    const outcome = typeof conditional === "function" ? conditional() : conditional;
    return !control.value && outcome ? errors : null;
};
/**
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has no value
 * and specified FromControl / AbstractControl has it
 *
 * @param {string}                    - name of the FromControl / AbstractControl to link to
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const linkToValidator = (linkTo, errorName, error) => (control) => {
    error = error ?? `This control has a link to ${linkTo}.`;
    const errors = { [errorName ?? "linkTo"]: error };
    const linkedTo = control.parent?.get(linkTo);
    return !control?.value && !!linkedTo?.value ? errors : null;
};
/**
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has a value
 * and specified FromControl / AbstractControl does not
 *
 * @param {string}                    - name of the FromControl / AbstractControl
 *                                      which a given FromControl / AbstractControl is linked to
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const linkedToValidator = (linkedTo, errorName, error) => (control) => {
    error = error ?? `This control is linked to ${linkedTo}.`;
    const errors = { [errorName ?? "linkTo"]: error };
    const link = control.parent?.get(linkedTo);
    return !!control?.value && !link?.value ? errors : null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUtZm9ybXMtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3JlYWN0aXZlLWZvcm1zL3JlYWN0aXZlLWZvcm1zLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBR0gsT0FBTyxFQUVMLFlBQVksRUFDWixnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6Qjs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FDMUIsQ0FBQyxNQUFjLEVBQUUsU0FBa0IsRUFBRSxLQUFjLEVBQWUsRUFBRSxDQUNwRSxDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsS0FBSyxHQUFHLEtBQUssSUFBSSx3REFBd0QsQ0FBQztJQUMxRSxNQUFNLE1BQU0sR0FBcUI7UUFDL0IsQ0FBQyxTQUFTLElBQUksaUJBQWlCLENBQUMsRUFBRSxLQUFLO0tBQ3hDLENBQUM7SUFFRixPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDdEUsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FDN0IsQ0FBQyxNQUFjLEVBQUUsU0FBa0IsRUFBRSxLQUFjLEVBQWUsRUFBRSxDQUNwRSxDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsS0FBSyxHQUFHLEtBQUssSUFBSSxrREFBa0QsQ0FBQztJQUNwRSxNQUFNLE1BQU0sR0FBcUI7UUFDL0IsQ0FBQyxTQUFTLElBQUksb0JBQW9CLENBQUMsRUFBRSxLQUFLO0tBQzNDLENBQUM7SUFFRixPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUss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ZW5zZVxyXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cclxuICovXHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29tcGFyaXNvbk9wZXJhdGlvbnMsXHJcbiAgY29tcGFyZURhdGVzLFxyXG4gIHByZXBhcmVUb0NvbXBhcmUsXHJcbn0gZnJvbSBcIi4uL2hlbHBlcnMvZGF0ZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBQcmVmb3JtcyBhIFJlZ0V4IGNoZWNrIG9uIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbFxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlZ0V4cH0gICAgICAgICAgICAgICAgICAgIC0gUmVndWxhciBleHByZXNzaW9uIHRvIGNoZWNrXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCByZWdleHBWYWxpZGF0b3IgPVxyXG4gIChyZWdleHA6IFJlZ0V4cCwgZXJyb3JOYW1lPzogc3RyaW5nLCBlcnJvcj86IHN0cmluZyk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIGVycm9yID0gZXJyb3IgPz8gXCJUaGlzIGNvbnRyb2wgZGlkIG5vdCBtYXRjaCBhIGdpdmVuIHJlZ3VsYXIgZXhwcmVzc2lvbi5cIjtcclxuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgICAgW2Vycm9yTmFtZSA/PyBcInJlZ2V4cFZhbGlkYXRvclwiXTogZXJyb3IsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAhY29udHJvbC52YWx1ZSB8fCByZWdleHAudGVzdChjb250cm9sLnZhbHVlKSA/IG51bGwgOiBlcnJvcnM7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUHJlZm9ybXMgYSBSZWdFeCBjaGVjayBvbiB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2xcclxuICpcclxuICogQHBhcmFtIHtSZWdFeHB9ICAgICAgICAgICAgICAgICAgICAtIFJlZ3VsYXIgZXhwcmVzc2lvbiB0byBjaGVja1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVnZXhwTm90VmFsaWRhdG9yID1cclxuICAocmVnZXhwOiBSZWdFeHAsIGVycm9yTmFtZT86IHN0cmluZywgZXJyb3I/OiBzdHJpbmcpOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICBlcnJvciA9IGVycm9yID8/IFwiVGhpcyBjb250cm9sIG1hdGNoZWQgYSBnaXZlbiByZWd1bGFyIGV4cHJlc3Npb24uXCI7XHJcbiAgICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XHJcbiAgICAgIFtlcnJvck5hbWUgPz8gXCJyZWdleHBOb3RWYWxpZGF0b3JcIl06IGVycm9yLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gIWNvbnRyb2wudmFsdWUgfHwgIXJlZ2V4cC50ZXN0KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IGVycm9ycztcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgdGhlIGRhdGUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGVhcmxpZXIgdGhlblxyXG4gKiB0aGUgdmFsdWUgaW4gdGhlIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbFxyXG4gKlxyXG4gKiBAcGFyYW0ge0Fic3RyYWN0Q29udHJvbH0gICAgICAgICAgIC0gQWJzdHJhY3RDb250cm9sIHRvIHByZWZvcm0gdGhlIGNoZWNrIGFnYWluc3RcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVhcmxpZXJUaGVuVmFsaWRhdG9yID1cclxuICAoZGF0ZTogRGF0ZSwgZXJyb3JOYW1lPzogc3RyaW5nLCBlcnJvcj86IHN0cmluZyk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIGVycm9yID0gZXJyb3IgPz8gYFRoaXMgY29udHJvbCBtdXN0IGhhdmUgYSB2YWx1ZSBlYXJsaWVyIHRoZW4gJHtkYXRlfS5gO1xyXG4gICAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbZXJyb3JOYW1lID8/IFwiZWFybGllclRoZW5cIl06IGVycm9yIH07XHJcblxyXG4gICAgcmV0dXJuIHByZXBhcmVUb0NvbXBhcmUoY29udHJvbD8udmFsdWUpIDwgcHJlcGFyZVRvQ29tcGFyZShkYXRlKVxyXG4gICAgICA/IG51bGxcclxuICAgICAgOiBlcnJvcnM7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIHRoZSBkYXRlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBncmVhdGVyIHRoZW5cclxuICogdGhlIHZhbHVlIGluIHRoZSBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2xcclxuICpcclxuICogQHBhcmFtIHtBYnN0cmFjdENvbnRyb2x9ICAgICAgICAgICAtIEFic3RyYWN0Q29udHJvbCB0byBwcmVmb3JtIHRoZSBjaGVjayBhZ2FpbnN0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBsYXRlclRoZW5WYWxpZGF0b3IgPVxyXG4gIChkYXRlOiBEYXRlLCBlcnJvck5hbWU/OiBzdHJpbmcsIGVycm9yPzogc3RyaW5nKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgZXJyb3IgPSBlcnJvciA/PyBgVGhpcyBjb250cm9sIG11c3QgaGF2ZSBhIHZhbHVlIGxhdGVyIHRoZW4gJHtkYXRlfS5gO1xyXG4gICAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbZXJyb3JOYW1lID8/IFwibGF0ZXJUaGVuXCJdOiBlcnJvciB9O1xyXG5cclxuICAgIHJldHVybiBwcmVwYXJlVG9Db21wYXJlKGNvbnRyb2w/LnZhbHVlKSA+IHByZXBhcmVUb0NvbXBhcmUoZGF0ZSlcclxuICAgICAgPyBudWxsXHJcbiAgICAgIDogZXJyb3JzO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENvbXBhcmVzIHRoZSBkYXRlIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgYW5kXHJcbiAqIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbFxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gbmFtZSBvZiB0aGUgZmlsZWQgdG8gY29tcGFyZSBhZ2FpbnN0XHJcbiAqIEBwYXJhbSB7Q29tcGFyaXNvbk9wZXJhdGlvbnN9ICAgICAgLSBjb21wYXJpc29uIHRvIHByZWZvcm1cclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbXBhcmVUb1ZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZmlsZWROYW1lOiBzdHJpbmcsXHJcbiAgICBjb21wYXJpc29uOiBDb21wYXJpc29uT3BlcmF0aW9ucyxcclxuICAgIGVycm9yTmFtZT86IHN0cmluZyxcclxuICAgIGVycm9yPzogc3RyaW5nXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IGNvbnRyb2wucGFyZW50Py5nZXQoZmlsZWROYW1lKT8udmFsdWU7XHJcbiAgICBpZiAoZGF0ZSkge1xyXG4gICAgICBlcnJvciA9IGVycm9yID8/IGBWYWx1ZSBjb21wYXJpc29uIHdpdGggJHtkYXRlfSBmYWlsZWQuYDtcclxuICAgICAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0ge1xyXG4gICAgICAgIFtlcnJvck5hbWUgPz8gXCJkYXRlQ29tcGFyaXNvblwiXTogZXJyb3IsXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiBjb250cm9sLnZhbHVlICYmIGNvbXBhcmVEYXRlcyhjb250cm9sLnZhbHVlLCBkYXRlLCBjb21wYXJpc29uKVxyXG4gICAgICAgID8gbnVsbFxyXG4gICAgICAgIDogZXJyb3JzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBjb25kaXRpb24gaXMgbWV0XHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb24gfCBib29sZWFufSAgICAgICAgLSBjb25kaXRpb25hbCBmdW5jdGlvbiBvciBhIGJvb2xlYW4gdmFsdWVcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkV2hlblZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgY29uZGl0aW9uYWw6ICgoKSA9PiBib29sZWFuKSB8IGJvb2xlYW4sXHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IHN0cmluZ1xyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIGVycm9yID0gZXJyb3IgPz8gXCJUaGlzIGNvbnRyb2wgaGFzIGEgY29uZGl0aW9uYWwgc2V0IG9uIGl0LlwiO1xyXG4gICAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbZXJyb3JOYW1lID8/IFwicmVxdWlyZWRXaGVuXCJdOiBlcnJvciB9O1xyXG5cclxuICAgIGNvbnN0IG91dGNvbWUgPVxyXG4gICAgICB0eXBlb2YgY29uZGl0aW9uYWwgPT09IFwiZnVuY3Rpb25cIiA/IGNvbmRpdGlvbmFsKCkgOiBjb25kaXRpb25hbDtcclxuICAgIHJldHVybiAhY29udHJvbC52YWx1ZSAmJiBvdXRjb21lID8gZXJyb3JzIDogbnVsbDtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBSZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBubyB2YWx1ZVxyXG4gKiBhbmQgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBpdFxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gbmFtZSBvZiB0aGUgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgdG8gbGluayB0b1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGlua1RvVmFsaWRhdG9yID1cclxuICAobGlua1RvOiBzdHJpbmcsIGVycm9yTmFtZT86IHN0cmluZywgZXJyb3I/OiBzdHJpbmcpOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICBlcnJvciA9IGVycm9yID8/IGBUaGlzIGNvbnRyb2wgaGFzIGEgbGluayB0byAke2xpbmtUb30uYDtcclxuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHsgW2Vycm9yTmFtZSA/PyBcImxpbmtUb1wiXTogZXJyb3IgfTtcclxuXHJcbiAgICBjb25zdCBsaW5rZWRUbyA9IGNvbnRyb2wucGFyZW50Py5nZXQobGlua1RvKTtcclxuICAgIHJldHVybiAhY29udHJvbD8udmFsdWUgJiYgISFsaW5rZWRUbz8udmFsdWUgPyBlcnJvcnMgOiBudWxsO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIGEgdmFsdWVcclxuICogYW5kIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBkb2VzIG5vdFxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gbmFtZSBvZiB0aGUgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2xcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWNoIGEgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgbGlua2VkIHRvXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBsaW5rZWRUb1ZhbGlkYXRvciA9XHJcbiAgKGxpbmtlZFRvOiBzdHJpbmcsIGVycm9yTmFtZT86IHN0cmluZywgZXJyb3I/OiBzdHJpbmcpOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICBlcnJvciA9IGVycm9yID8/IGBUaGlzIGNvbnRyb2wgaXMgbGlua2VkIHRvICR7bGlua2VkVG99LmA7XHJcbiAgICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtlcnJvck5hbWUgPz8gXCJsaW5rVG9cIl06IGVycm9yIH07XHJcblxyXG4gICAgY29uc3QgbGluayA9IGNvbnRyb2wucGFyZW50Py5nZXQobGlua2VkVG8pO1xyXG4gICAgcmV0dXJuICEhY29udHJvbD8udmFsdWUgJiYgIWxpbms/LnZhbHVlID8gZXJyb3JzIDogbnVsbDtcclxuICB9O1xyXG4iXX0=