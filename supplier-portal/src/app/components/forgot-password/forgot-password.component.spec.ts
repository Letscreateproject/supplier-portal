import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordComponent } from './forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        FormsModule,
        AppRoutingModule,
        RouterModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    component.profileForm.setValue({ username: '' });
    expect(component.profileForm.valid).toBeFalsy();
  });
  it('should be valid with a valid username', () => {
    component.profileForm.setValue({
      username: 'test',
    });
    expect(component.profileForm.valid).toBeTruthy();
  });

  it('should have a required username field', () => {
    const usernameControl = component.profileForm.controls['username'];
    usernameControl.setValue('');
    expect(usernameControl.hasError('required')).toBeTruthy();
  });

  it('should have a username with minimum length validation', () => {
    const usernameControl = component.profileForm.controls['username'];
    usernameControl.setValue('ab');
    expect(usernameControl.hasError('minlength')).toBeTruthy();
  });
  it('should have a username with maximum length validation', () => {
    const usernameControl = component.profileForm.controls['username'];
    usernameControl.setValue('1234567891123456789112345678911');
    expect(usernameControl.hasError('maxlength')).toBeTruthy();
  });
  it('should have a username with maximum length validation correct', () => {
    const usernameControl = component.profileForm.controls['username'];
    usernameControl.setValue('123456789112345678911234567891');
    expect(usernameControl.hasError('maxlength')).toBeFalsy();
  });
});
