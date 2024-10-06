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
exports.entryPointTransformFactory = void 0;
const rxjs_1 = require("rxjs");
const node_1 = require("../../graph/node");
const select_1 = require("../../graph/select");
const transform_1 = require("../../graph/transform");
const log = __importStar(require("../../utils/log"));
const nodes_1 = require("../nodes");
/**
 * A re-write of the `transformSources()` script that transforms an entry point from sources to distributable format.
 *
 * Sources are TypeScript source files accompanied by HTML templates and xCSS stylesheets.
 * See the Angular Package Format for a detailed description of what the distributables include.
 *
 * The current transformation pipeline can be thought of as:
 *
 *  - clean
 *  - compileTs
 *  - downlevelTs
 *  - writeBundles
 *    - bundleToFesm15
 *  - relocateSourceMaps
 *  - writePackage
 *   - copyStagedFiles (bundles, esm, dts, sourcemaps)
 *   - writePackageJson
 *
 * The transformation pipeline is pluggable through the dependency injection system.
 * Sub-transformations are passed to this factory function as arguments.
 *
 * @param compileTs Transformation compiling typescript sources to ES2022 modules.
 * @param writeBundles Transformation flattening ES2022 modules to ESM2022, UMD, and minified UMD.
 * @param writePackage Transformation writing a distribution-ready `package.json` (for publishing to npm registry).
 */
const entryPointTransformFactory = (compileTs, writeBundles, writePackage) => (0, rxjs_1.pipe)(
// tap(() => log.info(`Building from sources for entry point`)),
(0, transform_1.transformFromPromise)(async (graph) => {
    // Peek the first entry point from the graph
    const entryPoint = graph.find((0, nodes_1.byEntryPoint)().and(select_1.isInProgress));
    log.msg('\n------------------------------------------------------------------------------');
    log.msg(`Building entry point '${entryPoint.data.entryPoint.moduleId}'`);
    log.msg('------------------------------------------------------------------------------');
}), 
// TypeScript sources compilation
compileTs, 
// After TypeScript: bundling and write package
writeBundles, writePackage, (0, transform_1.transformFromPromise)(async (graph) => {
    const entryPoint = graph.find((0, nodes_1.byEntryPoint)().and(select_1.isInProgress));
    entryPoint.state = node_1.STATE_DONE;
}));
exports.entryPointTransformFactory = entryPointTransformFactory;
//# sourceMappingURL=entry-point.transform.js.map