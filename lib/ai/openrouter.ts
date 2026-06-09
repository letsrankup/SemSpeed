export async function queryOpenRouter(messages: Array<{ role: string; content: string }>, model = "meta-llama/llama-3.3-70b-instruct") {
  const apiKey = process.env.OPENROUTER_API_KEY || '';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "HTTP-Referer": siteUrl,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: model,
        messages: messages,
        temperature: 0.3,
        max_tokens: 1500
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`OpenRouter gateway edge exception: ${errText}`);
    }

    const output = await response.json();
    return output.choices[0].message.content;
  } catch (error: any) {
    console.error("AI Routing Node Failure:", error.message);
    return `System processing failure: ${error.message}`;
  }
}
