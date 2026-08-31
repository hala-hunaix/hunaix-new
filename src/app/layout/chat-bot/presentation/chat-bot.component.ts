import { Component, inject, signal, viewChild, ElementRef, ChangeDetectionStrategy, afterNextRender, Injector, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatStore } from '../application/chat.store';

/**
 * Component responsible for rendering an interactive chat bot interface,
 * managing message input states, automated scroll tracking via reactive effects, and dispatching messages to the ChatStore.
 */
@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatBotComponent {
  // Store instance injected to manage chat state, message collections, and dispatch actions
  readonly chatStore = inject(ChatStore);
  // Local signal tracking the user's current message text input value
  readonly messageText = signal('');
  // Injector instance required for executing afterNextRender callbacks within reactive contexts
  private readonly injector = inject(Injector);
  // ViewChild signal query to retrieve the scrollable chat container element reference
  readonly scrollContainer = viewChild<ElementRef<HTMLDivElement>>('chatScrollContainer');

  /**
   * Initializes the component and sets up a reactive effect to automatically scroll to the bottom
   * of the container whenever the chat window opens or new messages are appended.
   */
  constructor() {
    effect(() => {
      const messagesCount = this.chatStore.messages().length;
      const isOpen = this.chatStore.isOpen();
      if (isOpen && messagesCount > 0) {
        afterNextRender(
          () => {
            this.scrollToBottom();
          },
          { injector: this.injector }
        );
      }
    });
  }

  /**
   * Validates and sends the current message text to the chat store, then clears the input signal.
   */
  onSend() {
    const text = this.messageText().trim();
    if (text) {
      this.chatStore.sendMessage(text);
      this.messageText.set('');
    }
  }

  /**
   * Smoothly scrolls the chat container element to the bottom to display the latest conversation flow.
   */
  private scrollToBottom() {
    const element = this.scrollContainer()?.nativeElement;
    if (element) {
      element.scrollTo({
        top: element.scrollHeight,
        behavior: 'smooth'
      });
    }
  }
}