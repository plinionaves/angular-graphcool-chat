import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatLineModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

import { AvatarComponent } from './components/avatar/avatar.component';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { NoRecordComponent } from './components/no-record/no-record.component';
import { ReadFilePipe } from './pipes/read-file.pipe';
import { WarningComponent } from './components/warning/warning.component';

@NgModule({
  declarations: [
    AvatarComponent,
    DialogConfirmComponent,
    FromNowPipe,
    ImagePreviewComponent,
    NoRecordComponent,
    ReadFilePipe,
    WarningComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule
  ],
  entryComponents: [
    DialogConfirmComponent,
    ImagePreviewComponent
  ],
  exports: [
    AvatarComponent,
    CommonModule,
    DialogConfirmComponent,
    FormsModule,
    FromNowPipe,
    ImagePreviewComponent,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatLineModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    NoRecordComponent,
    ReadFilePipe,
    ReactiveFormsModule,
    WarningComponent
  ]
})
export class SharedModule { }
