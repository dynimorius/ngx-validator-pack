import { NgClass, NgFor } from '@angular/common';
import { Component, Input, ViewChild, } from '@angular/core';
import { CheckedPipe } from '../../pipes/checked.pipe';
import * as i0 from "@angular/core";
export class CheckedValidationErrorComponent {
    set class(css) {
        this._class = css ? css : 'dmz-validation-content';
        this.changeDetectorRef.detectChanges();
    }
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
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this._checks = [];
    }
    ngAfterViewInit() {
        this.changeDetectorRef.detectChanges();
        this.content = this.contentRef.nativeElement;
        this.renderer.setStyle(this.content, 'zIndex', `${this.zIndex}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CheckedValidationErrorComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CheckedValidationErrorComponent, isStandalone: true, selector: "ng-component", inputs: { zIndex: "zIndex", style: "style", hasValue: "hasValue", class: "class", checks: "checks", errors: "errors" }, viewQueries: [{ propertyName: "contentRef", first: true, predicate: ["errorContent"], descendants: true }], ngImport: i0, template: "<div #errorContent [class]=\"_class\" [style]=\"style\">\n    <div *ngFor=\"let check of _checks\">\n        <span>\n            <span [ngClass]=\"{\n            checked: hasValue && !check.hasError,\n            failed: check.hasError,\n            }\">{{check.hasError | checked }}</span> - {{ check.msg }}</span>\n    </div>\n</div>\n", styles: [".dmz-validation-content{position:relative;top:-5px;color:#969696;border:1px solid #d9d9d9;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}.checked{color:#22cfad}.failed{color:salmon}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "pipe", type: CheckedPipe, name: "checked" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CheckedValidationErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: '', standalone: true, imports: [NgClass, NgFor, CheckedPipe], template: "<div #errorContent [class]=\"_class\" [style]=\"style\">\n    <div *ngFor=\"let check of _checks\">\n        <span>\n            <span [ngClass]=\"{\n            checked: hasValue && !check.hasError,\n            failed: check.hasError,\n            }\">{{check.hasError | checked }}</span> - {{ check.msg }}</span>\n    </div>\n</div>\n", styles: [".dmz-validation-content{position:relative;top:-5px;color:#969696;border:1px solid #d9d9d9;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}.checked{color:#22cfad}.failed{color:salmon}\n"] }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }], propDecorators: { contentRef: [{
                type: ViewChild,
                args: ['errorContent']
            }], zIndex: [{
                type: Input
            }], style: [{
                type: Input
            }], hasValue: [{
                type: Input
            }], class: [{
                type: Input
            }], checks: [{
                type: Input
            }], errors: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tlZC12YWxpZGF0aW9uLWVycm9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2stdmFsaWRhdGlvbi1lcnJvci9jaGVja2VkLXZhbGlkYXRpb24tZXJyb3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRvci1wYWNrL3NyYy9saWIvY29tcG9uZW50cy9jaGVjay12YWxpZGF0aW9uLWVycm9yL2NoZWNrZWQtdmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFHTCxTQUFTLEVBRVQsS0FBSyxFQUVMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBU3ZELE1BQU0sT0FBTywrQkFBK0I7SUFTMUMsSUFBYSxLQUFLLENBQUMsR0FBOEI7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUM7UUFDbkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFDRCxJQUFhLE1BQU0sQ0FBQyxRQUFrQjtRQUNwQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNoQixLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDZixHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDYixRQUFRLEVBQUUsS0FBSzthQUNoQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBYSxNQUFNLENBQUMsTUFBdUI7UUFDekMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDMUQsT0FBTztRQUNULENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRSxDQUFDO29CQUMxQixLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDeEIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFDbUIsUUFBbUIsRUFDbkIsaUJBQW9DO1FBRHBDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQXBDdkQsWUFBTyxHQUF3RCxFQUFFLENBQUM7SUFxQy9ELENBQUM7SUFFSixlQUFlO1FBQ2IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDOytHQTlDVSwrQkFBK0I7bUdBQS9CLCtCQUErQiw0U0NuQjVDLG1WQVNBLHNZRE1ZLE9BQU8sb0ZBQUUsS0FBSyw4R0FBRSxXQUFXOzs0RkFJMUIsK0JBQStCO2tCQVAzQyxTQUFTOytCQUNFLEVBQUUsY0FDQSxJQUFJLFdBQ1AsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQzs4R0FRWCxVQUFVO3NCQUFwQyxTQUFTO3VCQUFDLGNBQWM7Z0JBRWhCLE1BQU07c0JBQWQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDTyxLQUFLO3NCQUFqQixLQUFLO2dCQUlPLE1BQU07c0JBQWxCLEtBQUs7Z0JBVU8sTUFBTTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MsIE5nRm9yIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGVja2VkUGlwZSB9IGZyb20gJy4uLy4uL3BpcGVzL2NoZWNrZWQucGlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBOZ0ZvciwgQ2hlY2tlZFBpcGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tlZC12YWxpZGF0aW9uLWVycm9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2NoZWNrZWQtdmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQuY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tlZFZhbGlkYXRpb25FcnJvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBjb250ZW50ITogSFRNTERpdkVsZW1lbnQ7XG4gIF9jbGFzcyE6IHN0cmluZztcbiAgX2NoZWNrczogeyBjaGVjazogc3RyaW5nOyBtc2c6IHN0cmluZzsgaGFzRXJyb3I6IGJvb2xlYW4gfVtdID0gW107XG4gIEBWaWV3Q2hpbGQoJ2Vycm9yQ29udGVudCcpIGNvbnRlbnRSZWYhOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIHpJbmRleCE6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc3R5bGUhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhhc1ZhbHVlITogYm9vbGVhbjtcbiAgQElucHV0KCkgc2V0IGNsYXNzKGNzczogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCkge1xuICAgIHRoaXMuX2NsYXNzID0gY3NzID8gY3NzIDogJ2Rtei12YWxpZGF0aW9uLWNvbnRlbnQnO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIEBJbnB1dCgpIHNldCBjaGVja3MoY2hlY2tPYmo6IHN0cmluZ1tdKSB7XG4gICAgT2JqZWN0LmVudHJpZXMoY2hlY2tPYmopLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICB0aGlzLl9jaGVja3MucHVzaCh7XG4gICAgICAgIGNoZWNrOiBlbnRyeVswXSxcbiAgICAgICAgbXNnOiBlbnRyeVsxXSxcbiAgICAgICAgaGFzRXJyb3I6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgQElucHV0KCkgc2V0IGVycm9ycyhlcnJBcnI6IHN0cmluZ1tdIHwgbnVsbCkge1xuICAgIGlmICghZXJyQXJyPy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2NoZWNrcy5mb3JFYWNoKChjaGVjaykgPT4gKGNoZWNrLmhhc0Vycm9yID0gZmFsc2UpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXJyQXJyLmZvckVhY2goKGVycm9yOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuX2NoZWNrcy5tYXAoKGNoZWNrKSA9PiB7XG4gICAgICAgIGlmIChjaGVjay5jaGVjayA9PT0gZXJyb3IpIHtcbiAgICAgICAgICBjaGVjay5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRlbnQsICd6SW5kZXgnLCBgJHt0aGlzLnpJbmRleH1gKTtcbiAgfVxufVxuIiwiPGRpdiAjZXJyb3JDb250ZW50IFtjbGFzc109XCJfY2xhc3NcIiBbc3R5bGVdPVwic3R5bGVcIj5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjaGVjayBvZiBfY2hlY2tzXCI+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgY2hlY2tlZDogaGFzVmFsdWUgJiYgIWNoZWNrLmhhc0Vycm9yLFxuICAgICAgICAgICAgZmFpbGVkOiBjaGVjay5oYXNFcnJvcixcbiAgICAgICAgICAgIH1cIj57e2NoZWNrLmhhc0Vycm9yIHwgY2hlY2tlZCB9fTwvc3Bhbj4gLSB7eyBjaGVjay5tc2cgfX08L3NwYW4+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==