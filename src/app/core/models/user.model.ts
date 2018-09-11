import { FileModel } from './file.model';
import { graphcoolConfig } from './../providers/graphcool-config.provider';

export class User {

  id: string;
  name?: string;
  email?: string;
  createdAt?: string;
  photo?: FileModel;

  constructor(user: User) {
    Object.keys(user)
      .forEach(key => this[key] = user[key]);
  }

  getPhotoURL?(): string {
    return (this.photo && this.photo.secret)
      ? `${graphcoolConfig.fileDownloadURL}/${this.photo.secret}`
      : 'assets/images/user-no-photo.png';
  }

}
