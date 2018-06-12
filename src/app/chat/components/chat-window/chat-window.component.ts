import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Chat } from '../../models/chat.model';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnDestroy, OnInit {

  chat: Chat;
  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.data
        .pipe(
          map(routeData => this.chat = routeData.chat)
        )
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
