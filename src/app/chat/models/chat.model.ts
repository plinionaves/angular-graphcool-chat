import { Message } from './message.model';
import { User } from '../../core/models/user.model';

export class Chat {

  id: string;
  createdAt?: string;
  isGroup?: boolean;
  title?: string;
  users?: User[];
  messages?: Message[];

}
