/// <reference types="node" />
/// <reference types="node" />
import * as fs from 'fs';
export declare const readFile: typeof fs.promises.readFile;
export declare const writeFile: typeof fs.promises.writeFile;
export declare const access: typeof fs.promises.access;
export declare const mkdir: typeof fs.promises.mkdir;
export declare const stat: typeof fs.promises.stat;
export declare const rmdir: typeof fs.promises.rm;
export declare function exists(path: fs.PathLike): Promise<boolean>;
export declare function copyFile(src: string, dest: string): Promise<void>;
