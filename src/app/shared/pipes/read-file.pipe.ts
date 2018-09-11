import { Pipe, PipeTransform } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';

@Pipe({
  name: 'readFile'
})
export class ReadFilePipe implements PipeTransform {

  transform(file: File): Observable<string> {
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      return Observable.create((observer: Observer<string>) => {
        fileReader.onloadend = (event: ProgressEvent) => {
          observer.next(fileReader.result as string);
          observer.complete();
        };
        fileReader.onerror = (event) => {
          observer.error(event);
          observer.complete();
        };
      });
    }
    return of(null);
  }

}
