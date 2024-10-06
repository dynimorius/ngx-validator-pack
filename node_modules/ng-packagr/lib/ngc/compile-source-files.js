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
exports.compileSourceFiles = void 0;
const node_path_1 = require("node:path");
const typescript_1 = __importDefault(require("typescript"));
const nodes_1 = require("../ng-package/nodes");
const cache_compiler_host_1 = require("../ts/cache-compiler-host");
const load_esm_1 = require("../utils/load-esm");
const log = __importStar(require("../utils/log"));
async function compileSourceFiles(graph, tsConfig, moduleResolutionCache, options, extraOptions, stylesheetProcessor) {
    var _a, _b;
    const { NgtscProgram, formatDiagnostics } = await (0, load_esm_1.ngCompilerCli)();
    const { cacheDirectory, watch, cacheEnabled } = options;
    const tsConfigOptions = { ...tsConfig.options, ...extraOptions };
    const entryPoint = graph.find((0, nodes_1.isEntryPointInProgress)());
    const ngPackageNode = graph.find(nodes_1.isPackage);
    const inlineStyleLanguage = ngPackageNode.data.inlineStyleLanguage;
    const cacheDir = cacheEnabled && cacheDirectory;
    if (cacheDir) {
        (_a = tsConfigOptions.incremental) !== null && _a !== void 0 ? _a : (tsConfigOptions.incremental = true);
        (_b = tsConfigOptions.tsBuildInfoFile) !== null && _b !== void 0 ? _b : (tsConfigOptions.tsBuildInfoFile = (0, node_path_1.join)(cacheDir, `tsbuildinfo/${entryPoint.data.entryPoint.flatModuleFile}.tsbuildinfo`));
    }
    const tsCompilerHost = (0, cache_compiler_host_1.cacheCompilerHost)(graph, entryPoint, tsConfigOptions, moduleResolutionCache, stylesheetProcessor, inlineStyleLanguage);
    const cache = entryPoint.cache;
    const sourceFileCache = cache.sourcesFileCache;
    let usingBuildInfo = false;
    let oldBuilder = cache.oldBuilder;
    if (!oldBuilder && cacheDir) {
        oldBuilder = typescript_1.default.readBuilderProgram(tsConfigOptions, tsCompilerHost);
        usingBuildInfo = true;
    }
    // Create the Angular specific program that contains the Angular compiler
    const angularProgram = new NgtscProgram(tsConfig.rootNames, tsConfigOptions, tsCompilerHost, cache.oldNgtscProgram);
    const angularCompiler = angularProgram.compiler;
    const { ignoreForDiagnostics, ignoreForEmit } = angularCompiler;
    // SourceFile versions are required for builder programs.
    // The wrapped host inside NgtscProgram adds additional files that will not have versions.
    const typeScriptProgram = angularProgram.getTsProgram();
    (0, cache_compiler_host_1.augmentProgramWithVersioning)(typeScriptProgram);
    let builder;
    if (watch || cacheDir) {
        builder = cache.oldBuilder = typescript_1.default.createEmitAndSemanticDiagnosticsBuilderProgram(typeScriptProgram, tsCompilerHost, oldBuilder);
        cache.oldNgtscProgram = angularProgram;
    }
    else {
        builder = typescript_1.default.createEmitAndSemanticDiagnosticsBuilderProgram(typeScriptProgram, tsCompilerHost);
    }
    // Update semantic diagnostics cache
    const affectedFiles = new Set();
    // Analyze affected files when in watch mode for incremental type checking
    if ('getSemanticDiagnosticsOfNextAffectedFile' in builder) {
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const result = builder.getSemanticDiagnosticsOfNextAffectedFile(undefined, sourceFile => {
                // If the affected file is a TTC shim, add the shim's original source file.
                // This ensures that changes that affect TTC are typechecked even when the changes
                // are otherwise unrelated from a TS perspective and do not result in Ivy codegen changes.
                // For example, changing @Input property types of a directive used in another component's
                // template.
                if (ignoreForDiagnostics.has(sourceFile) && sourceFile.fileName.endsWith('.ngtypecheck.ts')) {
                    // This file name conversion relies on internal compiler logic and should be converted
                    // to an official method when available. 15 is length of `.ngtypecheck.ts`
                    const originalFilename = sourceFile.fileName.slice(0, -15) + '.ts';
                    const originalSourceFile = builder.getSourceFile(originalFilename);
                    if (originalSourceFile) {
                        affectedFiles.add(originalSourceFile);
                    }
                    return true;
                }
                return false;
            });
            if (!result) {
                break;
            }
            affectedFiles.add(result.affected);
        }
        // Add all files with associated template type checking files.
        // Stored TS build info does not have knowledge of the AOT compiler or the typechecking state of the templates.
        // To ensure that errors are reported correctly, all AOT component diagnostics need to be analyzed even if build
        // info is present.
        if (usingBuildInfo) {
            for (const sourceFile of builder.getSourceFiles()) {
                if (ignoreForDiagnostics.has(sourceFile) && sourceFile.fileName.endsWith('.ngtypecheck.ts')) {
                    // This file name conversion relies on internal compiler logic and should be converted
                    // to an official method when available. 15 is length of `.ngtypecheck.ts`
                    const originalFilename = sourceFile.fileName.slice(0, -15) + '.ts';
                    const originalSourceFile = builder.getSourceFile(originalFilename);
                    if (originalSourceFile) {
                        affectedFiles.add(originalSourceFile);
                    }
                }
            }
        }
    }
    // Collect program level diagnostics
    const allDiagnostics = [
        ...angularCompiler.getOptionDiagnostics(),
        ...builder.getOptionsDiagnostics(),
        ...builder.getGlobalDiagnostics(),
    ];
    // Required to support asynchronous resource loading
    // Must be done before creating transformers or getting template diagnostics
    await angularCompiler.analyzeAsync();
    // Collect source file specific diagnostics
    for (const sourceFile of builder.getSourceFiles()) {
        if (ignoreForDiagnostics.has(sourceFile)) {
            continue;
        }
        allDiagnostics.push(...builder.getDeclarationDiagnostics(sourceFile), ...builder.getSyntacticDiagnostics(sourceFile), ...builder.getSemanticDiagnostics(sourceFile));
        // Declaration files cannot have template diagnostics
        if (sourceFile.isDeclarationFile) {
            continue;
        }
        // Only request Angular template diagnostics for affected files to avoid
        // overhead of template diagnostics for unchanged files.
        if (affectedFiles.has(sourceFile)) {
            const angularDiagnostics = angularCompiler.getDiagnosticsForFile(sourceFile, affectedFiles.size === 1 ? /** OptimizeFor.SingleFile **/ 0 : /** OptimizeFor.WholeProgram */ 1);
            allDiagnostics.push(...angularDiagnostics);
            sourceFileCache.updateAngularDiagnostics(sourceFile, angularDiagnostics);
        }
    }
    const otherDiagnostics = [];
    const errorDiagnostics = [];
    for (const diagnostic of allDiagnostics) {
        if (diagnostic.category === typescript_1.default.DiagnosticCategory.Error) {
            errorDiagnostics.push(diagnostic);
        }
        else {
            otherDiagnostics.push(diagnostic);
        }
    }
    if (otherDiagnostics.length) {
        log.msg(formatDiagnostics(errorDiagnostics));
    }
    if (errorDiagnostics.length) {
        throw new Error(formatDiagnostics(errorDiagnostics));
    }
    const transformers = angularCompiler.prepareEmit().transformers;
    if ('getSemanticDiagnosticsOfNextAffectedFile' in builder) {
        while (builder.emitNextAffectedFile((fileName, data, writeByteOrderMark, onError, sourceFiles) => {
            if (fileName.endsWith('.tsbuildinfo')) {
                tsCompilerHost.writeFile(fileName, data, writeByteOrderMark, onError, sourceFiles);
            }
        })) {
            // empty
        }
    }
    for (const sourceFile of builder.getSourceFiles()) {
        if (ignoreForEmit.has(sourceFile)) {
            continue;
        }
        if (angularCompiler.incrementalCompilation.safeToSkipEmit(sourceFile)) {
            continue;
        }
        builder.emit(sourceFile, undefined, undefined, undefined, transformers);
        angularCompiler.incrementalCompilation.recordSuccessfulEmit(sourceFile);
    }
}
exports.compileSourceFiles = compileSourceFiles;
//# sourceMappingURL=compile-source-files.js.map