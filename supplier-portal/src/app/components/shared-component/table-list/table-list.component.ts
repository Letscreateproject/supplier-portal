import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/_services/common/common.service';
import { Constants } from 'src/app/_services/constants';
import { NotifierService } from 'src/app/_services/notifier/notifier.service';

/**
 *  Used to grt the list of data which we want to show in the table.
 * " data" is an array of datas to be displayed on the table, it can have any data.
 * "columns" it contains an array data for the table columns
 * "isPageable" is a boolean input value which is used to enable or diable pagination for the table.
 * "isSortable" is a boolean input value which is used to enable or disable sort functionality for the table data.
 * "isFilterable" is a boolean input value which is used to enable or disable filter option for the table data.
 * "rowActionIcon" is an input string array which different actions like edit, delete etc which is useful for the table and we can add it the table as a different column based on our needs.
 * "paginationSizes" is an input value which contains the page size
 * "order" is an input value based on which we difines the orintation of the screen
 * "sortevent" is an output event which is trigered for serverside sorting.
 * "pageevent" is an output event which is trigered for serverside pagination
 * "rowAction" is an output event which is trigered  each time when any action occures.
 * 
 */
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit, OnChanges {
  displayedColumns: any[] = [];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  showStatus: boolean = true;
  approve: any;
  reject: any;

  constructor(
    private commonSvc: CommonService,
    private notifer: NotifierService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    // debugger
    if (changes['columns']?.currentValue) {
      this.displayedColumns = [];
      if (this.order === 1) {
        this.columns = this.columns.reverse();
      }
      this.columns.forEach((a) => {
        if (!a.hidden) {
          this.displayedColumns.push(a.field);
        }
      });
      console.log(this.displayedColumns);
    }
    if (changes['order']?.currentValue) {
    }
    if (changes['data']?.currentValue) {
      this.setTableDataSource(this.data);
    }
  }

  @Input() data: any[] = [];
  @Input() columns: any[] = [];
  @Input() isPageable!: boolean;
  @Input() isSortable!: boolean;
  @Input() isFilterable!: boolean;
  @Input() rowActionIcon!: string[];
  @Input() ViewIconAction!: boolean;
  @Input() downloadAction!: boolean;
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.paginationSizes[0];
  @Input() order: number = 0;

  @Output() sortevent: EventEmitter<Sort> = new EventEmitter();
  @Output() pageevent: EventEmitter<PageEvent> = new EventEmitter();
  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.showStatus = true;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  setTableDataSource(data: any) {
    this.dataSource = new MatTableDataSource<any>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  /**
   * Used for filtering
   *
   * @param {string} event - The value to be filtered.
   * @returns {Array} list of objects.
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  sortTable(sortParameters: Sort) {
    // defining name of data property, to sort by, instead of column name
    // sortParameters.active = this.tableColumns.find(column => column.name === sortParameters.active).dataKey;
    // /this.sort.emit(sortParameters);
  }

  pageChange(event: PageEvent) {
    // this.pageevent.emit(event)
  }

  emitRowAction(row: any, action: string, i: number) {
    // debugger;
    let index = row.position;
    const data = { ...row, action, i };
    this.rowAction.emit(data);
    this.showStatus = false;
    if (data.action == 'Approve') {
      row.value = true;
      row.index = true;
    }
    if (data.action == 'Reject') {
      row.value = false;
      row.index = true;
    }
  }
  emitIconAction(row: any, action: string) {
    const data = { ...row, action };
    this.rowAction.emit(data);
  }
}
