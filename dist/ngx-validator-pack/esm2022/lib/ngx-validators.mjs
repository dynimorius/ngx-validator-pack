/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { compareDates, prepareToCompare, } from "./helpers/date";
/**
 * Preforms a RegEx check on value in the given FromControl / AbstractControl
 *
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const regexpMatchValidator = (regexp, errorName, error) => (control) => {
    error = error || "This control did not match a given regular expression.";
    const errors = typeof error === "string"
        ? { [errorName || "regexpValidator"]: error }
        : error;
    return !control.value || regexp.test(control.value) ? null : errors;
};
/**
 * Preforms a RegEx check on value in the given FromControl / AbstractControl
 *
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const regexpNotAMatchValidator = (regexp, errorName, error) => (control) => {
    error = error || "This control matched a given regular expression.";
    const errors = typeof error === "string"
        ? { [errorName || "regexpValidator"]: error }
        : error;
    return !control.value || !regexp.test(control.value) ? null : errors;
};
/**
 * Checks if the date in the given FromControl / AbstractControl is earlier then
 * the value in the specified FromControl / AbstractControl
 *
 * @param {AbstractControl}           - AbstractControl to preform the check against
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const earlierThenValidator = (date, errorName, error) => (control) => {
    error = error || `This control must have a value earlier then ${date}.`;
    const errors = typeof error === "string"
        ? { [errorName || "earlierThen"]: error }
        : error;
    return prepareToCompare(control?.value) < prepareToCompare(date)
        ? null
        : errors;
};
/**
 * Checks if the date in the given FromControl / AbstractControl is greater then
 * the value in the specified FromControl / AbstractControl
 *
 * @param {AbstractControl}           - AbstractControl to preform the check against
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const laterThenValidator = (date, errorName, error) => (control) => {
    error = error || `This control must have a value later then ${date}.`;
    const errors = typeof error === "string" ? { [errorName || "laterThen"]: error } : error;
    return prepareToCompare(control?.value) > prepareToCompare(date)
        ? null
        : errors;
};
/**
 * Compares the date values of the given FromControl / AbstractControl and
 * specified FromControl / AbstractControl
 *
 * @param {string}                    - name of the filed to compare against
 * @param {ComparisonOperations}      - comparison to preform
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const compareToValidator = (filedName, comparison, errorName, error) => (control) => {
    const date = control.parent?.get(filedName)?.value;
    if (date) {
        error = error || `Value comparison with ${date} failed.`;
        const errors = typeof error === "string"
            ? { [errorName || "dateComparison"]: error }
            : error;
        return control.value && compareDates(control.value, date, comparison)
            ? null
            : errors;
    }
    return null;
};
/**
 * Returns a validation error if a condition is met
 *
 * @param {Function | boolean}        - conditional function or a boolean value
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredWhenValidator = (conditional, errorName, error) => (control) => {
    error = error || "This control has a conditional set on it.";
    const errors = typeof error === "string"
        ? { [errorName || "requiredWhen"]: error }
        : error;
    const outcome = typeof conditional === "function" ? conditional() : conditional;
    return !control.value && outcome ? errors : null;
};
/**
 * Returns a validation error if a given FromControl / AbstractControl has no value
 * and specified FromControl / AbstractControl has it
 *
 * @param {string}                    - name of the FromControl / AbstractControl to link to
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const linkToValidator = (linkTo, errorName, error) => (control) => {
    error = error || `This control has a link to ${linkTo}.`;
    const errors = typeof error === "string" ? { [errorName || "linkTo"]: error } : error;
    const linkedTo = control.parent?.get(linkTo);
    return !control?.value && !!linkedTo?.value ? errors : null;
};
/**
 * Returns a validation error if a given FromControl / AbstractControl has a value
 * and specified FromControl / AbstractControl does not
 *
 * @param {string}                    - name of the FromControl / AbstractControl
 *                                      which a given FromControl / AbstractControl is linked to
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const linkedToValidator = (linkedTo, errorName, error) => (control) => {
    error = error || `This control is linked to ${linkedTo}.`;
    const errors = typeof error === "string" ? { [errorName || "linkTo"]: error } : error;
    const link = control.parent?.get(linkedTo);
    return !!control?.value && !link?.value ? errors : null;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXZhbGlkYXRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9uZ3gtdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQ0wsWUFBWSxFQUVaLGdCQUFnQixHQUNqQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FDL0IsQ0FDRSxNQUFjLEVBQ2QsU0FBa0IsRUFDbEIsS0FBaUMsRUFDcEIsRUFBRSxDQUNqQixDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsS0FBSyxHQUFHLEtBQUssSUFBSSx3REFBd0QsQ0FBQztJQUMxRSxNQUFNLE1BQU0sR0FDVixPQUFPLEtBQUssS0FBSyxRQUFRO1FBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxJQUFJLGlCQUFpQixDQUFDLEVBQUUsS0FBSyxFQUFFO1FBQzdDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFFWixPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDdEUsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7R0FPRztBQUNILE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUNuQyxDQUNFLE1BQWMsRUFDZCxTQUFrQixFQUNsQixLQUFpQyxFQUNwQixFQUFFLENBQ2pCLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxLQUFLLEdBQUcsS0FBSyxJQUFJLGtEQUFrRCxDQUFDO0lBQ3BFLE1BQU0sTUFBTSxHQUNWLE9BQU8sS0FBSyxLQUFLLFFBQVE7UUFDdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUksaUJBQWlCLENB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QXdCLEVBQTJCLEVBQUU7SUFDcEQsS0FBSyxHQUFHLEtBQUssSUFBSSw2QkFBNkIsUUFBUSxHQUFHLENBQUM7SUFDMUQsTUFBTSxNQUFNLEdBQ1YsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFFekUsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzFELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xuICovXG5cbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7XG4gIGNvbXBhcmVEYXRlcyxcbiAgQ29tcGFyaXNvbk9wZXJhdGlvbnMsXG4gIHByZXBhcmVUb0NvbXBhcmUsXG59IGZyb20gXCIuL2hlbHBlcnMvZGF0ZVwiO1xuXG4vKipcbiAqIFByZWZvcm1zIGEgUmVnRXggY2hlY2sgb24gdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sXG4gKlxuICogQHBhcmFtIHtSZWdFeHB9ICAgICAgICAgICAgICAgICAgICAtIFJlZ3VsYXIgZXhwcmVzc2lvbiB0byBjaGVja1xuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxuICogQHBhcmFtIHtWYWxpZGF0aW9uRXJyb3JzIHwgc3RyaW5nfSAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCByZWdleHBNYXRjaFZhbGlkYXRvciA9XG4gIChcbiAgICByZWdleHA6IFJlZ0V4cCxcbiAgICBlcnJvck5hbWU/OiBzdHJpbmcsXG4gICAgZXJyb3I/OiBWYWxpZGF0aW9uRXJyb3JzIHwgc3RyaW5nXG4gICk6IFZhbGlkYXRvckZuID0+XG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgZXJyb3IgPSBlcnJvciB8fCBcIlRoaXMgY29udHJvbCBkaWQgbm90IG1hdGNoIGEgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uLlwiO1xuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9XG4gICAgICB0eXBlb2YgZXJyb3IgPT09IFwic3RyaW5nXCJcbiAgICAgICAgPyB7IFtlcnJvck5hbWUgfHwgXCJyZWdleHBWYWxpZGF0b3JcIl06IGVycm9yIH1cbiAgICAgICAgOiBlcnJvcjtcblxuICAgIHJldHVybiAhY29udHJvbC52YWx1ZSB8fCByZWdleHAudGVzdChjb250cm9sLnZhbHVlKSA/IG51bGwgOiBlcnJvcnM7XG4gIH07XG5cbi8qKlxuICogUHJlZm9ybXMgYSBSZWdFeCBjaGVjayBvbiB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2xcbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cH0gICAgICAgICAgICAgICAgICAgIC0gUmVndWxhciBleHByZXNzaW9uIHRvIGNoZWNrXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0ge1ZhbGlkYXRpb25FcnJvcnMgfCBzdHJpbmd9IC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IHJlZ2V4cE5vdEFNYXRjaFZhbGlkYXRvciA9XG4gIChcbiAgICByZWdleHA6IFJlZ0V4cCxcbiAgICBlcnJvck5hbWU/OiBzdHJpbmcsXG4gICAgZXJyb3I/OiBWYWxpZGF0aW9uRXJyb3JzIHwgc3RyaW5nXG4gICk6IFZhbGlkYXRvckZuID0+XG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgZXJyb3IgPSBlcnJvciB8fCBcIlRoaXMgY29udHJvbCBtYXRjaGVkIGEgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uLlwiO1xuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9XG4gICAgICB0eXBlb2YgZXJyb3IgPT09IFwic3RyaW5nXCJcbiAgICAgICAgPyB7IFtlcnJvck5hbWUgfHwgXCJyZWdleHBWYWxpZGF0b3JcIl06IGVycm9yIH1cbiAgICAgICAgOiBlcnJvcjtcblxuICAgIHJldHVybiAhY29udHJvbC52YWx1ZSB8fCAhcmVnZXhwLnRlc3QoY29udHJvbC52YWx1ZSkgPyBudWxsIDogZXJyb3JzO1xuICB9O1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZGF0ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgZWFybGllciB0aGVuXG4gKiB0aGUgdmFsdWUgaW4gdGhlIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbFxuICpcbiAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSAgICAgICAgICAgLSBBYnN0cmFjdENvbnRyb2wgdG8gcHJlZm9ybSB0aGUgY2hlY2sgYWdhaW5zdFxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxuICogQHBhcmFtIHtWYWxpZGF0aW9uRXJyb3JzIHwgc3RyaW5nfSAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBlYXJsaWVyVGhlblZhbGlkYXRvciA9XG4gIChcbiAgICBkYXRlOiBEYXRlLFxuICAgIGVycm9yTmFtZT86IHN0cmluZyxcbiAgICBlcnJvcj86IFZhbGlkYXRpb25FcnJvcnMgfCBzdHJpbmdcbiAgKTogVmFsaWRhdG9yRm4gPT5cbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICBlcnJvciA9IGVycm9yIHx8IGBUaGlzIGNvbnRyb2wgbXVzdCBoYXZlIGEgdmFsdWUgZWFybGllciB0aGVuICR7ZGF0ZX0uYDtcbiAgICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPVxuICAgICAgdHlwZW9mIGVycm9yID09PSBcInN0cmluZ1wiXG4gICAgICAgID8geyBbZXJyb3JOYW1lIHx8IFwiZWFybGllclRoZW5cIl06IGVycm9yIH1cbiAgICAgICAgOiBlcnJvcjtcblxuICAgIHJldHVybiBwcmVwYXJlVG9Db21wYXJlKGNvbnRyb2w/LnZhbHVlKSA8IHByZXBhcmVUb0NvbXBhcmUoZGF0ZSlcbiAgICAgID8gbnVsbFxuICAgICAgOiBlcnJvcnM7XG4gIH07XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBkYXRlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBncmVhdGVyIHRoZW5cbiAqIHRoZSB2YWx1ZSBpbiB0aGUgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sXG4gKlxuICogQHBhcmFtIHtBYnN0cmFjdENvbnRyb2x9ICAgICAgICAgICAtIEFic3RyYWN0Q29udHJvbCB0byBwcmVmb3JtIHRoZSBjaGVjayBhZ2FpbnN0XG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0ge1ZhbGlkYXRpb25FcnJvcnMgfCBzdHJpbmd9IC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGxhdGVyVGhlblZhbGlkYXRvciA9XG4gIChcbiAgICBkYXRlOiBEYXRlLFxuICAgIGVycm9yTmFtZT86IHN0cmluZyxcbiAgICBlcnJvcj86IFZhbGlkYXRpb25FcnJvcnMgfCBzdHJpbmdcbiAgKTogVmFsaWRhdG9yRm4gPT5cbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICBlcnJvciA9IGVycm9yIHx8IGBUaGlzIGNvbnRyb2wgbXVzdCBoYXZlIGEgdmFsdWUgbGF0ZXIgdGhlbiAke2RhdGV9LmA7XG4gICAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID1cbiAgICAgIHR5cGVvZiBlcnJvciA9PT0gXCJzdHJpbmdcIiA/IHsgW2Vycm9yTmFtZSB8fCBcImxhdGVyVGhlblwiXTogZXJyb3IgfSA6IGVycm9yO1xuXG4gICAgcmV0dXJuIHByZXBhcmVUb0NvbXBhcmUoY29udHJvbD8udmFsdWUpID4gcHJlcGFyZVRvQ29tcGFyZShkYXRlKVxuICAgICAgPyBudWxsXG4gICAgICA6IGVycm9ycztcbiAgfTtcblxuLyoqXG4gKiBDb21wYXJlcyB0aGUgZGF0ZSB2YWx1ZXMgb2YgdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGFuZFxuICogc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG5hbWUgb2YgdGhlIGZpbGVkIHRvIGNvbXBhcmUgYWdhaW5zdFxuICogQHBhcmFtIHtDb21wYXJpc29uT3BlcmF0aW9uc30gICAgICAtIGNvbXBhcmlzb24gdG8gcHJlZm9ybVxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxuICogQHBhcmFtIHtWYWxpZGF0aW9uRXJyb3JzIHwgc3RyaW5nfSAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBjb21wYXJlVG9WYWxpZGF0b3IgPVxuICAoXG4gICAgZmlsZWROYW1lOiBzdHJpbmcsXG4gICAgY29tcGFyaXNvbjogQ29tcGFyaXNvbk9wZXJhdGlvbnMsXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nLFxuICAgIGVycm9yPzogVmFsaWRhdGlvbkVycm9ycyB8IHN0cmluZ1xuICApOiBWYWxpZGF0b3JGbiA9PlxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBjb250cm9sLnBhcmVudD8uZ2V0KGZpbGVkTmFtZSk/LnZhbHVlO1xuICAgIGlmIChkYXRlKSB7XG4gICAgICBlcnJvciA9IGVycm9yIHx8IGBWYWx1ZSBjb21wYXJpc29uIHdpdGggJHtkYXRlfSBmYWlsZWQuYDtcbiAgICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9XG4gICAgICAgIHR5cGVvZiBlcnJvciA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgID8geyBbZXJyb3JOYW1lIHx8IFwiZGF0ZUNvbXBhcmlzb25cIl06IGVycm9yIH1cbiAgICAgICAgICA6IGVycm9yO1xuICAgICAgcmV0dXJuIGNvbnRyb2wudmFsdWUgJiYgY29tcGFyZURhdGVzKGNvbnRyb2wudmFsdWUsIGRhdGUsIGNvbXBhcmlzb24pXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IGVycm9ycztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbi8qKlxuICogUmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBjb25kaXRpb24gaXMgbWV0XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbiB8IGJvb2xlYW59ICAgICAgICAtIGNvbmRpdGlvbmFsIGZ1bmN0aW9uIG9yIGEgYm9vbGVhbiB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxuICogQHBhcmFtIHtWYWxpZGF0aW9uRXJyb3JzIHwgc3RyaW5nfSAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCByZXF1aXJlZFdoZW5WYWxpZGF0b3IgPVxuICAoXG4gICAgY29uZGl0aW9uYWw6ICgoKSA9PiBib29sZWFuKSB8IGJvb2xlYW4sXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nLFxuICAgIGVycm9yPzogVmFsaWRhdGlvbkVycm9ycyB8IHN0cmluZ1xuICApOiBWYWxpZGF0b3JGbiA9PlxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIGVycm9yID0gZXJyb3IgfHwgXCJUaGlzIGNvbnRyb2wgaGFzIGEgY29uZGl0aW9uYWwgc2V0IG9uIGl0LlwiO1xuICAgIGNvbnN0IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyA9XG4gICAgICB0eXBlb2YgZXJyb3IgPT09IFwic3RyaW5nXCJcbiAgICAgICAgPyB7IFtlcnJvck5hbWUgfHwgXCJyZXF1aXJlZFdoZW5cIl06IGVycm9yIH1cbiAgICAgICAgOiBlcnJvcjtcblxuICAgIGNvbnN0IG91dGNvbWUgPVxuICAgICAgdHlwZW9mIGNvbmRpdGlvbmFsID09PSBcImZ1bmN0aW9uXCIgPyBjb25kaXRpb25hbCgpIDogY29uZGl0aW9uYWw7XG4gICAgcmV0dXJuICFjb250cm9sLnZhbHVlICYmIG91dGNvbWUgPyBlcnJvcnMgOiBudWxsO1xuICB9O1xuXG4vKipcbiAqIFJldHVybnMgYSB2YWxpZGF0aW9uIGVycm9yIGlmIGEgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaGFzIG5vIHZhbHVlXG4gKiBhbmQgc3BlY2lmaWVkIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBpdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBuYW1lIG9mIHRoZSBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCB0byBsaW5rIHRvXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0ge1ZhbGlkYXRpb25FcnJvcnMgfCBzdHJpbmd9IC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGxpbmtUb1ZhbGlkYXRvciA9XG4gIChcbiAgICBsaW5rVG86IHN0cmluZyxcbiAgICBlcnJvck5hbWU/OiBzdHJpbmcsXG4gICAgZXJyb3I/OiBWYWxpZGF0aW9uRXJyb3JzIHwgc3RyaW5nXG4gICk6IFZhbGlkYXRvckZuID0+XG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgZXJyb3IgPSBlcnJvciB8fCBgVGhpcyBjb250cm9sIGhhcyBhIGxpbmsgdG8gJHtsaW5rVG99LmA7XG4gICAgY29uc3QgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID1cbiAgICAgIHR5cGVvZiBlcnJvciA9PT0gXCJzdHJpbmdcIiA/IHsgW2Vycm9yTmFtZSB8fCBcImxpbmtUb1wiXTogZXJyb3IgfSA6IGVycm9yO1xuXG4gICAgY29uc3QgbGlua2VkVG8gPSBjb250cm9sLnBhcmVudD8uZ2V0KGxpbmtUbyk7XG4gICAgcmV0dXJuICFjb250cm9sPy52YWx1ZSAmJiAhIWxpbmtlZFRvPy52YWx1ZSA/IGVycm9ycyA6IG51bGw7XG4gIH07XG5cbi8qKlxuICogUmV0dXJucyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgYSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgYSB2YWx1ZVxuICogYW5kIHNwZWNpZmllZCBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBkb2VzIG5vdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBuYW1lIG9mIHRoZSBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWNoIGEgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgbGlua2VkIHRvXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0ge1ZhbGlkYXRpb25FcnJvcnMgfCBzdHJpbmd9IC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGxpbmtlZFRvVmFsaWRhdG9yID1cbiAgKFxuICAgIGxpbmtlZFRvOiBzdHJpbmcsXG4gICAgZXJyb3JOYW1lPzogc3RyaW5nLFxuICAgIGVycm9yPzogVmFsaWRhdGlvbkVycm9ycyB8IHN0cmluZ1xuICApOiBWYWxpZGF0b3JGbiA9PlxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIGVycm9yID0gZXJyb3IgfHwgYFRoaXMgY29udHJvbCBpcyBsaW5rZWQgdG8gJHtsaW5rZWRUb30uYDtcbiAgICBjb25zdCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPVxuICAgICAgdHlwZW9mIGVycm9yID09PSBcInN0cmluZ1wiID8geyBbZXJyb3JOYW1lIHx8IFwibGlua1RvXCJdOiBlcnJvciB9IDogZXJyb3I7XG5cbiAgICBjb25zdCBsaW5rID0gY29udHJvbC5wYXJlbnQ/LmdldChsaW5rZWRUbyk7XG4gICAgcmV0dXJuICEhY29udHJvbD8udmFsdWUgJiYgIWxpbms/LnZhbHVlID8gZXJyb3JzIDogbnVsbDtcbiAgfTtcbiJdfQ==