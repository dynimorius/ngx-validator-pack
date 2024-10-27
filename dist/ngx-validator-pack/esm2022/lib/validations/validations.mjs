/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { compareDates, prepareToCompare, } from "../helpers/date";
/**
 * @description
 * A validation function which preforms a RegEx check on value in the
 * given FromControl / AbstractControl.
 *
 * @param {AbstractControl}                    - form control
 * @param {
 *         regExp: RegExp,
 *         error?: string,
 *         errorName?: string
 *        }                                    - config parameter
 * @returns {ValidationErrors | null}          - Validation error
 */
export const regexpValidation = (control, config) => {
    const error = config.error ?? "This control did not match a given regular expression.";
    const errors = {
        [config.errorName ?? "regexpValidator"]: error,
    };
    return !control.value || config.regExp.test(control.value) ? null : errors;
};
/**
 * @description
 * A validation function which preforms a RegEx check on value in the
 * given FromControl / AbstractControl.
 *
 * @param {AbstractControl}                    - form control
 * @param {
*         regExp: RegExp,
*         error?: string,
*         errorName?: string
*        }                                    - config parameter
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
 * @description
 * A validation function which checks if the date in the given
 * FromControl / AbstractControl is earlier then the value in the specified
 * FromControl / AbstractControl.
 *
 * @param {AbstractControl}                    - form control
 * @param {
*         regExp: RegExp,
*         error?: string,
*         errorName?: string
*        }                                    - config parameter
* @returns {ValidationErrors | null}          - Validation error
*/
export const earlierThenValidation = (control, config) => {
    const error = config.error ??
        `This control must have a value earlier then ${config.date}.`;
    const errors = {
        [config.errorName ?? "earlierThen"]: error,
    };
    return prepareToCompare(control?.value) < prepareToCompare(config.date)
        ? null
        : errors;
};
/**
 * @description
 * A validation function which checks if the date in the given
 * FromControl / AbstractControl is greater then the value in the specified
 * FromControl / AbstractControl.
 *
 * @param {AbstractControl}                    - form control
 * @param {
*         regExp: RegExp,
*         error?: string,
*         errorName?: string
*        }                                    - config parameter
* @returns {ValidationErrors | null}          - Validation error
*/
export const laterThenValidation = (control, config) => {
    const error = config.error ?? `This control must have a value later then ${config.date}.`;
    const errors = { [config.errorName ?? "laterThen"]: error };
    return prepareToCompare(control?.value) > prepareToCompare(config.date)
        ? null
        : errors;
};
/**
 * @description
 * A validation function which compares the date values of the given
 * FromControl / AbstractControl and specified FromControl / AbstractControl.
 *
 * @param {AbstractControl}                    - form control
 * @param {
*         fieldName: string,
*         error?: string,
*         errorName?: string
*        }                                    - config parameter
* @returns {ValidationErrors | null}          - Validation error
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
 * @description
 * A validation function which returns a validation error if a condition is met.
 *
 * @param {AbstractControl}                    - form control
 * @param {
*         conditional: (() => boolean) | boolean,
*         error?: string,
*         errorName?: string
*        }                                    - config parameter
* @returns {ValidationErrors | null}          - Validation error
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
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl has no value and specified
 * FromControl / AbstractControl has it.
 *
 * @param {AbstractControl}                    - form control
 * @param {
*         link: string,
*         error?: string,
*         errorName?: string
*        }                                    - config parameter
* @returns {ValidationErrors | null}          - Validation error
*/
export const linkToValidation = (control, config) => {
    const error = config.error ?? `This control has a link to ${config.link}.`;
    const errors = { [config.errorName ?? "linkTo"]: error };
    const linkedTo = control.parent?.get(config.link);
    return !control?.value && !!linkedTo?.value ? errors : null;
};
/**
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl has a value and specified
 * FromControl / AbstractControl does not.
 *
 * @param {AbstractControl}                    - form control
 * @param {
*         link: string,
*         error?: string,
*         errorName?: string
*        }                                    - config parameter
* @returns {ValidationErrors | null}          - Validation error
*/
export const linkedToValidation = (control, config) => {
    const error = config.error ?? `This control is linked to ${config.link}.`;
    const errors = { [config.errorName ?? "linkTo"]: error };
    const link = control.parent?.get(config.link);
    return !!control?.value && !link?.value ? errors : null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi92YWxpZGF0aW9ucy92YWxpZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBRUwsWUFBWSxFQUNaLGdCQUFnQixHQUNqQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLENBQzlCLE9BQXdCLEVBQ3hCLE1BSUMsRUFDd0IsRUFBRTtJQUMzQixNQUFNLEtBQUssR0FDVCxNQUFNLENBQUMsS0FBSyxJQUFJLHdEQUF3RCxDQUFDO0lBQzNFLE1BQU0sTUFBTSxHQUFxQjtRQUMvQixDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksaUJBQWlCLENBQUMsRUFBRSxLQUFLO0tBQy9DLENBQUM7SUFFRixPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQzdFLENBQUMsQ0FBQztBQUVGOzs7Ozs7Ozs7Ozs7RUFZRTtBQUNGLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLENBQ2pDLE9BQXdCLEVBQ3hCLE1BSUMsRUFDd0IsRUFBRTtJQUMzQixNQUFNLEtBQUssR0FDVCxNQUFNLENBQUMsS0FBSyxJQUFJLGtEQUFrRCxDQUFDO0lBQ3JFLE1BQU0sTUFBTSxHQUFxQjtRQUMvQixDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksb0JBQW9CLENBQUMsRUFBRSxLQUFLO0tBQ2xELENBQUM7SUFFRixPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFB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QzFELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cclxuICovXHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtcclxuICBDb21wYXJpc29uT3BlcmF0aW9ucyxcclxuICBjb21wYXJlRGF0ZXMsXHJcbiAgcHJlcGFyZVRvQ29tcGFyZSxcclxufSBmcm9tIFwiLi4vaGVscGVycy9kYXRlXCI7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCBwcmVmb3JtcyBhIFJlZ0V4IGNoZWNrIG9uIHZhbHVlIGluIHRoZSBcclxuICogZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIHtcclxuICogICAgICAgICByZWdFeHA6IFJlZ0V4cCwgXHJcbiAqICAgICAgICAgZXJyb3I/OiBzdHJpbmcsXHJcbiAqICAgICAgICAgZXJyb3JOYW1lPzogc3RyaW5nXHJcbiAqICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAgICAgICAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVnZXhwVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiB7XHJcbiAgICByZWdFeHA6IFJlZ0V4cDtcclxuICAgIGVycm9yPzogc3RyaW5nO1xyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nO1xyXG4gIH1cclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGNvbmZpZy5lcnJvciA/PyBcIlRoaXMgY29udHJvbCBkaWQgbm90IG1hdGNoIGEgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uLlwiO1xyXG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgIFtjb25maWcuZXJyb3JOYW1lID8/IFwicmVnZXhwVmFsaWRhdG9yXCJdOiBlcnJvcixcclxuICB9O1xyXG5cclxuICByZXR1cm4gIWNvbnRyb2wudmFsdWUgfHwgY29uZmlnLnJlZ0V4cC50ZXN0KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IGVycm9ycztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHByZWZvcm1zIGEgUmVnRXggY2hlY2sgb24gdmFsdWUgaW4gdGhlIFxyXG4gKiBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbC5cclxuICpcclxuICogQHBhcmFtIHtBYnN0cmFjdENvbnRyb2x9ICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0ge1xyXG4qICAgICAgICAgcmVnRXhwOiBSZWdFeHAsIFxyXG4qICAgICAgICAgZXJyb3I/OiBzdHJpbmcsXHJcbiogICAgICAgICBlcnJvck5hbWU/OiBzdHJpbmdcclxuKiAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlclxyXG4qIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAgICAgICAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiovXHJcbmV4cG9ydCBjb25zdCByZWdleHBOb3RWYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IHtcclxuICAgIHJlZ0V4cDogUmVnRXhwO1xyXG4gICAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmc7XHJcbiAgfVxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPVxyXG4gICAgY29uZmlnLmVycm9yID8/IFwiVGhpcyBjb250cm9sIG1hdGNoZWQgYSBnaXZlbiByZWd1bGFyIGV4cHJlc3Npb24uXCI7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0ge1xyXG4gICAgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJyZWdleHBOb3RWYWxpZGF0b3JcIl06IGVycm9yLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAhY29udHJvbC52YWx1ZSB8fCAhY29uZmlnLnJlZ0V4cC50ZXN0KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IGVycm9ycztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBpZiB0aGUgZGF0ZSBpbiB0aGUgZ2l2ZW4gXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGVhcmxpZXIgdGhlbiB0aGUgdmFsdWUgaW4gdGhlIHNwZWNpZmllZCBcclxuICogRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIHtcclxuKiAgICAgICAgIHJlZ0V4cDogUmVnRXhwLCBcclxuKiAgICAgICAgIGVycm9yPzogc3RyaW5nLFxyXG4qICAgICAgICAgZXJyb3JOYW1lPzogc3RyaW5nXHJcbiogICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXJcclxuKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgICAgICAgIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4qL1xyXG5leHBvcnQgY29uc3QgZWFybGllclRoZW5WYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IHtcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBlcnJvcj86IHN0cmluZztcclxuICAgIGVycm9yTmFtZT86IHN0cmluZztcclxuICB9XHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCBlcnJvciA9XHJcbiAgICBjb25maWcuZXJyb3IgPz9cclxuICAgIGBUaGlzIGNvbnRyb2wgbXVzdCBoYXZlIGEgdmFsdWUgZWFybGllciB0aGVuICR7Y29uZmlnLmRhdGV9LmA7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0ge1xyXG4gICAgW2NvbmZpZy5lcnJvck5hbWUgPz8gXCJlYXJsaWVyVGhlblwiXTogZXJyb3IsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHByZXBhcmVUb0NvbXBhcmUoY29udHJvbD8udmFsdWUpIDwgcHJlcGFyZVRvQ29tcGFyZShjb25maWcuZGF0ZSlcclxuICAgID8gbnVsbFxyXG4gICAgOiBlcnJvcnM7XHJcbn07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCBjaGVja3MgaWYgdGhlIGRhdGUgaW4gdGhlIGdpdmVuIFxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBncmVhdGVyIHRoZW4gdGhlIHZhbHVlIGluIHRoZSBzcGVjaWZpZWQgXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Fic3RyYWN0Q29udHJvbH0gICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSB7XHJcbiogICAgICAgICByZWdFeHA6IFJlZ0V4cCwgXHJcbiogICAgICAgICBlcnJvcj86IHN0cmluZyxcclxuKiAgICAgICAgIGVycm9yTmFtZT86IHN0cmluZ1xyXG4qICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyXHJcbiogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgICAgICAgICAtIFZhbGlkYXRpb24gZXJyb3JcclxuKi9cclxuZXhwb3J0IGNvbnN0IGxhdGVyVGhlblZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzoge1xyXG4gICAgZGF0ZTogRGF0ZTtcclxuICAgIGVycm9yPzogc3RyaW5nO1xyXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nO1xyXG4gIH1cclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGVycm9yID1cclxuICAgIGNvbmZpZy5lcnJvciA/PyBgVGhpcyBjb250cm9sIG11c3QgaGF2ZSBhIHZhbHVlIGxhdGVyIHRoZW4gJHtjb25maWcuZGF0ZX0uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwibGF0ZXJUaGVuXCJdOiBlcnJvciB9O1xyXG5cclxuICByZXR1cm4gcHJlcGFyZVRvQ29tcGFyZShjb250cm9sPy52YWx1ZSkgPiBwcmVwYXJlVG9Db21wYXJlKGNvbmZpZy5kYXRlKVxyXG4gICAgPyBudWxsXHJcbiAgICA6IGVycm9ycztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIGNvbXBhcmVzIHRoZSBkYXRlIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGFuZCBzcGVjaWZpZWQgRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIHtcclxuKiAgICAgICAgIGZpZWxkTmFtZTogc3RyaW5nLCBcclxuKiAgICAgICAgIGVycm9yPzogc3RyaW5nLFxyXG4qICAgICAgICAgZXJyb3JOYW1lPzogc3RyaW5nXHJcbiogICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXJcclxuKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgICAgICAgIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4qL1xyXG5leHBvcnQgY29uc3QgY29tcGFyZVRvVmFsaWRhdGlvbiA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgY29uZmlnOiB7XHJcbiAgICBmaWVsZE5hbWU6IHN0cmluZztcclxuICAgIGNvbXBhcmlzb246IENvbXBhcmlzb25PcGVyYXRpb25zO1xyXG4gICAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmc7XHJcbiAgfVxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IGNvbnRyb2wucGFyZW50Py5nZXQoY29uZmlnLmZpZWxkTmFtZSk/LnZhbHVlO1xyXG4gIGlmIChkYXRlKSB7XHJcbiAgICBjb25zdCBlcnJvciA9IGNvbmZpZy5lcnJvciA/PyBgVmFsdWUgY29tcGFyaXNvbiB3aXRoICR7ZGF0ZX0gZmFpbGVkLmA7XHJcbiAgICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7XHJcbiAgICAgIFtjb25maWcuZXJyb3JOYW1lID8/IFwiZGF0ZUNvbXBhcmlzb25cIl06IGVycm9yLFxyXG4gICAgfTtcclxuICAgIHJldHVybiBjb250cm9sLnZhbHVlICYmIGNvbXBhcmVEYXRlcyhjb250cm9sLnZhbHVlLCBkYXRlLCBjb25maWcuY29tcGFyaXNvbilcclxuICAgICAgPyBudWxsXHJcbiAgICAgIDogZXJyb3JzO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgY29uZGl0aW9uIGlzIG1ldC5cclxuICpcclxuICogQHBhcmFtIHtBYnN0cmFjdENvbnRyb2x9ICAgICAgICAgICAgICAgICAgICAtIGZvcm0gY29udHJvbFxyXG4gKiBAcGFyYW0ge1xyXG4qICAgICAgICAgY29uZGl0aW9uYWw6ICgoKSA9PiBib29sZWFuKSB8IGJvb2xlYW4sIFxyXG4qICAgICAgICAgZXJyb3I/OiBzdHJpbmcsXHJcbiogICAgICAgICBlcnJvck5hbWU/OiBzdHJpbmdcclxuKiAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlclxyXG4qIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAgICAgICAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiovXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZFdoZW5WYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IHtcclxuICAgIGNvbmRpdGlvbmFsOiAoKCkgPT4gYm9vbGVhbikgfCBib29sZWFuO1xyXG4gICAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmc7XHJcbiAgfVxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPSBjb25maWcuZXJyb3IgPz8gXCJUaGlzIGNvbnRyb2wgaGFzIGEgY29uZGl0aW9uYWwgc2V0IG9uIGl0LlwiO1xyXG4gIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9IHtcclxuICAgIFtjb25maWcuZXJyb3JOYW1lID8/IFwicmVxdWlyZWRXaGVuXCJdOiBlcnJvcixcclxuICB9O1xyXG5cclxuICBjb25zdCBvdXRjb21lID1cclxuICAgIHR5cGVvZiBjb25maWcuY29uZGl0aW9uYWwgPT09IFwiZnVuY3Rpb25cIlxyXG4gICAgICA/IGNvbmZpZy5jb25kaXRpb25hbCgpXHJcbiAgICAgIDogY29uZmlnLmNvbmRpdGlvbmFsO1xyXG4gIHJldHVybiAhY29udHJvbC52YWx1ZSAmJiBvdXRjb21lID8gZXJyb3JzIDogbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW4gXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBubyB2YWx1ZSBhbmQgc3BlY2lmaWVkIFxyXG4gKiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgaXQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGNvbnRyb2xcclxuICogQHBhcmFtIHtcclxuKiAgICAgICAgIGxpbms6IHN0cmluZywgXHJcbiogICAgICAgICBlcnJvcj86IHN0cmluZyxcclxuKiAgICAgICAgIGVycm9yTmFtZT86IHN0cmluZ1xyXG4qICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyXHJcbiogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgICAgICAgICAtIFZhbGlkYXRpb24gZXJyb3JcclxuKi9cclxuZXhwb3J0IGNvbnN0IGxpbmtUb1ZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzoge1xyXG4gICAgbGluazogc3RyaW5nO1xyXG4gICAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmc7XHJcbiAgfVxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPSBjb25maWcuZXJyb3IgPz8gYFRoaXMgY29udHJvbCBoYXMgYSBsaW5rIHRvICR7Y29uZmlnLmxpbmt9LmA7XHJcbiAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0geyBbY29uZmlnLmVycm9yTmFtZSA/PyBcImxpbmtUb1wiXTogZXJyb3IgfTtcclxuICBjb25zdCBsaW5rZWRUbyA9IGNvbnRyb2wucGFyZW50Py5nZXQoY29uZmlnLmxpbmspO1xyXG5cclxuICByZXR1cm4gIWNvbnRyb2w/LnZhbHVlICYmICEhbGlua2VkVG8/LnZhbHVlID8gZXJyb3JzIDogbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW4gXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhIHZhbHVlIGFuZCBzcGVjaWZpZWQgXHJcbiAqIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGRvZXMgbm90LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Fic3RyYWN0Q29udHJvbH0gICAgICAgICAgICAgICAgICAgIC0gZm9ybSBjb250cm9sXHJcbiAqIEBwYXJhbSB7XHJcbiogICAgICAgICBsaW5rOiBzdHJpbmcsIFxyXG4qICAgICAgICAgZXJyb3I/OiBzdHJpbmcsXHJcbiogICAgICAgICBlcnJvck5hbWU/OiBzdHJpbmdcclxuKiAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gY29uZmlnIHBhcmFtZXRlclxyXG4qIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gICAgICAgICAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiovXHJcbmV4cG9ydCBjb25zdCBsaW5rZWRUb1ZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzoge1xyXG4gICAgbGluazogc3RyaW5nO1xyXG4gICAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgICBlcnJvck5hbWU/OiBzdHJpbmc7XHJcbiAgfVxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPSBjb25maWcuZXJyb3IgPz8gYFRoaXMgY29udHJvbCBpcyBsaW5rZWQgdG8gJHtjb25maWcubGlua30uYDtcclxuICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSB7IFtjb25maWcuZXJyb3JOYW1lID8/IFwibGlua1RvXCJdOiBlcnJvciB9O1xyXG4gIGNvbnN0IGxpbmsgPSBjb250cm9sLnBhcmVudD8uZ2V0KGNvbmZpZy5saW5rKTtcclxuXHJcbiAgcmV0dXJuICEhY29udHJvbD8udmFsdWUgJiYgIWxpbms/LnZhbHVlID8gZXJyb3JzIDogbnVsbDtcclxufTtcclxuIl19