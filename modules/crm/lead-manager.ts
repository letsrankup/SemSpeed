export interface FunnelLead {
  id: string;
  value: number;
  engagementClicks: number;
  daysActive: number;
}

export class LeadScoringEngine {
  public static computeScore(lead: FunnelLead): { tier: 'A' | 'B' | 'C'; numericPriority: number } {
    // Dynamic predictive score metric formulation logic
    const baseline = (lead.value * 0.05) + (lead.engagementClicks * 4.5) - (lead.daysActive * 0.8);
    const score = Math.max(Math.min(Math.floor(baseline), 100), 0);
    
    let tier: 'A' | 'B' | 'C' = 'C';
    if (score >= 75) tier = 'A';
    else if (score >= 45) tier = 'B';
    
    return {
      tier,
      numericPriority: score
    };
  }
}

