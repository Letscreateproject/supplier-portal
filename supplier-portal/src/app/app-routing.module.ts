import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditComponent } from './components/audit/audit.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { UploadComponent } from './components/upload/upload.component';
import { UserformComponent } from './components/userform/userform.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ApplicantDetailsComponent } from './components/applicant-details/applicant-details.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      // {
      //   path : 'dashboard',
      //   component : DownloadComponent
      // },
      {
        path: 'newinvoice',
        component: UploadComponent,
      },
      {
        path: 'users',
        component: UserlistComponent,
      },
      {
        path: 'applicantdetails',
        component: ApplicantDetailsComponent,
      },
      {
        path: 'tabs',
        component: TabsComponent,
      },
      {
        path: 'userform',
        component: UserformComponent,
      },
      {
        path: 'invoicelist',
        component: AuditComponent,
      },
      {
        path: 'shopping',
        component: ShoppinglistComponent,
      },
      {
        path: 'invoicedetails',
        component: PdfViewerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
