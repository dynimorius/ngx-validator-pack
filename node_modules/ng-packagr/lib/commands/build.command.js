"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const packagr_1 = require("../packagr");
/**
 * Command running an "one-off" build.
 *
 * @stable
 */
const build = opts => (0, packagr_1.ngPackagr)().forProject(opts.project).withTsConfig(opts.config).build({ watch: opts.watch });
exports.build = build;
//# sourceMappingURL=build.command.js.map