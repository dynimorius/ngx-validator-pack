import {
  greaterOrLessThen,
  hasLetters,
  hasLowercase,
  hasNumbers,
  hasUppercase,
  noSpecial,
} from "../constant/regex";
import { SequenceConfig } from "../interfaces/sequence-config.interface";
import {
  lengthValidation,
  regexpTestNotValidation,
  regexpTestValidation,
} from "../validations/validations";

export const PasswordConfigMap: { [key: string]: SequenceConfig } = {
  noAlpha: {
    validationFun: regexpTestValidation,
    validationFunConfig: {
      regExp: hasLetters,
      error: "A password must contain letters.",
      errorName: "noAlpha",
    },
  },
  noNumeric: {
    validationFun: regexpTestValidation,
    validationFunConfig: {
      regExp: hasNumbers,
      error: "A password must contain numbers.",
      errorName: "noNumeric",
    },
  },
  noLowercase: {
    validationFun: regexpTestValidation,
    validationFunConfig: {
      regExp: hasLowercase,
      error: "A password must contain lowercase letters.",
      errorName: "noLowercase",
    },
  },
  noUppercase: {
    validationFun: regexpTestValidation,
    validationFunConfig: {
      regExp: hasUppercase,
      error: "A password must contain uppercase letters.",
      errorName: "noUppercase",
    },
  },
  noSpecial: {
    validationFun: regexpTestNotValidation,
    validationFunConfig: {
      regExp: noSpecial,
      error: "A password must contain special characters.",
      errorName: "noSpecial",
    },
  },
  greaterOrLessThen: {
    validationFun: regexpTestNotValidation,
    validationFunConfig: {
      regExp: greaterOrLessThen,
      error: "A password must not contain < or > characters.",
      errorName: "greaterOrLessThen",
    },
  },
  minLength: {
    validationFun: lengthValidation,
    validationFunConfig: {
      length: 8,
      error: `A password must be at least 8 characters long.`,
      errorName: "minLength",
    },
  },
};
