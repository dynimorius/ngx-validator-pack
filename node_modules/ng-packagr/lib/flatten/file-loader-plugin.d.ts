import type { Plugin } from 'rollup';
import { OutputFileCache } from '../ng-package/nodes';
/**
 * Loads a file and it's map.
 */
export declare function fileLoaderPlugin(fileCache: OutputFileCache): Plugin;
