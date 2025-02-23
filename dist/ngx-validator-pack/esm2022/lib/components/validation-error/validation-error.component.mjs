/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { Component, Input, } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import * as i0 from "@angular/core";
/**
 * @internal
 * @description
 * A component showing the validation error to the user
 */
export class ValidationErrorComponent extends BaseComponent {
    constructor(renderer, changeDetectorRef) {
        super(renderer, changeDetectorRef);
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.defaultClass = 'show-validation-content';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ValidationErrorComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: ValidationErrorComponent, isStandalone: true, selector: "ng-component", inputs: { error: "error" }, usesInheritance: true, ngImport: i0, template: "<div #validationContent [class]=\"_class\" [style]=\"style\">\r\n  <span>{{ error }}</span>\r\n</div>\r\n", styles: [".show-validation-content{position:relative;top:-5px;color:salmon;border:1px solid salmon;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ValidationErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: '', standalone: true, imports: [], template: "<div #validationContent [class]=\"_class\" [style]=\"style\">\r\n  <span>{{ error }}</span>\r\n</div>\r\n", styles: [".show-validation-content{position:relative;top:-5px;color:salmon;border:1px solid salmon;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}\n"] }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }], propDecorators: { error: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jb21wb25lbnRzL3ZhbGlkYXRpb24tZXJyb3IvdmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jb21wb25lbnRzL3ZhbGlkYXRpb24tZXJyb3IvdmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBRUwsU0FBUyxFQUNULEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRXZEOzs7O0dBSUc7QUFRSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsYUFBYTtJQUl6RCxZQUNvQixRQUFtQixFQUNuQixpQkFBb0M7UUFFdEQsS0FBSyxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBSGpCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUwvQyxpQkFBWSxHQUFXLHlCQUF5QixDQUFDO0lBUTFELENBQUM7K0dBVFUsd0JBQXdCO21HQUF4Qix3QkFBd0IsMkhDNUJyQywyR0FHQTs7NEZEeUJhLHdCQUF3QjtrQkFQcEMsU0FBUzsrQkFDRSxFQUFFLGNBQ0EsSUFBSSxXQUNQLEVBQUU7OEdBTUYsS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyMixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBjb21wb25lbnQgc2hvd2luZyB0aGUgdmFsaWRhdGlvbiBlcnJvciB0byB0aGUgdXNlclxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICcnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3ZhbGlkYXRpb24tZXJyb3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi92YWxpZGF0aW9uLWVycm9yLmNvbXBvbmVudC5jc3MnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbkVycm9yQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XHJcbiAgb3ZlcnJpZGUgZGVmYXVsdENsYXNzOiBzdHJpbmcgPSAnc2hvdy12YWxpZGF0aW9uLWNvbnRlbnQnO1xyXG4gIEBJbnB1dCgpIGVycm9yITogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG92ZXJyaWRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBvdmVycmlkZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKHJlbmRlcmVyLCBjaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgI3ZhbGlkYXRpb25Db250ZW50IFtjbGFzc109XCJfY2xhc3NcIiBbc3R5bGVdPVwic3R5bGVcIj5cclxuICA8c3Bhbj57eyBlcnJvciB9fTwvc3Bhbj5cclxuPC9kaXY+XHJcbiJdfQ==