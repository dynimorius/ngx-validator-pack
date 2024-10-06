import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-snippets',
  standalone: true,
  imports: [],
  templateUrl: './snippets.component.html',
  styleUrl: './snippets.component.scss'
})
export class SnippetsComponent implements OnInit{

  @Input() tsSnippet!: string;
  @Input() htmlSnippet!: string;

  snippetToShow!: string;

  ngOnInit(): void {
    this.snippetToShow = this.tsSnippet;
  }

  switchSnippet(tab: string): void {
    this.snippetToShow = tab === 'ts' ? this.tsSnippet : this.htmlSnippet;
  }

  copySnippet(): void {
    navigator.clipboard.writeText(this.snippetToShow);
  }
}
