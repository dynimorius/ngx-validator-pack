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
    const valueCount = control?.value?.split(' ').length;
    return control?.value &&
        compare(valueCount, config.count, config.comparison ?? "===")
        ? null
        : errors;
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
    const valueCount = control?.value?.split(' ').length;
    return !!control?.value &&
        compare(valueCount, config.start, ">=") &&
        compare(valueCount, config.end, '<=')
        ? null
        : errors;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi92YWxpZGF0aW9ucy92YWxpZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBWTdDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV6Qzs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLENBQzlCLE9BQXdCLEVBQ3hCLE1BQThCLEVBQ0wsRUFBRTtJQUMzQixNQUFNLEtBQUssR0FDVCxNQUFNLENBQUMsS0FBSyxJQUFJLHdEQUF3RCxDQUFDO0lBQzNFLE1BQU0sTUFBTSxHQUFxQixFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUUzRSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQztRQUN6RCxDQUFDLENBQUMsSUFBSTtRQUNOLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsQ0FDbkMsT0FBd0IsRUFDeEIsTUFBNEIsRUFDSCxFQUFFO0lBQzNCLE1BQU0sS0FBSyxHQUNULE1BQU0sQ0FBQyxLQUFLO1FBQ1osK0NBQStDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUNoRSxNQUFNLE1BQU0sR0FBcUI7UUFDL0Is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MEIsRUFDRCxFQUFFO0lBQzNCLElBQUksZUFBa0MsQ0FBQztJQUN2QyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFXLEVBQUU7UUFDckQsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDOUMsR0FBRyxVQUFVLENBQUMsbUJBQW1CO1NBQ2xDLENBQUMsQ0FBQztRQUNILElBQUksS0FBSyxFQUFFLENBQUM7WUFDVixlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDM0MsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXG4gKi9cblxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBjb21wYXJlRGF0ZXMgfSBmcm9tIFwiLi4vaGVscGVycy9kYXRlXCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uL2hlbHBlcnMvbnVtYmVyc1wiO1xuaW1wb3J0IHsgU2VxdWVuY2VDb25maWcgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9zZXF1ZW5jZS1jb25maWcuaW50ZXJmYWNlXCI7XG5pbXBvcnQge1xuICBDb21wYXJlVmFsaWRhdGlvbkNvbmZpZyxcbiAgQ29uZGl0aW9uYWxWYWxpZGF0aW9uQ29uZmlnLFxuICBDb3VudFZhbGlkYXRpb25Db25maWcsXG4gIERhdGVWYWxpZGF0aW9uQ29uZmlnLFxuICBMZW5ndGhWYWxpZGF0aW9uQ29uZmlnLFxuICBMaW5rVmFsaWRhdGlvbkNvbmZpZyxcbiAgUmFuZ2VWYWxpZGF0aW9uQ29uZmlnLFxuICBSZWdFeHBWYWxpZGF0aW9uQ29uZmlnLFxufSBmcm9tIFwiLi4vaW50ZXJmYWNlcy92YWxpZGF0aW9uLWNvbmZpZy5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IHRlc3QgfSBmcm9tIFwiLi4vaGVscGVycy9yZWdleHBcIjtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqIEBkZXNjcmlwdGlvblxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHByZWZvcm1zIGEgUmVnRXggY2hlY2sgb24gdmFsdWUgaW4gdGhlXG4gKiBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cbiAqXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4cCB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZ2V4cFZhbGlkYXRpb24gPSAoXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcbiAgY29uZmlnOiBSZWdFeHBWYWxpZGF0aW9uQ29uZmlnXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGVycm9yID1cbiAgICBjb25maWcuZXJyb3IgPz8gXCJUaGlzIGNvbnRyb2wgZGlkIG5vdCBtYXRjaCBhIGdpdmVuIHJlZ3VsYXIgZXhwcmVzc2lvbi5cIjtcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbY29uZmlnLmVycm9yTmFtZSA/PyBcInJlZ2V4cFwiXTogZXJyb3IgfTtcblxuICByZXR1cm4gIWNvbnRyb2wudmFsdWUgfHxcbiAgICB0ZXN0KGNvbmZpZy5yZWdFeHAsIGNvbnRyb2wudmFsdWUsIGNvbmZpZz8ubG9naWMgPz8gXCIhIVwiKVxuICAgID8gbnVsbFxuICAgIDogZXJyb3JzO1xufTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqIEBkZXNjcmlwdGlvblxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBpZiB0aGUgZGF0ZSBpbiB0aGUgZ2l2ZW5cbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGVhcmxpZXIgdGhlbiB0aGUgdmFsdWUgaW4gdGhlIHNwZWNpZmllZFxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXG4gKlxuICogQHBhcmFtIHtBYnN0cmFjdENvbnRyb2x9ICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBlcnJvciBhbmRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbmFtZSBzdHJpbmdcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGVhcmxpZXJUaGVuVmFsaWRhdGlvbiA9IChcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxuICBjb25maWc6IERhdGVWYWxpZGF0aW9uQ29uZmlnXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGVycm9yID1cbiAgICBjb25maWcuZXJyb3IgPz9cbiAgICBgVGhpcyBjb250cm9sIG11c3QgaGF2ZSBhIHZhbHVlIGVhcmxpZXIgdGhlbiAke2NvbmZpZy5kYXRlfS5gO1xuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XG4gICAgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJlYXJsaWVyVGhlblwiXTogZXJyb3IsXG4gIH07XG5cbiAgcmV0dXJuIGNvbXBhcmVEYXRlcyhjb250cm9sLnZhbHVlLCBjb25maWcuZGF0ZSwgXCI8XCIpID8gbnVsbCA6IGVycm9ycztcbn07XG5cbi8qKlxuICogQGludGVybmFsXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCBjaGVja3MgaWYgdGhlIGRhdGUgaW4gdGhlIGdpdmVuXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBncmVhdGVyIHRoZW4gdGhlIHZhbHVlIGluIHRoZSBzcGVjaWZpZWRcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sLlxuICpcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgICAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGxhdGVyVGhlblZhbGlkYXRpb24gPSAoXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcbiAgY29uZmlnOiBEYXRlVmFsaWRhdGlvbkNvbmZpZ1xuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICBjb25zdCBlcnJvciA9XG4gICAgY29uZmlnLmVycm9yID8/IGBUaGlzIGNvbnRyb2wgbXVzdCBoYXZlIGEgdmFsdWUgbGF0ZXIgdGhlbiAke2NvbmZpZy5kYXRlfS5gO1xuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwibGF0ZXJUaGVuXCJdOiBlcnJvciB9O1xuXG4gIHJldHVybiBjb21wYXJlRGF0ZXMoY29udHJvbC52YWx1ZSwgY29uZmlnLmRhdGUsIFwiPlwiKSA/IG51bGwgOiBlcnJvcnM7XG59O1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQGRlc2NyaXB0aW9uXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggY29tcGFyZXMgdGhlIGRhdGUgdmFsdWVzIG9mIHRoZSBnaXZlblxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgYW5kIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cbiAqXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkIG5hbWUgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBuYW1lIHN0cmluZ1xuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgIC0gVmFsaWRhdGlvbiBlcnJvclxuICovXG5leHBvcnQgY29uc3QgY29tcGFyZVRvVmFsaWRhdGlvbiA9IChcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxuICBjb25maWc6IENvbXBhcmVWYWxpZGF0aW9uQ29uZmlnXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGRhdGUgPSBjb250cm9sLnBhcmVudD8uZ2V0KGNvbmZpZy5maWVsZE5hbWUpPy52YWx1ZTtcbiAgaWYgKGRhdGUpIHtcbiAgICBjb25zdCBlcnJvciA9IGNvbmZpZy5lcnJvciA/PyBgVmFsdWUgY29tcGFyaXNvbiB3aXRoICR7ZGF0ZX0gZmFpbGVkLmA7XG4gICAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0ge1xuICAgICAgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJkYXRlQ29tcGFyaXNvblwiXTogZXJyb3IsXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gY29udHJvbC52YWx1ZSAmJiBjb21wYXJlRGF0ZXMoY29udHJvbC52YWx1ZSwgZGF0ZSwgY29uZmlnLmNvbXBhcmlzb24pXG4gICAgICA/IG51bGxcbiAgICAgIDogZXJyb3JzO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqIEBkZXNjcmlwdGlvblxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgY29uZGl0aW9uIGlzIG1ldC5cbiAqXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbmFsIGZ1bmN0aW9uIG9yIGJvb2xlYW4gdG8gY2hlY2tcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIG9wdGlvbmFsIGVycm9yIGFuZCBlcnJvciBuYW1lIHN0cmluZ1xuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgIC0gVmFsaWRhdGlvbiBlcnJvclxuICovXG5leHBvcnQgY29uc3QgcmVxdWlyZWRXaGVuVmFsaWRhdGlvbiA9IChcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxuICBjb25maWc6IENvbmRpdGlvbmFsVmFsaWRhdGlvbkNvbmZpZ1xuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICBjb25zdCBlcnJvciA9IGNvbmZpZy5lcnJvciA/PyBcIlRoaXMgY29udHJvbCBoYXMgYSBjb25kaXRpb25hbCBzZXQgb24gaXQuXCI7XG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcbiAgICBbY29uZmlnLmVycm9yTmFtZSA/PyBcInJlcXVpcmVkXCJdOiBlcnJvcixcbiAgfTtcblxuICBjb25zdCBvdXRjb21lID1cbiAgICB0eXBlb2YgY29uZmlnLmNvbmRpdGlvbmFsID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gY29uZmlnLmNvbmRpdGlvbmFsKClcbiAgICAgIDogY29uZmlnLmNvbmRpdGlvbmFsO1xuICByZXR1cm4gIWNvbnRyb2wudmFsdWUgJiYgb3V0Y29tZSA/IGVycm9ycyA6IG51bGw7XG59O1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQGRlc2NyaXB0aW9uXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBnaXZlblxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIG5vIHZhbHVlIGFuZCBzcGVjaWZpZWRcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBpdC5cbiAqXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkIG5hbWUgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBuYW1lIHN0cmluZ1xuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgIC0gVmFsaWRhdGlvbiBlcnJvclxuICovXG5leHBvcnQgY29uc3QgbGlua1RvVmFsaWRhdGlvbiA9IChcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxuICBjb25maWc6IExpbmtWYWxpZGF0aW9uQ29uZmlnXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGVycm9yID0gY29uZmlnLmVycm9yID8/IGBUaGlzIGNvbnRyb2wgaGFzIGEgbGluayB0byAke2NvbmZpZy5saW5rfS5gO1xuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwibGlua1RvXCJdOiBlcnJvciB9O1xuICBjb25zdCBsaW5rZWRUbyA9IGNvbnRyb2wucGFyZW50Py5nZXQoY29uZmlnLmxpbmspO1xuXG4gIHJldHVybiAhY29udHJvbD8udmFsdWUgJiYgISFsaW5rZWRUbz8udmFsdWUgPyBlcnJvcnMgOiBudWxsO1xufTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqIEBkZXNjcmlwdGlvblxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW5cbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhIHZhbHVlIGFuZCBzcGVjaWZpZWRcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGRvZXMgbm90LlxuICpcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgbmFtZSB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGxpbmtlZFRvVmFsaWRhdGlvbiA9IChcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxuICBjb25maWc6IExpbmtWYWxpZGF0aW9uQ29uZmlnXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGVycm9yID0gY29uZmlnLmVycm9yID8/IGBUaGlzIGNvbnRyb2wgaXMgbGlua2VkIHRvICR7Y29uZmlnLmxpbmt9LmA7XG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHsgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJsaW5rVG9cIl06IGVycm9yIH07XG4gIGNvbnN0IGxpbmsgPSBjb250cm9sLnBhcmVudD8uZ2V0KGNvbmZpZy5saW5rKTtcblxuICByZXR1cm4gISFjb250cm9sPy52YWx1ZSAmJiAhbGluaz8udmFsdWUgPyBlcnJvcnMgOiBudWxsO1xufTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqIEBkZXNjcmlwdGlvblxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW5cbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhIHZhbHVlIHRoYXQgZmFpbHMgYSBnaXZlblxuICogbGVuZ3RoIGNvbXBhcmlzb24uXG4gKlxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGggdG8gY2hlY2ssIGNvbXBhcmlzb24gdG8gcHJlZm9ybSBcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIG9wdGlvbmFsIGVycm9yIGFuZCBlcnJvciBuYW1lIHN0cmluZ1xuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBsZW5ndGhWYWxpZGF0aW9uID0gKFxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXG4gIGNvbmZpZzogTGVuZ3RoVmFsaWRhdGlvbkNvbmZpZ1xuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICBjb25zdCBlcnJvciA9XG4gICAgY29uZmlnLmVycm9yID8/IGBUaGUgcmVxdWlyZWQgbGVuZ3RoIHNob3VsZCBiZSAke2NvbmZpZy5jb21wYXJpc29ufSAke2NvbmZpZy5sZW5ndGh9LmA7XG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHsgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJsZW5ndGhcIl06IGVycm9yIH07XG5cbiAgcmV0dXJuICEhY29udHJvbD8udmFsdWUgJiZcbiAgICBjb21wYXJlKGNvbnRyb2w/LnZhbHVlPy5sZW5ndGgsIGNvbmZpZy5sZW5ndGgsIGNvbmZpZy5jb21wYXJpc29uID8/IFwiPT09XCIpXG4gICAgPyBlcnJvcnNcbiAgICA6IG51bGw7XG59O1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQGRlc2NyaXB0aW9uXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBnaXZlblxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgdmFsdWUgaXMgbm90IGluIGEgZ2l2ZW4gcmFuZ2UuXG4gKlxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCB2YWx1ZSB0byBjaGVjayBhbmQgZW5kIHZhbHVlIHRvIGNoZWNrXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzIHdlbGwgYXMgb3B0aW9uYWwgZXJyb3IgYW5kIGVycm9yIG5hbWUgc3RyaW5nXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmdlVmFsaWRhdGlvbiA9IChcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxuICBjb25maWc6IFJhbmdlVmFsaWRhdGlvbkNvbmZpZ1xuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICBjb25zdCBlcnJvciA9XG4gICAgY29uZmlnLmVycm9yID8/IGBWYWx1ZSBtdXN0IGJlIGluIHRoZSByYW5nZSBiZXR3ZWVuICR7Y29uZmlnLnN0YXJ0fSBhbmQgJHtjb25maWcuZW5kfS5gO1xuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwicmFuZ2VcIl06IGVycm9yIH07XG5cbiAgcmV0dXJuICEhY29udHJvbD8udmFsdWUgJiZcbiAgICBjb21wYXJlKGNvbnRyb2wudmFsdWUubGVuZ3RoLCBjb25maWcuc3RhcnQsIFwiPj1cIikgJiZcbiAgICBjb21wYXJlKGNvbnRyb2wudmFsdWUubGVuZ3RoLCBjb25maWcuZW5kLCAnPD0nIClcbiAgICA/IGVycm9yc1xuICAgIDogbnVsbDtcbn07XG5cbi8qKlxuICogQGludGVybmFsXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgYSB2YWx1ZSB0aGF0IGZhaWxzIGEgZ2l2ZW5cbiAqIHdvcmQgY291bnQgY29tcGFyaXNvbi5cbiAqXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQgY291bnQgdG8gY2hlY2ssIGNvbXBhcmlzb24gdG8gcHJlZm9ybSBcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIG9wdGlvbmFsIGVycm9yIGFuZCBlcnJvciBuYW1lIHN0cmluZ1xuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCB3b3JkQ291bnRWYWxpZGF0aW9uID0gKFxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXG4gIGNvbmZpZzogQ291bnRWYWxpZGF0aW9uQ29uZmlnXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGVycm9yID1cbiAgICBjb25maWcuZXJyb3IgPz8gYFRoZSByZXF1aXJlZCB3b3JkIGNvdW50IHNob3VsZCBiZSAke2NvbmZpZy5jb21wYXJpc29ufSAke2NvbmZpZy5jb3VudH0uYDtcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbY29uZmlnLmVycm9yTmFtZSA/PyBcIndvcmRDb3VudFwiXTogZXJyb3IgfTtcblxuICBjb25zdCB2YWx1ZUNvdW50ID0gY29udHJvbD8udmFsdWU/LnNwbGl0KCcgJykubGVuZ3RoO1xuICByZXR1cm4gY29udHJvbD8udmFsdWUgJiZcbiAgICBjb21wYXJlKHZhbHVlQ291bnQsIGNvbmZpZy5jb3VudCwgY29uZmlnLmNvbXBhcmlzb24gPz8gXCI9PT1cIilcbiAgICA/IG51bGxcbiAgICA6IGVycm9ycztcbn1cblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqIEBkZXNjcmlwdGlvblxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW5cbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIHZhbHVlIGlzIG5vdCBpbiBhIGdpdmVuIHdvcmQgY291bnQgcmFuZ2UuXG4gKlxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCB2YWx1ZSB0byBjaGVjayBhbmQgZW5kIHZhbHVlIHRvIGNoZWNrXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzIHdlbGwgYXMgb3B0aW9uYWwgZXJyb3IgYW5kIGVycm9yIG5hbWUgc3RyaW5nXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IHdvcmRDb3VudFJhbmdlVmFsaWRhdGlvbiA9IChcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxuICBjb25maWc6IFJhbmdlVmFsaWRhdGlvbkNvbmZpZ1xuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICBjb25zdCBlcnJvciA9XG4gICAgY29uZmlnLmVycm9yID8/IGBUaGUgd29yZCBjb3VudCBtdXN0IGJlIGluIHRoZSByYW5nZSBiZXR3ZWVuICR7Y29uZmlnLnN0YXJ0fSBhbmQgJHtjb25maWcuZW5kfS5gO1xuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwid29yZENvdW50UmFuZ2VcIl06IGVycm9yIH07XG4gIGNvbnN0IHZhbHVlQ291bnQgPSBjb250cm9sPy52YWx1ZT8uc3BsaXQoJyAnKS5sZW5ndGg7XG5cbiAgcmV0dXJuICEhY29udHJvbD8udmFsdWUgJiZcbiAgICBjb21wYXJlKHZhbHVlQ291bnQsIGNvbmZpZy5zdGFydCwgXCI+PVwiKSAmJlxuICAgIGNvbXBhcmUodmFsdWVDb3VudCwgY29uZmlnLmVuZCwgJzw9JyApXG4gICAgPyBudWxsXG4gICAgOiBlcnJvcnM7XG59O1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQGRlc2NyaXB0aW9uXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYW55XG4gKiBvZiB0aGUgdmFsaWRhdGlvbnMgZnJvbSB0aGUgZ2l2ZW4gc2VxdWVuY2UgcmV0dXJuIGFuIGVycm9yLlxuICogVGhlIHNlcXVlbmNlIG9yZGVyIG1ldGVycyBhcyB0aGUgZmlyc3QgZmFpbCB3aWxsIGJlIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXG4gKiBAcGFyYW0gc2VxdWVuY2UgICAgICAgICAgICAgICAgICAgICAtIHNlcXVlbmNlIG9mIGNvbmZpZ3MgdGhhdCBjb25zaXN0cyBvZlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uIGZ1bmN0aW9ucyBhbmQgY29uZmlncyBmb3IgdGhvc2UgXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9ucy5cbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gIC0gVmFsaWRhdGlvbiBlcnJvclxuICovXG5leHBvcnQgY29uc3Qgc2VxdWVudGlhbFZhbGlkYXRpb24gPSAoXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcbiAgc2VxdWVuY2U6IFNlcXVlbmNlQ29uZmlnW11cbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgbGV0IHZhbGlkYXRpb25FcnJvciE6IFZhbGlkYXRpb25FcnJvcnM7XG4gIGNvbnN0IGhhc0Vycm9yID0gc2VxdWVuY2Uuc29tZSgodmFsaWRhdGlvbik6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGVycm9yID0gdmFsaWRhdGlvbi52YWxpZGF0aW9uRnVuKGNvbnRyb2wsIHtcbiAgICAgIC4uLnZhbGlkYXRpb24udmFsaWRhdGlvbkZ1bkNvbmZpZyxcbiAgICB9KTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHZhbGlkYXRpb25FcnJvciA9IGVycm9yO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIHJldHVybiBoYXNFcnJvciA/IHZhbGlkYXRpb25FcnJvciA6IG51bGw7XG59O1xuIl19