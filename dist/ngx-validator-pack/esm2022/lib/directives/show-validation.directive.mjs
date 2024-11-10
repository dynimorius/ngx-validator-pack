/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { Directive, Input, } from "@angular/core";
import { Subscription } from "rxjs";
import { DefaultContainerStyles, DefaultSpanStyles, DefaultStyle, } from "../constant/default-show-validation-style";
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
        this.retrievedStyles = getComputedStyle(this.self);
        this.container = this.renderer.createElement("div");
        this.renderer.appendChild(this.container, this.self);
        this.renderer.appendChild(this.parent, this.container);
        this.setContainerStyles();
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
    setContainerStyles() {
        this.setStyles(this.container, DefaultContainerStyles);
        this.renderer.setStyle(this.container, "width", this.retrievedStyles.width);
    }
    setSpanStyles() {
        this.setZIndex();
        this.setStyles(this.span, { ...DefaultSpanStyles, ...this.errorStyle });
    }
    setZIndex() {
        const indexNum = Number.parseInt(this.retrievedStyles.zIndex);
        const zIndex = Number.isNaN(indexNum) ? 1 : indexNum;
        this.renderer.setStyle(this.self, "zIndex", `${zIndex}`);
        this.renderer.setStyle(this.span, "zIndex", `${zIndex - 1}`);
    }
    setStyles(element, styles) {
        Object.entries(styles).forEach((style) => {
            this.renderer.setStyle(element, style[0], style[1]);
        });
    }
    showError(errors) {
        this.span = this.renderer.createElement("span");
        this.span.innerHTML = this.getValidationMessage(errors);
        this.renderer.appendChild(this.container, this.span);
        this.setSpanStyles();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy12YWxpZGF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2RpcmVjdGl2ZXMvc2hvdy12YWxpZGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssR0FJTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsaUJBQWlCLEVBQ2pCLFlBQVksR0FDYixNQUFNLDJDQUEyQyxDQUFDOzs7QUFFbkQ7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBS0gsTUFBTSxPQUFPLHVCQUF1QjtJQVVsQyxZQUNtQixVQUFzQixFQUN0QixRQUFtQixFQUNuQixPQUFrQjtRQUZsQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQVpyQyxlQUFVLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFPckMsZUFBVSxHQUE0QixZQUFZLENBQUM7SUFNekQsQ0FBQztJQUVKLFFBQVE7UUFDTixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQXNCLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFR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QUNyRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ25CLENBQUM7SUFDSCxDQUFDO0lBRUQsb0JBQW9CLENBQUMsTUFBK0I7UUFDbEQsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO0lBQzlELENBQUM7K0dBcEZVLHVCQUF1QjttR0FBdkIsdUJBQXVCOzs0RkFBdkIsdUJBQXVCO2tCQUpuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjsrSEFTVSxVQUFVO3NCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE5nQ29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge1xyXG4gIERlZmF1bHRDb250YWluZXJTdHlsZXMsXHJcbiAgRGVmYXVsdFNwYW5TdHlsZXMsXHJcbiAgRGVmYXVsdFN0eWxlLFxyXG59IGZyb20gXCIuLi9jb25zdGFudC9kZWZhdWx0LXNob3ctdmFsaWRhdGlvbi1zdHlsZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgZGlyZWN0aXZlIHdoaWNoIHdpbGwgc2hvdyBhIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZSB0byB0aGVcclxuICogdXNlci5cclxuICogQGltcGxlbWVudGF0aW9uXHJcbiAqIDxpbnB1dFxyXG4gKiAgdHlwZT1cInRleHRcIlxyXG4gKiAgZm9ybUNvbnRyb2xOYW1lPVwiZGVtb0NvbnRyb2xOYW1lXCJcclxuICogIHNob3dWYWxpZGF0aW9uXHJcbiAqICBbZXJyb3JTdHlsZV09XCJ7ICAgICAgICAgICAgICAgICAgLSBPcHRpb25hbCBzdHlsZSBpbnB1dFxyXG4gKiAgICBmb250X3NpemU6ICdtZWRpdW0nLCAgICAgICAgICAgICAgdXNlZCBmb3IgY3VzdG9taXppbmcgdGhlIGxvb2tcclxuICogICAgY29sb3I6ICcjYWQwM2ZjJyxcclxuICogIH1cIlxyXG4gKiAvPlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW3Nob3dWYWxpZGF0aW9uXVwiLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaG93VmFsaWRhdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBjb250cm9sU3ViOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgcGFyZW50ITogSFRNTEVsZW1lbnQ7XHJcbiAgc2VsZiE6IEhUTUxFbGVtZW50O1xyXG4gIGNvbnRhaW5lciE6IEhUTUxFbGVtZW50O1xyXG4gIHNwYW4hOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgcmV0cmlldmVkU3R5bGVzITogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcclxuXHJcbiAgQElucHV0KCkgZXJyb3JTdHlsZToge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSBEZWZhdWx0U3R5bGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250cm9sOiBOZ0NvbnRyb2xcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgZm9ybUNvbnRyb2wgPSB0aGlzLmNvbnRyb2wuY29udHJvbCBhcyBGb3JtQ29udHJvbDtcclxuICAgIHRoaXMucGFyZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIHRoaXMuc2VsZiA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5yZXRyaWV2ZWRTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuc2VsZik7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIsIHRoaXMuc2VsZik7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMucGFyZW50LCB0aGlzLmNvbnRhaW5lcik7XHJcbiAgICB0aGlzLnNldENvbnRhaW5lclN0eWxlcygpO1xyXG5cclxuICAgIHRoaXMuY29udHJvbFN1Yi5hZGQoXHJcbiAgICAgIGZvcm1Db250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKChzdGF0dXMpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLmhpZGVFcnJvcigpO1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IFwiSU5WQUxJRFwiKSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuc3Bhbikge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvcihmb3JtQ29udHJvbC5lcnJvcnMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udHJvbFN1Yi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGFpbmVyU3R5bGVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5jb250YWluZXIsIERlZmF1bHRDb250YWluZXJTdHlsZXMpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRhaW5lciwgXCJ3aWR0aFwiLCB0aGlzLnJldHJpZXZlZFN0eWxlcy53aWR0aCk7XHJcbiAgfVxyXG5cclxuICBzZXRTcGFuU3R5bGVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRaSW5kZXgoKTtcclxuICAgIHRoaXMuc2V0U3R5bGVzKHRoaXMuc3BhbiwgeyAuLi5EZWZhdWx0U3BhblN0eWxlcywgLi4udGhpcy5lcnJvclN0eWxlIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0WkluZGV4KCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXhOdW0gPSBOdW1iZXIucGFyc2VJbnQodGhpcy5yZXRyaWV2ZWRTdHlsZXMuekluZGV4KTtcclxuICAgIGNvbnN0IHpJbmRleCA9IE51bWJlci5pc05hTihpbmRleE51bSkgPyAxIDogaW5kZXhOdW07XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2VsZiwgXCJ6SW5kZXhcIiwgYCR7ekluZGV4fWApO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwYW4sIFwiekluZGV4XCIsIGAke3pJbmRleCAtIDF9YCk7XHJcbiAgfVxyXG5cclxuICBzZXRTdHlsZXMoXHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsXHJcbiAgICBzdHlsZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cclxuICApOiB2b2lkIHtcclxuICAgIE9iamVjdC5lbnRyaWVzKHN0eWxlcykuZm9yRWFjaCgoc3R5bGUpOiB2b2lkID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50LCBzdHlsZVswXSwgc3R5bGVbMV0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93RXJyb3IoZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5zcGFuID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICh0aGlzLnNwYW4gYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IHRoaXMuZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoZXJyb3JzKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIsIHRoaXMuc3Bhbik7XHJcbiAgICB0aGlzLnNldFNwYW5TdHlsZXMoKTtcclxuICB9XHJcblxyXG4gIGhpZGVFcnJvcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiB0aGlzLnNwYW4pIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lciwgdGhpcy5zcGFuKTtcclxuICAgICAgdGhpcy5zcGFuID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFZhbGlkYXRpb25NZXNzYWdlKGVycm9yczogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGVycm9ycyA/IE9iamVjdC52YWx1ZXMoZXJyb3JzKVswXSA6IFwiSW52YWxpZCBJbnB1dC5cIjtcclxuICB9XHJcbn1cclxuIl19