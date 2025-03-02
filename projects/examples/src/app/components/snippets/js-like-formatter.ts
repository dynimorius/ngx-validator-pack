import { Token, TokenData } from './token.interface';
import { DATA_TYPE_TOKENS, KEYWORD_TOKENS_A, KEYWORD_TOKENS_B, KEYWORD_TOKENS_C, OPERATOR_TOKENS } from './tokens';

export function JSLikeFormatter(text: string): Token[] {
  let scopeLevelRound!: number;
  let scopeLevelSquare!: number;
  let scopeLevelCurly!: number;

  function parseAndClassify(text: string): Token[] {
    scopeLevelRound = 1;
    scopeLevelSquare = 1;
    scopeLevelCurly = 1;
    const classifiedTokens: Token[] = [];
    text = text.replaceAll('&lt;', '<');
    text = text.replaceAll('&gt;', '>');
    text = text.trim();
    const tokens = text.split(/(["'`\t\n\v\f\r !,.:;{}()\[\]])/g);
    tokens.forEach((token, index) => {
      classifiedTokens.push(
        classifyToken({
          token,
          priorToken: tokens[index - 1],
          priorPriorToken: tokens[index - 3],
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
    if (isSeparatorToken(tokenData)) {
      return 'separator-token';
    } else if (tokenData.token === '{') {
      return `scope-level-${scopeLevelCurly++}`;
    } else if (tokenData.token === '}') {
      return `scope-level-${--scopeLevelCurly}`;
    } else if (tokenData.token === '(') {
      return `scope-level-${scopeLevelRound++}`;
    } else if (tokenData.token === ')') {
      return `scope-level-${--scopeLevelRound}`;
    } else if (tokenData.token === '[') {
      return `scope-level-${scopeLevelSquare++}`;
    } else if (tokenData.token === ']') {
      return `scope-level-${--scopeLevelSquare}`;
    } else if (isQuoted(tokenData)) {
      return 'quoted-token';
    } else if (isObjectProperty(tokenData)) {
      return 'property-token';
    } else if (isKeywordToken(tokenData, KEYWORD_TOKENS_A)) {
      return 'ka-token';
    } else if (isKeywordToken(tokenData, KEYWORD_TOKENS_B)) {
      return 'kb-token';
    } else if (isKeywordToken(tokenData, KEYWORD_TOKENS_C)) {
      return 'kc-token';
    } else if (isDataToken(tokenData)) {
      return 'data-token';
    } else if (isFunctionToken(tokenData)) {
      return 'function-token';
    } else if (isParameterToken(tokenData)) {
      return 'parameter-token';
    } else if (isOperatorToken(tokenData)) {
      return 'operator-token';
    } else if (/([()])/g.test(tokenData.token)) {
      return 'var-token';
    } else {
      return 'text-token';
    }
  }

  function isQuoted(tokenData: TokenData): boolean {
    return (
      /(["'`])/g.test(tokenData.token) ||
      (tokenData.priorToken === '"' && tokenData.nextToken === '"') ||
      (tokenData.priorToken === `'` && tokenData.nextToken === `'`) ||
      (tokenData.priorToken === '`' && tokenData.nextToken === '`')
    );
  }

  function isObjectProperty(tokenData: TokenData): boolean {
    return (
      tokenData.priorToken === '.' &&
      (tokenData.nextToken === '.' ||
        tokenData.nextToken === ')' ||
        tokenData.nextToken === ',' ||
        !tokenData.nextToken)
    );
  }

  function isKeywordToken(tokenData: TokenData, tokenSet: string[]): boolean {
    return tokenSet.some((token) => token === tokenData.token) && tokenData.nextToken !== ':';
  }

  function isDataToken(tokenData: TokenData): boolean {
    return (
      !!(tokenData.priorPriorToken === ':' && tokenData.token) ||
      DATA_TYPE_TOKENS.some((token) => token === tokenData.token)
    );
  }

  function isFunctionToken(tokenData: TokenData): boolean {
    return tokenData.nextToken === '(' && !tokenData.token.includes('/');
  }

  function isParameterToken(tokenData: TokenData): boolean {
    return tokenData.nextToken !== ')' && tokenData.nextToken === ':';
  }

  function isSeparatorToken(tokenData: TokenData): boolean {
    return /([!,.:;])/g.test(tokenData.token);
  }

  function isOperatorToken(tokenData: TokenData): boolean {
    return OPERATOR_TOKENS.some((token) => token === tokenData.token);
  }

  return parseAndClassify(text);
}
