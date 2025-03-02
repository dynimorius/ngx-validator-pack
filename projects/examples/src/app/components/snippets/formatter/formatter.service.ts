import { Injectable } from '@angular/core';
import { Token } from '../token.interface';
import { jsLikeFormatter } from './js-like-formatter';
import { htmlFormatter } from './html-formatter';

export type Formats = 'JavaScript' | 'TypeScript' | 'HTML' | 'CSS';

@Injectable({
  providedIn: 'root',
})
export class FormatterService {
  formatterMap = new Map<Formats, (arg0: string) => Token[]>([
    ['TypeScript', jsLikeFormatter],
    ['JavaScript', jsLikeFormatter],
    ['HTML', htmlFormatter],
  ]);

  prep(text: string, format: Formats): Token[] {
    text = text.replaceAll('&lt;', '<');
    text = text.replaceAll('&gt;', '>');
    text = text.trim();
    const classifier = this.formatterMap.get(format) ?? jsLikeFormatter;
    return classifier(text);
  }
}
