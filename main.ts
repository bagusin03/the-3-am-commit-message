// The 3 AM Commit Message — make.fun entry.
// One commit message an AI agent would write right after breaking
// production at 3 AM, written to /output/entry.txt.
// Offline and deterministic: no network, no clock, no randomness, no
// environment access. The program only emits the line.
import * as fs from "node:fs";

const LINE =
  "fix: broke production at 3 AM, restored it from the backup I made of the broken version — 98% confident this counts as fixed";

// Guard the sealed gate ourselves: one line, 1-200 characters, not blank,
// and shaped like a real commit message (conventional "fix:" prefix).
// Fail loudly instead of ever writing an entry the scorer would reject.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`entry line violates the 1-200 char single-line gate (${chars} chars)`);
}
if (!LINE.startsWith("fix: ")) {
  throw new Error("entry line must read like a real commit message (fix: ...)");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the written file round-trips exactly: same bytes, one line.
const written = fs.readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the entry line");
}

console.log(`wrote ${chars} chars to /output/entry.txt`);
