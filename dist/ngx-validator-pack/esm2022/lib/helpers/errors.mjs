/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @description
 * Sets an error on a given control
 *
 * @param {AbstractControl}           - FromControl / AbstractControl to set the error to
 * @param {{ [key: string]: unknown }}- error content
 */
export const setErrors = (control, error) => {
    control.setErrors({ ...control.errors, ...error });
};
/**
 * @description
 * Removes errors on a given control
 *
 * @param {AbstractControl}           - FromControl / AbstractControl from which
 *                                      to remove error
 * @param {string[]}                  - list of error names
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRvci1wYWNrL3NyYy9saWIvaGVscGVycy9lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBSUg7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLENBQ3JCLE9BQXdCLEVBQ3hCLEtBQWlDLEVBQzNCLEVBQUU7SUFDUixPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQUE7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLENBQUMsT0FBd0IsRUFBRSxJQUFjLEVBQVEsRUFBRTtJQUMzRSxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUNqQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQTRCLEVBQUU7UUFDeEMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQyxFQUNEO1FBQ0UsR0FBRyxPQUFPLENBQUMsTUFBTTtLQUNsQixDQUNGLENBQUM7SUFDRixPQUFPLENBQUMsU0FBUyxDQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2pFLENBQUM7QUFDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFNldHMgYW4gZXJyb3Igb24gYSBnaXZlbiBjb250cm9sXHJcbiAqXHJcbiAqIEBwYXJhbSB7QWJzdHJhY3RDb250cm9sfSAgICAgICAgICAgLSBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCB0byBzZXQgdGhlIGVycm9yIHRvIFxyXG4gKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogdW5rbm93biB9fS0gZXJyb3IgY29udGVudFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEVycm9ycyA9IChcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIGVycm9yOiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfVxyXG4gICk6IHZvaWQgPT4ge1xyXG4gICAgY29udHJvbC5zZXRFcnJvcnMoeyAuLi5jb250cm9sLmVycm9ycywgLi4uZXJyb3IgfSk7XHJcbn1cclxuICBcclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBSZW1vdmVzIGVycm9ycyBvbiBhIGdpdmVuIGNvbnRyb2xcclxuICpcclxuICogQHBhcmFtIHtBYnN0cmFjdENvbnRyb2x9ICAgICAgICAgICAtIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGZyb20gd2hpY2hcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIHJlbW92ZSBlcnJvclxyXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSAgICAgICAgICAgICAgICAgIC0gbGlzdCBvZiBlcnJvciBuYW1lc1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUVycm9ycyA9IChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIGtleXM6IHN0cmluZ1tdKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCByZW1haW5pbmdFcnJvcnMgPSBrZXlzLnJlZHVjZShcclxuICAgICAgKGVycm9ycywga2V5KTogeyBbeDogc3RyaW5nXTogdW5rbm93biB9ID0+IHtcclxuICAgICAgICBkZWxldGUgZXJyb3JzW2tleV07XHJcbiAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIC4uLmNvbnRyb2wuZXJyb3JzLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29udHJvbC5zZXRFcnJvcnMoXHJcbiAgICAgIE9iamVjdC5rZXlzKHJlbWFpbmluZ0Vycm9ycykubGVuZ3RoID4gMCA/IHJlbWFpbmluZ0Vycm9ycyA6IG51bGxcclxuICAgICk7XHJcbiAgfSJdfQ==