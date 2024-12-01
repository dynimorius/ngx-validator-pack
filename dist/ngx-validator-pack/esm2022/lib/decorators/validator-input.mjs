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
 * An decorator which handles the input value in directives which extend the
 * {@link RegExpValidatorDirective} and have an expected input in the form of
 * {@link RegExpValidationConfig}.
 *
 * It will populate the error and the errorName values passed to it if it doesn't find
 * them in the input value.
 * @param regexp                      - Regular expression to check
 * @param errorName                   - parameter representing error name
 * @param error                       - parameter representing error value
 */
export function RegExpValidatorInput(regexp, errorName, error, logic) {
    return function (target, propertyKey) {
        let original = target[propertyKey];
        let newData = {
            ...original,
        };
        const getter = function () {
            newData = {
                regExp: regexp,
                logic: logic ?? '!!',
                errorName: newData.errorName ?? errorName,
                error: newData.error ?? error,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWlucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRvci1wYWNrL3NyYy9saWIvZGVjb3JhdG9ycy92YWxpZGF0b3ItaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBUUg7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxNQUFjLEVBQ2QsU0FBaUIsRUFDakIsS0FBYSxFQUNiLEtBQStCO0lBRS9CLE9BQU8sVUFBVSxNQUFXLEVBQUUsV0FBbUI7UUFFL0MsSUFBSSxRQUFRLEdBQXlCLE1BQU0sQ0FBQyxXQUF3QixDQUFDLENBQUM7UUFFdEUsSUFBSSxPQUFPLEdBQXlCO1lBQ2xDLEdBQUcsUUFBUTtTQUNaLENBQUM7UUFFRixNQUFNLE1BQU0sR0FBRztZQUNaLE9BQWtDLEdBQUc7Z0JBQ3BDLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEtBQUssRUFBRSxLQUFLLElBQUksSUFBSTtnQkFDcEIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLElBQUksU0FBUztnQkFDekMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSzthQUM5QixDQUFDO1lBQ0YsT0FBTyxPQUFpQyxDQUFDO1FBQzNDLENBQUMsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLFVBQVUsR0FBMkI7WUFDbEQsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNoQixDQUFDLENBQUM7UUFFRixNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUU7WUFDekMsR0FBRyxFQUFFLE1BQU07WUFDWCxHQUFHLEVBQUUsTUFBTTtTQUNaLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cbiAqL1xuXG5pbXBvcnQge1xuICBCYXNlVmFsaWRhdGlvbkNvbmZpZyxcbiAgUmVnRXhwVmFsaWRhdGlvbkNvbmZpZyxcbn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdmFsaWRhdGlvbi1jb25maWcuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBSZWdFeHBMb2dpY2FsT3BlcmF0aW9ucyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQGRlc2NyaXB0aW9uXG4gKiBBbiBkZWNvcmF0b3Igd2hpY2ggaGFuZGxlcyB0aGUgaW5wdXQgdmFsdWUgaW4gZGlyZWN0aXZlcyB3aGljaCBleHRlbmQgdGhlXG4gKiB7QGxpbmsgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlfSBhbmQgaGF2ZSBhbiBleHBlY3RlZCBpbnB1dCBpbiB0aGUgZm9ybSBvZlxuICoge0BsaW5rIFJlZ0V4cFZhbGlkYXRpb25Db25maWd9LlxuICpcbiAqIEl0IHdpbGwgcG9wdWxhdGUgdGhlIGVycm9yIGFuZCB0aGUgZXJyb3JOYW1lIHZhbHVlcyBwYXNzZWQgdG8gaXQgaWYgaXQgZG9lc24ndCBmaW5kXG4gKiB0aGVtIGluIHRoZSBpbnB1dCB2YWx1ZS5cbiAqIEBwYXJhbSByZWdleHAgICAgICAgICAgICAgICAgICAgICAgLSBSZWd1bGFyIGV4cHJlc3Npb24gdG8gY2hlY2tcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBSZWdFeHBWYWxpZGF0b3JJbnB1dChcbiAgcmVnZXhwOiBSZWdFeHAsXG4gIGVycm9yTmFtZTogc3RyaW5nLFxuICBlcnJvcjogc3RyaW5nLFxuICBsb2dpYz86IFJlZ0V4cExvZ2ljYWxPcGVyYXRpb25zLFxuKTogKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKSA9PiB2b2lkIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIHR5cGUgT2JqZWN0S2V5ID0ga2V5b2YgdHlwZW9mIHRhcmdldDtcbiAgICBsZXQgb3JpZ2luYWw6IEJhc2VWYWxpZGF0aW9uQ29uZmlnID0gdGFyZ2V0W3Byb3BlcnR5S2V5IGFzIE9iamVjdEtleV07XG5cbiAgICBsZXQgbmV3RGF0YTogQmFzZVZhbGlkYXRpb25Db25maWcgPSB7XG4gICAgICAuLi5vcmlnaW5hbCxcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0dGVyID0gZnVuY3Rpb24gKCk6IFJlZ0V4cFZhbGlkYXRpb25Db25maWcge1xuICAgICAgKG5ld0RhdGEgYXMgUmVnRXhwVmFsaWRhdGlvbkNvbmZpZykgPSB7XG4gICAgICAgIHJlZ0V4cDogcmVnZXhwLFxuICAgICAgICBsb2dpYzogbG9naWMgPz8gJyEhJyxcbiAgICAgICAgZXJyb3JOYW1lOiBuZXdEYXRhLmVycm9yTmFtZSA/PyBlcnJvck5hbWUsXG4gICAgICAgIGVycm9yOiBuZXdEYXRhLmVycm9yID8/IGVycm9yLFxuICAgICAgfTtcbiAgICAgIHJldHVybiBuZXdEYXRhIGFzIFJlZ0V4cFZhbGlkYXRpb25Db25maWc7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldHRlciA9IGZ1bmN0aW9uICh2YWw6IFJlZ0V4cFZhbGlkYXRpb25Db25maWcpIHtcbiAgICAgIG5ld0RhdGEgPSB2YWw7XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XG4gICAgICBnZXQ6IGdldHRlcixcbiAgICAgIHNldDogc2V0dGVyLFxuICAgIH0pO1xuICB9O1xufVxuIl19