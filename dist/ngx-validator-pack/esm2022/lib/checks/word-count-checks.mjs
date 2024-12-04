/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { checkFactory } from "../helpers/check-factory";
import { wordCountValidator } from "../validators/reactive-forms/reactive-forms-validators";
export const WordCountChecks = (min, max) => checkFactory([
    {
        validator: wordCountValidator,
        args: [min, '>='],
        errorName: 'minWordCount',
        errorMsg: 'The minimum number of words.'
    },
    {
        validator: wordCountValidator,
        args: [max, '<='],
        errorName: 'maxWordCount',
        errorMsg: 'The maximum number of words.'
    }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZC1jb3VudC1jaGVja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jaGVja3Mvd29yZC1jb3VudC1jaGVja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRTVGLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQztJQUN0RTtRQUNJLFNBQVMsRUFBRSxrQkFBa0I7UUFDN0IsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztRQUNqQixTQUFTLEVBQUUsY0FBYztRQUN6QixRQUFRLEVBQUUsOEJBQThCO0tBQzNDO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsa0JBQWtCO1FBQzdCLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7UUFDakIsU0FBUyxFQUFFLGNBQWM7UUFDekIsUUFBUSxFQUFFLDhCQUE4QjtLQUMzQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xuICovXG5cbmltcG9ydCB7IGNoZWNrRmFjdG9yeSB9IGZyb20gXCIuLi9oZWxwZXJzL2NoZWNrLWZhY3RvcnlcIjtcbmltcG9ydCB7IHdvcmRDb3VudFZhbGlkYXRvciB9IGZyb20gXCIuLi92YWxpZGF0b3JzL3JlYWN0aXZlLWZvcm1zL3JlYWN0aXZlLWZvcm1zLXZhbGlkYXRvcnNcIjtcblxuZXhwb3J0IGNvbnN0IFdvcmRDb3VudENoZWNrcyA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IGNoZWNrRmFjdG9yeShbXG4gICAge1xuICAgICAgICB2YWxpZGF0b3I6IHdvcmRDb3VudFZhbGlkYXRvcixcbiAgICAgICAgYXJnczogW21pbiwgJz49J10sXG4gICAgICAgIGVycm9yTmFtZTogJ21pbldvcmRDb3VudCcsXG4gICAgICAgIGVycm9yTXNnOiAnVGhlIG1pbmltdW0gbnVtYmVyIG9mIHdvcmRzLidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdmFsaWRhdG9yOiB3b3JkQ291bnRWYWxpZGF0b3IsXG4gICAgICAgIGFyZ3M6IFttYXgsICc8PSddLFxuICAgICAgICBlcnJvck5hbWU6ICdtYXhXb3JkQ291bnQnLFxuICAgICAgICBlcnJvck1zZzogJ1RoZSBtYXhpbXVtIG51bWJlciBvZiB3b3Jkcy4nXG4gICAgfVxuXSk7Il19