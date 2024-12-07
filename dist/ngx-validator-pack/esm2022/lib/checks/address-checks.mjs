/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { checkFactory, regexpValidator } from "ngx-validator-pack";
export const AddressChecks = () => checkFactory([
    {
        validator: regexpValidator,
        args: [/(\d{1,})/, '!!'],
        errorName: 'streetNumber',
        errorMsg: 'Street number.',
    },
    {
        validator: regexpValidator,
        args: [/(\d{1,}) [a-zA-Z0-9\s]+(\,)/, '!!'],
        errorName: 'streetName',
        errorMsg: 'Street name.',
    },
    {
        validator: regexpValidator,
        args: [/(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)/, '!!'],
        errorName: 'city',
        errorMsg: 'City.',
    },
    {
        validator: regexpValidator,
        args: [/(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2}/, '!!'],
        errorName: 'state',
        errorMsg: 'State.',
    },
    {
        validator: regexpValidator,
        args: [/(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}/, '!!'],
        errorName: 'zip',
        errorMsg: 'ZipCode.',
    }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1jaGVja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jaGVja3MvYWRkcmVzcy1jaGVja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRSxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQzVDO1FBQ0ksU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztRQUN4QixTQUFTLEVBQUUsY0FBYztRQUN6QixRQUFRLEVBQUUsZ0JBQWdCO0tBQzdCO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUM7UUFDM0MsU0FBUyxFQUFFLFlBQVk7UUFDdkIsUUFBUSxFQUFFLGNBQWM7S0FDM0I7SUFDRDtRQUNJLFNBQVMsRUFBRSxlQUFlO1FBQzFCLElBQUksRUFBRSxDQUFDLDRDQUE0QyxFQUFFLElBQUksQ0FBQztRQUMxRCxTQUFTLEVBQUUsTUFBTTtRQUNqQixRQUFRLEVBQUUsT0FBTztLQUNwQjtJQUNEO1FBQ0ksU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsc0RBQXNELEVBQUUsSUFBSSxDQUFDO1FBQ3BFLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO0tBQ3JCO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyxpRUFBaUUsRUFBRSxJQUFJLENBQUM7UUFDL0UsU0FBUyxFQUFFLEtBQUs7UUFDaEIsUUFBUSxFQUFFLFVBQVU7S0FDdkI7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cbiAqL1xuXG5pbXBvcnQgeyBjaGVja0ZhY3RvcnksIHJlZ2V4cFZhbGlkYXRvciB9IGZyb20gXCJuZ3gtdmFsaWRhdG9yLXBhY2tcIjtcblxuZXhwb3J0IGNvbnN0IEFkZHJlc3NDaGVja3MgPSAoKSA9PiBjaGVja0ZhY3RvcnkoW1xuICAgIHtcbiAgICAgICAgdmFsaWRhdG9yOiByZWdleHBWYWxpZGF0b3IsXG4gICAgICAgIGFyZ3M6IFsvKFxcZHsxLH0pLywgJyEhJ10sXG4gICAgICAgIGVycm9yTmFtZTogJ3N0cmVldE51bWJlcicsXG4gICAgICAgIGVycm9yTXNnOiAnU3RyZWV0IG51bWJlci4nLFxuICAgIH0sXG4gICAge1xuICAgICAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcbiAgICAgICAgYXJnczogWy8oXFxkezEsfSkgW2EtekEtWjAtOVxcc10rKFxcLCkvLCAnISEnXSxcbiAgICAgICAgZXJyb3JOYW1lOiAnc3RyZWV0TmFtZScsXG4gICAgICAgIGVycm9yTXNnOiAnU3RyZWV0IG5hbWUuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdmFsaWRhdG9yOiByZWdleHBWYWxpZGF0b3IsXG4gICAgICAgIGFyZ3M6IFsvKFxcZHsxLH0pIFthLXpBLVowLTlcXHNdKyhcXCwpPyBbYS16QS1aXSsoXFwsKS8sICchISddLFxuICAgICAgICBlcnJvck5hbWU6ICdjaXR5JyxcbiAgICAgICAgZXJyb3JNc2c6ICdDaXR5LicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxuICAgICAgICBhcmdzOiBbLyhcXGR7MSx9KSBbYS16QS1aMC05XFxzXSsoXFwsKT8gW2EtekEtWl0rKFxcLCk/IFtBLVpdezJ9LywgJyEhJ10sXG4gICAgICAgIGVycm9yTmFtZTogJ3N0YXRlJyxcbiAgICAgICAgZXJyb3JNc2c6ICdTdGF0ZS4nLFxuICAgIH0sXG4gICAge1xuICAgICAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcbiAgICAgICAgYXJnczogWy8oXFxkezEsfSkgW2EtekEtWjAtOVxcc10rKFxcLCk/IFthLXpBLVpdKyhcXCwpPyBbQS1aXXsyfSBbMC05XXs1LDZ9LywgJyEhJ10sXG4gICAgICAgIGVycm9yTmFtZTogJ3ppcCcsXG4gICAgICAgIGVycm9yTXNnOiAnWmlwQ29kZS4nLFxuICAgIH1cbl0pOyJdfQ==