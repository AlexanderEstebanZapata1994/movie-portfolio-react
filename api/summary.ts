import type { VercelRequest, VercelResponse } from '@vercel/node';
import { generateText } from 'ai';
import { google } from '@ai-sdk/google'; // 1. Import the explicit provider

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end('Method Not Allowed');
    }

    const { title } = req.body as { title?: string };
    if (!title) {
        return res.status(400).json({ error: 'Missing movie title' });
    }

    try {

        const { text } = await generateText({
            model: google('gemini-2.5-flash'),
            prompt: `Provide a brief, engaging 2-sentence critical consensus and opinion for the movie: ${title}`,
        });

        return res.status(200).json({ summary: text });
    } catch (error: any) {
        console.error("AI Error:", error);
        return res.status(500).json({ error: error.message });
    }
}