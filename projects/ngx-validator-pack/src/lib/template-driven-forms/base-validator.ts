import {
  DateValidationInput,
  ConditionalValidationInput,
  RegExpValidationInput,
  LinkValidationInput,
} from "../interfaces/directive-input.interface";

export type ValidationInput =
  | RegExpValidationInput
  | DateValidationInput
  | ConditionalValidationInput
  | LinkValidationInput;
  
export class BaseValidator {
  value!: ValidationInput;

  setValue(value: ValidationInput): void {
    this.value = value;
  }
}
