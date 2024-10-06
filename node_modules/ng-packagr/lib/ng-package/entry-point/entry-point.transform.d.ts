import { Transform } from '../../graph/transform';
/**
 * A re-write of the `transformSources()` script that transforms an entry point from sources to distributable format.
 *
 * Sources are TypeScript source files accompanied by HTML templates and xCSS stylesheets.
 * See the Angular Package Format for a detailed description of what the distributables include.
 *
 * The current transformation pipeline can be thought of as:
 *
 *  - clean
 *  - compileTs
 *  - downlevelTs
 *  - writeBundles
 *    - bundleToFesm15
 *  - relocateSourceMaps
 *  - writePackage
 *   - copyStagedFiles (bundles, esm, dts, sourcemaps)
 *   - writePackageJson
 *
 * The transformation pipeline is pluggable through the dependency injection system.
 * Sub-transformations are passed to this factory function as arguments.
 *
 * @param compileTs Transformation compiling typescript sources to ES2022 modules.
 * @param writeBundles Transformation flattening ES2022 modules to ESM2022, UMD, and minified UMD.
 * @param writePackage Transformation writing a distribution-ready `package.json` (for publishing to npm registry).
 */
export declare const entryPointTransformFactory: (compileTs: Transform, writeBundles: Transform, writePackage: Transform) => Transform;
