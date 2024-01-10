import { Component } from '@angular/core';
import { CommonService } from 'src/app/_services/common/common.service';
import { Constants } from 'src/app/_services/constants';
import { NotifierService } from 'src/app/_services/notifier/notifier.service';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Voucher1.xlsx' },
  { position: 2, name: 'Voucher2.xlsx' },
  { position: 3, name: 'Voucher3.xlsx' },
  { position: 4, name: 'Voucher4.xlsx' },
  { position: 5, name: 'Voucher5.xlsx' },
  { position: 6, name: 'Voucher6.xlsx' },
  { position: 7, name: 'Voucher7.xlsx' },
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

export interface IColumn {
  field: string;
  header: string;
  hidden?: boolean;
  type?: string;
  date?: Date;
}

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss'],
})
export class AuditComponent {
  fieldArray: any[] = [];

  columns: IColumn[] = [
    {
      field: 'position',
      header: 'No.',
    },
    {
      field: 'fileName',
      header: 'File Name',
    },
    {
      field: 'status',
      header: 'Status',
    },
    {
      field: 'viewIconAction',
      header: 'View',
      type: 'viewIconAction',
    },
  ];
  displayedColumns = this.columns.map((c) => c.field);
  dataSource = JSON.parse(JSON.stringify(ELEMENT_DATA));
  constructor(
    private commonSvc: CommonService,
    private notifer: NotifierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDocList();
  }
  column!: IColumn;
  title = 'angular-material-app';
  /**
   * function called when button is clicked from the table
   * @param {any} e - action event
   */
  buttonAction(e: any) {
    this.router.navigate(['/home/invoicedetails']);
  }
  /**
   * called from oninit to get the list of documents
   *
   */
  getDocList() {
    this.commonSvc.getPdfList().subscribe((data: any) => {
      console.log(data);
      if(data){
        data[0]['status']='InProgress'
      }

      this.dataSource = data;
    });

    this.dataSource = [
      {
        position: 1,
        voucherFileName: 'Voucher1.xlsx',
        textbox: 'textbox',
        action: 'action',
        viewIconAction: 'viewIconAction',
        downloadIconAction: 'downloadIconAction',
        status: 'status',
      },
    ];
  }

  /**
   * function to take action on the buttons
   * @param {any} id
   * @param {any} type
   */
  takeAction(id: any, type: any) {
    const obj = { id, type };
    this.commonSvc.takeAction(obj).subscribe({
      next: (data: any) => {
        let msg = 'Approved Successfully.';
        if (!type) {
          msg = 'Rejected Successfully.';
        }

        this.notifer.notify(msg, Constants.SUCCESS_NOTIFIER);
        this.getDocList();
      },
      error: (e: any) => {
        //error
        this.notifer.notify('ERROR', Constants.ERROR_NOTIFIER);
      },
    });
  }
}
