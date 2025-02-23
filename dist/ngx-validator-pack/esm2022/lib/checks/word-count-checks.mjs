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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZC1jb3VudC1jaGVja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jaGVja3Mvd29yZC1jb3VudC1jaGVja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRTVGLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQztJQUN0RTtRQUNJLFNBQVMsRUFBRSxrQkFBa0I7UUFDN0IsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUNoQixTQUFTLEVBQUUsY0FBYztRQUN6QixRQUFRLEVBQUUsa0NBQWtDLEdBQUcsR0FBRztLQUNyRDtJQUNEO1FBQ0ksU0FBUyxFQUFFLGtCQUFrQjtRQUM3QixJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQ2hCLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFFBQVEsRUFBRSxrQ0FBa0MsR0FBRyxHQUFHO0tBQ3JEO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IGNoZWNrRmFjdG9yeSB9IGZyb20gXCIuLi9oZWxwZXJzL2NoZWNrLWZhY3RvcnlcIjtcclxuaW1wb3J0IHsgd29yZENvdW50VmFsaWRhdG9yIH0gZnJvbSBcIi4uL3ZhbGlkYXRvcnMvcmVhY3RpdmUtZm9ybXMvcmVhY3RpdmUtZm9ybXMtdmFsaWRhdG9yc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdvcmRDb3VudENoZWNrcyA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IGNoZWNrRmFjdG9yeShbXHJcbiAgICB7XHJcbiAgICAgICAgdmFsaWRhdG9yOiB3b3JkQ291bnRWYWxpZGF0b3IsXHJcbiAgICAgICAgYXJnczogW21pbiwgJz4nXSxcclxuICAgICAgICBlcnJvck5hbWU6ICdtaW5Xb3JkQ291bnQnLFxyXG4gICAgICAgIGVycm9yTXNnOiBgVGhlIG1pbmltdW0gbnVtYmVyIG9mIHdvcmRzIGlzICR7bWlufS5gXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHZhbGlkYXRvcjogd29yZENvdW50VmFsaWRhdG9yLFxyXG4gICAgICAgIGFyZ3M6IFttYXgsICc8J10sXHJcbiAgICAgICAgZXJyb3JOYW1lOiAnbWF4V29yZENvdW50JyxcclxuICAgICAgICBlcnJvck1zZzogYFRoZSBtYXhpbXVtIG51bWJlciBvZiB3b3JkcyBpcyAke21heH0uYFxyXG4gICAgfVxyXG5dKTsiXX0=