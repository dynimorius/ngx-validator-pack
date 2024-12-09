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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jb21wb25lbnRzL2Jhc2UvYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUVMLFNBQVMsRUFFVCxLQUFLLEVBRUwsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDOztBQVN2QixNQUFNLE9BQU8sYUFBYTtJQU14QixJQUFhLEtBQUssQ0FBQyxHQUE4QjtRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzVDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBSUQsWUFDVyxRQUFtQixFQUNuQixpQkFBb0M7UUFEcEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzVDLENBQUM7SUFFSixlQUFlO1FBQ2IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDOytHQXRCVSxhQUFhO21HQUFiLGFBQWEsdVBBSGQsRUFBRTs7NEZBR0QsYUFBYTtrQkFQekIsU0FBUzsrQkFDRSxFQUFFLGNBQ0EsSUFBSSxXQUNQLEVBQUUsWUFDRCxFQUFFOzhHQU9ILE1BQU07c0JBQWQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ08sS0FBSztzQkFBakIsS0FBSztnQkFLMEIsVUFBVTtzQkFBekMsU0FBUzt1QkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIEFmdGVyVmlld0luaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICcnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXSxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZXM6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGNvbnRlbnQhOiBIVE1MRGl2RWxlbWVudDtcbiAgX2NsYXNzITogc3RyaW5nO1xuICBkZWZhdWx0Q2xhc3MhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHpJbmRleCE6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc3R5bGUhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNldCBjbGFzcyhjc3M6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwpIHtcbiAgICB0aGlzLl9jbGFzcyA9IGNzcyA/IGNzcyA6IHRoaXMuZGVmYXVsdENsYXNzO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgQFZpZXdDaGlsZCgndmFsaWRhdGlvbkNvbnRlbnQnKSBjb250ZW50UmVmITogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250ZW50LCAnekluZGV4JywgYCR7dGhpcy56SW5kZXh9YCk7XG4gIH1cbn1cbiJdfQ==