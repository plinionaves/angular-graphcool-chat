import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
