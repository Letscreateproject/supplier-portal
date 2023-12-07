import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UploadComponent } from './components/upload/upload.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserformComponent } from './components/userform/userform.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProgressComponent } from './components/progress/progress.component';
import { AuditComponent } from './components/audit/audit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from './components/shared-component/shared-component.module';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DialogboxComponent } from './components/dialogbox/dialogbox.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TabsComponent } from './components/tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ApplicantDetailsComponent } from './components/applicant-details/applicant-details.component';
import { NotificationComponent } from './components/notification/notification.component';
import { GlobalSearchComponent } from './components/global-search/global-search.component';
import { ChatComponent } from './components/chat/chat.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

// import { TableListComponent } from './components/shared-component/table-list/table-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UploadComponent,
    UserlistComponent,
    UserformComponent,
    MenuComponent,
    HeaderComponent,
    ProgressComponent,
    AuditComponent,
    ShoppinglistComponent,
    SignupComponent,
    ForgotPasswordComponent,
    FooterComponent,
    DialogboxComponent,
    TabsComponent,
    ApplicantDetailsComponent,
    NotificationComponent,
    GlobalSearchComponent,
    ChatComponent,
    PdfViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    SharedComponentModule,
    MatSidenavModule,
    DragDropModule,
    MatTabsModule,
    AngularEditorModule,
    PdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
