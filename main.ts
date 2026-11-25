// One Line, No Deadline Met — make.fun bounty entry.
// Writes a single-line joke excusing a missed deadline to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace, exactly one line.

import { mkdirSync, writeFileSync } from "node:fs";

// Joke: the snooze button as the excuse — the deadline itself gives up and
// leaves, which lands the punch at the very end of the single sentence.
const LINE =
  "I set an alarm for the deadline, then hit snooze so many times the deadline gave up and left without me.";

const line = LINE.trim();
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry is ${line.length} chars, must be 1-200`);
}
if (/\n|\r/.test(line)) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(`${line.length} chars: ${line}`);
