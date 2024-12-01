/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { requiredEtherValidation, requiredIfNotValidation, requiredIfValidation, } from "../../validations/cross-field-validations";
/**
 * @publicApi
 * @description
 * Assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has no value.
 *
 * @param required                    - control name to receive the required error
 * @param check                       - control name who's value needs to be checked
 * @param error                       - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredIf = (required, check, error) => {
    return (control) => {
        return requiredIfValidation(control, { required, check, error });
    };
};
/**
 * @publicApi
 * @description
 * Assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has a value.
 *
 * @param required                    - control name to receive the required error
 * @param check                       - control name who's value needs to be checked
 * @param error                       - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredIfNot = (required, check, error) => {
    return (control) => {
        return requiredIfNotValidation(control, { required, check, error });
    };
};
/**
 * @publicApi
 * @description
 * Assigns a required error to both controls who's names are specified if nether one
 * has a value.
 *
 * @param required                    - name of the first control
 * @param check                       - name of the second control
 * @param error                       - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredEther = (required, check, error) => {
    return (control) => {
        return requiredEtherValidation(control, { required, check, error });
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvc3MtZmllbGQtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3ZhbGlkYXRvcnMvcmVhY3RpdmUtZm9ybXMvY3Jvc3MtZmllbGQtdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLHVCQUF1QixFQUN2QixvQkFBb0IsR0FDckIsTUFBTSwyQ0FBMkMsQ0FBQztBQUVuRDs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxDQUN4QixRQUFnQixFQUNoQixLQUFhLEVBQ2IsS0FBYyxFQUNELEVBQUU7SUFDZixPQUFPLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtRQUMzRCxPQUFPLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUMzQixRQUFnQixFQUNoQixLQUFhLEVBQ2IsS0FBYyxFQUNELEVBQUU7SUFDZixPQUFPLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtRQUMzRCxPQUFPLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQzNCLFFBQWdCLEVBQ2hCLEtBQWEsRUFDYixLQUFjLEVBQ0QsRUFBRTtJQUNmLE9BQU8sQ0FBQyxPQUF3QixFQUEyQixFQUFFO1FBQzNELE9BQU8sdUJBQXVCLENBQUMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xuICovXG5cbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7XG4gIHJlcXVpcmVkRXRoZXJWYWxpZGF0aW9uLFxuICByZXF1aXJlZElmTm90VmFsaWRhdGlvbixcbiAgcmVxdWlyZWRJZlZhbGlkYXRpb24sXG59IGZyb20gXCIuLi8uLi92YWxpZGF0aW9ucy9jcm9zcy1maWVsZC12YWxpZGF0aW9uc1wiO1xuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQXNzaWducyBhIHJlcXVpcmVkIGVycm9yIHRvIHRoZSBjb250cm9scyB3aXRoIGEgbmFtZSB3YXMgc3BlY2lmaWVkIGluIHRoZVxuICogZmlyc3QgcGFyYW1ldGVyIGlmIHRoZSBjb250cm9sIHdpdGggYSBuYW1lIHNwZWNpZmllZCBpbiB0aGUgc2Vjb25kIHBhcmFtZXRlclxuICogaGFzIG5vIHZhbHVlLlxuICpcbiAqIEBwYXJhbSByZXF1aXJlZCAgICAgICAgICAgICAgICAgICAgLSBjb250cm9sIG5hbWUgdG8gcmVjZWl2ZSB0aGUgcmVxdWlyZWQgZXJyb3JcbiAqIEBwYXJhbSBjaGVjayAgICAgICAgICAgICAgICAgICAgICAgLSBjb250cm9sIG5hbWUgd2hvJ3MgdmFsdWUgbmVlZHMgdG8gYmUgY2hlY2tlZFxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIGVycm9yIG1lc3NhZ2UgLSBvcHRpb25hbCBwYXJhbWV0ZXJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCByZXF1aXJlZElmID0gKFxuICByZXF1aXJlZDogc3RyaW5nLFxuICBjaGVjazogc3RyaW5nLFxuICBlcnJvcj86IHN0cmluZ1xuKTogVmFsaWRhdG9yRm4gPT4ge1xuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICByZXR1cm4gcmVxdWlyZWRJZlZhbGlkYXRpb24oY29udHJvbCwgeyByZXF1aXJlZCwgY2hlY2ssIGVycm9yIH0pO1xuICB9O1xufTtcblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFzc2lnbnMgYSByZXF1aXJlZCBlcnJvciB0byB0aGUgY29udHJvbHMgd2l0aCBhIG5hbWUgd2FzIHNwZWNpZmllZCBpbiB0aGVcbiAqIGZpcnN0IHBhcmFtZXRlciBpZiB0aGUgY29udHJvbCB3aXRoIGEgbmFtZSBzcGVjaWZpZWQgaW4gdGhlIHNlY29uZCBwYXJhbWV0ZXJcbiAqIGhhcyBhIHZhbHVlLlxuICpcbiAqIEBwYXJhbSByZXF1aXJlZCAgICAgICAgICAgICAgICAgICAgLSBjb250cm9sIG5hbWUgdG8gcmVjZWl2ZSB0aGUgcmVxdWlyZWQgZXJyb3JcbiAqIEBwYXJhbSBjaGVjayAgICAgICAgICAgICAgICAgICAgICAgLSBjb250cm9sIG5hbWUgd2hvJ3MgdmFsdWUgbmVlZHMgdG8gYmUgY2hlY2tlZFxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIGVycm9yIG1lc3NhZ2UgLSBvcHRpb25hbCBwYXJhbWV0ZXJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCByZXF1aXJlZElmTm90ID0gKFxuICByZXF1aXJlZDogc3RyaW5nLFxuICBjaGVjazogc3RyaW5nLFxuICBlcnJvcj86IHN0cmluZ1xuKTogVmFsaWRhdG9yRm4gPT4ge1xuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICByZXR1cm4gcmVxdWlyZWRJZk5vdFZhbGlkYXRpb24oY29udHJvbCwgeyByZXF1aXJlZCwgY2hlY2ssIGVycm9yIH0pO1xuICB9O1xufTtcblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFzc2lnbnMgYSByZXF1aXJlZCBlcnJvciB0byBib3RoIGNvbnRyb2xzIHdobydzIG5hbWVzIGFyZSBzcGVjaWZpZWQgaWYgbmV0aGVyIG9uZVxuICogaGFzIGEgdmFsdWUuXG4gKlxuICogQHBhcmFtIHJlcXVpcmVkICAgICAgICAgICAgICAgICAgICAtIG5hbWUgb2YgdGhlIGZpcnN0IGNvbnRyb2xcbiAqIEBwYXJhbSBjaGVjayAgICAgICAgICAgICAgICAgICAgICAgLSBuYW1lIG9mIHRoZSBzZWNvbmQgY29udHJvbFxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIGVycm9yIG1lc3NhZ2UgLSBvcHRpb25hbCBwYXJhbWV0ZXJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCByZXF1aXJlZEV0aGVyID0gKFxuICByZXF1aXJlZDogc3RyaW5nLFxuICBjaGVjazogc3RyaW5nLFxuICBlcnJvcj86IHN0cmluZ1xuKTogVmFsaWRhdG9yRm4gPT4ge1xuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICByZXR1cm4gcmVxdWlyZWRFdGhlclZhbGlkYXRpb24oY29udHJvbCwgeyByZXF1aXJlZCwgY2hlY2ssIGVycm9yIH0pO1xuICB9O1xufTtcbiJdfQ==