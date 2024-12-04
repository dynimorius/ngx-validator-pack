/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { lengthValidation, rangeValidation, wordCountRangeValidation, wordCountValidation, } from "./../../validations/validations";
import { compareToValidation, earlierThenValidation, laterThenValidation, linkToValidation, linkedToValidation, regexpValidation, requiredWhenValidation, } from "../../validations/validations";
/**
 * @publicApi
 * @description
 * Preforms a RegEx check on value in the given FromControl / AbstractControl.
 *
 * @param regExp                      - Regular expression to check
 * @param logic                       - what kind of logic to preform !! = match, ! = not a match
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const regexpValidator = (regExp, logic, errorName, error) => (control) => {
    return regexpValidation(control, { regExp, error, errorName, logic });
};
/**
 * @publicApi
 * @description
 * Checks if the date in the given FromControl / AbstractControl is earlier then
 * the value in the specified FromControl / AbstractControl.
 *
 * @param date                        - Date to preform the check against
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const earlierThenValidator = (date, errorName, error) => (control) => {
    return earlierThenValidation(control, { date, error, errorName });
};
/**
 * @publicApi
 * @description
 * Checks if the date in the given FromControl / AbstractControl is greater then
 * the value in the specified FromControl / AbstractControl.
 *
 * @param date                        - Date to preform the check against
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const laterThenValidator = (date, errorName, error) => (control) => {
    return laterThenValidation(control, { date, error, errorName });
};
/**
 * @publicApi
 * @description
 * Compares the date values of the given FromControl / AbstractControl and
 * specified FromControl / AbstractControl.
 *
 * @param fieldName                   - name of the filed to compare against
 * @param comparison                  - comparison to preform
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
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
 * @publicApi
 * @description
 * Returns a validation error if a condition is met.
 *
 * @param conditional                 - conditional function or a boolean value
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredWhenValidator = (conditional, errorName, error) => (control) => {
    return requiredWhenValidation(control, { conditional, error, errorName });
};
/**
 * @publicApi
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has no value
 * and specified FromControl / AbstractControl has it.
 *
 * @param link                        - name of the FromControl / AbstractControl to link to
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const linkToValidator = (link, errorName, error) => (control) => {
    return linkToValidation(control, { link, error, errorName });
};
/**
 * @publicApi
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has a value
 * and specified FromControl / AbstractControl does not.
 *
 * @param link                        - name of the FromControl / AbstractControl
 *                                      which a given FromControl / AbstractControl is linked to
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const linkedToValidator = (link, errorName, error) => (control) => {
    return linkedToValidation(control, { link, error, errorName });
};
/**
 * @publicApi
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has a value
 * that fails a given length comparison.
 *
 * @param length                      - numeric value of length to compere to
 * @param comparison                  - numeric value of a comparison to preform
 *                                      available options are:
 *                                        "<" , ">" , "==" , "===" , "<=" and ">="
 *                                      default is: "==="
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const lengthValidator = (length, comparison = "===", errorName, error) => (control) => {
    return lengthValidation(control, { length, comparison, error, errorName });
};
/**
 * @publicApi
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has a value
 * that is not in a given range.
 *
 * @param start                       - a minimum length value
 * @param end                         - a maximum length value
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const rangeValidator = (start, end, errorName, error) => (control) => {
    return rangeValidation(control, { start, end, error, errorName });
};
/**
 * @publicApi
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has a value
 * that fails a given word count comparison.
 *
 * @param count                       - numeric value of word count to compere to
 * @param comparison                  - numeric value of a comparison to preform
 *                                      available options are:
 *                                        "<" , ">" , "==" , "===" , "<=" and ">="
 *                                      default is: "==="
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const wordCountValidator = (count, comparison = "===", errorName, error) => (control) => {
    return wordCountValidation(control, {
        count,
        comparison,
        error,
        errorName,
    });
};
/**
 * @publicApi
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has a value
 * whit a word count is not in a given range.
 *
 * @param start                       - a minimum word count value
 * @param end                         - a maximum word count value
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const wordCountRangeValidator = (start, end, errorName, error) => (control) => {
    return wordCountRangeValidation(control, { start, end, error, errorName });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUtZm9ybXMtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3ZhbGlkYXRvcnMvcmVhY3RpdmUtZm9ybXMvcmVhY3RpdmUtZm9ybXMtdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFFZix3QkFBd0IsRUFDeEIsbUJBQW1CLEdBQ3BCLE1BQU0saUNBQWlDLENBQUM7QUFJekMsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLHNCQUFzQixHQUN2QixNQUFNLCtCQUErQixDQUFDO0FBR3ZDOzs7Ozs7Ozs7O0dBVUc7QUFDSCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQzFCLENBQ0UsTUFBYyxFQUNkLEtBQThCLEVBQzlCLFNBQWtCLEVBQ2xCLEtBQWMsRUFDRCxFQUFFLENBQ2pCLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxPQUFPLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDeEUsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUMvQixDQUFDLElBQVUsRUFBRSxTQUFrQixFQUFFLEtBQWMsRUFBZSxFQUFFLENBQ2hFLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxPQUFPLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUNwRSxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7OztH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TCxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUNsQyxDQUNFLEtBQWEsRUFDYixHQUFXLEVBQ1gsU0FBa0IsRUFDbEIsS0FBYyxFQUNELEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sd0JBQXdCLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUM3RSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cbiAqL1xuXG5pbXBvcnQge1xuICBsZW5ndGhWYWxpZGF0aW9uLFxuICByYW5nZVZhbGlkYXRpb24sXG4gIHNlcXVlbnRpYWxWYWxpZGF0aW9uLFxuICB3b3JkQ291bnRSYW5nZVZhbGlkYXRpb24sXG4gIHdvcmRDb3VudFZhbGlkYXRpb24sXG59IGZyb20gXCIuLy4uLy4uL3ZhbGlkYXRpb25zL3ZhbGlkYXRpb25zXCI7XG5cbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IENvbXBhcmlzb25PcGVyYXRpb25zLCBSZWdFeHBMb2dpY2FsT3BlcmF0aW9ucyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgY29tcGFyZVRvVmFsaWRhdGlvbixcbiAgZWFybGllclRoZW5WYWxpZGF0aW9uLFxuICBsYXRlclRoZW5WYWxpZGF0aW9uLFxuICBsaW5rVG9WYWxpZGF0aW9uLFxuICBsaW5rZWRUb1ZhbGlkYXRpb24sXG4gIHJlZ2V4cFZhbGlkYXRpb24sXG4gIHJlcXVpcmVkV2hlblZhbGlkYXRpb24sXG59IGZyb20gXCIuLi8uLi92YWxpZGF0aW9ucy92YWxpZGF0aW9uc1wiO1xuaW1wb3J0IHsgU2VxdWVuY2VDb25maWcgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9zZXF1ZW5jZS1jb25maWcuaW50ZXJmYWNlXCI7XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBQcmVmb3JtcyBhIFJlZ0V4IGNoZWNrIG9uIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cbiAqXG4gKiBAcGFyYW0gcmVnRXhwICAgICAgICAgICAgICAgICAgICAgIC0gUmVndWxhciBleHByZXNzaW9uIHRvIGNoZWNrXG4gKiBAcGFyYW0gbG9naWMgICAgICAgICAgICAgICAgICAgICAgIC0gd2hhdCBraW5kIG9mIGxvZ2ljIHRvIHByZWZvcm0gISEgPSBtYXRjaCwgISA9IG5vdCBhIG1hdGNoXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZ2V4cFZhbGlkYXRvciA9XG4gIChcbiAgICByZWdFeHA6IFJlZ0V4cCxcbiAgICBsb2dpYzogUmVnRXhwTG9naWNhbE9wZXJhdGlvbnMsXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nLFxuICAgIGVycm9yPzogc3RyaW5nXG4gICk6IFZhbGlkYXRvckZuID0+XG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwgeyByZWdFeHAsIGVycm9yLCBlcnJvck5hbWUsIGxvZ2ljIH0pO1xuICB9O1xuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQ2hlY2tzIGlmIHRoZSBkYXRlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBlYXJsaWVyIHRoZW5cbiAqIHRoZSB2YWx1ZSBpbiB0aGUgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sLlxuICpcbiAqIEBwYXJhbSBkYXRlICAgICAgICAgICAgICAgICAgICAgICAgLSBEYXRlIHRvIHByZWZvcm0gdGhlIGNoZWNrIGFnYWluc3RcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxuICovXG5leHBvcnQgY29uc3QgZWFybGllclRoZW5WYWxpZGF0b3IgPVxuICAoZGF0ZTogRGF0ZSwgZXJyb3JOYW1lPzogc3RyaW5nLCBlcnJvcj86IHN0cmluZyk6IFZhbGlkYXRvckZuID0+XG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgcmV0dXJuIGVhcmxpZXJUaGVuVmFsaWRhdGlvbihjb250cm9sLCB7IGRhdGUsIGVycm9yLCBlcnJvck5hbWUgfSk7XG4gIH07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBDaGVja3MgaWYgdGhlIGRhdGUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGdyZWF0ZXIgdGhlblxuICogdGhlIHZhbHVlIGluIHRoZSBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXG4gKlxuICogQHBhcmFtIGRhdGUgICAgICAgICAgICAgICAgICAgICAgICAtIERhdGUgdG8gcHJlZm9ybSB0aGUgY2hlY2sgYWdhaW5zdFxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBsYXRlclRoZW5WYWxpZGF0b3IgPVxuICAoZGF0ZTogRGF0ZSwgZXJyb3JOYW1lPzogc3RyaW5nLCBlcnJvcj86IHN0cmluZyk6IFZhbGlkYXRvckZuID0+XG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgcmV0dXJuIGxhdGVyVGhlblZhbGlkYXRpb24oY29udHJvbCwgeyBkYXRlLCBlcnJvciwgZXJyb3JOYW1lIH0pO1xuICB9O1xuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZXMgdGhlIGRhdGUgdmFsdWVzIG9mIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBhbmRcbiAqIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cbiAqXG4gKiBAcGFyYW0gZmllbGROYW1lICAgICAgICAgICAgICAgICAgIC0gbmFtZSBvZiB0aGUgZmlsZWQgdG8gY29tcGFyZSBhZ2FpbnN0XG4gKiBAcGFyYW0gY29tcGFyaXNvbiAgICAgICAgICAgICAgICAgIC0gY29tcGFyaXNvbiB0byBwcmVmb3JtXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbXBhcmVUb1ZhbGlkYXRvciA9XG4gIChcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgICBjb21wYXJpc29uOiBDb21wYXJpc29uT3BlcmF0aW9ucyxcbiAgICBlcnJvck5hbWU/OiBzdHJpbmcsXG4gICAgZXJyb3I/OiBzdHJpbmdcbiAgKTogVmFsaWRhdG9yRm4gPT5cbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICByZXR1cm4gY29tcGFyZVRvVmFsaWRhdGlvbihjb250cm9sLCB7XG4gICAgICBmaWVsZE5hbWUsXG4gICAgICBjb21wYXJpc29uLFxuICAgICAgZXJyb3IsXG4gICAgICBlcnJvck5hbWUsXG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGNvbmRpdGlvbiBpcyBtZXQuXG4gKlxuICogQHBhcmFtIGNvbmRpdGlvbmFsICAgICAgICAgICAgICAgICAtIGNvbmRpdGlvbmFsIGZ1bmN0aW9uIG9yIGEgYm9vbGVhbiB2YWx1ZVxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCByZXF1aXJlZFdoZW5WYWxpZGF0b3IgPVxuICAoXG4gICAgY29uZGl0aW9uYWw6ICgoKSA9PiBib29sZWFuKSB8IGJvb2xlYW4sXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nLFxuICAgIGVycm9yPzogc3RyaW5nXG4gICk6IFZhbGlkYXRvckZuID0+XG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgcmV0dXJuIHJlcXVpcmVkV2hlblZhbGlkYXRpb24oY29udHJvbCwgeyBjb25kaXRpb25hbCwgZXJyb3IsIGVycm9yTmFtZSB9KTtcbiAgfTtcblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIG5vIHZhbHVlXG4gKiBhbmQgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBpdC5cbiAqXG4gKiBAcGFyYW0gbGluayAgICAgICAgICAgICAgICAgICAgICAgIC0gbmFtZSBvZiB0aGUgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgdG8gbGluayB0b1xuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBsaW5rVG9WYWxpZGF0b3IgPVxuICAobGluazogc3RyaW5nLCBlcnJvck5hbWU/OiBzdHJpbmcsIGVycm9yPzogc3RyaW5nKTogVmFsaWRhdG9yRm4gPT5cbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICByZXR1cm4gbGlua1RvVmFsaWRhdGlvbihjb250cm9sLCB7IGxpbmssIGVycm9yLCBlcnJvck5hbWUgfSk7XG4gIH07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhIHZhbHVlXG4gKiBhbmQgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGRvZXMgbm90LlxuICpcbiAqIEBwYXJhbSBsaW5rICAgICAgICAgICAgICAgICAgICAgICAgLSBuYW1lIG9mIHRoZSBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWNoIGEgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgbGlua2VkIHRvXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGxpbmtlZFRvVmFsaWRhdG9yID1cbiAgKGxpbms6IHN0cmluZywgZXJyb3JOYW1lPzogc3RyaW5nLCBlcnJvcj86IHN0cmluZyk6IFZhbGlkYXRvckZuID0+XG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgcmV0dXJuIGxpbmtlZFRvVmFsaWRhdGlvbihjb250cm9sLCB7IGxpbmssIGVycm9yLCBlcnJvck5hbWUgfSk7XG4gIH07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhIHZhbHVlXG4gKiB0aGF0IGZhaWxzIGEgZ2l2ZW4gbGVuZ3RoIGNvbXBhcmlzb24uXG4gKlxuICogQHBhcmFtIGxlbmd0aCAgICAgICAgICAgICAgICAgICAgICAtIG51bWVyaWMgdmFsdWUgb2YgbGVuZ3RoIHRvIGNvbXBlcmUgdG9cbiAqIEBwYXJhbSBjb21wYXJpc29uICAgICAgICAgICAgICAgICAgLSBudW1lcmljIHZhbHVlIG9mIGEgY29tcGFyaXNvbiB0byBwcmVmb3JtXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlIG9wdGlvbnMgYXJlOlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8XCIgLCBcIj5cIiAsIFwiPT1cIiAsIFwiPT09XCIgLCBcIjw9XCIgYW5kIFwiPj1cIlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQgaXM6IFwiPT09XCJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxuICovXG5leHBvcnQgY29uc3QgbGVuZ3RoVmFsaWRhdG9yID1cbiAgKFxuICAgIGxlbmd0aDogbnVtYmVyLFxuICAgIGNvbXBhcmlzb246IENvbXBhcmlzb25PcGVyYXRpb25zID0gXCI9PT1cIixcbiAgICBlcnJvck5hbWU/OiBzdHJpbmcsXG4gICAgZXJyb3I/OiBzdHJpbmdcbiAgKTogVmFsaWRhdG9yRm4gPT5cbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICByZXR1cm4gbGVuZ3RoVmFsaWRhdGlvbihjb250cm9sLCB7IGxlbmd0aCwgY29tcGFyaXNvbiwgZXJyb3IsIGVycm9yTmFtZSB9KTtcbiAgfTtcblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIGEgdmFsdWVcbiAqIHRoYXQgaXMgbm90IGluIGEgZ2l2ZW4gcmFuZ2UuXG4gKlxuICogQHBhcmFtIHN0YXJ0ICAgICAgICAgICAgICAgICAgICAgICAtIGEgbWluaW11bSBsZW5ndGggdmFsdWVcbiAqIEBwYXJhbSBlbmQgICAgICAgICAgICAgICAgICAgICAgICAgLSBhIG1heGltdW0gbGVuZ3RoIHZhbHVlXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmdlVmFsaWRhdG9yID1cbiAgKFxuICAgIHN0YXJ0OiBudW1iZXIsXG4gICAgZW5kOiBudW1iZXIsXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nLFxuICAgIGVycm9yPzogc3RyaW5nXG4gICk6IFZhbGlkYXRvckZuID0+XG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgcmV0dXJuIHJhbmdlVmFsaWRhdGlvbihjb250cm9sLCB7IHN0YXJ0LCBlbmQsIGVycm9yLCBlcnJvck5hbWUgfSk7XG4gIH07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhIHZhbHVlXG4gKiB0aGF0IGZhaWxzIGEgZ2l2ZW4gd29yZCBjb3VudCBjb21wYXJpc29uLlxuICpcbiAqIEBwYXJhbSBjb3VudCAgICAgICAgICAgICAgICAgICAgICAgLSBudW1lcmljIHZhbHVlIG9mIHdvcmQgY291bnQgdG8gY29tcGVyZSB0b1xuICogQHBhcmFtIGNvbXBhcmlzb24gICAgICAgICAgICAgICAgICAtIG51bWVyaWMgdmFsdWUgb2YgYSBjb21wYXJpc29uIHRvIHByZWZvcm1cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGUgb3B0aW9ucyBhcmU6XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxcIiAsIFwiPlwiICwgXCI9PVwiICwgXCI9PT1cIiAsIFwiPD1cIiBhbmQgXCI+PVwiXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdCBpczogXCI9PT1cIlxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCB3b3JkQ291bnRWYWxpZGF0b3IgPVxuICAoXG4gICAgY291bnQ6IG51bWJlcixcbiAgICBjb21wYXJpc29uOiBDb21wYXJpc29uT3BlcmF0aW9ucyA9IFwiPT09XCIsXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nLFxuICAgIGVycm9yPzogc3RyaW5nXG4gICk6IFZhbGlkYXRvckZuID0+XG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgcmV0dXJuIHdvcmRDb3VudFZhbGlkYXRpb24oY29udHJvbCwge1xuICAgICAgY291bnQsXG4gICAgICBjb21wYXJpc29uLFxuICAgICAgZXJyb3IsXG4gICAgICBlcnJvck5hbWUsXG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhIHZhbHVlXG4gKiB3aGl0IGEgd29yZCBjb3VudCBpcyBub3QgaW4gYSBnaXZlbiByYW5nZS5cbiAqXG4gKiBAcGFyYW0gc3RhcnQgICAgICAgICAgICAgICAgICAgICAgIC0gYSBtaW5pbXVtIHdvcmQgY291bnQgdmFsdWVcbiAqIEBwYXJhbSBlbmQgICAgICAgICAgICAgICAgICAgICAgICAgLSBhIG1heGltdW0gd29yZCBjb3VudCB2YWx1ZVxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCB3b3JkQ291bnRSYW5nZVZhbGlkYXRvciA9XG4gIChcbiAgICBzdGFydDogbnVtYmVyLFxuICAgIGVuZDogbnVtYmVyLFxuICAgIGVycm9yTmFtZT86IHN0cmluZyxcbiAgICBlcnJvcj86IHN0cmluZ1xuICApOiBWYWxpZGF0b3JGbiA9PlxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIHJldHVybiB3b3JkQ291bnRSYW5nZVZhbGlkYXRpb24oY29udHJvbCwgeyBzdGFydCwgZW5kLCBlcnJvciwgZXJyb3JOYW1lIH0pO1xuICB9O1xuIl19