import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        FormsModule,
        AppRoutingModule,
        RouterModule,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a required username field', () => {
    const passwordControl = component.profileForm.controls['username'];
    expect(passwordControl.hasError('required')).toBeTruthy();
  });
  it('should have a required password field', () => {
    const passwordControl = component.profileForm.controls['password'];
    expect(passwordControl.hasError('required')).toBeTruthy();
  });
  
});
