"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTsConfigTransformFactory = void 0;
const transform_1 = require("../../graph/transform");
const tsconfig_1 = require("../../ts/tsconfig");
const nodes_1 = require("../nodes");
const initTsConfigTransformFactory = (defaultTsConfig) => (0, transform_1.transformFromPromise)(async (graph) => {
    // Initialize tsconfig for each entry point
    const entryPoints = graph.filter(nodes_1.isEntryPoint);
    await (0, tsconfig_1.initializeTsConfig)(defaultTsConfig, entryPoints);
    return graph;
});
exports.initTsConfigTransformFactory = initTsConfigTransformFactory;
//# sourceMappingURL=init-tsconfig.transform.js.map