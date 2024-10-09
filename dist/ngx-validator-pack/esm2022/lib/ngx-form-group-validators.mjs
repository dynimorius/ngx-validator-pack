/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { removeErrors, setErrors } from "./helpers/errors";
/**
 * @description
 * Assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has no value.
 *
 * @param {string}                    - control name to receive the required error
 * @param {string}                    - control name who's value needs to be checked
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredIf = (requiredControlName, controlToCheckName) => {
    return (control) => {
        const required = control?.get(requiredControlName);
        const toCheck = control?.get(controlToCheckName);
        if (required?.value || !toCheck?.value) {
            removeErrors(required, ["required"]);
            return null;
        }
        else {
            const errorVal = `Required ${requiredControlName} when having ${controlToCheckName}.`;
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
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredIfNot = (requiredControlName, controlToCheckName) => {
    return (control) => {
        const required = control?.get(requiredControlName);
        const toCheck = control?.get(controlToCheckName);
        if (required?.value || toCheck?.value) {
            removeErrors(required, ["required"]);
            return null;
        }
        else {
            const errorVal = `Required ${requiredControlName} when not having ${controlToCheckName}.`;
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
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredEther = (requiredControlName, controlToCheckName) => {
    return (control) => {
        const required = control?.get(requiredControlName);
        const toCheck = control?.get(controlToCheckName);
        if (required?.value || toCheck?.value) {
            removeErrors(required, ["required"]);
            removeErrors(toCheck, ["required"]);
            return null;
        }
        else {
            const errorVal = `Required either ${requiredControlName} or ${controlToCheckName}.`;
            setErrors(required, { required: errorVal });
            setErrors(toCheck, { required: errorVal });
            return { [errorVal]: true };
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZvcm0tZ3JvdXAtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL25neC1mb3JtLWdyb3VwLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBR0gsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUzRDs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsQ0FDeEIsbUJBQTJCLEVBQzNCLGtCQUEwQixFQUMxQixFQUFFO0lBQ0YsT0FBTyxDQUFDLE9BQXdCLEVBQTJCLEVBQUU7UUFFM0QsTUFBTSxRQUFRLEdBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBb0IsQ0FBQztRQUN0RSxNQUFNLE9BQU8sR0FBRyxPQUFPLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFvQixDQUFDO1FBQ3BFLElBQUksUUFBUSxFQUFFLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUN2QyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNyQyxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7YUFBTSxDQUFDO1lBQ04sTUFBTSxRQUFRLEdBQUcsWUFBWSxtQkFBbUIsZ0JBQWdCLGtCQUFrQixHQUFHLENBQUM7WUFDdEYsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsQ0FDM0IsbUJBQTJCLEVBQzNCLGtCQUEwQixFQUMxQixFQUFFO0lBQ0YsT0FBTyxDQUFDLE9BQXdCLEVBQTJCLEVBQUU7UUFDM0QsTUFBTSxRQUFRLEdBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBb0IsQ0FBQztRQUN0RSxNQUFNLE9BQU8sR0FBRyxPQUFPLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFvQixDQUFDO1FBQ3BFLElBQUksUUFBUSxFQUFFLEtBQUssSUFBSSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDdEMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckMsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO2FBQU0sQ0FBQztZQUNOLE1BQU0sUUFBUSxHQUFHLFlBQVksbUJBQW1CLG9CQUFvQixrQkFBa0IsR0FBRyxDQUFDO1lBQzFGLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM1QyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsQ0FDM0IsbUJBQTJCLEVBQzNCLGtCQUEwQixFQUMxQixFQUFFO0lBQ0YsT0FBTyxDQUFDLE9BQXdCLEVBQTJCLEVBQUU7UUFDM0QsTUFBTSxRQUFRLEdBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBb0IsQ0FBQztRQUN0RSxNQUFNLE9BQU8sR0FBRyxPQUFPLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFvQixDQUFDO1FBQ3BFLElBQUksUUFBUSxFQUFFLEtBQUssSUFBSSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDdEMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDcEMsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO2FBQU0sQ0FBQztZQUNOLE1BQU0sUUFBUSxHQUFHLG1CQUFtQixtQkFBbUIsT0FBTyxrQkFBa0IsR0FBRyxDQUFDO1lBQ3BGLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM1QyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDM0MsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cclxuICovXHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgcmVtb3ZlRXJyb3JzLCBzZXRFcnJvcnMgfSBmcm9tIFwiLi9oZWxwZXJzL2Vycm9yc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBc3NpZ25zIGEgcmVxdWlyZWQgZXJyb3IgdG8gdGhlIGNvbnRyb2xzIHdpdGggYSBuYW1lIHdhcyBzcGVjaWZpZWQgaW4gdGhlIFxyXG4gKiBmaXJzdCBwYXJhbWV0ZXIgaWYgdGhlIGNvbnRyb2wgd2l0aCBhIG5hbWUgc3BlY2lmaWVkIGluIHRoZSBzZWNvbmQgcGFyYW1ldGVyIFxyXG4gKiBoYXMgbm8gdmFsdWUuXHJcbiAqIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gY29udHJvbCBuYW1lIHRvIHJlY2VpdmUgdGhlIHJlcXVpcmVkIGVycm9yXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBjb250cm9sIG5hbWUgd2hvJ3MgdmFsdWUgbmVlZHMgdG8gYmUgY2hlY2tlZFxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkSWYgPSAoXHJcbiAgcmVxdWlyZWRDb250cm9sTmFtZTogc3RyaW5nLFxyXG4gIGNvbnRyb2xUb0NoZWNrTmFtZTogc3RyaW5nXHJcbikgPT4ge1xyXG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJlcXVpcmVkID0gY29udHJvbD8uZ2V0KHJlcXVpcmVkQ29udHJvbE5hbWUpIGFzIEFic3RyYWN0Q29udHJvbDtcclxuICAgIGNvbnN0IHRvQ2hlY2sgPSBjb250cm9sPy5nZXQoY29udHJvbFRvQ2hlY2tOYW1lKSBhcyBBYnN0cmFjdENvbnRyb2w7XHJcbiAgICBpZiAocmVxdWlyZWQ/LnZhbHVlIHx8ICF0b0NoZWNrPy52YWx1ZSkge1xyXG4gICAgICByZW1vdmVFcnJvcnMocmVxdWlyZWQsIFtcInJlcXVpcmVkXCJdKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBlcnJvclZhbCA9IGBSZXF1aXJlZCAke3JlcXVpcmVkQ29udHJvbE5hbWV9IHdoZW4gaGF2aW5nICR7Y29udHJvbFRvQ2hlY2tOYW1lfS5gO1xyXG4gICAgICBzZXRFcnJvcnMocmVxdWlyZWQsIHsgcmVxdWlyZWQ6IGVycm9yVmFsIH0pO1xyXG4gICAgICByZXR1cm4geyBbZXJyb3JWYWxdOiB0cnVlIH07XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQXNzaWducyBhIHJlcXVpcmVkIGVycm9yIHRvIHRoZSBjb250cm9scyB3aXRoIGEgbmFtZSB3YXMgc3BlY2lmaWVkIGluIHRoZSBcclxuICogZmlyc3QgcGFyYW1ldGVyIGlmIHRoZSBjb250cm9sIHdpdGggYSBuYW1lIHNwZWNpZmllZCBpbiB0aGUgc2Vjb25kIHBhcmFtZXRlciBcclxuICogaGFzIGEgdmFsdWUuXHJcbiAqIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gY29udHJvbCBuYW1lIHRvIHJlY2VpdmUgdGhlIHJlcXVpcmVkIGVycm9yXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBjb250cm9sIG5hbWUgd2hvJ3MgdmFsdWUgbmVlZHMgdG8gYmUgY2hlY2tlZFxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkSWZOb3QgPSAoXHJcbiAgcmVxdWlyZWRDb250cm9sTmFtZTogc3RyaW5nLFxyXG4gIGNvbnRyb2xUb0NoZWNrTmFtZTogc3RyaW5nXHJcbikgPT4ge1xyXG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgY29uc3QgcmVxdWlyZWQgPSBjb250cm9sPy5nZXQocmVxdWlyZWRDb250cm9sTmFtZSkgYXMgQWJzdHJhY3RDb250cm9sO1xyXG4gICAgY29uc3QgdG9DaGVjayA9IGNvbnRyb2w/LmdldChjb250cm9sVG9DaGVja05hbWUpIGFzIEFic3RyYWN0Q29udHJvbDtcclxuICAgIGlmIChyZXF1aXJlZD8udmFsdWUgfHwgdG9DaGVjaz8udmFsdWUpIHtcclxuICAgICAgcmVtb3ZlRXJyb3JzKHJlcXVpcmVkLCBbXCJyZXF1aXJlZFwiXSk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZXJyb3JWYWwgPSBgUmVxdWlyZWQgJHtyZXF1aXJlZENvbnRyb2xOYW1lfSB3aGVuIG5vdCBoYXZpbmcgJHtjb250cm9sVG9DaGVja05hbWV9LmA7XHJcbiAgICAgIHNldEVycm9ycyhyZXF1aXJlZCwgeyByZXF1aXJlZDogZXJyb3JWYWwgfSk7XHJcbiAgICAgIHJldHVybiB7IFtlcnJvclZhbF06IHRydWUgfTtcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBc3NpZ25zIGEgcmVxdWlyZWQgZXJyb3IgdG8gYm90aCBjb250cm9scyB3aG8ncyBuYW1lcyBhcmUgc3BlY2lmaWVkIGlmIG5ldGhlciBvbmVcclxuICogaGFzIGEgdmFsdWUuXHJcbiAqIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gbmFtZSBvZiB0aGUgZmlyc3QgY29udHJvbFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gbmFtZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2xcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZEV0aGVyID0gKFxyXG4gIHJlcXVpcmVkQ29udHJvbE5hbWU6IHN0cmluZyxcclxuICBjb250cm9sVG9DaGVja05hbWU6IHN0cmluZ1xyXG4pID0+IHtcclxuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIGNvbnN0IHJlcXVpcmVkID0gY29udHJvbD8uZ2V0KHJlcXVpcmVkQ29udHJvbE5hbWUpIGFzIEFic3RyYWN0Q29udHJvbDtcclxuICAgIGNvbnN0IHRvQ2hlY2sgPSBjb250cm9sPy5nZXQoY29udHJvbFRvQ2hlY2tOYW1lKSBhcyBBYnN0cmFjdENvbnRyb2w7XHJcbiAgICBpZiAocmVxdWlyZWQ/LnZhbHVlIHx8IHRvQ2hlY2s/LnZhbHVlKSB7XHJcbiAgICAgIHJlbW92ZUVycm9ycyhyZXF1aXJlZCwgW1wicmVxdWlyZWRcIl0pO1xyXG4gICAgICByZW1vdmVFcnJvcnModG9DaGVjaywgW1wicmVxdWlyZWRcIl0pO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVycm9yVmFsID0gYFJlcXVpcmVkIGVpdGhlciAke3JlcXVpcmVkQ29udHJvbE5hbWV9IG9yICR7Y29udHJvbFRvQ2hlY2tOYW1lfS5gO1xyXG4gICAgICBzZXRFcnJvcnMocmVxdWlyZWQsIHsgcmVxdWlyZWQ6IGVycm9yVmFsIH0pO1xyXG4gICAgICBzZXRFcnJvcnModG9DaGVjaywgeyByZXF1aXJlZDogZXJyb3JWYWwgfSk7XHJcbiAgICAgIHJldHVybiB7IFtlcnJvclZhbF06IHRydWUgfTtcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG4iXX0=