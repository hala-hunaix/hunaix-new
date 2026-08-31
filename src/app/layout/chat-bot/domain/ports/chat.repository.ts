import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessage } from '../entities/chat.types';

/**
 * Abstract repository interface defining the contract for chat operations and data persistence.
 */
export interface ChatRepository {
  /**
   * Sends a text message to the backend or AI service and returns an observable emitting the resulting ChatMessage.
   */
  sendMessage(text: string): Observable<ChatMessage>;
}

/**
 * Angular InjectionToken used to provide and inject concrete implementations of the ChatRepository interface.
 */
export const CHAT_REPOSITORY = new InjectionToken<ChatRepository>('CHAT_REPOSITORY');