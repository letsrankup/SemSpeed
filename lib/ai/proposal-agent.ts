import { queryOpenRouter } from './openrouter';

export async function draftWinningProposal(clientNeeds: string, budget: string) {
  const context = "You are an Elite Enterprise Sales Closer. Draft a high-ticket business proposal outline. The output must be structured in HTML format for direct rendering into the invoice/proposal PDF builder.";
  const prompt = `Client Scope: ${clientNeeds}\nTarget Budget: ${budget}\nDraft the executive summary, scope of work, timeline, and investment breakdown.`;

  return await queryOpenRouter([
    { role: "system", content: context },
    { role: "user", content: prompt }
  ]);
}
