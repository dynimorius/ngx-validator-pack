/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { removeErrors, setErrors } from "../helpers/errors";
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
        const required = control?.get(requiredControlName);
        const toCheck = control?.get(controlToCheckName);
        if (required?.value || !toCheck?.value) {
            removeErrors(required, ["required"]);
            return null;
        }
        else {
            const errorVal = error ??
                `Required is ${requiredControlName} when having ${controlToCheckName}.`;
            setErrors(required, { required: errorVal });
            return { [errorVal]: true };
        }
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
        const required = control?.get(requiredControlName);
        const toCheck = control?.get(controlToCheckName);
        if (required?.value || toCheck?.value) {
            removeErrors(required, ["required"]);
            return null;
        }
        else {
            const errorVal = error ??
                `Required is ${requiredControlName} when not having ${controlToCheckName}.`;
            setErrors(required, { required: errorVal });
            return { [errorVal]: true };
        }
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
        const required = control?.get(requiredControlName);
        const toCheck = control?.get(controlToCheckName);
        if (required?.value || toCheck?.value) {
            removeErrors(required, ["required"]);
            removeErrors(toCheck, ["required"]);
            return null;
        }
        else {
            const errorVal = error ??
                `Required either ${requiredControlName} or ${controlToCheckName}.`;
            setErrors(required, { required: errorVal });
            setErrors(toCheck, { required: errorVal });
            return { [errorVal]: true };
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvc3MtZmllbGQtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3JlYWN0aXZlLWZvcm1zL2Nyb3NzLWZpZWxkLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBR0gsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU1RDs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLENBQ3hCLG1CQUEyQixFQUMzQixrQkFBMEIsRUFDMUIsS0FBYyxFQUNkLEVBQUU7SUFDRixPQUFPLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtRQUMzRCxNQUFNLFFBQVEsR0FBRyxPQUFPLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFvQixDQUFDO1FBQ3RFLE1BQU0sT0FBTyxHQUFHLE9BQU8sRUFBRSxHQUFHLENBQUMsa0JBQWtCLENBQW9CLENBQUM7UUFDcEUsSUFBSSxRQUFRLEVBQUUsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQ3ZDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQzthQUFNLENBQUM7WUFDTixNQUFNLFFBQVEsR0FDWixLQUFLO2dCQUNMLGVBQWUsbUJBQW1CLGdCQUFnQixrQkFBa0IsR0FBRyxDQUFDO1lBQzFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM1QyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUMzQixtQkFBMkIsRUFDM0Isa0JBQTBCLEVBQzFCLEtBQWMsRUFDZCxFQUFFO0lBQ0YsT0FBTyxDQUFDLE9BQXdCLEVBQTJCLEVBQUU7UUFDM0QsTUFBTSxRQUFRLEdBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBb0IsQ0FBQztRQUN0RSxNQUFNLE9BQU8sR0FBRyxPQUFPLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFvQixDQUFDO1FBQ3BFLElBQUksUUFBUSxFQUFFLEtBQUssSUFBSSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDdEMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckMsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO2FBQU0sQ0FBQztZQUNOLE1BQU0sUUFBUSxHQUNaLEtBQUs7Z0JBQ0wsZUFBZSxtQkFBbUIsb0JBQW9CLGtCQUFrQixHQUFHLENBQUM7WUFDOUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsQ0FDM0IsbUJBQTJCLEVBQzNCLGtCQUEwQixFQUMxQixLQUFjLEVBQ2QsRUFBRTtJQUNGLE9BQU8sQ0FBQyxPQUF3QixFQUEyQixFQUFFO1FBQzNELE1BQU0sUUFBUSxHQUFHLE9BQU8sRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQW9CLENBQUM7UUFDdEUsTUFBTSxPQUFPLEdBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBb0IsQ0FBQztRQUNwRSxJQUFJLFFBQVEsRUFBRSxLQUFLLElBQUksT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQ3RDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQzthQUFNLENBQUM7WUFDTixNQUFNLFFBQVEsR0FDWixLQUFLO2dCQUNMLG1CQUFtQixtQkFBbUIsT0FBTyxrQkFBa0IsR0FBRyxDQUFDO1lBQ3JFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM1QyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDM0MsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cclxuICovXHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgcmVtb3ZlRXJyb3JzLCBzZXRFcnJvcnMgfSBmcm9tIFwiLi4vaGVscGVycy9lcnJvcnNcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQXNzaWducyBhIHJlcXVpcmVkIGVycm9yIHRvIHRoZSBjb250cm9scyB3aXRoIGEgbmFtZSB3YXMgc3BlY2lmaWVkIGluIHRoZVxyXG4gKiBmaXJzdCBwYXJhbWV0ZXIgaWYgdGhlIGNvbnRyb2wgd2l0aCBhIG5hbWUgc3BlY2lmaWVkIGluIHRoZSBzZWNvbmQgcGFyYW1ldGVyXHJcbiAqIGhhcyBubyB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIGNvbnRyb2wgbmFtZSB0byByZWNlaXZlIHRoZSByZXF1aXJlZCBlcnJvclxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gY29udHJvbCBuYW1lIHdobydzIHZhbHVlIG5lZWRzIHRvIGJlIGNoZWNrZWRcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIGVycm9yIG1lc3NhZ2UgLSBvcHRpb25hbCBwYXJhbWV0ZXJcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZElmID0gKFxyXG4gIHJlcXVpcmVkQ29udHJvbE5hbWU6IHN0cmluZyxcclxuICBjb250cm9sVG9DaGVja05hbWU6IHN0cmluZyxcclxuICBlcnJvcj86IHN0cmluZ1xyXG4pID0+IHtcclxuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIGNvbnN0IHJlcXVpcmVkID0gY29udHJvbD8uZ2V0KHJlcXVpcmVkQ29udHJvbE5hbWUpIGFzIEFic3RyYWN0Q29udHJvbDtcclxuICAgIGNvbnN0IHRvQ2hlY2sgPSBjb250cm9sPy5nZXQoY29udHJvbFRvQ2hlY2tOYW1lKSBhcyBBYnN0cmFjdENvbnRyb2w7XHJcbiAgICBpZiAocmVxdWlyZWQ/LnZhbHVlIHx8ICF0b0NoZWNrPy52YWx1ZSkge1xyXG4gICAgICByZW1vdmVFcnJvcnMocmVxdWlyZWQsIFtcInJlcXVpcmVkXCJdKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBlcnJvclZhbCA9XHJcbiAgICAgICAgZXJyb3IgPz9cclxuICAgICAgICBgUmVxdWlyZWQgaXMgJHtyZXF1aXJlZENvbnRyb2xOYW1lfSB3aGVuIGhhdmluZyAke2NvbnRyb2xUb0NoZWNrTmFtZX0uYDtcclxuICAgICAgc2V0RXJyb3JzKHJlcXVpcmVkLCB7IHJlcXVpcmVkOiBlcnJvclZhbCB9KTtcclxuICAgICAgcmV0dXJuIHsgW2Vycm9yVmFsXTogdHJ1ZSB9O1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFzc2lnbnMgYSByZXF1aXJlZCBlcnJvciB0byB0aGUgY29udHJvbHMgd2l0aCBhIG5hbWUgd2FzIHNwZWNpZmllZCBpbiB0aGVcclxuICogZmlyc3QgcGFyYW1ldGVyIGlmIHRoZSBjb250cm9sIHdpdGggYSBuYW1lIHNwZWNpZmllZCBpbiB0aGUgc2Vjb25kIHBhcmFtZXRlclxyXG4gKiBoYXMgYSB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIGNvbnRyb2wgbmFtZSB0byByZWNlaXZlIHRoZSByZXF1aXJlZCBlcnJvclxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gY29udHJvbCBuYW1lIHdobydzIHZhbHVlIG5lZWRzIHRvIGJlIGNoZWNrZWRcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIGVycm9yIG1lc3NhZ2UgLSBvcHRpb25hbCBwYXJhbWV0ZXJcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZElmTm90ID0gKFxyXG4gIHJlcXVpcmVkQ29udHJvbE5hbWU6IHN0cmluZyxcclxuICBjb250cm9sVG9DaGVja05hbWU6IHN0cmluZyxcclxuICBlcnJvcj86IHN0cmluZ1xyXG4pID0+IHtcclxuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIGNvbnN0IHJlcXVpcmVkID0gY29udHJvbD8uZ2V0KHJlcXVpcmVkQ29udHJvbE5hbWUpIGFzIEFic3RyYWN0Q29udHJvbDtcclxuICAgIGNvbnN0IHRvQ2hlY2sgPSBjb250cm9sPy5nZXQoY29udHJvbFRvQ2hlY2tOYW1lKSBhcyBBYnN0cmFjdENvbnRyb2w7XHJcbiAgICBpZiAocmVxdWlyZWQ/LnZhbHVlIHx8IHRvQ2hlY2s/LnZhbHVlKSB7XHJcbiAgICAgIHJlbW92ZUVycm9ycyhyZXF1aXJlZCwgW1wicmVxdWlyZWRcIl0pO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVycm9yVmFsID1cclxuICAgICAgICBlcnJvciA/P1xyXG4gICAgICAgIGBSZXF1aXJlZCBpcyAke3JlcXVpcmVkQ29udHJvbE5hbWV9IHdoZW4gbm90IGhhdmluZyAke2NvbnRyb2xUb0NoZWNrTmFtZX0uYDtcclxuICAgICAgc2V0RXJyb3JzKHJlcXVpcmVkLCB7IHJlcXVpcmVkOiBlcnJvclZhbCB9KTtcclxuICAgICAgcmV0dXJuIHsgW2Vycm9yVmFsXTogdHJ1ZSB9O1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFzc2lnbnMgYSByZXF1aXJlZCBlcnJvciB0byBib3RoIGNvbnRyb2xzIHdobydzIG5hbWVzIGFyZSBzcGVjaWZpZWQgaWYgbmV0aGVyIG9uZVxyXG4gKiBoYXMgYSB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG5hbWUgb2YgdGhlIGZpcnN0IGNvbnRyb2xcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG5hbWUgb2YgdGhlIHNlY29uZCBjb250cm9sXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBlcnJvciBtZXNzYWdlIC0gb3B0aW9uYWwgcGFyYW1ldGVyXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVxdWlyZWRFdGhlciA9IChcclxuICByZXF1aXJlZENvbnRyb2xOYW1lOiBzdHJpbmcsXHJcbiAgY29udHJvbFRvQ2hlY2tOYW1lOiBzdHJpbmcsXHJcbiAgZXJyb3I/OiBzdHJpbmdcclxuKSA9PiB7XHJcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICBjb25zdCByZXF1aXJlZCA9IGNvbnRyb2w/LmdldChyZXF1aXJlZENvbnRyb2xOYW1lKSBhcyBBYnN0cmFjdENvbnRyb2w7XHJcbiAgICBjb25zdCB0b0NoZWNrID0gY29udHJvbD8uZ2V0KGNvbnRyb2xUb0NoZWNrTmFtZSkgYXMgQWJzdHJhY3RDb250cm9sO1xyXG4gICAgaWYgKHJlcXVpcmVkPy52YWx1ZSB8fCB0b0NoZWNrPy52YWx1ZSkge1xyXG4gICAgICByZW1vdmVFcnJvcnMocmVxdWlyZWQsIFtcInJlcXVpcmVkXCJdKTtcclxuICAgICAgcmVtb3ZlRXJyb3JzKHRvQ2hlY2ssIFtcInJlcXVpcmVkXCJdKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBlcnJvclZhbCA9XHJcbiAgICAgICAgZXJyb3IgPz9cclxuICAgICAgICBgUmVxdWlyZWQgZWl0aGVyICR7cmVxdWlyZWRDb250cm9sTmFtZX0gb3IgJHtjb250cm9sVG9DaGVja05hbWV9LmA7XHJcbiAgICAgIHNldEVycm9ycyhyZXF1aXJlZCwgeyByZXF1aXJlZDogZXJyb3JWYWwgfSk7XHJcbiAgICAgIHNldEVycm9ycyh0b0NoZWNrLCB7IHJlcXVpcmVkOiBlcnJvclZhbCB9KTtcclxuICAgICAgcmV0dXJuIHsgW2Vycm9yVmFsXTogdHJ1ZSB9O1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcbiJdfQ==