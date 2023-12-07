import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonSnackbarServiceService } from 'src/app/_services/common-snackbar-service/common-snackbar-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  profileForm: any = FormGroup;
  constructor(
    private router: Router,
    public snackbarService: CommonSnackbarServiceService
  ) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3),
      ]),
    });
  }
  /**
   * Used for submitting the login data
   *
   * @param {string} value - The value to be used to login.
   */
  submit() {
    console.log(this.profileForm.value);
    if (this.profileForm.valid) {
      if (
        this.profileForm.controls['username'].value === 'test' &&
        this.profileForm.controls['password'].value === 'test'
      ) {
        this.router.navigate(['/home/documentlist']);
      } else {
        this.snackbarService.showSnackbar(
          'Wrong Username/Password',
          'error-snack'
        );
      }
    }
  }
  /**
   * Used for routing to signup page
   */

  signup() {
    this.router.navigate(['/signup']);
  }
  forgot() {
    this.router.navigate(['/forgotpassword']);
  }
}
