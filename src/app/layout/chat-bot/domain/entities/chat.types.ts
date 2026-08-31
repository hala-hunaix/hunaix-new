/** Represents the author type of a chat message, eithering originating from the user or the automated chatbot. */
export type SenderType = 'user' | 'bot';

/** Defines localization or configuration keys for predefined chat message templates. */
export type MessageTextKey = 'welcome' | 'defaultReply' | 'custom';

/**
 * Interface representing a single chat message entity within the conversation flow.
 */
export interface ChatMessage {
  // Unique identifier for the message
  id: string;
  // Predefined text key used for translation or templating lookup
  textKey: MessageTextKey;
  // Optional custom text content for messages that do not rely strictly on predefined keys
  customText?: string;
  // The sender classification (user or bot) determining message alignment and styling
  sender: SenderType;
  // Exact timestamp indicating when the message was created or received
  timestamp: Date;
}