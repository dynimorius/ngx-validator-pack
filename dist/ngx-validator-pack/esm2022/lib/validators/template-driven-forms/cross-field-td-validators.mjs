/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, } from "@angular/forms";
import { requiredEtherValidation, requiredIfNotValidation, requiredIfValidation, } from "../../validations/cross-field-validations";
import * as i0 from "@angular/core";
/**
 * @publicApi
 * @description
 * A Directive that assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has no value.
 *
 * Has an input in which you specify the control which needs to receive the required error,
 * and the control which needs to be checked.
 *
 * @usageNotes
 * <form #exampleForm="ngForm"
 *   [requiredIf]="{
 *      required: 'field_name',
 *      check: 'field_name'
 *   }"
 * />
 */
export class RequiredIfValidatorDirective {
    validate(control) {
        return requiredIfValidation(control, { ...this.controls });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RequiredIfValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: RequiredIfValidatorDirective, isStandalone: true, selector: "[requiredIf]", inputs: { controls: ["requiredIf", "controls"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RequiredIfValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RequiredIfValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[requiredIf]",
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: RequiredIfValidatorDirective,
                            multi: true,
                        },
                    ],
                    standalone: true,
                }]
        }], propDecorators: { controls: [{
                type: Input,
                args: ["requiredIf"]
            }] } });
/**
 * @publicApi
 * @description
 * A Directive that assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has a value.
 *
 * Has an input in which you specify the control which needs to receive the required error,
 * and the control which needs to be checked.
 *
 * @usageNotes
 * <form #exampleForm="ngForm"
 *   [requiredIfNot]="{
 *      required: 'field_name',
 *      check: 'field_name'
 *   }"
 * />
 */
export class RequiredIfNotValidatorDirective {
    validate(control) {
        return requiredIfNotValidation(control, { ...this.controls });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RequiredIfNotValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: RequiredIfNotValidatorDirective, isStandalone: true, selector: "[requiredIfNot]", inputs: { controls: ["requiredIfNot", "controls"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RequiredIfNotValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RequiredIfNotValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[requiredIfNot]",
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: RequiredIfNotValidatorDirective,
                            multi: true,
                        },
                    ],
                    standalone: true,
                }]
        }], propDecorators: { controls: [{
                type: Input,
                args: ["requiredIfNot"]
            }] } });
/**
 * @publicApi
 * @description
 * A Directive that assigns a required error to both controls who's names are specified if nether one
 * has a value.
 *
 * Has an input in which you specify the control which needs to receive the required error,
 * and the control which needs to be checked.
 *
 * @usageNotes
 * <form #exampleForm="ngForm"
 *   [requiredEther]="{
 *      required: 'field_name',
 *      check: 'field_name'
 *   }"
 * />
 */
export class RequiredEtherValidatorDirective {
    validate(control) {
        return requiredEtherValidation(control, { ...this.controls });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RequiredEtherValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: RequiredEtherValidatorDirective, isStandalone: true, selector: "[requiredEther]", inputs: { controls: ["requiredEther", "controls"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RequiredIfNotValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RequiredEtherValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[requiredEther]",
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: RequiredIfNotValidatorDirective,
                            multi: true,
                        },
                    ],
                    standalone: true,
                }]
        }], propDecorators: { controls: [{
                type: Input,
                args: ["requiredEther"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvc3MtZmllbGQtdGQtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3ZhbGlkYXRvcnMvdGVtcGxhdGUtZHJpdmVuLWZvcm1zL2Nyb3NzLWZpZWxkLXRkLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUVMLGFBQWEsR0FHZCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixHQUNyQixNQUFNLDJDQUEyQyxDQUFDOztBQUVuRDs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFZSCxNQUFNLE9BQU8sNEJBQTRCO0lBS3ZDLFFBQVEsQ0FBQyxPQUF3QjtRQUMvQixPQUFPLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQzsrR0FQVSw0QkFBNEI7bUdBQTVCLDRCQUE0Qiw2R0FUNUI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOzs0RkFHVSw0QkFBNEI7a0JBWHhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyw4QkFBOEI7NEJBQ3pDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFFc0IsUUFBUTtzQkFBNUIsS0FBSzt1QkFBQyxZQUFZOztBQVNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFZSCxNQUFNLE9BQU8sK0JBQStCO0lBSzFDLFFBQVEsQ0FBQyxPQUF3QjtRQUMvQixPQUFPLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQzsrR0FQVSwrQkFBK0I7bUdBQS9CLCtCQUErQixtSEFUL0I7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOzs0RkFHVSwrQkFBK0I7a0JBWDNDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLGlDQUFpQzs0QkFDNUMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7b0JBQ0QsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUV5QixRQUFRO3NCQUEvQixLQUFLO3VCQUFDLGVBQWU7O0FBU3hCOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBWUgsTUFBTSxPQUFPLCtCQUErQjtJQUsxQyxRQUFRLENBQUMsT0FBd0I7UUFDL0IsT0FBTyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7K0dBUFUsK0JBQStCO21HQUEvQiwrQkFBK0IsbUhBVC9CO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7NEZBR1UsK0JBQStCO2tCQVgzQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLCtCQUErQjs0QkFDNUMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7b0JBQ0QsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUV5QixRQUFRO3NCQUEvQixLQUFLO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgTkdfVkFMSURBVE9SUyxcbiAgVmFsaWRhdGlvbkVycm9ycyxcbiAgVmFsaWRhdG9yLFxufSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7XG4gIHJlcXVpcmVkRXRoZXJWYWxpZGF0aW9uLFxuICByZXF1aXJlZElmTm90VmFsaWRhdGlvbixcbiAgcmVxdWlyZWRJZlZhbGlkYXRpb24sXG59IGZyb20gXCIuLi8uLi92YWxpZGF0aW9ucy9jcm9zcy1maWVsZC12YWxpZGF0aW9uc1wiO1xuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQSBEaXJlY3RpdmUgdGhhdCBhc3NpZ25zIGEgcmVxdWlyZWQgZXJyb3IgdG8gdGhlIGNvbnRyb2xzIHdpdGggYSBuYW1lIHdhcyBzcGVjaWZpZWQgaW4gdGhlXG4gKiBmaXJzdCBwYXJhbWV0ZXIgaWYgdGhlIGNvbnRyb2wgd2l0aCBhIG5hbWUgc3BlY2lmaWVkIGluIHRoZSBzZWNvbmQgcGFyYW1ldGVyXG4gKiBoYXMgbm8gdmFsdWUuXG4gKlxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSBjb250cm9sIHdoaWNoIG5lZWRzIHRvIHJlY2VpdmUgdGhlIHJlcXVpcmVkIGVycm9yLFxuICogYW5kIHRoZSBjb250cm9sIHdoaWNoIG5lZWRzIHRvIGJlIGNoZWNrZWQuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqIDxmb3JtICNleGFtcGxlRm9ybT1cIm5nRm9ybVwiXG4gKiAgIFtyZXF1aXJlZElmXT1cIntcbiAqICAgICAgcmVxdWlyZWQ6ICdmaWVsZF9uYW1lJyxcbiAqICAgICAgY2hlY2s6ICdmaWVsZF9uYW1lJ1xuICogICB9XCJcbiAqIC8+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbcmVxdWlyZWRJZl1cIixcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBSZXF1aXJlZElmVmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgUmVxdWlyZWRJZlZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gIEBJbnB1dChcInJlcXVpcmVkSWZcIikgY29udHJvbHMhOiB7XG4gICAgcmVxdWlyZWQ6IHN0cmluZztcbiAgICBjaGVjazogc3RyaW5nO1xuICB9O1xuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIHJlcXVpcmVkSWZWYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy5jb250cm9scyB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQSBEaXJlY3RpdmUgdGhhdCBhc3NpZ25zIGEgcmVxdWlyZWQgZXJyb3IgdG8gdGhlIGNvbnRyb2xzIHdpdGggYSBuYW1lIHdhcyBzcGVjaWZpZWQgaW4gdGhlXG4gKiBmaXJzdCBwYXJhbWV0ZXIgaWYgdGhlIGNvbnRyb2wgd2l0aCBhIG5hbWUgc3BlY2lmaWVkIGluIHRoZSBzZWNvbmQgcGFyYW1ldGVyXG4gKiBoYXMgYSB2YWx1ZS5cbiAqXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIGNvbnRyb2wgd2hpY2ggbmVlZHMgdG8gcmVjZWl2ZSB0aGUgcmVxdWlyZWQgZXJyb3IsXG4gKiBhbmQgdGhlIGNvbnRyb2wgd2hpY2ggbmVlZHMgdG8gYmUgY2hlY2tlZC5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogPGZvcm0gI2V4YW1wbGVGb3JtPVwibmdGb3JtXCJcbiAqICAgW3JlcXVpcmVkSWZOb3RdPVwie1xuICogICAgICByZXF1aXJlZDogJ2ZpZWxkX25hbWUnLFxuICogICAgICBjaGVjazogJ2ZpZWxkX25hbWUnXG4gKiAgIH1cIlxuICogLz5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcIltyZXF1aXJlZElmTm90XVwiLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IFJlcXVpcmVkSWZOb3RWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBSZXF1aXJlZElmTm90VmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgQElucHV0KFwicmVxdWlyZWRJZk5vdFwiKSBjb250cm9scyE6IHtcbiAgICByZXF1aXJlZDogc3RyaW5nO1xuICAgIGNoZWNrOiBzdHJpbmc7XG4gIH07XG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gcmVxdWlyZWRJZk5vdFZhbGlkYXRpb24oY29udHJvbCwgeyAuLi50aGlzLmNvbnRyb2xzIH0pO1xuICB9XG59XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGFzc2lnbnMgYSByZXF1aXJlZCBlcnJvciB0byBib3RoIGNvbnRyb2xzIHdobydzIG5hbWVzIGFyZSBzcGVjaWZpZWQgaWYgbmV0aGVyIG9uZVxuICogaGFzIGEgdmFsdWUuXG4gKlxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSBjb250cm9sIHdoaWNoIG5lZWRzIHRvIHJlY2VpdmUgdGhlIHJlcXVpcmVkIGVycm9yLFxuICogYW5kIHRoZSBjb250cm9sIHdoaWNoIG5lZWRzIHRvIGJlIGNoZWNrZWQuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqIDxmb3JtICNleGFtcGxlRm9ybT1cIm5nRm9ybVwiXG4gKiAgIFtyZXF1aXJlZEV0aGVyXT1cIntcbiAqICAgICAgcmVxdWlyZWQ6ICdmaWVsZF9uYW1lJyxcbiAqICAgICAgY2hlY2s6ICdmaWVsZF9uYW1lJ1xuICogICB9XCJcbiAqIC8+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbcmVxdWlyZWRFdGhlcl1cIixcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBSZXF1aXJlZElmTm90VmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgUmVxdWlyZWRFdGhlclZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gIEBJbnB1dChcInJlcXVpcmVkRXRoZXJcIikgY29udHJvbHMhOiB7XG4gICAgcmVxdWlyZWQ6IHN0cmluZztcbiAgICBjaGVjazogc3RyaW5nO1xuICB9O1xuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIHJlcXVpcmVkRXRoZXJWYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy5jb250cm9scyB9KTtcbiAgfVxufVxuIl19