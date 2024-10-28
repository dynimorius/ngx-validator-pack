/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { compareDates } from "../helpers/date";
import { compare } from "../helpers/numbers";
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
export const regexpTestValidation = (control, config) => {
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
export const regexpTestNotValidation = (control, config) => {
    const error = config.error ?? "This control matched a given regular expression.";
    const errors = {
        [config.errorName ?? "regexpNotValidator"]: error,
    };
    return !control.value || !config.regExp.test(control.value) ? null : errors;
};
export const regexpMatchValidation = (control, config) => {
    const error = config.error ?? "This control matched a given regular expression.";
    const errors = {
        [config.errorName ?? "regexpNotValidator"]: error,
    };
    return !control.value || !control.value.match(config.regExp) ? null : errors;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi92YWxpZGF0aW9ucy92YWxpZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTdDOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FDbEMsT0FBd0IsRUFDeEIsTUFJQyxFQUN3QixFQUFFO0lBQzNCLE1BQU0sS0FBSyxHQUNULE1BQU0sQ0FBQyxLQUFLLElBQUksd0RBQXdELENBQUM7SUFDM0UsTUFBTSxNQUFNLEdBQXFCO1FBQy9CLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxpQkFBaUIsQ0FBQyxFQUFFLEtBQUs7S0FDL0MsQ0FBQztJQUVGLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDN0UsQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRyxDQUNyQyxPQUF3QixFQUN4QixNQUlDLEVBQ3dCLEVBQUU7SUFDM0IsTUFBTSxLQUFLLEdBQ1QsTUFBTSxDQUFDLEtBQUssSUFBSSxrREFBa0QsQ0FBQztJQUNyRSxNQUFNLE1BQU0sR0FBcUI7UUFDL0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLG9CQUFvQixDQUFDLEVBQUUsS0FBSztLQUNsRCxDQUFDO0lBRUYsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQzlFLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLENBQ25DLE9BQXdCLEVBQ3hCLE1BSUMsRUFDd0IsRUFBRTtJQUMzQixNQUFNLEtBQUssR0FDVCxNQUFNLENBQUMsS0FBSyxJQUFJLGtEQUFrRCxDQUFDO0lBQ3JFLE1BQU0sTUFBTSxHQUFxQjtRQUMvQixDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksb0JBQW9CLENBQUMsRUFBRSxLQUFLO0tBQ2xELENBQUM7SUFFRixPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDL0UsQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNILE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLENBQ25DLE9BQXdCLEVBQ3hCLE1BSUMsRUFDd0IsRUFBRTtJQUMzQixNQUFNLEtBQUssR0FDVCxNQUFNLENBQUMsS0FBSztRQUNaLCtDQUErQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUM7SUFDaEUsTUFBTSxNQUFNLEdBQXFCO1FBQy9CLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxhQUFhLENBQUMsRUFBRSxLQUFLO0tBQzNDLENBQUM7SUFFRixPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3ZFLENBQUMsQ0FBQztBQUVGOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLENBQ2pDLE9BQXdCLEVBQ3hCLE1BSUMsRUFDd0IsRUFBRTtJQUMzQixNQUFNLEtBQUssR0FDVCxNQUFNLENBQUMsS0FBSyxJQUFJLDZDQUE2QyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUM7SUFDOUUsTUFBTSxNQUFNLEdBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBRTlFLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDdkUsQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxDQUNqQyxPQUF3QixFQUN4QixNQUtDLEVBQ3dCLEVBQUU7SUFDM0IsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssQ0FBQztJQUMxRCxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ1QsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSx5QkFBeUIsSUFBSSxVQUFVLENBQUM7UUFDdEUsTUFBTSxNQUFNLEdBQXFCO1lBQy9CLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFLEtBQUs7U0FDOUMsQ0FBQztRQUNGLE9BQU8sT0FBTyxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUMxRSxDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDYixDQUFDO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUcsQ0FDcEMsT0FBd0IsRUFDeEIsTUFJQyxFQUN3QixFQUFFO0lBQzNCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksMkNBQTJDLENBQUM7SUFDMUUsTUFBTSxNQUFNLEdBQXFCO1FBQy9CLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxjQUFjLENBQUMsRUFBRSxLQUFLO0tBQzVDLENBQUM7SUFFRixNQUFNLE9BQU8sR0FDWCxPQUFPLE1BQU0sQ0FBQyxXQUFXLEtBQUssVUFBVTtRQUN0QyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtRQUN0QixDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUN6QixPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ25ELENBQUMsQ0FBQztBQUVGOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLENBQzlCLE9BQXdCLEVBQ3hCLE1BSUMsRUFDd0IsRUFBRTtJQUMzQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLDhCQUE4QixNQUFNLENBQUMsSUFBSSxHQUFHLENBQUM7SUFDM0UsTUFBTSxNQUFNLEdBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQzNFLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVsRCxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDOUQsQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsQ0FDaEMsT0FBd0IsRUFDeEIsTUFJQyxFQUN3QixFQUFFO0lBQzNCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksNkJBQTZCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUMxRSxNQUFNLE1BQU0sR0FBcUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDM0UsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTlDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUMxRCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUM5QixPQUF3QixFQUN4QixNQUtDLEVBQ3dCLEVBQUU7SUFDM0IsTUFBTSxLQUFLLEdBQ1QsTUFBTSxDQUFDLEtBQUssSUFBSSxrQ0FBa0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO0lBQ3JFLE1BQU0sTUFBTSxHQUFxQixFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUUzRSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSztRQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQztRQUN4RSxDQUFDLENBQUMsTUFBTTtRQUNSLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDWCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxDQUNsQyxPQUF3QixFQUN4QixRQUEwQixFQUNELEVBQUU7SUFDM0IsSUFBSSxlQUFrQyxDQUFDO0lBQ3ZDLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQVcsRUFBRTtRQUNyRCxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUM5QyxHQUFHLFVBQVUsQ0FBQyxtQkFBbUI7U0FDbEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNWLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDeEIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUMzQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IGNvbXBhcmVEYXRlcyB9IGZyb20gXCIuLi9oZWxwZXJzL2RhdGVcIjtcclxuaW1wb3J0IHsgU2VxdWVuY2VDb25maWcgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9zZXF1ZW5jZS1jb25maWcuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IENvbXBhcmlzb25PcGVyYXRpb25zIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vaGVscGVycy9udW1iZXJzXCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcHJlZm9ybXMgYSBSZWdFeCBjaGVjayBvbiB2YWx1ZSBpbiB0aGVcclxuICogZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4cCB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbmFtZSBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVnZXhwVGVzdFZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzoge1xyXG4gICAgcmVnRXhwOiBSZWdFeHA7XHJcbiAgICBlcnJvcj86IHN0cmluZztcclxuICAgIGVycm9yTmFtZT86IHN0cmluZztcclxuICB9XHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9XHJcbiAgICBjb25maWcuZXJyb3IgPz8gXCJUaGlzIGNvbnRyb2wgZGlkIG5vdCBtYXRjaCBhIGdpdmVuIHJlZ3VsYXIgZXhwcmVzc2lvbi5cIjtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XHJcbiAgICBbY29uZmlnLmVycm9yTmFtZSA/PyBcInJlZ2V4cFZhbGlkYXRvclwiXTogZXJyb3IsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuICFjb250cm9sLnZhbHVlIHx8IGNvbmZpZy5yZWdFeHAudGVzdChjb250cm9sLnZhbHVlKSA/IG51bGwgOiBlcnJvcnM7XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcHJlZm9ybXMgYSBSZWdFeCBjaGVjayBvbiB2YWx1ZSBpbiB0aGVcclxuICogZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4cCB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbmFtZSBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgICAgICAgICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCByZWdleHBUZXN0Tm90VmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiB7XHJcbiAgICByZWdFeHA6IFJlZ0V4cDtcclxuICAgIGVycm9yPzogc3RyaW5nO1xyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nO1xyXG4gIH1cclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGNvbmZpZy5lcnJvciA/PyBcIlRoaXMgY29udHJvbCBtYXRjaGVkIGEgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uLlwiO1xyXG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgIFtjb25maWcuZXJyb3JOYW1lID8/IFwicmVnZXhwTm90VmFsaWRhdG9yXCJdOiBlcnJvcixcclxuICB9O1xyXG5cclxuICByZXR1cm4gIWNvbnRyb2wudmFsdWUgfHwgIWNvbmZpZy5yZWdFeHAudGVzdChjb250cm9sLnZhbHVlKSA/IG51bGwgOiBlcnJvcnM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVnZXhwTWF0Y2hWYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IHtcclxuICAgIHJlZ0V4cDogUmVnRXhwO1xyXG4gICAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmc7XHJcbiAgfVxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPVxyXG4gICAgY29uZmlnLmVycm9yID8/IFwiVGhpcyBjb250cm9sIG1hdGNoZWQgYSBnaXZlbiByZWd1bGFyIGV4cHJlc3Npb24uXCI7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0ge1xyXG4gICAgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJyZWdleHBOb3RWYWxpZGF0b3JcIl06IGVycm9yLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAhY29udHJvbC52YWx1ZSB8fCAhY29udHJvbC52YWx1ZS5tYXRjaChjb25maWcucmVnRXhwKSA/IG51bGwgOiBlcnJvcnM7XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGlmIHRoZSBkYXRlIGluIHRoZSBnaXZlblxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBlYXJsaWVyIHRoZW4gdGhlIHZhbHVlIGluIHRoZSBzcGVjaWZpZWRcclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbmFtZSBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVhcmxpZXJUaGVuVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiB7XHJcbiAgICBkYXRlOiBEYXRlO1xyXG4gICAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmc7XHJcbiAgfVxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPVxyXG4gICAgY29uZmlnLmVycm9yID8/XHJcbiAgICBgVGhpcyBjb250cm9sIG11c3QgaGF2ZSBhIHZhbHVlIGVhcmxpZXIgdGhlbiAke2NvbmZpZy5kYXRlfS5gO1xyXG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgIFtjb25maWcuZXJyb3JOYW1lID8/IFwiZWFybGllclRoZW5cIl06IGVycm9yLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBjb21wYXJlRGF0ZXMoY29udHJvbC52YWx1ZSwgY29uZmlnLmRhdGUsIFwiPFwiKSA/IG51bGwgOiBlcnJvcnM7XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGlmIHRoZSBkYXRlIGluIHRoZSBnaXZlblxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBncmVhdGVyIHRoZW4gdGhlIHZhbHVlIGluIHRoZSBzcGVjaWZpZWRcclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAgIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxhdGVyVGhlblZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzoge1xyXG4gICAgZGF0ZTogRGF0ZTtcclxuICAgIGVycm9yPzogc3RyaW5nO1xyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nO1xyXG4gIH1cclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGNvbmZpZy5lcnJvciA/PyBgVGhpcyBjb250cm9sIG11c3QgaGF2ZSBhIHZhbHVlIGxhdGVyIHRoZW4gJHtjb25maWcuZGF0ZX0uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwibGF0ZXJUaGVuXCJdOiBlcnJvciB9O1xyXG5cclxuICByZXR1cm4gY29tcGFyZURhdGVzKGNvbnRyb2wudmFsdWUsIGNvbmZpZy5kYXRlLCBcIj5cIikgPyBudWxsIDogZXJyb3JzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIGNvbXBhcmVzIHRoZSBkYXRlIHZhbHVlcyBvZiB0aGUgZ2l2ZW5cclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgYW5kIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cclxuICpcclxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgbmFtZSB0byBjaGVjayBhbmQgb3B0aW9uYWwgZXJyb3IgYW5kXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgbmFtZSBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbXBhcmVUb1ZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzoge1xyXG4gICAgZmllbGROYW1lOiBzdHJpbmc7XHJcbiAgICBjb21wYXJpc29uOiBDb21wYXJpc29uT3BlcmF0aW9ucztcclxuICAgIGVycm9yPzogc3RyaW5nO1xyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nO1xyXG4gIH1cclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBjb250cm9sLnBhcmVudD8uZ2V0KGNvbmZpZy5maWVsZE5hbWUpPy52YWx1ZTtcclxuICBpZiAoZGF0ZSkge1xyXG4gICAgY29uc3QgZXJyb3IgPSBjb25maWcuZXJyb3IgPz8gYFZhbHVlIGNvbXBhcmlzb24gd2l0aCAke2RhdGV9IGZhaWxlZC5gO1xyXG4gICAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0ge1xyXG4gICAgICBbY29uZmlnLmVycm9yTmFtZSA/PyBcImRhdGVDb21wYXJpc29uXCJdOiBlcnJvcixcclxuICAgIH07XHJcbiAgICByZXR1cm4gY29udHJvbC52YWx1ZSAmJiBjb21wYXJlRGF0ZXMoY29udHJvbC52YWx1ZSwgZGF0ZSwgY29uZmlnLmNvbXBhcmlzb24pXHJcbiAgICAgID8gbnVsbFxyXG4gICAgICA6IGVycm9ycztcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBjb25kaXRpb24gaXMgbWV0LlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25hbCBmdW5jdGlvbiBvciBib29sZWFuIHRvIGNoZWNrXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIG9wdGlvbmFsIGVycm9yIGFuZCBlcnJvciBuYW1lIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVxdWlyZWRXaGVuVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiB7XHJcbiAgICBjb25kaXRpb25hbDogKCgpID0+IGJvb2xlYW4pIHwgYm9vbGVhbjtcclxuICAgIGVycm9yPzogc3RyaW5nO1xyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nO1xyXG4gIH1cclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID0gY29uZmlnLmVycm9yID8/IFwiVGhpcyBjb250cm9sIGhhcyBhIGNvbmRpdGlvbmFsIHNldCBvbiBpdC5cIjtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XHJcbiAgICBbY29uZmlnLmVycm9yTmFtZSA/PyBcInJlcXVpcmVkV2hlblwiXTogZXJyb3IsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3V0Y29tZSA9XHJcbiAgICB0eXBlb2YgY29uZmlnLmNvbmRpdGlvbmFsID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgPyBjb25maWcuY29uZGl0aW9uYWwoKVxyXG4gICAgICA6IGNvbmZpZy5jb25kaXRpb25hbDtcclxuICByZXR1cm4gIWNvbnRyb2wudmFsdWUgJiYgb3V0Y29tZSA/IGVycm9ycyA6IG51bGw7XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBnaXZlblxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgbm8gdmFsdWUgYW5kIHNwZWNpZmllZFxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgaXQuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSBjb25maWcgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlciwgY29uc2lzdHMgb2YgYVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkIG5hbWUgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIGVycm9yIGFuZFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIG5hbWUgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBsaW5rVG9WYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IHtcclxuICAgIGxpbms6IHN0cmluZztcclxuICAgIGVycm9yPzogc3RyaW5nO1xyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nO1xyXG4gIH1cclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID0gY29uZmlnLmVycm9yID8/IGBUaGlzIGNvbnRyb2wgaGFzIGEgbGluayB0byAke2NvbmZpZy5saW5rfS5gO1xyXG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHsgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJsaW5rVG9cIl06IGVycm9yIH07XHJcbiAgY29uc3QgbGlua2VkVG8gPSBjb250cm9sLnBhcmVudD8uZ2V0KGNvbmZpZy5saW5rKTtcclxuXHJcbiAgcmV0dXJuICFjb250cm9sPy52YWx1ZSAmJiAhIWxpbmtlZFRvPy52YWx1ZSA/IGVycm9ycyA6IG51bGw7XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBnaXZlblxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgYSB2YWx1ZSBhbmQgc3BlY2lmaWVkXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGRvZXMgbm90LlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCBuYW1lIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBlcnJvciBhbmRcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBuYW1lIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGlua2VkVG9WYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IHtcclxuICAgIGxpbms6IHN0cmluZztcclxuICAgIGVycm9yPzogc3RyaW5nO1xyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nO1xyXG4gIH1cclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID0gY29uZmlnLmVycm9yID8/IGBUaGlzIGNvbnRyb2wgaXMgbGlua2VkIHRvICR7Y29uZmlnLmxpbmt9LmA7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbY29uZmlnLmVycm9yTmFtZSA/PyBcImxpbmtUb1wiXTogZXJyb3IgfTtcclxuICBjb25zdCBsaW5rID0gY29udHJvbC5wYXJlbnQ/LmdldChjb25maWcubGluayk7XHJcblxyXG4gIHJldHVybiAhIWNvbnRyb2w/LnZhbHVlICYmICFsaW5rPy52YWx1ZSA/IGVycm9ycyA6IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGVuZ3RoVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiB7XHJcbiAgICBsZW5ndGg6IG51bWJlcjtcclxuICAgIGNvbXBhcmlzb246IENvbXBhcmlzb25PcGVyYXRpb25zO1xyXG4gICAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmc7XHJcbiAgfVxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPVxyXG4gICAgY29uZmlnLmVycm9yID8/IGBUaGUgbWluaW11bSByZXF1aXJlZCBsZW5ndGggaXMgJHtjb25maWcubGVuZ3RofS5gO1xyXG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHsgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJsZW5ndGhcIl06IGVycm9yIH07XHJcblxyXG4gIHJldHVybiAhIWNvbnRyb2w/LnZhbHVlICYmXHJcbiAgICBjb21wYXJlKGNvbnRyb2w/LnZhbHVlPy5sZW5ndGgsIGNvbmZpZy5sZW5ndGgsIGNvbmZpZy5jb21wYXJpc29uID8/IFwiPFwiKVxyXG4gICAgPyBlcnJvcnNcclxuICAgIDogbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXF1ZW50aWFsVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgc2VxdWVuY2U6IFNlcXVlbmNlQ29uZmlnW11cclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGxldCB2YWxpZGF0aW9uRXJyb3IhOiBWYWxpZGF0aW9uRXJyb3JzO1xyXG4gIGNvbnN0IGhhc0Vycm9yID0gc2VxdWVuY2Uuc29tZSgodmFsaWRhdGlvbik6IGJvb2xlYW4gPT4ge1xyXG4gICAgY29uc3QgZXJyb3IgPSB2YWxpZGF0aW9uLnZhbGlkYXRpb25GdW4oY29udHJvbCwge1xyXG4gICAgICAuLi52YWxpZGF0aW9uLnZhbGlkYXRpb25GdW5Db25maWcsXHJcbiAgICB9KTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB2YWxpZGF0aW9uRXJyb3IgPSBlcnJvcjtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGhhc0Vycm9yID8gdmFsaWRhdGlvbkVycm9yIDogbnVsbDtcclxufTtcclxuIl19