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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUtZm9ybXMtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3ZhbGlkYXRvcnMvcmVhY3RpdmUtZm9ybXMvcmVhY3RpdmUtZm9ybXMtdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZix3QkFBd0IsRUFDeEIsbUJBQW1CLEdBQ3BCLE1BQU0saUNBQWlDLENBQUM7QUFJekMsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLHNCQUFzQixHQUN2QixNQUFNLCtCQUErQixDQUFDO0FBRXZDOzs7Ozs7Ozs7O0dBVUc7QUFDSCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQzFCLENBQ0UsTUFBYyxFQUNkLEtBQThCLEVBQzlCLFNBQWtCLEVBQ2xCLEtBQWMsRUFDRCxFQUFFLENBQ2pCLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxPQUFPLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDeEUsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUMvQixDQUFDLElBQVUsRUFBRSxTQUFrQixFQUFFLEtBQWMsRUFBZSxFQUFFLENBQ2hFLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxPQUFPLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUNwRSxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQzdCLENBQUMsSUFBVSxFQUFFLFNBQWtCLEVBQUUsS0FBYyxFQUFlLEVBQUUsQ0FDaEUsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sbUJBQW1CLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ2xFLENBQUMsQ0FBQztBQUVKOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQzdCLENBQ0UsU0FBaUIsRUFDakIsVUFBZ0MsRUFDaEMsU0FBa0IsRUFDbEIsS0FBYyxFQUNELEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sbUJBQW1CLENBQUMsT0FBTyxFQUFFO1FBQ2xDLFNBQVM7UUFDVCxVQUFVO1FBQ1YsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FDaEMsQ0FDRSxXQUFzQyxFQUN0QyxTQUFrQixFQUNsQixLQUFjLEVBQ0QsRUFBRSxDQUNqQixDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDNUUsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FDMUIsQ0FBQyxJQUFZLEVBQUUsU0FBa0IsRUFBRSxLQUFjLEVBQWUsRUFBRSxDQUNsRSxDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDL0QsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FDNUIsQ0FBQyxJQUFZLEVBQUUsU0FBa0IsRUFBRSxLQUFjLEVBQWUsRUFBRSxDQUNsRSxDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDSCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQzFCLENBQ0UsTUFBYyxFQUNkLGFBQW1DLEtBQUssRUFDeEMsU0FBa0IsRUFDbEIsS0FBYyxFQUNELEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUM3RSxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FDekIsQ0FDRSxLQUFhLEVBQ2IsR0FBVyxFQUNYLFNBQWtCLEVBQ2xCLEtBQWMsRUFDRCxFQUFFLENBQ2pCLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxPQUFPLGVBQWUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ3BFLENBQUMsQ0FBQztBQUVKOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQzdCLENBQ0UsS0FBYSxFQUNiLGFBQW1DLEtBQUssRUFDeEMsU0FBa0IsRUFDbEIsS0FBYyxFQUNELEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sbUJBQW1CLENBQUMsT0FBTyxFQUFFO1FBQ2xDLEtBQUs7UUFDTCxVQUFVO1FBQ1YsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUNsQyxDQUNFLEtBQWEsRUFDYixHQUFXLEVBQ1gsU0FBa0IsRUFDbEIsS0FBYyxFQUNELEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sd0JBQXdCLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUM3RSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBsZW5ndGhWYWxpZGF0aW9uLFxyXG4gIHJhbmdlVmFsaWRhdGlvbixcclxuICB3b3JkQ291bnRSYW5nZVZhbGlkYXRpb24sXHJcbiAgd29yZENvdW50VmFsaWRhdGlvbixcclxufSBmcm9tIFwiLi8uLi8uLi92YWxpZGF0aW9ucy92YWxpZGF0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBDb21wYXJpc29uT3BlcmF0aW9ucywgUmVnRXhwTG9naWNhbE9wZXJhdGlvbnMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHtcclxuICBjb21wYXJlVG9WYWxpZGF0aW9uLFxyXG4gIGVhcmxpZXJUaGVuVmFsaWRhdGlvbixcclxuICBsYXRlclRoZW5WYWxpZGF0aW9uLFxyXG4gIGxpbmtUb1ZhbGlkYXRpb24sXHJcbiAgbGlua2VkVG9WYWxpZGF0aW9uLFxyXG4gIHJlZ2V4cFZhbGlkYXRpb24sXHJcbiAgcmVxdWlyZWRXaGVuVmFsaWRhdGlvbixcclxufSBmcm9tIFwiLi4vLi4vdmFsaWRhdGlvbnMvdmFsaWRhdGlvbnNcIjtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBQcmVmb3JtcyBhIFJlZ0V4IGNoZWNrIG9uIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cclxuICpcclxuICogQHBhcmFtIHJlZ0V4cCAgICAgICAgICAgICAgICAgICAgICAtIFJlZ3VsYXIgZXhwcmVzc2lvbiB0byBjaGVja1xyXG4gKiBAcGFyYW0gbG9naWMgICAgICAgICAgICAgICAgICAgICAgIC0gd2hhdCBraW5kIG9mIGxvZ2ljIHRvIHByZWZvcm0gISEgPSBtYXRjaCwgISA9IG5vdCBhIG1hdGNoXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCByZWdleHBWYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIHJlZ0V4cDogUmVnRXhwLFxyXG4gICAgbG9naWM6IFJlZ0V4cExvZ2ljYWxPcGVyYXRpb25zLFxyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBzdHJpbmdcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7IHJlZ0V4cCwgZXJyb3IsIGVycm9yTmFtZSwgbG9naWMgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgdGhlIGRhdGUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGVhcmxpZXIgdGhlblxyXG4gKiB0aGUgdmFsdWUgaW4gdGhlIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cclxuICpcclxuICogQHBhcmFtIGRhdGUgICAgICAgICAgICAgICAgICAgICAgICAtIERhdGUgdG8gcHJlZm9ybSB0aGUgY2hlY2sgYWdhaW5zdFxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZWFybGllclRoZW5WYWxpZGF0b3IgPVxyXG4gIChkYXRlOiBEYXRlLCBlcnJvck5hbWU/OiBzdHJpbmcsIGVycm9yPzogc3RyaW5nKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIGVhcmxpZXJUaGVuVmFsaWRhdGlvbihjb250cm9sLCB7IGRhdGUsIGVycm9yLCBlcnJvck5hbWUgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgdGhlIGRhdGUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGdyZWF0ZXIgdGhlblxyXG4gKiB0aGUgdmFsdWUgaW4gdGhlIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cclxuICpcclxuICogQHBhcmFtIGRhdGUgICAgICAgICAgICAgICAgICAgICAgICAtIERhdGUgdG8gcHJlZm9ybSB0aGUgY2hlY2sgYWdhaW5zdFxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGF0ZXJUaGVuVmFsaWRhdG9yID1cclxuICAoZGF0ZTogRGF0ZSwgZXJyb3JOYW1lPzogc3RyaW5nLCBlcnJvcj86IHN0cmluZyk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiBsYXRlclRoZW5WYWxpZGF0aW9uKGNvbnRyb2wsIHsgZGF0ZSwgZXJyb3IsIGVycm9yTmFtZSB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENvbXBhcmVzIHRoZSBkYXRlIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgYW5kXHJcbiAqIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cclxuICpcclxuICogQHBhcmFtIGZpZWxkTmFtZSAgICAgICAgICAgICAgICAgICAtIG5hbWUgb2YgdGhlIGZpbGVkIHRvIGNvbXBhcmUgYWdhaW5zdFxyXG4gKiBAcGFyYW0gY29tcGFyaXNvbiAgICAgICAgICAgICAgICAgIC0gY29tcGFyaXNvbiB0byBwcmVmb3JtXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBjb21wYXJlVG9WYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGZpZWxkTmFtZTogc3RyaW5nLFxyXG4gICAgY29tcGFyaXNvbjogQ29tcGFyaXNvbk9wZXJhdGlvbnMsXHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IHN0cmluZ1xyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiBjb21wYXJlVG9WYWxpZGF0aW9uKGNvbnRyb2wsIHtcclxuICAgICAgZmllbGROYW1lLFxyXG4gICAgICBjb21wYXJpc29uLFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JOYW1lLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBSZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGNvbmRpdGlvbiBpcyBtZXQuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb25kaXRpb25hbCAgICAgICAgICAgICAgICAgLSBjb25kaXRpb25hbCBmdW5jdGlvbiBvciBhIGJvb2xlYW4gdmFsdWVcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkV2hlblZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgY29uZGl0aW9uYWw6ICgoKSA9PiBib29sZWFuKSB8IGJvb2xlYW4sXHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IHN0cmluZ1xyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZXF1aXJlZFdoZW5WYWxpZGF0aW9uKGNvbnRyb2wsIHsgY29uZGl0aW9uYWwsIGVycm9yLCBlcnJvck5hbWUgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBSZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBubyB2YWx1ZVxyXG4gKiBhbmQgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBpdC5cclxuICpcclxuICogQHBhcmFtIGxpbmsgICAgICAgICAgICAgICAgICAgICAgICAtIG5hbWUgb2YgdGhlIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIHRvIGxpbmsgdG9cclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxpbmtUb1ZhbGlkYXRvciA9XHJcbiAgKGxpbms6IHN0cmluZywgZXJyb3JOYW1lPzogc3RyaW5nLCBlcnJvcj86IHN0cmluZyk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiBsaW5rVG9WYWxpZGF0aW9uKGNvbnRyb2wsIHsgbGluaywgZXJyb3IsIGVycm9yTmFtZSB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIGEgdmFsdWVcclxuICogYW5kIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBkb2VzIG5vdC5cclxuICpcclxuICogQHBhcmFtIGxpbmsgICAgICAgICAgICAgICAgICAgICAgICAtIG5hbWUgb2YgdGhlIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGljaCBhIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGxpbmtlZCB0b1xyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGlua2VkVG9WYWxpZGF0b3IgPVxyXG4gIChsaW5rOiBzdHJpbmcsIGVycm9yTmFtZT86IHN0cmluZywgZXJyb3I/OiBzdHJpbmcpOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gbGlua2VkVG9WYWxpZGF0aW9uKGNvbnRyb2wsIHsgbGluaywgZXJyb3IsIGVycm9yTmFtZSB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIGEgdmFsdWVcclxuICogdGhhdCBmYWlscyBhIGdpdmVuIGxlbmd0aCBjb21wYXJpc29uLlxyXG4gKlxyXG4gKiBAcGFyYW0gbGVuZ3RoICAgICAgICAgICAgICAgICAgICAgIC0gbnVtZXJpYyB2YWx1ZSBvZiBsZW5ndGggdG8gY29tcGVyZSB0b1xyXG4gKiBAcGFyYW0gY29tcGFyaXNvbiAgICAgICAgICAgICAgICAgIC0gbnVtZXJpYyB2YWx1ZSBvZiBhIGNvbXBhcmlzb24gdG8gcHJlZm9ybVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlIG9wdGlvbnMgYXJlOlxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxcIiAsIFwiPlwiICwgXCI9PVwiICwgXCI9PT1cIiAsIFwiPD1cIiBhbmQgXCI+PVwiXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0IGlzOiBcIj09PVwiXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBsZW5ndGhWYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGxlbmd0aDogbnVtYmVyLFxyXG4gICAgY29tcGFyaXNvbjogQ29tcGFyaXNvbk9wZXJhdGlvbnMgPSBcIj09PVwiLFxyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBzdHJpbmdcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gbGVuZ3RoVmFsaWRhdGlvbihjb250cm9sLCB7IGxlbmd0aCwgY29tcGFyaXNvbiwgZXJyb3IsIGVycm9yTmFtZSB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIGEgdmFsdWVcclxuICogdGhhdCBpcyBub3QgaW4gYSBnaXZlbiByYW5nZS5cclxuICpcclxuICogQHBhcmFtIHN0YXJ0ICAgICAgICAgICAgICAgICAgICAgICAtIGEgbWluaW11bSBsZW5ndGggdmFsdWVcclxuICogQHBhcmFtIGVuZCAgICAgICAgICAgICAgICAgICAgICAgICAtIGEgbWF4aW11bSBsZW5ndGggdmFsdWVcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJhbmdlVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBzdGFydDogbnVtYmVyLFxyXG4gICAgZW5kOiBudW1iZXIsXHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IHN0cmluZ1xyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByYW5nZVZhbGlkYXRpb24oY29udHJvbCwgeyBzdGFydCwgZW5kLCBlcnJvciwgZXJyb3JOYW1lIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgYSB2YWx1ZVxyXG4gKiB0aGF0IGZhaWxzIGEgZ2l2ZW4gd29yZCBjb3VudCBjb21wYXJpc29uLlxyXG4gKlxyXG4gKiBAcGFyYW0gY291bnQgICAgICAgICAgICAgICAgICAgICAgIC0gbnVtZXJpYyB2YWx1ZSBvZiB3b3JkIGNvdW50IHRvIGNvbXBlcmUgdG9cclxuICogQHBhcmFtIGNvbXBhcmlzb24gICAgICAgICAgICAgICAgICAtIG51bWVyaWMgdmFsdWUgb2YgYSBjb21wYXJpc29uIHRvIHByZWZvcm1cclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZSBvcHRpb25zIGFyZTpcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8XCIgLCBcIj5cIiAsIFwiPT1cIiAsIFwiPT09XCIgLCBcIjw9XCIgYW5kIFwiPj1cIlxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdCBpczogXCI9PT1cIlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgd29yZENvdW50VmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBjb3VudDogbnVtYmVyLFxyXG4gICAgY29tcGFyaXNvbjogQ29tcGFyaXNvbk9wZXJhdGlvbnMgPSBcIj09PVwiLFxyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBzdHJpbmdcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gd29yZENvdW50VmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIGNvdW50LFxyXG4gICAgICBjb21wYXJpc29uLFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JOYW1lLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBSZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhIHZhbHVlXHJcbiAqIHdoaXQgYSB3b3JkIGNvdW50IGlzIG5vdCBpbiBhIGdpdmVuIHJhbmdlLlxyXG4gKlxyXG4gKiBAcGFyYW0gc3RhcnQgICAgICAgICAgICAgICAgICAgICAgIC0gYSBtaW5pbXVtIHdvcmQgY291bnQgdmFsdWVcclxuICogQHBhcmFtIGVuZCAgICAgICAgICAgICAgICAgICAgICAgICAtIGEgbWF4aW11bSB3b3JkIGNvdW50IHZhbHVlXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCB3b3JkQ291bnRSYW5nZVZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgc3RhcnQ6IG51bWJlcixcclxuICAgIGVuZDogbnVtYmVyLFxyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBzdHJpbmdcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gd29yZENvdW50UmFuZ2VWYWxpZGF0aW9uKGNvbnRyb2wsIHsgc3RhcnQsIGVuZCwgZXJyb3IsIGVycm9yTmFtZSB9KTtcclxuICB9O1xyXG4iXX0=