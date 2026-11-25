import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const home = readFileSync('src/app/page.tsx', 'utf8');
const about = readFileSync('src/app/about/page.tsx', 'utf8');
const layout = readFileSync('src/app/layout.tsx', 'utf8');

test('patients can find care, payment policy, and visit preparation', () => {
  for (const text of ['Better Vision. Better Lives.', 'Medicare, Medicaid, and most major insurance carriers', 'Preparing for Your Visit', 'Your insurance card', 'ClinicSchedule']) assert.ok(home.includes(text), text);
});

test('community visitors can discover impact, partnership, support, and contact', () => {
  for (const text of ['Good Vision Changes Everything', 'Behind Every Pair of Glasses Is a Story', 'Stronger Communities Through Partnership', 'Give the Gift of Sight', 'We\u0026apos;d Love to Hear From You']) assert.ok(home.includes(text), text);
  assert.ok(!home.includes('/test file download.pdf'));
});

test('about page describes leadership experience, mission and vision', () => {
  for (const text of ['Bringing Eye Care Closer to Home', 'first mobile eye clinic', 'Our Mission', 'Our Vision']) assert.ok(about.includes(text), text);
});

test('navigation retains Team and links to working home sections', () => {
  assert.ok(layout.includes('href="/team"'));
  for (const id of ['services', 'schedule', 'impact', 'partnerships', 'support', 'contact']) {
    assert.ok(layout.includes(`/#${id}`), `navigation to ${id}`);
    assert.ok(home.includes(`id="${id}"`), `${id} target exists`);
  }
  assert.ok(!layout.includes('<ContactWidget'));
});
