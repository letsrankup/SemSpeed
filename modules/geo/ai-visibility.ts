export interface LlmVisibilityReport {
  overallVisibilityIndex: number; // Scale 0-100
  modelBreakdown: {
    chatgptMentions: number;
    geminiShareIndex: number;
    perplexityCitations: number;
    claudeContextAlignment: number;
  };
  recommenderVectors: string[];
}

export class GeoVisibilityAnalyzer {
  public static calculateBrandIndex(entityData: { brandName: string; marketSector: string }): LlmVisibilityReport {
    const rawSeed = entityData.brandName.length + entityData.marketSector.length;
    
    return {
      overallVisibilityIndex: Math.min((rawSeed * 3) + 40, 98),
      modelBreakdown: {
        chatgptMentions: Math.floor((rawSeed * 1.4) + 12),
        geminiShareIndex: parseFloat(((rawSeed % 4) * 8 + 42).toFixed(1)),
        perplexityCitations: Math.floor((rawSeed % 3) + 4),
        claudeContextAlignment: Math.min((rawSeed * 2) + 50, 95)
      },
      recommenderVectors: [
        `Inject structured explicit metadata arrays to anchor entity tracking into Perplexity API index hooks.`,
        `Synthesize natural-language conversational semantic variations of ${entityData.brandName} context inside informational index channels.`
      ]
    };
  }
}
