/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { requiredEtherValidation, requiredIfNotValidation, requiredIfValidation, } from "../validations/cross-field-validations";
/**
 * @description
 * Assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has no value.
 *
 * @param {string}                    - control name to receive the required error
 * @param {string}                    - control name who's value needs to be checked
 * @param {string}                    - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredIf = (required, check, error) => {
    return (control) => {
        return requiredIfValidation(control, { required, check, error });
    };
};
/**
 * @description
 * Assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has a value.
 *
 * @param {string}                    - control name to receive the required error
 * @param {string}                    - control name who's value needs to be checked
 * @param {string}                    - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredIfNot = (required, check, error) => {
    return (control) => {
        return requiredIfNotValidation(control, { required, check, error });
    };
};
/**
 * @description
 * Assigns a required error to both controls who's names are specified if nether one
 * has a value.
 *
 * @param {string}                    - name of the first control
 * @param {string}                    - name of the second control
 * @param {string}                    - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredEther = (required, check, error) => {
    return (control) => {
        return requiredEtherValidation(control, { required, check, error });
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvc3MtZmllbGQtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3JlYWN0aXZlLWZvcm1zL2Nyb3NzLWZpZWxkLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBR0gsT0FBTyxFQUNMLHVCQUF1QixFQUN2Qix1QkFBdUIsRUFDdkIsb0JBQW9CLEdBQ3JCLE1BQU0sd0NBQXdDLENBQUM7QUFFaEQ7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxDQUN4QixRQUFnQixFQUNoQixLQUFhLEVBQ2IsS0FBYyxFQUNELEVBQUU7SUFDZixPQUFPLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtRQUMzRCxPQUFPLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQzNCLFFBQWdCLEVBQ2hCLEtBQWEsRUFDYixLQUFjLEVBQ0QsRUFBRTtJQUNmLE9BQU8sQ0FBQyxPQUF3QixFQUEyQixFQUFFO1FBQzNELE9BQU8sdUJBQXVCLENBQUMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUMzQixRQUFnQixFQUNoQixLQUFhLEVBQ2IsS0FBYyxFQUNELEVBQUU7SUFDZixPQUFPLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtRQUMzRCxPQUFPLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG4gIHJlcXVpcmVkRXRoZXJWYWxpZGF0aW9uLFxyXG4gIHJlcXVpcmVkSWZOb3RWYWxpZGF0aW9uLFxyXG4gIHJlcXVpcmVkSWZWYWxpZGF0aW9uLFxyXG59IGZyb20gXCIuLi92YWxpZGF0aW9ucy9jcm9zcy1maWVsZC12YWxpZGF0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBc3NpZ25zIGEgcmVxdWlyZWQgZXJyb3IgdG8gdGhlIGNvbnRyb2xzIHdpdGggYSBuYW1lIHdhcyBzcGVjaWZpZWQgaW4gdGhlXHJcbiAqIGZpcnN0IHBhcmFtZXRlciBpZiB0aGUgY29udHJvbCB3aXRoIGEgbmFtZSBzcGVjaWZpZWQgaW4gdGhlIHNlY29uZCBwYXJhbWV0ZXJcclxuICogaGFzIG5vIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gY29udHJvbCBuYW1lIHRvIHJlY2VpdmUgdGhlIHJlcXVpcmVkIGVycm9yXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBjb250cm9sIG5hbWUgd2hvJ3MgdmFsdWUgbmVlZHMgdG8gYmUgY2hlY2tlZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gZXJyb3IgbWVzc2FnZSAtIG9wdGlvbmFsIHBhcmFtZXRlclxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkSWYgPSAoXHJcbiAgcmVxdWlyZWQ6IHN0cmluZyxcclxuICBjaGVjazogc3RyaW5nLFxyXG4gIGVycm9yPzogc3RyaW5nXHJcbik6IFZhbGlkYXRvckZuID0+IHtcclxuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZXF1aXJlZElmVmFsaWRhdGlvbihjb250cm9sLCB7IHJlcXVpcmVkLCBjaGVjaywgZXJyb3IgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQXNzaWducyBhIHJlcXVpcmVkIGVycm9yIHRvIHRoZSBjb250cm9scyB3aXRoIGEgbmFtZSB3YXMgc3BlY2lmaWVkIGluIHRoZVxyXG4gKiBmaXJzdCBwYXJhbWV0ZXIgaWYgdGhlIGNvbnRyb2wgd2l0aCBhIG5hbWUgc3BlY2lmaWVkIGluIHRoZSBzZWNvbmQgcGFyYW1ldGVyXHJcbiAqIGhhcyBhIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gY29udHJvbCBuYW1lIHRvIHJlY2VpdmUgdGhlIHJlcXVpcmVkIGVycm9yXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBjb250cm9sIG5hbWUgd2hvJ3MgdmFsdWUgbmVlZHMgdG8gYmUgY2hlY2tlZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gZXJyb3IgbWVzc2FnZSAtIG9wdGlvbmFsIHBhcmFtZXRlclxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkSWZOb3QgPSAoXHJcbiAgcmVxdWlyZWQ6IHN0cmluZyxcclxuICBjaGVjazogc3RyaW5nLFxyXG4gIGVycm9yPzogc3RyaW5nXHJcbik6IFZhbGlkYXRvckZuID0+IHtcclxuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZXF1aXJlZElmTm90VmFsaWRhdGlvbihjb250cm9sLCB7IHJlcXVpcmVkLCBjaGVjaywgZXJyb3IgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQXNzaWducyBhIHJlcXVpcmVkIGVycm9yIHRvIGJvdGggY29udHJvbHMgd2hvJ3MgbmFtZXMgYXJlIHNwZWNpZmllZCBpZiBuZXRoZXIgb25lXHJcbiAqIGhhcyBhIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gbmFtZSBvZiB0aGUgZmlyc3QgY29udHJvbFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gbmFtZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2xcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIGVycm9yIG1lc3NhZ2UgLSBvcHRpb25hbCBwYXJhbWV0ZXJcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZEV0aGVyID0gKFxyXG4gIHJlcXVpcmVkOiBzdHJpbmcsXHJcbiAgY2hlY2s6IHN0cmluZyxcclxuICBlcnJvcj86IHN0cmluZ1xyXG4pOiBWYWxpZGF0b3JGbiA9PiB7XHJcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVxdWlyZWRFdGhlclZhbGlkYXRpb24oY29udHJvbCwgeyByZXF1aXJlZCwgY2hlY2ssIGVycm9yIH0pO1xyXG4gIH07XHJcbn07XHJcbiJdfQ==