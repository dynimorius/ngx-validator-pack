import { Component, Input } from '@angular/core';
import { CodeFormatterDirective } from './code-formatter.directive';
import { NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { Formats, FormatterService } from './formatter/formatter.service';
import { Token } from './token.interface';

export interface SnippetConfig {
  template: string;
  format: Formats;
}

@Component({
  selector: 'app-snippets',
  standalone: true,
  imports: [CodeFormatterDirective, NgIf, NgFor, NgSwitch, NgSwitchCase, NgStyle],
  templateUrl: './snippets.component.html',
  styleUrl: './snippets.component.scss',
})
export class SnippetsComponent {
  _snippets!: SnippetConfig[];
  snippetToCopy: string = '';
  tab: string = 'TypeScript';
  classifiedTokens: Token[][] = [];

  constructor(private formatter: FormatterService) {}

  @Input() style!: { [key: string]: any };
  @Input() styleClass!: string;
  @Input() set snippets(snippets: SnippetConfig[]) {
    this._snippets = snippets;
    this.tab = snippets[0].format;
    this.snippetToCopy = snippets[0].template;
    snippets.forEach((snippet) => {
      this.classifiedTokens.push(this.formatter.prep(snippet.template, snippet.format));
    });
  }

  switchSnippet(tab: string, i: number): void {
    this.tab = tab;
    this.snippetToCopy = this._snippets[i].template;
  }

  copySnippet(): void {
    navigator.clipboard.writeText(this.snippetToCopy);
  }
}
