import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DATA_TYPE_TOKENS, KEYWORD_TOKENS_A, KEYWORD_TOKENS_B, KEYWORD_TOKENS_C, OPERATOR_TOKENS } from './tokens';
import { Formats } from './formatter/formatter.service';
import { Token, TokenData } from './token.interface';

@Directive({
  selector: '[appCodeFormatter]',
  standalone: true,
})
export class CodeFormatterDirective {
  self!: HTMLPreElement;

  @Input() format: Formats = 'TypeScript';
  @Input() set tokens(tokens: Token[]) {
    tokens.forEach((token) => {
      this.createSpan(token);
    });
  };

  constructor(private readonly elementRef: ElementRef, private readonly renderer: Renderer2) {
    this.self = this.elementRef.nativeElement;
  }
  createSpan(token: Token): void {
    const span = this.renderer.createElement('span');
    this.renderer.setProperty(span, 'innerText', token.token);
    this.renderer.addClass(span, token.class);
    this.renderer.appendChild(this.self, span);
  }
}
