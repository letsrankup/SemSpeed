import { queryOpenRouter } from './openrouter';

export async function detectDataAnomalies(metricsData: any) {
  const context = "You are the Lead Data Scientist AI for Business OS. Analyze traffic and conversion metrics to find hidden patterns, sudden drops, or high-growth vectors. Output only a structured JSON array of insights.";
  const prompt = `Time-Series Data Matrix: ${JSON.stringify(metricsData)}\nIdentify anomalies and formulate strategic fixes.`;

  return await queryOpenRouter([
    { role: "system", content: context },
    { role: "user", content: prompt }
  ]);
}

