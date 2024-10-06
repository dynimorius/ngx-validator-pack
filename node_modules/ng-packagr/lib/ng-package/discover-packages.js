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
Object.defineProperty(exports, "__esModule", { value: true });
exports.discoverPackages = void 0;
const jsonc_parser_1 = require("jsonc-parser");
const path = __importStar(require("path"));
const fs_1 = require("../utils/fs");
const glob_1 = require("../utils/glob");
const log = __importStar(require("../utils/log"));
const path_1 = require("../utils/path");
const entry_point_1 = require("./entry-point/entry-point");
const package_1 = require("./package");
const schema_1 = require("./schema");
async function readConfigFile(filePath) {
    if (!(await (0, fs_1.exists)(filePath))) {
        return undefined;
    }
    if (filePath.endsWith('.js')) {
        return Promise.resolve(`${filePath}`).then(s => __importStar(require(s)));
    }
    const data = await (0, fs_1.readFile)(filePath, 'utf-8');
    return (0, jsonc_parser_1.parse)(data, undefined, { allowTrailingComma: true });
}
/**
 * Resolves a user's package by testing 'ng-package.json', or 'ng-package.js'.
 *
 * @param folderPathOrFilePath A path pointing either to a file or a directory
 * @param isSecondary A boolean determining if this is a secondary package
 * @return The user's package
 */
async function resolveUserPackage(folderPathOrFilePath, isSecondary = false) {
    var _a;
    const fullPath = path.resolve(folderPathOrFilePath);
    const pathStats = await (0, fs_1.stat)(fullPath);
    const basePath = pathStats.isDirectory() ? fullPath : path.dirname(fullPath);
    let ngPackageJson;
    if (pathStats.isDirectory()) {
        ngPackageJson = await readConfigFile(path.join(basePath, 'ng-package.json'));
        if (!ngPackageJson) {
            ngPackageJson = await readConfigFile(path.join(basePath, 'ng-package.js'));
        }
    }
    else {
        ngPackageJson = await readConfigFile(fullPath);
    }
    if (ngPackageJson) {
        ngPackageJson = (_a = ngPackageJson['default']) !== null && _a !== void 0 ? _a : ngPackageJson;
        try {
            if (isSecondary) {
                (0, schema_1.validateNgPackageEntryPointSchema)(ngPackageJson);
            }
            else {
                (0, schema_1.validateNgPackageSchema)(ngPackageJson);
            }
        }
        catch (e) {
            log.error(`An error has occurred while validating config at ${folderPathOrFilePath}`);
            throw e;
        }
        let packageJson = {};
        if (!isSecondary) {
            const pkgJsonPath = path.join(basePath, 'package.json');
            packageJson = await readConfigFile(pkgJsonPath);
            if (!packageJson) {
                throw new Error(`Cannot discover package sources at ${folderPathOrFilePath} as 'package.json' was not found.`);
            }
            if (packageJson && typeof packageJson !== 'object') {
                throw new Error(`Invalid 'package.json' at ${folderPathOrFilePath}.`);
            }
        }
        return {
            basePath,
            packageJson,
            ngPackageJson,
        };
    }
    if (pathStats.isDirectory()) {
        // return even if it's undefined and use defaults when it's not a file
        return undefined;
    }
    if (pathStats.isFile()) {
        throw new Error(`Trying to read a package from unsupported file extension. Path: ${folderPathOrFilePath}`);
    }
    throw new Error(`Cannot discover package sources at ${folderPathOrFilePath}`);
}
/**
 * Scans `directoryPath` and sub-folders, looking for `ng-package` files.
 * Similar to `find ${directoryPath} --name ng-package --exec dirname {}`.
 *
 * @param directoryPath Path pointing to a directory
 * @param excludeFolder A sub-folder of `directoryPath` that is excluded from search results.
 */
async function findSecondaryPackagesPaths(directoryPath, excludeFolder) {
    const ignore = ['**/node_modules/**', '**/.git/**', `${excludeFolder}/**`, 'ng-package.json'];
    const filePaths = await (0, glob_1.globFiles)(`**/ng-package.json`, {
        ignore,
        onlyFiles: true,
        cwd: directoryPath,
    });
    return filePaths.map(subpath => path.dirname(path.join(directoryPath, subpath)));
}
/**
 * Reads a secondary entry point from it's package file.
 *
 * @param primary The primary entry point.
 * @param userPackage The user package for the secondary entry point.
 */
function secondaryEntryPoint(primary, userPackage) {
    const { packageJson, ngPackageJson, basePath } = userPackage;
    if (path.resolve(basePath) === path.resolve(primary.basePath)) {
        log.error(`Cannot read secondary entry point. It's already a primary entry point. Path: ${basePath}`);
        throw new Error(`Secondary entry point is already a primary.`);
    }
    const relativeSourcePath = path.relative(primary.basePath, basePath);
    const secondaryModuleId = (0, path_1.ensureUnixPath)(`${primary.moduleId}/${relativeSourcePath}`);
    return new entry_point_1.NgEntryPoint(packageJson, ngPackageJson, basePath, {
        moduleId: secondaryModuleId,
        primaryDestinationPath: primary.destinationPath,
        destinationPath: path.join(primary.destinationPath, relativeSourcePath),
    });
}
async function discoverPackages({ project }) {
    project = path.isAbsolute(project) ? project : path.resolve(project);
    const { packageJson, ngPackageJson, basePath } = await resolveUserPackage(project);
    const primary = new entry_point_1.NgEntryPoint(packageJson, ngPackageJson, basePath);
    log.debug(`Found primary entry point: ${primary.moduleId}`);
    const folderPaths = await findSecondaryPackagesPaths(basePath, primary.$get('dest'));
    const secondaries = [];
    for (const folderPath of folderPaths) {
        const secondaryPackage = await resolveUserPackage(folderPath, true);
        if (secondaryPackage) {
            secondaries.push(secondaryEntryPoint(primary, secondaryPackage));
        }
    }
    if (secondaries.length > 0) {
        log.debug(`Found secondary entry points: ${secondaries.map(e => e.moduleId).join(', ')}`);
    }
    return new package_1.NgPackage(basePath, primary, secondaries);
}
exports.discoverPackages = discoverPackages;
//# sourceMappingURL=discover-packages.js.map