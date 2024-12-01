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
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ValidationErrorComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: ValidationErrorComponent, isStandalone: true, selector: "ng-component", inputs: { error: "error" }, usesInheritance: true, ngImport: i0, template: "<div #validationContent [class]=\"_class\" [style]=\"style\">\n  <span>{{ error }}</span>\n</div>\n", styles: [".dmz-validation-content{position:relative;top:-5px;color:salmon;border:1px solid salmon;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ValidationErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: '', standalone: true, imports: [], template: "<div #validationContent [class]=\"_class\" [style]=\"style\">\n  <span>{{ error }}</span>\n</div>\n", styles: [".dmz-validation-content{position:relative;top:-5px;color:salmon;border:1px solid salmon;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}\n"] }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }], propDecorators: { error: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jb21wb25lbnRzL3ZhbGlkYXRpb24tZXJyb3IvdmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jb21wb25lbnRzL3ZhbGlkYXRpb24tZXJyb3IvdmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBRUwsU0FBUyxFQUNULEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRXZEOzs7O0dBSUc7QUFRSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsYUFBYTtJQUd6RCxZQUNvQixRQUFtQixFQUNuQixpQkFBb0M7UUFFdEQsS0FBSyxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBSGpCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUd4RCxDQUFDOytHQVJVLHdCQUF3QjttR0FBeEIsd0JBQXdCLDJIQzVCckMscUdBR0E7OzRGRHlCYSx3QkFBd0I7a0JBUHBDLFNBQVM7K0JBQ0UsRUFBRSxjQUNBLElBQUksV0FDUCxFQUFFOzhHQUtGLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQGRlc2NyaXB0aW9uXG4gKiBBIGNvbXBvbmVudCBzaG93aW5nIHRoZSB2YWxpZGF0aW9uIGVycm9yIHRvIHRoZSB1c2VyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtdLFxuICB0ZW1wbGF0ZVVybDogJy4vdmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi92YWxpZGF0aW9uLWVycm9yLmNvbXBvbmVudC5jc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uRXJyb3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZXJyb3IhOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgb3ZlcnJpZGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBvdmVycmlkZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIocmVuZGVyZXIsIGNoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxufVxuIiwiPGRpdiAjdmFsaWRhdGlvbkNvbnRlbnQgW2NsYXNzXT1cIl9jbGFzc1wiIFtzdHlsZV09XCJzdHlsZVwiPlxuICA8c3Bhbj57eyBlcnJvciB9fTwvc3Bhbj5cbjwvZGl2PlxuIl19