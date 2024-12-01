/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { Directive, Input, } from '@angular/core';
import { Subscription } from 'rxjs';
import { ValidationErrorComponent } from '../components/validation-error/validation-error.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
/**
 * @publicApi
 * @description
 * A directive which will show a validation error message to the
 * user.
 * @implementation
 * <input
 *  type="text"
 *  formControlName="demoControlName"
 *  showValidation
 *  [errorStyle]="{                  - Optional style input
 *    font_size: 'medium',              used for customizing the look
 *    color: '#ad03fc',
 *  }"
 * />
 */
export class ShowValidationDirective {
    constructor(viewContainerRef, elementRef, renderer, control) {
        this.viewContainerRef = viewContainerRef;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.control = control;
        this.controlSub = new Subscription();
    }
    ngOnInit() {
        const formControl = this.control.control;
        this.self = this.elementRef.nativeElement;
        this.retrievedStyles = getComputedStyle(this.self);
        this.controlSub.add(formControl.statusChanges.subscribe((status) => {
            this.hideError();
            if (status === 'INVALID') {
                this.showError(formControl.errors);
            }
        }));
    }
    ngOnDestroy() {
        this.controlSub.unsubscribe();
    }
    showError(errors) {
        const valErrorComponentRef = this.viewContainerRef.createComponent(ValidationErrorComponent);
        valErrorComponentRef.setInput('error', this.getValidationMessage(errors));
        const indexNum = Number.parseInt(this.retrievedStyles.zIndex);
        const zIndex = Number.isNaN(indexNum) ? 1 : indexNum;
        this.renderer.setStyle(this.self, 'zIndex', `${zIndex}`);
        valErrorComponentRef.setInput('zIndex', `${zIndex - 1}`);
        valErrorComponentRef.setInput('class', this.vClass);
        valErrorComponentRef.setInput('style', this.vStyle);
    }
    hideError() {
        this.viewContainerRef.clear();
    }
    getValidationMessage(errors) {
        return errors ? Object.values(errors)[0] : 'Invalid Input.';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ShowValidationDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: ShowValidationDirective, isStandalone: true, selector: "[showValidation]", inputs: { vClass: "vClass", vStyle: "vStyle" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ShowValidationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showValidation]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NgControl }], propDecorators: { vClass: [{
                type: Input
            }], vStyle: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy12YWxpZGF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2RpcmVjdGl2ZXMvc2hvdy12YWxpZGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssR0FLTixNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFBO0FBRW5DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFBOzs7QUFFcEc7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBS0gsTUFBTSxPQUFPLHVCQUF1QjtJQVFsQyxZQUNVLGdCQUFrQyxFQUN6QixVQUFzQixFQUMvQixRQUFtQixFQUNWLE9BQWtCO1FBSDNCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDekIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ1YsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQVhyQyxlQUFVLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUE7SUFZMUMsQ0FBQztJQUVKLFFBQVE7UUFDTixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQXNCLENBQUE7UUFDdkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQTtRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUVsRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FDakIsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQVEsRUFBRTtZQUNuRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7WUFDaEIsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3BDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFBO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQy9CLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBK0I7UUFDdkMsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUNoRSx3QkFBd0IsQ0FDekIsQ0FBQTtRQUNELG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDekUsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzdELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFBO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUN4RCxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDeEQsb0JBQW9CLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbkQsb0JBQW9CLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDL0IsQ0FBQztJQUVELG9CQUFvQixDQUFDLE1BQStCO1FBQ2xELE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQTtJQUM3RCxDQUFDOytHQXJEVSx1QkFBdUI7bUdBQXZCLHVCQUF1Qjs7NEZBQXZCLHVCQUF1QjtrQkFKbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEpBTVUsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xuICovXG5cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgTmdDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgRGVmYXVsdFN0eWxlIH0gZnJvbSAnLi4vY29uc3RhbnQvZGVmYXVsdC1zaG93LXZhbGlkYXRpb24tc3R5bGUnXG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3JDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3ZhbGlkYXRpb24tZXJyb3IvdmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQnXG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBBIGRpcmVjdGl2ZSB3aGljaCB3aWxsIHNob3cgYSB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2UgdG8gdGhlXG4gKiB1c2VyLlxuICogQGltcGxlbWVudGF0aW9uXG4gKiA8aW5wdXRcbiAqICB0eXBlPVwidGV4dFwiXG4gKiAgZm9ybUNvbnRyb2xOYW1lPVwiZGVtb0NvbnRyb2xOYW1lXCJcbiAqICBzaG93VmFsaWRhdGlvblxuICogIFtlcnJvclN0eWxlXT1cInsgICAgICAgICAgICAgICAgICAtIE9wdGlvbmFsIHN0eWxlIGlucHV0XG4gKiAgICBmb250X3NpemU6ICdtZWRpdW0nLCAgICAgICAgICAgICAgdXNlZCBmb3IgY3VzdG9taXppbmcgdGhlIGxvb2tcbiAqICAgIGNvbG9yOiAnI2FkMDNmYycsXG4gKiAgfVwiXG4gKiAvPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2hvd1ZhbGlkYXRpb25dJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgU2hvd1ZhbGlkYXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnRyb2xTdWI6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKVxuICBzZWxmITogSFRNTEVsZW1lbnRcbiAgcmV0cmlldmVkU3R5bGVzITogQ1NTU3R5bGVEZWNsYXJhdGlvblxuXG4gIEBJbnB1dCgpIHZDbGFzcyE6IHN0cmluZ1xuICBASW5wdXQoKSB2U3R5bGUhOiBzdHJpbmdcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRyb2w6IE5nQ29udHJvbFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZm9ybUNvbnRyb2wgPSB0aGlzLmNvbnRyb2wuY29udHJvbCBhcyBGb3JtQ29udHJvbFxuICAgIHRoaXMuc2VsZiA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XG4gICAgdGhpcy5yZXRyaWV2ZWRTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuc2VsZilcblxuICAgIHRoaXMuY29udHJvbFN1Yi5hZGQoXG4gICAgICBmb3JtQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgoc3RhdHVzKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKClcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ0lOVkFMSUQnKSB7XG4gICAgICAgICAgdGhpcy5zaG93RXJyb3IoZm9ybUNvbnRyb2wuZXJyb3JzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbFN1Yi51bnN1YnNjcmliZSgpXG4gIH1cblxuICBzaG93RXJyb3IoZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbEVycm9yQ29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChcbiAgICAgIFZhbGlkYXRpb25FcnJvckNvbXBvbmVudFxuICAgIClcbiAgICB2YWxFcnJvckNvbXBvbmVudFJlZi5zZXRJbnB1dCgnZXJyb3InLCB0aGlzLmdldFZhbGlkYXRpb25NZXNzYWdlKGVycm9ycykpXG4gICAgY29uc3QgaW5kZXhOdW0gPSBOdW1iZXIucGFyc2VJbnQodGhpcy5yZXRyaWV2ZWRTdHlsZXMuekluZGV4KVxuICAgIGNvbnN0IHpJbmRleCA9IE51bWJlci5pc05hTihpbmRleE51bSkgPyAxIDogaW5kZXhOdW1cbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2VsZiwgJ3pJbmRleCcsIGAke3pJbmRleH1gKVxuICAgIHZhbEVycm9yQ29tcG9uZW50UmVmLnNldElucHV0KCd6SW5kZXgnLCBgJHt6SW5kZXggLSAxfWApXG4gICAgdmFsRXJyb3JDb21wb25lbnRSZWYuc2V0SW5wdXQoJ2NsYXNzJywgdGhpcy52Q2xhc3MpXG4gICAgdmFsRXJyb3JDb21wb25lbnRSZWYuc2V0SW5wdXQoJ3N0eWxlJywgdGhpcy52U3R5bGUpXG4gIH1cblxuICBoaWRlRXJyb3IoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKClcbiAgfVxuXG4gIGdldFZhbGlkYXRpb25NZXNzYWdlKGVycm9yczogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpOiBzdHJpbmcge1xuICAgIHJldHVybiBlcnJvcnMgPyBPYmplY3QudmFsdWVzKGVycm9ycylbMF0gOiAnSW52YWxpZCBJbnB1dC4nXG4gIH1cbn1cbiJdfQ==