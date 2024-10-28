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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvc3MtZmllbGQtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3ZhbGlkYXRvcnMvcmVhY3RpdmUtZm9ybXMvY3Jvc3MtZmllbGQtdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLHVCQUF1QixFQUN2QixvQkFBb0IsR0FDckIsTUFBTSwyQ0FBMkMsQ0FBQztBQUVuRDs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxDQUN4QixRQUFnQixFQUNoQixLQUFhLEVBQ2IsS0FBYyxFQUNELEVBQUU7SUFDZixPQUFPLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtRQUMzRCxPQUFPLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUMzQixRQUFnQixFQUNoQixLQUFhLEVBQ2IsS0FBYyxFQUNELEVBQUU7SUFDZixPQUFPLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtRQUMzRCxPQUFPLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQzNCLFFBQWdCLEVBQ2hCLEtBQWEsRUFDYixLQUFjLEVBQ0QsRUFBRTtJQUNmLE9BQU8sQ0FBQyxPQUF3QixFQUEyQixFQUFFO1FBQzNELE9BQU8sdUJBQXVCLENBQUMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cclxuICovXHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcbiAgcmVxdWlyZWRFdGhlclZhbGlkYXRpb24sXHJcbiAgcmVxdWlyZWRJZk5vdFZhbGlkYXRpb24sXHJcbiAgcmVxdWlyZWRJZlZhbGlkYXRpb24sXHJcbn0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRpb25zL2Nyb3NzLWZpZWxkLXZhbGlkYXRpb25zXCI7XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQXNzaWducyBhIHJlcXVpcmVkIGVycm9yIHRvIHRoZSBjb250cm9scyB3aXRoIGEgbmFtZSB3YXMgc3BlY2lmaWVkIGluIHRoZVxyXG4gKiBmaXJzdCBwYXJhbWV0ZXIgaWYgdGhlIGNvbnRyb2wgd2l0aCBhIG5hbWUgc3BlY2lmaWVkIGluIHRoZSBzZWNvbmQgcGFyYW1ldGVyXHJcbiAqIGhhcyBubyB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIHJlcXVpcmVkICAgICAgICAgICAgICAgICAgICAtIGNvbnRyb2wgbmFtZSB0byByZWNlaXZlIHRoZSByZXF1aXJlZCBlcnJvclxyXG4gKiBAcGFyYW0gY2hlY2sgICAgICAgICAgICAgICAgICAgICAgIC0gY29udHJvbCBuYW1lIHdobydzIHZhbHVlIG5lZWRzIHRvIGJlIGNoZWNrZWRcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIGVycm9yIG1lc3NhZ2UgLSBvcHRpb25hbCBwYXJhbWV0ZXJcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZElmID0gKFxyXG4gIHJlcXVpcmVkOiBzdHJpbmcsXHJcbiAgY2hlY2s6IHN0cmluZyxcclxuICBlcnJvcj86IHN0cmluZ1xyXG4pOiBWYWxpZGF0b3JGbiA9PiB7XHJcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWlyZWRJZlZhbGlkYXRpb24oY29udHJvbCwgeyByZXF1aXJlZCwgY2hlY2ssIGVycm9yIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQXNzaWducyBhIHJlcXVpcmVkIGVycm9yIHRvIHRoZSBjb250cm9scyB3aXRoIGEgbmFtZSB3YXMgc3BlY2lmaWVkIGluIHRoZVxyXG4gKiBmaXJzdCBwYXJhbWV0ZXIgaWYgdGhlIGNvbnRyb2wgd2l0aCBhIG5hbWUgc3BlY2lmaWVkIGluIHRoZSBzZWNvbmQgcGFyYW1ldGVyXHJcbiAqIGhhcyBhIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0gcmVxdWlyZWQgICAgICAgICAgICAgICAgICAgIC0gY29udHJvbCBuYW1lIHRvIHJlY2VpdmUgdGhlIHJlcXVpcmVkIGVycm9yXHJcbiAqIEBwYXJhbSBjaGVjayAgICAgICAgICAgICAgICAgICAgICAgLSBjb250cm9sIG5hbWUgd2hvJ3MgdmFsdWUgbmVlZHMgdG8gYmUgY2hlY2tlZFxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gZXJyb3IgbWVzc2FnZSAtIG9wdGlvbmFsIHBhcmFtZXRlclxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkSWZOb3QgPSAoXHJcbiAgcmVxdWlyZWQ6IHN0cmluZyxcclxuICBjaGVjazogc3RyaW5nLFxyXG4gIGVycm9yPzogc3RyaW5nXHJcbik6IFZhbGlkYXRvckZuID0+IHtcclxuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZXF1aXJlZElmTm90VmFsaWRhdGlvbihjb250cm9sLCB7IHJlcXVpcmVkLCBjaGVjaywgZXJyb3IgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBc3NpZ25zIGEgcmVxdWlyZWQgZXJyb3IgdG8gYm90aCBjb250cm9scyB3aG8ncyBuYW1lcyBhcmUgc3BlY2lmaWVkIGlmIG5ldGhlciBvbmVcclxuICogaGFzIGEgdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSByZXF1aXJlZCAgICAgICAgICAgICAgICAgICAgLSBuYW1lIG9mIHRoZSBmaXJzdCBjb250cm9sXHJcbiAqIEBwYXJhbSBjaGVjayAgICAgICAgICAgICAgICAgICAgICAgLSBuYW1lIG9mIHRoZSBzZWNvbmQgY29udHJvbFxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gZXJyb3IgbWVzc2FnZSAtIG9wdGlvbmFsIHBhcmFtZXRlclxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkRXRoZXIgPSAoXHJcbiAgcmVxdWlyZWQ6IHN0cmluZyxcclxuICBjaGVjazogc3RyaW5nLFxyXG4gIGVycm9yPzogc3RyaW5nXHJcbik6IFZhbGlkYXRvckZuID0+IHtcclxuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZXF1aXJlZEV0aGVyVmFsaWRhdGlvbihjb250cm9sLCB7IHJlcXVpcmVkLCBjaGVjaywgZXJyb3IgfSk7XHJcbiAgfTtcclxufTtcclxuIl19