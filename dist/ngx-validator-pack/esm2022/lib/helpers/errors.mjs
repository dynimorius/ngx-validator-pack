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
    }, {
        ...control.errors,
    });
    control.setErrors(Object.keys(remainingErrors).length > 0 ? remainingErrors : null);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRvci1wYWNrL3NyYy9saWIvaGVscGVycy9lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBSUg7Ozs7Ozs7R0FPRztBQUNILE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxDQUNyQixPQUF3QixFQUN4QixLQUFpQyxFQUMzQixFQUFFO0lBQ1IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDdkQsQ0FBQyxDQUFBO0FBRUQ7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxPQUF3QixFQUFFLElBQWMsRUFBUSxFQUFFO0lBQzNFLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQ2pDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBNEIsRUFBRTtRQUN4QyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDLEVBQ0Q7UUFDRSxHQUFHLE9BQU8sQ0FBQyxNQUFNO0tBQ2xCLENBQ0YsQ0FBQztJQUNGLE9BQU8sQ0FBQyxTQUFTLENBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDakUsQ0FBQztBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cclxuICovXHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFNldHMgYW4gZXJyb3Igb24gYSBnaXZlbiBjb250cm9sXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgLSBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCB0byBzZXQgdGhlIGVycm9yIHRvIFxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gZXJyb3IgY29udGVudCB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEVycm9ycyA9IChcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIGVycm9yOiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfVxyXG4gICk6IHZvaWQgPT4ge1xyXG4gICAgY29udHJvbC5zZXRFcnJvcnMoeyAuLi5jb250cm9sLmVycm9ycywgLi4uZXJyb3IgfSk7XHJcbn1cclxuICBcclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUmVtb3ZlcyBlcnJvcnMgb24gYSBnaXZlbiBjb250cm9sXHJcbiAqXHJcbiAqIEBwYXJhbSBjb250cm9sICAgICAgICAgICAgICAgICAgICAgLSBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBmcm9tIHdoaWNoXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byByZW1vdmUgZXJyb3JcclxuICogQHBhcmFtIGtleXMgICAgICAgICAgICAgICAgICAgICAgICAtIGFycmF5IG9mIGVycm9yIG5hbWVzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlRXJyb3JzID0gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwga2V5czogc3RyaW5nW10pOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IHJlbWFpbmluZ0Vycm9ycyA9IGtleXMucmVkdWNlKFxyXG4gICAgICAoZXJyb3JzLCBrZXkpOiB7IFt4OiBzdHJpbmddOiB1bmtub3duIH0gPT4ge1xyXG4gICAgICAgIGRlbGV0ZSBlcnJvcnNba2V5XTtcclxuICAgICAgICByZXR1cm4gZXJyb3JzO1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgLi4uY29udHJvbC5lcnJvcnMsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb250cm9sLnNldEVycm9ycyhcclxuICAgICAgT2JqZWN0LmtleXMocmVtYWluaW5nRXJyb3JzKS5sZW5ndGggPiAwID8gcmVtYWluaW5nRXJyb3JzIDogbnVsbFxyXG4gICAgKTtcclxuICB9Il19