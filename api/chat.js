const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "https://88byte.github.io"); // Allow all origins
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS"); // Allow POST and OPTIONS methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow Content-Type header

  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    const { messages, model, max_tokens } = req.body;

    const completion = await openai.createChatCompletion({
      model: model || "gpt-3.5-turbo",
      messages: messages,
      max_tokens: max_tokens || 150,
    });

    res.status(200).json({ choices: completion.data.choices });
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    res.status(500).json({ error: "An error occurred with the OpenAI API" });
  }
};
