import * as chokidar from 'chokidar';
import { Observable } from 'rxjs';
type AllFileWatchEvents = 'change' | 'unlink' | 'add' | 'unlinkDir' | 'addDir';
export type FileWatchEvent = Exclude<AllFileWatchEvents, 'unlinkDir' | 'addDir'>;
export interface FileChangedEvent {
    filePath: string;
    event: FileWatchEvent;
}
export declare function createFileWatch(basePaths: string | string[], ignoredPaths?: (RegExp | string)[]): {
    watcher: chokidar.FSWatcher;
    onFileChange: Observable<FileChangedEvent>;
};
export {};
