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
        this.self = this.elementRef.nativeElement;
        this.retrievedStyles = getComputedStyle(this.self);
        const formControl = this.control.control;
        this.controlSub.add(formControl.valueChanges.subscribe((data) => {
            this.checkComponentRef.setInput('hasValue', !!data);
            this.resetErrors(formControl);
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
    resetErrors(formControl) {
        this.checkComponentRef.setInput('errors', null);
        this.checkComponentRef.setInput('errors', formControl.errors ? Object.keys(formControl.errors) : null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2RpcmVjdGl2ZXMvY2hlY2tzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBR0wsU0FBUyxFQUVULEtBQUssR0FJTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBTXBDLE1BQU0sT0FBTyxlQUFlO0lBVTFCLFlBQ21CLGdCQUFrQyxFQUNsQyxVQUFzQixFQUN0QixRQUFtQixFQUNuQixPQUFrQjtRQUhsQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBWnJDLGVBQVUsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWEzQyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFzQixDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUNqQixXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxXQUF3QjtRQUNsQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekcsQ0FBQzsrR0FoRFUsZUFBZTttR0FBZixlQUFlOzs0RkFBZixlQUFlO2tCQUozQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEpBT2tCLE1BQU07c0JBQXRCLEtBQUs7dUJBQUMsUUFBUTtnQkFDTixNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDaGVja3NDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NoZWNrcy9jaGVja3MuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjaGVja3NdJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBjaGVja0NvbXBvbmVudFJlZiE6IENvbXBvbmVudFJlZjxDaGVja3NDb21wb25lbnQ+O1xyXG4gIGNvbnRyb2xTdWI6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuICBzZWxmITogSFRNTEVsZW1lbnQ7XHJcbiAgcmV0cmlldmVkU3R5bGVzITogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcclxuXHJcbiAgQElucHV0KCdjaGVja3MnKSBjaGVja3MhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIEBJbnB1dCgpIHZDbGFzcyE6IHN0cmluZztcclxuICBASW5wdXQoKSB2U3R5bGUhOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250cm9sOiBOZ0NvbnRyb2xcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxmID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLnJldHJpZXZlZFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5zZWxmKTtcclxuICAgIFxyXG4gICAgY29uc3QgZm9ybUNvbnRyb2wgPSB0aGlzLmNvbnRyb2wuY29udHJvbCBhcyBGb3JtQ29udHJvbDtcclxuICAgIHRoaXMuY29udHJvbFN1Yi5hZGQoXHJcbiAgICAgIGZvcm1Db250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICB0aGlzLmNoZWNrQ29tcG9uZW50UmVmLnNldElucHV0KCdoYXNWYWx1ZScsICEhZGF0YSk7XHJcbiAgICAgICAgdGhpcy5yZXNldEVycm9ycyhmb3JtQ29udHJvbCk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja0NvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoQ2hlY2tzQ29tcG9uZW50KTtcclxuICAgIHRoaXMuY2hlY2tDb21wb25lbnRSZWYuc2V0SW5wdXQoJ2NoZWNrcycsIHRoaXMuY2hlY2tzKTtcclxuICAgIGNvbnN0IGluZGV4TnVtID0gTnVtYmVyLnBhcnNlSW50KHRoaXMucmV0cmlldmVkU3R5bGVzLnpJbmRleCk7XHJcbiAgICBjb25zdCB6SW5kZXggPSBOdW1iZXIuaXNOYU4oaW5kZXhOdW0pID8gMSA6IGluZGV4TnVtO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNlbGYsICd6SW5kZXgnLCBgJHt6SW5kZXh9YCk7XHJcbiAgICB0aGlzLmNoZWNrQ29tcG9uZW50UmVmLnNldElucHV0KCd6SW5kZXgnLCBgJHt6SW5kZXggLSAxfWApO1xyXG4gICAgdGhpcy5jaGVja0NvbXBvbmVudFJlZi5zZXRJbnB1dCgnY2xhc3MnLCB0aGlzLnZDbGFzcyk7XHJcbiAgICB0aGlzLmNoZWNrQ29tcG9uZW50UmVmLnNldElucHV0KCdzdHlsZScsIHRoaXMudlN0eWxlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250cm9sU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICByZXNldEVycm9ycyhmb3JtQ29udHJvbDogRm9ybUNvbnRyb2wpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tDb21wb25lbnRSZWYuc2V0SW5wdXQoJ2Vycm9ycycsIG51bGwpO1xyXG4gICAgdGhpcy5jaGVja0NvbXBvbmVudFJlZi5zZXRJbnB1dCgnZXJyb3JzJywgZm9ybUNvbnRyb2wuZXJyb3JzID8gT2JqZWN0LmtleXMoZm9ybUNvbnRyb2wuZXJyb3JzKSA6IG51bGwpO1xyXG4gIH1cclxufVxyXG4iXX0=