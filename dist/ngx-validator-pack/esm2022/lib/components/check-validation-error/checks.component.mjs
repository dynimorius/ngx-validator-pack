import { NgClass, NgFor } from '@angular/common';
import { Component, Input, ViewChild, } from '@angular/core';
import { CheckedPipe } from '../../pipes/checked.pipe';
import * as i0 from "@angular/core";
export class ChecksComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ChecksComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: ChecksComponent, isStandalone: true, selector: "ng-component", inputs: { zIndex: "zIndex", style: "style", hasValue: "hasValue", class: "class", checks: "checks", errors: "errors" }, viewQueries: [{ propertyName: "contentRef", first: true, predicate: ["errorContent"], descendants: true }], ngImport: i0, template: "<div #errorContent [class]=\"_class\" [style]=\"style\">\n    <div *ngFor=\"let check of _checks\">\n        <span>\n            <span [ngClass]=\"{\n            checked: hasValue && !check.hasError,\n            failed: check.hasError,\n            }\">{{check.hasError | checked }}</span> - {{ check.msg }}</span>\n    </div>\n</div>\n", styles: [".dmz-validation-content{position:relative;top:-5px;color:#969696;border:1px solid #d9d9d9;border-radius:0 0 5px 5px;padding:2px 0 5px 10px;font-size:small;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}.checked{color:#22cfad}.failed{color:salmon}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "pipe", type: CheckedPipe, name: "checked" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ChecksComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2stdmFsaWRhdGlvbi1lcnJvci9jaGVja3MuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXZhbGlkYXRvci1wYWNrL3NyYy9saWIvY29tcG9uZW50cy9jaGVjay12YWxpZGF0aW9uLWVycm9yL2NoZWNrcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFHTCxTQUFTLEVBRVQsS0FBSyxFQUVMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBU3ZELE1BQU0sT0FBTyxlQUFlO0lBUzFCLElBQWEsS0FBSyxDQUFDLEdBQThCO1FBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDO1FBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBYSxNQUFNLENBQUMsUUFBa0I7UUFDcEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDaEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsUUFBUSxFQUFFLEtBQUs7YUFDaEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUNELElBQWEsTUFBTSxDQUFDLE1BQXVCO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzFELE9BQU87UUFDVCxDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3pCLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUUsQ0FBQztvQkFDMUIsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQ21CLFFBQW1CLEVBQ25CLGlCQUFvQztRQURwQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFwQ3ZELFlBQU8sR0FBd0QsRUFBRSxDQUFDO0lBcUMvRCxDQUFDO0lBRUosZUFBZTtRQUNiLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQzsrR0E5Q1UsZUFBZTttR0FBZixlQUFlLDRTQ25CNUIsbVZBU0Esc1lETVksT0FBTyxvRkFBRSxLQUFLLDhHQUFFLFdBQVc7OzRGQUkxQixlQUFlO2tCQVAzQixTQUFTOytCQUNFLEVBQUUsY0FDQSxJQUFJLFdBQ1AsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQzs4R0FRWCxVQUFVO3NCQUFwQyxTQUFTO3VCQUFDLGNBQWM7Z0JBRWhCLE1BQU07c0JBQWQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDTyxLQUFLO3NCQUFqQixLQUFLO2dCQUlPLE1BQU07c0JBQWxCLEtBQUs7Z0JBVU8sTUFBTTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MsIE5nRm9yIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGVja2VkUGlwZSB9IGZyb20gJy4uLy4uL3BpcGVzL2NoZWNrZWQucGlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBOZ0ZvciwgQ2hlY2tlZFBpcGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2NoZWNrcy5jb21wb25lbnQuY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGNvbnRlbnQhOiBIVE1MRGl2RWxlbWVudDtcbiAgX2NsYXNzITogc3RyaW5nO1xuICBfY2hlY2tzOiB7IGNoZWNrOiBzdHJpbmc7IG1zZzogc3RyaW5nOyBoYXNFcnJvcjogYm9vbGVhbiB9W10gPSBbXTtcbiAgQFZpZXdDaGlsZCgnZXJyb3JDb250ZW50JykgY29udGVudFJlZiE6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgekluZGV4ITogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzdHlsZSE6IHN0cmluZztcbiAgQElucHV0KCkgaGFzVmFsdWUhOiBib29sZWFuO1xuICBASW5wdXQoKSBzZXQgY2xhc3MoY3NzOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKSB7XG4gICAgdGhpcy5fY2xhc3MgPSBjc3MgPyBjc3MgOiAnZG16LXZhbGlkYXRpb24tY29udGVudCc7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgQElucHV0KCkgc2V0IGNoZWNrcyhjaGVja09iajogc3RyaW5nW10pIHtcbiAgICBPYmplY3QuZW50cmllcyhjaGVja09iaikuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIHRoaXMuX2NoZWNrcy5wdXNoKHtcbiAgICAgICAgY2hlY2s6IGVudHJ5WzBdLFxuICAgICAgICBtc2c6IGVudHJ5WzFdLFxuICAgICAgICBoYXNFcnJvcjogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBASW5wdXQoKSBzZXQgZXJyb3JzKGVyckFycjogc3RyaW5nW10gfCBudWxsKSB7XG4gICAgaWYgKCFlcnJBcnI/Lmxlbmd0aCkge1xuICAgICAgdGhpcy5fY2hlY2tzLmZvckVhY2goKGNoZWNrKSA9PiAoY2hlY2suaGFzRXJyb3IgPSBmYWxzZSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlcnJBcnIuZm9yRWFjaCgoZXJyb3I6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5fY2hlY2tzLm1hcCgoY2hlY2spID0+IHtcbiAgICAgICAgaWYgKGNoZWNrLmNoZWNrID09PSBlcnJvcikge1xuICAgICAgICAgIGNoZWNrLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGVudCwgJ3pJbmRleCcsIGAke3RoaXMuekluZGV4fWApO1xuICB9XG59XG4iLCI8ZGl2ICNlcnJvckNvbnRlbnQgW2NsYXNzXT1cIl9jbGFzc1wiIFtzdHlsZV09XCJzdHlsZVwiPlxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGNoZWNrIG9mIF9jaGVja3NcIj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICBjaGVja2VkOiBoYXNWYWx1ZSAmJiAhY2hlY2suaGFzRXJyb3IsXG4gICAgICAgICAgICBmYWlsZWQ6IGNoZWNrLmhhc0Vycm9yLFxuICAgICAgICAgICAgfVwiPnt7Y2hlY2suaGFzRXJyb3IgfCBjaGVja2VkIH19PC9zcGFuPiAtIHt7IGNoZWNrLm1zZyB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19