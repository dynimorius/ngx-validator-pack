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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvc3MtZmllbGQtdGQtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3ZhbGlkYXRvcnMvdGVtcGxhdGUtZHJpdmVuLWZvcm1zL2Nyb3NzLWZpZWxkLXRkLXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUVMLGFBQWEsR0FHZCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixHQUNyQixNQUFNLDJDQUEyQyxDQUFDOztBQUVuRDs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFZSCxNQUFNLE9BQU8sNEJBQTRCO0lBS3ZDLFFBQVEsQ0FBQyxPQUF3QjtRQUMvQixPQUFPLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQzsrR0FQVSw0QkFBNEI7bUdBQTVCLDRCQUE0Qiw2R0FUNUI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOzs0RkFHVSw0QkFBNEI7a0JBWHhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyw4QkFBOEI7NEJBQ3pDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFFc0IsUUFBUTtzQkFBNUIsS0FBSzt1QkFBQyxZQUFZOztBQVNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFZSCxNQUFNLE9BQU8sK0JBQStCO0lBSzFDLFFBQVEsQ0FBQyxPQUF3QjtRQUMvQixPQUFPLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQzsrR0FQVSwrQkFBK0I7bUdBQS9CLCtCQUErQixtSEFUL0I7WUFDVDtnQkFDRSxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOzs0RkFHVSwrQkFBK0I7a0JBWDNDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLGlDQUFpQzs0QkFDNUMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7b0JBQ0QsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUV5QixRQUFRO3NCQUEvQixLQUFLO3VCQUFDLGVBQWU7O0FBU3hCOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBWUgsTUFBTSxPQUFPLCtCQUErQjtJQUsxQyxRQUFRLENBQUMsT0FBd0I7UUFDL0IsT0FBTyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7K0dBUFUsK0JBQStCO21HQUEvQiwrQkFBK0IsbUhBVC9CO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7NEZBR1UsK0JBQStCO2tCQVgzQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxFQUFFLCtCQUErQjs0QkFDNUMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7b0JBQ0QsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUV5QixRQUFRO3NCQUEvQixLQUFLO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgQWJzdHJhY3RDb250cm9sLFxyXG4gIE5HX1ZBTElEQVRPUlMsXHJcbiAgVmFsaWRhdGlvbkVycm9ycyxcclxuICBWYWxpZGF0b3IsXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcbiAgcmVxdWlyZWRFdGhlclZhbGlkYXRpb24sXHJcbiAgcmVxdWlyZWRJZk5vdFZhbGlkYXRpb24sXHJcbiAgcmVxdWlyZWRJZlZhbGlkYXRpb24sXHJcbn0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRpb25zL2Nyb3NzLWZpZWxkLXZhbGlkYXRpb25zXCI7XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBhc3NpZ25zIGEgcmVxdWlyZWQgZXJyb3IgdG8gdGhlIGNvbnRyb2xzIHdpdGggYSBuYW1lIHdhcyBzcGVjaWZpZWQgaW4gdGhlXHJcbiAqIGZpcnN0IHBhcmFtZXRlciBpZiB0aGUgY29udHJvbCB3aXRoIGEgbmFtZSBzcGVjaWZpZWQgaW4gdGhlIHNlY29uZCBwYXJhbWV0ZXJcclxuICogaGFzIG5vIHZhbHVlLlxyXG4gKlxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIGNvbnRyb2wgd2hpY2ggbmVlZHMgdG8gcmVjZWl2ZSB0aGUgcmVxdWlyZWQgZXJyb3IsXHJcbiAqIGFuZCB0aGUgY29udHJvbCB3aGljaCBuZWVkcyB0byBiZSBjaGVja2VkLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiA8Zm9ybSAjZXhhbXBsZUZvcm09XCJuZ0Zvcm1cIlxyXG4gKiAgIFtyZXF1aXJlZElmXT1cIntcclxuICogICAgICByZXF1aXJlZDogJ2ZpZWxkX25hbWUnLFxyXG4gKiAgICAgIGNoZWNrOiAnZmllbGRfbmFtZSdcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltyZXF1aXJlZElmXVwiLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogUmVxdWlyZWRJZlZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcXVpcmVkSWZWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcInJlcXVpcmVkSWZcIikgY29udHJvbHMhOiB7XHJcbiAgICByZXF1aXJlZDogc3RyaW5nO1xyXG4gICAgY2hlY2s6IHN0cmluZztcclxuICB9O1xyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiByZXF1aXJlZElmVmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMuY29udHJvbHMgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBhc3NpZ25zIGEgcmVxdWlyZWQgZXJyb3IgdG8gdGhlIGNvbnRyb2xzIHdpdGggYSBuYW1lIHdhcyBzcGVjaWZpZWQgaW4gdGhlXHJcbiAqIGZpcnN0IHBhcmFtZXRlciBpZiB0aGUgY29udHJvbCB3aXRoIGEgbmFtZSBzcGVjaWZpZWQgaW4gdGhlIHNlY29uZCBwYXJhbWV0ZXJcclxuICogaGFzIGEgdmFsdWUuXHJcbiAqXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgY29udHJvbCB3aGljaCBuZWVkcyB0byByZWNlaXZlIHRoZSByZXF1aXJlZCBlcnJvcixcclxuICogYW5kIHRoZSBjb250cm9sIHdoaWNoIG5lZWRzIHRvIGJlIGNoZWNrZWQuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqIDxmb3JtICNleGFtcGxlRm9ybT1cIm5nRm9ybVwiXHJcbiAqICAgW3JlcXVpcmVkSWZOb3RdPVwie1xyXG4gKiAgICAgIHJlcXVpcmVkOiAnZmllbGRfbmFtZScsXHJcbiAqICAgICAgY2hlY2s6ICdmaWVsZF9uYW1lJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3JlcXVpcmVkSWZOb3RdXCIsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBSZXF1aXJlZElmTm90VmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVxdWlyZWRJZk5vdFZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwicmVxdWlyZWRJZk5vdFwiKSBjb250cm9scyE6IHtcclxuICAgIHJlcXVpcmVkOiBzdHJpbmc7XHJcbiAgICBjaGVjazogc3RyaW5nO1xyXG4gIH07XHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHJlcXVpcmVkSWZOb3RWYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy5jb250cm9scyB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGFzc2lnbnMgYSByZXF1aXJlZCBlcnJvciB0byBib3RoIGNvbnRyb2xzIHdobydzIG5hbWVzIGFyZSBzcGVjaWZpZWQgaWYgbmV0aGVyIG9uZVxyXG4gKiBoYXMgYSB2YWx1ZS5cclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSBjb250cm9sIHdoaWNoIG5lZWRzIHRvIHJlY2VpdmUgdGhlIHJlcXVpcmVkIGVycm9yLFxyXG4gKiBhbmQgdGhlIGNvbnRyb2wgd2hpY2ggbmVlZHMgdG8gYmUgY2hlY2tlZC5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogPGZvcm0gI2V4YW1wbGVGb3JtPVwibmdGb3JtXCJcclxuICogICBbcmVxdWlyZWRFdGhlcl09XCJ7XHJcbiAqICAgICAgcmVxdWlyZWQ6ICdmaWVsZF9uYW1lJyxcclxuICogICAgICBjaGVjazogJ2ZpZWxkX25hbWUnXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbcmVxdWlyZWRFdGhlcl1cIixcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFJlcXVpcmVkSWZOb3RWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXF1aXJlZEV0aGVyVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICBASW5wdXQoXCJyZXF1aXJlZEV0aGVyXCIpIGNvbnRyb2xzIToge1xyXG4gICAgcmVxdWlyZWQ6IHN0cmluZztcclxuICAgIGNoZWNrOiBzdHJpbmc7XHJcbiAgfTtcclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gcmVxdWlyZWRFdGhlclZhbGlkYXRpb24oY29udHJvbCwgeyAuLi50aGlzLmNvbnRyb2xzIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=