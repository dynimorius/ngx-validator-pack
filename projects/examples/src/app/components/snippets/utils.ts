// import { Formats } from './code-formatter.directive';
// import { DATA_TYPE_TOKENS, HTML_TOKENS, MAIN_TOKENS } from './tokens';

export const spaces =
  /[\t\n\v\f\r \u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]/g;

export function startsWithWhitespace(text: string): boolean {
  return (
    text.startsWith(`\t`) ||
    text.startsWith(`\n`) ||
    text.startsWith(`\v`) ||
    text.startsWith(`\f`) ||
    text.startsWith(`\r`) ||
    text.startsWith(' ')
  );
}

export function startsWithSpecial(text: string): boolean {
  return (
    text.startsWith('(') ||
    text.startsWith(')') ||
    text.startsWith('!') ||
    text.startsWith(';') ||
    text.startsWith(':') ||
    text.startsWith('.') ||
    text.startsWith(',') ||
    text.startsWith('{') ||
    text.startsWith('}') ||
    text.startsWith('[') ||
    text.startsWith(']')
  );
}

export function endsWithSpecial(text: string): boolean {
  return (
    text.endsWith('(') ||
    text.endsWith(')') ||
    text.endsWith('!') ||
    text.endsWith(';') ||
    text.endsWith(':') ||
    text.endsWith('.') ||
    text.endsWith(',') ||
    text.endsWith('{') ||
    text.endsWith('}') ||
    text.endsWith('[') ||
    text.endsWith(']') ||
    text.endsWith('/') ||
    text.endsWith('|') 
  );
}

export function startsWithOperator(text: string): boolean {
  return (
    text.startsWith('+') ||
    text.startsWith('-') ||
    text.startsWith('*') ||
    text.startsWith('=') ||
    text.startsWith('>') ||
    text.startsWith('<') ||
    text.startsWith('==') ||
    text.startsWith('===') ||
    text.startsWith('>=') ||
    text.startsWith('<=')
  );
}

export function endsWithOperator(text: string): boolean {
  return (
    text.endsWith('+') ||
    text.endsWith('-') ||
    text.endsWith('*') ||
    text.endsWith('=') ||
    text.endsWith('>') ||
    text.endsWith('<') ||
    text.endsWith('==') ||
    text.endsWith('===') ||
    text.endsWith('>=') ||
    text.endsWith('<=')
  );
}

export function startsWithPrentices(text: string): boolean {
  return text.startsWith(`'`) || text.startsWith(`"`) || text.startsWith('`');
}

export function endsWithPrentices(text: string): boolean {
    return text.endsWith(`'`) || text.endsWith(`"`) || text.endsWith('`');
  }

// export function startsWithKeyword(text: string): string {
//   return MAIN_TOKENS.filter((token) => text.startsWith(token))[0];
// }

// export function startsWithDT(text: string): string {
//     return DATA_TYPE_TOKENS.filter((token) => text.startsWith(token))[0];
//   }