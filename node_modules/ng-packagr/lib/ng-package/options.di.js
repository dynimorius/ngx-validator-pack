"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_OPTIONS_PROVIDER = exports.provideOptions = exports.OPTIONS_TOKEN = void 0;
const find_cache_dir_1 = __importDefault(require("find-cache-dir"));
const injection_js_1 = require("injection-js");
const os_1 = require("os");
const path_1 = require("path");
exports.OPTIONS_TOKEN = new injection_js_1.InjectionToken(`ng.v5.options`);
const provideOptions = (options = {}) => ({
    provide: exports.OPTIONS_TOKEN,
    useValue: normalizeOptions(options),
});
exports.provideOptions = provideOptions;
exports.DEFAULT_OPTIONS_PROVIDER = (0, exports.provideOptions)();
function normalizeOptions(options = {}) {
    const ciEnv = process.env['CI'];
    const isCI = (ciEnv === null || ciEnv === void 0 ? void 0 : ciEnv.toLowerCase()) === 'true' || ciEnv === '1';
    const { cacheEnabled = !isCI, cacheDirectory = findCachePath() } = options;
    return {
        ...options,
        cacheEnabled,
        cacheDirectory,
    };
}
function findCachePath() {
    const name = 'ng-packagr';
    return (0, find_cache_dir_1.default)({ name }) || (0, path_1.resolve)((0, os_1.tmpdir)(), name);
}
//# sourceMappingURL=options.di.js.map