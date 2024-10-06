export interface PostcssConfiguration {
    plugins: [name: string, options?: object | string][];
}
export declare function loadPostcssConfiguration(projectRoot: string): PostcssConfiguration | undefined;
