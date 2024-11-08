import { Telegraf } from "telegraf";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Check if environment variables are present
const TELEGRAM_BOT_API_KEY = process.env.TELEGRAM_BOT_API_KEY;
const TELEGRAM_WEB_APP_URL = process.env.TELEGRAM_WEB_APP_URL;

if (!TELEGRAM_BOT_API_KEY || !TELEGRAM_WEB_APP_URL) {
  throw new Error(
    "Environment variables TELEGRAM_BOT_API_KEY and TELEGRAM_WEB_APP_URL must be set in the .env file"
  );
}

// Initialize bot
const bot = new Telegraf(TELEGRAM_BOT_API_KEY);

// Handle /start command
bot.start((ctx) => {
  ctx.reply("Click the button to start", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Open The App",
            web_app: {
              url: TELEGRAM_WEB_APP_URL,
            },
          },
        ],
      ],
    },
  });
});

// Start bot
bot
  .launch()
  .then(() => {
    console.log("Bot is running");
  })
  .catch((err) => {
    console.error("Failed to launch bot:", err);
  });

// Graceful stop on termination signals
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
