"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = exports.STATE_DONE = exports.STATE_PENDING = exports.STATE_IN_PROGRESS = exports.STATE_DIRTY = void 0;
exports.STATE_DIRTY = 'dirty';
exports.STATE_IN_PROGRESS = 'in-progress';
exports.STATE_PENDING = 'pending';
exports.STATE_DONE = 'done';
/**
 * A Node in the {@link BuildGraph}.
 */
class Node {
    constructor(url) {
        this.url = url;
        this.state = '';
        this._dependents = new Set();
        this._dependees = new Set();
    }
    filter(by) {
        return [...this._dependents].filter(by);
    }
    find(by) {
        return [...this._dependents].find(by);
    }
    some(by) {
        return [...this._dependents].some(by);
    }
    get dependents() {
        return this._dependents;
    }
    get dependees() {
        return this._dependees;
    }
    dependsOn(dependent) {
        const newDeps = Array.isArray(dependent) ? dependent : [dependent];
        for (const newDep of newDeps) {
            if (newDep._dependees.has(this)) {
                // nodes already depends on each other
                continue;
            }
            newDep._dependees.add(this);
            this._dependents.add(newDep);
        }
    }
}
exports.Node = Node;
//# sourceMappingURL=node.js.map