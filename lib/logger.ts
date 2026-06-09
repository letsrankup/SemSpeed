type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'CRITICAL';

export const Logger = {
  log(level: LogLevel, context: string, message: string, metadata?: object) {
    const timestamp = new Date().toISOString();
    const logOutput = {
      timestamp,
      level,
      context,
      message,
      ...(metadata && { metadata })
    };

    // In development, pretty print to console
    if (process.env.NODE_ENV !== 'production') {
      const colors = { INFO: '\x1b[34m', WARN: '\x1b[33m', ERROR: '\x1b[31m', CRITICAL: '\x1b[41m' };
      console.log(`${colors[level]}[${level}]\x1b[0m [${context}] ${message}`, metadata ? metadata : '');
    } else {
      // In production, you would stream this strictly to Datadog, AWS CloudWatch, or Supabase DB
      console.log(JSON.stringify(logOutput));
    }
  }
};

