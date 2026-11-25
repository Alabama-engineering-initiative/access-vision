import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const clinics = JSON.parse(readFileSync(new URL('../src/data/schedule.json', import.meta.url)));

test('clinic dates and locations match the client calendar without invented details', () => {
  const expected = [
    ['2026-09-08','Capstone Parrish'], ['2026-09-12','SEA Clinic Montevallo'], ['2026-09-15','Sumiton Senior Center'], ['2026-09-16','HSI Autaugaville Family Health'], ['2026-09-17','Good Samaritan Tuscaloosa'], ['2026-09-18','Sumiton Senior Center'], ['2026-09-22','HSI Hayneville Family Health'], ['2026-09-23','HSI Clanton Family Health'], ['2026-09-24','Berry Clinic'], ['2026-09-25','Capstone Nauvoo'], ['2026-09-28','Capstone Double Springs'],
    ['2026-10-06','Capstone Parrish'], ['2026-10-07','Sumiton Senior Center'], ['2026-10-09','HSI Montevallo Family Health'], ['2026-10-10','SEA Clinic Montevallo'], ['2026-10-13','HSI Eclectic Family Health'], ['2026-10-14','HSI Ramer Family Health'], ['2026-10-16','Aliceville National Guard Armory'], ['2026-10-17','The Domaine Jasper'], ['2026-10-19','East Perry Improvement Association'], ['2026-10-27','Capstone Double Springs'], ['2026-10-28','Capstone Nauvoo'],
    ['2026-11-03','Capstone Parrish'], ['2026-11-04','HSI Hayneville Family Health'], ['2026-11-05','HSI Clanton Family Health'], ['2026-11-07','SEA Clinic Montevallo'], ['2026-11-10','Aliceville Hugh Spencer'], ['2026-11-17','Pardons and Paroles Jasper'], ['2026-11-18','CHOICE'], ['2026-11-24','Capstone Double Springs'], ['2026-11-25','Capstone Nauvoo'],
    ['2026-12-01','Capstone Parrish'], ['2026-12-02','HSI Hayneville Family Health'], ['2026-12-03','HSI Clanton Family Health'], ['2026-12-09','HSI Autaugaville Family Health'], ['2026-12-10','Good Samaritan Tuscaloosa'], ['2026-12-11','HSI Montevallo Family Health'], ['2026-12-12','SEA Clinic Montevallo'], ['2026-12-15','Capstone Double Springs'], ['2026-12-16','Capstone Nauvoo'], ['2026-12-17','Dora City of Lights'],
  ];
  assert.deepEqual(clinics.map(({ date, location }) => [date, location]), expected);
  assert.ok(clinics.every(c => !('time' in c) && !('status' in c) && !('statusLabel' in c)));
  assert.equal(clinics.find(c => c.date === '2026-10-07').tentative, true);
});


test('groups dates at the clinic-local day boundary and preserves today', async () => {
  const { groupClinics } = await loadComponent();
  const groups = groupClinics('2026-11-24');
  assert.equal(groups.upcoming[0].date, '2026-11-24');
  assert.equal(groups.past.at(-1).date, '2026-11-18');
  assert.equal(groupClinics('2026-12-18').upcoming.length, 0);
  assert.equal(groupClinics('2026-09-01').past.length, 0);
});

test('static HTML does not claim dates are upcoming or invent availability', async () => {
  const { default: ClinicSchedule } = await loadComponent();
  const { createElement } = await import('react');
  const { renderToStaticMarkup } = await import('react-dom/server');
  const html = renderToStaticMarkup(createElement(ClinicSchedule));
  const page = readFileSync(new URL('../out/index.html', import.meta.url), 'utf8');
  assert.match(page, /<h3>Clinic schedule<\/h3>/);
  assert.match(html, /dates may have passed/i);
  assert.match(html, /confirm/i);
  assert.match(html, /tentative/i);
  assert.doesNotMatch(html, /walk-ins welcome|open slots|registration full/i);
});

async function loadComponent() {
  const ts = await import('typescript');
  const vm = await import('node:vm');
  const { createRequire } = await import('node:module');
  const require = createRequire(import.meta.url);
  const source = readFileSync(new URL('../src/components/ClinicSchedule.tsx', import.meta.url), 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
  const loadedModule = { exports: {} };
  const localRequire = id => id === '@/data/schedule.json' ? clinics : id.endsWith('.css') ? {} : require(id);
  vm.runInThisContext('(function(require,module,exports){' + compiled + '\n})')(localRequire, loadedModule, loadedModule.exports);
  return loadedModule.exports;
}
