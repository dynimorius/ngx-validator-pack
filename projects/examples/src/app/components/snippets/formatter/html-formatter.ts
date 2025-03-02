import { Token, TokenData } from '../token.interface';

export function htmlFormatter(text: string): Token[] {
  function parseAndClassify(text: string): Token[] {
    const classifiedTokens: Token[] = [];
    const tokens = text.split(/([<>="\t\n\v\f\r ])/g);
    tokens.forEach((token, index) => {
      classifiedTokens.push(
        classifyToken({
          token,
          priorToken: tokens[index - 1],
          priorPriorToken: tokens[index - 2],
          nextToken: tokens[index + 1],
        })
      );
    });
    return classifiedTokens;
  }

  function classifyToken(tokenData: TokenData): Token {
    return {
      token: tokenData.token,
      class: getClass(tokenData),
    };
  }

  function getClass(tokenData: TokenData): string {
    if (isQuoted(tokenData)) {
      return 'quoted-token';
    } else if (isMark(tokenData)) {
      return 'kc-token';
    } else if (isElementName(tokenData)) {
      return 'element-token';
    } else if (isAttribute(tokenData)) {
      return 'attribute-token';
    } else {
      return 'text-token';
    }
  }

  function isElementName(tokenData: TokenData): boolean {
    return tokenData.priorToken === '<' && (tokenData.nextToken === ' ' || tokenData.nextToken === '>');
  }

  function isAttribute(tokenData: TokenData): boolean {
    return (
      tokenData.nextToken === '=' ||
      (tokenData.nextToken === '>' && tokenData.priorToken === ' ' && tokenData.priorPriorToken !== '/')
    );
  }

  function isMark(tokenData: TokenData): boolean {
    return tokenData.token === '<' || tokenData.token === '>' || tokenData.token === '=';
  }

  function isQuoted(tokenData: TokenData): boolean {
    return /(["'`])/g.test(tokenData.token) || (tokenData.priorToken === '"' && tokenData.nextToken === '"');
  }

  return parseAndClassify(text);
}
