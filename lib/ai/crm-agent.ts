import { queryOpenRouter } from './openrouter';

export async function analyzeDealProbability(clientData: any, interactionHistory: string) {
  const context = "You are a Tier-1 Enterprise CRM AI for Business OS. Analyze the client's psychological buying signals, budget constraints, and interaction history to calculate deal closure probability.";
  const prompt = `Client Profile: ${JSON.stringify(clientData)}\nHistory: ${interactionHistory}\nOutput a JSON with: { "probability_score": "0-100", "risk_factors": [], "recommended_next_action": "string" }`;

  return await queryOpenRouter([
    { role: "system", content: context },
    { role: "user", content: prompt }
  ]);
}

