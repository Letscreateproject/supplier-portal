import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  profileForm: any = FormGroup;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3),
      ]),
    });
  }

  /**
   * Used for reset password
   *
   * @param {string}  - No parameter passed
   * @returns {Array} - no return objects.
   */

  submit() {
    console.log(this.profileForm.value);
    if (this.profileForm.valid) {
      this.router.navigate(['/login']);
    }
  }

  /**
   * Used for submit the sign in data
   *
   */
  signIn() {
    this.router.navigate(['/login']);
  }
}
