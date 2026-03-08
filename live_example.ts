import { GoogleGenAI, Modality } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  const session = await ai.live.connect({
    model: 'gemini-2.0-flash-exp',
    config: {
      responseModalities: [Modality.TEXT],
    },
    callbacks: {
      onopen: () => {
        console.log('Live session connected.');
        session.sendRealtimeInput({ text: 'Hello, tell me a joke.' });
      },
      onmessage: (message) => {
        if (message.text) {
          process.stdout.write(message.text);
        }
      },
      onclose: () => {
        console.log('\nLive session closed.');
      },
      onerror: (error) => {
        console.error('Live session error:', error);
      },
    },
  });
}

main();