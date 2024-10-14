import { ComparisonOperations } from '../helpers/date';

interface BaseValidationInput {
  error?: string;
  errorName?: string;
}

export interface RegExpValidationInput extends BaseValidationInput {
  regExp: RegExp;
}

export const regExpInputFactory = (
  value: RegExpValidationInput,
  errorName: string,
  error: string
): RegExpValidationInput => {
  return {
    regExp: value.regExp,
    errorName: value.errorName ?? errorName,
    error: value.error ?? error,
  };
};

export interface DateValidationInput extends BaseValidationInput {
  date: Date;
}

export const DateInputFactory = (
  value: DateValidationInput,
  errorName: string,
  error: string
): DateValidationInput => {
  return {
    date: value.date,
    errorName: value.errorName ?? errorName,
    error: value.error ?? error,
  };
};

export interface CompareValidationInput extends BaseValidationInput {
  date: Date;
  comparison: ComparisonOperations;
}

export const CompareInputFactory = (
  value: CompareValidationInput,
  errorName: string,
  error: string
): CompareValidationInput => {
  return {
    date: value.date,
    comparison: value.comparison,
    errorName: value.errorName ?? errorName,
    error: value.error ?? error,
  };
};

export interface ConditionalValidationInput extends BaseValidationInput {
  conditional: (() => boolean) | boolean;
}

export const ConditionalInputFactory = (
  value: ConditionalValidationInput,
  errorName: string,
  error: string
): ConditionalValidationInput => {
  return {
    conditional: value.conditional,
    errorName: value.errorName ?? errorName,
    error: value.error ?? error,
  };
};

export interface LinkValidationInput extends BaseValidationInput {
  link: string;
}

export const LinkInputFactory = (
  value: LinkValidationInput,
  errorName: string,
  error: string
): LinkValidationInput => {
  return {
    link: value.link,
    errorName: value.errorName ?? errorName,
    error: value.error ?? error,
  };
};
