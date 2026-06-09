export class ContentSeoOptimizer {
  public static evaluateDensity(textPayload: string, targetKeywords: string[]): { baseScore: number; densityMap: Record<string, number> } {
    const lowerText = textPayload.toLowerCase();
    const wordCount = lowerText.split(/\s+/).filter(w => w.length > 0).length || 1;
    const densityMap: Record<string, number> = {};
    
    let runningMatches = 0;

    targetKeywords.forEach(keyword => {
      const cleanKw = keyword.toLowerCase();
      const occurrences = lowerText.split(cleanKw).length - 1;
      runningMatches += occurrences;
      
      const percentage = parseFloat(((occurrences / wordCount) * 100).toFixed(2));
      densityMap[keyword] = percentage;
    });

    // Score calculation matrix mapping loops
    let baseScore = 40; // Base score allocation
    if (wordCount > 500) baseScore += 20;
    if (runningMatches > 3) baseScore += 25;
    baseScore = Math.min(baseScore, 100);

    return { baseScore, densityMap };
  }
}

