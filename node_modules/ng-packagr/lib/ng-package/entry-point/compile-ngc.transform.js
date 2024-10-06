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
exports.compileNgcTransformFactory = void 0;
const ora_1 = __importDefault(require("ora"));
const path = __importStar(require("path"));
const typescript_1 = __importDefault(require("typescript"));
const transform_1 = require("../../graph/transform");
const compile_source_files_1 = require("../../ngc/compile-source-files");
const tsconfig_1 = require("../../ts/tsconfig");
const nodes_1 = require("../nodes");
const compileNgcTransformFactory = (StylesheetProcessor, options) => {
    return (0, transform_1.transformFromPromise)(async (graph) => {
        var _a, _b;
        var _c;
        const spinner = (0, ora_1.default)({
            hideCursor: false,
            discardStdin: false,
        });
        const entryPoints = graph.filter(nodes_1.isEntryPoint);
        const entryPoint = entryPoints.find((0, nodes_1.isEntryPointInProgress)());
        const ngPackageNode = graph.find(nodes_1.isPackage);
        const projectBasePath = ngPackageNode.data.primary.basePath;
        try {
            // Add paths mappings for dependencies
            const tsConfig = (0, tsconfig_1.setDependenciesTsConfigPaths)(entryPoint.data.tsConfig, entryPoints);
            // Compile TypeScript sources
            const { esm2022: esm2022, declarations } = entryPoint.data.destinationFiles;
            const { basePath, cssUrl, styleIncludePaths } = entryPoint.data.entryPoint;
            const { moduleResolutionCache } = entryPoint.cache;
            spinner.start(`Compiling with Angular sources in Ivy ${tsConfig.options.compilationMode || 'full'} compilation mode.`);
            (_a = (_c = entryPoint.cache).stylesheetProcessor) !== null && _a !== void 0 ? _a : (_c.stylesheetProcessor = new StylesheetProcessor(projectBasePath, basePath, cssUrl, styleIncludePaths, options.cacheEnabled && options.cacheDirectory));
            await (0, compile_source_files_1.compileSourceFiles)(graph, tsConfig, moduleResolutionCache, options, {
                outDir: path.dirname(esm2022),
                declarationDir: path.dirname(declarations),
                declaration: true,
                target: typescript_1.default.ScriptTarget.ES2022,
            }, entryPoint.cache.stylesheetProcessor);
        }
        catch (error) {
            spinner.fail();
            throw error;
        }
        finally {
            if (!options.watch) {
                (_b = entryPoint.cache.stylesheetProcessor) === null || _b === void 0 ? void 0 : _b.destroy();
            }
        }
        spinner.succeed();
        return graph;
    });
};
exports.compileNgcTransformFactory = compileNgcTransformFactory;
//# sourceMappingURL=compile-ngc.transform.js.map