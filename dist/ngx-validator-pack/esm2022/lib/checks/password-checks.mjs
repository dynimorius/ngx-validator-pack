/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { checkFactory } from "../helpers/check-factory";
import { lengthValidator, regexpValidator } from "../validators/reactive-forms/reactive-forms-validators";
export const PasswordChecks = () => checkFactory([
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
        errorName: 'greaterOrLessThen',
        errorMsg: 'A password must not contain < or > characters.',
    },
    {
        validator: lengthValidator,
        args: [8, '<'],
        errorName: 'minLength',
        errorMsg: 'A password is not long enough.',
    },
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtY2hlY2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRvci1wYWNrL3NyYy9saWIvY2hlY2tzL3Bhc3N3b3JkLWNoZWNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUUxRyxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQzdDO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztRQUN4QixTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsa0NBQWtDO0tBQzdDO0lBQ0Q7UUFDRSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1FBQ3JCLFNBQVMsRUFBRSxhQUFhO1FBQ3hCLFFBQVEsRUFBRSw0Q0FBNEM7S0FDdkQ7SUFDRDtRQUNFLFNBQVMsRUFBRSxlQUFlO1FBQzFCLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7UUFDckIsU0FBUyxFQUFFLGFBQWE7UUFDeEIsUUFBUSxFQUFFLDRDQUE0QztLQUN2RDtJQUNEO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztRQUNsQixTQUFTLEVBQUUsV0FBVztRQUN0QixRQUFRLEVBQUUsa0NBQWtDO0tBQzdDO0lBQ0Q7UUFDRSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUM7UUFDOUIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsUUFBUSxFQUFFLDZDQUE2QztLQUN4RDtJQUNEO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQztRQUN6QixTQUFTLEVBQUUsbUJBQW1CO1FBQzlCLFFBQVEsRUFBRSxnREFBZ0Q7S0FDM0Q7SUFDRDtRQUNFLFNBQVMsRUFBRSxlQUFlO1FBQzFCLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDZCxTQUFTLEVBQUUsV0FBVztRQUN0QixRQUFRLEVBQUUsZ0NBQWdDO0tBQzNDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IGNoZWNrRmFjdG9yeSB9IGZyb20gXCIuLi9oZWxwZXJzL2NoZWNrLWZhY3RvcnlcIjtcclxuaW1wb3J0IHsgbGVuZ3RoVmFsaWRhdG9yLCByZWdleHBWYWxpZGF0b3IgfSBmcm9tIFwiLi4vdmFsaWRhdG9ycy9yZWFjdGl2ZS1mb3Jtcy9yZWFjdGl2ZS1mb3Jtcy12YWxpZGF0b3JzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUGFzc3dvcmRDaGVja3MgPSAoKSA9PiBjaGVja0ZhY3RvcnkoW1xyXG4gICAge1xyXG4gICAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcclxuICAgICAgYXJnczogWy9bYS16QS1aXS8sICchISddLFxyXG4gICAgICBlcnJvck5hbWU6ICdub0FscGhhJyxcclxuICAgICAgZXJyb3JNc2c6ICdBIHBhc3N3b3JkIG11c3QgY29udGFpbiBsZXR0ZXJzLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcclxuICAgICAgYXJnczogWy9bYS16XS8sICchISddLFxyXG4gICAgICBlcnJvck5hbWU6ICdub0xvd2VyY2FzZScsXHJcbiAgICAgIGVycm9yTXNnOiAnQSBwYXNzd29yZCBtdXN0IGNvbnRhaW4gbG93ZXJjYXNlIGxldHRlcnMuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxyXG4gICAgICBhcmdzOiBbL1tBLVpdLywgJyEhJ10sXHJcbiAgICAgIGVycm9yTmFtZTogJ25vVXBwZXJjYXNlJyxcclxuICAgICAgZXJyb3JNc2c6ICdBIHBhc3N3b3JkIG11c3QgY29udGFpbiB1cHBlcmNhc2UgbGV0dGVycy4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsaWRhdG9yOiByZWdleHBWYWxpZGF0b3IsXHJcbiAgICAgIGFyZ3M6IFsvXFxkLywgJyEhJ10sXHJcbiAgICAgIGVycm9yTmFtZTogJ25vTnVtZXJpYycsXHJcbiAgICAgIGVycm9yTXNnOiAnQSBwYXNzd29yZCBtdXN0IGNvbnRhaW4gbnVtYmVycy4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsaWRhdG9yOiByZWdleHBWYWxpZGF0b3IsXHJcbiAgICAgIGFyZ3M6IFsvXltBLVphLXowLTkgXSskLywgJyEnXSxcclxuICAgICAgZXJyb3JOYW1lOiAnbm9TcGVjaWFsJyxcclxuICAgICAgZXJyb3JNc2c6ICdBIHBhc3N3b3JkIG11c3QgY29udGFpbiBzcGVjaWFsIGNoYXJhY3RlcnMuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxyXG4gICAgICBhcmdzOiBbLyg/PS4qWzw+XSkvLCAnISddLFxyXG4gICAgICBlcnJvck5hbWU6ICdncmVhdGVyT3JMZXNzVGhlbicsXHJcbiAgICAgIGVycm9yTXNnOiAnQSBwYXNzd29yZCBtdXN0IG5vdCBjb250YWluIDwgb3IgPiBjaGFyYWN0ZXJzLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YWxpZGF0b3I6IGxlbmd0aFZhbGlkYXRvcixcclxuICAgICAgYXJnczogWzgsICc8J10sXHJcbiAgICAgIGVycm9yTmFtZTogJ21pbkxlbmd0aCcsXHJcbiAgICAgIGVycm9yTXNnOiAnQSBwYXNzd29yZCBpcyBub3QgbG9uZyBlbm91Z2guJyxcclxuICAgIH0sXHJcbiAgXSk7Il19