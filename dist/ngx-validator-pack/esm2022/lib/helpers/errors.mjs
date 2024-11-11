/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @internal
 * @description
 * Sets an error on a given control
 *
 * @param control                     - FromControl / AbstractControl to set the error to
 * @param error                       - error content { [key: string]: unknown }
 */
export const setErrors = (control, error) => {
    control.setErrors({ ...control.errors, ...error });
};
/**
 * @internal
 * @description
 * Removes errors on a given control
 *
 * @param control                     - FromControl / AbstractControl from which
 *                                      to remove error
 * @param keys                        - array of error names
 */
export const removeErrors = (control, keys) => {
    const remainingErrors = keys.reduce((errors, key) => {
        delete errors[key];
        return errors;
    }, { ...control.errors });
    control.setErrors(Object.keys(remainingErrors).length > 0 ? remainingErrors : null);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRvci1wYWNrL3NyYy9saWIvaGVscGVycy9lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBSUg7Ozs7Ozs7R0FPRztBQUNILE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxDQUN2QixPQUF3QixFQUN4QixLQUF1QixFQUNqQixFQUFFO0lBQ1IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDckQsQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsQ0FDMUIsT0FBd0IsRUFDeEIsSUFBYyxFQUNSLEVBQUU7SUFDUixNQUFNLGVBQWUsR0FBcUIsSUFBSSxDQUFDLE1BQU0sQ0FDbkQsQ0FBQyxNQUF3QixFQUFFLEdBQVcsRUFBb0IsRUFBRTtRQUMxRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDLEVBQ0QsRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FDdEIsQ0FBQztJQUVGLE9BQU8sQ0FBQyxTQUFTLENBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDakUsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cclxuICovXHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFNldHMgYW4gZXJyb3Igb24gYSBnaXZlbiBjb250cm9sXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgLSBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCB0byBzZXQgdGhlIGVycm9yIHRvXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBlcnJvciBjb250ZW50IHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9XHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0RXJyb3JzID0gKFxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICBlcnJvcjogVmFsaWRhdGlvbkVycm9yc1xyXG4pOiB2b2lkID0+IHtcclxuICBjb250cm9sLnNldEVycm9ycyh7IC4uLmNvbnRyb2wuZXJyb3JzLCAuLi5lcnJvciB9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFJlbW92ZXMgZXJyb3JzIG9uIGEgZ2l2ZW4gY29udHJvbFxyXG4gKlxyXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgIC0gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgZnJvbSB3aGljaFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gcmVtb3ZlIGVycm9yXHJcbiAqIEBwYXJhbSBrZXlzICAgICAgICAgICAgICAgICAgICAgICAgLSBhcnJheSBvZiBlcnJvciBuYW1lc1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUVycm9ycyA9IChcclxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAga2V5czogc3RyaW5nW11cclxuKTogdm9pZCA9PiB7XHJcbiAgY29uc3QgcmVtYWluaW5nRXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzID0ga2V5cy5yZWR1Y2UoXHJcbiAgICAoZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzLCBrZXk6IHN0cmluZyk6IFZhbGlkYXRpb25FcnJvcnMgPT4ge1xyXG4gICAgICBkZWxldGUgZXJyb3JzW2tleV07XHJcbiAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICB9LFxyXG4gICAgeyAuLi5jb250cm9sLmVycm9ycyB9XHJcbiAgKTtcclxuXHJcbiAgY29udHJvbC5zZXRFcnJvcnMoXHJcbiAgICBPYmplY3Qua2V5cyhyZW1haW5pbmdFcnJvcnMpLmxlbmd0aCA+IDAgPyByZW1haW5pbmdFcnJvcnMgOiBudWxsXHJcbiAgKTtcclxufTtcclxuIl19