import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  value: any;
  ngOnInit(): void {
    this.value = localStorage.getItem('Operator');
  }
  menuItems: any = [
    {
      id: 1,
      menuItemDisplayName: 'New Invoice',
      menuItemIcon: 'assets/ico-1.svg',
      menuItemUrl: 'process',
      menuItemCode: 'process',
    },
    {
      id: 1,
      menuItemDisplayName: 'Invoice List',
      menuItemIcon: 'assets/ico-1.svg',
      menuItemUrl: 'documentlist',
      menuItemCode: 'documentlist',
    },
  ];
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  /**
   * Used for showing side-nav-bar
   *
   */

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }
  /**
   * Used for hiding side-nav-bar
   *
   */
  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
