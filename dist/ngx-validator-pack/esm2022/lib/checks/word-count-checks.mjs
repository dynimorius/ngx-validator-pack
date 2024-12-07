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
        args: [min, '>'],
        errorName: 'minWordCount',
        errorMsg: `The minimum number of words is ${min}.`
    },
    {
        validator: wordCountValidator,
        args: [max, '<'],
        errorName: 'maxWordCount',
        errorMsg: `The maximum number of words is ${max}.`
    }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZC1jb3VudC1jaGVja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jaGVja3Mvd29yZC1jb3VudC1jaGVja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRTVGLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQztJQUN0RTtRQUNJLFNBQVMsRUFBRSxrQkFBa0I7UUFDN0IsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUNoQixTQUFTLEVBQUUsY0FBYztRQUN6QixRQUFRLEVBQUUsa0NBQWtDLEdBQUcsR0FBRztLQUNyRDtJQUNEO1FBQ0ksU0FBUyxFQUFFLGtCQUFrQjtRQUM3QixJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQ2hCLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFFBQVEsRUFBRSxrQ0FBa0MsR0FBRyxHQUFHO0tBQ3JEO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXG4gKi9cblxuaW1wb3J0IHsgY2hlY2tGYWN0b3J5IH0gZnJvbSBcIi4uL2hlbHBlcnMvY2hlY2stZmFjdG9yeVwiO1xuaW1wb3J0IHsgd29yZENvdW50VmFsaWRhdG9yIH0gZnJvbSBcIi4uL3ZhbGlkYXRvcnMvcmVhY3RpdmUtZm9ybXMvcmVhY3RpdmUtZm9ybXMtdmFsaWRhdG9yc1wiO1xuXG5leHBvcnQgY29uc3QgV29yZENvdW50Q2hlY2tzID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4gY2hlY2tGYWN0b3J5KFtcbiAgICB7XG4gICAgICAgIHZhbGlkYXRvcjogd29yZENvdW50VmFsaWRhdG9yLFxuICAgICAgICBhcmdzOiBbbWluLCAnPiddLFxuICAgICAgICBlcnJvck5hbWU6ICdtaW5Xb3JkQ291bnQnLFxuICAgICAgICBlcnJvck1zZzogYFRoZSBtaW5pbXVtIG51bWJlciBvZiB3b3JkcyBpcyAke21pbn0uYFxuICAgIH0sXG4gICAge1xuICAgICAgICB2YWxpZGF0b3I6IHdvcmRDb3VudFZhbGlkYXRvcixcbiAgICAgICAgYXJnczogW21heCwgJzwnXSxcbiAgICAgICAgZXJyb3JOYW1lOiAnbWF4V29yZENvdW50JyxcbiAgICAgICAgZXJyb3JNc2c6IGBUaGUgbWF4aW11bSBudW1iZXIgb2Ygd29yZHMgaXMgJHttYXh9LmBcbiAgICB9XG5dKTsiXX0=