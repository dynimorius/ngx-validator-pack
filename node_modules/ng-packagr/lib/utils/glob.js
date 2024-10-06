"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globFiles = void 0;
const fast_glob_1 = __importDefault(require("fast-glob"));
const array_1 = require("./array");
async function globFiles(pattern, options) {
    const files = await Promise.all((0, array_1.toArray)(pattern).map(p => (0, fast_glob_1.default)(p, options)));
    return files.flatMap(x => x);
}
exports.globFiles = globFiles;
//# sourceMappingURL=glob.js.map