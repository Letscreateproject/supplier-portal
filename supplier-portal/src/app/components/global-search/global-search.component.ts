import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss'],
})
export class GlobalSearchComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;
  searchValue = '';
  loading: boolean = false;
  displayedColumns: string[] = ['position', 'name', 'symbol'];
  dataSource: PeriodicElement[] = [];
  profileForm: any = FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      searchValue: new FormControl('', Validators.required),
    });
  }
  /**
   * This method do the search
   * @param none
   */
  search() {
    if (this.profileForm.valid) {
      this.menuTrigger.openMenu();
      this.loading = true;
      setTimeout(() => {
        this.dataSource = ELEMENT_DATA;
        this.loading = false;
      }, 3000);
    }
  }
}
