document.getElementById('submit-btn').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    // Display user message
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div class="message user-message"><span class="chat-label">You:</span> ${userInput}</div>`;
    document.getElementById('user-input').value = '';

    // Define keywords and static responses
    const programKeywords = [
        "program name", "Kyle's program", "masterclass", "elite wealth", "course", "training", "offer", "acquisition", "program"
    ];
    const pricingKeywords = [
        "program cost", "program price", "how much is", "what's the price", "how much does it cost", "cost of the program", "price of the program"
    ];

    const lowerCaseInput = userInput.toLowerCase();

    // Check if user input is a program-related question
    const isProgramQuestion = programKeywords.some(keyword => lowerCaseInput.includes(keyword));
    
    // Check if user input is specifically a program pricing question
    const isPricingQuestion = pricingKeywords.some(keyword => lowerCaseInput.includes(keyword));

    // Handle program-related questions
    if (isProgramQuestion) {
        if (isPricingQuestion) {
            const pricingResponse = `
                For details about program pricing, please reach out directly, and we'd be happy to assist!`;
            chatBox.innerHTML += `
                <div class="message bot-message">
                    <img src="https://kylemallien.com/wp-content/uploads/2024/01/business-strategist-kyle-mobile.png" alt="Kyle Mallien">
                    <span class="chat-label">Kyle:</span> ${pricingResponse}
                </div>`;
        } else {
            const programResponse = `
                Kyle offers two main programs:<br><br>
                - <strong>Kyle Mallien Masterclass</strong>: A self-paced, DIY program featuring comprehensive training materials for independent learning.<br><br>
                - <strong>Elite Wealth Club</strong>: A "Do It With Me" program, providing hands-on support and guidance from Kyle and his team to help you achieve your acquisition goals.<br><br>
                If you’re interested in learning more about either program, please let me know!`;
            chatBox.innerHTML += `
                <div class="message bot-message">
                    <img src="https://kylemallien.com/wp-content/uploads/2024/01/business-strategist-kyle-mobile.png" alt="Kyle Mallien">
                    <span class="chat-label">Kyle:</span> ${programResponse}
                </div>`;
        }
        chatBox.scrollTop = chatBox.scrollHeight;
        return;
    }

    try {
        // Fetch response from OpenAI API for non-program questions
        const response = await fetch('https://kyle-mallien-chatbot.vercel.app/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'ft:gpt-3.5-turbo-0125:personal::ATGelzxH',
                messages: [
                    { role: 'system', content: "You are Kyle Mallien, an expert in business acquisitions." },
                    { role: 'user', content: userInput }
                ],
                max_tokens: 150
            })
        });

        const data = await response.json();
        const botMessage = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that request.";

        // Display bot response with image
        chatBox.innerHTML += `
            <div class="message bot-message">
                <img src="https://kylemallien.com/wp-content/uploads/2024/01/business-strategist-kyle-mobile.png" alt="Kyle Mallien">
                <span class="chat-label">Kyle:</span> ${botMessage}
            </div>`;
        chatBox.scrollTop = chatBox.scrollHeight;

    } catch (error) {
        console.error("Error:", error);
        chatBox.innerHTML += `
            <div class="message bot-message">
                <img src="https://kylemallien.com/wp-content/uploads/2024/01/business-strategist-kyle-mobile.png" alt="Kyle Mallien">
                <span class="chat-label">Kyle:</span> Sorry, something went wrong. Please try again later.
            </div>`;
    }
});

document.getElementById('lead-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capture name and email
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Hide form and show chat
    document.getElementById('lead-form').style.display = 'none';
    document.getElementById('chat-container').style.display = 'block';

    // Welcome message in chat
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `
        <div class="message bot-message">
            <img src="https://kylemallien.com/wp-content/uploads/2024/01/business-strategist-kyle-mobile.png" alt="Kyle Mallien">
            <span class="chat-label">Kyle:</span> Hi ${name}, welcome to the chat! How can I assist you today?
        </div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
});