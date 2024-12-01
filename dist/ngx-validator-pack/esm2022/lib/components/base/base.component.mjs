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
        this._class = css ? css : 'dmz-validation-content';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BaseComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BaseComponent, isStandalone: true, selector: "ng-component", inputs: { zIndex: "zIndex", style: "style", class: "class" }, viewQueries: [{ propertyName: "contentRef", first: true, predicate: ["validationContent"], descendants: true }], ngImport: i0, template: '', isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BaseComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9jb21wb25lbnRzL2Jhc2UvYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUVMLFNBQVMsRUFFVCxLQUFLLEVBRUwsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDOztBQVN2QixNQUFNLE9BQU8sYUFBYTtJQUt4QixJQUFhLEtBQUssQ0FBQyxHQUE4QjtRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQztRQUNuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUlELFlBQ1csUUFBbUIsRUFDbkIsaUJBQW9DO1FBRHBDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUM1QyxDQUFDO0lBRUosZUFBZTtRQUNiLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQzsrR0FyQlUsYUFBYTttR0FBYixhQUFhLHVQQUhkLEVBQUU7OzRGQUdELGFBQWE7a0JBUHpCLFNBQVM7K0JBQ0UsRUFBRSxjQUNBLElBQUksV0FDUCxFQUFFLFlBQ0QsRUFBRTs4R0FNSCxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNPLEtBQUs7c0JBQWpCLEtBQUs7Z0JBSzBCLFVBQVU7c0JBQXpDLFNBQVM7dUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBBZnRlclZpZXdJbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW10sXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVzOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBjb250ZW50ITogSFRNTERpdkVsZW1lbnQ7XG4gIF9jbGFzcyE6IHN0cmluZztcbiAgQElucHV0KCkgekluZGV4ITogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzdHlsZSE6IHN0cmluZztcbiAgQElucHV0KCkgc2V0IGNsYXNzKGNzczogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCkge1xuICAgIHRoaXMuX2NsYXNzID0gY3NzID8gY3NzIDogJ2Rtei12YWxpZGF0aW9uLWNvbnRlbnQnO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgQFZpZXdDaGlsZCgndmFsaWRhdGlvbkNvbnRlbnQnKSBjb250ZW50UmVmITogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250ZW50LCAnekluZGV4JywgYCR7dGhpcy56SW5kZXh9YCk7XG4gIH1cbn1cbiJdfQ==