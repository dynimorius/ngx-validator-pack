"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = void 0;
const typescript_1 = require("typescript");
const load_esm_1 = require("../utils/load-esm");
const log_1 = require("../utils/log");
/**
 * Prints version information.
 *
 * @stable
 */
const version = async () => {
    (0, log_1.msg)(`ng-packagr:            ` + require('../../package.json').version);
    (0, log_1.msg)(`@angular/compiler:     ` + (await (0, load_esm_1.ngCompilerCli)()).VERSION.full);
    (0, log_1.msg)(`typescript:            ` + typescript_1.version);
};
exports.version = version;
//# sourceMappingURL=version.command.js.map