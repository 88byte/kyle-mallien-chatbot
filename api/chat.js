const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async (req, res) => {
  // CORS headers to allow access from external origins
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    const { messages, model, max_tokens } = req.body;

    const completion = await openai.createChatCompletion({
      model: model || "ft:gpt-3.5-turbo-0125:personal::ATGelzxH",
      messages: messages,
      max_tokens: max_tokens || 150,
    });

    res.status(200).json({ choices: completion.data.choices });
  } catch (error) {
    console.error("Error with OpenAI API:", error); // Log the error for debugging

    // Send back a JSON error response to avoid client-side JSON parsing issues
    res.status(500).json({ error: "An internal server error occurred." });
  }
};
