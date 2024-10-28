import {
  greaterOrLessThen,
  hasLetters,
  hasLowercase,
  hasNumbers,
  hasUppercase,
  noSpecial,
} from "../../constant/regex";
import { SequenceConfig } from "../../interfaces/sequence-config.interface";
import {
  lengthValidation,
  regexpNotValidation,
  regexpValidation,
} from "../../validations/validations";

export const PasswordConfigMap: { [key: string]: SequenceConfig } = {
  noAlpha: {
    validationFun: regexpValidation,
    validationFunConfig: {
      regExp: hasLetters,
      error: "A password must contain letters.",
      errorName: "noAlpha",
    },
  },
  noNumeric: {
    validationFun: regexpValidation,
    validationFunConfig: {
      regExp: hasNumbers,
      error: "A password must contain numbers.",
      errorName: "noNumeric",
    },
  },
  noLowercase: {
    validationFun: regexpValidation,
    validationFunConfig: {
      regExp: hasLowercase,
      error: "A password must contain lowercase letters.",
      errorName: "noLowercase",
    },
  },
  noUppercase: {
    validationFun: regexpValidation,
    validationFunConfig: {
      regExp: hasUppercase,
      error: "A password must contain uppercase letters.",
      errorName: "noUppercase",
    },
  },
  noSpecial: {
    validationFun: regexpNotValidation,
    validationFunConfig: {
      regExp: noSpecial,
      error: "A password must contain special characters.",
      errorName: "noSpecial",
    },
  },
  greaterOrLessThen: {
    validationFun: regexpNotValidation,
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
      error: `A password is not long enough.`,
      errorName: "minLength",
    },
  },
};
