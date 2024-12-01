import { NgFor } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
export class CheckedValidationErrorComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CheckedValidationErrorComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CheckedValidationErrorComponent, isStandalone: true, selector: "dmz-checked-validation-error", inputs: { error: "error", zIndex: "zIndex", class: "class", style: "style" }, viewQueries: [{ propertyName: "contentRef", first: true, predicate: ["errorContent"], descendants: true }], ngImport: i0, template: "<div #errorContent [class]=\"_class\" [style]=\"style\">\n    <div *ngFor=\"let row of error\">\n        <span>{{ row }}</span>\n    </div>\n</div>\n", styles: [".dmz-validation-content{position:relative;top:-5px;color:salmon;border:1px solid salmon;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}\n"], dependencies: [{ kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CheckedValidationErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dmz-checked-validation-error', standalone: true, imports: [NgFor], template: "<div #errorContent [class]=\"_class\" [style]=\"style\">\n    <div *ngFor=\"let row of error\">\n        <span>{{ row }}</span>\n    </div>\n</div>\n", styles: [".dmz-validation-content{position:relative;top:-5px;color:salmon;border:1px solid salmon;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tlZC12YWxpZGF0aW9uLWVycm9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tlZC12YWxpZGF0aW9uLWVycm9yL2NoZWNrZWQtdmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jb21wb25lbnRzL2NoZWNrZWQtdmFsaWRhdGlvbi1lcnJvci9jaGVja2VkLXZhbGlkYXRpb24tZXJyb3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hDLE9BQU8sRUFBcUIsU0FBUyxFQUFjLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBU3RHLE1BQU0sT0FBTywrQkFBK0I7SUFNMUMsSUFBYSxLQUFLLENBQUMsR0FBOEI7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUE7SUFDcEQsQ0FBQztJQUFBLENBQUM7SUFHRixZQUNtQixRQUFtQixFQUNuQixpQkFBb0M7UUFEcEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3BELENBQUM7SUFFSixTQUFTO1FBQ1AsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUMvQyxDQUFDO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDOytHQXZCVSwrQkFBK0I7bUdBQS9CLCtCQUErQixrUkNWNUMsdUpBS0Esd1ZEQ1ksS0FBSzs7NEZBSUosK0JBQStCO2tCQVAzQyxTQUFTOytCQUNFLDhCQUE4QixjQUM1QixJQUFJLFdBQ1AsQ0FBQyxLQUFLLENBQUM7OEdBT1csVUFBVTtzQkFBcEMsU0FBUzt1QkFBQyxjQUFjO2dCQUNoQixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNPLEtBQUs7c0JBQWpCLEtBQUs7Z0JBR0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdGb3IgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Rtei1jaGVja2VkLXZhbGlkYXRpb24tZXJyb3InLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdGb3JdLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tlZC12YWxpZGF0aW9uLWVycm9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2NoZWNrZWQtdmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQuY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBDaGVja2VkVmFsaWRhdGlvbkVycm9yQ29tcG9uZW50IHtcbiAgY29udGVudCE6IEhUTUxEaXZFbGVtZW50O1xuICBfY2xhc3MhOiBzdHJpbmc7XG4gIEBWaWV3Q2hpbGQoJ2Vycm9yQ29udGVudCcpIGNvbnRlbnRSZWYhOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBlcnJvciE6IHN0cmluZ1tdO1xuICBASW5wdXQoKSB6SW5kZXghOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHNldCBjbGFzcyhjc3M6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwpIHtcbiAgICB0aGlzLl9jbGFzcyA9IGNzcyA/IGNzcyA6ICdkbXotdmFsaWRhdGlvbi1jb250ZW50J1xuICB9O1xuICBASW5wdXQoKSBzdHlsZSE6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZighdGhpcy5jb250ZW50KSB7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250ZW50LCAnekluZGV4JywgYCR7dGhpcy56SW5kZXh9YCk7XG4gIH1cbn1cbiIsIjxkaXYgI2Vycm9yQ29udGVudCBbY2xhc3NdPVwiX2NsYXNzXCIgW3N0eWxlXT1cInN0eWxlXCI+XG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgcm93IG9mIGVycm9yXCI+XG4gICAgICAgIDxzcGFuPnt7IHJvdyB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19