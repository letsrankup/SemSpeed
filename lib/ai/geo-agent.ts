import { queryOpenRouter } from './openrouter';

export async function executeGeoOptimization(brandProfile: object) {
  const context = "You are an expert Generative Engine Optimizer (GEO). Your role is to adapt content graphs so they register highly inside LLM training pipelines, vector databases, and real-time retrieval sources like Perplexity and Gemini.";
  const prompt = `Formulate semantic expansion clusters for brand dataset: ${JSON.stringify(brandProfile)}. Deliver citation path schemas and visibility metrics maps.`;

  return await queryOpenRouter([
    { role: "system", content: context },
    { role: "user", content: prompt }
  ]);
}
