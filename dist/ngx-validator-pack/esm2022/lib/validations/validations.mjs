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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi92YWxpZGF0aW9ucy92YWxpZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUM5QixPQUF3QixFQUN4QixNQUlDLEVBQ3dCLEVBQUU7SUFDM0IsTUFBTSxLQUFLLEdBQ1QsTUFBTSxDQUFDLEtBQUssSUFBSSx3REFBd0QsQ0FBQztJQUUzRSxPQUFPLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLENBQ2pDLE9BQXdCLEVBQ3hCLE1BSUMsRUFDd0IsRUFBRTtJQUMzQixNQUFNLEtBQUssR0FDVCxNQUFNLENBQUMsS0FBSyxJQUFJLGtEQUFrRCxDQUFDO0lBRXJFLE9BQU8sVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3hELENBQUMsQ0FBQztBQUVGOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxDQUNuQyxPQUF3QixFQUN4QixNQUlDLEVBQ3dCLEVBQUU7SUFDM0IsTUFBTSxLQUFLLEdBQ1QsTUFBTSxDQUFD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LENBQUM7SUFFM0UsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUs7UUFDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUM7UUFDeEUsQ0FBQyxDQUFDLE1BQU07UUFDUixDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ1gsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FDbEMsT0FBd0IsRUFDeEIsUUFBMEIsRUFDRCxFQUFFO0lBQzNCLElBQUksZUFBa0MsQ0FBQztJQUN2QyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFXLEVBQUU7UUFDckQsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDOUMsR0FBRyxVQUFVLENBQUMsbUJBQW1CO1NBQ2xDLENBQUMsQ0FBQztRQUNILElBQUksS0FBSyxFQUFFLENBQUM7WUFDVixlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDM0MsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBjb21wYXJlRGF0ZXMgfSBmcm9tIFwiLi4vaGVscGVycy9kYXRlXCI7XHJcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vaGVscGVycy9udW1iZXJzXCI7XHJcbmltcG9ydCB7IFNlcXVlbmNlQ29uZmlnIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvc2VxdWVuY2UtY29uZmlnLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBDb21wYXJpc29uT3BlcmF0aW9ucyB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyByZWdFeHBCYXNlIH0gZnJvbSBcIi4vcmVnZXhwLmJhc2VcIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCBwcmVmb3JtcyBhIFJlZ0V4IGNoZWNrIG9uIHZhbHVlIGluIHRoZVxyXG4gKiBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cclxuICpcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXhwIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBlcnJvciBhbmRcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBuYW1lIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCByZWdleHBWYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IHtcclxuICAgIHJlZ0V4cDogUmVnRXhwO1xyXG4gICAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmc7XHJcbiAgfVxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPVxyXG4gICAgY29uZmlnLmVycm9yID8/IFwiVGhpcyBjb250cm9sIGRpZCBub3QgbWF0Y2ggYSBnaXZlbiByZWd1bGFyIGV4cHJlc3Npb24uXCI7XHJcblxyXG4gIHJldHVybiByZWdFeHBCYXNlKGNvbnRyb2wsIHsgLi4uY29uZmlnLCBlcnJvciB9LCBcIiEhXCIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHByZWZvcm1zIGEgUmVnRXggY2hlY2sgb24gdmFsdWUgaW4gdGhlXHJcbiAqIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sLlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdleHAgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAgICAgICAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVnZXhwTm90VmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiB7XHJcbiAgICByZWdFeHA6IFJlZ0V4cDtcclxuICAgIGVycm9yPzogc3RyaW5nO1xyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nO1xyXG4gIH1cclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGNvbmZpZy5lcnJvciA/PyBcIlRoaXMgY29udHJvbCBtYXRjaGVkIGEgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uLlwiO1xyXG5cclxuICByZXR1cm4gcmVnRXhwQmFzZShjb250cm9sLCB7IC4uLmNvbmZpZywgZXJyb3IgfSwgXCIhXCIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBpZiB0aGUgZGF0ZSBpbiB0aGUgZ2l2ZW5cclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgZWFybGllciB0aGVuIHRoZSB2YWx1ZSBpbiB0aGUgc3BlY2lmaWVkXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Fic3RyYWN0Q29udHJvbH0gICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBlYXJsaWVyVGhlblZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzoge1xyXG4gICAgZGF0ZTogRGF0ZTtcclxuICAgIGVycm9yPzogc3RyaW5nO1xyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nO1xyXG4gIH1cclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGNvbmZpZy5lcnJvciA/P1xyXG4gICAgYFRoaXMgY29udHJvbCBtdXN0IGhhdmUgYSB2YWx1ZSBlYXJsaWVyIHRoZW4gJHtjb25maWcuZGF0ZX0uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XHJcbiAgICBbY29uZmlnLmVycm9yTmFtZSA/PyBcImVhcmxpZXJUaGVuXCJdOiBlcnJvcixcclxuICB9O1xyXG5cclxuICByZXR1cm4gY29tcGFyZURhdGVzKGNvbnRyb2wudmFsdWUsIGNvbmZpZy5kYXRlLCBcIjxcIikgPyBudWxsIDogZXJyb3JzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBpZiB0aGUgZGF0ZSBpbiB0aGUgZ2l2ZW5cclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgZ3JlYXRlciB0aGVuIHRoZSB2YWx1ZSBpbiB0aGUgc3BlY2lmaWVkXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sLlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBlcnJvciBhbmRcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBuYW1lIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBsYXRlclRoZW5WYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IHtcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBlcnJvcj86IHN0cmluZztcclxuICAgIGVycm9yTmFtZT86IHN0cmluZztcclxuICB9XHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9XHJcbiAgICBjb25maWcuZXJyb3IgPz8gYFRoaXMgY29udHJvbCBtdXN0IGhhdmUgYSB2YWx1ZSBsYXRlciB0aGVuICR7Y29uZmlnLmRhdGV9LmA7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbY29uZmlnLmVycm9yTmFtZSA/PyBcImxhdGVyVGhlblwiXTogZXJyb3IgfTtcclxuXHJcbiAgcmV0dXJuIGNvbXBhcmVEYXRlcyhjb250cm9sLnZhbHVlLCBjb25maWcuZGF0ZSwgXCI+XCIpID8gbnVsbCA6IGVycm9ycztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCBjb21wYXJlcyB0aGUgZGF0ZSB2YWx1ZXMgb2YgdGhlIGdpdmVuXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGFuZCBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkIG5hbWUgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBjb21wYXJlVG9WYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IHtcclxuICAgIGZpZWxkTmFtZTogc3RyaW5nO1xyXG4gICAgY29tcGFyaXNvbjogQ29tcGFyaXNvbk9wZXJhdGlvbnM7XHJcbiAgICBlcnJvcj86IHN0cmluZztcclxuICAgIGVycm9yTmFtZT86IHN0cmluZztcclxuICB9XHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBkYXRlID0gY29udHJvbC5wYXJlbnQ/LmdldChjb25maWcuZmllbGROYW1lKT8udmFsdWU7XHJcbiAgaWYgKGRhdGUpIHtcclxuICAgIGNvbnN0IGVycm9yID0gY29uZmlnLmVycm9yID8/IGBWYWx1ZSBjb21wYXJpc29uIHdpdGggJHtkYXRlfSBmYWlsZWQuYDtcclxuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgICAgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJkYXRlQ29tcGFyaXNvblwiXTogZXJyb3IsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNvbnRyb2wudmFsdWUgJiYgY29tcGFyZURhdGVzKGNvbnRyb2wudmFsdWUsIGRhdGUsIGNvbmZpZy5jb21wYXJpc29uKVxyXG4gICAgICA/IG51bGxcclxuICAgICAgOiBlcnJvcnM7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgY29uZGl0aW9uIGlzIG1ldC5cclxuICpcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uYWwgZnVuY3Rpb24gb3IgYm9vbGVhbiB0byBjaGVja1xyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBvcHRpb25hbCBlcnJvciBhbmQgZXJyb3IgbmFtZSBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkV2hlblZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzoge1xyXG4gICAgY29uZGl0aW9uYWw6ICgoKSA9PiBib29sZWFuKSB8IGJvb2xlYW47XHJcbiAgICBlcnJvcj86IHN0cmluZztcclxuICAgIGVycm9yTmFtZT86IHN0cmluZztcclxuICB9XHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9IGNvbmZpZy5lcnJvciA/PyBcIlRoaXMgY29udHJvbCBoYXMgYSBjb25kaXRpb25hbCBzZXQgb24gaXQuXCI7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0ge1xyXG4gICAgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJyZXF1aXJlZFdoZW5cIl06IGVycm9yLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG91dGNvbWUgPVxyXG4gICAgdHlwZW9mIGNvbmZpZy5jb25kaXRpb25hbCA9PT0gXCJmdW5jdGlvblwiXHJcbiAgICAgID8gY29uZmlnLmNvbmRpdGlvbmFsKClcclxuICAgICAgOiBjb25maWcuY29uZGl0aW9uYWw7XHJcbiAgcmV0dXJuICFjb250cm9sLnZhbHVlICYmIG91dGNvbWUgPyBlcnJvcnMgOiBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW5cclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIG5vIHZhbHVlIGFuZCBzcGVjaWZpZWRcclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIGl0LlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCBuYW1lIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBlcnJvciBhbmRcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBuYW1lIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGlua1RvVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiB7XHJcbiAgICBsaW5rOiBzdHJpbmc7XHJcbiAgICBlcnJvcj86IHN0cmluZztcclxuICAgIGVycm9yTmFtZT86IHN0cmluZztcclxuICB9XHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9IGNvbmZpZy5lcnJvciA/PyBgVGhpcyBjb250cm9sIGhhcyBhIGxpbmsgdG8gJHtjb25maWcubGlua30uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwibGlua1RvXCJdOiBlcnJvciB9O1xyXG4gIGNvbnN0IGxpbmtlZFRvID0gY29udHJvbC5wYXJlbnQ/LmdldChjb25maWcubGluayk7XHJcblxyXG4gIHJldHVybiAhY29udHJvbD8udmFsdWUgJiYgISFsaW5rZWRUbz8udmFsdWUgPyBlcnJvcnMgOiBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW5cclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIGEgdmFsdWUgYW5kIHNwZWNpZmllZFxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBkb2VzIG5vdC5cclxuICpcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgbmFtZSB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbmFtZSBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxpbmtlZFRvVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiB7XHJcbiAgICBsaW5rOiBzdHJpbmc7XHJcbiAgICBlcnJvcj86IHN0cmluZztcclxuICAgIGVycm9yTmFtZT86IHN0cmluZztcclxuICB9XHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9IGNvbmZpZy5lcnJvciA/PyBgVGhpcyBjb250cm9sIGlzIGxpbmtlZCB0byAke2NvbmZpZy5saW5rfS5gO1xyXG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHsgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJsaW5rVG9cIl06IGVycm9yIH07XHJcbiAgY29uc3QgbGluayA9IGNvbnRyb2wucGFyZW50Py5nZXQoY29uZmlnLmxpbmspO1xyXG5cclxuICByZXR1cm4gISFjb250cm9sPy52YWx1ZSAmJiAhbGluaz8udmFsdWUgPyBlcnJvcnMgOiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxlbmd0aFZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzoge1xyXG4gICAgbGVuZ3RoOiBudW1iZXI7XHJcbiAgICBjb21wYXJpc29uOiBDb21wYXJpc29uT3BlcmF0aW9ucztcclxuICAgIGVycm9yPzogc3RyaW5nO1xyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nO1xyXG4gIH1cclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGNvbmZpZy5lcnJvciA/PyBgVGhlIG1pbmltdW0gcmVxdWlyZWQgbGVuZ3RoIGlzICR7Y29uZmlnLmxlbmd0aH0uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwibGVuZ3RoXCJdOiBlcnJvciB9O1xyXG5cclxuICByZXR1cm4gISFjb250cm9sPy52YWx1ZSAmJlxyXG4gICAgY29tcGFyZShjb250cm9sPy52YWx1ZT8ubGVuZ3RoLCBjb25maWcubGVuZ3RoLCBjb25maWcuY29tcGFyaXNvbiA/PyBcIjxcIilcclxuICAgID8gZXJyb3JzXHJcbiAgICA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VxdWVudGlhbFZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIHNlcXVlbmNlOiBTZXF1ZW5jZUNvbmZpZ1tdXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBsZXQgdmFsaWRhdGlvbkVycm9yITogVmFsaWRhdGlvbkVycm9ycztcclxuICBjb25zdCBoYXNFcnJvciA9IHNlcXVlbmNlLnNvbWUoKHZhbGlkYXRpb24pOiBib29sZWFuID0+IHtcclxuICAgIGNvbnN0IGVycm9yID0gdmFsaWRhdGlvbi52YWxpZGF0aW9uRnVuKGNvbnRyb2wsIHtcclxuICAgICAgLi4udmFsaWRhdGlvbi52YWxpZGF0aW9uRnVuQ29uZmlnLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdmFsaWRhdGlvbkVycm9yID0gZXJyb3I7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG4gIHJldHVybiBoYXNFcnJvciA/IHZhbGlkYXRpb25FcnJvciA6IG51bGw7XHJcbn07XHJcbiJdfQ==