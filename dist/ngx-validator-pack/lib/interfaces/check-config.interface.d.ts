import { ValidatorFn } from '@angular/forms';
export interface CheckConfig {
    validator: (...args: any[]) => ValidatorFn;
    args: any[];
    errorName: string;
    errorMsg: string;
}
export interface PreparedChecks {
    validators: ValidatorFn[];
    checks: {
        [key: string]: string;
    };
}
export interface Check {
    [key: string]: CheckData;
}
interface CheckData {
    msg: string;
    hasError: boolean;
}
export {};
