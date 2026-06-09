import { queryOpenRouter } from './openrouter';

export async function validateWorkflowLogic(trigger: string, steps: any[]) {
  const context = "You are the Logic Validation Engine for Business OS automations. Detect infinite loops, webhook failures, and broken API payloads in the user's workflow schema.";
  const prompt = `Analyze this workflow matrix.\nTrigger: ${trigger}\nExecution Steps: ${JSON.stringify(steps)}\nIdentify any structural vulnerabilities.`;

  return await queryOpenRouter([
    { role: "system", content: context },
    { role: "user", content: prompt },
  ], "anthropic/claude-3.5-sonnet"); // Using a higher logic model specifically for coding/logic tasks
}

