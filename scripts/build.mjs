import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

function run(script, args) {
  const result = spawnSync(process.execPath, [resolve(script), ...args], {
    stdio: "inherit",
    shell: false
  });

  if (result.error) {
    console.error(result.error);
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

if (process.env.DATABASE_URL) {
  run("node_modules/prisma/build/index.js", ["migrate", "deploy"]);
} else {
  console.info("DATABASE_URL is not set; skipping Prisma migration deployment.");
}

run("node_modules/next/dist/bin/next", ["build"]);
