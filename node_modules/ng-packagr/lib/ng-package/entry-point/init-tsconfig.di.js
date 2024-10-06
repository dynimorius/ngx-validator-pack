"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INIT_TS_CONFIG_TRANSFORM = exports.INIT_TS_CONFIG_TOKEN = exports.DEFAULT_TS_CONFIG_TOKEN = exports.provideTsConfig = void 0;
const injection_js_1 = require("injection-js");
const transform_di_1 = require("../../graph/transform.di");
const init_tsconfig_transform_1 = require("./init-tsconfig.transform");
const provideTsConfig = (values) => {
    return {
        provide: exports.DEFAULT_TS_CONFIG_TOKEN,
        useValue: values,
    };
};
exports.provideTsConfig = provideTsConfig;
exports.DEFAULT_TS_CONFIG_TOKEN = new injection_js_1.InjectionToken('ng.v5.defaultTsConfig');
exports.INIT_TS_CONFIG_TOKEN = new injection_js_1.InjectionToken('ng.v5.initTsConfigTransform');
exports.INIT_TS_CONFIG_TRANSFORM = (0, transform_di_1.provideTransform)({
    provide: exports.INIT_TS_CONFIG_TOKEN,
    useFactory: init_tsconfig_transform_1.initTsConfigTransformFactory,
    deps: [exports.DEFAULT_TS_CONFIG_TOKEN],
});
//# sourceMappingURL=init-tsconfig.di.js.map