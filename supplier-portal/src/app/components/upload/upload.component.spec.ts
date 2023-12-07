import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadComponent } from './upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from '../material/material.module';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadComponent ],
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
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle valid .xlsx file selection', () => {
    const mockFile = new File(['test data'], 'test.xlsx',
     { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const event = {
      target: {
        files: [mockFile]
      }
    } as any;

    spyOn(component, 'fileBrowseHandler');
    component.browseFile(event);
    expect(component.fileBrowseHandler).toHaveBeenCalledWith(mockFile);
  });

  it('should ignore invalid file selection', () => {
    const mockFile = new File(['test data'], 'test.txt',
     { type: 'text/plain' });
    const event = {
      target: {
        files: [mockFile]
      }
    } as any;

    spyOn(component, 'fileBrowseHandler');
    component.browseFile(event);

    expect(component.fileBrowseHandler).not.toHaveBeenCalled();
  });
});
