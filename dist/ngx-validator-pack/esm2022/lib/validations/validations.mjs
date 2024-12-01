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
        [config.errorName ?? "required"]: error,
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
 * @returns {ValidationErrors | null}  - Validation error
 */
export const linkedToValidation = (control, config) => {
    const error = config.error ?? `This control is linked to ${config.link}.`;
    const errors = { [config.errorName ?? "linkTo"]: error };
    const link = control.parent?.get(config.link);
    return !!control?.value && !link?.value ? errors : null;
};
/**
 * @internal
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl has a value that fails a given
 * length comparison.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       length to check, comparison to preform
 *                                       and optional error and error name string
 * @returns {ValidationErrors | null}  - Validation error
 */
export const lengthValidation = (control, config) => {
    const error = config.error ?? `The required length should be ${config.comparison} ${config.length}.`;
    const errors = { [config.errorName ?? "length"]: error };
    return !!control?.value &&
        compare(control?.value?.length, config.length, config.comparison ?? "===")
        ? errors
        : null;
};
/**
 * @internal
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl value is not in a given range.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       start value to check and end value to check
 *                                       as well as optional error and error name string
 * @returns {ValidationErrors | null}  - Validation error
 */
export const rangeValidation = (control, config) => {
    const error = config.error ?? `Value must be in the range between ${config.start} and ${config.end}.`;
    const errors = { [config.errorName ?? "range"]: error };
    return !!control?.value &&
        compare(control.value.length, config.start, ">=") &&
        compare(control.value.length, config.end, '<=')
        ? errors
        : null;
};
/**
 * @internal
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl has a value that fails a given
 * word count comparison.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       word count to check, comparison to preform
 *                                       and optional error and error name string
 * @returns {ValidationErrors | null}  - Validation error
 */
export const wordCountValidation = (control, config) => {
    const error = config.error ?? `The required word count should be ${config.comparison} ${config.count}.`;
    const errors = { [config.errorName ?? "wordCount"]: error };
    const valueCount = control?.value?.split(' ');
    return !!control?.value &&
        compare(valueCount, config.count, config.comparison ?? "===")
        ? errors
        : null;
};
/**
 * @internal
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl value is not in a given word count range.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       start value to check and end value to check
 *                                       as well as optional error and error name string
 * @returns {ValidationErrors | null}  - Validation error
 */
export const wordCountRangeValidation = (control, config) => {
    const error = config.error ?? `The word count must be in the range between ${config.start} and ${config.end}.`;
    const errors = { [config.errorName ?? "wordCountRange"]: error };
    const valueCount = control?.value?.split(' ');
    return !!control?.value &&
        compare(valueCount, config.start, ">=") &&
        compare(valueCount, config.end, '<=')
        ? errors
        : null;
};
/**
 * @internal
 * @description
 * A validation function which returns a validation error if any
 * of the validations from the given sequence return an error.
 * The sequence order meters as the first fail will be returned.
 *
 * @param control                      - form control
 * @param sequence                     - sequence of configs that consists of
 *                                       validation functions and configs for those
 *                                       functions.
 * @returns {ValidationErrors | null}  - Validation error
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi92YWxpZGF0aW9ucy92YWxpZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBWTdDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV6Qzs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLENBQzlCLE9BQXdCLEVBQ3hCLE1BQThCLEVBQ0wsRUFBRTtJQUMzQixNQUFNLEtBQUssR0FDVCxNQUFNLENBQUMsS0FBSyxJQUFJLHdEQUF3RCxDQUFDO0lBQzNFLE1BQU0sTUFBTSxHQUFxQixFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUUzRSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQztRQUN6RCxDQUFDLENBQUMsSUFBSTtRQUNOLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsQ0FDbkMsT0FBd0IsRUFDeEIsTUFBNEIsRUFDSCxFQUFFO0lBQzNCLE1BQU0sS0FBSyxHQUNULE1BQU0sQ0FBQyxLQUFLO1FBQ1osK0NBQStDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUNoRSxNQUFNLE1BQU0sR0FBcUI7UUFDL0Is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QUU7SUFDM0IsSUFBSSxlQUFrQyxDQUFDO0lBQ3ZDLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQVcsRUFBRTtRQUNyRCxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUM5QyxHQUFHLFVBQVUsQ0FBQyxtQkFBbUI7U0FDbEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNWLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDeEIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUMzQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cbiAqL1xuXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IGNvbXBhcmVEYXRlcyB9IGZyb20gXCIuLi9oZWxwZXJzL2RhdGVcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vaGVscGVycy9udW1iZXJzXCI7XG5pbXBvcnQgeyBTZXF1ZW5jZUNvbmZpZyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3NlcXVlbmNlLWNvbmZpZy5pbnRlcmZhY2VcIjtcbmltcG9ydCB7XG4gIENvbXBhcmVWYWxpZGF0aW9uQ29uZmlnLFxuICBDb25kaXRpb25hbFZhbGlkYXRpb25Db25maWcsXG4gIENvdW50VmFsaWRhdGlvbkNvbmZpZyxcbiAgRGF0ZVZhbGlkYXRpb25Db25maWcsXG4gIExlbmd0aFZhbGlkYXRpb25Db25maWcsXG4gIExpbmtWYWxpZGF0aW9uQ29uZmlnLFxuICBSYW5nZVZhbGlkYXRpb25Db25maWcsXG4gIFJlZ0V4cFZhbGlkYXRpb25Db25maWcsXG59IGZyb20gXCIuLi9pbnRlcmZhY2VzL3ZhbGlkYXRpb24tY29uZmlnLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgdGVzdCB9IGZyb20gXCIuLi9oZWxwZXJzL3JlZ2V4cFwiO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQGRlc2NyaXB0aW9uXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcHJlZm9ybXMgYSBSZWdFeCBjaGVjayBvbiB2YWx1ZSBpbiB0aGVcbiAqIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sLlxuICpcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXhwIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBlcnJvciBhbmRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbmFtZSBzdHJpbmdcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gIC0gVmFsaWRhdGlvbiBlcnJvclxuICovXG5leHBvcnQgY29uc3QgcmVnZXhwVmFsaWRhdGlvbiA9IChcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxuICBjb25maWc6IFJlZ0V4cFZhbGlkYXRpb25Db25maWdcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgY29uc3QgZXJyb3IgPVxuICAgIGNvbmZpZy5lcnJvciA/PyBcIlRoaXMgY29udHJvbCBkaWQgbm90IG1hdGNoIGEgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uLlwiO1xuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwicmVnZXhwXCJdOiBlcnJvciB9O1xuXG4gIHJldHVybiAhY29udHJvbC52YWx1ZSB8fFxuICAgIHRlc3QoY29uZmlnLnJlZ0V4cCwgY29udHJvbC52YWx1ZSwgY29uZmlnPy5sb2dpYyA/PyBcIiEhXCIpXG4gICAgPyBudWxsXG4gICAgOiBlcnJvcnM7XG59O1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQGRlc2NyaXB0aW9uXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGlmIHRoZSBkYXRlIGluIHRoZSBnaXZlblxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgZWFybGllciB0aGVuIHRoZSB2YWx1ZSBpbiB0aGUgc3BlY2lmaWVkXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cbiAqXG4gKiBAcGFyYW0ge0Fic3RyYWN0Q29udHJvbH0gICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBuYW1lIHN0cmluZ1xuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgIC0gVmFsaWRhdGlvbiBlcnJvclxuICovXG5leHBvcnQgY29uc3QgZWFybGllclRoZW5WYWxpZGF0aW9uID0gKFxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXG4gIGNvbmZpZzogRGF0ZVZhbGlkYXRpb25Db25maWdcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgY29uc3QgZXJyb3IgPVxuICAgIGNvbmZpZy5lcnJvciA/P1xuICAgIGBUaGlzIGNvbnRyb2wgbXVzdCBoYXZlIGEgdmFsdWUgZWFybGllciB0aGVuICR7Y29uZmlnLmRhdGV9LmA7XG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcbiAgICBbY29uZmlnLmVycm9yTmFtZSA/PyBcImVhcmxpZXJUaGVuXCJdOiBlcnJvcixcbiAgfTtcblxuICByZXR1cm4gY29tcGFyZURhdGVzKGNvbnRyb2wudmFsdWUsIGNvbmZpZy5kYXRlLCBcIjxcIikgPyBudWxsIDogZXJyb3JzO1xufTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqIEBkZXNjcmlwdGlvblxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBpZiB0aGUgZGF0ZSBpbiB0aGUgZ2l2ZW5cbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGdyZWF0ZXIgdGhlbiB0aGUgdmFsdWUgaW4gdGhlIHNwZWNpZmllZFxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXG4gKlxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBlcnJvciBhbmRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbmFtZSBzdHJpbmdcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAgIC0gVmFsaWRhdGlvbiBlcnJvclxuICovXG5leHBvcnQgY29uc3QgbGF0ZXJUaGVuVmFsaWRhdGlvbiA9IChcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxuICBjb25maWc6IERhdGVWYWxpZGF0aW9uQ29uZmlnXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGVycm9yID1cbiAgICBjb25maWcuZXJyb3IgPz8gYFRoaXMgY29udHJvbCBtdXN0IGhhdmUgYSB2YWx1ZSBsYXRlciB0aGVuICR7Y29uZmlnLmRhdGV9LmA7XG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHsgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJsYXRlclRoZW5cIl06IGVycm9yIH07XG5cbiAgcmV0dXJuIGNvbXBhcmVEYXRlcyhjb250cm9sLnZhbHVlLCBjb25maWcuZGF0ZSwgXCI+XCIpID8gbnVsbCA6IGVycm9ycztcbn07XG5cbi8qKlxuICogQGludGVybmFsXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCBjb21wYXJlcyB0aGUgZGF0ZSB2YWx1ZXMgb2YgdGhlIGdpdmVuXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBhbmQgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sLlxuICpcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgbmFtZSB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBjb21wYXJlVG9WYWxpZGF0aW9uID0gKFxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXG4gIGNvbmZpZzogQ29tcGFyZVZhbGlkYXRpb25Db25maWdcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgY29uc3QgZGF0ZSA9IGNvbnRyb2wucGFyZW50Py5nZXQoY29uZmlnLmZpZWxkTmFtZSk/LnZhbHVlO1xuICBpZiAoZGF0ZSkge1xuICAgIGNvbnN0IGVycm9yID0gY29uZmlnLmVycm9yID8/IGBWYWx1ZSBjb21wYXJpc29uIHdpdGggJHtkYXRlfSBmYWlsZWQuYDtcbiAgICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XG4gICAgICBbY29uZmlnLmVycm9yTmFtZSA/PyBcImRhdGVDb21wYXJpc29uXCJdOiBlcnJvcixcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiBjb250cm9sLnZhbHVlICYmIGNvbXBhcmVEYXRlcyhjb250cm9sLnZhbHVlLCBkYXRlLCBjb25maWcuY29tcGFyaXNvbilcbiAgICAgID8gbnVsbFxuICAgICAgOiBlcnJvcnM7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQGRlc2NyaXB0aW9uXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBjb25kaXRpb24gaXMgbWV0LlxuICpcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uYWwgZnVuY3Rpb24gb3IgYm9vbGVhbiB0byBjaGVja1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kIGVycm9yIG5hbWUgc3RyaW5nXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCByZXF1aXJlZFdoZW5WYWxpZGF0aW9uID0gKFxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXG4gIGNvbmZpZzogQ29uZGl0aW9uYWxWYWxpZGF0aW9uQ29uZmlnXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGVycm9yID0gY29uZmlnLmVycm9yID8/IFwiVGhpcyBjb250cm9sIGhhcyBhIGNvbmRpdGlvbmFsIHNldCBvbiBpdC5cIjtcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0ge1xuICAgIFtjb25maWcuZXJyb3JOYW1lID8/IFwicmVxdWlyZWRcIl06IGVycm9yLFxuICB9O1xuXG4gIGNvbnN0IG91dGNvbWUgPVxuICAgIHR5cGVvZiBjb25maWcuY29uZGl0aW9uYWwgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyBjb25maWcuY29uZGl0aW9uYWwoKVxuICAgICAgOiBjb25maWcuY29uZGl0aW9uYWw7XG4gIHJldHVybiAhY29udHJvbC52YWx1ZSAmJiBvdXRjb21lID8gZXJyb3JzIDogbnVsbDtcbn07XG5cbi8qKlxuICogQGludGVybmFsXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgbm8gdmFsdWUgYW5kIHNwZWNpZmllZFxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIGl0LlxuICpcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgbmFtZSB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBsaW5rVG9WYWxpZGF0aW9uID0gKFxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXG4gIGNvbmZpZzogTGlua1ZhbGlkYXRpb25Db25maWdcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgY29uc3QgZXJyb3IgPSBjb25maWcuZXJyb3IgPz8gYFRoaXMgY29udHJvbCBoYXMgYSBsaW5rIHRvICR7Y29uZmlnLmxpbmt9LmA7XG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHsgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJsaW5rVG9cIl06IGVycm9yIH07XG4gIGNvbnN0IGxpbmtlZFRvID0gY29udHJvbC5wYXJlbnQ/LmdldChjb25maWcubGluayk7XG5cbiAgcmV0dXJuICFjb250cm9sPy52YWx1ZSAmJiAhIWxpbmtlZFRvPy52YWx1ZSA/IGVycm9ycyA6IG51bGw7XG59O1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQGRlc2NyaXB0aW9uXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBnaXZlblxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIGEgdmFsdWUgYW5kIHNwZWNpZmllZFxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgZG9lcyBub3QuXG4gKlxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCBuYW1lIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBlcnJvciBhbmRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbmFtZSBzdHJpbmdcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gIC0gVmFsaWRhdGlvbiBlcnJvclxuICovXG5leHBvcnQgY29uc3QgbGlua2VkVG9WYWxpZGF0aW9uID0gKFxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXG4gIGNvbmZpZzogTGlua1ZhbGlkYXRpb25Db25maWdcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgY29uc3QgZXJyb3IgPSBjb25maWcuZXJyb3IgPz8gYFRoaXMgY29udHJvbCBpcyBsaW5rZWQgdG8gJHtjb25maWcubGlua30uYDtcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbY29uZmlnLmVycm9yTmFtZSA/PyBcImxpbmtUb1wiXTogZXJyb3IgfTtcbiAgY29uc3QgbGluayA9IGNvbnRyb2wucGFyZW50Py5nZXQoY29uZmlnLmxpbmspO1xuXG4gIHJldHVybiAhIWNvbnRyb2w/LnZhbHVlICYmICFsaW5rPy52YWx1ZSA/IGVycm9ycyA6IG51bGw7XG59O1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQGRlc2NyaXB0aW9uXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBnaXZlblxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIGEgdmFsdWUgdGhhdCBmYWlscyBhIGdpdmVuXG4gKiBsZW5ndGggY29tcGFyaXNvbi5cbiAqXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aCB0byBjaGVjaywgY29tcGFyaXNvbiB0byBwcmVmb3JtIFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kIGVycm9yIG5hbWUgc3RyaW5nXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGxlbmd0aFZhbGlkYXRpb24gPSAoXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcbiAgY29uZmlnOiBMZW5ndGhWYWxpZGF0aW9uQ29uZmlnXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGVycm9yID1cbiAgICBjb25maWcuZXJyb3IgPz8gYFRoZSByZXF1aXJlZCBsZW5ndGggc2hvdWxkIGJlICR7Y29uZmlnLmNvbXBhcmlzb259ICR7Y29uZmlnLmxlbmd0aH0uYDtcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbY29uZmlnLmVycm9yTmFtZSA/PyBcImxlbmd0aFwiXTogZXJyb3IgfTtcblxuICByZXR1cm4gISFjb250cm9sPy52YWx1ZSAmJlxuICAgIGNvbXBhcmUoY29udHJvbD8udmFsdWU/Lmxlbmd0aCwgY29uZmlnLmxlbmd0aCwgY29uZmlnLmNvbXBhcmlzb24gPz8gXCI9PT1cIilcbiAgICA/IGVycm9yc1xuICAgIDogbnVsbDtcbn07XG5cbi8qKlxuICogQGludGVybmFsXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCB2YWx1ZSBpcyBub3QgaW4gYSBnaXZlbiByYW5nZS5cbiAqXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0IHZhbHVlIHRvIGNoZWNrIGFuZCBlbmQgdmFsdWUgdG8gY2hlY2tcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXMgd2VsbCBhcyBvcHRpb25hbCBlcnJvciBhbmQgZXJyb3IgbmFtZSBzdHJpbmdcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gIC0gVmFsaWRhdGlvbiBlcnJvclxuICovXG5leHBvcnQgY29uc3QgcmFuZ2VWYWxpZGF0aW9uID0gKFxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXG4gIGNvbmZpZzogUmFuZ2VWYWxpZGF0aW9uQ29uZmlnXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGVycm9yID1cbiAgICBjb25maWcuZXJyb3IgPz8gYFZhbHVlIG11c3QgYmUgaW4gdGhlIHJhbmdlIGJldHdlZW4gJHtjb25maWcuc3RhcnR9IGFuZCAke2NvbmZpZy5lbmR9LmA7XG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHsgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJyYW5nZVwiXTogZXJyb3IgfTtcblxuICByZXR1cm4gISFjb250cm9sPy52YWx1ZSAmJlxuICAgIGNvbXBhcmUoY29udHJvbC52YWx1ZS5sZW5ndGgsIGNvbmZpZy5zdGFydCwgXCI+PVwiKSAmJlxuICAgIGNvbXBhcmUoY29udHJvbC52YWx1ZS5sZW5ndGgsIGNvbmZpZy5lbmQsICc8PScgKVxuICAgID8gZXJyb3JzXG4gICAgOiBudWxsO1xufTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqIEBkZXNjcmlwdGlvblxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW5cbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhIHZhbHVlIHRoYXQgZmFpbHMgYSBnaXZlblxuICogd29yZCBjb3VudCBjb21wYXJpc29uLlxuICpcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yZCBjb3VudCB0byBjaGVjaywgY29tcGFyaXNvbiB0byBwcmVmb3JtIFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kIGVycm9yIG5hbWUgc3RyaW5nXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IHdvcmRDb3VudFZhbGlkYXRpb24gPSAoXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcbiAgY29uZmlnOiBDb3VudFZhbGlkYXRpb25Db25maWdcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgY29uc3QgZXJyb3IgPVxuICAgIGNvbmZpZy5lcnJvciA/PyBgVGhlIHJlcXVpcmVkIHdvcmQgY291bnQgc2hvdWxkIGJlICR7Y29uZmlnLmNvbXBhcmlzb259ICR7Y29uZmlnLmNvdW50fS5gO1xuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwid29yZENvdW50XCJdOiBlcnJvciB9O1xuXG4gIGNvbnN0IHZhbHVlQ291bnQgPSBjb250cm9sPy52YWx1ZT8uc3BsaXQoJyAnKTtcbiAgcmV0dXJuICEhY29udHJvbD8udmFsdWUgJiZcbiAgICBjb21wYXJlKHZhbHVlQ291bnQsIGNvbmZpZy5jb3VudCwgY29uZmlnLmNvbXBhcmlzb24gPz8gXCI9PT1cIilcbiAgICA/IGVycm9yc1xuICAgIDogbnVsbDtcbn1cblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqIEBkZXNjcmlwdGlvblxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW5cbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIHZhbHVlIGlzIG5vdCBpbiBhIGdpdmVuIHdvcmQgY291bnQgcmFuZ2UuXG4gKlxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCB2YWx1ZSB0byBjaGVjayBhbmQgZW5kIHZhbHVlIHRvIGNoZWNrXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzIHdlbGwgYXMgb3B0aW9uYWwgZXJyb3IgYW5kIGVycm9yIG5hbWUgc3RyaW5nXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IHdvcmRDb3VudFJhbmdlVmFsaWRhdGlvbiA9IChcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxuICBjb25maWc6IFJhbmdlVmFsaWRhdGlvbkNvbmZpZ1xuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICBjb25zdCBlcnJvciA9XG4gICAgY29uZmlnLmVycm9yID8/IGBUaGUgd29yZCBjb3VudCBtdXN0IGJlIGluIHRoZSByYW5nZSBiZXR3ZWVuICR7Y29uZmlnLnN0YXJ0fSBhbmQgJHtjb25maWcuZW5kfS5gO1xuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwid29yZENvdW50UmFuZ2VcIl06IGVycm9yIH07XG4gIGNvbnN0IHZhbHVlQ291bnQgPSBjb250cm9sPy52YWx1ZT8uc3BsaXQoJyAnKTtcblxuICByZXR1cm4gISFjb250cm9sPy52YWx1ZSAmJlxuICAgIGNvbXBhcmUodmFsdWVDb3VudCwgY29uZmlnLnN0YXJ0LCBcIj49XCIpICYmXG4gICAgY29tcGFyZSh2YWx1ZUNvdW50LCBjb25maWcuZW5kLCAnPD0nIClcbiAgICA/IGVycm9yc1xuICAgIDogbnVsbDtcbn07XG5cbi8qKlxuICogQGludGVybmFsXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhbnlcbiAqIG9mIHRoZSB2YWxpZGF0aW9ucyBmcm9tIHRoZSBnaXZlbiBzZXF1ZW5jZSByZXR1cm4gYW4gZXJyb3IuXG4gKiBUaGUgc2VxdWVuY2Ugb3JkZXIgbWV0ZXJzIGFzIHRoZSBmaXJzdCBmYWlsIHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcbiAqIEBwYXJhbSBzZXF1ZW5jZSAgICAgICAgICAgICAgICAgICAgIC0gc2VxdWVuY2Ugb2YgY29uZmlncyB0aGF0IGNvbnNpc3RzIG9mXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb24gZnVuY3Rpb25zIGFuZCBjb25maWdzIGZvciB0aG9zZSBcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25zLlxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBzZXF1ZW50aWFsVmFsaWRhdGlvbiA9IChcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxuICBzZXF1ZW5jZTogU2VxdWVuY2VDb25maWdbXVxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICBsZXQgdmFsaWRhdGlvbkVycm9yITogVmFsaWRhdGlvbkVycm9ycztcbiAgY29uc3QgaGFzRXJyb3IgPSBzZXF1ZW5jZS5zb21lKCh2YWxpZGF0aW9uKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSB2YWxpZGF0aW9uLnZhbGlkYXRpb25GdW4oY29udHJvbCwge1xuICAgICAgLi4udmFsaWRhdGlvbi52YWxpZGF0aW9uRnVuQ29uZmlnLFxuICAgIH0pO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdmFsaWRhdGlvbkVycm9yID0gZXJyb3I7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbiAgcmV0dXJuIGhhc0Vycm9yID8gdmFsaWRhdGlvbkVycm9yIDogbnVsbDtcbn07XG4iXX0=