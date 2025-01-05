const BLACKBOX_API_URL = 'https://www.useblackbox.io/chat-request-v4';

export async function getBlackboxResponse(query: string): Promise<string> {
  try {
    const response = await fetch(BLACKBOX_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'user',
            content: query,
          },
        ],
        stream: false, // Set to true if you want to handle streaming responses
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get response from Blackbox.ai');
    }

    const data = await response.json();
    return data.response || 'Sorry, I could not generate a response at this time.';
  } catch (error) {
    console.error('Error calling Blackbox.ai:', error);
    return 'Sorry, there was an error processing your request.';
  }
}
