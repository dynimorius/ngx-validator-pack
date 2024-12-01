import { AfterViewInit, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CheckedValidationErrorComponent implements AfterViewInit {
    private readonly renderer;
    private readonly changeDetectorRef;
    content: HTMLDivElement;
    _class: string;
    _checks: {
        check: string;
        msg: string;
        hasError: boolean;
    }[];
    contentRef: ElementRef;
    zIndex: string | number;
    style: string;
    hasValue: boolean;
    set class(css: string | undefined | null);
    set checks(checkObj: string[]);
    set errors(errArr: string[] | null);
    constructor(renderer: Renderer2, changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckedValidationErrorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckedValidationErrorComponent, "ng-component", never, { "zIndex": { "alias": "zIndex"; "required": false; }; "style": { "alias": "style"; "required": false; }; "hasValue": { "alias": "hasValue"; "required": false; }; "class": { "alias": "class"; "required": false; }; "checks": { "alias": "checks"; "required": false; }; "errors": { "alias": "errors"; "required": false; }; }, {}, never, never, true, never>;
}
