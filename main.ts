// The Houseplant Out-of-Office — make.fun entry.
// Writes one out-of-office auto-reply, as if a houseplant sent it,
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// The gate requires UTF-8 text of 1 to 120 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const reply =
  "Out of office: the fern has unionised. No water since March, no replies until the sunlight negotiations conclude.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (reply.length < 1 || reply.length > 120 || !reply.trim()) {
  throw new Error(`entry must be 1-120 characters, got ${reply.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), reply, "utf8");
console.log(`Wrote ${reply.length} characters to ${join(outDir, "entry.txt")}`);
