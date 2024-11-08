# Telegram Bot with Mini App Integration

This repository contains code for launching a Telegram bot that integrates with a Telegram Mini App, designed for testing applications within the Telegram environment.

## Overview

The Telegram bot responds to the `/start` command by displaying a button that opens the specified application.

## How to Run the Bot

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Create a bot using BotFather**:

   - Go to [BotFather](https://t.me/BotFather) in Telegram.
   - Create a new bot and obtain the API key.
   - Save the API key in a `.env` file in the root directory:
     ```
     TELEGRAM_BOT_API_KEY=your_bot_api_key
     TELEGRAM_WEB_APP_URL=your_app_url
     ```

3. **Run a local application and expose it**:

   - Use [ngrok](https://ngrok.com/) or an alternative tool to expose your local application:
     ```bash
     ngrok http <local_port>
     ```
   - Copy the generated public URL and set it as `TELEGRAM_WEB_APP_URL` in the `.env` file.

4. **Install dependencies**:

   ```bash
   yarn install
   ```

5. **Start the bot**:

   ```bash
   yarn bot
   ```

6. **Test the bot**:
   - Open Telegram, find your bot, and send the `/start` command.

## Additional Notes

Ensure your `.env` file is correctly configured before running the bot. This bot will respond by providing a button that users can click to open the specified app.

---

Feel free to contribute and enhance this repository!
