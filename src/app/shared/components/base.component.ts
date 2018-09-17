import { MatDialog } from '@angular/material';
import { take } from 'rxjs/operators';

import { AuthService } from '../../core/services/auth.service';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { DialogConfirmData } from './dialog-confirm/dialog-confirm-data.interface';

export class BaseComponent<T extends {id: string}> {

  constructor(
    protected authService?: AuthService,
    protected dialog?: MatDialog
  ) {}

  trackByFn(index: number, item: T): string {
    return item.id;
  }

  logout(): void {
    const dialogRef = this.dialog.open<DialogConfirmComponent, DialogConfirmData, boolean>(
      DialogConfirmComponent,
      { data: { title: 'Quit?', message: 'Do you really want to leave?' } }
    );

    dialogRef.beforeClose()
      .pipe(take(1))
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.authService.logout();
        }
      });
  }

}
