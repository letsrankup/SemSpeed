export class DealTrackerPipeline {
  public static adjustValueByStage(nominalValue: number, stage: string): number {
    const weights: Record<string, number> = {
      'new': 0.10,
      'contacted': 0.25,
      'qualified': 0.50,
      'proposal_sent': 0.75,
      'won': 1.00,
      'lost': 0.00
    };

    const multiplier = weights[stage.toLowerCase()] !== undefined ? weights[stage.toLowerCase()] : 0.05;
    return parseFloat((nominalValue * multiplier).toFixed(2));
  }
}
