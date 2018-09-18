import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Chat } from '../../models/chat.model';
import { ChatService } from '../../services/chat.service';
import { ErrorService } from '../../../core/services/error.service';

@Injectable()
export class ChatWindowResolver implements Resolve<Chat> {

  constructor(
    private chatService: ChatService,
    private errorService: ErrorService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Chat> {
    const chatOrUserId: string = route.paramMap.get('id');
    return this.chatService.getChatByIdOrByUsers(chatOrUserId)
      .pipe(
        catchError((error: Error) => {
          const errorMessage: string = this.errorService.getErrorMessage(error);
          let redirect = '/dashboard';
          if (errorMessage.includes('Insufficient Permissions')) {
            redirect = '/dashboard/permission-denied';
          }
          this.router.navigate([redirect], { queryParams: { previous: state.url } });
          return of(null);
        })
      );
  }

}
