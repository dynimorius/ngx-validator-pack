import { Transform } from '../../graph/transform';
import { StylesheetProcessor as StylesheetProcessorClass } from '../../styles/stylesheet-processor';
import { NgPackagrOptions } from '../options.di';
export declare const compileNgcTransformFactory: (StylesheetProcessor: typeof StylesheetProcessorClass, options: NgPackagrOptions) => Transform;
