"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEsmModule = exports.ngCompilerCli = void 0;
function ngCompilerCli() {
    return loadEsmModule('@angular/compiler-cli');
}
exports.ngCompilerCli = ngCompilerCli;
/**
 * Lazily compiled dynamic import loader function.
 */
let load;
/**
 * This uses a dynamic import to load a module which may be ESM.
 * CommonJS code can load ESM code via a dynamic import. Unfortunately, TypeScript
 * will currently, unconditionally downlevel dynamic import into a require call.
 * require calls cannot load ESM code and will result in a runtime error. To workaround
 * this, a Function constructor is used to prevent TypeScript from changing the dynamic import.
 * Once TypeScript provides support for keeping the dynamic import this workaround can
 * be dropped.
 *
 * @param modulePath The path of the module to load.
 * @returns A Promise that resolves to the dynamically imported module.
 */
function loadEsmModule(modulePath) {
    load !== null && load !== void 0 ? load : (load = new Function('modulePath', `return import(modulePath);`));
    return load(modulePath);
}
exports.loadEsmModule = loadEsmModule;
//# sourceMappingURL=load-esm.js.map