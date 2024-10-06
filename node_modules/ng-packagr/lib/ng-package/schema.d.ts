import { NgPackageEntryConfig } from '../../ng-entrypoint.schema';
import { NgPackageConfig } from '../../ng-package.schema';
/**
 * Validates the `ngPackageJson` value against the JSON schema using ajv. An error is thrown if
 * schema errors are found.
 *
 * @param ngPackageJson The value to validate.
 */
export declare function validateNgPackageSchema(ngPackageJson: unknown): asserts ngPackageJson is NgPackageConfig;
/**
 * Validates the `ngPackageJson` value against the JSON schema using ajv. An error is thrown if
 * schema errors are found.
 *
 * @param ngPackageJson The value to validate.
 */
export declare function validateNgPackageEntryPointSchema(ngPackageJson: unknown): asserts ngPackageJson is NgPackageEntryConfig;
