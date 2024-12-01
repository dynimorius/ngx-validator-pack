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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy12YWxpZGF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2RpcmVjdGl2ZXMvc2hvdy12YWxpZGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssR0FLTixNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFBO0FBQ25DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFBOzs7QUFFcEc7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBS0gsTUFBTSxPQUFPLHVCQUF1QjtJQVFsQyxZQUNVLGdCQUFrQyxFQUN6QixVQUFzQixFQUMvQixRQUFtQixFQUNWLE9BQWtCO1FBSDNCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDekIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ1YsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQVhyQyxlQUFVLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUE7SUFZMUMsQ0FBQztJQUVKLFFBQVE7UUFDTixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQXNCLENBQUE7UUFDdkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQTtRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUVsRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FDakIsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQVEsRUFBRTtZQUNuRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7WUFDaEIsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3BDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFBO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQy9CLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBK0I7UUFDdkMsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUNoRSx3QkFBd0IsQ0FDekIsQ0FBQTtRQUNELG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDekUsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzdELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFBO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUN4RCxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDeEQsb0JBQW9CLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbkQsb0JBQW9CLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDL0IsQ0FBQztJQUVELG9CQUFvQixDQUFDLE1BQStCO1FBQ2xELE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQTtJQUM3RCxDQUFDOytHQXJEVSx1QkFBdUI7bUdBQXZCLHVCQUF1Qjs7NEZBQXZCLHVCQUF1QjtrQkFKbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEpBTVUsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xuICovXG5cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgTmdDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy92YWxpZGF0aW9uLWVycm9yL3ZhbGlkYXRpb24tZXJyb3IuY29tcG9uZW50J1xuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQSBkaXJlY3RpdmUgd2hpY2ggd2lsbCBzaG93IGEgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlIHRvIHRoZVxuICogdXNlci5cbiAqIEBpbXBsZW1lbnRhdGlvblxuICogPGlucHV0XG4gKiAgdHlwZT1cInRleHRcIlxuICogIGZvcm1Db250cm9sTmFtZT1cImRlbW9Db250cm9sTmFtZVwiXG4gKiAgc2hvd1ZhbGlkYXRpb25cbiAqICBbZXJyb3JTdHlsZV09XCJ7ICAgICAgICAgICAgICAgICAgLSBPcHRpb25hbCBzdHlsZSBpbnB1dFxuICogICAgZm9udF9zaXplOiAnbWVkaXVtJywgICAgICAgICAgICAgIHVzZWQgZm9yIGN1c3RvbWl6aW5nIHRoZSBsb29rXG4gKiAgICBjb2xvcjogJyNhZDAzZmMnLFxuICogIH1cIlxuICogLz5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3Nob3dWYWxpZGF0aW9uXScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFNob3dWYWxpZGF0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb250cm9sU3ViOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKClcbiAgc2VsZiE6IEhUTUxFbGVtZW50XG4gIHJldHJpZXZlZFN0eWxlcyE6IENTU1N0eWxlRGVjbGFyYXRpb25cblxuICBASW5wdXQoKSB2Q2xhc3MhOiBzdHJpbmdcbiAgQElucHV0KCkgdlN0eWxlITogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250cm9sOiBOZ0NvbnRyb2xcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGZvcm1Db250cm9sID0gdGhpcy5jb250cm9sLmNvbnRyb2wgYXMgRm9ybUNvbnRyb2xcbiAgICB0aGlzLnNlbGYgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuICAgIHRoaXMucmV0cmlldmVkU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnNlbGYpXG5cbiAgICB0aGlzLmNvbnRyb2xTdWIuYWRkKFxuICAgICAgZm9ybUNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKHN0YXR1cyk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcigpXG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdJTlZBTElEJykge1xuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKGZvcm1Db250cm9sLmVycm9ycylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2xTdWIudW5zdWJzY3JpYmUoKVxuICB9XG5cbiAgc2hvd0Vycm9yKGVycm9yczogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpOiB2b2lkIHtcbiAgICBjb25zdCB2YWxFcnJvckNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoXG4gICAgICBWYWxpZGF0aW9uRXJyb3JDb21wb25lbnRcbiAgICApXG4gICAgdmFsRXJyb3JDb21wb25lbnRSZWYuc2V0SW5wdXQoJ2Vycm9yJywgdGhpcy5nZXRWYWxpZGF0aW9uTWVzc2FnZShlcnJvcnMpKVxuICAgIGNvbnN0IGluZGV4TnVtID0gTnVtYmVyLnBhcnNlSW50KHRoaXMucmV0cmlldmVkU3R5bGVzLnpJbmRleClcbiAgICBjb25zdCB6SW5kZXggPSBOdW1iZXIuaXNOYU4oaW5kZXhOdW0pID8gMSA6IGluZGV4TnVtXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNlbGYsICd6SW5kZXgnLCBgJHt6SW5kZXh9YClcbiAgICB2YWxFcnJvckNvbXBvbmVudFJlZi5zZXRJbnB1dCgnekluZGV4JywgYCR7ekluZGV4IC0gMX1gKVxuICAgIHZhbEVycm9yQ29tcG9uZW50UmVmLnNldElucHV0KCdjbGFzcycsIHRoaXMudkNsYXNzKVxuICAgIHZhbEVycm9yQ29tcG9uZW50UmVmLnNldElucHV0KCdzdHlsZScsIHRoaXMudlN0eWxlKVxuICB9XG5cbiAgaGlkZUVycm9yKCk6IHZvaWQge1xuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpXG4gIH1cblxuICBnZXRWYWxpZGF0aW9uTWVzc2FnZShlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZXJyb3JzID8gT2JqZWN0LnZhbHVlcyhlcnJvcnMpWzBdIDogJ0ludmFsaWQgSW5wdXQuJ1xuICB9XG59XG4iXX0=