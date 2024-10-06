#!/usr/bin/env node
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
const commander_1 = require("commander");
const path = __importStar(require("path"));
const log_1 = require("../lib/utils/log");
const public_api_1 = require("../public_api");
const DEFAULT_PROJECT_PATH = path.resolve(process.cwd(), 'ng-package.json');
function parseProjectPath(parsed) {
    return parsed || DEFAULT_PROJECT_PATH;
}
commander_1.program
    .name('ng-packagr')
    .storeOptionsAsProperties(false)
    .option('-v, --version', 'Prints version info')
    .option('-w, --watch', 'Watch for file changes')
    .option('-p, --project [path]', "Path to the 'ng-package.json' or 'package.json' file.", parseProjectPath, DEFAULT_PROJECT_PATH)
    .option('-c, --config [config]', 'Path to a tsconfig file.', (value) => value ? path.resolve(value) : undefined);
commander_1.program.on('option:version', () => {
    void (0, public_api_1.version)().then(() => process.exit(0));
});
commander_1.program.parse(process.argv);
const { config, project, watch, version } = commander_1.program.opts();
if (!version) {
    (0, public_api_1.execute)(public_api_1.build, { config, project, watch: !!watch }).catch(err => {
        (0, log_1.error)(err.message);
        process.exit(1);
    });
}
//# sourceMappingURL=main.js.map