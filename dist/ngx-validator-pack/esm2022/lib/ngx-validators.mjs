/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { compareDates, prepareToCompare, } from "./helpers/date";
/**
 * @description
 * Preforms a RegEx check on value in the given FromControl / AbstractControl
 *
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const regexpValidator = (regexp, errorName, error) => (control) => {
    error = error || "This control did not match a given regular expression.";
    const errors = typeof error === "string"
        ? { [errorName ?? "regexpValidator"]: error }
        : error;
    return !control.value || regexp.test(control.value) ? null : errors;
};
/**
 * @description
 * Preforms a RegEx check on value in the given FromControl / AbstractControl
 *
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const regexpNotValidator = (regexp, errorName, error) => (control) => {
    error = error || "This control matched a given regular expression.";
    const errors = typeof error === "string"
        ? { [errorName ?? "regexpValidator"]: error }
        : error;
    return !control.value || !regexp.test(control.value) ? null : errors;
};
/**
 * @description
 * Checks if the date in the given FromControl / AbstractControl is earlier then
 * the value in the specified FromControl / AbstractControl
 *
 * @param {AbstractControl}           - AbstractControl to preform the check against
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const earlierThenValidator = (date, errorName, error) => (control) => {
    error = error || `This control must have a value earlier then ${date}.`;
    const errors = typeof error === "string"
        ? { [errorName ?? "earlierThen"]: error }
        : error;
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
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const laterThenValidator = (date, errorName, error) => (control) => {
    error = error || `This control must have a value later then ${date}.`;
    const errors = typeof error === "string" ? { [errorName ?? "laterThen"]: error } : error;
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
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const compareToValidator = (filedName, comparison, errorName, error) => (control) => {
    const date = control.parent?.get(filedName)?.value;
    if (date) {
        error = error || `Value comparison with ${date} failed.`;
        const errors = typeof error === "string"
            ? { [errorName ?? "dateComparison"]: error }
            : error;
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
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredWhenValidator = (conditional, errorName, error) => (control) => {
    error = error || "This control has a conditional set on it.";
    const errors = typeof error === "string"
        ? { [errorName ?? "requiredWhen"]: error }
        : error;
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
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const linkToValidator = (linkTo, errorName, error) => (control) => {
    error = error || `This control has a link to ${linkTo}.`;
    const errors = typeof error === "string" ? { [errorName ?? "linkTo"]: error } : error;
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
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const linkedToValidator = (linkedTo, errorName, error) => (control) => {
    error = error || `This control is linked to ${linkedTo}.`;
    const errors = typeof error === "string" ? { [errorName ?? "linkTo"]: error } : error;
    const link = control.parent?.get(linkedTo);
    return !!control?.value && !link?.value ? errors : null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXZhbGlkYXRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9uZ3gtdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQ0wsWUFBWSxFQUVaLGdCQUFnQixHQUNqQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUMxQixDQUNFLE1BQWMsRUFDZCxTQUFrQixFQUNsQixLQUFpQyxFQUNwQixFQUFFLENBQ2pCLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxLQUFLLEdBQUcsS0FBSyxJQUFJLHdEQUF3RCxDQUFDO0lBQzFFLE1BQU0sTUFBTSxHQUNWLE9BQU8sS0FBSyxLQUFLLFFBQVE7UUFDdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUksaUJBQWlCLENBQUMsRUFBRSxLQUFLLEVBQUU7UUFDN0MsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUVaLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUN0RSxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUM3QixDQUNFLE1BQWMsRUFDZCxTQUFrQixFQUNsQixLQUFpQyxFQUNwQixFQUFFLENBQ2pCLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxLQUFLLEdBQUcsS0FBSyxJQUFJLGtEQUFrRCxDQUFDO0lBQ3BFLE1BQU0sTUFBTSxHQUNWLE9BQU8sS0FBSyxLQUFLLFFBQVE7UUFDdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUksaUJBQWlCLENB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QUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsS0FBSyxHQUFHLEtBQUssSUFBSSw2QkFBNkIsUUFBUSxHQUFHLENBQUM7SUFDMUQsTUFBTSxNQUFNLEdBQ1YsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFFekUsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzFELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cclxuICovXHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcbiAgY29tcGFyZURhdGVzLFxyXG4gIENvbXBhcmlzb25PcGVyYXRpb25zLFxyXG4gIHByZXBhcmVUb0NvbXBhcmUsXHJcbn0gZnJvbSBcIi4vaGVscGVycy9kYXRlXCI7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFByZWZvcm1zIGEgUmVnRXggY2hlY2sgb24gdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVnRXhwfSAgICAgICAgICAgICAgICAgICAgLSBSZWd1bGFyIGV4cHJlc3Npb24gdG8gY2hlY2tcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge1ZhbGlkYXRpb25FcnJvcnMgfCBzdHJpbmd9IC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlZ2V4cFZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgcmVnZXhwOiBSZWdFeHAsXHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IFZhbGlkYXRpb25FcnJvcnMgfCBzdHJpbmdcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICBlcnJvciA9IGVycm9yIHx8IFwiVGhpcyBjb250cm9sIGRpZCBub3QgbWF0Y2ggYSBnaXZlbiByZWd1bGFyIGV4cHJlc3Npb24uXCI7XHJcbiAgICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPVxyXG4gICAgICB0eXBlb2YgZXJyb3IgPT09IFwic3RyaW5nXCJcclxuICAgICAgICA/IHsgW2Vycm9yTmFtZSA/PyBcInJlZ2V4cFZhbGlkYXRvclwiXTogZXJyb3IgfVxyXG4gICAgICAgIDogZXJyb3I7XHJcblxyXG4gICAgcmV0dXJuICFjb250cm9sLnZhbHVlIHx8IHJlZ2V4cC50ZXN0KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IGVycm9ycztcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBQcmVmb3JtcyBhIFJlZ0V4IGNoZWNrIG9uIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbFxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlZ0V4cH0gICAgICAgICAgICAgICAgICAgIC0gUmVndWxhciBleHByZXNzaW9uIHRvIGNoZWNrXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIHtWYWxpZGF0aW9uRXJyb3JzIHwgc3RyaW5nfSAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCByZWdleHBOb3RWYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIHJlZ2V4cDogUmVnRXhwLFxyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBWYWxpZGF0aW9uRXJyb3JzIHwgc3RyaW5nXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgZXJyb3IgPSBlcnJvciB8fCBcIlRoaXMgY29udHJvbCBtYXRjaGVkIGEgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uLlwiO1xyXG4gICAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID1cclxuICAgICAgdHlwZW9mIGVycm9yID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgPyB7IFtlcnJvck5hbWUgPz8gXCJyZWdleHBWYWxpZGF0b3JcIl06IGVycm9yIH1cclxuICAgICAgICA6IGVycm9yO1xyXG5cclxuICAgIHJldHVybiAhY29udHJvbC52YWx1ZSB8fCAhcmVnZXhwLnRlc3QoY29udHJvbC52YWx1ZSkgPyBudWxsIDogZXJyb3JzO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiB0aGUgZGF0ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgZWFybGllciB0aGVuXHJcbiAqIHRoZSB2YWx1ZSBpbiB0aGUgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sXHJcbiAqXHJcbiAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSAgICAgICAgICAgLSBBYnN0cmFjdENvbnRyb2wgdG8gcHJlZm9ybSB0aGUgY2hlY2sgYWdhaW5zdFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7VmFsaWRhdGlvbkVycm9ycyB8IHN0cmluZ30gLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZWFybGllclRoZW5WYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGRhdGU6IERhdGUsXHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IFZhbGlkYXRpb25FcnJvcnMgfCBzdHJpbmdcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICBlcnJvciA9IGVycm9yIHx8IGBUaGlzIGNvbnRyb2wgbXVzdCBoYXZlIGEgdmFsdWUgZWFybGllciB0aGVuICR7ZGF0ZX0uYDtcclxuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9XHJcbiAgICAgIHR5cGVvZiBlcnJvciA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgID8geyBbZXJyb3JOYW1lID8/IFwiZWFybGllclRoZW5cIl06IGVycm9yIH1cclxuICAgICAgICA6IGVycm9yO1xyXG5cclxuICAgIHJldHVybiBwcmVwYXJlVG9Db21wYXJlKGNvbnRyb2w/LnZhbHVlKSA8IHByZXBhcmVUb0NvbXBhcmUoZGF0ZSlcclxuICAgICAgPyBudWxsXHJcbiAgICAgIDogZXJyb3JzO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiB0aGUgZGF0ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgZ3JlYXRlciB0aGVuXHJcbiAqIHRoZSB2YWx1ZSBpbiB0aGUgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sXHJcbiAqXHJcbiAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSAgICAgICAgICAgLSBBYnN0cmFjdENvbnRyb2wgdG8gcHJlZm9ybSB0aGUgY2hlY2sgYWdhaW5zdFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7VmFsaWRhdGlvbkVycm9ycyB8IHN0cmluZ30gLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGF0ZXJUaGVuVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBkYXRlOiBEYXRlLFxyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBWYWxpZGF0aW9uRXJyb3JzIHwgc3RyaW5nXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgZXJyb3IgPSBlcnJvciB8fCBgVGhpcyBjb250cm9sIG11c3QgaGF2ZSBhIHZhbHVlIGxhdGVyIHRoZW4gJHtkYXRlfS5gO1xyXG4gICAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID1cclxuICAgICAgdHlwZW9mIGVycm9yID09PSBcInN0cmluZ1wiID8geyBbZXJyb3JOYW1lID8/IFwibGF0ZXJUaGVuXCJdOiBlcnJvciB9IDogZXJyb3I7XHJcblxyXG4gICAgcmV0dXJuIHByZXBhcmVUb0NvbXBhcmUoY29udHJvbD8udmFsdWUpID4gcHJlcGFyZVRvQ29tcGFyZShkYXRlKVxyXG4gICAgICA/IG51bGxcclxuICAgICAgOiBlcnJvcnM7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ29tcGFyZXMgdGhlIGRhdGUgdmFsdWVzIG9mIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBhbmRcclxuICogc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBuYW1lIG9mIHRoZSBmaWxlZCB0byBjb21wYXJlIGFnYWluc3RcclxuICogQHBhcmFtIHtDb21wYXJpc29uT3BlcmF0aW9uc30gICAgICAtIGNvbXBhcmlzb24gdG8gcHJlZm9ybVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7VmFsaWRhdGlvbkVycm9ycyB8IHN0cmluZ30gLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY29tcGFyZVRvVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBmaWxlZE5hbWU6IHN0cmluZyxcclxuICAgIGNvbXBhcmlzb246IENvbXBhcmlzb25PcGVyYXRpb25zLFxyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBWYWxpZGF0aW9uRXJyb3JzIHwgc3RyaW5nXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IGNvbnRyb2wucGFyZW50Py5nZXQoZmlsZWROYW1lKT8udmFsdWU7XHJcbiAgICBpZiAoZGF0ZSkge1xyXG4gICAgICBlcnJvciA9IGVycm9yIHx8IGBWYWx1ZSBjb21wYXJpc29uIHdpdGggJHtkYXRlfSBmYWlsZWQuYDtcclxuICAgICAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID1cclxuICAgICAgICB0eXBlb2YgZXJyb3IgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgID8geyBbZXJyb3JOYW1lID8/IFwiZGF0ZUNvbXBhcmlzb25cIl06IGVycm9yIH1cclxuICAgICAgICAgIDogZXJyb3I7XHJcbiAgICAgIHJldHVybiBjb250cm9sLnZhbHVlICYmIGNvbXBhcmVEYXRlcyhjb250cm9sLnZhbHVlLCBkYXRlLCBjb21wYXJpc29uKVxyXG4gICAgICAgID8gbnVsbFxyXG4gICAgICAgIDogZXJyb3JzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBjb25kaXRpb24gaXMgbWV0XHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb24gfCBib29sZWFufSAgICAgICAgLSBjb25kaXRpb25hbCBmdW5jdGlvbiBvciBhIGJvb2xlYW4gdmFsdWVcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge1ZhbGlkYXRpb25FcnJvcnMgfCBzdHJpbmd9IC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkV2hlblZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgY29uZGl0aW9uYWw6ICgoKSA9PiBib29sZWFuKSB8IGJvb2xlYW4sXHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IFZhbGlkYXRpb25FcnJvcnMgfCBzdHJpbmdcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICBlcnJvciA9IGVycm9yIHx8IFwiVGhpcyBjb250cm9sIGhhcyBhIGNvbmRpdGlvbmFsIHNldCBvbiBpdC5cIjtcclxuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9XHJcbiAgICAgIHR5cGVvZiBlcnJvciA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgID8geyBbZXJyb3JOYW1lID8/IFwicmVxdWlyZWRXaGVuXCJdOiBlcnJvciB9XHJcbiAgICAgICAgOiBlcnJvcjtcclxuXHJcbiAgICBjb25zdCBvdXRjb21lID1cclxuICAgICAgdHlwZW9mIGNvbmRpdGlvbmFsID09PSBcImZ1bmN0aW9uXCIgPyBjb25kaXRpb25hbCgpIDogY29uZGl0aW9uYWw7XHJcbiAgICByZXR1cm4gIWNvbnRyb2wudmFsdWUgJiYgb3V0Y29tZSA/IGVycm9ycyA6IG51bGw7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgbm8gdmFsdWVcclxuICogYW5kIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgaXRcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG5hbWUgb2YgdGhlIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIHRvIGxpbmsgdG9cclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge1ZhbGlkYXRpb25FcnJvcnMgfCBzdHJpbmd9IC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxpbmtUb1ZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgbGlua1RvOiBzdHJpbmcsXHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmcsXHJcbiAgICBlcnJvcj86IFZhbGlkYXRpb25FcnJvcnMgfCBzdHJpbmdcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICBlcnJvciA9IGVycm9yIHx8IGBUaGlzIGNvbnRyb2wgaGFzIGEgbGluayB0byAke2xpbmtUb30uYDtcclxuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9XHJcbiAgICAgIHR5cGVvZiBlcnJvciA9PT0gXCJzdHJpbmdcIiA/IHsgW2Vycm9yTmFtZSA/PyBcImxpbmtUb1wiXTogZXJyb3IgfSA6IGVycm9yO1xyXG5cclxuICAgIGNvbnN0IGxpbmtlZFRvID0gY29udHJvbC5wYXJlbnQ/LmdldChsaW5rVG8pO1xyXG4gICAgcmV0dXJuICFjb250cm9sPy52YWx1ZSAmJiAhIWxpbmtlZFRvPy52YWx1ZSA/IGVycm9ycyA6IG51bGw7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgYSB2YWx1ZVxyXG4gKiBhbmQgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGRvZXMgbm90XHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBuYW1lIG9mIHRoZSBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpY2ggYSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBsaW5rZWQgdG9cclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge1ZhbGlkYXRpb25FcnJvcnMgfCBzdHJpbmd9IC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxpbmtlZFRvVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBsaW5rZWRUbzogc3RyaW5nLFxyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nLFxyXG4gICAgZXJyb3I/OiBWYWxpZGF0aW9uRXJyb3JzIHwgc3RyaW5nXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgZXJyb3IgPSBlcnJvciB8fCBgVGhpcyBjb250cm9sIGlzIGxpbmtlZCB0byAke2xpbmtlZFRvfS5gO1xyXG4gICAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID1cclxuICAgICAgdHlwZW9mIGVycm9yID09PSBcInN0cmluZ1wiID8geyBbZXJyb3JOYW1lID8/IFwibGlua1RvXCJdOiBlcnJvciB9IDogZXJyb3I7XHJcblxyXG4gICAgY29uc3QgbGluayA9IGNvbnRyb2wucGFyZW50Py5nZXQobGlua2VkVG8pO1xyXG4gICAgcmV0dXJuICEhY29udHJvbD8udmFsdWUgJiYgIWxpbms/LnZhbHVlID8gZXJyb3JzIDogbnVsbDtcclxuICB9O1xyXG4iXX0=