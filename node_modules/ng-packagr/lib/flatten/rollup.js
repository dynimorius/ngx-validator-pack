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
exports.rollupBundleFile = void 0;
const plugin_json_1 = __importDefault(require("@rollup/plugin-json"));
const plugin_node_resolve_1 = __importDefault(require("@rollup/plugin-node-resolve"));
const path = __importStar(require("path"));
const cache_1 = require("../utils/cache");
const log = __importStar(require("../utils/log"));
const file_loader_plugin_1 = require("./file-loader-plugin");
let rollup;
/** Runs rollup over the given entry file, writes a bundle file. */
async function rollupBundleFile(opts) {
    var _a;
    await ensureRollup();
    log.debug(`rollup (v${rollup.VERSION}) ${opts.entry} to ${opts.dir}`);
    const cacheDirectory = opts.cacheDirectory;
    // Create the bundle
    const bundle = await rollup.rollup({
        context: 'this',
        external: moduleId => isExternalDependency(moduleId),
        cache: (_a = opts.cache) !== null && _a !== void 0 ? _a : (cacheDirectory ? await (0, cache_1.readCacheEntry)(cacheDirectory, opts.cacheKey) : undefined),
        input: opts.entry,
        plugins: [(0, plugin_node_resolve_1.default)(), (0, plugin_json_1.default)(), (0, file_loader_plugin_1.fileLoaderPlugin)(opts.fileCache)],
        onwarn: warning => {
            switch (warning.code) {
                case 'CIRCULAR_DEPENDENCY':
                case 'UNUSED_EXTERNAL_IMPORT':
                case 'THIS_IS_UNDEFINED':
                    break;
                default:
                    log.warn(warning.message);
                    break;
            }
        },
        preserveSymlinks: true,
        // Disable treeshaking when generating bundles
        // see: https://github.com/angular/angular/pull/32069
        treeshake: false,
    });
    // Output the bundle to disk
    const output = await bundle.write({
        name: opts.moduleName,
        format: 'es',
        dir: opts.dir,
        inlineDynamicImports: false,
        chunkFileNames: opts.entryName + '-[name]-[hash].mjs',
        entryFileNames: opts.entryName + '.mjs',
        banner: '',
        sourcemap: true,
    });
    if (cacheDirectory) {
        await (0, cache_1.saveCacheEntry)(cacheDirectory, opts.cacheKey, JSON.stringify(bundle.cache));
    }
    // Close the bundle to let plugins clean up their external processes or services
    await bundle.close();
    return {
        files: output.output,
        cache: bundle.cache,
    };
}
exports.rollupBundleFile = rollupBundleFile;
async function ensureRollup() {
    if (rollup) {
        return;
    }
    try {
        rollup = await Promise.resolve().then(() => __importStar(require('rollup')));
        log.debug(`rollup using native version.`);
    }
    catch {
        rollup = await Promise.resolve().then(() => __importStar(require('@rollup/wasm-node')));
        log.debug(`rollup using wasm version.`);
    }
}
function isExternalDependency(moduleId) {
    // more information about why we don't check for 'node_modules' path
    // https://github.com/rollup/rollup-plugin-node-resolve/issues/110#issuecomment-350353632
    if (moduleId.startsWith('.') || moduleId.startsWith('/') || path.isAbsolute(moduleId)) {
        // if it's either 'absolute', marked to embed, starts with a '.' or '/' or is the umd bundle and is tslib
        return false;
    }
    return true;
}
//# sourceMappingURL=rollup.js.map