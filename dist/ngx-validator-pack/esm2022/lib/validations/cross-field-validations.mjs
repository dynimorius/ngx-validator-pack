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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvc3MtZmllbGQtdmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi92YWxpZGF0aW9ucy9jcm9zcy1maWVsZC12YWxpZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTVEOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLENBQ2xDLE9BQXdCLEVBQ3hCLE1BSUMsRUFDd0IsRUFBRTtJQUMzQixNQUFNLFFBQVEsR0FBRyxPQUFPLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQW9CLENBQUM7SUFDbEUsTUFBTSxPQUFPLEdBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFvQixDQUFDO0lBQzlELElBQUksUUFBUSxFQUFFLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUN2QyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNyQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7U0FBTSxDQUFDO1FBQ04sTUFBTSxRQUFRLEdBQ1osTUFBTSxDQUFDLEtBQUs7WUFDWixlQUFlLE1BQU0sQ0FBQyxRQUFRLGdCQUFnQixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDaEUsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRyxDQUNyQyxPQUF3QixFQUN4QixNQUlDLEVBQ3dCLEVBQUU7SUFDM0IsTUFBTSxRQUFRLEdBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFvQixDQUFDO0lBQ2xFLE1BQU0sT0FBTyxHQUFHLE9BQU8sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBb0IsQ0FBQztJQUM5RCxJQUFJLFFBQVEsRUFBRSxLQUFLLElBQUksT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ3RDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztTQUFNLENBQUM7UUFDTixNQUFNLFFBQVEsR0FDWixNQUFNLENBQUMsS0FBSztZQUNaLGVBQWUsTUFBTSxDQUFDLFFBQVEsb0JBQW9CLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQztRQUNwRSxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDNUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHLENBQ3JDLE9BQXdCLEVBQ3hCLE1BSUMsRUFDd0IsRUFBRTtJQUMzQixNQUFNLFFBQVEsR0FBRyxPQUFPLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQW9CLENBQUM7SUFDbEUsTUFBTSxPQUFPLEdBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFvQixDQUFDO0lBQzlELElBQUksUUFBUSxFQUFFLEtBQUssSUFBSSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDdEMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDckMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO1NBQU0sQ0FBQztRQUNOLE1BQU0sUUFBUSxHQUNaLE1BQU0sQ0FBQyxLQUFLO1lBQ1osbUJBQW1CLE1BQU0sQ0FBQyxRQUFRLE9BQU8sTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQzNELFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM1QyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDM0MsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xuICovXG5cbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgcmVtb3ZlRXJyb3JzLCBzZXRFcnJvcnMgfSBmcm9tIFwiLi4vaGVscGVycy9lcnJvcnNcIjtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqIEBkZXNjcmlwdGlvblxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIGFzc2lnbnMgYSByZXF1aXJlZCBlcnJvciB0byB0aGUgY29udHJvbHMgd2l0aCBhIG5hbWUgdGhhdCBcbiAqIHdhcyBzcGVjaWZpZWQgaW4gdGhlIHJlcXVpcmVkQ29udHJvbE5hbWUgZmlsZWQgb2YgdGhlIGNvbmZpZyBwYXJhbWV0ZXIgaWYgdGhlIGNvbnRyb2wgXG4gKiB3aXRoIGEgbmFtZSBzcGVjaWZpZWQgaW4gdGhlIGNvbnRyb2xUb0NoZWNrTmFtZSBwYXJhbWV0ZXIgaGFzIG5vIHZhbHVlLlxuICpcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgIC0gZm9ybSBncm91cFxuICogQHBhcmFtIGNvbmZpZyAgICAgICAgICAgICAgICAgICAgICAgLSBjb25maWcgcGFyYW1ldGVyLCBjb25zaXN0cyBvZiBhXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIGZpZWxkIG5hbWUsIGEgZmllbGQgbmFtZSB0byBjaGVjayBhbmQgb3B0aW9uYWwgXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIHN0cmluZ1xuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAgIC0gVmFsaWRhdGlvbiBlcnJvclxuICovXG5leHBvcnQgY29uc3QgcmVxdWlyZWRJZlZhbGlkYXRpb24gPSAoXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcbiAgY29uZmlnOiB7XG4gICAgcmVxdWlyZWQ6IHN0cmluZztcbiAgICBjaGVjazogc3RyaW5nO1xuICAgIGVycm9yPzogc3RyaW5nO1xuICB9XG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gIGNvbnN0IHJlcXVpcmVkID0gY29udHJvbD8uZ2V0KGNvbmZpZy5yZXF1aXJlZCkgYXMgQWJzdHJhY3RDb250cm9sO1xuICBjb25zdCB0b0NoZWNrID0gY29udHJvbD8uZ2V0KGNvbmZpZy5jaGVjaykgYXMgQWJzdHJhY3RDb250cm9sO1xuICBpZiAocmVxdWlyZWQ/LnZhbHVlIHx8ICF0b0NoZWNrPy52YWx1ZSkge1xuICAgIHJlbW92ZUVycm9ycyhyZXF1aXJlZCwgW1wicmVxdWlyZWRcIl0pO1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGVycm9yVmFsID1cbiAgICAgIGNvbmZpZy5lcnJvciA/P1xuICAgICAgYFJlcXVpcmVkIGlzICR7Y29uZmlnLnJlcXVpcmVkfSB3aGVuIGhhdmluZyAke2NvbmZpZy5jaGVja30uYDtcbiAgICBzZXRFcnJvcnMocmVxdWlyZWQsIHsgcmVxdWlyZWQ6IGVycm9yVmFsIH0pO1xuICAgIHJldHVybiB7IFtlcnJvclZhbF06IHRydWUgfTtcbiAgfVxufTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqIEBkZXNjcmlwdGlvblxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIGFzc2lnbnMgYSByZXF1aXJlZCBlcnJvciB0byB0aGUgY29udHJvbHMgd2l0aCBhIG5hbWUgdGhhdCBcbiAqIHdhcyBzcGVjaWZpZWQgaW4gdGhlIHJlcXVpcmVkQ29udHJvbE5hbWUgZmllbGQgb2YgdGhlIGNvbmZpZyBwYXJhbWV0ZXIgaWYgdGhlIGNvbnRyb2wgXG4gKiB3aXRoIGEgbmFtZSBzcGVjaWZpZWQgaW4gdGhlIGNvbnRyb2xUb0NoZWNrTmFtZSBwYXJhbWV0ZXIgaGFzIGEgdmFsdWUuXG4gKlxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGdyb3VwXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgZmllbGQgbmFtZSwgYSBmaWVsZCBuYW1lIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3Igc3RyaW5nXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCByZXF1aXJlZElmTm90VmFsaWRhdGlvbiA9IChcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxuICBjb25maWc6IHtcbiAgICByZXF1aXJlZDogc3RyaW5nO1xuICAgIGNoZWNrOiBzdHJpbmc7XG4gICAgZXJyb3I/OiBzdHJpbmc7XG4gIH1cbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgY29uc3QgcmVxdWlyZWQgPSBjb250cm9sPy5nZXQoY29uZmlnLnJlcXVpcmVkKSBhcyBBYnN0cmFjdENvbnRyb2w7XG4gIGNvbnN0IHRvQ2hlY2sgPSBjb250cm9sPy5nZXQoY29uZmlnLmNoZWNrKSBhcyBBYnN0cmFjdENvbnRyb2w7XG4gIGlmIChyZXF1aXJlZD8udmFsdWUgfHwgdG9DaGVjaz8udmFsdWUpIHtcbiAgICByZW1vdmVFcnJvcnMocmVxdWlyZWQsIFtcInJlcXVpcmVkXCJdKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBlcnJvclZhbCA9XG4gICAgICBjb25maWcuZXJyb3IgPz9cbiAgICAgIGBSZXF1aXJlZCBpcyAke2NvbmZpZy5yZXF1aXJlZH0gd2hlbiBub3QgaGF2aW5nICR7Y29uZmlnLmNoZWNrfS5gO1xuICAgIHNldEVycm9ycyhyZXF1aXJlZCwgeyByZXF1aXJlZDogZXJyb3JWYWwgfSk7XG4gICAgcmV0dXJuIHsgW2Vycm9yVmFsXTogdHJ1ZSB9O1xuICB9XG59O1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQGRlc2NyaXB0aW9uXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggYXNzaWducyBhIHJlcXVpcmVkIGVycm9yIHRvIHRoZSBjb250cm9scyB3aXRoIGEgbmFtZSB0aGF0IFxuICogd2FzIHNwZWNpZmllZCBpbiB0aGUgcmVxdWlyZWRDb250cm9sTmFtZSBmaWVsZCBvZiB0aGUgY29uZmlnIHBhcmFtZXRlciBuZXRoZXIgdGhhdCBjb250cm9sXG4gKiBvciB0aGUgY29udHJvbCB3aXRoIGEgbmFtZSBzcGVjaWZpZWQgaW4gdGhlIGNvbnRyb2xUb0NoZWNrTmFtZSBwYXJhbWV0ZXIgaGFzIGEgdmFsdWUuXG4gKlxuICogQHBhcmFtIGNvbnRyb2wgICAgICAgICAgICAgICAgICAgICAgLSBmb3JtIGdyb3VwXG4gKiBAcGFyYW0gY29uZmlnICAgICAgICAgICAgICAgICAgICAgICAtIGNvbmZpZyBwYXJhbWV0ZXIsIGNvbnNpc3RzIG9mIGFcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgZmllbGQgbmFtZSwgYSBmaWVsZCBuYW1lIHRvIGNoZWNrIGFuZCBvcHRpb25hbCBcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3Igc3RyaW5nXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9ICAgLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCByZXF1aXJlZEV0aGVyVmFsaWRhdGlvbiA9IChcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxuICBjb25maWc6IHtcbiAgICByZXF1aXJlZDogc3RyaW5nO1xuICAgIGNoZWNrOiBzdHJpbmc7XG4gICAgZXJyb3I/OiBzdHJpbmc7XG4gIH1cbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgY29uc3QgcmVxdWlyZWQgPSBjb250cm9sPy5nZXQoY29uZmlnLnJlcXVpcmVkKSBhcyBBYnN0cmFjdENvbnRyb2w7XG4gIGNvbnN0IHRvQ2hlY2sgPSBjb250cm9sPy5nZXQoY29uZmlnLmNoZWNrKSBhcyBBYnN0cmFjdENvbnRyb2w7XG4gIGlmIChyZXF1aXJlZD8udmFsdWUgfHwgdG9DaGVjaz8udmFsdWUpIHtcbiAgICByZW1vdmVFcnJvcnMocmVxdWlyZWQsIFtcInJlcXVpcmVkXCJdKTtcbiAgICByZW1vdmVFcnJvcnModG9DaGVjaywgW1wicmVxdWlyZWRcIl0pO1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGVycm9yVmFsID1cbiAgICAgIGNvbmZpZy5lcnJvciA/P1xuICAgICAgYFJlcXVpcmVkIGVpdGhlciAke2NvbmZpZy5yZXF1aXJlZH0gb3IgJHtjb25maWcuY2hlY2t9LmA7XG4gICAgc2V0RXJyb3JzKHJlcXVpcmVkLCB7IHJlcXVpcmVkOiBlcnJvclZhbCB9KTtcbiAgICBzZXRFcnJvcnModG9DaGVjaywgeyByZXF1aXJlZDogZXJyb3JWYWwgfSk7XG4gICAgcmV0dXJuIHsgW2Vycm9yVmFsXTogdHJ1ZSB9O1xuICB9XG59O1xuIl19