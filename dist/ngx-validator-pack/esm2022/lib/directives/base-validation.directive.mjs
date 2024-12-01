import { Directive, Input, } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
/**
 * @internal
 * @description
 * A base directive which will show a validation error message to the
 * user.
 */
export class BaseValidationDirective {
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
            if (!this.checked) {
                this.hideError();
                if (status === 'INVALID') {
                    this.showError(formControl.errors);
                }
            }
            else {
                this.showError(formControl.errors);
            }
        }));
    }
    ngOnDestroy() {
        this.controlSub.unsubscribe();
    }
    showError(errors) {
        this.valErrorComponentRef = this.setComponentRef();
        this.valErrorComponentRef.setInput('error', this.getValidationMessage(errors));
        const indexNum = Number.parseInt(this.retrievedStyles.zIndex);
        const zIndex = Number.isNaN(indexNum) ? 1 : indexNum;
        this.renderer.setStyle(this.self, 'zIndex', `${zIndex}`);
        this.valErrorComponentRef.setInput('zIndex', `${zIndex - 1}`);
        this.valErrorComponentRef.setInput('class', this.vClass);
        this.valErrorComponentRef.setInput('style', this.vStyle);
    }
    hideError() {
        this.viewContainerRef.clear();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BaseValidationDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: BaseValidationDirective, isStandalone: true, selector: "[]", inputs: { vClass: "vClass", vStyle: "vStyle" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BaseValidationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NgControl }], propDecorators: { vClass: [{
                type: Input
            }], vStyle: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS12YWxpZGF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2RpcmVjdGl2ZXMvYmFzZS12YWxpZGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULEtBQUssR0FHTixNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFBOzs7QUFFbkM7Ozs7O0dBS0c7QUFLSCxNQUFNLE9BQWdCLHVCQUF1QjtJQVMzQyxZQUNXLGdCQUFrQyxFQUNsQyxVQUFzQixFQUN0QixRQUFtQixFQUNuQixPQUFrQjtRQUhsQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBWjdCLGVBQVUsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQWExQyxDQUFDO0lBUUosUUFBUTtRQUNOLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBc0IsQ0FBQTtRQUN2RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFBO1FBQ3pDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRWxELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUNqQixXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBUSxFQUFFO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtnQkFDaEIsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO1lBQ0gsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFBO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQy9CLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBK0I7UUFDdkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtRQUNsRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUNoQyxPQUFPLEVBQ1AsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUNsQyxDQUFBO1FBQ0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzdELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFBO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUN4RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzdELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDMUQsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDL0IsQ0FBQzsrR0E3RG1CLHVCQUF1QjttR0FBdkIsdUJBQXVCOzs0RkFBdkIsdUJBQXVCO2tCQUo1QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxJQUFJO29CQUNkLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4SkFPVSxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgTmdDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJ1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQGRlc2NyaXB0aW9uXG4gKiBBIGJhc2UgZGlyZWN0aXZlIHdoaWNoIHdpbGwgc2hvdyBhIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZSB0byB0aGVcbiAqIHVzZXIuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVZhbGlkYXRpb25EaXJlY3RpdmUge1xuICBjb250cm9sU3ViOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKClcbiAgdmFsRXJyb3JDb21wb25lbnRSZWYhOiBDb21wb25lbnRSZWY8dW5rbm93bj5cbiAgc2VsZiE6IEhUTUxFbGVtZW50XG4gIHJldHJpZXZlZFN0eWxlcyE6IENTU1N0eWxlRGVjbGFyYXRpb25cblxuICBASW5wdXQoKSB2Q2xhc3MhOiBzdHJpbmdcbiAgQElucHV0KCkgdlN0eWxlITogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcmVhZG9ubHkgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcmVhZG9ubHkgY29udHJvbDogTmdDb250cm9sXG4gICkge31cblxuICBhYnN0cmFjdCBjaGVja2VkOiBib29sZWFuXG4gIGFic3RyYWN0IHNldENvbXBvbmVudFJlZigpOiBDb21wb25lbnRSZWY8dW5rbm93bj5cbiAgYWJzdHJhY3QgZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoXG4gICAgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbFxuICApOiBzdHJpbmcgfCBzdHJpbmdbXVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGZvcm1Db250cm9sID0gdGhpcy5jb250cm9sLmNvbnRyb2wgYXMgRm9ybUNvbnRyb2xcbiAgICB0aGlzLnNlbGYgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuICAgIHRoaXMucmV0cmlldmVkU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnNlbGYpXG5cbiAgICB0aGlzLmNvbnRyb2xTdWIuYWRkKFxuICAgICAgZm9ybUNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKHN0YXR1cyk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMuaGlkZUVycm9yKClcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSAnSU5WQUxJRCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKGZvcm1Db250cm9sLmVycm9ycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKGZvcm1Db250cm9sLmVycm9ycyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jb250cm9sU3ViLnVuc3Vic2NyaWJlKClcbiAgfVxuXG4gIHNob3dFcnJvcihlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy52YWxFcnJvckNvbXBvbmVudFJlZiA9IHRoaXMuc2V0Q29tcG9uZW50UmVmKClcbiAgICB0aGlzLnZhbEVycm9yQ29tcG9uZW50UmVmLnNldElucHV0KFxuICAgICAgJ2Vycm9yJyxcbiAgICAgIHRoaXMuZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoZXJyb3JzKVxuICAgIClcbiAgICBjb25zdCBpbmRleE51bSA9IE51bWJlci5wYXJzZUludCh0aGlzLnJldHJpZXZlZFN0eWxlcy56SW5kZXgpXG4gICAgY29uc3QgekluZGV4ID0gTnVtYmVyLmlzTmFOKGluZGV4TnVtKSA/IDEgOiBpbmRleE51bVxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zZWxmLCAnekluZGV4JywgYCR7ekluZGV4fWApXG4gICAgdGhpcy52YWxFcnJvckNvbXBvbmVudFJlZi5zZXRJbnB1dCgnekluZGV4JywgYCR7ekluZGV4IC0gMX1gKVxuICAgIHRoaXMudmFsRXJyb3JDb21wb25lbnRSZWYuc2V0SW5wdXQoJ2NsYXNzJywgdGhpcy52Q2xhc3MpXG4gICAgdGhpcy52YWxFcnJvckNvbXBvbmVudFJlZi5zZXRJbnB1dCgnc3R5bGUnLCB0aGlzLnZTdHlsZSlcbiAgfVxuXG4gIGhpZGVFcnJvcigpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKVxuICB9XG59XG4iXX0=