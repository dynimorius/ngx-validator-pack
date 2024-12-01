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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRvci1wYWNrL3NyYy9saWIvaGVscGVycy9lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBSUg7Ozs7Ozs7R0FPRztBQUNILE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxDQUN2QixPQUF3QixFQUN4QixLQUF1QixFQUNqQixFQUFFO0lBQ1IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDckQsQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsQ0FDMUIsT0FBd0IsRUFDeEIsSUFBYyxFQUNSLEVBQUU7SUFDUixNQUFNLGVBQWUsR0FBcUIsSUFBSSxDQUFDLE1BQU0sQ0FDbkQsQ0FBQyxNQUF3QixFQUFFLEdBQVcsRUFBb0IsRUFBRTtRQUMxRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDLEVBQ0QsRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FDdEIsQ0FBQztJQUVGLE9BQU8sQ0FBQyxTQUFTLENBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDakUsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xuICovXG5cbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQGRlc2NyaXB0aW9uXG4gKiBTZXRzIGFuIGVycm9yIG9uIGEgZ2l2ZW4gY29udHJvbFxuICpcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgLSBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCB0byBzZXQgdGhlIGVycm9yIHRvXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gZXJyb3IgY29udGVudCB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfVxuICovXG5leHBvcnQgY29uc3Qgc2V0RXJyb3JzID0gKFxuICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXG4gIGVycm9yOiBWYWxpZGF0aW9uRXJyb3JzXG4pOiB2b2lkID0+IHtcbiAgY29udHJvbC5zZXRFcnJvcnMoeyAuLi5jb250cm9sLmVycm9ycywgLi4uZXJyb3IgfSk7XG59O1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQGRlc2NyaXB0aW9uXG4gKiBSZW1vdmVzIGVycm9ycyBvbiBhIGdpdmVuIGNvbnRyb2xcbiAqXG4gKiBAcGFyYW0gY29udHJvbCAgICAgICAgICAgICAgICAgICAgIC0gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgZnJvbSB3aGljaFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIHJlbW92ZSBlcnJvclxuICogQHBhcmFtIGtleXMgICAgICAgICAgICAgICAgICAgICAgICAtIGFycmF5IG9mIGVycm9yIG5hbWVzXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVFcnJvcnMgPSAoXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcbiAga2V5czogc3RyaW5nW11cbik6IHZvaWQgPT4ge1xuICBjb25zdCByZW1haW5pbmdFcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgPSBrZXlzLnJlZHVjZShcbiAgICAoZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzLCBrZXk6IHN0cmluZyk6IFZhbGlkYXRpb25FcnJvcnMgPT4ge1xuICAgICAgZGVsZXRlIGVycm9yc1trZXldO1xuICAgICAgcmV0dXJuIGVycm9ycztcbiAgICB9LFxuICAgIHsgLi4uY29udHJvbC5lcnJvcnMgfVxuICApO1xuXG4gIGNvbnRyb2wuc2V0RXJyb3JzKFxuICAgIE9iamVjdC5rZXlzKHJlbWFpbmluZ0Vycm9ycykubGVuZ3RoID4gMCA/IHJlbWFpbmluZ0Vycm9ycyA6IG51bGxcbiAgKTtcbn07XG4iXX0=