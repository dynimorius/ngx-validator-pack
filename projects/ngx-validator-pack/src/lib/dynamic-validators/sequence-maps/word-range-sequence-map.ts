import { SequenceConfig } from "../../interfaces/sequence-config.interface";
import { wordCountValidation } from "../../validations/validations";

export const WordRangeConfigMap: {[key:string]: SequenceConfig} = {
    min: {
        validationFun: wordCountValidation,
        validationFunConfig: {
            count: 15,
            comparison: '>=',
            error: "The minimum word count is 15.",
            errorName: "minWordCount",
        }
    },
    max: {
        validationFun: wordCountValidation,
        validationFunConfig: {
            count: 200,
            comparison: '<=',
            error: "The maximum word count is 200.",
            errorName: "maxWordCount",
        }
    }
}