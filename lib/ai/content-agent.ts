import { queryOpenRouter } from './openrouter';

export async function generateOptimizedContent(topic: string, keywords: string[], tone = "Professional") {
  const context = `You are the Lead Content Architect for Business OS. Your objective is to generate highly engaging, plagiarism-free, and SEO-optimized content. You must return the output STRICTLY as a valid JSON object containing: { "title": "string", "meta_description": "string", "headings": ["string"], "body_html": "string", "estimated_read_time": "number" }. Do not include markdown formatting like \`\`\`json.`;
  
  const prompt = `Target Topic: ${topic}. Required Semantic Keywords: ${keywords.join(', ')}. Desired Tone: ${tone}. Construct the structural matrix.`;

  const response = await queryOpenRouter([
    { role: "system", content: context },
    { role: "user", content: prompt }
  ]);

  try {
    return JSON.parse(response);
  } catch (e) {
    throw new Error("Content Agent failed to return a valid structured JSON matrix.");
  }
}
