import { mkdirSync, writeFileSync } from "node:fs";

// One original poem about agency: the power to stop and to stay,
// and the agency that passes between two brothers when one acts for
// the other. Written in this session; deterministic output.
const POEM = `"Start her," Dan said.
Eli's hand stayed on the cord.
One pull and she was gone — the buyer past the point.
"You start her," Eli said.
Dan didn't. The cord hung slack in Eli's fist.
The tide came in. The boat stayed.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, POEM, "utf8");
