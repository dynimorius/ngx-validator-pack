import { Directive, } from '@angular/core';
import { Subscription } from 'rxjs';
import { ValidationErrorComponent } from '../components/validation-error/validation-error.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class ShowValidation2Directive {
    constructor(viewContainerRef, elementRef, renderer, control) {
        this.viewContainerRef = viewContainerRef;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.control = control;
        this.controlSub = new Subscription();
    }
    ngOnInit() {
        const formControl = this.control.control;
        this.self = this.elementRef.nativeElement;
        this.retrievedStyles = getComputedStyle(this.self);
        this.controlSub.add(formControl.statusChanges.subscribe((status) => {
            this.hideError();
            if (status === 'INVALID') {
                this.showError(formControl.errors);
            }
        }));
    }
    ngOnDestroy() {
        this.controlSub.unsubscribe();
    }
    showError(errors) {
        const valErrorComponentRef = this.viewContainerRef.createComponent(ValidationErrorComponent);
        valErrorComponentRef.setInput('error', this.getValidationMessage(errors));
        const indexNum = Number.parseInt(this.retrievedStyles.zIndex);
        const zIndex = Number.isNaN(indexNum) ? 1 : indexNum;
        this.renderer.setStyle(this.self, "zIndex", `${zIndex}`);
        valErrorComponentRef.setInput('zIndex', `${zIndex - 1}`);
    }
    hideError() {
        this.viewContainerRef.clear();
    }
    getValidationMessage(errors) {
        return errors ? Object.values(errors)[0] : 'Invalid Input.';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ShowValidation2Directive, deps: [{ token: i0.ViewContainerRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: ShowValidation2Directive, isStandalone: true, selector: "[dmzShowValidation2]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ShowValidation2Directive, decorators: [{
            type: Directive,
            args: [{
                    selector: '[dmzShowValidation2]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NgControl }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy12YWxpZGF0aW9uMi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdmFsaWRhdG9yLXBhY2svc3JjL2xpYi9kaXJlY3RpdmVzL3Nob3ctdmFsaWRhdGlvbjIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEdBTVYsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQTtBQUNuQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQTs7O0FBTXBHLE1BQU0sT0FBTyx3QkFBd0I7SUFLbkMsWUFDVSxnQkFBa0MsRUFDekIsVUFBc0IsRUFDL0IsUUFBbUIsRUFDVixPQUFrQjtRQUgzQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ3pCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNWLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFSckMsZUFBVSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFBO0lBUzFDLENBQUM7SUFFSixRQUFRO1FBQ04sTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFzQixDQUFBO1FBQ3ZELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUE7UUFDekMsSUFBSSxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQ2pCLFdBQVcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFRLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQ2hCLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNwQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQTtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQStCO1FBQ3ZDLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FDaEUsd0JBQXdCLENBQ3pCLENBQUE7UUFDRCxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBQ3pFLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM3RCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDekQsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFBO0lBQy9CLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxNQUErQjtRQUNsRCxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUE7SUFDN0QsQ0FBQzsrR0FoRFUsd0JBQXdCO21HQUF4Qix3QkFBd0I7OzRGQUF4Qix3QkFBd0I7a0JBSnBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE5nQ29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdmFsaWRhdGlvbi1lcnJvci92YWxpZGF0aW9uLWVycm9yLmNvbXBvbmVudCdcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RtelNob3dWYWxpZGF0aW9uMl0nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBTaG93VmFsaWRhdGlvbjJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnRyb2xTdWI6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKVxuICBzZWxmITogSFRNTEVsZW1lbnRcbiAgcmV0cmlldmVkU3R5bGVzITogQ1NTU3R5bGVEZWNsYXJhdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRyb2w6IE5nQ29udHJvbFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZm9ybUNvbnRyb2wgPSB0aGlzLmNvbnRyb2wuY29udHJvbCBhcyBGb3JtQ29udHJvbFxuICAgIHRoaXMuc2VsZiA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XG4gICAgdGhpcy5yZXRyaWV2ZWRTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuc2VsZik7XG5cbiAgICB0aGlzLmNvbnRyb2xTdWIuYWRkKFxuICAgICAgZm9ybUNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKHN0YXR1cyk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcigpXG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdJTlZBTElEJykge1xuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKGZvcm1Db250cm9sLmVycm9ycylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2xTdWIudW5zdWJzY3JpYmUoKVxuICB9XG5cbiAgc2hvd0Vycm9yKGVycm9yczogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpOiB2b2lkIHtcbiAgICBjb25zdCB2YWxFcnJvckNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoXG4gICAgICBWYWxpZGF0aW9uRXJyb3JDb21wb25lbnRcbiAgICApXG4gICAgdmFsRXJyb3JDb21wb25lbnRSZWYuc2V0SW5wdXQoJ2Vycm9yJywgdGhpcy5nZXRWYWxpZGF0aW9uTWVzc2FnZShlcnJvcnMpKVxuICAgIGNvbnN0IGluZGV4TnVtID0gTnVtYmVyLnBhcnNlSW50KHRoaXMucmV0cmlldmVkU3R5bGVzLnpJbmRleClcbiAgICBjb25zdCB6SW5kZXggPSBOdW1iZXIuaXNOYU4oaW5kZXhOdW0pID8gMSA6IGluZGV4TnVtO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zZWxmLCBcInpJbmRleFwiLCBgJHt6SW5kZXh9YCk7XG4gICAgdmFsRXJyb3JDb21wb25lbnRSZWYuc2V0SW5wdXQoJ3pJbmRleCcsIGAke3pJbmRleCAtIDF9YClcbiAgfVxuXG4gIGhpZGVFcnJvcigpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKVxuICB9XG5cbiAgZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVycm9ycyA/IE9iamVjdC52YWx1ZXMoZXJyb3JzKVswXSA6ICdJbnZhbGlkIElucHV0LidcbiAgfVxufVxuIl19