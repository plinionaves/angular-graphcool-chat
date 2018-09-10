import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styles: [
    `
      img {
        max-width: 100%;
        margin: auto;
        display: block;
      }

      img[mat-card-image] {
        margin-top: 0;
      }

      mat-card {
        padding: 0;
      }
    `
  ]
})
export class ImagePreviewComponent implements OnInit {

  selectedImage: File;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { image: File },
    private dialogRef: MatDialogRef<ImagePreviewComponent>
  ) { }

  ngOnInit(): void {
    this.selectedImage = this.data.image;
  }

  onSave(): void {
    this.dialogRef.close({
      canSave: true,
      selectedImage: this.selectedImage
    });
  }

}
