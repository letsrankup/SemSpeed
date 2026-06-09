import { queryOpenRouter } from './openrouter';

export async function runSeoAgentAudit(domainMetrics: object) {
  const context = "You are the Lead Autonomous SEO Audit Manager for Business OS. Analyze domain metrics configurations and output clear optimization directives in strict markdown layout formatting.";
  const prompt = `Analyze structural parameters data block: ${JSON.stringify(domainMetrics)}. Focus on keyword clustering recommendations and backlink distribution anomalies.`;

  return await queryOpenRouter([
    { role: "system", content: context },
    { role: "user", content: prompt }
  ]);
}
