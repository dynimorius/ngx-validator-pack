import { Injectable } from '@angular/core';
import { Token} from './token.interface';
import { JSLikeFormatter } from './js-like-formatter';

export type Formats = 'JavaScript' | 'TypeScript' | 'HTML' | 'CSS';

@Injectable({
  providedIn: 'root',
})
export class FormatterService {
  formatterMap = new Map<Formats, (arg0: string) => Token[]>([
    ['TypeScript', JSLikeFormatter],
    ['JavaScript', JSLikeFormatter]
  ]);

  prep(text: string, format: Formats): Token[] {
    const classifier = this.formatterMap.get(format) ?? JSLikeFormatter;
    return classifier(text);
  }
}
