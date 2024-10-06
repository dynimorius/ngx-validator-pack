export type NodeState = '' | 'dirty' | 'in-progress' | 'pending' | 'done';
export declare const STATE_DIRTY: NodeState;
export declare const STATE_IN_PROGRESS: NodeState;
export declare const STATE_PENDING: NodeState;
export declare const STATE_DONE: NodeState;
/**
 * A Node in the {@link BuildGraph}.
 */
export declare class Node {
    readonly url: string;
    constructor(url: string);
    type: string;
    data: any;
    state: NodeState;
    filter(by: (value: Node, index: number) => boolean): Node[];
    find(by: (value: Node, index: number) => boolean): Node | undefined;
    some(by: (value: Node, index: number) => boolean): boolean;
    get dependents(): Set<Node>;
    get dependees(): Set<Node>;
    private _dependents;
    private _dependees;
    dependsOn(dependent: Node | Node[]): void;
}
