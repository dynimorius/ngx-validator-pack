/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import {
  AfterViewInit,
  ComponentRef,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { ChecksComponent } from '../components/checks/checks.component';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[checks]',
  standalone: true,
})
export class ChecksDirective implements OnInit, AfterViewInit {
  checkComponentRef!: ComponentRef<ChecksComponent>;
  controlSub: Subscription = new Subscription();
  self!: HTMLElement;
  retrievedStyles!: CSSStyleDeclaration;

  @Input('checks') checks!: { [key: string]: string };
  @Input() vClass!: string;
  @Input() vStyle!: string;

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
    private readonly control: NgControl
  ) {}

  ngOnInit(): void {
    const formControl = this.control.control as FormControl;
    this.self = this.elementRef.nativeElement;
    this.retrievedStyles = getComputedStyle(this.self);
    this.controlSub.add(
      formControl.valueChanges.subscribe((data) => {
        this.checkComponentRef.setInput('hasValue', !!data);
        this.checkComponentRef.setInput('errors', null);
        this.checkComponentRef.setInput(
          'errors',
          Object.keys(formControl?.errors ?? {})
        );
      })
    );
  }

  ngAfterViewInit(): void {
    this.checkComponentRef = this.viewContainerRef.createComponent(
      ChecksComponent
    );
    this.checkComponentRef.setInput('checks', this.checks);
    const indexNum = Number.parseInt(this.retrievedStyles.zIndex);
    const zIndex = Number.isNaN(indexNum) ? 1 : indexNum;
    this.renderer.setStyle(this.self, 'zIndex', `${zIndex}`);
    this.checkComponentRef.setInput('zIndex', `${zIndex - 1}`);
    this.checkComponentRef.setInput('class', this.vClass);
    this.checkComponentRef.setInput('style', this.vStyle);
  }

  ngOnDestroy(): void {
    this.controlSub.unsubscribe();
  }
}
