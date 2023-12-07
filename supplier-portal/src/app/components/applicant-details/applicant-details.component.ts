import { Component, OnInit } from '@angular/core';
import { Applicant } from 'src/app/models/applicant';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.scss'],
})
export class ApplicantDetailsComponent implements OnInit {
  company: Company = {};
  constructor() {}

  ngOnInit(): void {
    this.getApplicantDetails();
  }
  /**
   * Function to get the details of applicant
   */
  getApplicantDetails() {
    this.company = {
      id: 'AAA00123',
      address:
        '283W+464, Adarsha Nagar Road Thuthiyoor Kakkanad, Kochi, Kerala 682037',
      gst: 'AA11009923222',
      companyName: 'Supply Co',
    };
  }
}
