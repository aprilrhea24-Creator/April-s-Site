export function isDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

export function getDatabaseSetupMessage() {
  return "Database setup is required before accounts, bookings, checkout, and admin tools can save data.";
}
