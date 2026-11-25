import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

test('homepage displays the supplied clinic photos under the Pages base path', () => {
  const html = readFileSync('out/index.html', 'utf8');
  for (const file of ['eye-exam.jpg', 'vision-check.jpg', 'community-clinic.jpg']) {
    assert.ok(html.includes(`/access-vision/photos/${file}`), `${file} is referenced`);
    assert.ok(existsSync(`out/photos/${file}`), `${file} is exported`);
  }
  assert.ok(html.includes('alt="'), 'photos have descriptive alt text');
});
