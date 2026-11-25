import { mkdirSync, writeFileSync } from "node:fs";

// One-line weather forecast for a city that does not exist: Gloomsbury.
// Re-entry line picked pairwise from 12 fresh candidates (CANDIDATES.md).
// Verified: 112 characters / 113 bytes UTF-8, inside the 1-140 gate, no
// trailing newline (the gate below counts JS string length, so "°" in
// "9°C" is one character and two bytes). Forecast skeleton kept straight
// (fog, time window, temperature, visibility); the broadcast phrase is
// bent in place ("low visibility, high sighing") and the joke lands on
// the last words: your bus arriving in a bunch of three.
const FORECAST =
  "Today in Gloomsbury, fog till 9am, 9°C: low visibility, high sighing, and your bus arriving in a bunch of three.";

if (
  FORECAST.length < 1 ||
  FORECAST.length > 140 ||
  FORECAST.trim().length === 0 ||
  FORECAST.includes("\n") ||
  FORECAST.includes("\r")
) {
  throw new Error(`forecast must be 1-140 non-whitespace characters on one line, got ${FORECAST.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORECAST, "utf8");
