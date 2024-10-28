/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { compareDates, } from "../helpers/date";
/**
 * @internal
 * @description
 * A validation function which preforms a RegEx check on value in the
 * given FromControl / AbstractControl.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       regexp to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}  - Validation error
 */
export const regexpValidation = (control, config) => {
    const error = config.error ?? "This control did not match a given regular expression.";
    const errors = {
        [config.errorName ?? "regexpValidator"]: error,
    };
    return !control.value || config.regExp.test(control.value) ? null : errors;
};
/**
 * @internal
 * @description
 * A validation function which preforms a RegEx check on value in the
 * given FromControl / AbstractControl.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       regexp to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}          - Validation error
 */
export const regexpNotValidation = (control, config) => {
    const error = config.error ?? "This control matched a given regular expression.";
    const errors = {
        [config.errorName ?? "regexpNotValidator"]: error,
    };
    return !control.value || !config.regExp.test(control.value) ? null : errors;
};
/**
 * @internal
 * @description
 * A validation function which checks if the date in the given
 * FromControl / AbstractControl is earlier then the value in the specified
 * FromControl / AbstractControl.
 *
 * @param {AbstractControl}                    - form control
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       date to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
export const earlierThenValidation = (control, config) => {
    const error = config.error ??
        `This control must have a value earlier then ${config.date}.`;
    const errors = {
        [config.errorName ?? "earlierThen"]: error,
    };
    return compareDates(control.value, config.date, "<")
        ? null
        : errors;
};
/**
 * @internal
 * @description
 * A validation function which checks if the date in the given
 * FromControl / AbstractControl is greater then the value in the specified
 * FromControl / AbstractControl.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       date to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}     - Validation error
 */
export const laterThenValidation = (control, config) => {
    const error = config.error ?? `This control must have a value later then ${config.date}.`;
    const errors = { [config.errorName ?? "laterThen"]: error };
    return compareDates(control.value, config.date, ">")
        ? null
        : errors;
};
/**
 * @internal
 * @description
 * A validation function which compares the date values of the given
 * FromControl / AbstractControl and specified FromControl / AbstractControl.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       field name to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
export const compareToValidation = (control, config) => {
    const date = control.parent?.get(config.fieldName)?.value;
    if (date) {
        const error = config.error ?? `Value comparison with ${date} failed.`;
        const errors = {
            [config.errorName ?? "dateComparison"]: error,
        };
        return control.value && compareDates(control.value, date, config.comparison)
            ? null
            : errors;
    }
    return null;
};
/**
 * @internal
 * @description
 * A validation function which returns a validation error if a condition is met.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       conditional function or boolean to check
 *                                       and optional error and error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
export const requiredWhenValidation = (control, config) => {
    const error = config.error ?? "This control has a conditional set on it.";
    const errors = {
        [config.errorName ?? "requiredWhen"]: error,
    };
    const outcome = typeof config.conditional === "function"
        ? config.conditional()
        : config.conditional;
    return !control.value && outcome ? errors : null;
};
/**
 * @internal
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl has no value and specified
 * FromControl / AbstractControl has it.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       field name to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
export const linkToValidation = (control, config) => {
    const error = config.error ?? `This control has a link to ${config.link}.`;
    const errors = { [config.errorName ?? "linkTo"]: error };
    const linkedTo = control.parent?.get(config.link);
    return !control?.value && !!linkedTo?.value ? errors : null;
};
/**
 * @internal
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl has a value and specified
 * FromControl / AbstractControl does not.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       field name to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
export const linkedToValidation = (control, config) => {
    const error = config.error ?? `This control is linked to ${config.link}.`;
    const errors = { [config.errorName ?? "linkTo"]: error };
    const link = control.parent?.get(config.link);
    return !!control?.value && !link?.value ? errors : null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi92YWxpZGF0aW9ucy92YWxpZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBRUwsWUFBWSxHQUNiLE1BQU0saUJBQWlCLENBQUM7QUFFekI7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUM5QixPQUF3QixFQUN4QixNQUlDLEVBQ3dCLEVBQUU7SUFDM0IsTUFBTSxLQUFLLEdBQ1QsTUFBTSxDQUFDLEtBQUssSUFBSSx3REFBd0QsQ0FBQztJQUMzRSxNQUFNLE1BQU0sR0FBcUI7UUFDL0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLGlCQUFpQixDQUFDLEVBQUUsS0FBSztLQUMvQyxDQUFDO0lBRUYsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUM3RSxDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLENBQ2pDLE9BQXdCLEVBQ3hCLE1BSUMsRUFDd0IsRUFBRTtJQUMzQixNQUFNLEtBQUssR0FDVCxNQUFNLENBQUMsS0FBSyxJQUFJLGtEQUFrRCxDQUFDO0lBQ3JFLE1BQU0sTUFBTSxHQUFxQjtRQUMvQixDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksb0JBQW9CLENBQUMsRUFBRSxLQUFLO0tBQ2xELENBQUM7SUFFRixPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FB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clxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29tcGFyaXNvbk9wZXJhdGlvbnMsXHJcbiAgY29tcGFyZURhdGVzLFxyXG59IGZyb20gXCIuLi9oZWxwZXJzL2RhdGVcIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCBwcmVmb3JtcyBhIFJlZ0V4IGNoZWNrIG9uIHZhbHVlIGluIHRoZSBcclxuICogZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4cCB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kIFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlZ2V4cFZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzoge1xyXG4gICAgcmVnRXhwOiBSZWdFeHA7XHJcbiAgICBlcnJvcj86IHN0cmluZztcclxuICAgIGVycm9yTmFtZT86IHN0cmluZztcclxuICB9XHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9XHJcbiAgICBjb25maWcuZXJyb3IgPz8gXCJUaGlzIGNvbnRyb2wgZGlkIG5vdCBtYXRjaCBhIGdpdmVuIHJlZ3VsYXIgZXhwcmVzc2lvbi5cIjtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XHJcbiAgICBbY29uZmlnLmVycm9yTmFtZSA/PyBcInJlZ2V4cFZhbGlkYXRvclwiXTogZXJyb3IsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuICFjb250cm9sLnZhbHVlIHx8IGNvbmZpZy5yZWdFeHAudGVzdChjb250cm9sLnZhbHVlKSA/IG51bGwgOiBlcnJvcnM7XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcHJlZm9ybXMgYSBSZWdFeCBjaGVjayBvbiB2YWx1ZSBpbiB0aGUgXHJcbiAqIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sLlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdleHAgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZCBcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBuYW1lIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgICAgICAgIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlZ2V4cE5vdFZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzoge1xyXG4gICAgcmVnRXhwOiBSZWdFeHA7XHJcbiAgICBlcnJvcj86IHN0cmluZztcclxuICAgIGVycm9yTmFtZT86IHN0cmluZztcclxuICB9XHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9XHJcbiAgICBjb25maWcuZXJyb3IgPz8gXCJUaGlzIGNvbnRyb2wgbWF0Y2hlZCBhIGdpdmVuIHJlZ3VsYXIgZXhwcmVzc2lvbi5cIjtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XHJcbiAgICBbY29uZmlnLmVycm9yTmFtZSA/PyBcInJlZ2V4cE5vdFZhbGlkYXRvclwiXTogZXJyb3IsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuICFjb250cm9sLnZhbHVlIHx8ICFjb25maWcucmVnRXhwLnRlc3QoY29udHJvbC52YWx1ZSkgPyBudWxsIDogZXJyb3JzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBpZiB0aGUgZGF0ZSBpbiB0aGUgZ2l2ZW4gXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGVhcmxpZXIgdGhlbiB0aGUgdmFsdWUgaW4gdGhlIHNwZWNpZmllZCBcclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kIFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBlYXJsaWVyVGhlblZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzoge1xyXG4gICAgZGF0ZTogRGF0ZTtcclxuICAgIGVycm9yPzogc3RyaW5nO1xyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nO1xyXG4gIH1cclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGNvbmZpZy5lcnJvciA/P1xyXG4gICAgYFRoaXMgY29udHJvbCBtdXN0IGhhdmUgYSB2YWx1ZSBlYXJsaWVyIHRoZW4gJHtjb25maWcuZGF0ZX0uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XHJcbiAgICBbY29uZmlnLmVycm9yTmFtZSA/PyBcImVhcmxpZXJUaGVuXCJdOiBlcnJvcixcclxuICB9O1xyXG5cclxuICByZXR1cm4gY29tcGFyZURhdGVzKGNvbnRyb2wudmFsdWUsIGNvbmZpZy5kYXRlLCBcIjxcIilcclxuICAgID8gbnVsbFxyXG4gICAgOiBlcnJvcnM7XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGlmIHRoZSBkYXRlIGluIHRoZSBnaXZlbiBcclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgZ3JlYXRlciB0aGVuIHRoZSB2YWx1ZSBpbiB0aGUgc3BlY2lmaWVkIFxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cclxuICpcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kIFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAgIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxhdGVyVGhlblZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzoge1xyXG4gICAgZGF0ZTogRGF0ZTtcclxuICAgIGVycm9yPzogc3RyaW5nO1xyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nO1xyXG4gIH1cclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGNvbmZpZy5lcnJvciA/PyBgVGhpcyBjb250cm9sIG11c3QgaGF2ZSBhIHZhbHVlIGxhdGVyIHRoZW4gJHtjb25maWcuZGF0ZX0uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwibGF0ZXJUaGVuXCJdOiBlcnJvciB9O1xyXG5cclxuICByZXR1cm4gY29tcGFyZURhdGVzKGNvbnRyb2wudmFsdWUsIGNvbmZpZy5kYXRlLCBcIj5cIilcclxuICAgID8gbnVsbFxyXG4gICAgOiBlcnJvcnM7XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggY29tcGFyZXMgdGhlIGRhdGUgdmFsdWVzIG9mIHRoZSBnaXZlbiBcclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgYW5kIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cclxuICpcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgbmFtZSB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kIFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBjb21wYXJlVG9WYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IHtcclxuICAgIGZpZWxkTmFtZTogc3RyaW5nO1xyXG4gICAgY29tcGFyaXNvbjogQ29tcGFyaXNvbk9wZXJhdGlvbnM7XHJcbiAgICBlcnJvcj86IHN0cmluZztcclxuICAgIGVycm9yTmFtZT86IHN0cmluZztcclxuICB9XHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBkYXRlID0gY29udHJvbC5wYXJlbnQ/LmdldChjb25maWcuZmllbGROYW1lKT8udmFsdWU7XHJcbiAgaWYgKGRhdGUpIHtcclxuICAgIGNvbnN0IGVycm9yID0gY29uZmlnLmVycm9yID8/IGBWYWx1ZSBjb21wYXJpc29uIHdpdGggJHtkYXRlfSBmYWlsZWQuYDtcclxuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgICAgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJkYXRlQ29tcGFyaXNvblwiXTogZXJyb3IsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNvbnRyb2wudmFsdWUgJiYgY29tcGFyZURhdGVzKGNvbnRyb2wudmFsdWUsIGRhdGUsIGNvbmZpZy5jb21wYXJpc29uKVxyXG4gICAgICA/IG51bGxcclxuICAgICAgOiBlcnJvcnM7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgY29uZGl0aW9uIGlzIG1ldC5cclxuICpcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uYWwgZnVuY3Rpb24gb3IgYm9vbGVhbiB0byBjaGVjayBcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZFdoZW5WYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IHtcclxuICAgIGNvbmRpdGlvbmFsOiAoKCkgPT4gYm9vbGVhbikgfCBib29sZWFuO1xyXG4gICAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmc7XHJcbiAgfVxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPSBjb25maWcuZXJyb3IgPz8gXCJUaGlzIGNvbnRyb2wgaGFzIGEgY29uZGl0aW9uYWwgc2V0IG9uIGl0LlwiO1xyXG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgIFtjb25maWcuZXJyb3JOYW1lID8/IFwicmVxdWlyZWRXaGVuXCJdOiBlcnJvcixcclxuICB9O1xyXG5cclxuICBjb25zdCBvdXRjb21lID1cclxuICAgIHR5cGVvZiBjb25maWcuY29uZGl0aW9uYWwgPT09IFwiZnVuY3Rpb25cIlxyXG4gICAgICA/IGNvbmZpZy5jb25kaXRpb25hbCgpXHJcbiAgICAgIDogY29uZmlnLmNvbmRpdGlvbmFsO1xyXG4gIHJldHVybiAhY29udHJvbC52YWx1ZSAmJiBvdXRjb21lID8gZXJyb3JzIDogbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuIFxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgbm8gdmFsdWUgYW5kIHNwZWNpZmllZCBcclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIGl0LlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCBuYW1lIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBlcnJvciBhbmQgXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbmFtZSBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxpbmtUb1ZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzoge1xyXG4gICAgbGluazogc3RyaW5nO1xyXG4gICAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmc7XHJcbiAgfVxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPSBjb25maWcuZXJyb3IgPz8gYFRoaXMgY29udHJvbCBoYXMgYSBsaW5rIHRvICR7Y29uZmlnLmxpbmt9LmA7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbY29uZmlnLmVycm9yTmFtZSA/PyBcImxpbmtUb1wiXTogZXJyb3IgfTtcclxuICBjb25zdCBsaW5rZWRUbyA9IGNvbnRyb2wucGFyZW50Py5nZXQoY29uZmlnLmxpbmspO1xyXG5cclxuICByZXR1cm4gIWNvbnRyb2w/LnZhbHVlICYmICEhbGlua2VkVG8/LnZhbHVlID8gZXJyb3JzIDogbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuIFxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgYSB2YWx1ZSBhbmQgc3BlY2lmaWVkIFxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBkb2VzIG5vdC5cclxuICpcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgbmFtZSB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kIFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBsaW5rZWRUb1ZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzoge1xyXG4gICAgbGluazogc3RyaW5nO1xyXG4gICAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmc7XHJcbiAgfVxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPSBjb25maWcuZXJyb3IgPz8gYFRoaXMgY29udHJvbCBpcyBsaW5rZWQgdG8gJHtjb25maWcubGlua30uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwibGlua1RvXCJdOiBlcnJvciB9O1xyXG4gIGNvbnN0IGxpbmsgPSBjb250cm9sLnBhcmVudD8uZ2V0KGNvbmZpZy5saW5rKTtcclxuXHJcbiAgcmV0dXJuICEhY29udHJvbD8udmFsdWUgJiYgIWxpbms/LnZhbHVlID8gZXJyb3JzIDogbnVsbDtcclxufTtcclxuIl19