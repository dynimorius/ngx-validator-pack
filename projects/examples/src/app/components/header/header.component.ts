import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

export interface Selected {}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  selectedTabIndex: number = 0

  urlMap: Map<number, string> = new Map([
    [0, 'form-group-val-example'],
    [1, 'template-driven-example'],
    [2, ''],
    [3, 'checked-val-example'],
  ])

  indexMap: Map<string, number> = new Map([
    ['form-group-val-example', 0],
    ['template-driven-example', 1],
    ['', 2],
    ['checked-val-example', 3],
  ])

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    const urlArr = window.location.href.split('/')
    const url = window.location.href.split('/')[urlArr.length - 1]
    this.selectedTabIndex = this.indexMap.get(url) ?? 2
  }

  selectTab(tabIndex: number): void {
    this.selectedTabIndex = tabIndex
    this.router.navigateByUrl(`${this.urlMap.get(tabIndex)}`)
  }
}
