import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CheckedValidationErrorComponent {
    private readonly renderer;
    private readonly changeDetectorRef;
    content: HTMLDivElement;
    _class: string;
    contentRef: ElementRef;
    error: string[];
    zIndex: string | number;
    set class(css: string | undefined | null);
    style: string;
    constructor(renderer: Renderer2, changeDetectorRef: ChangeDetectorRef);
    ngDoCheck(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckedValidationErrorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckedValidationErrorComponent, "dmz-checked-validation-error", never, { "error": { "alias": "error"; "required": false; }; "zIndex": { "alias": "zIndex"; "required": false; }; "class": { "alias": "class"; "required": false; }; "style": { "alias": "style"; "required": false; }; }, {}, never, never, true, never>;
}
