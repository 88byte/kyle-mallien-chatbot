const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins or replace * with 'https://88byte.github.io' for specific origin
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight request (OPTIONS method)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'POST') {
        try {
            const { messages, model, max_tokens } = req.body;
            const response = await openai.createChatCompletion({
                model: model || "gpt-3.5-turbo",
                messages: messages,
                max_tokens: max_tokens || 150,
            });
            res.status(200).json(response.data);
        } catch (error) {
            console.error("OpenAI API error:", error.response.data);
            res.status(500).json({ error: "Error with the OpenAI API" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
