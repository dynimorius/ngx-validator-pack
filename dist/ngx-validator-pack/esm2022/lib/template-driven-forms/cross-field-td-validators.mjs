/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, } from "@angular/forms";
import { requiredEtherValidation, requiredIfNotValidation, requiredIfValidation, } from "../validations/cross-field-validations";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredIfValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RequiredIfValidatorDirective, isStandalone: true, selector: "[requiredIf]", inputs: { controls: ["requiredIf", "controls"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RequiredIfValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredIfValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredIfNotValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RequiredIfNotValidatorDirective, isStandalone: true, selector: "[requiredIfNot]", inputs: { controls: ["requiredIfNot", "controls"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RequiredIfNotValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredIfNotValidatorDirective, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredEtherValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: RequiredEtherValidatorDirective, isStandalone: true, selector: "[requiredEther]", inputs: { controls: ["requiredEther", "controls"] }, providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: RequiredIfNotValidatorDirective,
                multi: true,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RequiredEtherValidatorDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvc3MtZmllbGQtdGQtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3RlbXBsYXRlLWRyaXZlbi1mb3Jtcy9jcm9zcy1maWVsZC10ZC12YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFFTCxhQUFhLEdBR2QsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLHVCQUF1QixFQUN2QixvQkFBb0IsR0FDckIsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFFaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBWUgsTUFBTSxPQUFPLDRCQUE0QjtJQUt2QyxRQUFRLENBQUMsT0FBd0I7UUFDL0IsT0FBTyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7K0dBUFUsNEJBQTRCO21HQUE1Qiw0QkFBNEIsNkdBVDVCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7NEZBR1UsNEJBQTRCO2tCQVh4QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsOEJBQThCOzRCQUN6QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtvQkFDRCxVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBRXNCLFFBQVE7c0JBQTVCLEtBQUs7dUJBQUMsWUFBWTs7QUFTckI7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBWUgsTUFBTSxPQUFPLCtCQUErQjtJQUsxQyxRQUFRLENBQUMsT0FBd0I7UUFDL0IsT0FBTyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7K0dBUFUsK0JBQStCO21HQUEvQiwrQkFBK0IsbUhBVC9CO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7NEZBR1UsK0JBQStCO2tCQVgzQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsV0FBVyxpQ0FBaUM7NEJBQzVDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFFeUIsUUFBUTtzQkFBL0IsS0FBSzt1QkFBQyxlQUFlOztBQVN4Qjs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQVlILE1BQU0sT0FBTywrQkFBK0I7SUFLMUMsUUFBUSxDQUFDLE9BQXdCO1FBQy9CLE9BQU8sdUJBQXVCLENBQUMsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDOytHQVBVLCtCQUErQjttR0FBL0IsK0JBQStCLG1IQVQvQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7OzRGQUdVLCtCQUErQjtrQkFYM0MsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsRUFBRSwrQkFBK0I7NEJBQzVDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFFeUIsUUFBUTtzQkFBL0IsS0FBSzt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIEFic3RyYWN0Q29udHJvbCxcclxuICBOR19WQUxJREFUT1JTLFxyXG4gIFZhbGlkYXRpb25FcnJvcnMsXHJcbiAgVmFsaWRhdG9yLFxyXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG4gIHJlcXVpcmVkRXRoZXJWYWxpZGF0aW9uLFxyXG4gIHJlcXVpcmVkSWZOb3RWYWxpZGF0aW9uLFxyXG4gIHJlcXVpcmVkSWZWYWxpZGF0aW9uLFxyXG59IGZyb20gXCIuLi92YWxpZGF0aW9ucy9jcm9zcy1maWVsZC12YWxpZGF0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgYXNzaWducyBhIHJlcXVpcmVkIGVycm9yIHRvIHRoZSBjb250cm9scyB3aXRoIGEgbmFtZSB3YXMgc3BlY2lmaWVkIGluIHRoZVxyXG4gKiBmaXJzdCBwYXJhbWV0ZXIgaWYgdGhlIGNvbnRyb2wgd2l0aCBhIG5hbWUgc3BlY2lmaWVkIGluIHRoZSBzZWNvbmQgcGFyYW1ldGVyXHJcbiAqIGhhcyBubyB2YWx1ZS5cclxuICpcclxuICogSGFzIGFuIGlucHV0IGluIHdoaWNoIHlvdSBzcGVjaWZ5IHRoZSBjb250cm9sIHdoaWNoIG5lZWRzIHRvIHJlY2VpdmUgdGhlIHJlcXVpcmVkIGVycm9yLFxyXG4gKiBhbmQgdGhlIGNvbnRyb2wgd2hpY2ggbmVlZHMgdG8gYmUgY2hlY2tlZC5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICogPGZvcm0gI2V4YW1wbGVGb3JtPVwibmdGb3JtXCJcclxuICogICBbcmVxdWlyZWRJZl09XCJ7XHJcbiAqICAgICAgcmVxdWlyZWQ6ICdmaWVsZF9uYW1lJyxcclxuICogICAgICBjaGVjazogJ2ZpZWxkX25hbWUnXHJcbiAqICAgfVwiXHJcbiAqIC8+XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbcmVxdWlyZWRJZl1cIixcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgICAgdXNlRXhpc3Rpbmc6IFJlcXVpcmVkSWZWYWxpZGF0b3JEaXJlY3RpdmUsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXF1aXJlZElmVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICBASW5wdXQoXCJyZXF1aXJlZElmXCIpIGNvbnRyb2xzIToge1xyXG4gICAgcmVxdWlyZWQ6IHN0cmluZztcclxuICAgIGNoZWNrOiBzdHJpbmc7XHJcbiAgfTtcclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gcmVxdWlyZWRJZlZhbGlkYXRpb24oY29udHJvbCwgeyAuLi50aGlzLmNvbnRyb2xzIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgRGlyZWN0aXZlIHRoYXQgYXNzaWducyBhIHJlcXVpcmVkIGVycm9yIHRvIHRoZSBjb250cm9scyB3aXRoIGEgbmFtZSB3YXMgc3BlY2lmaWVkIGluIHRoZVxyXG4gKiBmaXJzdCBwYXJhbWV0ZXIgaWYgdGhlIGNvbnRyb2wgd2l0aCBhIG5hbWUgc3BlY2lmaWVkIGluIHRoZSBzZWNvbmQgcGFyYW1ldGVyXHJcbiAqIGhhcyBhIHZhbHVlLlxyXG4gKlxyXG4gKiBIYXMgYW4gaW5wdXQgaW4gd2hpY2ggeW91IHNwZWNpZnkgdGhlIGNvbnRyb2wgd2hpY2ggbmVlZHMgdG8gcmVjZWl2ZSB0aGUgcmVxdWlyZWQgZXJyb3IsXHJcbiAqIGFuZCB0aGUgY29udHJvbCB3aGljaCBuZWVkcyB0byBiZSBjaGVja2VkLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiA8Zm9ybSAjZXhhbXBsZUZvcm09XCJuZ0Zvcm1cIlxyXG4gKiAgIFtyZXF1aXJlZElmTm90XT1cIntcclxuICogICAgICByZXF1aXJlZDogJ2ZpZWxkX25hbWUnLFxyXG4gKiAgICAgIGNoZWNrOiAnZmllbGRfbmFtZSdcclxuICogICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltyZXF1aXJlZElmTm90XVwiLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgICB1c2VFeGlzdGluZzogUmVxdWlyZWRJZk5vdFZhbGlkYXRvckRpcmVjdGl2ZSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcXVpcmVkSWZOb3RWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dChcInJlcXVpcmVkSWZOb3RcIikgY29udHJvbHMhOiB7XHJcbiAgICByZXF1aXJlZDogc3RyaW5nO1xyXG4gICAgY2hlY2s6IHN0cmluZztcclxuICB9O1xyXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiByZXF1aXJlZElmTm90VmFsaWRhdGlvbihjb250cm9sLCB7IC4uLnRoaXMuY29udHJvbHMgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBEaXJlY3RpdmUgdGhhdCBhc3NpZ25zIGEgcmVxdWlyZWQgZXJyb3IgdG8gYm90aCBjb250cm9scyB3aG8ncyBuYW1lcyBhcmUgc3BlY2lmaWVkIGlmIG5ldGhlciBvbmVcclxuICogaGFzIGEgdmFsdWUuXHJcbiAqXHJcbiAqIEhhcyBhbiBpbnB1dCBpbiB3aGljaCB5b3Ugc3BlY2lmeSB0aGUgY29udHJvbCB3aGljaCBuZWVkcyB0byByZWNlaXZlIHRoZSByZXF1aXJlZCBlcnJvcixcclxuICogYW5kIHRoZSBjb250cm9sIHdoaWNoIG5lZWRzIHRvIGJlIGNoZWNrZWQuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqIDxmb3JtICNleGFtcGxlRm9ybT1cIm5nRm9ybVwiXHJcbiAqICAgW3JlcXVpcmVkRXRoZXJdPVwie1xyXG4gKiAgICAgIHJlcXVpcmVkOiAnZmllbGRfbmFtZScsXHJcbiAqICAgICAgY2hlY2s6ICdmaWVsZF9uYW1lJ1xyXG4gKiAgIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3JlcXVpcmVkRXRoZXJdXCIsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBSZXF1aXJlZElmTm90VmFsaWRhdG9yRGlyZWN0aXZlLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVxdWlyZWRFdGhlclZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgQElucHV0KFwicmVxdWlyZWRFdGhlclwiKSBjb250cm9scyE6IHtcclxuICAgIHJlcXVpcmVkOiBzdHJpbmc7XHJcbiAgICBjaGVjazogc3RyaW5nO1xyXG4gIH07XHJcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHJlcXVpcmVkRXRoZXJWYWxpZGF0aW9uKGNvbnRyb2wsIHsgLi4udGhpcy5jb250cm9scyB9KTtcclxuICB9XHJcbn1cclxuIl19