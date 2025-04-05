# Coffee Chaterator

A Chrome extension that helps you send personalized coffee chat requests on LinkedIn with just a few clicks.

## Features

- Generate personalized connection messages using OpenAI's GPT-4
- Customize your message based on:
  - Your name and details
  - How you connected with the person
  - Why you want to chat
  - Additional context and shared details
  - Preferred tone (casual, professional, etc.)
- Copy the generated message with a single click

## Installation

### From Source

1. Clone this repository
2. Create a `.env` file in the root directory with your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Build the extension:
   ```
   npm run build
   ```
5. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `dist` zip from this project

## Development

To start development with hot-reloading:

```
npm run dev
```

## Tech Stack

- React
- OpenAI API
- Chrome Extension API
- Webpack
- Tailwind CSS

## Project Structure

- `src/`: Source code
  - React components for the popup UI
  - OpenAI API integration
  - Content scripts for LinkedIn integration
- `public/`: Static assets and manifest file
- `dist/`: Built extension (generated)

## Author

David Lam

## Feedback

Please submit your feedback via the [feedback form](https://forms.gle/fK9LuTns3C2g8CyX7).
