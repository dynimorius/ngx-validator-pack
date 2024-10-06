"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STYLESHEET_PROCESSOR = exports.STYLESHEET_PROCESSOR_TOKEN = void 0;
const injection_js_1 = require("injection-js");
const stylesheet_processor_1 = require("./stylesheet-processor");
exports.STYLESHEET_PROCESSOR_TOKEN = new injection_js_1.InjectionToken(`ng.v5.stylesheetProcessor`);
exports.STYLESHEET_PROCESSOR = {
    provide: exports.STYLESHEET_PROCESSOR_TOKEN,
    useFactory: () => stylesheet_processor_1.StylesheetProcessor,
    deps: [],
};
//# sourceMappingURL=stylesheet-processor.di.js.map