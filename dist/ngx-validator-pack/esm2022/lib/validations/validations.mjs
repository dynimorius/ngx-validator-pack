/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { compareDates } from "../helpers/date";
import { compare } from "../helpers/numbers";
import { test } from "../helpers/regexp";
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
    const errors = { [config.errorName ?? "regexp"]: error };
    return !control.value ||
        test(config.regExp, control.value, config?.logic ?? "!!")
        ? null
        : errors;
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
    return compareDates(control.value, config.date, "<") ? null : errors;
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
    return compareDates(control.value, config.date, ">") ? null : errors;
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
export const lengthValidation = (control, config) => {
    const error = config.error ?? `The minimum required length is ${config.length}.`;
    const errors = { [config.errorName ?? "length"]: error };
    return !!control?.value &&
        compare(control?.value?.length, config.length, config.comparison ?? "<")
        ? errors
        : null;
};
export const sequentialValidation = (control, sequence) => {
    let validationError;
    const hasError = sequence.some((validation) => {
        const error = validation.validationFun(control, {
            ...validation.validationFunConfig,
        });
        if (error) {
            validationError = error;
            return true;
        }
        return false;
    });
    return hasError ? validationError : null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi92YWxpZGF0aW9ucy92YWxpZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBVTdDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV6Qzs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLENBQzlCLE9BQXdCLEVBQ3hCLE1BQThCLEVBQ0wsRUFBRTtJQUMzQixNQUFNLEtBQUssR0FDVCxNQUFNLENBQUMsS0FBSyxJQUFJLHdEQUF3RCxDQUFDO0lBQzNFLE1BQU0sTUFBTSxHQUFxQixFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUUzRSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQztRQUN6RCxDQUFDLENBQUMsSUFBSTtRQUNOLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsQ0FDbkMsT0FBd0IsRUFDeEIsTUFBNEIsRUFDSCxFQUFFO0lBQzNCLE1BQU0sS0FBSyxHQUNULE1BQU0sQ0FBQyxLQUFLO1FBQ1osK0NBQStDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUNoRSxNQUFNLE1BQU0sR0FBcUI7UUFDL0Is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SyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDO1FBQ3hFLENBQUMsQ0FBQyxNQUFNO1FBQ1IsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNYLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLENBQ2xDLE9BQXdCLEVBQ3hCLFFBQTBCLEVBQ0QsRUFBRTtJQUMzQixJQUFJLGVBQWtDLENBQUM7SUFDdkMsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBVyxFQUFFO1FBQ3JELE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFO1lBQzlDLEdBQUcsVUFBVSxDQUFDLG1CQUFtQjtTQUNsQyxDQUFDLENBQUM7UUFDSCxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ1YsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUN4QixPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzNDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cclxuICovXHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgY29tcGFyZURhdGVzIH0gZnJvbSBcIi4uL2hlbHBlcnMvZGF0ZVwiO1xyXG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uL2hlbHBlcnMvbnVtYmVyc1wiO1xyXG5pbXBvcnQgeyBTZXF1ZW5jZUNvbmZpZyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3NlcXVlbmNlLWNvbmZpZy5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtcclxuICBDb21wYXJlVmFsaWRhdGlvbkNvbmZpZyxcclxuICBDb25kaXRpb25hbFZhbGlkYXRpb25Db25maWcsXHJcbiAgRGF0ZVZhbGlkYXRpb25Db25maWcsXHJcbiAgTGVuZ3RoVmFsaWRhdGlvbkNvbmZpZyxcclxuICBMaW5rVmFsaWRhdGlvbkNvbmZpZyxcclxuICBSZWdFeHBWYWxpZGF0aW9uQ29uZmlnLFxyXG59IGZyb20gXCIuLi9pbnRlcmZhY2VzL3ZhbGlkYXRpb24tY29uZmlnLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyB0ZXN0IH0gZnJvbSBcIi4uL2hlbHBlcnMvcmVnZXhwXCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcHJlZm9ybXMgYSBSZWdFeCBjaGVjayBvbiB2YWx1ZSBpbiB0aGVcclxuICogZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4cCB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbmFtZSBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVnZXhwVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiBSZWdFeHBWYWxpZGF0aW9uQ29uZmlnXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9XHJcbiAgICBjb25maWcuZXJyb3IgPz8gXCJUaGlzIGNvbnRyb2wgZGlkIG5vdCBtYXRjaCBhIGdpdmVuIHJlZ3VsYXIgZXhwcmVzc2lvbi5cIjtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwicmVnZXhwXCJdOiBlcnJvciB9O1xyXG5cclxuICByZXR1cm4gIWNvbnRyb2wudmFsdWUgfHxcclxuICAgIHRlc3QoY29uZmlnLnJlZ0V4cCwgY29udHJvbC52YWx1ZSwgY29uZmlnPy5sb2dpYyA/PyBcIiEhXCIpXHJcbiAgICA/IG51bGxcclxuICAgIDogZXJyb3JzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBpZiB0aGUgZGF0ZSBpbiB0aGUgZ2l2ZW5cclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgZWFybGllciB0aGVuIHRoZSB2YWx1ZSBpbiB0aGUgc3BlY2lmaWVkXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Fic3RyYWN0Q29udHJvbH0gICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBlYXJsaWVyVGhlblZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzogRGF0ZVZhbGlkYXRpb25Db25maWdcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGNvbmZpZy5lcnJvciA/P1xyXG4gICAgYFRoaXMgY29udHJvbCBtdXN0IGhhdmUgYSB2YWx1ZSBlYXJsaWVyIHRoZW4gJHtjb25maWcuZGF0ZX0uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XHJcbiAgICBbY29uZmlnLmVycm9yTmFtZSA/PyBcImVhcmxpZXJUaGVuXCJdOiBlcnJvcixcclxuICB9O1xyXG5cclxuICByZXR1cm4gY29tcGFyZURhdGVzKGNvbnRyb2wudmFsdWUsIGNvbmZpZy5kYXRlLCBcIjxcIikgPyBudWxsIDogZXJyb3JzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBpZiB0aGUgZGF0ZSBpbiB0aGUgZ2l2ZW5cclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgZ3JlYXRlciB0aGVuIHRoZSB2YWx1ZSBpbiB0aGUgc3BlY2lmaWVkXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sLlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBlcnJvciBhbmRcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBuYW1lIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBsYXRlclRoZW5WYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IERhdGVWYWxpZGF0aW9uQ29uZmlnXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9XHJcbiAgICBjb25maWcuZXJyb3IgPz8gYFRoaXMgY29udHJvbCBtdXN0IGhhdmUgYSB2YWx1ZSBsYXRlciB0aGVuICR7Y29uZmlnLmRhdGV9LmA7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbY29uZmlnLmVycm9yTmFtZSA/PyBcImxhdGVyVGhlblwiXTogZXJyb3IgfTtcclxuXHJcbiAgcmV0dXJuIGNvbXBhcmVEYXRlcyhjb250cm9sLnZhbHVlLCBjb25maWcuZGF0ZSwgXCI+XCIpID8gbnVsbCA6IGVycm9ycztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCBjb21wYXJlcyB0aGUgZGF0ZSB2YWx1ZXMgb2YgdGhlIGdpdmVuXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGFuZCBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkIG5hbWUgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBjb21wYXJlVG9WYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IENvbXBhcmVWYWxpZGF0aW9uQ29uZmlnXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBkYXRlID0gY29udHJvbC5wYXJlbnQ/LmdldChjb25maWcuZmllbGROYW1lKT8udmFsdWU7XHJcbiAgaWYgKGRhdGUpIHtcclxuICAgIGNvbnN0IGVycm9yID0gY29uZmlnLmVycm9yID8/IGBWYWx1ZSBjb21wYXJpc29uIHdpdGggJHtkYXRlfSBmYWlsZWQuYDtcclxuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgICAgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJkYXRlQ29tcGFyaXNvblwiXTogZXJyb3IsXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gY29udHJvbC52YWx1ZSAmJiBjb21wYXJlRGF0ZXMoY29udHJvbC52YWx1ZSwgZGF0ZSwgY29uZmlnLmNvbXBhcmlzb24pXHJcbiAgICAgID8gbnVsbFxyXG4gICAgICA6IGVycm9ycztcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBjb25kaXRpb24gaXMgbWV0LlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25hbCBmdW5jdGlvbiBvciBib29sZWFuIHRvIGNoZWNrXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIG9wdGlvbmFsIGVycm9yIGFuZCBlcnJvciBuYW1lIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVxdWlyZWRXaGVuVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiBDb25kaXRpb25hbFZhbGlkYXRpb25Db25maWdcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID0gY29uZmlnLmVycm9yID8/IFwiVGhpcyBjb250cm9sIGhhcyBhIGNvbmRpdGlvbmFsIHNldCBvbiBpdC5cIjtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XHJcbiAgICBbY29uZmlnLmVycm9yTmFtZSA/PyBcInJlcXVpcmVkV2hlblwiXTogZXJyb3IsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3V0Y29tZSA9XHJcbiAgICB0eXBlb2YgY29uZmlnLmNvbmRpdGlvbmFsID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgPyBjb25maWcuY29uZGl0aW9uYWwoKVxyXG4gICAgICA6IGNvbmZpZy5jb25kaXRpb25hbDtcclxuICByZXR1cm4gIWNvbnRyb2wudmFsdWUgJiYgb3V0Y29tZSA/IGVycm9ycyA6IG51bGw7XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBnaXZlblxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgbm8gdmFsdWUgYW5kIHNwZWNpZmllZFxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgaXQuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkIG5hbWUgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBsaW5rVG9WYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IExpbmtWYWxpZGF0aW9uQ29uZmlnXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9IGNvbmZpZy5lcnJvciA/PyBgVGhpcyBjb250cm9sIGhhcyBhIGxpbmsgdG8gJHtjb25maWcubGlua30uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwibGlua1RvXCJdOiBlcnJvciB9O1xyXG4gIGNvbnN0IGxpbmtlZFRvID0gY29udHJvbC5wYXJlbnQ/LmdldChjb25maWcubGluayk7XHJcblxyXG4gIHJldHVybiAhY29udHJvbD8udmFsdWUgJiYgISFsaW5rZWRUbz8udmFsdWUgPyBlcnJvcnMgOiBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW5cclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIGEgdmFsdWUgYW5kIHNwZWNpZmllZFxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBkb2VzIG5vdC5cclxuICpcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgbmFtZSB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbmFtZSBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxpbmtlZFRvVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiBMaW5rVmFsaWRhdGlvbkNvbmZpZ1xyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPSBjb25maWcuZXJyb3IgPz8gYFRoaXMgY29udHJvbCBpcyBsaW5rZWQgdG8gJHtjb25maWcubGlua30uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwibGlua1RvXCJdOiBlcnJvciB9O1xyXG4gIGNvbnN0IGxpbmsgPSBjb250cm9sLnBhcmVudD8uZ2V0KGNvbmZpZy5saW5rKTtcclxuXHJcbiAgcmV0dXJuICEhY29udHJvbD8udmFsdWUgJiYgIWxpbms/LnZhbHVlID8gZXJyb3JzIDogbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsZW5ndGhWYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IExlbmd0aFZhbGlkYXRpb25Db25maWdcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGNvbmZpZy5lcnJvciA/PyBgVGhlIG1pbmltdW0gcmVxdWlyZWQgbGVuZ3RoIGlzICR7Y29uZmlnLmxlbmd0aH0uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwibGVuZ3RoXCJdOiBlcnJvciB9O1xyXG5cclxuICByZXR1cm4gISFjb250cm9sPy52YWx1ZSAmJlxyXG4gICAgY29tcGFyZShjb250cm9sPy52YWx1ZT8ubGVuZ3RoLCBjb25maWcubGVuZ3RoLCBjb25maWcuY29tcGFyaXNvbiA/PyBcIjxcIilcclxuICAgID8gZXJyb3JzXHJcbiAgICA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VxdWVudGlhbFZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIHNlcXVlbmNlOiBTZXF1ZW5jZUNvbmZpZ1tdXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBsZXQgdmFsaWRhdGlvbkVycm9yITogVmFsaWRhdGlvbkVycm9ycztcclxuICBjb25zdCBoYXNFcnJvciA9IHNlcXVlbmNlLnNvbWUoKHZhbGlkYXRpb24pOiBib29sZWFuID0+IHtcclxuICAgIGNvbnN0IGVycm9yID0gdmFsaWRhdGlvbi52YWxpZGF0aW9uRnVuKGNvbnRyb2wsIHtcclxuICAgICAgLi4udmFsaWRhdGlvbi52YWxpZGF0aW9uRnVuQ29uZmlnLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdmFsaWRhdGlvbkVycm9yID0gZXJyb3I7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG4gIHJldHVybiBoYXNFcnJvciA/IHZhbGlkYXRpb25FcnJvciA6IG51bGw7XHJcbn07XHJcbiJdfQ==