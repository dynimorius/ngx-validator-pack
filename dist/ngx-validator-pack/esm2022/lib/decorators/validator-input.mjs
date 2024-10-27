/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @description
 * An decorator which handles the input value in directives which extend the
 * {@link RegExpValidatorDirective} and have an expected input in the form of
 * {@link RegExpValidationInput}.
 *
 * It will populate the error and the errorName values passed to it if it doesn't find
 * them in the input value.
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - parameter representing error name
 * @param {string}                    - parameter representing error value
 */
export function RegExpValidatorInput(regexp, errorName, error) {
    return function (target, propertyKey) {
        let original = target[propertyKey];
        let newData = {
            ...original
        };
        const getter = function () {
            newData = {
                regExp: regexp,
                errorName: newData.errorName ?? errorName,
                error: newData.error ?? error
            };
            return newData;
        };
        const setter = function (val) {
            newData = val;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWlucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRvci1wYWNrL3NyYy9saWIvZGVjb3JhdG9ycy92YWxpZGF0b3ItaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBSUg7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLE1BQWMsRUFDZCxTQUFpQixFQUNqQixLQUFhO0lBRWIsT0FBTyxVQUFVLE1BQVcsRUFBRSxXQUFtQjtRQUUvQyxJQUFJLFFBQVEsR0FBd0IsTUFBTSxDQUFDLFdBQXdCLENBQUMsQ0FBQztRQUVyRSxJQUFJLE9BQU8sR0FBd0I7WUFDbEMsR0FBRyxRQUFRO1NBQ1gsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHO1lBQ1osT0FBaUMsR0FBRztnQkFDbkMsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLElBQUksU0FBUztnQkFDekMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSzthQUM5QixDQUFBO1lBQ0QsT0FBTyxPQUFnQyxDQUFDO1FBQzFDLENBQUMsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLFVBQVUsR0FBMEI7WUFDakQsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNoQixDQUFDLENBQUM7UUFFRixNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUU7WUFDekMsR0FBRyxFQUFFLE1BQU07WUFDWCxHQUFHLEVBQUUsTUFBTTtTQUNaLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQmFzZVZhbGlkYXRpb25JbnB1dCwgUmVnRXhwVmFsaWRhdGlvbklucHV0IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZGlyZWN0aXZlLWlucHV0LmludGVyZmFjZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBbiBkZWNvcmF0b3Igd2hpY2ggaGFuZGxlcyB0aGUgaW5wdXQgdmFsdWUgaW4gZGlyZWN0aXZlcyB3aGljaCBleHRlbmQgdGhlIFxyXG4gKiB7QGxpbmsgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlfSBhbmQgaGF2ZSBhbiBleHBlY3RlZCBpbnB1dCBpbiB0aGUgZm9ybSBvZiBcclxuICoge0BsaW5rIFJlZ0V4cFZhbGlkYXRpb25JbnB1dH0uXHJcbiAqIFxyXG4gKiBJdCB3aWxsIHBvcHVsYXRlIHRoZSBlcnJvciBhbmQgdGhlIGVycm9yTmFtZSB2YWx1ZXMgcGFzc2VkIHRvIGl0IGlmIGl0IGRvZXNuJ3QgZmluZCBcclxuICogdGhlbSBpbiB0aGUgaW5wdXQgdmFsdWUuXHJcbiAqIEBwYXJhbSB7UmVnRXhwfSAgICAgICAgICAgICAgICAgICAgLSBSZWd1bGFyIGV4cHJlc3Npb24gdG8gY2hlY2tcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZ0V4cFZhbGlkYXRvcklucHV0KFxyXG4gIHJlZ2V4cDogUmVnRXhwLFxyXG4gIGVycm9yTmFtZTogc3RyaW5nLFxyXG4gIGVycm9yOiBzdHJpbmdcclxuKTogKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKSA9PiB2b2lkIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0eXBlIE9iamVjdEtleSA9IGtleW9mIHR5cGVvZiB0YXJnZXQ7XHJcbiAgICBsZXQgb3JpZ2luYWw6IEJhc2VWYWxpZGF0aW9uSW5wdXQgPSB0YXJnZXRbcHJvcGVydHlLZXkgYXMgT2JqZWN0S2V5XTtcclxuICAgIFxyXG4gICAgbGV0IG5ld0RhdGE6IEJhc2VWYWxpZGF0aW9uSW5wdXQgPSB7XHJcbiAgICAgLi4ub3JpZ2luYWxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0dGVyID0gZnVuY3Rpb24gKCk6IFJlZ0V4cFZhbGlkYXRpb25JbnB1dCB7XHJcbiAgICAgIChuZXdEYXRhIGFzIFJlZ0V4cFZhbGlkYXRpb25JbnB1dCkgPSB7XHJcbiAgICAgICAgcmVnRXhwOiByZWdleHAsXHJcbiAgICAgICAgZXJyb3JOYW1lOiBuZXdEYXRhLmVycm9yTmFtZSA/PyBlcnJvck5hbWUsXHJcbiAgICAgICAgZXJyb3I6IG5ld0RhdGEuZXJyb3IgPz8gZXJyb3JcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3RGF0YSBhcyBSZWdFeHBWYWxpZGF0aW9uSW5wdXQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldHRlciA9IGZ1bmN0aW9uICh2YWw6IFJlZ0V4cFZhbGlkYXRpb25JbnB1dCkge1xyXG4gICAgICBuZXdEYXRhID0gdmFsO1xyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwge1xyXG4gICAgICBnZXQ6IGdldHRlcixcclxuICAgICAgc2V0OiBzZXR0ZXIsXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcbiJdfQ==