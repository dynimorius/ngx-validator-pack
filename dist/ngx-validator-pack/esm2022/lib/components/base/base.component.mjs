/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { Component, Input, ViewChild, } from '@angular/core';
import * as i0 from "@angular/core";
export class BaseComponent {
    set class(css) {
        this._class = css ? css : this.defaultClass;
        this.changeDetectorRef.detectChanges();
    }
    constructor(renderer, changeDetectorRef) {
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
    }
    ngAfterViewInit() {
        this.changeDetectorRef.detectChanges();
        this.content = this.contentRef.nativeElement;
        this.renderer.setStyle(this.content, 'zIndex', `${this.zIndex}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BaseComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BaseComponent, isStandalone: true, selector: "ng-component", inputs: { zIndex: "zIndex", style: "style", class: "class" }, viewQueries: [{ propertyName: "contentRef", first: true, predicate: ["validationContent"], descendants: true }], ngImport: i0, template: '', isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BaseComponent, decorators: [{
            type: Component,
            args: [{ selector: '', standalone: true, imports: [], template: '' }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }], propDecorators: { zIndex: [{
                type: Input
            }], style: [{
                type: Input
            }], class: [{
                type: Input
            }], contentRef: [{
                type: ViewChild,
                args: ['validationContent']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jb21wb25lbnRzL2Jhc2UvYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUVMLFNBQVMsRUFFVCxLQUFLLEVBRUwsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDOztBQVN2QixNQUFNLE9BQU8sYUFBYTtJQU14QixJQUFhLEtBQUssQ0FBQyxHQUE4QjtRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzVDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBSUQsWUFDVyxRQUFtQixFQUNuQixpQkFBb0M7UUFEcEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzVDLENBQUM7SUFFSixlQUFlO1FBQ2IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDOytHQXRCVSxhQUFhO21HQUFiLGFBQWEsdVBBSGQsRUFBRTs7NEZBR0QsYUFBYTtrQkFQekIsU0FBUzsrQkFDRSxFQUFFLGNBQ0EsSUFBSSxXQUNQLEVBQUUsWUFDRCxFQUFFOzhHQU9ILE1BQU07c0JBQWQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ08sS0FBSztzQkFBakIsS0FBSztnQkFLMEIsVUFBVTtzQkFBekMsU0FBUzt1QkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJycsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbXSxcclxuICB0ZW1wbGF0ZTogJycsXHJcbiAgc3R5bGVzOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBjb250ZW50ITogSFRNTERpdkVsZW1lbnQ7XHJcbiAgX2NsYXNzITogc3RyaW5nO1xyXG4gIGRlZmF1bHRDbGFzcyE6IHN0cmluZztcclxuICBASW5wdXQoKSB6SW5kZXghOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KCkgc3R5bGUhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2V0IGNsYXNzKGNzczogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fY2xhc3MgPSBjc3MgPyBjc3MgOiB0aGlzLmRlZmF1bHRDbGFzcztcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZCgndmFsaWRhdGlvbkNvbnRlbnQnKSBjb250ZW50UmVmITogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRlbnQsICd6SW5kZXgnLCBgJHt0aGlzLnpJbmRleH1gKTtcclxuICB9XHJcbn1cclxuIl19