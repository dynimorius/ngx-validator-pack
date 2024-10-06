"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StylesheetProcessor = exports.CssUrl = void 0;
const browserslist_1 = __importDefault(require("browserslist"));
const fs_1 = require("fs");
const path_1 = require("path");
const piscina_1 = __importDefault(require("piscina"));
const color_1 = require("../utils/color");
const postcss_configuration_1 = require("./postcss-configuration");
const maxWorkersVariable = process.env['NG_BUILD_MAX_WORKERS'];
const maxThreads = typeof maxWorkersVariable === 'string' && maxWorkersVariable !== '' ? +maxWorkersVariable : 4;
var CssUrl;
(function (CssUrl) {
    CssUrl["inline"] = "inline";
    CssUrl["none"] = "none";
})(CssUrl || (exports.CssUrl = CssUrl = {}));
class StylesheetProcessor {
    constructor(projectBasePath, basePath, cssUrl, includePaths, cacheDirectory) {
        this.projectBasePath = projectBasePath;
        this.basePath = basePath;
        this.cssUrl = cssUrl;
        this.includePaths = includePaths;
        this.cacheDirectory = cacheDirectory;
        // By default, browserslist defaults are too inclusive
        // https://github.com/browserslist/browserslist/blob/83764ea81ffaa39111c204b02c371afa44a4ff07/index.js#L516-L522
        // We change the default query to browsers that Angular support.
        // https://angular.io/guide/browser-support
        browserslist_1.default.defaults = [
            'last 2 Chrome versions',
            'last 1 Firefox version',
            'last 2 Edge major versions',
            'last 2 Safari major versions',
            'last 2 iOS major versions',
            'Firefox ESR',
        ];
    }
    async process({ filePath, content }) {
        this.createRenderWorker();
        return this.renderWorker.run({ content, filePath });
    }
    /** Destory workers in pool. */
    destroy() {
        var _a;
        void ((_a = this.renderWorker) === null || _a === void 0 ? void 0 : _a.destroy());
    }
    createRenderWorker() {
        // Do not use async FS calls in here as otherwise a race will be created which causes multiple FS calls to be done.
        if (this.renderWorker) {
            return;
        }
        const styleIncludePaths = [...this.includePaths];
        let prevDir = null;
        let currentDir = this.basePath;
        while (currentDir !== prevDir) {
            const p = (0, path_1.join)(currentDir, 'node_modules');
            if ((0, fs_1.existsSync)(p)) {
                styleIncludePaths.push(p);
            }
            prevDir = currentDir;
            currentDir = (0, path_1.dirname)(prevDir);
        }
        const browserslistData = (0, browserslist_1.default)(undefined, { path: this.basePath });
        this.renderWorker = new piscina_1.default({
            filename: require.resolve('./stylesheet-processor-worker'),
            maxThreads,
            recordTiming: false,
            env: {
                ...process.env,
                FORCE_COLOR: '' + color_1.colors.enabled,
            },
            workerData: {
                postcssConfiguration: (0, postcss_configuration_1.loadPostcssConfiguration)(this.projectBasePath),
                tailwindConfigPath: getTailwindConfigPath(this.projectBasePath),
                projectBasePath: this.projectBasePath,
                browserslistData,
                targets: transformSupportedBrowsersToTargets(browserslistData),
                cacheDirectory: this.cacheDirectory,
                cssUrl: this.cssUrl,
                styleIncludePaths,
            },
        });
    }
}
exports.StylesheetProcessor = StylesheetProcessor;
function transformSupportedBrowsersToTargets(supportedBrowsers) {
    const transformed = [];
    // https://esbuild.github.io/api/#target
    const esBuildSupportedBrowsers = new Set(['safari', 'firefox', 'edge', 'chrome', 'ios']);
    for (const browser of supportedBrowsers) {
        let [browserName, version] = browser.split(' ');
        // browserslist uses the name `ios_saf` for iOS Safari whereas esbuild uses `ios`
        if (browserName === 'ios_saf') {
            browserName = 'ios';
        }
        // browserslist uses ranges `15.2-15.3` versions but only the lowest is required
        // to perform minimum supported feature checks. esbuild also expects a single version.
        [version] = version.split('-');
        if (esBuildSupportedBrowsers.has(browserName)) {
            if (browserName === 'safari' && version === 'tp') {
                // esbuild only supports numeric versions so `TP` is converted to a high number (999) since
                // a Technology Preview (TP) of Safari is assumed to support all currently known features.
                version = '999';
            }
            transformed.push(browserName + version);
        }
    }
    return transformed.length ? transformed : undefined;
}
/** The list of valid config files can be found https://github.com/tailwindlabs/tailwindcss/blob/ba5454543e74a6d702ce11b410d27672c2ee4b3f/src/util/resolveConfigPath.js#L4-L9*/
const tailwindConfigFiles = [
    './tailwind.config.js',
    './tailwind.config.cjs',
    './tailwind.config.mjs',
    './tailwind.config.ts',
];
function getTailwindConfigPath(projectRoot) {
    // A configuration file can exist in the project or workspace root
    for (const configFile of tailwindConfigFiles) {
        // Irrespective of the name project level configuration should always take precedence.
        const fullPath = (0, path_1.join)(projectRoot, configFile);
        if ((0, fs_1.existsSync)(fullPath)) {
            return fullPath;
        }
    }
    return undefined;
}
//# sourceMappingURL=stylesheet-processor.js.map