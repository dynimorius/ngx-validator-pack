import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @internal
 * @description
 * A component showing the validation error to the user
 */
export class ValidationErrorComponent {
    set class(css) {
        this._class = css ? css : 'dmz-validation-content';
    }
    ;
    constructor(renderer, changeDetectorRef) {
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
    }
    ngDoCheck() {
        if (!this.content) {
            this.changeDetectorRef.detectChanges();
            this.content = this.contentRef.nativeElement;
        }
        this.renderer.setStyle(this.content, 'zIndex', `${this.zIndex}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ValidationErrorComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: ValidationErrorComponent, isStandalone: true, selector: "ng-component", inputs: { error: "error", zIndex: "zIndex", class: "class", style: "style" }, viewQueries: [{ propertyName: "contentRef", first: true, predicate: ["errorContent"], descendants: true }], ngImport: i0, template: "<div #errorContent [class]=\"_class\" [style]=\"style\">\n  <span>{{ error }}</span>\n</div>\n", styles: [".dmz-validation-content{position:relative;top:-5px;color:salmon;border:1px solid salmon;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ValidationErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: '', standalone: true, imports: [], template: "<div #errorContent [class]=\"_class\" [style]=\"style\">\n  <span>{{ error }}</span>\n</div>\n", styles: [".dmz-validation-content{position:relative;top:-5px;color:salmon;border:1px solid salmon;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}\n"] }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }], propDecorators: { contentRef: [{
                type: ViewChild,
                args: ['errorContent']
            }], error: [{
                type: Input
            }], zIndex: [{
                type: Input
            }], class: [{
                type: Input
            }], style: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jb21wb25lbnRzL3ZhbGlkYXRpb24tZXJyb3IvdmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jb21wb25lbnRzL3ZhbGlkYXRpb24tZXJyb3IvdmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXFCLFNBQVMsRUFBdUIsS0FBSyxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUE7O0FBRXRIOzs7O0dBSUc7QUFRSCxNQUFNLE9BQU8sd0JBQXdCO0lBT25DLElBQWEsS0FBSyxDQUFDLEdBQThCO1FBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFBO0lBQ3BELENBQUM7SUFBQSxDQUFDO0lBR0YsWUFDbUIsUUFBbUIsRUFDNUIsaUJBQW9DO1FBRDNCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUMzQyxDQUFDO0lBRUosU0FBUztRQUNQLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDL0MsQ0FBQztRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQzsrR0F4QlUsd0JBQXdCO21HQUF4Qix3QkFBd0Isa1FDZHJDLGdHQUdBOzs0RkRXYSx3QkFBd0I7a0JBUHBDLFNBQVM7K0JBQ0UsRUFBRSxjQUNBLElBQUksV0FDUCxFQUFFOzhHQU9nQixVQUFVO3NCQUFwQyxTQUFTO3VCQUFDLGNBQWM7Z0JBRWhCLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ08sS0FBSztzQkFBakIsS0FBSztnQkFHRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBEb0NoZWNrLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbi8qKlxuICogQGludGVybmFsXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgY29tcG9uZW50IHNob3dpbmcgdGhlIHZhbGlkYXRpb24gZXJyb3IgdG8gdGhlIHVzZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW10sXG4gIHRlbXBsYXRlVXJsOiAnLi92YWxpZGF0aW9uLWVycm9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3ZhbGlkYXRpb24tZXJyb3IuY29tcG9uZW50LmNzcycsXG59KVxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25FcnJvckNvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2t7XG4gIGNvbnRlbnQhOiBIVE1MRGl2RWxlbWVudDtcbiAgX2NsYXNzITogc3RyaW5nO1xuICBAVmlld0NoaWxkKCdlcnJvckNvbnRlbnQnKSBjb250ZW50UmVmITogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBlcnJvciE6IHN0cmluZ1xuICBASW5wdXQoKSB6SW5kZXghOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHNldCBjbGFzcyhjc3M6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwpIHtcbiAgICB0aGlzLl9jbGFzcyA9IGNzcyA/IGNzcyA6ICdkbXotdmFsaWRhdGlvbi1jb250ZW50J1xuICB9O1xuICBASW5wdXQoKSBzdHlsZSE6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZighdGhpcy5jb250ZW50KSB7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250ZW50LCAnekluZGV4JywgYCR7dGhpcy56SW5kZXh9YCk7XG4gIH1cbn1cbiIsIjxkaXYgI2Vycm9yQ29udGVudCBbY2xhc3NdPVwiX2NsYXNzXCIgW3N0eWxlXT1cInN0eWxlXCI+XG4gIDxzcGFuPnt7IGVycm9yIH19PC9zcGFuPlxuPC9kaXY+XG4iXX0=