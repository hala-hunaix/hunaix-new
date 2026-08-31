import { Injectable, signal, computed, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap, catchError, EMPTY } from 'rxjs';
import { CHAT_REPOSITORY } from '../domain/ports/chat.repository';
import { ChatMessage } from '../domain/entities/chat.types';
import { TranslationService } from '../../../core/services/translation.service';

/**
 * Global or scoped application state store managing chat visibility, typing indicators,
 * message collections, localized translations, and communication flows through the ChatRepository port.
 */
@Injectable({
  providedIn: 'root'
})
export class ChatStore {
  // Service injected to retrieve current language and text direction settings
  private readonly translationService = inject(TranslationService);
  // Chat repository port injected via the CHAT_REPOSITORY injection token
  private readonly chatApi = inject(CHAT_REPOSITORY);
  // DestroyRef used for auto-unsubscribing RxJS streams via takeUntilDestroyed
  private readonly destroyRef = inject(DestroyRef);

  // Signal tracking whether the chat widget/window is open or closed
  readonly isOpen = signal(false);
  // Signal indicating whether the bot is currently typing or processing a response
  readonly isTyping = signal(false);
  // Signal maintaining the raw list of chat messages exchanged in the session
  readonly messages = signal<ChatMessage[]>([
    { id: 'welcome-1', textKey: 'welcome', sender: 'bot', timestamp: new Date() }
  ]);

  // Computed signal providing localized string maps based on the current UI text direction/language
  readonly translations = computed(() => {
    const isArabic = this.translationService.direction() === 'rtl';
    return {
      welcome: isArabic ? 'مرحباً بك في النظام. كيف يمكنني مساعدتك...' : 'Welcome to the system...',
      botName: isArabic ? 'مساعد HUNIX الذكي' : 'HUNIX Smart Assistant',
      status: isArabic ? 'متصل وجاهز للمساعدة' : 'Online & ready to help',
      placeholder: isArabic ? 'اكتب استفسارك هنا...' : 'Type your query here...',
      defaultReply: isArabic ? 'هذا رد تجريبي للـ UI...' : 'This is a UI mockup...'
    };
  });

  // Computed signal mapping raw messages to fully localized and formatted display messages
  readonly localizedMessages = computed(() => {
    const t = this.translations();
    return this.messages().map(msg => ({
      ...msg,
      text: msg.textKey === 'welcome' ? t.welcome 
          : msg.textKey === 'defaultReply' ? t.defaultReply 
          : (msg.customText || '')
    }));
  });

  /**
   * Toggles the open/closed visibility state of the chat widget.
   */
  toggleChat() {
    this.isOpen.update(v => !v);
  }

  /**
   * Dispatches a user text message, appends it to the store, triggers the bot typing state,
   * and invokes the chat repository API to receive an automated reply.
   */
  sendMessage(text: string) {
    if (!text.trim()) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), textKey: 'custom', customText: text, sender: 'user', timestamp: new Date() };
    this.messages.update(msgs => [...msgs, userMsg]);
    this.isTyping.set(true);

    this.chatApi.sendMessage(text).pipe(
      takeUntilDestroyed(this.destroyRef),
      tap(botMsg => {
        this.isTyping.set(false);
        this.messages.update(msgs => [...msgs, botMsg]);
      }),
      catchError(() => {
        this.isTyping.set(false);
        return EMPTY;
      })
    ).subscribe();
  }
}