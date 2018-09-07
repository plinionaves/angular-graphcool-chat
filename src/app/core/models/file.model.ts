import { Chat } from '../../chat/models/chat.model';
import { User } from './user.model';

export interface FileModel {
  id: string;
  secret?: string;
  name?: string;
  size?: number;
  url?: string;
  contentType?: string;
  user?: User;
  chat?: Chat;
}
