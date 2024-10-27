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
export const requiredIf = (requiredControlName, controlToCheckName, error) => {
    return (control) => {
        return requiredIfValidation(control, {
            requiredControlName,
            controlToCheckName,
            error,
        });
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
export const requiredIfNot = (requiredControlName, controlToCheckName, error) => {
    return (control) => {
        return requiredIfNotValidation(control, {
            requiredControlName,
            controlToCheckName,
            error,
        });
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
export const requiredEther = (requiredControlName, controlToCheckName, error) => {
    return (control) => {
        return requiredEtherValidation(control, {
            requiredControlName,
            controlToCheckName,
            error,
        });
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvc3MtZmllbGQtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3JlYWN0aXZlLWZvcm1zL2Nyb3NzLWZpZWxkLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBR0gsT0FBTyxFQUNMLHVCQUF1QixFQUN2Qix1QkFBdUIsRUFDdkIsb0JBQW9CLEdBQ3JCLE1BQU0sd0NBQXdDLENBQUM7QUFFaEQ7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxDQUN4QixtQkFBMkIsRUFDM0Isa0JBQTBCLEVBQzFCLEtBQWMsRUFDRCxFQUFFO0lBQ2YsT0FBTyxDQUFDLE9BQXdCLEVBQTJCLEVBQUU7UUFDM0QsT0FBTyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUU7WUFDbkMsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixLQUFLO1NBQ04sQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUMzQixtQkFBMkIsRUFDM0Isa0JBQTBCLEVBQzFCLEtBQWMsRUFDRCxFQUFFO0lBQ2YsT0FBTyxDQUFDLE9BQXdCLEVBQTJCLEVBQUU7UUFDM0QsT0FBTyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUU7WUFDdEMsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixLQUFLO1NBQ04sQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQzNCLG1CQUEyQixFQUMzQixrQkFBMEIsRUFDMUIsS0FBYyxFQUNELEVBQUU7SUFDZixPQUFPLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtRQUMzRCxPQUFPLHVCQUF1QixDQUFDLE9BQU8sRUFBRTtZQUN0QyxtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLEtBQUs7U0FDTixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG4gIHJlcXVpcmVkRXRoZXJWYWxpZGF0aW9uLFxyXG4gIHJlcXVpcmVkSWZOb3RWYWxpZGF0aW9uLFxyXG4gIHJlcXVpcmVkSWZWYWxpZGF0aW9uLFxyXG59IGZyb20gXCIuLi92YWxpZGF0aW9ucy9jcm9zcy1maWVsZC12YWxpZGF0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBc3NpZ25zIGEgcmVxdWlyZWQgZXJyb3IgdG8gdGhlIGNvbnRyb2xzIHdpdGggYSBuYW1lIHdhcyBzcGVjaWZpZWQgaW4gdGhlXHJcbiAqIGZpcnN0IHBhcmFtZXRlciBpZiB0aGUgY29udHJvbCB3aXRoIGEgbmFtZSBzcGVjaWZpZWQgaW4gdGhlIHNlY29uZCBwYXJhbWV0ZXJcclxuICogaGFzIG5vIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gY29udHJvbCBuYW1lIHRvIHJlY2VpdmUgdGhlIHJlcXVpcmVkIGVycm9yXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBjb250cm9sIG5hbWUgd2hvJ3MgdmFsdWUgbmVlZHMgdG8gYmUgY2hlY2tlZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gZXJyb3IgbWVzc2FnZSAtIG9wdGlvbmFsIHBhcmFtZXRlclxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkSWYgPSAoXHJcbiAgcmVxdWlyZWRDb250cm9sTmFtZTogc3RyaW5nLFxyXG4gIGNvbnRyb2xUb0NoZWNrTmFtZTogc3RyaW5nLFxyXG4gIGVycm9yPzogc3RyaW5nXHJcbik6IFZhbGlkYXRvckZuID0+IHtcclxuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZXF1aXJlZElmVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlcXVpcmVkQ29udHJvbE5hbWUsXHJcbiAgICAgIGNvbnRyb2xUb0NoZWNrTmFtZSxcclxuICAgICAgZXJyb3IsXHJcbiAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBc3NpZ25zIGEgcmVxdWlyZWQgZXJyb3IgdG8gdGhlIGNvbnRyb2xzIHdpdGggYSBuYW1lIHdhcyBzcGVjaWZpZWQgaW4gdGhlXHJcbiAqIGZpcnN0IHBhcmFtZXRlciBpZiB0aGUgY29udHJvbCB3aXRoIGEgbmFtZSBzcGVjaWZpZWQgaW4gdGhlIHNlY29uZCBwYXJhbWV0ZXJcclxuICogaGFzIGEgdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBjb250cm9sIG5hbWUgdG8gcmVjZWl2ZSB0aGUgcmVxdWlyZWQgZXJyb3JcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIGNvbnRyb2wgbmFtZSB3aG8ncyB2YWx1ZSBuZWVkcyB0byBiZSBjaGVja2VkXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBlcnJvciBtZXNzYWdlIC0gb3B0aW9uYWwgcGFyYW1ldGVyXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVxdWlyZWRJZk5vdCA9IChcclxuICByZXF1aXJlZENvbnRyb2xOYW1lOiBzdHJpbmcsXHJcbiAgY29udHJvbFRvQ2hlY2tOYW1lOiBzdHJpbmcsXHJcbiAgZXJyb3I/OiBzdHJpbmdcclxuKTogVmFsaWRhdG9yRm4gPT4ge1xyXG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVpcmVkSWZOb3RWYWxpZGF0aW9uKGNvbnRyb2wsIHtcclxuICAgICAgcmVxdWlyZWRDb250cm9sTmFtZSxcclxuICAgICAgY29udHJvbFRvQ2hlY2tOYW1lLFxyXG4gICAgICBlcnJvcixcclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFzc2lnbnMgYSByZXF1aXJlZCBlcnJvciB0byBib3RoIGNvbnRyb2xzIHdobydzIG5hbWVzIGFyZSBzcGVjaWZpZWQgaWYgbmV0aGVyIG9uZVxyXG4gKiBoYXMgYSB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG5hbWUgb2YgdGhlIGZpcnN0IGNvbnRyb2xcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG5hbWUgb2YgdGhlIHNlY29uZCBjb250cm9sXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBlcnJvciBtZXNzYWdlIC0gb3B0aW9uYWwgcGFyYW1ldGVyXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVxdWlyZWRFdGhlciA9IChcclxuICByZXF1aXJlZENvbnRyb2xOYW1lOiBzdHJpbmcsXHJcbiAgY29udHJvbFRvQ2hlY2tOYW1lOiBzdHJpbmcsXHJcbiAgZXJyb3I/OiBzdHJpbmdcclxuKTogVmFsaWRhdG9yRm4gPT4ge1xyXG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVpcmVkRXRoZXJWYWxpZGF0aW9uKGNvbnRyb2wsIHtcclxuICAgICAgcmVxdWlyZWRDb250cm9sTmFtZSxcclxuICAgICAgY29udHJvbFRvQ2hlY2tOYW1lLFxyXG4gICAgICBlcnJvcixcclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcbiJdfQ==