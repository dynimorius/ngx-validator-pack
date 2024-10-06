"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.provideProject = exports.PROJECT_TOKEN = void 0;
const injection_js_1 = require("injection-js");
exports.PROJECT_TOKEN = new injection_js_1.InjectionToken(`ng.v5.project`);
const provideProject = (project) => ({
    provide: exports.PROJECT_TOKEN,
    useValue: project,
});
exports.provideProject = provideProject;
//# sourceMappingURL=project.di.js.map