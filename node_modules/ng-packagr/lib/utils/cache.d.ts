export declare function generateKey(...valuesToConsider: string[]): Promise<string>;
export declare function readCacheEntry(cachePath: string, key: string): Promise<any>;
export declare function saveCacheEntry(cachePath: string, key: string, content: string): Promise<void>;
