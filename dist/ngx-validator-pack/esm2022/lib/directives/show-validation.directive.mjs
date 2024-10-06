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
            if (status === "INVALID") {
                if (!this.span) {
                    this.showError(formControl.errors);
                }
            }
            else {
                this.hideError();
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
        Object.entries(this.errorStyle).forEach((style) => {
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
        if (this.container, this.span) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy12YWxpZGF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2RpcmVjdGl2ZXMvc2hvdy12YWxpZGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssR0FJTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7O0FBTXpFLE1BQU0sT0FBTyx1QkFBdUI7SUFTbEMsWUFDVSxVQUFzQixFQUN0QixRQUFtQixFQUNuQixPQUFrQjtRQUZsQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQVg1QixlQUFVLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFNckMsZUFBVSxHQUF3QixZQUFZLENBQUM7SUFNckQsQ0FBQztJQUVKLFFBQVE7UUFDTixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQXNCLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FB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akI7K0hBUVUsVUFBVTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xuICovXG5cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgTmdDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgU2hvd1ZhbGlkYXRpb25TdHlsZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2hvdy12YWxpZGF0aW9uLXN0eWxlcyc7XG5pbXBvcnQgeyBEZWZhdWx0U3R5bGUgfSBmcm9tIFwiLi4vY29uc3RhbnQvZGVmYXVsdC1zaG93LXZhbGlkYXRpb24tc3R5bGVcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcIltzaG93VmFsaWRhdGlvbl1cIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgU2hvd1ZhbGlkYXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnRyb2xTdWI6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgcGFyZW50ITogSFRNTEVsZW1lbnQ7XG4gIHNlbGYhOiBIVE1MRWxlbWVudDtcbiAgY29udGFpbmVyITogSFRNTEVsZW1lbnQ7XG4gIHNwYW4hOiBIVE1MRWxlbWVudCB8IG51bGw7XG5cbiAgQElucHV0KCkgZXJyb3JTdHlsZTogU2hvd1ZhbGlkYXRpb25TdHlsZSA9IERlZmF1bHRTdHlsZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY29udHJvbDogTmdDb250cm9sXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBmb3JtQ29udHJvbCA9IHRoaXMuY29udHJvbC5jb250cm9sIGFzIEZvcm1Db250cm9sO1xuICAgIHRoaXMucGFyZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB0aGlzLnNlbGYgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyLCB0aGlzLnNlbGYpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5wYXJlbnQsIHRoaXMuY29udGFpbmVyKTtcbiAgICB0aGlzLnNldFN0eWxlcygpO1xuXG4gICAgdGhpcy5jb250cm9sU3ViLmFkZChcbiAgICAgIGZvcm1Db250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKChzdGF0dXMpID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJJTlZBTElEXCIpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuc3Bhbikge1xuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IoZm9ybUNvbnRyb2wuZXJyb3JzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jb250cm9sU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBzZXRTdHlsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRhaW5lciwgXCJkaXNwbGF5XCIsIFwiZmxleFwiKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGFpbmVyLCBcImZsZXgtZGlyZWN0aW9uXCIsIFwiY29sdW1uXCIpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250YWluZXIsIFwiZ2FwXCIsIFwiMTBweFwiKTtcbiAgICBPYmplY3QuZW50cmllcyh0aGlzLmVycm9yU3R5bGUpLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGFpbmVyLCBzdHlsZVswXS5yZXBsYWNlKCdfJywgJy0nKSwgc3R5bGVbMV0pO1xuICAgIH0pXG4gIH1cblxuICBzaG93RXJyb3IoZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuc3BhbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgKHRoaXMuc3BhbiBhcyBIVE1MRWxlbWVudCkuaW5uZXJIVE1MID0gdGhpcy5nZXRWYWxpZGF0aW9uTWVzc2FnZShlcnJvcnMpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIsIHRoaXMuc3Bhbik7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwYW4sICdwYWRkaW5nJywgJzBweCAwcHggMTBweCAxMHB4Jyk7XG4gIH1cblxuICBoaWRlRXJyb3IoKTogdm9pZCB7XG4gICAgaWYodGhpcy5jb250YWluZXIsIHRoaXMuc3Bhbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lciwgdGhpcy5zcGFuKTtcbiAgICAgIHRoaXMuc3BhbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVycm9ycyA/IE9iamVjdC52YWx1ZXMoZXJyb3JzKVswXSA6IFwiSW52YWxpZCBJbnB1dC5cIjtcbiAgfVxufVxuIl19