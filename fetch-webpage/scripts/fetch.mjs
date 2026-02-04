#!/usr/bin/env node

import UserAgent from "user-agents";

const DEFAULT_TIMEOUT = 30000;
const PURE_MD_BASE = "https://pure.md/";

function usage() {
  console.error(`Usage: fetch.mjs <urls_json> [--timeout 30000]`);
  console.error(`  urls_json: JSON array of URLs or a single URL string`);
  console.error(`    e.g. '["https://example.com", "https://example.org"]'`);
  process.exit(2);
}

const args = process.argv.slice(2);
if (args.length === 0 || args[0] === "-h" || args[0] === "--help") usage();

let urls;
let timeout = DEFAULT_TIMEOUT;

// Parse URLs (first argument)
try {
  urls = JSON.parse(args[0]);
  if (!Array.isArray(urls)) {
    urls = [urls];
  }
} catch {
  // Treat as single URL string
  urls = [args[0]];
}

// Parse remaining arguments
for (let i = 1; i < args.length; i++) {
  const a = args[i];
  if (a === "--timeout") {
    timeout = Number.parseInt(args[i + 1] ?? String(DEFAULT_TIMEOUT), 10);
    i++;
    continue;
  }
  console.error(`Unknown arg: ${a}`);
  usage();
}

if (urls.length === 0) {
  console.error("At least one URL is required");
  process.exit(1);
}

// Validate URLs
for (const url of urls) {
  try {
    new URL(url);
  } catch {
    console.error(`Invalid URL: ${url}`);
    process.exit(1);
  }
}

async function fetchWebpage(url) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  // Use pure.md to convert HTML to Markdown
  const fetchUrl = `${PURE_MD_BASE}${url}`;

  try {
    const resp = await fetch(fetchUrl, {
      headers: {
        "User-Agent": new UserAgent().toString(),
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      signal: controller.signal,
    });

    if (!resp.ok) {
      throw new Error(`HTTP Error: ${resp.status} ${resp.statusText}`);
    }

    return await resp.text();
  } finally {
    clearTimeout(timeoutId);
  }
}

try {
  const results = [];
  
  for (const url of urls) {
    console.error(`Fetching Markdown for: ${url}`);
    
    try {
      const data = await fetchWebpage(url);
      results.push({
        url,
        success: true,
        data,
      });
    } catch (err) {
      if (err.name === "AbortError") {
        results.push({
          url,
          success: false,
          error: `Request timed out after ${timeout}ms`,
        });
      } else {
        results.push({
          url,
          success: false,
          error: err.message,
        });
      }
    }
  }

  // Output results
  if (results.length === 1) {
    const r = results[0];
    if (r.success) {
      console.log(r.data);
    } else {
      console.error(`Error: ${r.error}`);
      process.exit(1);
    }
  } else {
    // Multiple URLs - output as JSON
    console.log(JSON.stringify(results, null, 2));
  }
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
