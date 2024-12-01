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
 *  [vClass]="customClass"            - Optional param of a custom class
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy12YWxpZGF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2RpcmVjdGl2ZXMvc2hvdy12YWxpZGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssR0FLTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDOzs7QUFFckc7Ozs7Ozs7Ozs7OztHQVlHO0FBS0gsTUFBTSxPQUFPLHVCQUF1QjtJQVFsQyxZQUNtQixnQkFBa0MsRUFDbEMsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsT0FBa0I7UUFIbEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQVhyQyxlQUFVLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFZM0MsQ0FBQztJQUVKLFFBQVE7UUFDTixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQXNCLENBQUM7UUFDeEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FDakIsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQVEsRUFBRTtZQUNuRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBK0I7UUFDdkMsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUNoRSx3QkFBd0IsQ0FDekIsQ0FBQztRQUNGLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUUsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN6RCxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekQsb0JBQW9CLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsb0JBQW9CLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELG9CQUFvQixDQUFDLE1BQStCO1FBQ2xELE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5RCxDQUFDOytHQXJEVSx1QkFBdUI7bUdBQXZCLHVCQUF1Qjs7NEZBQXZCLHVCQUF1QjtrQkFKbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEpBTVUsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xuICovXG5cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE5nQ29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy92YWxpZGF0aW9uLWVycm9yL3ZhbGlkYXRpb24tZXJyb3IuY29tcG9uZW50JztcblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgZGlyZWN0aXZlIHdoaWNoIHdpbGwgc2hvdyBhIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZSB0byB0aGVcbiAqIHVzZXIuXG4gKiBAaW1wbGVtZW50YXRpb25cbiAqIDxpbnB1dFxuICogIHR5cGU9XCJ0ZXh0XCJcbiAqICBmb3JtQ29udHJvbE5hbWU9XCJkZW1vQ29udHJvbE5hbWVcIlxuICogIHNob3dWYWxpZGF0aW9uXG4gKiAgW3ZDbGFzc109XCJjdXN0b21DbGFzc1wiICAgICAgICAgICAgLSBPcHRpb25hbCBwYXJhbSBvZiBhIGN1c3RvbSBjbGFzc1xuICogLz5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3Nob3dWYWxpZGF0aW9uXScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFNob3dWYWxpZGF0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb250cm9sU3ViOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHNlbGYhOiBIVE1MRWxlbWVudDtcbiAgcmV0cmlldmVkU3R5bGVzITogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICBASW5wdXQoKSB2Q2xhc3MhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZTdHlsZSE6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRyb2w6IE5nQ29udHJvbFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZm9ybUNvbnRyb2wgPSB0aGlzLmNvbnRyb2wuY29udHJvbCBhcyBGb3JtQ29udHJvbDtcbiAgICB0aGlzLnNlbGYgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJldHJpZXZlZFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5zZWxmKTtcblxuICAgIHRoaXMuY29udHJvbFN1Yi5hZGQoXG4gICAgICBmb3JtQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgoc3RhdHVzKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdJTlZBTElEJykge1xuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKGZvcm1Db250cm9sLmVycm9ycyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbFN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgc2hvd0Vycm9yKGVycm9yczogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpOiB2b2lkIHtcbiAgICBjb25zdCB2YWxFcnJvckNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoXG4gICAgICBWYWxpZGF0aW9uRXJyb3JDb21wb25lbnRcbiAgICApO1xuICAgIHZhbEVycm9yQ29tcG9uZW50UmVmLnNldElucHV0KCdlcnJvcicsIHRoaXMuZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoZXJyb3JzKSk7XG4gICAgY29uc3QgaW5kZXhOdW0gPSBOdW1iZXIucGFyc2VJbnQodGhpcy5yZXRyaWV2ZWRTdHlsZXMuekluZGV4KTtcbiAgICBjb25zdCB6SW5kZXggPSBOdW1iZXIuaXNOYU4oaW5kZXhOdW0pID8gMSA6IGluZGV4TnVtO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zZWxmLCAnekluZGV4JywgYCR7ekluZGV4fWApO1xuICAgIHZhbEVycm9yQ29tcG9uZW50UmVmLnNldElucHV0KCd6SW5kZXgnLCBgJHt6SW5kZXggLSAxfWApO1xuICAgIHZhbEVycm9yQ29tcG9uZW50UmVmLnNldElucHV0KCdjbGFzcycsIHRoaXMudkNsYXNzKTtcbiAgICB2YWxFcnJvckNvbXBvbmVudFJlZi5zZXRJbnB1dCgnc3R5bGUnLCB0aGlzLnZTdHlsZSk7XG4gIH1cblxuICBoaWRlRXJyb3IoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gIH1cblxuICBnZXRWYWxpZGF0aW9uTWVzc2FnZShlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZXJyb3JzID8gT2JqZWN0LnZhbHVlcyhlcnJvcnMpWzBdIDogJ0ludmFsaWQgSW5wdXQuJztcbiAgfVxufVxuIl19