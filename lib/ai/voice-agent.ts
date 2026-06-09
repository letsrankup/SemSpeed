import { queryOpenRouter } from './openrouter';

export async function generateVoiceScript(leadContext: object, goal: string) {
  const context = "You are the Neural Voice Script Commander. Write concise, spoken-English scripts optimized for Text-to-Speech (TTS) latency. Avoid complex punctuation. Keep sentences short and conversational.";
  const prompt = `Lead Data: ${JSON.stringify(leadContext)}\nCall Goal: ${goal}\nProvide the opening hook, objection handling framework, and closing statement.`;

  return await queryOpenRouter([
    { role: "system", content: context },
    { role: "user", content: prompt }
  ]);
}

