"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyseSourcesTransform = void 0;
const path_1 = require("path");
const rxjs_1 = require("rxjs");
const typescript_1 = __importDefault(require("typescript"));
const cache_compiler_host_1 = require("../../ts/cache-compiler-host");
const log_1 = require("../../utils/log");
const path_2 = require("../../utils/path");
const nodes_1 = require("../nodes");
exports.analyseSourcesTransform = (0, rxjs_1.pipe)((0, rxjs_1.map)(graph => {
    const entryPoints = graph.filter(nodes_1.isEntryPoint);
    const dirtyEntryPoints = entryPoints.filter(x => x.state !== 'done');
    for (const entryPoint of dirtyEntryPoints) {
        analyseEntryPoint(graph, entryPoint, entryPoints);
    }
    return graph;
}));
/**
 * Analyses an entrypoint, searching for TypeScript dependencies and additional resources (Templates and Stylesheets).
 *
 * @param graph Build graph
 * @param entryPoint Current entry point that should be analysed.
 * @param entryPoints List of all entry points.
 */
function analyseEntryPoint(graph, entryPoint, entryPoints) {
    const { oldPrograms, analysesSourcesFileCache, moduleResolutionCache } = entryPoint.cache;
    const oldProgram = oldPrograms && oldPrograms['analysis'];
    const { moduleId } = entryPoint.data.entryPoint;
    const packageNode = graph.find(nodes_1.isPackage);
    const primaryModuleId = packageNode.data.primary.moduleId;
    (0, log_1.debug)(`Analysing sources for ${moduleId}`);
    const tsConfigOptions = {
        // Needed because of `Property 'extendedDiagnostics' is incompatible with index signature.`
        ...entryPoint.data.tsConfig.options,
        skipLibCheck: true,
        noLib: true,
        noEmit: true,
        types: [],
        target: typescript_1.default.ScriptTarget.Latest,
        strict: false,
    };
    const compilerHost = (0, cache_compiler_host_1.cacheCompilerHost)(graph, entryPoint, tsConfigOptions, moduleResolutionCache, undefined, undefined, analysesSourcesFileCache);
    const potentialDependencies = new Set();
    compilerHost.resolveTypeReferenceDirectives = (moduleNames, containingFile, redirectedReference, options) => {
        return moduleNames.map(name => {
            const moduleName = typeof name === 'string' ? name : name.fileName;
            if (!moduleName.startsWith('.')) {
                if (moduleName === primaryModuleId || moduleName.startsWith(`${primaryModuleId}/`)) {
                    potentialDependencies.add(moduleName);
                }
                return undefined;
            }
            const result = typescript_1.default.resolveTypeReferenceDirective(moduleName, (0, path_2.ensureUnixPath)(containingFile), options, compilerHost, redirectedReference).resolvedTypeReferenceDirective;
            return result;
        });
    };
    compilerHost.resolveModuleNames = (moduleNames, containingFile, _reusedNames, redirectedReference, options) => {
        return moduleNames.map(moduleName => {
            if (!moduleName.startsWith('.')) {
                if (moduleName === primaryModuleId || moduleName.startsWith(`${primaryModuleId}/`)) {
                    potentialDependencies.add(moduleName);
                }
                return undefined;
            }
            const { resolvedModule } = typescript_1.default.resolveModuleName(moduleName, (0, path_2.ensureUnixPath)(containingFile), options, compilerHost, moduleResolutionCache, redirectedReference);
            return resolvedModule;
        });
    };
    const program = typescript_1.default.createProgram(entryPoint.data.tsConfig.rootNames, tsConfigOptions, compilerHost, oldProgram);
    // If an index file exists parallel to the entryFilePath it is not valid as index should be reserved as an
    // entry file of an entry-point based on node resolution strategy.
    if ((0, path_1.basename)(entryPoint.data.entryPoint.entryFilePath) !== 'index.ts') {
        const potentialIndexPath = (0, path_1.join)((0, path_1.dirname)(entryPoint.data.entryPoint.entryFilePath), 'index.ts');
        const sf = program.getSourceFile((0, path_2.ensureUnixPath)(potentialIndexPath));
        if (sf) {
            throw new Error(`Entry point '${moduleId}' has an 'index.ts' parallel to the 'entryFilePath'. ` +
                `The 'entryFilePath' should be updated to point to the 'index.ts' file.\n` +
                `Full path: ${potentialIndexPath}`);
        }
    }
    (0, log_1.debug)(`tsc program structure is reused: ${oldProgram ? oldProgram.structureIsReused : 'No old program'}`);
    entryPoint.cache.oldPrograms = { ...entryPoint.cache.oldPrograms, ['analysis']: program };
    const entryPointsMapped = {};
    for (const dep of entryPoints) {
        entryPointsMapped[dep.data.entryPoint.moduleId] = dep;
    }
    for (const moduleName of potentialDependencies) {
        const dep = entryPointsMapped[moduleName];
        if (dep) {
            (0, log_1.debug)(`Found entry point dependency: ${moduleId} -> ${moduleName}`);
            if (moduleId === moduleName) {
                throw new Error(`Entry point ${moduleName} has a circular dependency on itself.`);
            }
            if (dep.some(n => entryPoint === n)) {
                throw new Error(`Entry point ${moduleName} has a circular dependency on ${moduleId}.`);
            }
            entryPoint.dependsOn(dep);
        }
        else {
            throw new Error(`Entry point ${moduleName} which is required by ${moduleId} doesn't exist.`);
        }
    }
}
//# sourceMappingURL=analyse-sources.transform.js.map