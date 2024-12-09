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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: ChecksComponent, isStandalone: true, selector: "ng-component", inputs: { hasValue: "hasValue", checks: "checks", errors: "errors" }, usesInheritance: true, ngImport: i0, template: "<div id=\"checks\" #validationContent [class]=\"_class\" [style]=\"style\">\n    <span *ngFor=\"let check of _checks | objectValues; let i = index\">\n        <span id=\"{{'check' + i}}\" [ngClass]=\"{\n        checked: hasValue && !check.hasError,\n        failed: check.hasError,\n        }\">{{check.hasError | checked }}</span> - {{ check.msg }}\n    </span>\n</div>\n", styles: [".checks-validation-content{position:relative;top:-5px;color:#969696;border:1px solid #d9d9d9;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;display:flex;flex-direction:column}.checked{color:#22cfad}.failed{color:salmon}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "pipe", type: CheckedPipe, name: "checked" }, { kind: "pipe", type: ObjectValuesPipe, name: "objectValues" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ChecksComponent, decorators: [{
            type: Component,
            args: [{ selector: '', standalone: true, imports: [NgClass, NgFor, CheckedPipe, ObjectValuesPipe], template: "<div id=\"checks\" #validationContent [class]=\"_class\" [style]=\"style\">\n    <span *ngFor=\"let check of _checks | objectValues; let i = index\">\n        <span id=\"{{'check' + i}}\" [ngClass]=\"{\n        checked: hasValue && !check.hasError,\n        failed: check.hasError,\n        }\">{{check.hasError | checked }}</span> - {{ check.msg }}\n    </span>\n</div>\n", styles: [".checks-validation-content{position:relative;top:-5px;color:#969696;border:1px solid #d9d9d9;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;display:flex;flex-direction:column}.checked{color:#22cfad}.failed{color:salmon}\n"] }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }], propDecorators: { hasValue: [{
                type: Input
            }], checks: [{
                type: Input
            }], errors: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tzL2NoZWNrcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jb21wb25lbnRzL2NoZWNrcy9jaGVja3MuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFTbEUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsYUFBYTtJQUtoRCxJQUFhLE1BQU0sQ0FBQyxRQUFtQztRQUNyRCxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7Z0JBQ3ZCLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNiLFFBQVEsRUFBRSxLQUFLO2FBQ2hCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBYSxNQUFNLENBQUMsTUFBdUI7UUFDekMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQztZQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTztRQUNULENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN0QyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFDb0IsUUFBbUIsRUFDbkIsaUJBQW9DO1FBRXRELEtBQUssQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUhqQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUE3Qi9DLGlCQUFZLEdBQVcsMkJBQTJCLENBQUM7UUFDNUQsWUFBTyxHQUFVLEVBQUUsQ0FBQztJQStCcEIsQ0FBQzsrR0FqQ1UsZUFBZTttR0FBZixlQUFlLHFLQ3RCNUIsc1hBUUEsNGFEVVksT0FBTyxvRkFBRSxLQUFLLDhHQUFFLFdBQVcsMkNBQUUsZ0JBQWdCOzs0RkFJNUMsZUFBZTtrQkFQM0IsU0FBUzsrQkFDRSxFQUFFLGNBQ0EsSUFBSSxXQUNQLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUM7OEdBUS9DLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ08sTUFBTTtzQkFBbEIsS0FBSztnQkFTTyxNQUFNO3NCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXG4gKi9cblxuaW1wb3J0IHsgTmdDbGFzcywgTmdGb3IgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tlZFBpcGUgfSBmcm9tICcuLi8uLi9waXBlcy9jaGVja2VkLnBpcGUnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2sgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2NoZWNrLWNvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgT2JqZWN0VmFsdWVzUGlwZSB9IGZyb20gJy4uLy4uL3BpcGVzL29iamVjdC12YWx1ZXMucGlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBOZ0ZvciwgQ2hlY2tlZFBpcGUsIE9iamVjdFZhbHVlc1BpcGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2NoZWNrcy5jb21wb25lbnQuY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tzQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIG92ZXJyaWRlIGRlZmF1bHRDbGFzczogc3RyaW5nID0gJ2NoZWNrcy12YWxpZGF0aW9uLWNvbnRlbnQnO1xuICBfY2hlY2tzOiBDaGVjayA9IHt9O1xuXG4gIEBJbnB1dCgpIGhhc1ZhbHVlITogYm9vbGVhbjtcbiAgQElucHV0KCkgc2V0IGNoZWNrcyhjaGVja09iajogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIE9iamVjdC5lbnRyaWVzKGNoZWNrT2JqKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgdGhpcy5fY2hlY2tzW2VudHJ5WzBdXSA9IHtcbiAgICAgICAgbXNnOiBlbnRyeVsxXSxcbiAgICAgICAgaGFzRXJyb3I6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBASW5wdXQoKSBzZXQgZXJyb3JzKGVyckFycjogc3RyaW5nW10gfCBudWxsKSB7XG4gICAgaWYgKCFlcnJBcnI/Lmxlbmd0aCkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5fY2hlY2tzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja3Nba2V5XS5oYXNFcnJvciA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVyckFyci5mb3JFYWNoKChlcnJvcjogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY2hlY2tzW2Vycm9yXSkge1xuICAgICAgICB0aGlzLl9jaGVja3NbZXJyb3JdLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG92ZXJyaWRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgb3ZlcnJpZGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHN1cGVyKHJlbmRlcmVyLCBjaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cbn1cbiIsIjxkaXYgaWQ9XCJjaGVja3NcIiAjdmFsaWRhdGlvbkNvbnRlbnQgW2NsYXNzXT1cIl9jbGFzc1wiIFtzdHlsZV09XCJzdHlsZVwiPlxuICAgIDxzcGFuICpuZ0Zvcj1cImxldCBjaGVjayBvZiBfY2hlY2tzIHwgb2JqZWN0VmFsdWVzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgIDxzcGFuIGlkPVwie3snY2hlY2snICsgaX19XCIgW25nQ2xhc3NdPVwie1xuICAgICAgICBjaGVja2VkOiBoYXNWYWx1ZSAmJiAhY2hlY2suaGFzRXJyb3IsXG4gICAgICAgIGZhaWxlZDogY2hlY2suaGFzRXJyb3IsXG4gICAgICAgIH1cIj57e2NoZWNrLmhhc0Vycm9yIHwgY2hlY2tlZCB9fTwvc3Bhbj4gLSB7eyBjaGVjay5tc2cgfX1cbiAgICA8L3NwYW4+XG48L2Rpdj5cbiJdfQ==