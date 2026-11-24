// How Many Tabs Do You Have Open? — my entry program.
// It records my honest count of open browser tabs at this moment.
// The answer is one digit only: no words, no punctuation, no extra number.
// The file holds exactly that one character, without a trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const OPEN_TABS = "3";
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, OPEN_TABS, "utf8");
console.log(`Wrote ${OPEN_TABS} open tabs to ${OUTPUT_PATH}.`);
