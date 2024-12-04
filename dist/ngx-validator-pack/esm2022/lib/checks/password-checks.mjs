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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtY2hlY2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRvci1wYWNrL3NyYy9saWIvY2hlY2tzL3Bhc3N3b3JkLWNoZWNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUUxRyxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDO0lBQ3ZDO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztRQUN4QixTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsa0NBQWtDO0tBQzdDO0lBQ0Q7UUFDRSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1FBQ3JCLFNBQVMsRUFBRSxhQUFhO1FBQ3hCLFFBQVEsRUFBRSw0Q0FBNEM7S0FDdkQ7SUFDRDtRQUNFLFNBQVMsRUFBRSxlQUFlO1FBQzFCLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7UUFDckIsU0FBUyxFQUFFLGFBQWE7UUFDeEIsUUFBUSxFQUFFLDRDQUE0QztLQUN2RDtJQUNEO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztRQUNsQixTQUFTLEVBQUUsV0FBVztRQUN0QixRQUFRLEVBQUUsa0NBQWtDO0tBQzdDO0lBQ0Q7UUFDRSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUM7UUFDOUIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsUUFBUSxFQUFFLDZDQUE2QztLQUN4RDtJQUNEO1FBQ0UsU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQztRQUN6QixTQUFTLEVBQUUsbUJBQW1CO1FBQzlCLFFBQVEsRUFBRSxnREFBZ0Q7S0FDM0Q7SUFDRDtRQUNFLFNBQVMsRUFBRSxlQUFlO1FBQzFCLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDZCxTQUFTLEVBQUUsV0FBVztRQUN0QixRQUFRLEVBQUUsZ0NBQWdDO0tBQzNDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXG4gKi9cblxuaW1wb3J0IHsgY2hlY2tGYWN0b3J5IH0gZnJvbSBcIi4uL2hlbHBlcnMvY2hlY2stZmFjdG9yeVwiO1xuaW1wb3J0IHsgbGVuZ3RoVmFsaWRhdG9yLCByZWdleHBWYWxpZGF0b3IgfSBmcm9tIFwiLi4vdmFsaWRhdG9ycy9yZWFjdGl2ZS1mb3Jtcy9yZWFjdGl2ZS1mb3Jtcy12YWxpZGF0b3JzXCI7XG5cbmV4cG9ydCBjb25zdCBQYXNzd29yZENoZWNrcyA9IGNoZWNrRmFjdG9yeShbXG4gICAge1xuICAgICAgdmFsaWRhdG9yOiByZWdleHBWYWxpZGF0b3IsXG4gICAgICBhcmdzOiBbL1thLXpBLVpdLywgJyEhJ10sXG4gICAgICBlcnJvck5hbWU6ICdub0FscGhhJyxcbiAgICAgIGVycm9yTXNnOiAnQSBwYXNzd29yZCBtdXN0IGNvbnRhaW4gbGV0dGVycy4nLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsaWRhdG9yOiByZWdleHBWYWxpZGF0b3IsXG4gICAgICBhcmdzOiBbL1thLXpdLywgJyEhJ10sXG4gICAgICBlcnJvck5hbWU6ICdub0xvd2VyY2FzZScsXG4gICAgICBlcnJvck1zZzogJ0EgcGFzc3dvcmQgbXVzdCBjb250YWluIGxvd2VyY2FzZSBsZXR0ZXJzLicsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcbiAgICAgIGFyZ3M6IFsvW0EtWl0vLCAnISEnXSxcbiAgICAgIGVycm9yTmFtZTogJ25vVXBwZXJjYXNlJyxcbiAgICAgIGVycm9yTXNnOiAnQSBwYXNzd29yZCBtdXN0IGNvbnRhaW4gdXBwZXJjYXNlIGxldHRlcnMuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxuICAgICAgYXJnczogWy9cXGQvLCAnISEnXSxcbiAgICAgIGVycm9yTmFtZTogJ25vTnVtZXJpYycsXG4gICAgICBlcnJvck1zZzogJ0EgcGFzc3dvcmQgbXVzdCBjb250YWluIG51bWJlcnMuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxuICAgICAgYXJnczogWy9eW0EtWmEtejAtOSBdKyQvLCAnISddLFxuICAgICAgZXJyb3JOYW1lOiAnbm9TcGVjaWFsJyxcbiAgICAgIGVycm9yTXNnOiAnQSBwYXNzd29yZCBtdXN0IGNvbnRhaW4gc3BlY2lhbCBjaGFyYWN0ZXJzLicsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcbiAgICAgIGFyZ3M6IFsvKD89LipbPD5dKS8sICchJ10sXG4gICAgICBlcnJvck5hbWU6ICdncmVhdGVyT3JMZXNzVGhlbicsXG4gICAgICBlcnJvck1zZzogJ0EgcGFzc3dvcmQgbXVzdCBub3QgY29udGFpbiA8IG9yID4gY2hhcmFjdGVycy4nLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsaWRhdG9yOiBsZW5ndGhWYWxpZGF0b3IsXG4gICAgICBhcmdzOiBbOCwgJzwnXSxcbiAgICAgIGVycm9yTmFtZTogJ21pbkxlbmd0aCcsXG4gICAgICBlcnJvck1zZzogJ0EgcGFzc3dvcmQgaXMgbm90IGxvbmcgZW5vdWdoLicsXG4gICAgfSxcbiAgXSk7Il19