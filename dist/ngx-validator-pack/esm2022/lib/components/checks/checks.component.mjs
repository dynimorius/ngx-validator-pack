/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { NgClass, NgFor } from '@angular/common';
import { Component, Input, } from '@angular/core';
import { CheckedPipe } from '../../pipes/checked.pipe';
import { BaseComponent } from '../base/base.component';
import * as i0 from "@angular/core";
export class ChecksComponent extends BaseComponent {
    set checks(checkObj) {
        Object.entries(checkObj).forEach((entry) => {
            this._checks.push({
                check: entry[0],
                msg: entry[1],
                hasError: false,
            });
        });
        this.changeDetectorRef.detectChanges();
    }
    set errors(errArr) {
        if (!errArr?.length) {
            this._checks.forEach((check) => (check.hasError = false));
            return;
        }
        errArr.forEach((error) => {
            this._checks.map((check) => {
                if (check.check === error) {
                    check.hasError = true;
                }
            });
        });
    }
    constructor(renderer, changeDetectorRef) {
        super(renderer, changeDetectorRef);
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this._checks = [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ChecksComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: ChecksComponent, isStandalone: true, selector: "ng-component", inputs: { hasValue: "hasValue", checks: "checks", errors: "errors" }, usesInheritance: true, ngImport: i0, template: "<div #validationContent [class]=\"_class\" [style]=\"style\">\n    <div *ngFor=\"let check of _checks\">\n        <span>\n            <span [ngClass]=\"{\n            checked: hasValue && !check.hasError,\n            failed: check.hasError,\n            }\">{{check.hasError | checked }}</span> - {{ check.msg }}</span>\n    </div>\n</div>\n", styles: [".dmz-validation-content{position:relative;top:-5px;color:#969696;border:1px solid #d9d9d9;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}.checked{color:#22cfad}.failed{color:salmon}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "pipe", type: CheckedPipe, name: "checked" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ChecksComponent, decorators: [{
            type: Component,
            args: [{ selector: '', standalone: true, imports: [NgClass, NgFor, CheckedPipe], template: "<div #validationContent [class]=\"_class\" [style]=\"style\">\n    <div *ngFor=\"let check of _checks\">\n        <span>\n            <span [ngClass]=\"{\n            checked: hasValue && !check.hasError,\n            failed: check.hasError,\n            }\">{{check.hasError | checked }}</span> - {{ check.msg }}</span>\n    </div>\n</div>\n", styles: [".dmz-validation-content{position:relative;top:-5px;color:#969696;border:1px solid #d9d9d9;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}.checked{color:#22cfad}.failed{color:salmon}\n"] }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }], propDecorators: { hasValue: [{
                type: Input
            }], checks: [{
                type: Input
            }], errors: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tzL2NoZWNrcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jb21wb25lbnRzL2NoZWNrcy9jaGVja3MuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsU0FBUyxFQUNULEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQVN2RCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxhQUFhO0lBSWhELElBQWEsTUFBTSxDQUFDLFFBQWtCO1FBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNmLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNiLFFBQVEsRUFBRSxLQUFLO2FBQ2hCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFDRCxJQUFhLE1BQU0sQ0FBQyxNQUF1QjtRQUN6QyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMxRCxPQUFPO1FBQ1QsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN6QixJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFLENBQUM7b0JBQzFCLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUNvQixRQUFtQixFQUNuQixpQkFBb0M7UUFFdEQsS0FBSyxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBSGpCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTdCeEQsWUFBTyxHQUF3RCxFQUFFLENBQUM7SUFnQ2xFLENBQUM7K0dBakNVLGVBQWU7bUdBQWYsZUFBZSxxS0N6QjVCLHdWQVNBLHNZRFlZLE9BQU8sb0ZBQUUsS0FBSyw4R0FBRSxXQUFXOzs0RkFJMUIsZUFBZTtrQkFQM0IsU0FBUzsrQkFDRSxFQUFFLGNBQ0EsSUFBSSxXQUNQLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUM7OEdBTzdCLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ08sTUFBTTtzQkFBbEIsS0FBSztnQkFVTyxNQUFNO3NCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXG4gKi9cblxuaW1wb3J0IHsgTmdDbGFzcywgTmdGb3IgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGVja2VkUGlwZSB9IGZyb20gJy4uLy4uL3BpcGVzL2NoZWNrZWQucGlwZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBOZ0ZvciwgQ2hlY2tlZFBpcGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2NoZWNrcy5jb21wb25lbnQuY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tzQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIF9jaGVja3M6IHsgY2hlY2s6IHN0cmluZzsgbXNnOiBzdHJpbmc7IGhhc0Vycm9yOiBib29sZWFuIH1bXSA9IFtdO1xuXG4gIEBJbnB1dCgpIGhhc1ZhbHVlITogYm9vbGVhbjtcbiAgQElucHV0KCkgc2V0IGNoZWNrcyhjaGVja09iajogc3RyaW5nW10pIHtcbiAgICBPYmplY3QuZW50cmllcyhjaGVja09iaikuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIHRoaXMuX2NoZWNrcy5wdXNoKHtcbiAgICAgICAgY2hlY2s6IGVudHJ5WzBdLFxuICAgICAgICBtc2c6IGVudHJ5WzFdLFxuICAgICAgICBoYXNFcnJvcjogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBASW5wdXQoKSBzZXQgZXJyb3JzKGVyckFycjogc3RyaW5nW10gfCBudWxsKSB7XG4gICAgaWYgKCFlcnJBcnI/Lmxlbmd0aCkge1xuICAgICAgdGhpcy5fY2hlY2tzLmZvckVhY2goKGNoZWNrKSA9PiAoY2hlY2suaGFzRXJyb3IgPSBmYWxzZSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlcnJBcnIuZm9yRWFjaCgoZXJyb3I6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5fY2hlY2tzLm1hcCgoY2hlY2spID0+IHtcbiAgICAgICAgaWYgKGNoZWNrLmNoZWNrID09PSBlcnJvcikge1xuICAgICAgICAgIGNoZWNrLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBvdmVycmlkZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIG92ZXJyaWRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBzdXBlcihyZW5kZXJlciwgY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG59XG4iLCI8ZGl2ICN2YWxpZGF0aW9uQ29udGVudCBbY2xhc3NdPVwiX2NsYXNzXCIgW3N0eWxlXT1cInN0eWxlXCI+XG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgY2hlY2sgb2YgX2NoZWNrc1wiPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgIGNoZWNrZWQ6IGhhc1ZhbHVlICYmICFjaGVjay5oYXNFcnJvcixcbiAgICAgICAgICAgIGZhaWxlZDogY2hlY2suaGFzRXJyb3IsXG4gICAgICAgICAgICB9XCI+e3tjaGVjay5oYXNFcnJvciB8IGNoZWNrZWQgfX08L3NwYW4+IC0ge3sgY2hlY2subXNnIH19PC9zcGFuPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=