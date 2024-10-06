interface RenderRequest {
    content: string;
    filePath: string;
}
declare function render({ content, filePath }: RenderRequest): Promise<string>;
/**
 * The default export will be the promise returned by the initialize function.
 * This is awaited by piscina prior to using the Worker.
 */
declare const _default: Promise<typeof render>;
export default _default;
