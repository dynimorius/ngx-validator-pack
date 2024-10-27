import { AbstractControl, ValidationErrors } from "@angular/forms";
export declare const requiredIfValidation: (control: AbstractControl, config: {
    requiredControlName: string;
    controlToCheckName: string;
    error?: string;
}) => ValidationErrors | null;
export declare const requiredIfNotValidation: (control: AbstractControl, config: {
    requiredControlName: string;
    controlToCheckName: string;
    error?: string;
}) => ValidationErrors | null;
export declare const requiredEtherValidation: (control: AbstractControl, config: {
    requiredControlName: string;
    controlToCheckName: string;
    error?: string;
}) => ValidationErrors | null;
