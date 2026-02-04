---
name: fetch-webpage
description: You can use this tool to fetch and convert webpages into markdown format by providing specific URLs.
metadata: {"clawdbot":{"emoji":"📄","requires":{"bins":["node"]}}}
---

# Fetch Webpage

Fetch webpages and convert them to clean Markdown format using pure.md proxy.

## Usage

```bash
# Single URL
node {baseDir}/scripts/fetch.mjs "https://example.com"

# Multiple URLs
node {baseDir}/scripts/fetch.mjs '["https://example.com", "https://example.org"]'

# With timeout
node {baseDir}/scripts/fetch.mjs "https://example.com" --timeout 60000
```

## Options

- `urls_json`: JSON array of URLs or a single URL string
- `--timeout <ms>`: Request timeout in milliseconds (default: 30000)

Notes:
- Returns webpage content converted to Markdown
- Uses pure.md as proxy for clean Markdown output
- For multiple URLs, returns JSON array of results
- Node.js 18+ required (native fetch)