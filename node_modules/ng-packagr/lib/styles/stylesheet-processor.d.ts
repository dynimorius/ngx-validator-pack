export declare enum CssUrl {
    inline = "inline",
    none = "none"
}
export declare class StylesheetProcessor {
    private readonly projectBasePath;
    private readonly basePath;
    private readonly cssUrl?;
    private readonly includePaths?;
    private readonly cacheDirectory?;
    private renderWorker;
    constructor(projectBasePath: string, basePath: string, cssUrl?: CssUrl, includePaths?: string[], cacheDirectory?: string | false);
    process({ filePath, content }: {
        filePath: string;
        content: string;
    }): Promise<string>;
    /** Destory workers in pool. */
    destroy(): void;
    private createRenderWorker;
}
