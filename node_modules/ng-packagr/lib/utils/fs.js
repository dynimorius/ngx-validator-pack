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
exports.copyFile = exports.exists = exports.rmdir = exports.stat = exports.mkdir = exports.access = exports.writeFile = exports.readFile = void 0;
const fs = __importStar(require("fs"));
const path_1 = require("path");
const util_1 = require("util");
exports.readFile = fs.promises.readFile;
exports.writeFile = fs.promises.writeFile;
exports.access = fs.promises.access;
exports.mkdir = fs.promises.mkdir;
exports.stat = fs.promises.stat;
exports.rmdir = fs.promises.rm;
async function exists(path) {
    try {
        await (0, exports.access)(path, fs.constants.F_OK);
        return true;
    }
    catch {
        return false;
    }
}
exports.exists = exists;
const cpFile = (0, util_1.promisify)(fs.copyFile);
async function copyFile(src, dest) {
    const dir = (0, path_1.dirname)(dest);
    if (!(await exists(dir))) {
        await (0, exports.mkdir)(dir, { recursive: true });
    }
    await cpFile(src, dest, fs.constants.COPYFILE_FICLONE);
}
exports.copyFile = copyFile;
//# sourceMappingURL=fs.js.map