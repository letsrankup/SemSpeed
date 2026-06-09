import { queryOpenRouter } from './openrouter';

export async function processAgentChat(userPrompt: string, systemContext: string) {
  const payload = [
    { role: "system", content: systemContext },
    { role: "user", content: userPrompt }
  ];
  return await queryOpenRouter(payload);
}

