import { ChangeDetectorRef, DoCheck, ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @internal
 * @description
 * A component showing the validation error to the user
 */
export declare class ValidationErrorComponent implements DoCheck {
    private readonly renderer;
    private changeDetectorRef;
    content: HTMLDivElement;
    _class: string;
    contentRef: ElementRef;
    error: string;
    zIndex: string | number;
    set class(css: string | undefined | null);
    style: string;
    constructor(renderer: Renderer2, changeDetectorRef: ChangeDetectorRef);
    ngDoCheck(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValidationErrorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ValidationErrorComponent, "ng-component", never, { "error": { "alias": "error"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; "class": { "alias": "class"; "required": false; }; "style": { "alias": "style"; "required": false; }; }, {}, never, never, true, never>;
}
