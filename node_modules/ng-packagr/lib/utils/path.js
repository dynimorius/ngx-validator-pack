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
exports.ensureUnixPath = void 0;
const nodePath = __importStar(require("path"));
const PATH_REGEXP = new RegExp('\\' + nodePath.win32.sep, 'g');
const ensureUnixPathCache = new Map();
const IS_WINDOWS = process.platform === 'win32';
exports.ensureUnixPath = IS_WINDOWS
    ? (path) => {
        if (!path) {
            return null;
        }
        const cachePath = ensureUnixPathCache.get(path);
        if (cachePath) {
            return cachePath;
        }
        // we use a regex instead of the character literal due to a bug in some versions of node.js
        // the path separator needs to be preceded by an escape character
        const normalizedPath = path.replace(PATH_REGEXP, nodePath.posix.sep);
        ensureUnixPathCache.set(path, normalizedPath);
        return normalizedPath;
    }
    : (path) => path;
//# sourceMappingURL=path.js.map