import { Component, HostBinding, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { take } from 'rxjs/operators';

import { AuthService } from '../../../core/services/auth.service';
import { ErrorService } from '../../../core/services/error.service';
import { ImagePreviewComponent } from '../../../shared/components/image-preview/image-preview.component';
import { User } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User;
  isEditing = false;
  isLoading = false;
  @HostBinding('class.app-user-profile') private applyHostClass = true;

  constructor(
    private authService: AuthService,
    private errorService: ErrorService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.authUser;
  }

  triggerInputFile(input: HTMLInputElement): void {
    input.click();
  }

  onSelectImage(event: Event): void {
    const input: HTMLInputElement = <HTMLInputElement>event.target;
    const file: File = input.files[0];
    const dialogRef = this.dialog.open<ImagePreviewComponent, { image: File }, { canSave: boolean, selectedImage: File }>(
        ImagePreviewComponent,
        {
          data: { image: file },
          panelClass: 'mat-dialog-no-padding',
          maxHeight: '80vh'
        }
      );

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe(dialogData => {
        input.value = '';
        console.log('Dialog closed!', dialogData);
        if (dialogData && dialogData.canSave) {
          console.log('Save image!');
        }
      });
  }

  onSave(): void {
    this.isLoading = true;
    this.isEditing = false;
    let message: string;
    this.userService.updateUser(this.user)
      .pipe(take(1))
      .subscribe(
        (user: User) => message = 'Profile updated!',
        error => message = this.errorService.getErrorMessage(error),
        () => {
          this.isLoading = false;
          this.snackBar.open(message, 'OK', { duration: 3000, verticalPosition: 'top' });
        }
      );
  }

}
