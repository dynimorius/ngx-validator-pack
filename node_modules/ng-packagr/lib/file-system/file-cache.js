"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCache = void 0;
const path_1 = require("../utils/path");
class FileCache {
    constructor() {
        this.cache = new Map();
        this.forEach = this.cache.forEach.bind(this.cache);
        this.clear = this.cache.clear.bind(this.cache);
    }
    size() {
        return this.cache.size;
    }
    normalizeKey(fileName) {
        return (0, path_1.ensureUnixPath)(fileName);
    }
    delete(fileName) {
        return this.cache.delete(this.normalizeKey(fileName));
    }
    has(fileName) {
        return this.cache.has(this.normalizeKey(fileName));
    }
    get(fileName) {
        return this.cache.get(this.normalizeKey(fileName));
    }
    getOrCreate(fileName) {
        const normalizedKey = this.normalizeKey(fileName);
        let entry = this.cache.get(normalizedKey);
        if (!entry) {
            entry = {};
            this.cache.set(normalizedKey, entry);
        }
        return entry;
    }
    updateAngularDiagnostics(sourceFile, diagnostics) {
        if (this.has(sourceFile.fileName)) {
            this.get(sourceFile.fileName).angularDiagnostics = diagnostics;
        }
    }
    getAngularDiagnostics(sourceFile) {
        var _a;
        return (_a = this.get(sourceFile.fileName)) === null || _a === void 0 ? void 0 : _a.angularDiagnostics;
    }
}
exports.FileCache = FileCache;
//# sourceMappingURL=file-cache.js.map