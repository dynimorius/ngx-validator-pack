import { Directive, Inject, InjectionToken, Optional, Provider, Self, forwardRef } from "@angular/core";
import {
  AsyncValidator,
  AsyncValidatorFn,
  ControlValueAccessor,
  FormControlDirective,
  NG_ASYNC_VALIDATORS,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  SetDisabledStateOption,
  Validator,
  ValidatorFn,
} from "@angular/forms";

export const NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken('');

const formControlBinding: Provider = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective),
};

export const CALL_SET_DISABLED_STATE = new InjectionToken('CallSetDisabledState', {
  providedIn: 'root',
  factory: () => setDisabledStateDefault,
});

export const setDisabledStateDefault: SetDisabledStateOption = 'always';

@Directive({
  selector: "[dmzShowValidation2]",
  standalone: true,
})
export class ShowValidation2Directive extends FormControlDirective {
  constructor(
    @Optional()
    @Self()
    @Inject(NG_VALIDATORS)
    validators: (Validator | ValidatorFn)[],
    @Optional()
    @Self()
    @Inject(NG_ASYNC_VALIDATORS)
    asyncValidators: (AsyncValidator | AsyncValidatorFn)[],
    @Optional() @Self() @Inject(NG_VALUE_ACCESSOR) valueAccessors: ControlValueAccessor[],
    @Optional()
    @Inject(NG_MODEL_WITH_FORM_CONTROL_WARNING)
    private override readonly _ngModelWarningConfig: string | null,
    @Optional()
    @Inject(CALL_SET_DISABLED_STATE)
    private override readonly callSetDisabledState?: SetDisabledStateOption
  ) {
    super(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState);
  }
}
