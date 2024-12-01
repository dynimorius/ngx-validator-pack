/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { checkFactory } from "../helpers/check-factory";
import { lengthValidator, regexpValidator } from "../validators/reactive-forms/reactive-forms-validators";
export const PasswordChecks = checkFactory([
    {
        validator: regexpValidator,
        args: [/[a-zA-Z]/, '!!'],
        errorName: 'noAlpha',
        errorMsg: 'A password must contain letters.',
    },
    {
        validator: regexpValidator,
        args: [/[a-z]/, '!!'],
        errorName: 'noLowercase',
        errorMsg: 'A password must contain lowercase letters.',
    },
    {
        validator: regexpValidator,
        args: [/[A-Z]/, '!!'],
        errorName: 'noUppercase',
        errorMsg: 'A password must contain uppercase letters.',
    },
    {
        validator: regexpValidator,
        args: [/\d/, '!!'],
        errorName: 'noNumeric',
        errorMsg: 'A password must contain numbers.',
    },
    {
        validator: regexpValidator,
        args: [/^[A-Za-z0-9 ]+$/, '!'],
        errorName: 'noSpecial',
        errorMsg: 'A password must contain special characters.',
    },
    {
        validator: regexpValidator,
        args: [/(?=.*[<>])/, '!'],
        errorName: 'noAlpha',
        errorMsg: 'A password must not contain < or > characters.',
    },
    {
        validator: lengthValidator,
        args: [8, '<'],
        errorName: 'minLength',
        errorMsg: 'A password is not long enough.',
    },
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtY2hlY2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRvci1wYWNrL3NyYy9saWIvY2hlY2tzL3Bhc3N3b3JkLWNoZWNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUUxRyxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDO0lBQ3ZDO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztRQUN4QixTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsa0NBQWtDO0tBQzdDO0lBQ0Q7UUFDRSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1FBQ3JCLFNBQVMsRUFBRSxhQUFhO1FBQ3hCLFFBQVEsRUFBRSw0Q0FBNEM7S0FDdkQ7SUFDRDtRQUNFLFNBQVMsRUFBRSxlQUFlO1FBQzFCLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7UUFDckIsU0FBUyxFQUFFLGFBQWE7UUFDeEIsUUFBUSxFQUFFLDRDQUE0QztLQUN2RDtJQUNEO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztRQUNsQixTQUFTLEVBQUUsV0FBVztRQUN0QixRQUFRLEVBQUUsa0NBQWtDO0tBQzdDO0lBQ0Q7UUFDRSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUM7UUFDOUIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsUUFBUSxFQUFFLDZDQUE2QztLQUN4RDtJQUNEO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQztRQUN6QixTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsZ0RBQWdEO0tBQzNEO0lBQ0Q7UUFDRSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQ2QsU0FBUyxFQUFFLFdBQVc7UUFDdEIsUUFBUSxFQUFFLGdDQUFnQztLQUMzQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xuICovXG5cbmltcG9ydCB7IGNoZWNrRmFjdG9yeSB9IGZyb20gXCIuLi9oZWxwZXJzL2NoZWNrLWZhY3RvcnlcIjtcbmltcG9ydCB7IGxlbmd0aFZhbGlkYXRvciwgcmVnZXhwVmFsaWRhdG9yIH0gZnJvbSBcIi4uL3ZhbGlkYXRvcnMvcmVhY3RpdmUtZm9ybXMvcmVhY3RpdmUtZm9ybXMtdmFsaWRhdG9yc1wiO1xuXG5leHBvcnQgY29uc3QgUGFzc3dvcmRDaGVja3MgPSBjaGVja0ZhY3RvcnkoW1xuICAgIHtcbiAgICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxuICAgICAgYXJnczogWy9bYS16QS1aXS8sICchISddLFxuICAgICAgZXJyb3JOYW1lOiAnbm9BbHBoYScsXG4gICAgICBlcnJvck1zZzogJ0EgcGFzc3dvcmQgbXVzdCBjb250YWluIGxldHRlcnMuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxuICAgICAgYXJnczogWy9bYS16XS8sICchISddLFxuICAgICAgZXJyb3JOYW1lOiAnbm9Mb3dlcmNhc2UnLFxuICAgICAgZXJyb3JNc2c6ICdBIHBhc3N3b3JkIG11c3QgY29udGFpbiBsb3dlcmNhc2UgbGV0dGVycy4nLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsaWRhdG9yOiByZWdleHBWYWxpZGF0b3IsXG4gICAgICBhcmdzOiBbL1tBLVpdLywgJyEhJ10sXG4gICAgICBlcnJvck5hbWU6ICdub1VwcGVyY2FzZScsXG4gICAgICBlcnJvck1zZzogJ0EgcGFzc3dvcmQgbXVzdCBjb250YWluIHVwcGVyY2FzZSBsZXR0ZXJzLicsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcbiAgICAgIGFyZ3M6IFsvXFxkLywgJyEhJ10sXG4gICAgICBlcnJvck5hbWU6ICdub051bWVyaWMnLFxuICAgICAgZXJyb3JNc2c6ICdBIHBhc3N3b3JkIG11c3QgY29udGFpbiBudW1iZXJzLicsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcbiAgICAgIGFyZ3M6IFsvXltBLVphLXowLTkgXSskLywgJyEnXSxcbiAgICAgIGVycm9yTmFtZTogJ25vU3BlY2lhbCcsXG4gICAgICBlcnJvck1zZzogJ0EgcGFzc3dvcmQgbXVzdCBjb250YWluIHNwZWNpYWwgY2hhcmFjdGVycy4nLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsaWRhdG9yOiByZWdleHBWYWxpZGF0b3IsXG4gICAgICBhcmdzOiBbLyg/PS4qWzw+XSkvLCAnISddLFxuICAgICAgZXJyb3JOYW1lOiAnbm9BbHBoYScsXG4gICAgICBlcnJvck1zZzogJ0EgcGFzc3dvcmQgbXVzdCBub3QgY29udGFpbiA8IG9yID4gY2hhcmFjdGVycy4nLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsaWRhdG9yOiBsZW5ndGhWYWxpZGF0b3IsXG4gICAgICBhcmdzOiBbOCwgJzwnXSxcbiAgICAgIGVycm9yTmFtZTogJ21pbkxlbmd0aCcsXG4gICAgICBlcnJvck1zZzogJ0EgcGFzc3dvcmQgaXMgbm90IGxvbmcgZW5vdWdoLicsXG4gICAgfSxcbiAgXSk7Il19