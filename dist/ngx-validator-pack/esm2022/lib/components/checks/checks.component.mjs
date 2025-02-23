/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CheckedPipe } from '../../pipes/checked.pipe';
import { BaseComponent } from '../base/base.component';
import { ObjectValuesPipe } from '../../pipes/object-values.pipe';
import * as i0 from "@angular/core";
export class ChecksComponent extends BaseComponent {
    set checks(checkObj) {
        Object.entries(checkObj).forEach((entry) => {
            this._checks[entry[0]] = {
                msg: entry[1],
                hasError: false,
            };
        });
        this.changeDetectorRef.detectChanges();
    }
    set errors(errArr) {
        if (!errArr?.length) {
            Object.keys(this._checks).forEach((key) => {
                this._checks[key].hasError = false;
            });
            return;
        }
        errArr.forEach((error) => {
            if (this._checks[error]) {
                this._checks[error].hasError = true;
            }
        });
    }
    constructor(renderer, changeDetectorRef) {
        super(renderer, changeDetectorRef);
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.defaultClass = 'checks-validation-content';
        this._checks = {};
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ChecksComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: ChecksComponent, isStandalone: true, selector: "ng-component", inputs: { hasValue: "hasValue", checks: "checks", errors: "errors" }, usesInheritance: true, ngImport: i0, template: "<div id=\"checks\" #validationContent [class]=\"_class\" [style]=\"style\">\r\n    <span *ngFor=\"let check of _checks | objectValues; let i = index\">\r\n        <span id=\"{{'check' + i}}\" [ngClass]=\"{\r\n        checked: hasValue && !check.hasError,\r\n        failed: check.hasError,\r\n        }\">{{check.hasError | checked }}</span> - {{ check.msg }}\r\n    </span>\r\n</div>\r\n", styles: [".checks-validation-content{position:relative;top:-5px;color:#969696;border:1px solid #d9d9d9;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;display:flex;flex-direction:column}.checked{color:#22cfad}.failed{color:salmon}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "pipe", type: CheckedPipe, name: "checked" }, { kind: "pipe", type: ObjectValuesPipe, name: "objectValues" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ChecksComponent, decorators: [{
            type: Component,
            args: [{ selector: '', standalone: true, imports: [NgClass, NgFor, CheckedPipe, ObjectValuesPipe], template: "<div id=\"checks\" #validationContent [class]=\"_class\" [style]=\"style\">\r\n    <span *ngFor=\"let check of _checks | objectValues; let i = index\">\r\n        <span id=\"{{'check' + i}}\" [ngClass]=\"{\r\n        checked: hasValue && !check.hasError,\r\n        failed: check.hasError,\r\n        }\">{{check.hasError | checked }}</span> - {{ check.msg }}\r\n    </span>\r\n</div>\r\n", styles: [".checks-validation-content{position:relative;top:-5px;color:#969696;border:1px solid #d9d9d9;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;display:flex;flex-direction:column}.checked{color:#22cfad}.failed{color:salmon}\n"] }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }], propDecorators: { hasValue: [{
                type: Input
            }], checks: [{
                type: Input
            }], errors: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tzL2NoZWNrcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jb21wb25lbnRzL2NoZWNrcy9jaGVja3MuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFTbEUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsYUFBYTtJQUtoRCxJQUFhLE1BQU0sQ0FBQyxRQUFtQztRQUNyRCxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7Z0JBQ3ZCLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNiLFFBQVEsRUFBRSxLQUFLO2FBQ2hCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBYSxNQUFNLENBQUMsTUFBdUI7UUFDekMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQztZQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTztRQUNULENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN0QyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFDb0IsUUFBbUIsRUFDbkIsaUJBQW9DO1FBRXRELEtBQUssQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUhqQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUE3Qi9DLGlCQUFZLEdBQVcsMkJBQTJCLENBQUM7UUFDNUQsWUFBTyxHQUFVLEVBQUUsQ0FBQztJQStCcEIsQ0FBQzsrR0FqQ1UsZUFBZTttR0FBZixlQUFlLHFLQ3RCNUIsc1lBUUEsNGFEVVksT0FBTyxvRkFBRSxLQUFLLDhHQUFFLFdBQVcsMkNBQUUsZ0JBQWdCOzs0RkFJNUMsZUFBZTtrQkFQM0IsU0FBUzsrQkFDRSxFQUFFLGNBQ0EsSUFBSSxXQUNQLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUM7OEdBUS9DLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ08sTUFBTTtzQkFBbEIsS0FBSztnQkFTTyxNQUFNO3NCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IE5nQ2xhc3MsIE5nRm9yIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGVja2VkUGlwZSB9IGZyb20gJy4uLy4uL3BpcGVzL2NoZWNrZWQucGlwZSc7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2NoZWNrLWNvbmZpZy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBPYmplY3RWYWx1ZXNQaXBlIH0gZnJvbSAnLi4vLi4vcGlwZXMvb2JqZWN0LXZhbHVlcy5waXBlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBOZ0ZvciwgQ2hlY2tlZFBpcGUsIE9iamVjdFZhbHVlc1BpcGVdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja3MuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9jaGVja3MuY29tcG9uZW50LmNzcycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja3NDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICBvdmVycmlkZSBkZWZhdWx0Q2xhc3M6IHN0cmluZyA9ICdjaGVja3MtdmFsaWRhdGlvbi1jb250ZW50JztcclxuICBfY2hlY2tzOiBDaGVjayA9IHt9O1xyXG5cclxuICBASW5wdXQoKSBoYXNWYWx1ZSE6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2V0IGNoZWNrcyhjaGVja09iajogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xyXG4gICAgT2JqZWN0LmVudHJpZXMoY2hlY2tPYmopLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgIHRoaXMuX2NoZWNrc1tlbnRyeVswXV0gPSB7XHJcbiAgICAgICAgbXNnOiBlbnRyeVsxXSxcclxuICAgICAgICBoYXNFcnJvcjogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuICBASW5wdXQoKSBzZXQgZXJyb3JzKGVyckFycjogc3RyaW5nW10gfCBudWxsKSB7XHJcbiAgICBpZiAoIWVyckFycj8ubGVuZ3RoKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuX2NoZWNrcykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICB0aGlzLl9jaGVja3Nba2V5XS5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZXJyQXJyLmZvckVhY2goKGVycm9yOiBzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX2NoZWNrc1tlcnJvcl0pIHtcclxuICAgICAgICB0aGlzLl9jaGVja3NbZXJyb3JdLmhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG92ZXJyaWRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBvdmVycmlkZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKHJlbmRlcmVyLCBjaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgaWQ9XCJjaGVja3NcIiAjdmFsaWRhdGlvbkNvbnRlbnQgW2NsYXNzXT1cIl9jbGFzc1wiIFtzdHlsZV09XCJzdHlsZVwiPlxyXG4gICAgPHNwYW4gKm5nRm9yPVwibGV0IGNoZWNrIG9mIF9jaGVja3MgfCBvYmplY3RWYWx1ZXM7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICA8c3BhbiBpZD1cInt7J2NoZWNrJyArIGl9fVwiIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICBjaGVja2VkOiBoYXNWYWx1ZSAmJiAhY2hlY2suaGFzRXJyb3IsXHJcbiAgICAgICAgZmFpbGVkOiBjaGVjay5oYXNFcnJvcixcclxuICAgICAgICB9XCI+e3tjaGVjay5oYXNFcnJvciB8IGNoZWNrZWQgfX08L3NwYW4+IC0ge3sgY2hlY2subXNnIH19XHJcbiAgICA8L3NwYW4+XHJcbjwvZGl2PlxyXG4iXX0=