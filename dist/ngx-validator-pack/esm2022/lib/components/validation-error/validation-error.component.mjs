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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ValidationErrorComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: ValidationErrorComponent, isStandalone: true, selector: "ng-component", inputs: { error: "error" }, usesInheritance: true, ngImport: i0, template: "<div #validationContent [class]=\"_class\" [style]=\"style\">\n  <span>{{ error }}</span>\n</div>\n", styles: [".show-validation-content{position:relative;top:-5px;color:salmon;border:1px solid salmon;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ValidationErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: '', standalone: true, imports: [], template: "<div #validationContent [class]=\"_class\" [style]=\"style\">\n  <span>{{ error }}</span>\n</div>\n", styles: [".show-validation-content{position:relative;top:-5px;color:salmon;border:1px solid salmon;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}\n"] }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }], propDecorators: { error: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jb21wb25lbnRzL3ZhbGlkYXRpb24tZXJyb3IvdmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jb21wb25lbnRzL3ZhbGlkYXRpb24tZXJyb3IvdmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBRUwsU0FBUyxFQUNULEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRXZEOzs7O0dBSUc7QUFRSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsYUFBYTtJQUl6RCxZQUNvQixRQUFtQixFQUNuQixpQkFBb0M7UUFFdEQsS0FBSyxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBSGpCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUwvQyxpQkFBWSxHQUFXLHlCQUF5QixDQUFDO0lBUTFELENBQUM7K0dBVFUsd0JBQXdCO21HQUF4Qix3QkFBd0IsMkhDNUJyQyxxR0FHQTs7NEZEeUJhLHdCQUF3QjtrQkFQcEMsU0FBUzsrQkFDRSxFQUFFLGNBQ0EsSUFBSSxXQUNQLEVBQUU7OEdBTUYsS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQGludGVybmFsXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgY29tcG9uZW50IHNob3dpbmcgdGhlIHZhbGlkYXRpb24gZXJyb3IgdG8gdGhlIHVzZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW10sXG4gIHRlbXBsYXRlVXJsOiAnLi92YWxpZGF0aW9uLWVycm9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3ZhbGlkYXRpb24tZXJyb3IuY29tcG9uZW50LmNzcycsXG59KVxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25FcnJvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBvdmVycmlkZSBkZWZhdWx0Q2xhc3M6IHN0cmluZyA9ICdzaG93LXZhbGlkYXRpb24tY29udGVudCc7XG4gIEBJbnB1dCgpIGVycm9yITogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG92ZXJyaWRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgb3ZlcnJpZGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHN1cGVyKHJlbmRlcmVyLCBjaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cbn1cbiIsIjxkaXYgI3ZhbGlkYXRpb25Db250ZW50IFtjbGFzc109XCJfY2xhc3NcIiBbc3R5bGVdPVwic3R5bGVcIj5cbiAgPHNwYW4+e3sgZXJyb3IgfX08L3NwYW4+XG48L2Rpdj5cbiJdfQ==