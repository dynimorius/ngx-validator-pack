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
exports.NgPackage = void 0;
const path = __importStar(require("path"));
/**
 * A package being built. Quoting Angular Package Format, a package is:
 *
 * > the smallest set of files that are published to NPM and installed together, for example
 * > `@angular/core`. (..) The package is installed with `npm install @angular/core`.
 *
 * #### Package and Entry Points
 *
 * A package is composed of several (one or more) entry points.
 * A package must contain at least the primary entry point but can have many secondary entry
 * points.
 * The module ID of the primary entry point, e.g. `@angular/core`, matches the package name, e.g.
 * the package name is given to the command `npm install @angular/core`.
 * The source code files within a package are referenced by the entry points.
 *
 * #### Representation in the domain
 *
 * A _Package_ is reflected by `NgPackage`.
 * An _Entry Point_ is reflected by `NgEntryPoint`.
 * One `NgPackage` relates to one (or many) `NgEntryPoint`,
 * one `NgEntryPoint` relates to one `NgPackage`.
 *
 * #### Watch Out
 *
 * The user's configuration `ngPackage` suggests that it reflects a `NgPackage`.
 * However, the values given in the `lib` property reflect an `NgEntryPoint`.
 * In case the package contains only one entry point, `ngPackage.lib` reflects the primary entry
 * point.
 *
 * @link https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit#
 */
class NgPackage {
    constructor(basePath, 
    /**
     * A reference to the primary entry point.
     */
    primary, 
    /**
     * An array of secondary entry points.
     */
    secondaries = []) {
        this.basePath = basePath;
        this.primary = primary;
        this.secondaries = secondaries;
    }
    /** Absolute path of the package's source folder, derived from the user's (primary) package location. */
    get src() {
        return this.basePath;
    }
    /** Delete output path before build */
    get deleteDestPath() {
        return this.primary.$get('deleteDestPath');
    }
    /** Absolute path of the package's destination directory. */
    get dest() {
        const dest = path.join(this.basePath, this.primary.$get('dest'));
        return dest.endsWith('/') ? dest.slice(0, -1) : dest;
    }
    get keepLifecycleScripts() {
        return this.primary.$get('keepLifecycleScripts');
    }
    get assets() {
        return this.primary.$get('assets');
    }
    get inlineStyleLanguage() {
        return this.primary.$get('inlineStyleLanguage');
    }
    get allowedNonPeerDependencies() {
        const alwaysInclude = ['tslib'];
        const allowedNonPeerDependencies = this.primary.$get('allowedNonPeerDependencies');
        return Array.from(new Set([...allowedNonPeerDependencies, ...alwaysInclude]));
    }
    entryPoint(moduleId) {
        return [this.primary, ...this.secondaries].find(entryPoint => entryPoint.moduleId === moduleId);
    }
}
exports.NgPackage = NgPackage;
//# sourceMappingURL=package.js.map