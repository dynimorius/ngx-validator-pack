/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @internal
 */
export const test = (regexp, value, logic) => {
    const operations = {
        '!': () => !regexp.test(value),
        '!!': () => regexp.test(value),
        'match': () => !!regexp.exec(value)
    };
    return operations[logic]();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXhwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRvci1wYWNrL3NyYy9saWIvaGVscGVycy9yZWdleHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBSUg7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFjLEVBQUUsS0FBYSxFQUFFLEtBQThCLEVBQVcsRUFBRTtJQUM3RixNQUFNLFVBQVUsR0FBRztRQUNqQixHQUFHLEVBQUUsR0FBWSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2QyxJQUFJLEVBQUUsR0FBWSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkMsT0FBTyxFQUFFLEdBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM3QyxDQUFDO0lBRUYsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUM3QixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cbiAqL1xuXG5pbXBvcnQgeyBSZWdFeHBMb2dpY2FsT3BlcmF0aW9ucyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgdGVzdCA9IChyZWdleHA6IFJlZ0V4cCwgdmFsdWU6IHN0cmluZywgbG9naWM6IFJlZ0V4cExvZ2ljYWxPcGVyYXRpb25zKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IG9wZXJhdGlvbnMgPSB7XG4gICAgJyEnOiAoKTogYm9vbGVhbiA9PiAhcmVnZXhwLnRlc3QodmFsdWUpLFxuICAgICchISc6ICgpOiBib29sZWFuID0+IHJlZ2V4cC50ZXN0KHZhbHVlKSxcbiAgICAnbWF0Y2gnOiAoKTogYm9vbGVhbiA9PiAhIXJlZ2V4cC5leGVjKHZhbHVlKVxuICB9O1xuXG4gIHJldHVybiBvcGVyYXRpb25zW2xvZ2ljXSgpO1xufSJdfQ==