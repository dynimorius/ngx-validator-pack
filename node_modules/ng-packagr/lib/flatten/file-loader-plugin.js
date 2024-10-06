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
exports.fileLoaderPlugin = void 0;
const log = __importStar(require("../utils/log"));
const path_1 = require("../utils/path");
/**
 * Loads a file and it's map.
 */
function fileLoaderPlugin(fileCache) {
    return {
        name: 'file-loader',
        load: function (id) {
            log.debug(`file-loader ${id}`);
            const data = fileCache.get((0, path_1.ensureUnixPath)(id));
            if (!data) {
                throw new Error(`Could not load '${id}' from memory.`);
            }
            return {
                code: data.content,
                map: data.map,
            };
        },
    };
}
exports.fileLoaderPlugin = fileLoaderPlugin;
//# sourceMappingURL=file-loader-plugin.js.map