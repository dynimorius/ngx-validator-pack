"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNgPackageEntryPointSchema = exports.validateNgPackageSchema = void 0;
const ajv_1 = __importDefault(require("ajv"));
const log = __importStar(require("../utils/log"));
/** Lazily initialized ajv validator instance. */
let ajvNgPackageSchemaValidator;
let ajvNgPackageEntryPointSchemaValidator;
/**
 * Validates the `ngPackageJson` value against the JSON schema using ajv. An error is thrown if
 * schema errors are found.
 *
 * @param ngPackageJson The value to validate.
 */
function validateNgPackageSchema(ngPackageJson) {
    const validate = (ajvNgPackageSchemaValidator !== null && ajvNgPackageSchemaValidator !== void 0 ? ajvNgPackageSchemaValidator : (ajvNgPackageSchemaValidator = getSchemaValidator(require('../../ng-package.schema.json'))));
    const isValid = validate(ngPackageJson);
    if (!isValid) {
        throw new Error(`Configuration doesn't match the required schema.\n${formatSchemaValidationErrors(validate.errors)}`);
    }
}
exports.validateNgPackageSchema = validateNgPackageSchema;
/**
 * Validates the `ngPackageJson` value against the JSON schema using ajv. An error is thrown if
 * schema errors are found.
 *
 * @param ngPackageJson The value to validate.
 */
function validateNgPackageEntryPointSchema(ngPackageJson) {
    const validate = (ajvNgPackageEntryPointSchemaValidator !== null && ajvNgPackageEntryPointSchemaValidator !== void 0 ? ajvNgPackageEntryPointSchemaValidator : (ajvNgPackageEntryPointSchemaValidator = getSchemaValidator(require('../../ng-entrypoint.schema.json'))));
    const isValid = validate(ngPackageJson);
    if (!isValid) {
        throw new Error(`Configuration doesn't match the required schema.\n${formatSchemaValidationErrors(validate.errors)}`);
    }
}
exports.validateNgPackageEntryPointSchema = validateNgPackageEntryPointSchema;
function formatSchemaValidationErrors(errors) {
    return errors
        .map(err => {
        let message = `Data path ${JSON.stringify(err.instancePath)} ${err.message}`;
        if (err.keyword === 'additionalProperties') {
            message += ` (${err.params.additionalProperty})`;
        }
        return message + '.';
    })
        .join('\n');
}
/**
 * Returns an initialized ajv validator for the ng-package JSON schema.
 */
function getSchemaValidator(schema) {
    const _ajv = new ajv_1.default({
        useDefaults: true,
        strict: false, // strict mode is enabled by default in JSON schema type definitions, which disallows the use of `useDefaults`.
    });
    // Add handler for x-deprecated fields
    _ajv.addKeyword({
        keyword: 'x-deprecated',
        validate: (schema, _data, _parentSchema, dataCxt) => {
            if (schema) {
                log.warn(`Option "${dataCxt.parentDataProperty}" is deprecated${typeof schema == 'string' ? ': ' + schema : '.'}`);
            }
            return true;
        },
        errors: false,
    });
    return _ajv.compile(schema);
}
//# sourceMappingURL=schema.js.map