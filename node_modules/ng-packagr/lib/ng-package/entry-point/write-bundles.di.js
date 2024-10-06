"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WRITE_BUNDLES_TRANSFORM = exports.WRITE_BUNDLES_TRANSFORM_TOKEN = void 0;
const injection_js_1 = require("injection-js");
const transform_di_1 = require("../../graph/transform.di");
const options_di_1 = require("../options.di");
const write_bundles_transform_1 = require("./write-bundles.transform");
exports.WRITE_BUNDLES_TRANSFORM_TOKEN = new injection_js_1.InjectionToken(`ng.v5.writeBundlesTransform`);
exports.WRITE_BUNDLES_TRANSFORM = (0, transform_di_1.provideTransform)({
    provide: exports.WRITE_BUNDLES_TRANSFORM_TOKEN,
    useFactory: write_bundles_transform_1.writeBundlesTransform,
    deps: [options_di_1.OPTIONS_TOKEN],
});
//# sourceMappingURL=write-bundles.di.js.map