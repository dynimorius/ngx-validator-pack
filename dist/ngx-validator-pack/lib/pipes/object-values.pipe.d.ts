import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ObjectValuesPipe implements PipeTransform {
    transform(value: {
        [key: string]: any;
    }): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ObjectValuesPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ObjectValuesPipe, "objectValues", true>;
}
