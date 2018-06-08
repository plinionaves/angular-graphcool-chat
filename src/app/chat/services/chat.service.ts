import { Injectable } from '@angular/core';

import { ChatModule } from '../chat.module';

@Injectable({
  providedIn: ChatModule
})
export class ChatService {

  constructor() { }
}
