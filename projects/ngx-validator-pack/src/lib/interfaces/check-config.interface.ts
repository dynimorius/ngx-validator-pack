import { ValidatorFn } from '@angular/forms';

export interface CheckConfig {
  validator: (...args: any[]) => ValidatorFn;
  args: any[],
  errorName: string;
  errorMsg: string;
}

interface ValidatorConfig {
    args: any[],
    errorName: string;
    errorMsg: string;
}

export interface PreparedChecks {
    validators: ValidatorFn[],
    checks: {[key:string]: string};
}
