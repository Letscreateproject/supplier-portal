import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CommonService } from 'src/app/_services/common/common.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonSnackbarServiceService } from 'src/app/_services/common-snackbar-service/common-snackbar-service.service';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/_services/notifier/notifier.service';
import { Constants } from 'src/app/_services/constants';
declare var $: any;
@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
})
export class PdfViewerComponent implements OnInit {
  pdfSrc: any;
  show: any = false;
  profileForm: any = FormGroup;
  lbls: any = [];
  @ViewChild('pdfViewer') pdfViewer: any;
  isValid: boolean = false;
  constructor(
    private common: CommonService,
    private fb: FormBuilder,
    private snackbarService: CommonSnackbarServiceService,
    private router: Router,
    private notifer: NotifierService
  ) {}
  isValidBase64(str: string): boolean {
    try {
      atob(str);
      return true;
    } catch (e) {
      return false;
    }
  }

  addDynamicField(field: any): void {
    field = this.fb.group({
      email: [''],
    });
 
    this.dynamicFields.push(field);
  }

  get dynamicFields(): FormArray {
    return this.profileForm.get('dynamicFields') as FormArray;
  }
  removeDynamicField(index: number): void {
    this.dynamicFields.removeAt(index);
  }
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      dynamicFields: this.fb.array([]),
    });

    this.common.getPdf().subscribe(
      (data: any) => {
        const datas = data as any;
        this.lbls = datas.fields;
        try {
          const pdfData = 'data:application/pdf;base64,' + datas.file;
          this.pdfSrc = pdfData;
          this.show = true;
          datas.fields.forEach((element: any) => {
            this.addDynamicField(element);
          });
        } catch (error) {
          console.error('Error decoding base64 string:', error);
        }
      },
      (error: any) => {
        console.error('Error fetching PDF:', error);
        // Handle the error appropriately, e.g., show an error message to the user
      }
    );
  }
  submit() {
    this.notifer.notify(
      'File Uploaded Successfully',
      Constants.SUCCESS_NOTIFIER
    );
    setTimeout(() => {
      this.router.navigate(['/home/documentlist']);
    }, 2000);
  }
  onFileSelected() {
    // let $img: any = document.querySelector('#file');
    // if (typeof FileReader !== 'undefined') {
    //   let reader = new FileReader();
    //   reader.onload = (e: any) => {
    //     this.pdfSrc = e.target.result;
    //     console.log(this.pdfSrc);
    //     $('#exampleModal').modal('show');
    //     document.querySelector('.modal-backdrop')?.remove();
    //   };
    //   reader.readAsArrayBuffer($img.files[0]);
    // }
  }

  //method to validate dynamicFields
  validate(){
    this.lbls[1]['isValid'] = true;   //this.isValidate = true
    this.lbls[1]['Count'] = this.lbls[1]['Count'] ? this.lbls[1]['Count'] + 1 : 1;   
    if(this.lbls[1]['Count'] > 1){
      this.lbls[1]['isValid'] = false;  
      this.isValid = true;
    }
  }

  //go to a page
  goToPage(pageNumber: number) {
    if (this.pdfViewer) {
      this.pdfViewer.currentPageNumber = pageNumber;
    }
  }
}
