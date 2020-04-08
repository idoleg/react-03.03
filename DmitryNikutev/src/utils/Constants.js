export const CHATS_PATH = "/chats";
export const AUTH_PATH = "/auth";

export const BOT_NAME = "Bot";
export const BOT_MESSAGE = "Thank you!";

export const CHATS = [
   [1, {
      name: BOT_NAME,
      avatar: "https://picsum.photos/201",
      messages: new Map([
         [234, {
            name: BOT_NAME,
            text: "Hello, I`m polite bot, send me something",
            automated: true
         }]
      ])
   }],
   [2, {
      name: "Another bot",
      avatar: "https://picsum.photos/202",
      messages: new Map([
         [4, {
            name: "Another bot",
            text: "I am not polite, but will thank you for your message as well",
            automated: true
         }]
      ])
   }],
   [3, {
      name: "One more bot",
      avatar: "https://picsum.photos/203",
      messages: new Map(),
   }]
];
