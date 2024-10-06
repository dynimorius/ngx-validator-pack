import { CompilerOptions, ParsedConfiguration } from '@angular/compiler-cli';
import ts from 'typescript';
import { BuildGraph } from '../graph/build-graph';
import { NgPackagrOptions } from '../ng-package/options.di';
import { StylesheetProcessor } from '../styles/stylesheet-processor';
export declare function compileSourceFiles(graph: BuildGraph, tsConfig: ParsedConfiguration, moduleResolutionCache: ts.ModuleResolutionCache, options: NgPackagrOptions, extraOptions?: Partial<CompilerOptions>, stylesheetProcessor?: StylesheetProcessor): Promise<void>;
