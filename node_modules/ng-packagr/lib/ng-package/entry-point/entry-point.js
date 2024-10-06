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
exports.NgEntryPoint = void 0;
const path = __importStar(require("path"));
const path_1 = require("../../utils/path");
/**
 * An entry point - quoting Angular Package Format - is:
 *
 * > a module intended to be imported by the user. It is referenced by a unique module ID and
 * > exports the public API referenced by that module ID. An example is `@angular/core` or
 * > `@angular/core/testing`. Both entry points exist in the `@angular/core` package, but they
 * > export different symbols. A package can have many entry points.
 *
 * #### Public API, source file tree and build output
 *
 * An entry point serves as the root of a source tree.
 * The entry point's public API references one TypeScript source file (`*.ts`).
 * That source file, e.g. `public_api.ts`, references other source files who in turn may reference
 * other source files, thus creating a tree of source code files.
 * The source files may be TypeScript (`*.ts`), Templates (`.html`) or Stylesheets
 * (`.css`, `.scss`, ..), or other formats.
 *
 * The compilation process for an entry point is a series of transformations applied to the source
 * files, e.g. TypeScript compilation, Inlining of Stylesheets and Templates, and so on.
 * As a result of the compilation process, an entry point is transpiled to a set of artefacts
 * (the build output) which include a FESM'15 Bundle, a FESM'5 Bundle, AoT metadata, TypeScript
 * type definitions, and so on.
 *
 * #### Representation in the domain
 *
 * The set of artefacts is reflected by `NgArtefacts`;
 * one `NgEntryPoint` relates to one `NgArtefacts`.
 * The parent package of an entry point is reflected by `NgPackage`.
 */
class NgEntryPoint {
    constructor(
    /** Values from the `package.json` file of this entry point. */
    packageJson, 
    /** Values from either the `ngPackage` option (from `package.json`) or values from `ng-package.json`. */
    ngPackageJson, 
    /** Absolute directory path of this entry point's `package.json` location. */
    basePath, 
    /** XX: additional auto-configured data passed for secondary entry point's. Needs better docs. */
    secondaryData) {
        this.packageJson = packageJson;
        this.ngPackageJson = ngPackageJson;
        this.basePath = basePath;
        this.secondaryData = secondaryData;
    }
    /** Absolute file path of the entry point's source code entry file. */
    get entryFilePath() {
        return path.resolve(this.basePath, this.entryFile);
    }
    /** Whether or not the entrypoint is secondary */
    get isSecondaryEntryPoint() {
        return !!this.secondaryData;
    }
    /** Absolute directory path of this entry point's 'package.json'. */
    get destinationPath() {
        if (this.secondaryData) {
            return this.secondaryData.destinationPath;
        }
        else {
            return path.resolve(this.basePath, this.$get('dest'));
        }
    }
    get destinationFiles() {
        var _a;
        let primaryDestPath = this.destinationPath;
        let secondaryDir = '';
        if (this.secondaryData) {
            primaryDestPath = this.secondaryData.primaryDestinationPath;
            secondaryDir = path.relative(primaryDestPath, this.secondaryData.destinationPath);
        }
        const flatModuleFile = this.flatModuleFile;
        const pathJoinWithDest = (...paths) => path.join(primaryDestPath, ...paths);
        return {
            directory: (_a = (0, path_1.ensureUnixPath)(secondaryDir)) !== null && _a !== void 0 ? _a : '',
            declarations: pathJoinWithDest(secondaryDir, 'index.d.ts'),
            esm2022: pathJoinWithDest('esm2022', secondaryDir, `${flatModuleFile}.mjs`),
            fesm2022: pathJoinWithDest('fesm2022', `${flatModuleFile}.mjs`),
            fesm2022Dir: pathJoinWithDest('fesm2022'),
        };
    }
    $get(key) {
        const parts = key.split('.');
        let value = this.ngPackageJson;
        for (const key of parts) {
            if (typeof value === 'object' && key in value) {
                value = value[key];
            }
            else {
                return undefined;
            }
        }
        return value;
    }
    get entryFile() {
        // `./index.ts` -> `index.ts`
        return path.posix.normalize(this.$get('lib.entryFile'));
    }
    get cssUrl() {
        return this.$get('lib.cssUrl');
    }
    get flatModuleFile() {
        return this.$get('lib.flatModuleFile') || this.flattenModuleId('-');
    }
    get styleIncludePaths() {
        const includePaths = this.$get('lib.styleIncludePaths') || [];
        return includePaths.map(includePath => path.isAbsolute(includePath) ? includePath : path.resolve(this.basePath, includePath));
    }
    /**
     * The module ID is an "identifier of a module used in the import statements, e.g.
     * '@angular/core'. The ID often maps directly to a path on the filesystem, but this
     * is not always the case due to various module resolution strategies."
     */
    get moduleId() {
        if (this.secondaryData) {
            return this.secondaryData.moduleId;
        }
        else {
            return this.packageJson['name'];
        }
    }
    flattenModuleId(separator = '.') {
        if (this.moduleId.startsWith('@')) {
            return this.moduleId.substring(1).split('/').join(separator);
        }
        else {
            return this.moduleId.split('/').join(separator);
        }
    }
}
exports.NgEntryPoint = NgEntryPoint;
//# sourceMappingURL=entry-point.js.map