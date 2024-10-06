"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unique = exports.toArray = void 0;
function toArray(value) {
    return [].concat(value);
}
exports.toArray = toArray;
function unique(value) {
    return [...new Set(value)];
}
exports.unique = unique;
//# sourceMappingURL=array.js.map