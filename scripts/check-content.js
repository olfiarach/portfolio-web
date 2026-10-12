// Opt-in guard: STRICT_CONTENT=1 fails the build if placeholders remain (STRATEGY §5).
const fs = require("fs");
const path = require("path");
const hits = [];
const walk = (d) => {
  if (!fs.existsSync(d)) return;
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (/\.(js|css|md|html|json|txt)$/.test(f.name))
      fs.readFileSync(p, "utf8").split("\n").forEach((l, i) => /\[NEED|TODO/.test(l) && hits.push(`${p}:${i + 1}`));
  }
};
["pages", "components", "constants", "public"].forEach(walk);
if (!hits.length) process.exit(0);
const strict = process.env.STRICT_CONTENT === "1";
console.log(`${strict ? "ERROR" : "warn"}: ${hits.length} [NEED/TODO placeholder(s):\n  ${hits.join("\n  ")}`);
process.exit(strict ? 1 : 0);
