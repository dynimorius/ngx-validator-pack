import { lengthValidation, rangeValidation, } from "./../../validations/validations";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUtZm9ybXMtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3ZhbGlkYXRvcnMvcmVhY3RpdmUtZm9ybXMvcmVhY3RpdmUtZm9ybXMtdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGVBQWUsR0FDaEIsTUFBTSxpQ0FBaUMsQ0FBQztBQVd6QyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFDaEIsc0JBQXNCLEdBQ3ZCLE1BQU0sK0JBQStCLENBQUM7QUFFdkM7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FDMUIsQ0FDRSxNQUFjLEVBQ2QsS0FBOEIsRUFDOUIsU0FBa0IsRUFDbEIsS0FBYyxFQUNELEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUN4RSxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQy9CLENBQUMsSUFBVSxFQUFFLFNBQWtCLEVBQUUsS0FBYyxFQUFlLEVBQUUsQ0FDaEUsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8scUJBQXFCLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ3BFLENBQUMsQ0FBQztBQUVKOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUM3QixDQUFDLElBQVUsRUFBRSxTQUFrQixFQUFFLEtBQWMsRUFBZSxFQUFFLENBQ2hFLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxPQUFPLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUNsRSxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQzdCLENBQ0UsU0FBaUIsRUFDakIsVUFBZ0MsRUFDaEMsU0FBa0IsRUFDbEIsS0FBYyxFQUNELEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sbUJBQW1CLENBQUMsT0FBTyxFQUFFO1FBQ2xDLFNBQVM7UUFDVCxVQUFVO1FBQ1YsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUNoQyxDQUNFLFdBQXNDLEVBQ3RDLFNBQWtCLEVBQ2xCLEtBQWMsRUFDRCxFQUFFLENBQ2pCLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxPQUFPLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUM1RSxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQzFCLENBQUMsSUFBWSxFQUFFLFNBQWtCLEVBQUUsS0FBYyxFQUFlLEVBQUUsQ0FDbEUsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELENBQUMsQ0FBQztBQUVKOzs7Ozs7Ozs7O0dBVUc7QUFDSCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FDNUIsQ0FBQyxJQUFZLEVBQUUsU0FBa0IsRUFBRSxLQUFjLEVBQWUsRUFBRSxDQUNsRSxDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FDMUIsQ0FDRSxNQUFjLEVBQ2QsYUFBbUMsS0FBSyxFQUN4QyxTQUFrQixFQUNsQixLQUFjLEVBQ0QsRUFBRSxDQUNqQixDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQzdFLENBQUMsQ0FBQztBQUVKOzs7Ozs7Ozs7O0dBVUc7QUFDSCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQ3pCLENBQ0UsS0FBYSxFQUNiLEdBQVcsRUFDWCxTQUFrQixFQUNsQixLQUFjLEVBQ0QsRUFBRSxDQUNqQixDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxlQUFlLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUNwRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGxlbmd0aFZhbGlkYXRpb24sXHJcbiAgcmFuZ2VWYWxpZGF0aW9uLFxyXG59IGZyb20gXCIuLy4uLy4uL3ZhbGlkYXRpb25zL3ZhbGlkYXRpb25zXCI7XHJcbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cclxuICovXHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IENvbXBhcmlzb25PcGVyYXRpb25zLCBSZWdFeHBMb2dpY2FsT3BlcmF0aW9ucyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQge1xyXG4gIGNvbXBhcmVUb1ZhbGlkYXRpb24sXHJcbiAgZWFybGllclRoZW5WYWxpZGF0aW9uLFxyXG4gIGxhdGVyVGhlblZhbGlkYXRpb24sXHJcbiAgbGlua1RvVmFsaWRhdGlvbixcclxuICBsaW5rZWRUb1ZhbGlkYXRpb24sXHJcbiAgcmVnZXhwVmFsaWRhdGlvbixcclxuICByZXF1aXJlZFdoZW5WYWxpZGF0aW9uLFxyXG59IGZyb20gXCIuLi8uLi92YWxpZGF0aW9ucy92YWxpZGF0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFByZWZvcm1zIGEgUmVnRXggY2hlY2sgb24gdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sLlxyXG4gKlxyXG4gKiBAcGFyYW0gcmVnRXhwICAgICAgICAgICAgICAgICAgICAgIC0gUmVndWxhciBleHByZXNzaW9uIHRvIGNoZWNrXHJcbiAqIEBwYXJhbSBsb2dpYyAgICAgICAgICAgICAgICAgICAgICAgLSB3aGF0IGtpbmQgb2YgbG9naWMgdG8gcHJlZm9ybSAhISA9IG1hdGNoLCAhID0gbm90IGEgbWF0Y2hcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlZ2V4cFZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgcmVnRXhwOiBSZWdFeHAsXHJcbiAgICBsb2dpYzogUmVnRXhwTG9naWNhbE9wZXJhdGlvbnMsXHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IHN0cmluZ1xyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHsgcmVnRXhwLCBlcnJvciwgZXJyb3JOYW1lLCBsb2dpYyB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiB0aGUgZGF0ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgZWFybGllciB0aGVuXHJcbiAqIHRoZSB2YWx1ZSBpbiB0aGUgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sLlxyXG4gKlxyXG4gKiBAcGFyYW0gZGF0ZSAgICAgICAgICAgICAgICAgICAgICAgIC0gRGF0ZSB0byBwcmVmb3JtIHRoZSBjaGVjayBhZ2FpbnN0XHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBlYXJsaWVyVGhlblZhbGlkYXRvciA9XHJcbiAgKGRhdGU6IERhdGUsIGVycm9yTmFtZT86IHN0cmluZywgZXJyb3I/OiBzdHJpbmcpOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gZWFybGllclRoZW5WYWxpZGF0aW9uKGNvbnRyb2wsIHsgZGF0ZSwgZXJyb3IsIGVycm9yTmFtZSB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgdGhlIGRhdGUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGdyZWF0ZXIgdGhlblxyXG4gKiB0aGUgdmFsdWUgaW4gdGhlIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cclxuICpcclxuICogQHBhcmFtIGRhdGUgICAgICAgICAgICAgICAgICAgICAgICAtIERhdGUgdG8gcHJlZm9ybSB0aGUgY2hlY2sgYWdhaW5zdFxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGF0ZXJUaGVuVmFsaWRhdG9yID1cclxuICAoZGF0ZTogRGF0ZSwgZXJyb3JOYW1lPzogc3RyaW5nLCBlcnJvcj86IHN0cmluZyk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiBsYXRlclRoZW5WYWxpZGF0aW9uKGNvbnRyb2wsIHsgZGF0ZSwgZXJyb3IsIGVycm9yTmFtZSB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb21wYXJlcyB0aGUgZGF0ZSB2YWx1ZXMgb2YgdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGFuZFxyXG4gKiBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSBmaWVsZE5hbWUgICAgICAgICAgICAgICAgICAgLSBuYW1lIG9mIHRoZSBmaWxlZCB0byBjb21wYXJlIGFnYWluc3RcclxuICogQHBhcmFtIGNvbXBhcmlzb24gICAgICAgICAgICAgICAgICAtIGNvbXBhcmlzb24gdG8gcHJlZm9ybVxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY29tcGFyZVRvVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcclxuICAgIGNvbXBhcmlzb246IENvbXBhcmlzb25PcGVyYXRpb25zLFxyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBzdHJpbmdcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gY29tcGFyZVRvVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIGZpZWxkTmFtZSxcclxuICAgICAgY29tcGFyaXNvbixcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGVycm9yTmFtZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgY29uZGl0aW9uIGlzIG1ldC5cclxuICpcclxuICogQHBhcmFtIGNvbmRpdGlvbmFsICAgICAgICAgICAgICAgICAtIGNvbmRpdGlvbmFsIGZ1bmN0aW9uIG9yIGEgYm9vbGVhbiB2YWx1ZVxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVxdWlyZWRXaGVuVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBjb25kaXRpb25hbDogKCgpID0+IGJvb2xlYW4pIHwgYm9vbGVhbixcclxuICAgIGVycm9yTmFtZT86IHN0cmluZyxcclxuICAgIGVycm9yPzogc3RyaW5nXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVpcmVkV2hlblZhbGlkYXRpb24oY29udHJvbCwgeyBjb25kaXRpb25hbCwgZXJyb3IsIGVycm9yTmFtZSB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBSZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBubyB2YWx1ZVxyXG4gKiBhbmQgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBpdC5cclxuICpcclxuICogQHBhcmFtIGxpbmsgICAgICAgICAgICAgICAgICAgICAgICAtIG5hbWUgb2YgdGhlIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIHRvIGxpbmsgdG9cclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxpbmtUb1ZhbGlkYXRvciA9XHJcbiAgKGxpbms6IHN0cmluZywgZXJyb3JOYW1lPzogc3RyaW5nLCBlcnJvcj86IHN0cmluZyk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiBsaW5rVG9WYWxpZGF0aW9uKGNvbnRyb2wsIHsgbGluaywgZXJyb3IsIGVycm9yTmFtZSB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBSZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhIHZhbHVlXHJcbiAqIGFuZCBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgZG9lcyBub3QuXHJcbiAqXHJcbiAqIEBwYXJhbSBsaW5rICAgICAgICAgICAgICAgICAgICAgICAgLSBuYW1lIG9mIHRoZSBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpY2ggYSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBsaW5rZWQgdG9cclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxpbmtlZFRvVmFsaWRhdG9yID1cclxuICAobGluazogc3RyaW5nLCBlcnJvck5hbWU/OiBzdHJpbmcsIGVycm9yPzogc3RyaW5nKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIGxpbmtlZFRvVmFsaWRhdGlvbihjb250cm9sLCB7IGxpbmssIGVycm9yLCBlcnJvck5hbWUgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgYSB2YWx1ZVxyXG4gKiB0aGF0IGZhaWxzIGEgZ2l2ZW4gbGVuZ3RoIGNvbXBhcmlzb24uXHJcbiAqXHJcbiAqIEBwYXJhbSBsZW5ndGggICAgICAgICAgICAgICAgICAgICAgLSBudW1lcmljIHZhbHVlIG9mIGxlbmd0aCB0byBjb21wZXJlIHRvXHJcbiAqIEBwYXJhbSBjb21wYXJpc29uICAgICAgICAgICAgICAgICAgLSBudW1lcmljIHZhbHVlIG9mIGEgY29tcGFyaXNvbiB0byBwcmVmb3JtXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGUgb3B0aW9ucyBhcmU6XHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPFwiICwgXCI+XCIgLCBcIj09XCIgLCBcIj09PVwiICwgXCI8PVwiIGFuZCBcIj49XCJcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQgaXM6IFwiPT09XCJcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxlbmd0aFZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgbGVuZ3RoOiBudW1iZXIsXHJcbiAgICBjb21wYXJpc29uOiBDb21wYXJpc29uT3BlcmF0aW9ucyA9IFwiPT09XCIsXHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IHN0cmluZ1xyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiBsZW5ndGhWYWxpZGF0aW9uKGNvbnRyb2wsIHsgbGVuZ3RoLCBjb21wYXJpc29uLCBlcnJvciwgZXJyb3JOYW1lIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIGEgdmFsdWVcclxuICogdGhhdCBpcyBub3QgaW4gYSBnaXZlbiByYW5nZS5cclxuICpcclxuICogQHBhcmFtIHN0YXJ0ICAgICAgICAgICAgICAgICAgICAgICAtIGEgbWluaW11bSBsZW5ndGggdmFsdWVcclxuICogQHBhcmFtIGVuZCAgICAgICAgICAgICAgICAgICAgICAgICAtIGEgbWF4aW11bSBsZW5ndGggdmFsdWVcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJhbmdlVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBzdGFydDogbnVtYmVyLFxyXG4gICAgZW5kOiBudW1iZXIsXHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IHN0cmluZ1xyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByYW5nZVZhbGlkYXRpb24oY29udHJvbCwgeyBzdGFydCwgZW5kLCBlcnJvciwgZXJyb3JOYW1lIH0pO1xyXG4gIH07XHJcbiJdfQ==