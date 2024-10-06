import type { CompilerHost, CompilerOptions } from '@angular/compiler-cli';
import ts from 'typescript';
import { NgPackageConfig } from '../../ng-package.schema';
import { FileCache } from '../file-system/file-cache';
import { BuildGraph } from '../graph/build-graph';
import { EntryPointNode } from '../ng-package/nodes';
import { StylesheetProcessor } from '../styles/stylesheet-processor';
export declare function cacheCompilerHost(graph: BuildGraph, entryPoint: EntryPointNode, compilerOptions: CompilerOptions, moduleResolutionCache: ts.ModuleResolutionCache, stylesheetProcessor?: StylesheetProcessor, inlineStyleLanguage?: NgPackageConfig['inlineStyleLanguage'], sourcesFileCache?: FileCache): CompilerHost;
export declare function augmentProgramWithVersioning(program: ts.Program): void;
