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
    const error = config.error ?? `The required length is ${config.length}.`;
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
    const errors = { [config.errorName ?? "length"]: error };
    return !!control?.value &&
        compare(control.value.length, config.start, ">=") &&
        compare(control.value.length, config.end, '<=')
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi92YWxpZGF0aW9ucy92YWxpZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBVzdDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV6Qzs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLENBQzlCLE9BQXdCLEVBQ3hCLE1BQThCLEVBQ0wsRUFBRTtJQUMzQixNQUFNLEtBQUssR0FDVCxNQUFNLENBQUMsS0FBSyxJQUFJLHdEQUF3RCxDQUFDO0lBQzNFLE1BQU0sTUFBTSxHQUFxQixFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUUzRSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQztRQUN6RCxDQUFDLENBQUMsSUFBSTtRQUNOLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsQ0FDbkMsT0FBd0IsRUFDeEIsTUFBNEIsRUFDSCxFQUFFO0lBQzNCLE1BQU0sS0FBSyxHQUNULE1BQU0sQ0FBQyxLQUFLO1FBQ1osK0NBQStDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUNoRSxNQUFNLE1BQU0sR0FBcUI7UUFDL0Is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QkFBbUI7U0FDbEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNWLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDeEIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUMzQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IGNvbXBhcmVEYXRlcyB9IGZyb20gXCIuLi9oZWxwZXJzL2RhdGVcIjtcclxuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi9oZWxwZXJzL251bWJlcnNcIjtcclxuaW1wb3J0IHsgU2VxdWVuY2VDb25maWcgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9zZXF1ZW5jZS1jb25maWcuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29tcGFyZVZhbGlkYXRpb25Db25maWcsXHJcbiAgQ29uZGl0aW9uYWxWYWxpZGF0aW9uQ29uZmlnLFxyXG4gIERhdGVWYWxpZGF0aW9uQ29uZmlnLFxyXG4gIExlbmd0aFZhbGlkYXRpb25Db25maWcsXHJcbiAgTGlua1ZhbGlkYXRpb25Db25maWcsXHJcbiAgUmFuZ2VWYWxpZGF0aW9uQ29uZmlnLFxyXG4gIFJlZ0V4cFZhbGlkYXRpb25Db25maWcsXHJcbn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdmFsaWRhdGlvbi1jb25maWcuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IHRlc3QgfSBmcm9tIFwiLi4vaGVscGVycy9yZWdleHBcIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCBwcmVmb3JtcyBhIFJlZ0V4IGNoZWNrIG9uIHZhbHVlIGluIHRoZVxyXG4gKiBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cclxuICpcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXhwIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBlcnJvciBhbmRcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBuYW1lIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCByZWdleHBWYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IFJlZ0V4cFZhbGlkYXRpb25Db25maWdcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGNvbmZpZy5lcnJvciA/PyBcIlRoaXMgY29udHJvbCBkaWQgbm90IG1hdGNoIGEgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uLlwiO1xyXG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHsgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJyZWdleHBcIl06IGVycm9yIH07XHJcblxyXG4gIHJldHVybiAhY29udHJvbC52YWx1ZSB8fFxyXG4gICAgdGVzdChjb25maWcucmVnRXhwLCBjb250cm9sLnZhbHVlLCBjb25maWc/LmxvZ2ljID8/IFwiISFcIilcclxuICAgID8gbnVsbFxyXG4gICAgOiBlcnJvcnM7XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGlmIHRoZSBkYXRlIGluIHRoZSBnaXZlblxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBlYXJsaWVyIHRoZW4gdGhlIHZhbHVlIGluIHRoZSBzcGVjaWZpZWRcclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbmFtZSBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVhcmxpZXJUaGVuVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiBEYXRlVmFsaWRhdGlvbkNvbmZpZ1xyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPVxyXG4gICAgY29uZmlnLmVycm9yID8/XHJcbiAgICBgVGhpcyBjb250cm9sIG11c3QgaGF2ZSBhIHZhbHVlIGVhcmxpZXIgdGhlbiAke2NvbmZpZy5kYXRlfS5gO1xyXG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgIFtjb25maWcuZXJyb3JOYW1lID8/IFwiZWFybGllclRoZW5cIl06IGVycm9yLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBjb21wYXJlRGF0ZXMoY29udHJvbC52YWx1ZSwgY29uZmlnLmRhdGUsIFwiPFwiKSA/IG51bGwgOiBlcnJvcnM7XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGlmIHRoZSBkYXRlIGluIHRoZSBnaXZlblxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBncmVhdGVyIHRoZW4gdGhlIHZhbHVlIGluIHRoZSBzcGVjaWZpZWRcclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAgIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxhdGVyVGhlblZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzogRGF0ZVZhbGlkYXRpb25Db25maWdcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGNvbmZpZy5lcnJvciA/PyBgVGhpcyBjb250cm9sIG11c3QgaGF2ZSBhIHZhbHVlIGxhdGVyIHRoZW4gJHtjb25maWcuZGF0ZX0uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwibGF0ZXJUaGVuXCJdOiBlcnJvciB9O1xyXG5cclxuICByZXR1cm4gY29tcGFyZURhdGVzKGNvbnRyb2wudmFsdWUsIGNvbmZpZy5kYXRlLCBcIj5cIikgPyBudWxsIDogZXJyb3JzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIGNvbXBhcmVzIHRoZSBkYXRlIHZhbHVlcyBvZiB0aGUgZ2l2ZW5cclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgYW5kIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cclxuICpcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgbmFtZSB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbmFtZSBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbXBhcmVUb1ZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzogQ29tcGFyZVZhbGlkYXRpb25Db25maWdcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBjb250cm9sLnBhcmVudD8uZ2V0KGNvbmZpZy5maWVsZE5hbWUpPy52YWx1ZTtcclxuICBpZiAoZGF0ZSkge1xyXG4gICAgY29uc3QgZXJyb3IgPSBjb25maWcuZXJyb3IgPz8gYFZhbHVlIGNvbXBhcmlzb24gd2l0aCAke2RhdGV9IGZhaWxlZC5gO1xyXG4gICAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0ge1xyXG4gICAgICBbY29uZmlnLmVycm9yTmFtZSA/PyBcImRhdGVDb21wYXJpc29uXCJdOiBlcnJvcixcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiBjb250cm9sLnZhbHVlICYmIGNvbXBhcmVEYXRlcyhjb250cm9sLnZhbHVlLCBkYXRlLCBjb25maWcuY29tcGFyaXNvbilcclxuICAgICAgPyBudWxsXHJcbiAgICAgIDogZXJyb3JzO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGNvbmRpdGlvbiBpcyBtZXQuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbmFsIGZ1bmN0aW9uIG9yIGJvb2xlYW4gdG8gY2hlY2tcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZFdoZW5WYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IENvbmRpdGlvbmFsVmFsaWRhdGlvbkNvbmZpZ1xyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPSBjb25maWcuZXJyb3IgPz8gXCJUaGlzIGNvbnRyb2wgaGFzIGEgY29uZGl0aW9uYWwgc2V0IG9uIGl0LlwiO1xyXG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgIFtjb25maWcuZXJyb3JOYW1lID8/IFwicmVxdWlyZWRcIl06IGVycm9yLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG91dGNvbWUgPVxyXG4gICAgdHlwZW9mIGNvbmZpZy5jb25kaXRpb25hbCA9PT0gXCJmdW5jdGlvblwiXHJcbiAgICAgID8gY29uZmlnLmNvbmRpdGlvbmFsKClcclxuICAgICAgOiBjb25maWcuY29uZGl0aW9uYWw7XHJcbiAgcmV0dXJuICFjb250cm9sLnZhbHVlICYmIG91dGNvbWUgPyBlcnJvcnMgOiBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW5cclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIG5vIHZhbHVlIGFuZCBzcGVjaWZpZWRcclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIGl0LlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCBuYW1lIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBlcnJvciBhbmRcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBuYW1lIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGlua1RvVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiBMaW5rVmFsaWRhdGlvbkNvbmZpZ1xyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPSBjb25maWcuZXJyb3IgPz8gYFRoaXMgY29udHJvbCBoYXMgYSBsaW5rIHRvICR7Y29uZmlnLmxpbmt9LmA7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbY29uZmlnLmVycm9yTmFtZSA/PyBcImxpbmtUb1wiXTogZXJyb3IgfTtcclxuICBjb25zdCBsaW5rZWRUbyA9IGNvbnRyb2wucGFyZW50Py5nZXQoY29uZmlnLmxpbmspO1xyXG5cclxuICByZXR1cm4gIWNvbnRyb2w/LnZhbHVlICYmICEhbGlua2VkVG8/LnZhbHVlID8gZXJyb3JzIDogbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhIHZhbHVlIGFuZCBzcGVjaWZpZWRcclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgZG9lcyBub3QuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkIG5hbWUgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxpbmtlZFRvVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiBMaW5rVmFsaWRhdGlvbkNvbmZpZ1xyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPSBjb25maWcuZXJyb3IgPz8gYFRoaXMgY29udHJvbCBpcyBsaW5rZWQgdG8gJHtjb25maWcubGlua30uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwibGlua1RvXCJdOiBlcnJvciB9O1xyXG4gIGNvbnN0IGxpbmsgPSBjb250cm9sLnBhcmVudD8uZ2V0KGNvbmZpZy5saW5rKTtcclxuXHJcbiAgcmV0dXJuICEhY29udHJvbD8udmFsdWUgJiYgIWxpbms/LnZhbHVlID8gZXJyb3JzIDogbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhIHZhbHVlIHRoYXQgZmFpbHMgYSBnaXZlblxyXG4gKiBsZW5ndGggY29tcGFyaXNvbi5cclxuICpcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoIHRvIGNoZWNrLCBjb21wYXJpc29uIHRvIHByZWZvcm0gXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIG9wdGlvbmFsIGVycm9yIGFuZCBlcnJvciBuYW1lIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBsZW5ndGhWYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IExlbmd0aFZhbGlkYXRpb25Db25maWdcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGNvbmZpZy5lcnJvciA/PyBgVGhlIHJlcXVpcmVkIGxlbmd0aCBpcyAke2NvbmZpZy5sZW5ndGh9LmA7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbY29uZmlnLmVycm9yTmFtZSA/PyBcImxlbmd0aFwiXTogZXJyb3IgfTtcclxuXHJcbiAgcmV0dXJuICEhY29udHJvbD8udmFsdWUgJiZcclxuICAgIGNvbXBhcmUoY29udHJvbD8udmFsdWU/Lmxlbmd0aCwgY29uZmlnLmxlbmd0aCwgY29uZmlnLmNvbXBhcmlzb24gPz8gXCI9PT1cIilcclxuICAgID8gZXJyb3JzXHJcbiAgICA6IG51bGw7XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBnaXZlblxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCB2YWx1ZSBpcyBub3QgaW4gYSBnaXZlbiByYW5nZS5cclxuICpcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgdmFsdWUgdG8gY2hlY2sgYW5kIGVuZCB2YWx1ZSB0byBjaGVja1xyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzIHdlbGwgYXMgb3B0aW9uYWwgZXJyb3IgYW5kIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJhbmdlVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiBSYW5nZVZhbGlkYXRpb25Db25maWdcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGNvbmZpZy5lcnJvciA/PyBgVmFsdWUgbXVzdCBiZSBpbiB0aGUgcmFuZ2UgYmV0d2VlbiAke2NvbmZpZy5zdGFydH0gYW5kICR7Y29uZmlnLmVuZH0uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwibGVuZ3RoXCJdOiBlcnJvciB9O1xyXG5cclxuICByZXR1cm4gISFjb250cm9sPy52YWx1ZSAmJlxyXG4gICAgY29tcGFyZShjb250cm9sLnZhbHVlLmxlbmd0aCwgY29uZmlnLnN0YXJ0LCBcIj49XCIpICYmXHJcbiAgICBjb21wYXJlKGNvbnRyb2wudmFsdWUubGVuZ3RoLGNvbmZpZy5lbmQsICc8PScgKVxyXG4gICAgPyBlcnJvcnNcclxuICAgIDogbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhbnlcclxuICogb2YgdGhlIHZhbGlkYXRpb25zIGZyb20gdGhlIGdpdmVuIHNlcXVlbmNlIHJldHVybiBhbiBlcnJvci5cclxuICogVGhlIHNlcXVlbmNlIG9yZGVyIG1ldGVycyBhcyB0aGUgZmlyc3QgZmFpbCB3aWxsIGJlIHJldHVybmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gc2VxdWVuY2UgICAgICAgICAgICAgICAgICAgICAtIHNlcXVlbmNlIG9mIGNvbmZpZ3MgdGhhdCBjb25zaXN0cyBvZlxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb24gZnVuY3Rpb25zIGFuZCBjb25maWdzIGZvciB0aG9zZSBcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbnMuXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNlcXVlbnRpYWxWYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBzZXF1ZW5jZTogU2VxdWVuY2VDb25maWdbXVxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgbGV0IHZhbGlkYXRpb25FcnJvciE6IFZhbGlkYXRpb25FcnJvcnM7XHJcbiAgY29uc3QgaGFzRXJyb3IgPSBzZXF1ZW5jZS5zb21lKCh2YWxpZGF0aW9uKTogYm9vbGVhbiA9PiB7XHJcbiAgICBjb25zdCBlcnJvciA9IHZhbGlkYXRpb24udmFsaWRhdGlvbkZ1bihjb250cm9sLCB7XHJcbiAgICAgIC4uLnZhbGlkYXRpb24udmFsaWRhdGlvbkZ1bkNvbmZpZyxcclxuICAgIH0pO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHZhbGlkYXRpb25FcnJvciA9IGVycm9yO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuICByZXR1cm4gaGFzRXJyb3IgPyB2YWxpZGF0aW9uRXJyb3IgOiBudWxsO1xyXG59O1xyXG4iXX0=