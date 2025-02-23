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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi92YWxpZGF0aW9ucy92YWxpZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBWTdDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV6Qzs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLENBQzlCLE9BQXdCLEVBQ3hCLE1BQThCLEVBQ0wsRUFBRTtJQUMzQixNQUFNLEtBQUssR0FDVCxNQUFNLENBQUMsS0FBSyxJQUFJLHdEQUF3RCxDQUFDO0lBQzNFLE1BQU0sTUFBTSxHQUFxQixFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUUzRSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQztRQUN6RCxDQUFDLENBQUMsSUFBSTtRQUNOLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsQ0FDbkMsT0FBd0IsRUFDeEIsTUFBNEIsRUFDSCxFQUFFO0lBQzNCLE1BQU0sS0FBSyxHQUNULE1BQU0sQ0FBQyxLQUFLO1FBQ1osK0NBQStDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUNoRSxNQUFNLE1BQU0sR0FBcUI7UUFDL0Is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MEIsRUFDRCxFQUFFO0lBQzNCLElBQUksZUFBa0MsQ0FBQztJQUN2QyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFXLEVBQUU7UUFDckQsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDOUMsR0FBRyxVQUFVLENBQUMsbUJBQW1CO1NBQ2xDLENBQUMsQ0FBQztRQUNILElBQUksS0FBSyxFQUFFLENBQUM7WUFDVixlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDM0MsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBjb21wYXJlRGF0ZXMgfSBmcm9tIFwiLi4vaGVscGVycy9kYXRlXCI7XHJcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vaGVscGVycy9udW1iZXJzXCI7XHJcbmltcG9ydCB7IFNlcXVlbmNlQ29uZmlnIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvc2VxdWVuY2UtY29uZmlnLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge1xyXG4gIENvbXBhcmVWYWxpZGF0aW9uQ29uZmlnLFxyXG4gIENvbmRpdGlvbmFsVmFsaWRhdGlvbkNvbmZpZyxcclxuICBDb3VudFZhbGlkYXRpb25Db25maWcsXHJcbiAgRGF0ZVZhbGlkYXRpb25Db25maWcsXHJcbiAgTGVuZ3RoVmFsaWRhdGlvbkNvbmZpZyxcclxuICBMaW5rVmFsaWRhdGlvbkNvbmZpZyxcclxuICBSYW5nZVZhbGlkYXRpb25Db25maWcsXHJcbiAgUmVnRXhwVmFsaWRhdGlvbkNvbmZpZyxcclxufSBmcm9tIFwiLi4vaW50ZXJmYWNlcy92YWxpZGF0aW9uLWNvbmZpZy5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgdGVzdCB9IGZyb20gXCIuLi9oZWxwZXJzL3JlZ2V4cFwiO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHByZWZvcm1zIGEgUmVnRXggY2hlY2sgb24gdmFsdWUgaW4gdGhlXHJcbiAqIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sLlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdleHAgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlZ2V4cFZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzogUmVnRXhwVmFsaWRhdGlvbkNvbmZpZ1xyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPVxyXG4gICAgY29uZmlnLmVycm9yID8/IFwiVGhpcyBjb250cm9sIGRpZCBub3QgbWF0Y2ggYSBnaXZlbiByZWd1bGFyIGV4cHJlc3Npb24uXCI7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbY29uZmlnLmVycm9yTmFtZSA/PyBcInJlZ2V4cFwiXTogZXJyb3IgfTtcclxuXHJcbiAgcmV0dXJuICFjb250cm9sLnZhbHVlIHx8XHJcbiAgICB0ZXN0KGNvbmZpZy5yZWdFeHAsIGNvbnRyb2wudmFsdWUsIGNvbmZpZz8ubG9naWMgPz8gXCIhIVwiKVxyXG4gICAgPyBudWxsXHJcbiAgICA6IGVycm9ycztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCBjaGVja3MgaWYgdGhlIGRhdGUgaW4gdGhlIGdpdmVuXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGVhcmxpZXIgdGhlbiB0aGUgdmFsdWUgaW4gdGhlIHNwZWNpZmllZFxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cclxuICpcclxuICogQHBhcmFtIHtBYnN0cmFjdENvbnRyb2x9ICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBlcnJvciBhbmRcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBuYW1lIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZWFybGllclRoZW5WYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IERhdGVWYWxpZGF0aW9uQ29uZmlnXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9XHJcbiAgICBjb25maWcuZXJyb3IgPz9cclxuICAgIGBUaGlzIGNvbnRyb2wgbXVzdCBoYXZlIGEgdmFsdWUgZWFybGllciB0aGVuICR7Y29uZmlnLmRhdGV9LmA7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0ge1xyXG4gICAgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJlYXJsaWVyVGhlblwiXTogZXJyb3IsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGNvbXBhcmVEYXRlcyhjb250cm9sLnZhbHVlLCBjb25maWcuZGF0ZSwgXCI8XCIpID8gbnVsbCA6IGVycm9ycztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCBjaGVja3MgaWYgdGhlIGRhdGUgaW4gdGhlIGdpdmVuXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGdyZWF0ZXIgdGhlbiB0aGUgdmFsdWUgaW4gdGhlIHNwZWNpZmllZFxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cclxuICpcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbmFtZSBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgICAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGF0ZXJUaGVuVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiBEYXRlVmFsaWRhdGlvbkNvbmZpZ1xyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPVxyXG4gICAgY29uZmlnLmVycm9yID8/IGBUaGlzIGNvbnRyb2wgbXVzdCBoYXZlIGEgdmFsdWUgbGF0ZXIgdGhlbiAke2NvbmZpZy5kYXRlfS5gO1xyXG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHsgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJsYXRlclRoZW5cIl06IGVycm9yIH07XHJcblxyXG4gIHJldHVybiBjb21wYXJlRGF0ZXMoY29udHJvbC52YWx1ZSwgY29uZmlnLmRhdGUsIFwiPlwiKSA/IG51bGwgOiBlcnJvcnM7XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggY29tcGFyZXMgdGhlIGRhdGUgdmFsdWVzIG9mIHRoZSBnaXZlblxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBhbmQgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sLlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCBuYW1lIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBlcnJvciBhbmRcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBuYW1lIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY29tcGFyZVRvVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiBDb21wYXJlVmFsaWRhdGlvbkNvbmZpZ1xyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IGNvbnRyb2wucGFyZW50Py5nZXQoY29uZmlnLmZpZWxkTmFtZSk/LnZhbHVlO1xyXG4gIGlmIChkYXRlKSB7XHJcbiAgICBjb25zdCBlcnJvciA9IGNvbmZpZy5lcnJvciA/PyBgVmFsdWUgY29tcGFyaXNvbiB3aXRoICR7ZGF0ZX0gZmFpbGVkLmA7XHJcbiAgICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XHJcbiAgICAgIFtjb25maWcuZXJyb3JOYW1lID8/IFwiZGF0ZUNvbXBhcmlzb25cIl06IGVycm9yLFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGNvbnRyb2wudmFsdWUgJiYgY29tcGFyZURhdGVzKGNvbnRyb2wudmFsdWUsIGRhdGUsIGNvbmZpZy5jb21wYXJpc29uKVxyXG4gICAgICA/IG51bGxcclxuICAgICAgOiBlcnJvcnM7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgY29uZGl0aW9uIGlzIG1ldC5cclxuICpcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uYWwgZnVuY3Rpb24gb3IgYm9vbGVhbiB0byBjaGVja1xyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBvcHRpb25hbCBlcnJvciBhbmQgZXJyb3IgbmFtZSBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkV2hlblZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzogQ29uZGl0aW9uYWxWYWxpZGF0aW9uQ29uZmlnXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9IGNvbmZpZy5lcnJvciA/PyBcIlRoaXMgY29udHJvbCBoYXMgYSBjb25kaXRpb25hbCBzZXQgb24gaXQuXCI7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0ge1xyXG4gICAgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJyZXF1aXJlZFwiXTogZXJyb3IsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3V0Y29tZSA9XHJcbiAgICB0eXBlb2YgY29uZmlnLmNvbmRpdGlvbmFsID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgPyBjb25maWcuY29uZGl0aW9uYWwoKVxyXG4gICAgICA6IGNvbmZpZy5jb25kaXRpb25hbDtcclxuICByZXR1cm4gIWNvbnRyb2wudmFsdWUgJiYgb3V0Y29tZSA/IGVycm9ycyA6IG51bGw7XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBnaXZlblxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgbm8gdmFsdWUgYW5kIHNwZWNpZmllZFxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgaXQuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkIG5hbWUgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBsaW5rVG9WYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IExpbmtWYWxpZGF0aW9uQ29uZmlnXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9IGNvbmZpZy5lcnJvciA/PyBgVGhpcyBjb250cm9sIGhhcyBhIGxpbmsgdG8gJHtjb25maWcubGlua30uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwibGlua1RvXCJdOiBlcnJvciB9O1xyXG4gIGNvbnN0IGxpbmtlZFRvID0gY29udHJvbC5wYXJlbnQ/LmdldChjb25maWcubGluayk7XHJcblxyXG4gIHJldHVybiAhY29udHJvbD8udmFsdWUgJiYgISFsaW5rZWRUbz8udmFsdWUgPyBlcnJvcnMgOiBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW5cclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIGEgdmFsdWUgYW5kIHNwZWNpZmllZFxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBkb2VzIG5vdC5cclxuICpcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgbmFtZSB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbmFtZSBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGlua2VkVG9WYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IExpbmtWYWxpZGF0aW9uQ29uZmlnXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9IGNvbmZpZy5lcnJvciA/PyBgVGhpcyBjb250cm9sIGlzIGxpbmtlZCB0byAke2NvbmZpZy5saW5rfS5gO1xyXG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHsgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJsaW5rVG9cIl06IGVycm9yIH07XHJcbiAgY29uc3QgbGluayA9IGNvbnRyb2wucGFyZW50Py5nZXQoY29uZmlnLmxpbmspO1xyXG5cclxuICByZXR1cm4gISFjb250cm9sPy52YWx1ZSAmJiAhbGluaz8udmFsdWUgPyBlcnJvcnMgOiBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW5cclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIGEgdmFsdWUgdGhhdCBmYWlscyBhIGdpdmVuXHJcbiAqIGxlbmd0aCBjb21wYXJpc29uLlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGggdG8gY2hlY2ssIGNvbXBhcmlzb24gdG8gcHJlZm9ybSBcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxlbmd0aFZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzogTGVuZ3RoVmFsaWRhdGlvbkNvbmZpZ1xyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPVxyXG4gICAgY29uZmlnLmVycm9yID8/IGBUaGUgcmVxdWlyZWQgbGVuZ3RoIHNob3VsZCBiZSAke2NvbmZpZy5jb21wYXJpc29ufSAke2NvbmZpZy5sZW5ndGh9LmA7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbY29uZmlnLmVycm9yTmFtZSA/PyBcImxlbmd0aFwiXTogZXJyb3IgfTtcclxuXHJcbiAgcmV0dXJuICEhY29udHJvbD8udmFsdWUgJiZcclxuICAgIGNvbXBhcmUoY29udHJvbD8udmFsdWU/Lmxlbmd0aCwgY29uZmlnLmxlbmd0aCwgY29uZmlnLmNvbXBhcmlzb24gPz8gXCI9PT1cIilcclxuICAgID8gZXJyb3JzXHJcbiAgICA6IG51bGw7XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBnaXZlblxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCB2YWx1ZSBpcyBub3QgaW4gYSBnaXZlbiByYW5nZS5cclxuICpcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgdmFsdWUgdG8gY2hlY2sgYW5kIGVuZCB2YWx1ZSB0byBjaGVja1xyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzIHdlbGwgYXMgb3B0aW9uYWwgZXJyb3IgYW5kIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJhbmdlVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiBSYW5nZVZhbGlkYXRpb25Db25maWdcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGNvbmZpZy5lcnJvciA/PyBgVmFsdWUgbXVzdCBiZSBpbiB0aGUgcmFuZ2UgYmV0d2VlbiAke2NvbmZpZy5zdGFydH0gYW5kICR7Y29uZmlnLmVuZH0uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwicmFuZ2VcIl06IGVycm9yIH07XHJcblxyXG4gIHJldHVybiAhIWNvbnRyb2w/LnZhbHVlICYmXHJcbiAgICBjb21wYXJlKGNvbnRyb2wudmFsdWUubGVuZ3RoLCBjb25maWcuc3RhcnQsIFwiPj1cIikgJiZcclxuICAgIGNvbXBhcmUoY29udHJvbC52YWx1ZS5sZW5ndGgsIGNvbmZpZy5lbmQsICc8PScgKVxyXG4gICAgPyBlcnJvcnNcclxuICAgIDogbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhIHZhbHVlIHRoYXQgZmFpbHMgYSBnaXZlblxyXG4gKiB3b3JkIGNvdW50IGNvbXBhcmlzb24uXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQgY291bnQgdG8gY2hlY2ssIGNvbXBhcmlzb24gdG8gcHJlZm9ybSBcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHdvcmRDb3VudFZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzogQ291bnRWYWxpZGF0aW9uQ29uZmlnXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9XHJcbiAgICBjb25maWcuZXJyb3IgPz8gYFRoZSByZXF1aXJlZCB3b3JkIGNvdW50IHNob3VsZCBiZSAke2NvbmZpZy5jb21wYXJpc29ufSAke2NvbmZpZy5jb3VudH0uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwid29yZENvdW50XCJdOiBlcnJvciB9O1xyXG5cclxuICBjb25zdCB2YWx1ZUNvdW50ID0gY29udHJvbD8udmFsdWU/LnNwbGl0KCcgJykubGVuZ3RoO1xyXG4gIHJldHVybiBjb250cm9sPy52YWx1ZSAmJlxyXG4gICAgY29tcGFyZSh2YWx1ZUNvdW50LCBjb25maWcuY291bnQsIGNvbmZpZy5jb21wYXJpc29uID8/IFwiPT09XCIpXHJcbiAgICA/IG51bGxcclxuICAgIDogZXJyb3JzO1xyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBnaXZlblxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCB2YWx1ZSBpcyBub3QgaW4gYSBnaXZlbiB3b3JkIGNvdW50IHJhbmdlLlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCB2YWx1ZSB0byBjaGVjayBhbmQgZW5kIHZhbHVlIHRvIGNoZWNrXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXMgd2VsbCBhcyBvcHRpb25hbCBlcnJvciBhbmQgZXJyb3IgbmFtZSBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgd29yZENvdW50UmFuZ2VWYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IFJhbmdlVmFsaWRhdGlvbkNvbmZpZ1xyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPVxyXG4gICAgY29uZmlnLmVycm9yID8/IGBUaGUgd29yZCBjb3VudCBtdXN0IGJlIGluIHRoZSByYW5nZSBiZXR3ZWVuICR7Y29uZmlnLnN0YXJ0fSBhbmQgJHtjb25maWcuZW5kfS5gO1xyXG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHsgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJ3b3JkQ291bnRSYW5nZVwiXTogZXJyb3IgfTtcclxuICBjb25zdCB2YWx1ZUNvdW50ID0gY29udHJvbD8udmFsdWU/LnNwbGl0KCcgJykubGVuZ3RoO1xyXG5cclxuICByZXR1cm4gISFjb250cm9sPy52YWx1ZSAmJlxyXG4gICAgY29tcGFyZSh2YWx1ZUNvdW50LCBjb25maWcuc3RhcnQsIFwiPj1cIikgJiZcclxuICAgIGNvbXBhcmUodmFsdWVDb3VudCwgY29uZmlnLmVuZCwgJzw9JyApXHJcbiAgICA/IG51bGxcclxuICAgIDogZXJyb3JzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGFueVxyXG4gKiBvZiB0aGUgdmFsaWRhdGlvbnMgZnJvbSB0aGUgZ2l2ZW4gc2VxdWVuY2UgcmV0dXJuIGFuIGVycm9yLlxyXG4gKiBUaGUgc2VxdWVuY2Ugb3JkZXIgbWV0ZXJzIGFzIHRoZSBmaXJzdCBmYWlsIHdpbGwgYmUgcmV0dXJuZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBzZXF1ZW5jZSAgICAgICAgICAgICAgICAgICAgIC0gc2VxdWVuY2Ugb2YgY29uZmlncyB0aGF0IGNvbnNpc3RzIG9mXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbiBmdW5jdGlvbnMgYW5kIGNvbmZpZ3MgZm9yIHRob3NlIFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9ucy5cclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2VxdWVudGlhbFZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIHNlcXVlbmNlOiBTZXF1ZW5jZUNvbmZpZ1tdXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBsZXQgdmFsaWRhdGlvbkVycm9yITogVmFsaWRhdGlvbkVycm9ycztcclxuICBjb25zdCBoYXNFcnJvciA9IHNlcXVlbmNlLnNvbWUoKHZhbGlkYXRpb24pOiBib29sZWFuID0+IHtcclxuICAgIGNvbnN0IGVycm9yID0gdmFsaWRhdGlvbi52YWxpZGF0aW9uRnVuKGNvbnRyb2wsIHtcclxuICAgICAgLi4udmFsaWRhdGlvbi52YWxpZGF0aW9uRnVuQ29uZmlnLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdmFsaWRhdGlvbkVycm9yID0gZXJyb3I7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG4gIHJldHVybiBoYXNFcnJvciA/IHZhbGlkYXRpb25FcnJvciA6IG51bGw7XHJcbn07XHJcbiJdfQ==