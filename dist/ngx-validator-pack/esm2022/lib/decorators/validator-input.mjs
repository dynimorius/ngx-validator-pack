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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWlucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRvci1wYWNrL3NyYy9saWIvZGVjb3JhdG9ycy92YWxpZGF0b3ItaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBUUg7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxNQUFjLEVBQ2QsU0FBaUIsRUFDakIsS0FBYSxFQUNiLEtBQStCO0lBRS9CLE9BQU8sVUFBVSxNQUFXLEVBQUUsV0FBbUI7UUFFL0MsSUFBSSxRQUFRLEdBQXlCLE1BQU0sQ0FBQyxXQUF3QixDQUFDLENBQUM7UUFFdEUsSUFBSSxPQUFPLEdBQXlCO1lBQ2xDLEdBQUcsUUFBUTtTQUNaLENBQUM7UUFFRixNQUFNLE1BQU0sR0FBRztZQUNaLE9BQWtDLEdBQUc7Z0JBQ3BDLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEtBQUssRUFBRSxLQUFLLElBQUksSUFBSTtnQkFDcEIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLElBQUksU0FBUztnQkFDekMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSzthQUM5QixDQUFDO1lBQ0YsT0FBTyxPQUFpQyxDQUFDO1FBQzNDLENBQUMsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLFVBQVUsR0FBMkI7WUFDbEQsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNoQixDQUFDLENBQUM7UUFFRixNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUU7WUFDekMsR0FBRyxFQUFFLE1BQU07WUFDWCxHQUFHLEVBQUUsTUFBTTtTQUNaLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBCYXNlVmFsaWRhdGlvbkNvbmZpZyxcclxuICBSZWdFeHBWYWxpZGF0aW9uQ29uZmlnLFxyXG59IGZyb20gXCIuLi9pbnRlcmZhY2VzL3ZhbGlkYXRpb24tY29uZmlnLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBSZWdFeHBMb2dpY2FsT3BlcmF0aW9ucyB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQW4gZGVjb3JhdG9yIHdoaWNoIGhhbmRsZXMgdGhlIGlucHV0IHZhbHVlIGluIGRpcmVjdGl2ZXMgd2hpY2ggZXh0ZW5kIHRoZVxyXG4gKiB7QGxpbmsgUmVnRXhwVmFsaWRhdG9yRGlyZWN0aXZlfSBhbmQgaGF2ZSBhbiBleHBlY3RlZCBpbnB1dCBpbiB0aGUgZm9ybSBvZlxyXG4gKiB7QGxpbmsgUmVnRXhwVmFsaWRhdGlvbkNvbmZpZ30uXHJcbiAqXHJcbiAqIEl0IHdpbGwgcG9wdWxhdGUgdGhlIGVycm9yIGFuZCB0aGUgZXJyb3JOYW1lIHZhbHVlcyBwYXNzZWQgdG8gaXQgaWYgaXQgZG9lc24ndCBmaW5kXHJcbiAqIHRoZW0gaW4gdGhlIGlucHV0IHZhbHVlLlxyXG4gKiBAcGFyYW0gcmVnZXhwICAgICAgICAgICAgICAgICAgICAgIC0gUmVndWxhciBleHByZXNzaW9uIHRvIGNoZWNrXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWdFeHBWYWxpZGF0b3JJbnB1dChcclxuICByZWdleHA6IFJlZ0V4cCxcclxuICBlcnJvck5hbWU6IHN0cmluZyxcclxuICBlcnJvcjogc3RyaW5nLFxyXG4gIGxvZ2ljPzogUmVnRXhwTG9naWNhbE9wZXJhdGlvbnMsXHJcbik6ICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykgPT4gdm9pZCB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdHlwZSBPYmplY3RLZXkgPSBrZXlvZiB0eXBlb2YgdGFyZ2V0O1xyXG4gICAgbGV0IG9yaWdpbmFsOiBCYXNlVmFsaWRhdGlvbkNvbmZpZyA9IHRhcmdldFtwcm9wZXJ0eUtleSBhcyBPYmplY3RLZXldO1xyXG5cclxuICAgIGxldCBuZXdEYXRhOiBCYXNlVmFsaWRhdGlvbkNvbmZpZyA9IHtcclxuICAgICAgLi4ub3JpZ2luYWwsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldHRlciA9IGZ1bmN0aW9uICgpOiBSZWdFeHBWYWxpZGF0aW9uQ29uZmlnIHtcclxuICAgICAgKG5ld0RhdGEgYXMgUmVnRXhwVmFsaWRhdGlvbkNvbmZpZykgPSB7XHJcbiAgICAgICAgcmVnRXhwOiByZWdleHAsXHJcbiAgICAgICAgbG9naWM6IGxvZ2ljID8/ICchIScsXHJcbiAgICAgICAgZXJyb3JOYW1lOiBuZXdEYXRhLmVycm9yTmFtZSA/PyBlcnJvck5hbWUsXHJcbiAgICAgICAgZXJyb3I6IG5ld0RhdGEuZXJyb3IgPz8gZXJyb3IsXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiBuZXdEYXRhIGFzIFJlZ0V4cFZhbGlkYXRpb25Db25maWc7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldHRlciA9IGZ1bmN0aW9uICh2YWw6IFJlZ0V4cFZhbGlkYXRpb25Db25maWcpIHtcclxuICAgICAgbmV3RGF0YSA9IHZhbDtcclxuICAgIH07XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIHtcclxuICAgICAgZ2V0OiBnZXR0ZXIsXHJcbiAgICAgIHNldDogc2V0dGVyLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG4iXX0=