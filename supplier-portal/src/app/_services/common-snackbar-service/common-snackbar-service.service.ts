import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from 'src/app/components/shared-component/custom-snackbar/custom-snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class CommonSnackbarServiceService {
  constructor(private snackBar: MatSnackBar) {}

  showSnackbar(message: string, colorClass: string) {
    this.snackBar.openFromComponent(CustomSnackbarComponent, {
      horizontalPosition: 'end',
      verticalPosition: 'top',

      data: {
        message,
        messageClass: colorClass,
      },
      panelClass: colorClass,
      duration: 3000, // Adjust the duration as needed
    });
  }
}
