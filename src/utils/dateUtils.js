export function daysUntilExpiry(dateStr) {
  const now = new Date();
  const expiry = new Date(dateStr);
  const diffMs = expiry - now;
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}
