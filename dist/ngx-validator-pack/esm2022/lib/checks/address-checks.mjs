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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1jaGVja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jaGVja3MvYWRkcmVzcy1jaGVja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRSxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQzVDO1FBQ0ksU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztRQUN4QixTQUFTLEVBQUUsY0FBYztRQUN6QixRQUFRLEVBQUUsZ0JBQWdCO0tBQzdCO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUM7UUFDM0MsU0FBUyxFQUFFLFlBQVk7UUFDdkIsUUFBUSxFQUFFLGNBQWM7S0FDM0I7SUFDRDtRQUNJLFNBQVMsRUFBRSxlQUFlO1FBQzFCLElBQUksRUFBRSxDQUFDLDRDQUE0QyxFQUFFLElBQUksQ0FBQztRQUMxRCxTQUFTLEVBQUUsTUFBTTtRQUNqQixRQUFRLEVBQUUsT0FBTztLQUNwQjtJQUNEO1FBQ0ksU0FBUyxFQUFFLGVBQWU7UUFDMUIsSUFBSSxFQUFFLENBQUMsc0RBQXNELEVBQUUsSUFBSSxDQUFDO1FBQ3BFLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO0tBQ3JCO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsZUFBZTtRQUMxQixJQUFJLEVBQUUsQ0FBQyxpRUFBaUUsRUFBRSxJQUFJLENBQUM7UUFDL0UsU0FBUyxFQUFFLEtBQUs7UUFDaEIsUUFBUSxFQUFFLFVBQVU7S0FDdkI7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgY2hlY2tGYWN0b3J5LCByZWdleHBWYWxpZGF0b3IgfSBmcm9tIFwibmd4LXZhbGlkYXRvci1wYWNrXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkcmVzc0NoZWNrcyA9ICgpID0+IGNoZWNrRmFjdG9yeShbXHJcbiAgICB7XHJcbiAgICAgICAgdmFsaWRhdG9yOiByZWdleHBWYWxpZGF0b3IsXHJcbiAgICAgICAgYXJnczogWy8oXFxkezEsfSkvLCAnISEnXSxcclxuICAgICAgICBlcnJvck5hbWU6ICdzdHJlZXROdW1iZXInLFxyXG4gICAgICAgIGVycm9yTXNnOiAnU3RyZWV0IG51bWJlci4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcclxuICAgICAgICBhcmdzOiBbLyhcXGR7MSx9KSBbYS16QS1aMC05XFxzXSsoXFwsKS8sICchISddLFxyXG4gICAgICAgIGVycm9yTmFtZTogJ3N0cmVldE5hbWUnLFxyXG4gICAgICAgIGVycm9yTXNnOiAnU3RyZWV0IG5hbWUuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdmFsaWRhdG9yOiByZWdleHBWYWxpZGF0b3IsXHJcbiAgICAgICAgYXJnczogWy8oXFxkezEsfSkgW2EtekEtWjAtOVxcc10rKFxcLCk/IFthLXpBLVpdKyhcXCwpLywgJyEhJ10sXHJcbiAgICAgICAgZXJyb3JOYW1lOiAnY2l0eScsXHJcbiAgICAgICAgZXJyb3JNc2c6ICdDaXR5LicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHZhbGlkYXRvcjogcmVnZXhwVmFsaWRhdG9yLFxyXG4gICAgICAgIGFyZ3M6IFsvKFxcZHsxLH0pIFthLXpBLVowLTlcXHNdKyhcXCwpPyBbYS16QS1aXSsoXFwsKT8gW0EtWl17Mn0vLCAnISEnXSxcclxuICAgICAgICBlcnJvck5hbWU6ICdzdGF0ZScsXHJcbiAgICAgICAgZXJyb3JNc2c6ICdTdGF0ZS4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB2YWxpZGF0b3I6IHJlZ2V4cFZhbGlkYXRvcixcclxuICAgICAgICBhcmdzOiBbLyhcXGR7MSx9KSBbYS16QS1aMC05XFxzXSsoXFwsKT8gW2EtekEtWl0rKFxcLCk/IFtBLVpdezJ9IFswLTldezUsNn0vLCAnISEnXSxcclxuICAgICAgICBlcnJvck5hbWU6ICd6aXAnLFxyXG4gICAgICAgIGVycm9yTXNnOiAnWmlwQ29kZS4nLFxyXG4gICAgfVxyXG5dKTsiXX0=