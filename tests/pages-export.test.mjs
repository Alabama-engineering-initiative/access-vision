import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const base = '';

test('static export uses root paths for the custom domain', () => {
  const home = readFileSync('out/index.html', 'utf8');
  const team = readFileSync('out/team/index.html', 'utf8');
  assert.match(home, new RegExp(`href="${base}/about/`));
  assert.match(home, new RegExp(`(?:href|src)="${base}/_next/`));
  assert.match(team, new RegExp(`src="${base}/team/headshot_1.jpg"`));
  assert.ok(existsSync('out/team/headshot_1.jpg'));
  assert.doesNotMatch(home, /(?:href|src)="\/access-vision\//);
});
