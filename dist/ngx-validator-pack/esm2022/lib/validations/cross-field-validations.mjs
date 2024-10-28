/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { removeErrors, setErrors } from "../helpers/errors";
/**
 * @internal
 * @description
 * A validation function which assigns a required error to the controls with a name that
 * was specified in the requiredControlName filed of the config parameter if the control
 * with a name specified in the controlToCheckName parameter has no value.
 *
 * @param control                      - form group
 * @param config                       - config parameter, consists of a
 *                                       required field name, a field name to check and optional
 *                                       error string
 * @returns {ValidationErrors | null}   - Validation error
 */
export const requiredIfValidation = (control, config) => {
    const required = control?.get(config.required);
    const toCheck = control?.get(config.check);
    if (required?.value || !toCheck?.value) {
        removeErrors(required, ["required"]);
        return null;
    }
    else {
        const errorVal = config.error ??
            `Required is ${config.required} when having ${config.check}.`;
        setErrors(required, { required: errorVal });
        return { [errorVal]: true };
    }
};
/**
 * @internal
 * @description
 * A validation function which assigns a required error to the controls with a name that
 * was specified in the requiredControlName field of the config parameter if the control
 * with a name specified in the controlToCheckName parameter has a value.
 *
 * @param control                      - form group
 * @param config                       - config parameter, consists of a
 *                                       required field name, a field name to check and optional
 *                                       error string
 * @returns {ValidationErrors | null}   - Validation error
 */
export const requiredIfNotValidation = (control, config) => {
    const required = control?.get(config.required);
    const toCheck = control?.get(config.check);
    if (required?.value || toCheck?.value) {
        removeErrors(required, ["required"]);
        return null;
    }
    else {
        const errorVal = config.error ??
            `Required is ${config.required} when not having ${config.check}.`;
        setErrors(required, { required: errorVal });
        return { [errorVal]: true };
    }
};
/**
 * @internal
 * @description
 * A validation function which assigns a required error to the controls with a name that
 * was specified in the requiredControlName field of the config parameter nether that control
 * or the control with a name specified in the controlToCheckName parameter has a value.
 *
 * @param control                      - form group
 * @param config                       - config parameter, consists of a
 *                                       required field name, a field name to check and optional
 *                                       error string
 * @returns {ValidationErrors | null}   - Validation error
 */
export const requiredEtherValidation = (control, config) => {
    const required = control?.get(config.required);
    const toCheck = control?.get(config.check);
    if (required?.value || toCheck?.value) {
        removeErrors(required, ["required"]);
        removeErrors(toCheck, ["required"]);
        return null;
    }
    else {
        const errorVal = config.error ??
            `Required either ${config.required} or ${config.check}.`;
        setErrors(required, { required: errorVal });
        setErrors(toCheck, { required: errorVal });
        return { [errorVal]: true };
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvc3MtZmllbGQtdmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi92YWxpZGF0aW9ucy9jcm9zcy1maWVsZC12YWxpZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTVEOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLENBQ2xDLE9BQXdCLEVBQ3hCLE1BSUMsRUFDd0IsRUFBRTtJQUMzQixNQUFNLFFBQVEsR0FBRyxPQUFPLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQW9CLENBQUM7SUFDbEUsTUFBTSxPQUFPLEdBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFvQixDQUFDO0lBQzlELElBQUksUUFBUSxFQUFFLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUN2QyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNyQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7U0FBTSxDQUFDO1FBQ04sTUFBTSxRQUFRLEdBQ1osTUFBTSxDQUFDLEtBQUs7WUFDWixlQUFlLE1BQU0sQ0FBQyxRQUFRLGdCQUFnQixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDaEUsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRyxDQUNyQyxPQUF3QixFQUN4QixNQUlDLEVBQ3dCLEVBQUU7SUFDM0IsTUFBTSxRQUFRLEdBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFvQixDQUFDO0lBQ2xFLE1BQU0sT0FBTyxHQUFHLE9BQU8sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBb0IsQ0FBQztJQUM5RCxJQUFJLFFBQVEsRUFBRSxLQUFLLElBQUksT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ3RDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztTQUFNLENBQUM7UUFDTixNQUFNLFFBQVEsR0FDWixNQUFNLENBQUMsS0FBSztZQUNaLGVBQWUsTUFBTSxDQUFDLFFBQVEsb0JBQW9CLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQztRQUNwRSxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDNUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHLENBQ3JDLE9BQXdCLEVBQ3hCLE1BSUMsRUFDd0IsRUFBRTtJQUMzQixNQUFNLFFBQVEsR0FBRyxPQUFPLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQW9CLENBQUM7SUFDbEUsTUFBTSxPQUFPLEdBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFvQixDQUFDO0lBQzlELElBQUksUUFBUSxFQUFFLEtBQUssSUFBSSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDdEMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDckMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO1NBQU0sQ0FBQztRQUNOLE1BQU0sUUFBUSxHQUNaLE1BQU0sQ0FBQyxLQUFLO1lBQ1osbUJBQW1CLE1BQU0sQ0FBQyxRQUFRLE9BQU8sTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQzNELFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM1QyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDM0MsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cclxuICovXHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgcmVtb3ZlRXJyb3JzLCBzZXRFcnJvcnMgfSBmcm9tIFwiLi4vaGVscGVycy9lcnJvcnNcIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCBhc3NpZ25zIGEgcmVxdWlyZWQgZXJyb3IgdG8gdGhlIGNvbnRyb2xzIHdpdGggYSBuYW1lIHRoYXQgXHJcbiAqIHdhcyBzcGVjaWZpZWQgaW4gdGhlIHJlcXVpcmVkQ29udHJvbE5hbWUgZmlsZWQgb2YgdGhlIGNvbmZpZyBwYXJhbWV0ZXIgaWYgdGhlIGNvbnRyb2wgXHJcbiAqIHdpdGggYSBuYW1lIHNwZWNpZmllZCBpbiB0aGUgY29udHJvbFRvQ2hlY2tOYW1lIHBhcmFtZXRlciBoYXMgbm8gdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBncm91cFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBmaWVsZCBuYW1lLCBhIGZpZWxkIG5hbWUgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVxdWlyZWRJZlZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzoge1xyXG4gICAgcmVxdWlyZWQ6IHN0cmluZztcclxuICAgIGNoZWNrOiBzdHJpbmc7XHJcbiAgICBlcnJvcj86IHN0cmluZztcclxuICB9XHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCByZXF1aXJlZCA9IGNvbnRyb2w/LmdldChjb25maWcucmVxdWlyZWQpIGFzIEFic3RyYWN0Q29udHJvbDtcclxuICBjb25zdCB0b0NoZWNrID0gY29udHJvbD8uZ2V0KGNvbmZpZy5jaGVjaykgYXMgQWJzdHJhY3RDb250cm9sO1xyXG4gIGlmIChyZXF1aXJlZD8udmFsdWUgfHwgIXRvQ2hlY2s/LnZhbHVlKSB7XHJcbiAgICByZW1vdmVFcnJvcnMocmVxdWlyZWQsIFtcInJlcXVpcmVkXCJdKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBlcnJvclZhbCA9XHJcbiAgICAgIGNvbmZpZy5lcnJvciA/P1xyXG4gICAgICBgUmVxdWlyZWQgaXMgJHtjb25maWcucmVxdWlyZWR9IHdoZW4gaGF2aW5nICR7Y29uZmlnLmNoZWNrfS5gO1xyXG4gICAgc2V0RXJyb3JzKHJlcXVpcmVkLCB7IHJlcXVpcmVkOiBlcnJvclZhbCB9KTtcclxuICAgIHJldHVybiB7IFtlcnJvclZhbF06IHRydWUgfTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggYXNzaWducyBhIHJlcXVpcmVkIGVycm9yIHRvIHRoZSBjb250cm9scyB3aXRoIGEgbmFtZSB0aGF0IFxyXG4gKiB3YXMgc3BlY2lmaWVkIGluIHRoZSByZXF1aXJlZENvbnRyb2xOYW1lIGZpZWxkIG9mIHRoZSBjb25maWcgcGFyYW1ldGVyIGlmIHRoZSBjb250cm9sIFxyXG4gKiB3aXRoIGEgbmFtZSBzcGVjaWZpZWQgaW4gdGhlIGNvbnRyb2xUb0NoZWNrTmFtZSBwYXJhbWV0ZXIgaGFzIGEgdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBncm91cFxyXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBmaWVsZCBuYW1lLCBhIGZpZWxkIG5hbWUgdG8gY2hlY2sgYW5kIG9wdGlvbmFsIFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVxdWlyZWRJZk5vdFZhbGlkYXRpb24gPSAoXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gIGNvbmZpZzoge1xyXG4gICAgcmVxdWlyZWQ6IHN0cmluZztcclxuICAgIGNoZWNrOiBzdHJpbmc7XHJcbiAgICBlcnJvcj86IHN0cmluZztcclxuICB9XHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICBjb25zdCByZXF1aXJlZCA9IGNvbnRyb2w/LmdldChjb25maWcucmVxdWlyZWQpIGFzIEFic3RyYWN0Q29udHJvbDtcclxuICBjb25zdCB0b0NoZWNrID0gY29udHJvbD8uZ2V0KGNvbmZpZy5jaGVjaykgYXMgQWJzdHJhY3RDb250cm9sO1xyXG4gIGlmIChyZXF1aXJlZD8udmFsdWUgfHwgdG9DaGVjaz8udmFsdWUpIHtcclxuICAgIHJlbW92ZUVycm9ycyhyZXF1aXJlZCwgW1wicmVxdWlyZWRcIl0pO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGVycm9yVmFsID1cclxuICAgICAgY29uZmlnLmVycm9yID8/XHJcbiAgICAgIGBSZXF1aXJlZCBpcyAke2NvbmZpZy5yZXF1aXJlZH0gd2hlbiBub3QgaGF2aW5nICR7Y29uZmlnLmNoZWNrfS5gO1xyXG4gICAgc2V0RXJyb3JzKHJlcXVpcmVkLCB7IHJlcXVpcmVkOiBlcnJvclZhbCB9KTtcclxuICAgIHJldHVybiB7IFtlcnJvclZhbF06IHRydWUgfTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggYXNzaWducyBhIHJlcXVpcmVkIGVycm9yIHRvIHRoZSBjb250cm9scyB3aXRoIGEgbmFtZSB0aGF0IFxyXG4gKiB3YXMgc3BlY2lmaWVkIGluIHRoZSByZXF1aXJlZENvbnRyb2xOYW1lIGZpZWxkIG9mIHRoZSBjb25maWcgcGFyYW1ldGVyIG5ldGhlciB0aGF0IGNvbnRyb2xcclxuICogb3IgdGhlIGNvbnRyb2wgd2l0aCBhIG5hbWUgc3BlY2lmaWVkIGluIHRoZSBjb250cm9sVG9DaGVja05hbWUgcGFyYW1ldGVyIGhhcyBhIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgICAtIGZvcm0gZ3JvdXBcclxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgZmllbGQgbmFtZSwgYSBmaWVsZCBuYW1lIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciBzdHJpbmdcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgIC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkRXRoZXJWYWxpZGF0aW9uID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBjb25maWc6IHtcclxuICAgIHJlcXVpcmVkOiBzdHJpbmc7XHJcbiAgICBjaGVjazogc3RyaW5nO1xyXG4gICAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgfVxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgY29uc3QgcmVxdWlyZWQgPSBjb250cm9sPy5nZXQoY29uZmlnLnJlcXVpcmVkKSBhcyBBYnN0cmFjdENvbnRyb2w7XHJcbiAgY29uc3QgdG9DaGVjayA9IGNvbnRyb2w/LmdldChjb25maWcuY2hlY2spIGFzIEFic3RyYWN0Q29udHJvbDtcclxuICBpZiAocmVxdWlyZWQ/LnZhbHVlIHx8IHRvQ2hlY2s/LnZhbHVlKSB7XHJcbiAgICByZW1vdmVFcnJvcnMocmVxdWlyZWQsIFtcInJlcXVpcmVkXCJdKTtcclxuICAgIHJlbW92ZUVycm9ycyh0b0NoZWNrLCBbXCJyZXF1aXJlZFwiXSk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgZXJyb3JWYWwgPVxyXG4gICAgICBjb25maWcuZXJyb3IgPz9cclxuICAgICAgYFJlcXVpcmVkIGVpdGhlciAke2NvbmZpZy5yZXF1aXJlZH0gb3IgJHtjb25maWcuY2hlY2t9LmA7XHJcbiAgICBzZXRFcnJvcnMocmVxdWlyZWQsIHsgcmVxdWlyZWQ6IGVycm9yVmFsIH0pO1xyXG4gICAgc2V0RXJyb3JzKHRvQ2hlY2ssIHsgcmVxdWlyZWQ6IGVycm9yVmFsIH0pO1xyXG4gICAgcmV0dXJuIHsgW2Vycm9yVmFsXTogdHJ1ZSB9O1xyXG4gIH1cclxufTtcclxuIl19