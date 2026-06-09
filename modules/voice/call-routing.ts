export class VoiceRoutingMatrix {
  public static generateTwimlInstructions(spokenResponse: string, captureDigits = false): string {
    let twiml = `<?xml version="1.0" encoding="UTF-8"?><Response>`;
    
    if (captureDigits) {
      twiml += `<Gather numDigits="1" action="/api/voice/callback" method="POST">`;
      twiml += `<Say voice="polly.neural">${spokenResponse}</Say>`;
      twiml += `</Gather><Say>Timeout. Action routing reverted to active operational queue.</Say>`;
    } else {
      twiml += `<Say voice="polly.neural">${spokenResponse}</Say><Hangup/>`;
    }
    
    twiml += `</Response>`;
    return twiml;
  }
}
