export default function logger() {
  return function loggerMiddleware(req, res, next) {
    const start = process.hrtime.bigint();
    const { method, originalUrl } = req;

    res.on('finish', () => {
      const end = process.hrtime.bigint();
      const durationMs = Number(end - start) / 1_000_000;
      const { statusCode } = res;
      console.log(`[${new Date().toISOString()}] ${method} ${originalUrl} -> ${statusCode} (${durationMs.toFixed(2)} ms)`);
    });

    next();
  };
}
