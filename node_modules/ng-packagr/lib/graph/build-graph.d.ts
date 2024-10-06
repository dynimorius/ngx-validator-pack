import { FSWatcher } from 'chokidar';
import { Node } from './node';
export type SimplePredicate<T = Node> = {
    (value: T, index: number): boolean;
    and?: (criteria: SimplePredicate<T>) => SimplePredicate<T>;
};
export type ComplexPredicate<T = Node, R extends T = T> = SimplePredicate<T> | {
    (value: T, index: number): value is R;
    and?: (criteria: ComplexPredicate<T, R>) => ComplexPredicate<T, R>;
};
export interface Traversable<T> {
    filter<R extends T = T>(by: ComplexPredicate<T, R>): R[];
    find<R extends T = T>(by: ComplexPredicate<T, R>): R | undefined;
    some(by: SimplePredicate<T>): boolean;
}
/**
 * A tree of source files. Eventually, it's a graph. Ideally, it's an acyclic directed graph.
 * Technically, it's implemented as a map-like collection with references between map entries.
 */
export declare class BuildGraph implements Traversable<Node> {
    private store;
    watcher?: FSWatcher;
    put(value: Node | Node[]): this;
    private insert;
    get(url: string): Node;
    has(url: string): boolean;
    entries(): Node[];
    some(by: SimplePredicate): boolean;
    filter<T extends Node = Node>(by: ComplexPredicate<Node, T>): T[];
    find<T extends Node = Node>(by: ComplexPredicate<Node, T>): T | undefined;
    get size(): number;
}
