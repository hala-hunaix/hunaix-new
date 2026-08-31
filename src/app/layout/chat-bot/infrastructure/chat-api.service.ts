import { Injectable } from '@angular/core';
import { Observable, timer, map } from 'rxjs';
import { ChatRepository } from '../domain/ports/chat.repository';
import { ChatMessage } from '../domain/entities/chat.types';

/**
 * Concrete implementation of the ChatRepository port acting as an API service,
 * simulating asynchronous bot response delays using RxJS timers.
 */
@Injectable({
  providedIn: 'root'
})
export class ChatApiService implements ChatRepository {
  /**
   * Simulates sending a message and receiving an automated bot response after a 1.5-second delay.
   */
  sendMessage(text: string): Observable<ChatMessage> {
    return timer(1500).pipe(
      map(() => ({
        id: Date.now().toString(),
        textKey: 'defaultReply',
        sender: 'bot',
        timestamp: new Date()
      }))
    );
  }
}