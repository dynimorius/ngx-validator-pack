import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { DATA_TYPE_TOKENS, KEYWORD_TOKENS_A, KEYWORD_TOKENS_B, KEYWORD_TOKENS_C, OPERATOR_TOKENS } from './tokens';

interface TokenData {
  token: string;
  priorToken?: string;
  priorPriorToken?: string;
  nextToken?: string;
}
export type Formats = 'JavaScript' | 'TypeScript' | 'HTML' | 'CSS';

@Directive({
  selector: '[appCodeFormatter]',
  standalone: true,
})
export class CodeFormatterDirective implements AfterViewInit {
  self!: HTMLPreElement;
  scopeLevelRound: number = 1;
  scopeLevelSquare: number = 1;
  scopeLevelCurly: number = 1;

  @Input() format: Formats = 'TypeScript';

  constructor(private readonly elementRef: ElementRef, private readonly renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.self = this.elementRef.nativeElement;
    let innerHtml = this.self.innerHTML;
    innerHtml = innerHtml.replaceAll('&lt;', '<');
    innerHtml = innerHtml.replaceAll('&gt;', '>');
    innerHtml = innerHtml.trim();
    const tokens = innerHtml.split(/(["'`\t\n\v\f\r !,.:;{}()\[\]])/g);
    this.self.innerHTML = '';
    tokens.forEach((token, index) => {
      this.createSpan({
        token,
        priorToken: tokens[index - 1],
        priorPriorToken: tokens[index - 3],
        nextToken: tokens[index + 1],
      });
    });
  }

  createSpan(tokenData: TokenData): void {
    const span = this.renderer.createElement('span');
    this.renderer.setProperty(span, 'innerText', tokenData.token);
    const className = this.getClass(tokenData);
    this.renderer.addClass(span, className);
    this.renderer.appendChild(this.self, span);
  }

  getClass(tokenData: TokenData): string {
    if (this.isSeparatorToken(tokenData)) {
      return 'separator-token';
    } else if (tokenData.token === '{') {
      return `scope-level-${this.scopeLevelCurly++}`;
    } else if (tokenData.token === '}') {
      return `scope-level-${--this.scopeLevelCurly}`;
    } else if (tokenData.token === '(') {
      return `scope-level-${this.scopeLevelRound++}`;
    } else if (tokenData.token === ')') {
      return `scope-level-${--this.scopeLevelRound}`;
    } else if (tokenData.token === '[') {
      return `scope-level-${this.scopeLevelSquare++}`;
    } else if (tokenData.token === ']') {
      return `scope-level-${--this.scopeLevelSquare}`;
    } else if (this.isQuoted(tokenData)) {
      return 'quoted-token';
    } else if (this.isObjectProperty(tokenData)) {
      return 'property-token';
    } else if (this.isKeywordToken(tokenData, KEYWORD_TOKENS_A)) {
      return 'ka-token';
    } else if (this.isKeywordToken(tokenData, KEYWORD_TOKENS_B)) {
      return 'kb-token';
    } else if (this.isKeywordToken(tokenData, KEYWORD_TOKENS_C)) {
      return 'kc-token';
    } else if (this.isDataToken(tokenData)) {
      return 'data-token';
    } else if (this.isFunctionToken(tokenData)) {
      return 'function-token';
    } else if (this.isParameterToken(tokenData)) {
      return 'parameter-token';
    } else if (this.isOperatorToken(tokenData)) {
      return 'operator-token';
    } else if (/([()])/g.test(tokenData.token)) {
      return 'var-token';
    } else {
      return 'text-token';
    }
  }

  isQuoted(tokenData: TokenData): boolean {
    return (
      /(["'`])/g.test(tokenData.token) ||
      (tokenData.priorToken === '"' && tokenData.nextToken === '"') ||
      (tokenData.priorToken === `'` && tokenData.nextToken === `'`) ||
      (tokenData.priorToken === '`' && tokenData.nextToken === '`')
    );
  }

  isObjectProperty(tokenData: TokenData): boolean {
    return (
      tokenData.priorToken === '.' &&
      (tokenData.nextToken === '.' ||
        tokenData.nextToken === ')' ||
        tokenData.nextToken === ',' ||
        !tokenData.nextToken)
    );
  }

  isKeywordToken(tokenData: TokenData, tokenSet: string[]): boolean {
    return tokenSet.some((token) => token === tokenData.token) && tokenData.nextToken !== ':';
  }

  isDataToken(tokenData: TokenData): boolean {
    return (
      !!(tokenData.priorPriorToken === ':' && tokenData.token) ||
      DATA_TYPE_TOKENS.some((token) => token === tokenData.token)
    );
  }

  isFunctionToken(tokenData: TokenData): boolean {
    return tokenData.nextToken === '(' && !tokenData.token.includes('/');
  }

  isParameterToken(tokenData: TokenData): boolean {
    return tokenData.nextToken !== ')' && tokenData.nextToken === ':';
  }

  isSeparatorToken(tokenData: TokenData): boolean {
    return /([!,.:;])/g.test(tokenData.token);
  }

  isOperatorToken(tokenData: TokenData): boolean {
    return OPERATOR_TOKENS.some((token) => token === tokenData.token);
  }
}
