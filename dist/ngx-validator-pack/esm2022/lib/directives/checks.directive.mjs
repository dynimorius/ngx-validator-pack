/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { Directive, Input, } from '@angular/core';
import { ChecksComponent } from '../components/checks/checks.component';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class ChecksDirective {
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
        this.controlSub.add(formControl.valueChanges.subscribe((data) => {
            this.checkComponentRef.setInput('hasValue', !!data);
            this.checkComponentRef.setInput('errors', null);
            this.checkComponentRef.setInput('errors', Object.keys(formControl?.errors ?? {}));
        }));
    }
    ngAfterViewInit() {
        this.checkComponentRef = this.viewContainerRef.createComponent(ChecksComponent);
        this.checkComponentRef.setInput('checks', this.checks);
        const indexNum = Number.parseInt(this.retrievedStyles.zIndex);
        const zIndex = Number.isNaN(indexNum) ? 1 : indexNum;
        this.renderer.setStyle(this.self, 'zIndex', `${zIndex}`);
        this.checkComponentRef.setInput('zIndex', `${zIndex - 1}`);
        this.checkComponentRef.setInput('class', this.vClass);
        this.checkComponentRef.setInput('style', this.vStyle);
    }
    ngOnDestroy() {
        this.controlSub.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ChecksDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: ChecksDirective, isStandalone: true, selector: "[checks]", inputs: { checks: "checks", vClass: "vClass", vStyle: "vStyle" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ChecksDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[checks]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NgControl }], propDecorators: { checks: [{
                type: Input,
                args: ['checks']
            }], vClass: [{
                type: Input
            }], vStyle: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2RpcmVjdGl2ZXMvY2hlY2tzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBR0wsU0FBUyxFQUVULEtBQUssR0FJTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBTXBDLE1BQU0sT0FBTyxlQUFlO0lBVTFCLFlBQ21CLGdCQUFrQyxFQUNsQyxVQUFzQixFQUN0QixRQUFtQixFQUNuQixPQUFrQjtRQUhsQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBWnJDLGVBQVUsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWEzQyxDQUFDO0lBRUosUUFBUTtRQUNOLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBc0IsQ0FBQztRQUN4RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUNqQixXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUM3QixRQUFRLEVBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUN2QyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQzVELGVBQWUsQ0FDaEIsQ0FBQztRQUNGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQzsrR0FoRFUsZUFBZTttR0FBZixlQUFlOzs0RkFBZixlQUFlO2tCQUozQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEpBT2tCLE1BQU07c0JBQXRCLEtBQUs7dUJBQUMsUUFBUTtnQkFDTixNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2hlY2tzQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jaGVja3MvY2hlY2tzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NoZWNrc10nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja3NEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBjaGVja0NvbXBvbmVudFJlZiE6IENvbXBvbmVudFJlZjxDaGVja3NDb21wb25lbnQ+O1xuICBjb250cm9sU3ViOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHNlbGYhOiBIVE1MRWxlbWVudDtcbiAgcmV0cmlldmVkU3R5bGVzITogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICBASW5wdXQoJ2NoZWNrcycpIGNoZWNrcyE6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIEBJbnB1dCgpIHZDbGFzcyE6IHN0cmluZztcbiAgQElucHV0KCkgdlN0eWxlITogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udHJvbDogTmdDb250cm9sXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBmb3JtQ29udHJvbCA9IHRoaXMuY29udHJvbC5jb250cm9sIGFzIEZvcm1Db250cm9sO1xuICAgIHRoaXMuc2VsZiA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmV0cmlldmVkU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnNlbGYpO1xuICAgIHRoaXMuY29udHJvbFN1Yi5hZGQoXG4gICAgICBmb3JtQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuY2hlY2tDb21wb25lbnRSZWYuc2V0SW5wdXQoJ2hhc1ZhbHVlJywgISFkYXRhKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbXBvbmVudFJlZi5zZXRJbnB1dCgnZXJyb3JzJywgbnVsbCk7XG4gICAgICAgIHRoaXMuY2hlY2tDb21wb25lbnRSZWYuc2V0SW5wdXQoXG4gICAgICAgICAgJ2Vycm9ycycsXG4gICAgICAgICAgT2JqZWN0LmtleXMoZm9ybUNvbnRyb2w/LmVycm9ycyA/PyB7fSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrQ29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChcbiAgICAgIENoZWNrc0NvbXBvbmVudFxuICAgICk7XG4gICAgdGhpcy5jaGVja0NvbXBvbmVudFJlZi5zZXRJbnB1dCgnY2hlY2tzJywgdGhpcy5jaGVja3MpO1xuICAgIGNvbnN0IGluZGV4TnVtID0gTnVtYmVyLnBhcnNlSW50KHRoaXMucmV0cmlldmVkU3R5bGVzLnpJbmRleCk7XG4gICAgY29uc3QgekluZGV4ID0gTnVtYmVyLmlzTmFOKGluZGV4TnVtKSA/IDEgOiBpbmRleE51bTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2VsZiwgJ3pJbmRleCcsIGAke3pJbmRleH1gKTtcbiAgICB0aGlzLmNoZWNrQ29tcG9uZW50UmVmLnNldElucHV0KCd6SW5kZXgnLCBgJHt6SW5kZXggLSAxfWApO1xuICAgIHRoaXMuY2hlY2tDb21wb25lbnRSZWYuc2V0SW5wdXQoJ2NsYXNzJywgdGhpcy52Q2xhc3MpO1xuICAgIHRoaXMuY2hlY2tDb21wb25lbnRSZWYuc2V0SW5wdXQoJ3N0eWxlJywgdGhpcy52U3R5bGUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jb250cm9sU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==