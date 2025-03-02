export interface Token {
  token: string;
  class: string;
}

export interface TokenData {
  token: string;
  priorToken?: string;
  priorPriorToken?: string;
  nextToken?: string;
}
