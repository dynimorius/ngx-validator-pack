import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Selected {

}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  selectedTabIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.selectedTabIndex = window.location.href.includes('form-group-val-example') ? 1 : 0;
  }

  selectTab(tabIndex: number): void {
    this.selectedTabIndex = tabIndex;
    this.router.navigateByUrl(`${tabIndex === 0 ? '' : 'form-group-val-example'}`);
  }
}


