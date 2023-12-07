import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    component.profileForm.setValue({ username: '', password: '' });
    expect(component.profileForm.valid).toBeFalsy();
  });
  it('should be valid with a valid username and password', () => {
    component.profileForm.setValue({
      username: 'test',
      password: 'test',
    });
    expect(component.profileForm.valid).toBeTruthy();
  });

  it('should have a required username field', () => {
    const usernameControl = component.profileForm.controls['username'];
    usernameControl.setValue('');
    expect(usernameControl.hasError('required')).toBeTruthy();
  });

  it('should have a required password field', () => {
    const passwordControl = component.profileForm.controls['password'];
    passwordControl.setValue('');
    expect(passwordControl.hasError('required')).toBeTruthy();
  });

  it('should have a username with minimum length validation', () => {
    const usernameControl = component.profileForm.controls['username'];
    usernameControl.setValue('ab');
    expect(usernameControl.hasError('minlength')).toBeTruthy();
  });

  it('should have a password with minimum length validation', () => {
    const passwordControl = component.profileForm.controls['password'];
    passwordControl.setValue('12');
    expect(passwordControl.hasError('minlength')).toBeTruthy();
  });
  it('should have a username with maximum length validation', () => {
    const usernameControl = component.profileForm.controls['username'];
    usernameControl.setValue('12345678910');
    expect(usernameControl.hasError('maxlength')).toBeTruthy();
  });

  it('should have a password with maximum length validation', () => {
    const passwordControl = component.profileForm.controls['password'];
    passwordControl.setValue('12345678910');
    expect(passwordControl.hasError('maxlength')).toBeTruthy();
  });
});
