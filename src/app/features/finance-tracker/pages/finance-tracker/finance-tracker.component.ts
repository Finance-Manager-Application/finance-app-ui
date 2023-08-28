import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-tracker',
  templateUrl: './finance-tracker.component.html',
  styleUrls: ['./finance-tracker.component.scss']
})
export class FinanceTrackerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sidebarExpanded = true;

  toggleSidebar() {
    this.sidebarExpanded = !this.sidebarExpanded;
  }
}
