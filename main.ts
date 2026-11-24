import { mkdirSync, writeFileSync } from "node:fs";

// One-line weather forecast for a city that does not exist: Drowsingham.
// Verified: 113 characters / 116 bytes UTF-8, inside the 1-140 gate, no
// trailing newline. Forecast skeleton kept straight (heavy showers, time
// window, temperature, probability); the joke is one commuter truth bent
// into it, landing on the last words: the bus is late, but the rain, at
// least, is on time.
const FORECAST =
  "In Drowsingham, heavy showers from 8am, 13°C, and a 100% chance the bus is late — the rain, at least, is on time.";

if (FORECAST.length < 1 || FORECAST.length > 140 || FORECAST.trim().length === 0) {
  throw new Error(`forecast must be 1-140 non-whitespace characters, got ${FORECAST.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORECAST, "utf8");
