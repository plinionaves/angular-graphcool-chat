import { FileModel } from '../../core/models/file.model';
import { Message } from './message.model';
import { User } from '../../core/models/user.model';

import { graphcoolConfig } from './../../core/providers/graphcool-config.provider';

export class Chat {

  id: string;
  createdAt?: string;
  isGroup?: boolean;
  title?: string;
  users?: User[];
  messages?: Message[];
  photo?: FileModel;

  constructor(chat: Chat) {
    Object.keys(chat)
      .forEach(key => this[key] = chat[key]);
  }

  getPhotoURL?(): string {
    if (this.photo && this.photo.secret) {
      return `${graphcoolConfig.fileDownloadURL}/${this.photo.secret}`;
    }
    if (this.isGroup) {
      return 'assets/images/group-no-photo.png';
    }
    return this.users[0].getPhotoURL() || 'assets/images/user-no-photo.png';
  }

}
