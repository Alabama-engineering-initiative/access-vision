import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const roster = [
  ['Barry Elliott', 'President', 'Founding board member and pastor with extensive nonprofit leadership experience whose tenure with Alabama Lions Sight helped expand Alabama’s first mobile eye clinic to serve nearly twice as many patients statewide, providing strategic and ethical leadership to Access Vision.'],
  ['Dr. Kent Daum', 'Executive Director (ex officio)', 'Volunteer optometrist with decades of clinical experience and specialized expertise in indigent eye care, providing comprehensive eye exams through mobile clinics serving underserved Alabama communities.'],
  ['Terra Mortensen, GPC', 'Secretary', 'Certified grant professional and nonprofit consultant with 15 years of experience securing funding and helping launch mobile eye clinics statewide and regionally, including Alabama’s first mobile eye clinic. She leads Access Vision’s grant development and fundraising efforts.'],
  ['Cody Davis', '', 'Admissions Counselor at Faulkner University and former COO of Alabama Lions Sight who contributes nonprofit operations experience and institutional knowledge of mobile vision services.'],
  ['Shelicia Ford', '', 'Community advocate and nurse educator with more than 30 years of experience advancing health education, access to care, and community engagement.'],
  ['Julia Sosa', '', 'Chair of the Tuscaloosa Latino Coalition and former Alabama Department of Public Health Minority Health Director with expertise in public health, cultural competency, and community outreach.'],
  ['Alan Swindall', '', 'Ordained minister and licensed marriage and family therapist with 33 years of experience, including hospital chaplaincy, child advocacy leadership, and mobile clinic volunteer service.'],
  ['Hettie Wagner', '', 'Licensed social worker with over 30 years of experience connecting individuals in crisis with essential services, including long-standing collaboration to link patients with eye care.'],
];

test('team export presents the complete 2025-26 board and preserves the clinic team', () => {
  const html = readFileSync('out/team/index.html', 'utf8');
  assert.match(html, /id="team-container"/);
  const section = html.match(/<section[^>]*id="board-of-directors"[^>]*>([\s\S]*?)<\/section>/);
  assert.ok(section, 'board section is present');
  const text = section[1].replace(/<[^>]+>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ');
  assert.match(text, /2025-26/);
  assert.match(text, /Board of Directors/);
  const articles = [...section[1].matchAll(/<article\b[^>]*>([\s\S]*?)<\/article>/g)];
  assert.equal(articles.length, roster.length);
  for (const [index, fields] of roster.entries()) {
    const article = articles[index][1].replace(/<[^>]+>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ');
    for (const field of fields.filter(Boolean)) assert.ok(article.includes(field), `missing ${field} in board member ${index + 1}`);
  }
  assert.ok(text.includes('Access Vision’s Board is intentionally diverse, with strong representation from women and leaders from Black, Latino, and Asian communities, as well as members residing across multiple regions of Alabama, ensuring culturally informed and geographically responsive governance.'));
});
