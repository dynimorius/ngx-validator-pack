import { Component, Input } from '@angular/core';
import { CodeFormatterDirective, Formats } from './code-formatter.directive';
import { NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';

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

  @Input() style!: { [key: string]: any };
  @Input() styleClass!: string;
  @Input() set snippets(snippets: SnippetConfig[]) {
    this._snippets = snippets;
    this.tab = snippets[0].format;
    this.snippetToCopy = snippets[0].template;
  }
 
  switchSnippet(tab: string, i: number): void {
    this.tab = tab;
    this.snippetToCopy = this._snippets[i].template;
  }

  copySnippet(): void {
    navigator.clipboard.writeText(this.snippetToCopy);
  }
}
