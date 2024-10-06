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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFileWatch = void 0;
const chokidar = __importStar(require("chokidar"));
const os_1 = require("os");
const path = __importStar(require("path"));
const rxjs_1 = require("rxjs");
const log = __importStar(require("../utils/log"));
const path_1 = require("../utils/path");
function createFileWatch(basePaths, ignoredPaths = []) {
    log.debug(`Watching for changes: basePath: ${basePaths}, ignoredPaths: ${ignoredPaths}`);
    const watch = chokidar.watch([], {
        ignoreInitial: true,
        ignored: [...ignoredPaths, /\.map$/, /.tsbuildinfo$/],
        persistent: true,
    });
    const isLinux = (0, os_1.platform)() === 'linux';
    const handleFileChange = (event, filePath, observer) => {
        log.debug(`Watch: Path changed. Event: ${event}, Path: ${filePath}`);
        if (isLinux) {
            // Workaround for Linux where chokidar will not handle future events
            // for files that were unlinked and immediately recreated.
            watch.unwatch(filePath);
            watch.add(filePath);
        }
        if (event === 'unlinkDir' || event === 'addDir') {
            // we don't need to trigger on directory removed or renamed as chokidar will fire the changes for each file
            return;
        }
        observer.next({
            filePath: (0, path_1.ensureUnixPath)(path.resolve(filePath)),
            event,
        });
    };
    return {
        watcher: watch,
        onFileChange: new rxjs_1.Observable(observer => {
            watch.on('all', (event, filePath) => handleFileChange(event, filePath, observer));
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            return () => watch.close();
        }),
    };
}
exports.createFileWatch = createFileWatch;
//# sourceMappingURL=file-watcher.js.map