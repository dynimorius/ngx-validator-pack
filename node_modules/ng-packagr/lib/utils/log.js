"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debug = exports.msg = exports.info = exports.success = exports.warn = exports.error = void 0;
/* eslint-disable no-console */
const color_1 = require("./color");
const error = (err) => {
    if (err instanceof Error) {
        console.error(color_1.colors.red('ERROR: ' + err.message));
        if (process.env.DEBUG) {
            console.error(color_1.colors.red(err.stack) + '\n');
        }
    }
    else {
        console.error(color_1.colors.red(err));
    }
};
exports.error = error;
const warn = (msg) => {
    console.warn(color_1.colors.yellow('WARNING: ' + msg));
};
exports.warn = warn;
const success = (msg) => {
    console.log(color_1.colors.green(msg));
};
exports.success = success;
const info = (msg) => {
    console.log(color_1.colors.blue(msg));
};
exports.info = info;
const msg = (msg) => {
    console.log(color_1.colors.white(msg));
};
exports.msg = msg;
const debug = (msg) => {
    if (process.env.DEBUG) {
        console.log(color_1.colors.inverse.cyan(`[debug] ${msg}`));
    }
};
exports.debug = debug;
//# sourceMappingURL=log.js.map