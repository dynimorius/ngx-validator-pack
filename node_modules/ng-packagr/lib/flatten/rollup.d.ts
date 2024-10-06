import type { OutputAsset, OutputChunk, RollupCache } from 'rollup';
import { OutputFileCache } from '../ng-package/nodes';
/**
 * Options used in `ng-packagr` for writing flat bundle files.
 *
 * These options are passed through to rollup.
 */
export interface RollupOptions {
    moduleName: string;
    entry: string;
    entryName: string;
    dir: string;
    sourceRoot: string;
    cache?: RollupCache;
    cacheDirectory?: string | false;
    fileCache: OutputFileCache;
    cacheKey: string;
}
/** Runs rollup over the given entry file, writes a bundle file. */
export declare function rollupBundleFile(opts: RollupOptions): Promise<{
    cache: RollupCache;
    files: (OutputChunk | OutputAsset)[];
}>;
