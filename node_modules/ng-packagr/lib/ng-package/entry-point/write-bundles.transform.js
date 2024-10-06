"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeBundlesTransform = void 0;
const ora_1 = __importDefault(require("ora"));
const path_1 = require("path");
const rollup_1 = require("../../flatten/rollup");
const transform_1 = require("../../graph/transform");
const cache_1 = require("../../utils/cache");
const fs_1 = require("../../utils/fs");
const nodes_1 = require("../nodes");
const writeBundlesTransform = (options) => (0, transform_1.transformFromPromise)(async (graph) => {
    const entryPoint = graph.find((0, nodes_1.isEntryPointInProgress)());
    const { destinationFiles, entryPoint: ngEntryPoint, tsConfig } = entryPoint.data;
    const cache = entryPoint.cache;
    const { fesm2022Dir, esm2022 } = destinationFiles;
    const spinner = (0, ora_1.default)({
        hideCursor: false,
        discardStdin: false,
    });
    const key = await (0, cache_1.generateKey)(ngEntryPoint.moduleId, esm2022, fesm2022Dir, tsConfig.options.compilationMode);
    const hash = await (0, cache_1.generateKey)([...cache.outputCache.values()].map(({ version }) => version).join(':'));
    const cacheDirectory = options.cacheEnabled && options.cacheDirectory;
    if (cacheDirectory) {
        const cacheResult = await (0, cache_1.readCacheEntry)(options.cacheDirectory, key);
        let writing = false;
        if ((cacheResult === null || cacheResult === void 0 ? void 0 : cacheResult.hash) === hash) {
            try {
                for (const file of cacheResult.fesm2022) {
                    const filePath = (0, path_1.join)(fesm2022Dir, file.fileName);
                    if (options.watch && await (0, fs_1.exists)(filePath)) {
                        continue;
                    }
                    if (!writing) {
                        writing = true;
                        spinner.start('Writing FESM bundles');
                        await (0, fs_1.mkdir)(fesm2022Dir, { recursive: true });
                    }
                    await (0, fs_1.writeFile)(filePath, file.type === 'asset' ? file.source : file.code);
                }
                if (writing) {
                    spinner.succeed('Writing FESM bundles');
                }
            }
            catch (error) {
                if (!writing) {
                    spinner.start('Writing FESM bundles');
                }
                spinner.fail();
                throw error;
            }
            return;
        }
    }
    async function generateFESM(rollupCache, dir) {
        const { cache: rollupFESMCache, files } = await (0, rollup_1.rollupBundleFile)({
            sourceRoot: tsConfig.options.sourceRoot,
            entry: esm2022,
            entryName: ngEntryPoint.flatModuleFile,
            moduleName: ngEntryPoint.moduleId,
            dir,
            cache: rollupCache,
            cacheDirectory,
            fileCache: cache.outputCache,
            cacheKey: await (0, cache_1.generateKey)(esm2022, dir, ngEntryPoint.moduleId, tsConfig.options.compilationMode),
        });
        return {
            /** The map contents are in an asset file type, which makes storing the map in the cache as redudant. */
            files: files.map(f => {
                if (f.type === 'chunk') {
                    f.map = null;
                }
                return f;
            }),
            rollupCache: options.watch ? rollupFESMCache : undefined,
        };
    }
    const fesmCache = {
        hash,
    };
    try {
        const { rollupCache, files } = await generateFESM(cache.rollupFESM2022Cache, fesm2022Dir);
        cache.rollupFESM2022Cache = rollupCache;
        fesmCache.fesm2022 = files;
        spinner.succeed(`Generating FESM bundles`);
    }
    catch (error) {
        spinner.fail();
        throw error;
    }
    if (cacheDirectory) {
        await (0, cache_1.saveCacheEntry)(cacheDirectory, key, JSON.stringify(fesmCache));
    }
});
exports.writeBundlesTransform = writeBundlesTransform;
//# sourceMappingURL=write-bundles.transform.js.map