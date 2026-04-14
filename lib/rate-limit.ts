import {
  RATE_LIMIT_WINDOW_MS,
  RATE_LIMIT_MAX_REQUESTS,
} from "@/lib/contact-config";

const requestLog = new Map<string, number[]>();

interface RateLimitResult {
  allowed: boolean;
  retryAfterSeconds?: number;
}

export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now();
  const timestamps = requestLog.get(ip) ?? [];

  // Filter to only timestamps within the current window
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    const oldestInWindow = recent[0];
    const retryAfterSeconds = Math.ceil(
      (oldestInWindow + RATE_LIMIT_WINDOW_MS - now) / 1000,
    );
    requestLog.set(ip, recent);
    return { allowed: false, retryAfterSeconds };
  }

  recent.push(now);
  requestLog.set(ip, recent);

  // Prevent unbounded memory growth
  if (requestLog.size > 10_000) {
    for (const [key, vals] of requestLog) {
      const active = vals.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (active.length === 0) {
        requestLog.delete(key);
      }
    }
  }

  return { allowed: true };
}
