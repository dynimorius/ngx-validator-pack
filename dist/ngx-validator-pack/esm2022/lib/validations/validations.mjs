/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { compareDates } from "../helpers/date";
import { compare } from "../helpers/numbers";
import { regExpBase } from "./regexp.base";
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
    return regExpBase(control, { ...config, error }, "!!");
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
    return regExpBase(control, { ...config, error }, "!");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi92YWxpZGF0aW9ucy92YWxpZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0M7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUM5QixPQUF3QixFQUN4QixNQUE4QixFQUNMLEVBQUU7SUFDM0IsTUFBTSxLQUFLLEdBQ1QsTUFBTSxDQUFDLEtBQUssSUFBSSx3REFBd0QsQ0FBQztJQUUzRSxPQUFPLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLENBQ2pDLE9BQXdCLEVBQ3hCLE1BQThCLEVBQ0wsRUFBRTtJQUMzQixNQUFNLEtBQUssR0FDVCxNQUFNLENBQUMsS0FBSyxJQUFJLGtEQUFrRCxDQUFDO0lBRXJFLE9BQU8sVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3hELENBQUMsQ0FBQztBQUVGOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxDQUNuQyxPQUF3QixFQUN4QixNQUE0QixFQUNILEVBQUU7SUFDM0IsTUFBTSxLQUFLLEdBQ1QsTUFBTSxDQUFD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LENBQUM7SUFFM0UsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUs7UUFDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUM7UUFDeEUsQ0FBQyxDQUFDLE1BQU07UUFDUixDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ1gsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FDbEMsT0FBd0IsRUFDeEIsUUFBMEIsRUFDRCxFQUFFO0lBQzNCLElBQUksZUFBa0MsQ0FBQztJQUN2QyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFXLEVBQUU7UUFDckQsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDOUMsR0FBRyxVQUFVLENBQUMsbUJBQW1CO1NBQ2xDLENBQUMsQ0FBQztRQUNILElBQUksS0FBSyxFQUFFLENBQUM7WUFDVixlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDM0MsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBjb21wYXJlRGF0ZXMgfSBmcm9tIFwiLi4vaGVscGVycy9kYXRlXCI7XHJcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vaGVscGVycy9udW1iZXJzXCI7XHJcbmltcG9ydCB7IFNlcXVlbmNlQ29uZmlnIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvc2VxdWVuY2UtY29uZmlnLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyByZWdFeHBCYXNlIH0gZnJvbSBcIi4vcmVnZXhwLmJhc2VcIjtcclxuaW1wb3J0IHsgQ29tcGFyZVZhbGlkYXRpb25Db25maWcsIENvbmRpdGlvbmFsVmFsaWRhdGlvbkNvbmZpZywgRGF0ZVZhbGlkYXRpb25Db25maWcsIExlbmd0aFZhbGlkYXRpb25Db25maWcsIExpbmtWYWxpZGF0aW9uQ29uZmlnLCBSZWdFeHBWYWxpZGF0aW9uQ29uZmlnIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdmFsaWRhdGlvbi1jb25maWcuaW50ZXJmYWNlXCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcHJlZm9ybXMgYSBSZWdFeCBjaGVjayBvbiB2YWx1ZSBpbiB0aGVcclxuICogZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4cCB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbmFtZSBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVnZXhwVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiBSZWdFeHBWYWxpZGF0aW9uQ29uZmlnXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9XHJcbiAgICBjb25maWcuZXJyb3IgPz8gXCJUaGlzIGNvbnRyb2wgZGlkIG5vdCBtYXRjaCBhIGdpdmVuIHJlZ3VsYXIgZXhwcmVzc2lvbi5cIjtcclxuXHJcbiAgcmV0dXJuIHJlZ0V4cEJhc2UoY29udHJvbCwgeyAuLi5jb25maWcsIGVycm9yIH0sIFwiISFcIik7XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcHJlZm9ybXMgYSBSZWdFeCBjaGVjayBvbiB2YWx1ZSBpbiB0aGVcclxuICogZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4cCB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbmFtZSBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgICAgICAgICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCByZWdleHBOb3RWYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IFJlZ0V4cFZhbGlkYXRpb25Db25maWdcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGNvbmZpZy5lcnJvciA/PyBcIlRoaXMgY29udHJvbCBtYXRjaGVkIGEgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uLlwiO1xyXG5cclxuICByZXR1cm4gcmVnRXhwQmFzZShjb250cm9sLCB7IC4uLmNvbmZpZywgZXJyb3IgfSwgXCIhXCIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBpZiB0aGUgZGF0ZSBpbiB0aGUgZ2l2ZW5cclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgZWFybGllciB0aGVuIHRoZSB2YWx1ZSBpbiB0aGUgc3BlY2lmaWVkXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Fic3RyYWN0Q29udHJvbH0gICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBlYXJsaWVyVGhlblZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzogRGF0ZVZhbGlkYXRpb25Db25maWdcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGNvbmZpZy5lcnJvciA/P1xyXG4gICAgYFRoaXMgY29udHJvbCBtdXN0IGhhdmUgYSB2YWx1ZSBlYXJsaWVyIHRoZW4gJHtjb25maWcuZGF0ZX0uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XHJcbiAgICBbY29uZmlnLmVycm9yTmFtZSA/PyBcImVhcmxpZXJUaGVuXCJdOiBlcnJvcixcclxuICB9O1xyXG5cclxuICByZXR1cm4gY29tcGFyZURhdGVzKGNvbnRyb2wudmFsdWUsIGNvbmZpZy5kYXRlLCBcIjxcIikgPyBudWxsIDogZXJyb3JzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBpZiB0aGUgZGF0ZSBpbiB0aGUgZ2l2ZW5cclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgZ3JlYXRlciB0aGVuIHRoZSB2YWx1ZSBpbiB0aGUgc3BlY2lmaWVkXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sLlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBlcnJvciBhbmRcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBuYW1lIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBsYXRlclRoZW5WYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IERhdGVWYWxpZGF0aW9uQ29uZmlnXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9XHJcbiAgICBjb25maWcuZXJyb3IgPz8gYFRoaXMgY29udHJvbCBtdXN0IGhhdmUgYSB2YWx1ZSBsYXRlciB0aGVuICR7Y29uZmlnLmRhdGV9LmA7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbY29uZmlnLmVycm9yTmFtZSA/PyBcImxhdGVyVGhlblwiXTogZXJyb3IgfTtcclxuXHJcbiAgcmV0dXJuIGNvbXBhcmVEYXRlcyhjb250cm9sLnZhbHVlLCBjb25maWcuZGF0ZSwgXCI+XCIpID8gbnVsbCA6IGVycm9ycztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCBjb21wYXJlcyB0aGUgZGF0ZSB2YWx1ZXMgb2YgdGhlIGdpdmVuXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGFuZCBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkIG5hbWUgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBjb21wYXJlVG9WYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IENvbXBhcmVWYWxpZGF0aW9uQ29uZmlnXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBkYXRlID0gY29udHJvbC5wYXJlbnQ/LmdldChjb25maWcuZmllbGROYW1lKT8udmFsdWU7XHJcbiAgaWYgKGRhdGUpIHtcclxuICAgIGNvbnN0IGVycm9yID0gY29uZmlnLmVycm9yID8/IGBWYWx1ZSBjb21wYXJpc29uIHdpdGggJHtkYXRlfSBmYWlsZWQuYDtcclxuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgICAgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJkYXRlQ29tcGFyaXNvblwiXTogZXJyb3IsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNvbnRyb2wudmFsdWUgJiYgY29tcGFyZURhdGVzKGNvbnRyb2wudmFsdWUsIGRhdGUsIGNvbmZpZy5jb21wYXJpc29uKVxyXG4gICAgICA/IG51bGxcclxuICAgICAgOiBlcnJvcnM7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgY29uZGl0aW9uIGlzIG1ldC5cclxuICpcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uYWwgZnVuY3Rpb24gb3IgYm9vbGVhbiB0byBjaGVja1xyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBvcHRpb25hbCBlcnJvciBhbmQgZXJyb3IgbmFtZSBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkV2hlblZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzogQ29uZGl0aW9uYWxWYWxpZGF0aW9uQ29uZmlnXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9IGNvbmZpZy5lcnJvciA/PyBcIlRoaXMgY29udHJvbCBoYXMgYSBjb25kaXRpb25hbCBzZXQgb24gaXQuXCI7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0ge1xyXG4gICAgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJyZXF1aXJlZFdoZW5cIl06IGVycm9yLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG91dGNvbWUgPVxyXG4gICAgdHlwZW9mIGNvbmZpZy5jb25kaXRpb25hbCA9PT0gXCJmdW5jdGlvblwiXHJcbiAgICAgID8gY29uZmlnLmNvbmRpdGlvbmFsKClcclxuICAgICAgOiBjb25maWcuY29uZGl0aW9uYWw7XHJcbiAgcmV0dXJuICFjb250cm9sLnZhbHVlICYmIG91dGNvbWUgPyBlcnJvcnMgOiBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW5cclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIG5vIHZhbHVlIGFuZCBzcGVjaWZpZWRcclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIGl0LlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCBuYW1lIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBlcnJvciBhbmRcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBuYW1lIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGlua1RvVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiBMaW5rVmFsaWRhdGlvbkNvbmZpZ1xyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPSBjb25maWcuZXJyb3IgPz8gYFRoaXMgY29udHJvbCBoYXMgYSBsaW5rIHRvICR7Y29uZmlnLmxpbmt9LmA7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbY29uZmlnLmVycm9yTmFtZSA/PyBcImxpbmtUb1wiXTogZXJyb3IgfTtcclxuICBjb25zdCBsaW5rZWRUbyA9IGNvbnRyb2wucGFyZW50Py5nZXQoY29uZmlnLmxpbmspO1xyXG5cclxuICByZXR1cm4gIWNvbnRyb2w/LnZhbHVlICYmICEhbGlua2VkVG8/LnZhbHVlID8gZXJyb3JzIDogbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgdmFsaWRhdGlvbiBlcnJvciBpZiBhIGdpdmVuXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhIHZhbHVlIGFuZCBzcGVjaWZpZWRcclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgZG9lcyBub3QuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkIG5hbWUgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBsaW5rZWRUb1ZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzogTGlua1ZhbGlkYXRpb25Db25maWdcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID0gY29uZmlnLmVycm9yID8/IGBUaGlzIGNvbnRyb2wgaXMgbGlua2VkIHRvICR7Y29uZmlnLmxpbmt9LmA7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbY29uZmlnLmVycm9yTmFtZSA/PyBcImxpbmtUb1wiXTogZXJyb3IgfTtcclxuICBjb25zdCBsaW5rID0gY29udHJvbC5wYXJlbnQ/LmdldChjb25maWcubGluayk7XHJcblxyXG4gIHJldHVybiAhIWNvbnRyb2w/LnZhbHVlICYmICFsaW5rPy52YWx1ZSA/IGVycm9ycyA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGVuZ3RoVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiBMZW5ndGhWYWxpZGF0aW9uQ29uZmlnXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9XHJcbiAgICBjb25maWcuZXJyb3IgPz8gYFRoZSBtaW5pbXVtIHJlcXVpcmVkIGxlbmd0aCBpcyAke2NvbmZpZy5sZW5ndGh9LmA7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbY29uZmlnLmVycm9yTmFtZSA/PyBcImxlbmd0aFwiXTogZXJyb3IgfTtcclxuXHJcbiAgcmV0dXJuICEhY29udHJvbD8udmFsdWUgJiZcclxuICAgIGNvbXBhcmUoY29udHJvbD8udmFsdWU/Lmxlbmd0aCwgY29uZmlnLmxlbmd0aCwgY29uZmlnLmNvbXBhcmlzb24gPz8gXCI8XCIpXHJcbiAgICA/IGVycm9yc1xyXG4gICAgOiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcXVlbnRpYWxWYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBzZXF1ZW5jZTogU2VxdWVuY2VDb25maWdbXVxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgbGV0IHZhbGlkYXRpb25FcnJvciE6IFZhbGlkYXRpb25FcnJvcnM7XHJcbiAgY29uc3QgaGFzRXJyb3IgPSBzZXF1ZW5jZS5zb21lKCh2YWxpZGF0aW9uKTogYm9vbGVhbiA9PiB7XHJcbiAgICBjb25zdCBlcnJvciA9IHZhbGlkYXRpb24udmFsaWRhdGlvbkZ1bihjb250cm9sLCB7XHJcbiAgICAgIC4uLnZhbGlkYXRpb24udmFsaWRhdGlvbkZ1bkNvbmZpZyxcclxuICAgIH0pO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHZhbGlkYXRpb25FcnJvciA9IGVycm9yO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuICByZXR1cm4gaGFzRXJyb3IgPyB2YWxpZGF0aW9uRXJyb3IgOiBudWxsO1xyXG59O1xyXG4iXX0=