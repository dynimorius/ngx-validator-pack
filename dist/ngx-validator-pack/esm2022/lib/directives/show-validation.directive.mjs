/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { Directive, Input, } from "@angular/core";
import { Subscription } from "rxjs";
import { DefaultStyle } from "../constant/default-show-validation-style";
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
    constructor(elementRef, renderer, control) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.control = control;
        this.controlSub = new Subscription();
        this.errorStyle = DefaultStyle;
    }
    ngOnInit() {
        const formControl = this.control.control;
        this.parent = this.elementRef.nativeElement.parentElement;
        this.self = this.elementRef.nativeElement;
        this.container = this.renderer.createElement("div");
        this.renderer.appendChild(this.container, this.self);
        this.renderer.appendChild(this.parent, this.container);
        this.setStyles();
        this.controlSub.add(formControl.statusChanges.subscribe((status) => {
            this.hideError();
            if (status === "INVALID") {
                if (!this.span) {
                    this.showError(formControl.errors);
                }
            }
        }));
    }
    ngOnDestroy() {
        this.controlSub.unsubscribe();
    }
    setStyles() {
        this.renderer.setStyle(this.container, "display", "flex");
        this.renderer.setStyle(this.container, "flex-direction", "column");
        this.renderer.setStyle(this.container, "gap", "10px");
        const retrievedStyles = getComputedStyle(this.self);
        const tempStyles = {
            font_size: retrievedStyles.fontSize,
            font_family: retrievedStyles.fontFamily,
            color: retrievedStyles.color,
            background_color: retrievedStyles.backgroundColor,
            border: retrievedStyles.border,
            border_radius: retrievedStyles.borderRadius,
            width: retrievedStyles.width,
            ...this.errorStyle
        };
        Object.entries(tempStyles).forEach((style) => {
            this.renderer.setStyle(this.container, style[0].replace('_', '-'), style[1]);
        });
    }
    showError(errors) {
        this.span = this.renderer.createElement("span");
        this.span.innerHTML = this.getValidationMessage(errors);
        this.renderer.appendChild(this.container, this.span);
        this.renderer.setStyle(this.span, 'padding', '0px 0px 10px 10px');
    }
    hideError() {
        if (this.container && this.span) {
            this.renderer.removeChild(this.container, this.span);
            this.span = null;
        }
    }
    getValidationMessage(errors) {
        return errors ? Object.values(errors)[0] : "Invalid Input.";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ShowValidationDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: ShowValidationDirective, isStandalone: true, selector: "[showValidation]", inputs: { errorStyle: "errorStyle" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ShowValidationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[showValidation]",
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NgControl }], propDecorators: { errorStyle: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy12YWxpZGF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2RpcmVjdGl2ZXMvc2hvdy12YWxpZGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssR0FJTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7O0FBRXpFOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUtILE1BQU0sT0FBTyx1QkFBdUI7SUFTbEMsWUFDbUIsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsT0FBa0I7UUFGbEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFYckMsZUFBVSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBTXJDLGVBQVUsR0FBd0IsWUFBWSxDQUFDO0lBTXJELENBQUM7SUFFSixRQUFRO1FBQ04sTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFzQixDQUFDO1FBQ3hELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzFELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElB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QUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbkIsQ0FBQztJQUNILENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxNQUErQjtRQUNsRCxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7SUFDOUQsQ0FBQzsrR0E3RVUsdUJBQXVCO21HQUF2Qix1QkFBdUI7OzRGQUF2Qix1QkFBdUI7a0JBSm5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOytIQVFVLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgTmdDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFNob3dWYWxpZGF0aW9uU3R5bGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3Nob3ctdmFsaWRhdGlvbi1zdHlsZXMnO1xyXG5pbXBvcnQgeyBEZWZhdWx0U3R5bGUgfSBmcm9tIFwiLi4vY29uc3RhbnQvZGVmYXVsdC1zaG93LXZhbGlkYXRpb24tc3R5bGVcIjtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIGRpcmVjdGl2ZSB3aGljaCB3aWxsIHNob3cgYSB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2UgdG8gdGhlXHJcbiAqIHVzZXIuXHJcbiAqIEBpbXBsZW1lbnRhdGlvblxyXG4gKiA8aW5wdXRcclxuICogIHR5cGU9XCJ0ZXh0XCJcclxuICogIGZvcm1Db250cm9sTmFtZT1cImRlbW9Db250cm9sTmFtZVwiXHJcbiAqICBzaG93VmFsaWRhdGlvblxyXG4gKiAgW2Vycm9yU3R5bGVdPVwieyAgICAgICAgICAgICAgICAgIC0gT3B0aW9uYWwgc3R5bGUgaW5wdXRcclxuICogICAgZm9udF9zaXplOiAnbWVkaXVtJywgICAgICAgICAgICAgIHVzZWQgZm9yIGN1c3RvbWl6aW5nIHRoZSBsb29rXHJcbiAqICAgIGNvbG9yOiAnI2FkMDNmYycsXHJcbiAqICB9XCJcclxuICogLz5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltzaG93VmFsaWRhdGlvbl1cIixcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hvd1ZhbGlkYXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29udHJvbFN1YjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG4gIHBhcmVudCE6IEhUTUxFbGVtZW50O1xyXG4gIHNlbGYhOiBIVE1MRWxlbWVudDtcclxuICBjb250YWluZXIhOiBIVE1MRWxlbWVudDtcclxuICBzcGFuITogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG5cclxuICBASW5wdXQoKSBlcnJvclN0eWxlOiBTaG93VmFsaWRhdGlvblN0eWxlID0gRGVmYXVsdFN0eWxlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udHJvbDogTmdDb250cm9sXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGZvcm1Db250cm9sID0gdGhpcy5jb250cm9sLmNvbnRyb2wgYXMgRm9ybUNvbnRyb2w7XHJcbiAgICB0aGlzLnBhcmVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB0aGlzLnNlbGYgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lciwgdGhpcy5zZWxmKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5wYXJlbnQsIHRoaXMuY29udGFpbmVyKTtcclxuICAgIHRoaXMuc2V0U3R5bGVzKCk7XHJcblxyXG4gICAgdGhpcy5jb250cm9sU3ViLmFkZChcclxuICAgICAgZm9ybUNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKHN0YXR1cyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuaGlkZUVycm9yKCk7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJJTlZBTElEXCIpIHtcclxuICAgICAgICAgIGlmICghdGhpcy5zcGFuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKGZvcm1Db250cm9sLmVycm9ycyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250cm9sU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRTdHlsZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGFpbmVyLCBcImRpc3BsYXlcIiwgXCJmbGV4XCIpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRhaW5lciwgXCJmbGV4LWRpcmVjdGlvblwiLCBcImNvbHVtblwiKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250YWluZXIsIFwiZ2FwXCIsIFwiMTBweFwiKTtcclxuICAgIGNvbnN0IHJldHJpZXZlZFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5zZWxmKTtcclxuICAgIGNvbnN0IHRlbXBTdHlsZXM6IFNob3dWYWxpZGF0aW9uU3R5bGUgPSB7XHJcbiAgICAgIGZvbnRfc2l6ZTogcmV0cmlldmVkU3R5bGVzLmZvbnRTaXplLFxyXG4gICAgICBmb250X2ZhbWlseTogcmV0cmlldmVkU3R5bGVzLmZvbnRGYW1pbHksXHJcbiAgICAgIGNvbG9yOiByZXRyaWV2ZWRTdHlsZXMuY29sb3IsXHJcbiAgICAgIGJhY2tncm91bmRfY29sb3I6IHJldHJpZXZlZFN0eWxlcy5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgIGJvcmRlcjogcmV0cmlldmVkU3R5bGVzLmJvcmRlcixcclxuICAgICAgYm9yZGVyX3JhZGl1czogcmV0cmlldmVkU3R5bGVzLmJvcmRlclJhZGl1cyxcclxuICAgICAgd2lkdGg6IHJldHJpZXZlZFN0eWxlcy53aWR0aCxcclxuICAgICAgLi4udGhpcy5lcnJvclN0eWxlXHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmVudHJpZXModGVtcFN0eWxlcykuZm9yRWFjaCgoc3R5bGUpOiB2b2lkID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRhaW5lciwgc3R5bGVbMF0ucmVwbGFjZSgnXycsICctJyksIHN0eWxlWzFdKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzaG93RXJyb3IoZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5zcGFuID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICh0aGlzLnNwYW4gYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IHRoaXMuZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoZXJyb3JzKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIsIHRoaXMuc3Bhbik7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3BhbiwgJ3BhZGRpbmcnLCAnMHB4IDBweCAxMHB4IDEwcHgnKTtcclxuICB9XHJcblxyXG4gIGhpZGVFcnJvcigpOiB2b2lkIHtcclxuICAgIGlmKHRoaXMuY29udGFpbmVyICYmIHRoaXMuc3Bhbikge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyLCB0aGlzLnNwYW4pO1xyXG4gICAgICB0aGlzLnNwYW4gPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZXJyb3JzID8gT2JqZWN0LnZhbHVlcyhlcnJvcnMpWzBdIDogXCJJbnZhbGlkIElucHV0LlwiO1xyXG4gIH1cclxufVxyXG4iXX0=