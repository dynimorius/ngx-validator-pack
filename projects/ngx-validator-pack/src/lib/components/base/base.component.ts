/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: '',
  standalone: true,
  imports: [],
  template: '',
  styles: '',
})
export class BaseComponent implements AfterViewInit {
  content!: HTMLDivElement;
  _class!: string;
  defaultClass!: string;
  @Input() zIndex!: string | number;
  @Input() style!: string;
  @Input() set class(css: string | undefined | null) {
    this._class = css ? css : this.defaultClass;
    this.changeDetectorRef.detectChanges();
  }

  @ViewChild('validationContent') contentRef!: ElementRef;

  constructor(
    readonly renderer: Renderer2,
    readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
    this.content = this.contentRef.nativeElement;
    this.renderer.setStyle(this.content, 'zIndex', `${this.zIndex}`);
  }
}
