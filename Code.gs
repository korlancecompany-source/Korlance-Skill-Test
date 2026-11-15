/**
 * KORLANCE TEST CAMP - Google Apps Script backend
 * Bind this script to your Google Sheet (Extensions > Apps Script), paste this code, then Deploy > Web app.
 * Creates sheets: "Students" (main results), "Answers" (MCQ answer strings), "Code" (submitted code).
 * Resumes are stored in a Drive folder; the sheet shows a clickable "Open Resume" link.
 */
/* ===== SETTINGS (edit here, then Deploy > Manage deployments > New version) ===== */
const ACCESS_CODE = 'KTC2026';      // students must type this code to register. '' = no code needed
const TEST_START = '';              // e.g. '2026-11-16 10:00' (IST). '' = no start limit
const TEST_END = '';                // e.g. '2026-11-16 12:00' (IST). '' = no end limit
const CUTOFF_PERCENT = 60;          // Results sheet marks "Selected" at or above this percent
const REQUIRE_RESUME = true;       // resume upload is compulsory
const PRACTICAL_MAX_EACH = 10;      // max marks for each practical task (marks entered manually)
/* ================================================================================ */
const RESUME_FOLDER = 'Korlance Resumes';
const HEADERS = ['Reg ID','Registered At','Name','College','Department','Scroll / Register No','Domain','Email','Mobile','Resume',
  'Status','MCQ Score','MCQ Total','Coding 1','Coding 2','Coding Marks','Coding Max','Total Score','Max Score','Tab Warnings','Warning Log','Time Taken (min)','Submit Reason','Submitted At'];

function onOpen() { SpreadsheetApp.getUi().createMenu('Korlance').addItem('Refresh Results', 'refreshResults').addItem('Recover unsubmitted tests (from autosave)', 'recoverUnsubmitted').addToUi(); }
function refreshResults() { refreshResults_(); SpreadsheetApp.getActive().toast('Results sheet updated'); }

function doGet() { return ContentService.createTextOutput('Korlance Test Camp backend is running.'); }

function doPost(e) {
  let d;
  try { d = JSON.parse(e.postData.contents); } catch (err) { return out({ ok: false, error: String(err) }); }
  try {
    let res;
    if (d.action === 'register') {
      const dup = dupCheck_(d); if (dup) return out(dup);
      const bad = precheck_(d); if (bad) return out({ ok: false, error: bad });
      const file = (d.resume && d.resume.data) ? saveResume_(d) : null;   // slow Drive upload happens OUTSIDE the lock
      res = withLock_(() => register_(d, file));
    } else if (d.action === 'submit') {
      res = withLock_(() => submit_(d));
      if (res.ok && res.mail) sendDone_(res.mail.name, res.mail.email, res.mail.domain, d.id, d.cert);   // mail AFTER the lock is released
      if (res.ok && res.mail) tryRefresh_();
      delete res.mail;
    } else if (d.action === 'progress') res = withLock_(() => progress_(d));
    else if (d.action === 'feedback') res = withLock_(() => feedback_(d));
    else res = { ok: false, error: 'Unknown action' };
    return out(res);
  } catch (err) { return out({ ok: false, error: String(err) }); }
}
function withLock_(fn) { const lock = LockService.getScriptLock(); lock.waitLock(30000); try { return fn(); } finally { lock.releaseLock(); } }
function tryRefresh_() { const l = LockService.getScriptLock(); if (l.tryLock(10000)) { try { refreshResults_(); } catch (e) {} finally { l.releaseLock(); } } }
function out(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

function sheet_(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold').setBackground('#5b0fd1').setFontColor('#ffffff');
    sh.setFrozenRows(1);
  }
  return sh;
}
function folder_() {
  const it = DriveApp.getFoldersByName(RESUME_FOLDER);
  return it.hasNext() ? it.next() : DriveApp.createFolder(RESUME_FOLDER);
}

function dupCheck_(d) {
  const sh = sheet_('Students', HEADERS);
  if (sh.getLastRow() < 2) return null;
  const rows = sh.getRange(2, 1, sh.getLastRow() - 1, HEADERS.length).getValues();
  const email = String(d.email).toLowerCase().trim(), phone = String(d.phone).replace(/\D/g, '').slice(-10);
  for (const r of rows) {
    const sameEmail = String(r[7]).toLowerCase().trim() === email;
    const samePhone = phone && String(r[8]).replace(/\D/g, '').slice(-10) === phone;
    if (sameEmail || samePhone) return { ok: false, duplicate: true, id: r[0], domainName: r[6], status: r[10], at: r[23] || r[1] || '' };
  }
  return null;
}
function precheck_(d) {
  if (ACCESS_CODE && String(d.accessCode || '').trim().toLowerCase() !== ACCESS_CODE.toLowerCase())
    return 'Invalid access code. Please enter the code shared by the Korlance team.';
  const pd = s => Utilities.parseDate(s, 'Asia/Kolkata', 'yyyy-MM-dd HH:mm'), now = new Date();
  if (TEST_START && now < pd(TEST_START)) return 'The test has not started yet. It opens on ' + TEST_START + ' (IST).';
  if (TEST_END && now > pd(TEST_END)) return 'The test window is closed. Registration ended on ' + TEST_END + ' (IST).';
  if (REQUIRE_RESUME && !(d.resume && d.resume.data)) return 'Please upload your resume (PDF or Word).';
  return '';
}
function saveResume_(d) {
  const ext = (d.resume.name.split('.').pop() || 'pdf').toLowerCase();
  const safe = s => String(s).replace(/[^A-Za-z0-9]+/g, '_').slice(0, 30);
  const blob = Utilities.newBlob(Utilities.base64Decode(d.resume.data), d.resume.mime, safe(d.scroll) + '_' + safe(d.name) + '_' + safe(d.domain) + '.' + ext);
  const file = folder_().createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  return file;
}
function register_(d, file) {
  const dup = dupCheck_(d);
  if (dup) { try { if (file) file.setTrashed(true); } catch (e) {} return dup; }
  const sh = sheet_('Students', HEADERS);
  const email = String(d.email).toLowerCase().trim();
  const id = 'KTC-' + Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyMMdd') + '-' + String(sh.getLastRow()).padStart(4, '0');
  const row = sh.getLastRow() + 1;
  sh.getRange(row, 1, 1, HEADERS.length).setValues([[id, new Date(), d.name, d.college, d.dept, String(d.scroll), d.domainName, email, String(d.phone), '', 'Started',
    '', '', '', '', '', '', '', '', '', '', '', '', '']]);
  sh.getRange(row, 6).setNumberFormat('@').setValue(String(d.scroll));
  sh.getRange(row, 9).setNumberFormat('@').setValue(String(d.phone));
  if (file) sh.getRange(row, 10).setFormula('=HYPERLINK("' + file.getUrl() + '","Open Resume")');
  else sh.getRange(row, 10).setValue('Not uploaded');
  sh.getRange(row, 2).setNumberFormat('dd-mmm-yyyy hh:mm');
  return { ok: true, id: id };
}

function submit_(d) {
  const sh = sheet_('Students', HEADERS);
  const last = sh.getLastRow();
  if (last < 2) return { ok: false, error: 'No registration found' };
  const ids = sh.getRange(2, 1, last - 1, 1).getValues().map(r => r[0]);
  const idx = ids.indexOf(d.id);
  if (idx < 0) return { ok: false, error: 'Registration ID not found' };
  const row = idx + 2;
  if (sh.getRange(row, 11).getValue() === 'Submitted') return { ok: true, note: 'already submitted' };
  const c1 = d.coding[0], c2 = d.coding[1];
  const fmt = c => c ? c.passed + '/' + c.total + ' (' + c.marks + ' marks)' : '-';
  sh.getRange(row, 11, 1, 14).setValues([[ 'Submitted', d.mcqScore, d.mcqTotal, fmt(c1), fmt(c2), d.codingMarks, d.codingMax, d.totalScore, d.maxScore,
    d.warnings, d.warnLog, d.minutes, d.reason, new Date() ]]);
  sh.getRange(row, 24).setNumberFormat('dd-mmm-yyyy hh:mm');
  if (d.warnings > 0) sh.getRange(row, 20).setBackground('#ffd6d8');

  const ans = sheet_('Answers', ['Reg ID', 'Name', 'Domain', 'MCQ answers (question no : chosen option, + = correct)']);
  ans.appendRow([d.id, sh.getRange(row, 3).getValue(), sh.getRange(row, 7).getValue(), d.answers]);
  if (d.practical && d.practical.length) {
    const ps = sheet_('Practical', ['Reg ID', 'Name', 'Domain', 'Task', 'Answer', 'Marks (enter manually)']);
    d.practical.forEach(p => ps.appendRow([d.id, sh.getRange(row, 3).getValue(), sh.getRange(row, 7).getValue(), p.title, String(p.answer).slice(0, 45000), '']));
  }
  if (d.coding.length) {
    const cs = sheet_('Code', ['Reg ID', 'Name', 'Problem', 'Language', 'Passed', 'Total', 'Marks', 'Submitted code']);
    d.coding.forEach(c => cs.appendRow([d.id, sh.getRange(row, 3).getValue(), c.title, c.lang, c.passed, c.total, c.marks, String(c.code).slice(0, 45000)]));
  }
  return { ok: true, mail: { name: sh.getRange(row, 3).getValue(), email: sh.getRange(row, 8).getValue(), domain: sh.getRange(row, 7).getValue() } };
}

/* ---------- "Test completed" email (with certificate PDF attached) ---------- */
function sendDone_(name, email, domain, id, cert) {
  try {
    if (!email) return;
    const when = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd MMM yyyy, hh:mm a');
    const subject = 'Korlance Test Camp: Test Completed (' + id + ')';
    const certLine = cert ? 'Your participation certificate is attached to this email.' : '';
    const text = 'Hi ' + name + ',\n\nYou have successfully completed the Korlance Test Camp assessment.\n\n' +
      'Domain: ' + domain + '\nRegistration ID: ' + id + '\nSubmitted at: ' + when + ' (IST)\n\n' +
      'Your responses have been recorded. The result will be announced by the Korlance Team. Please wait for their communication.\n' + certLine + '\n\n' +
      'All the best!\nKorlance Team\nBuild Today. Lead Tomorrow.\n\n(This is an automated confirmation. If it reached your Spam folder, please mark it as Not spam.)';
    const html = '<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;border:1px solid #e5defa;border-radius:12px;overflow:hidden">' +
      '<div style="background:#2a0a6b;color:#fff;padding:18px 22px;font-size:18px;font-weight:bold">Korlance Test Camp</div>' +
      '<div style="padding:22px;color:#1a0b3d;line-height:1.6">' +
      '<p>Hi <b>' + name + '</b>,</p>' +
      '<p>You have <b>successfully completed</b> the Korlance Test Camp assessment.</p>' +
      '<table style="border-collapse:collapse;font-size:14px;margin:12px 0">' +
      '<tr><td style="padding:6px 14px 6px 0;color:#6b5f8f">Domain</td><td><b>' + domain + '</b></td></tr>' +
      '<tr><td style="padding:6px 14px 6px 0;color:#6b5f8f">Registration ID</td><td><b>' + id + '</b></td></tr>' +
      '<tr><td style="padding:6px 14px 6px 0;color:#6b5f8f">Submitted at</td><td><b>' + when + ' (IST)</b></td></tr></table>' +
      '<p>Your responses have been recorded. The <b>result will be announced by the Korlance Team</b>. Please wait for their communication.</p>' +
      (cert ? '<p><b>Your participation certificate is attached to this email.</b></p>' : '') +
      '<p>All the best!<br>Korlance Team<br><i>Build Today. Lead Tomorrow.</i></p><p style="font-size:12px;color:#6b5f8f">This is an automated confirmation. If it reached your Spam folder, please mark it as Not spam.</p></div></div>';
    const opts = { to: String(email), subject: subject, body: text, htmlBody: html, name: 'Korlance Test Camp' };
    if (cert) { try { opts.attachments = [Utilities.newBlob(Utilities.base64Decode(cert), 'application/pdf', 'Korlance_Participation_Certificate_' + id + '.pdf')]; } catch (e2) {} }
    MailApp.sendEmail(opts);
  } catch (err) { /* never block the submission if the email fails */ }
}

/* ---------- feedback from the final page ---------- */
function feedback_(d) {
  const st = sheet_('Students', HEADERS), last = st.getLastRow();
  let name = '', domain = '';
  if (last > 1) { const r = st.getRange(2, 1, last - 1, 7).getValues().find(x => x[0] === d.id); if (r) { name = r[2]; domain = r[6]; } }
  const fb = sheet_('Feedback', ['Reg ID', 'Name', 'Domain', 'Rating (1-5)', 'Difficulty', 'Comments', 'At']);
  fb.appendRow([d.id, name, domain, Number(d.rating) || '', d.difficulty || '', String(d.comment || '').slice(0, 2000), new Date()]);
  fb.getRange(fb.getLastRow(), 7).setNumberFormat('dd-mmm-yyyy hh:mm');
  return { ok: true };
}

/* ---------- Results sheet: rank + Selected / Not selected ---------- */
function refreshResults_() {
  const st = sheet_('Students', HEADERS);
  if (st.getLastRow() < 2) return;
  const rows = st.getRange(2, 1, st.getLastRow() - 1, HEADERS.length).getValues().filter(r => r[10] === 'Submitted');
  const prac = {}, ps = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Practical');
  if (ps && ps.getLastRow() > 1) ps.getRange(2, 1, ps.getLastRow() - 1, 6).getValues().forEach(r => {
    const o = prac[r[0]] || (prac[r[0]] = { sum: 0, n: 0, blank: 0 }); o.n++;
    if (r[5] === '' || r[5] === null) o.blank++; else o.sum += Number(r[5]) || 0;
  });
  const list = rows.map(r => {
    const p = prac[r[0]] || { sum: 0, n: 0, blank: 0 };
    const total = (Number(r[17]) || 0) + p.sum, max = (Number(r[18]) || 0) + p.n * PRACTICAL_MAX_EACH;
    return { r: r, p: p, total: total, max: max, pct: max ? total / max * 100 : 0 };
  }).sort((a, b) => b.pct - a.pct || (Number(a.r[21]) || 0) - (Number(b.r[21]) || 0));
  const head = ['Rank', 'Reg ID', 'Name', 'College', 'Department', 'Register No', 'Domain', 'Email', 'MCQ', 'Coding', 'Practical', 'Total', 'Max', 'Percent', 'Result', 'Tab Warnings', 'Time (min)'];
  const rs = sheet_('Results', head);
  if (rs.getLastRow() > 1) rs.getRange(2, 1, rs.getLastRow() - 1, head.length).clearContent().setBackground(null);
  if (!list.length) return;
  const data = list.map((x, i) => [i + 1, x.r[0], x.r[2], x.r[3], x.r[4], String(x.r[5]), x.r[6], x.r[7], x.r[11], x.r[15] === '' ? '-' : x.r[15],
    x.p.n ? (x.p.blank ? 'Pending' : x.p.sum) : '-', x.total, x.max, Math.round(x.pct * 10) / 10,
    x.p.blank ? 'Practical pending' : (x.pct >= CUTOFF_PERCENT ? 'Selected' : 'Not selected'), x.r[19], x.r[21]]);
  rs.getRange(2, 1, data.length, head.length).setValues(data);
  rs.getRange(2, 6, data.length, 1).setNumberFormat('@');
  rs.getRange(2, 15, data.length, 1).setBackgrounds(data.map(r => [r[14] === 'Selected' ? '#d4f5e4' : (r[14] === 'Not selected' ? '#ffd6d8' : '#fff3cd')]));
}

/* Run this ONCE from the editor to give the script permission to send email */
function authorizeMail() { Logger.log('Mails left today: ' + MailApp.getRemainingDailyQuota()); }

/* ---------- autosave: the browser sends progress every minute, so nothing is lost ---------- */
function progress_(d) {
  const st = sheet_('Students', HEADERS), last = st.getLastRow();
  if (last < 2) return { ok: false, error: 'No registration found' };
  const idx = st.getRange(2, 1, last - 1, 1).getValues().map(r => r[0]).indexOf(d.id);
  if (idx < 0) return { ok: false, error: 'Registration ID not found' };
  const srow = idx + 2;
  if (st.getRange(srow, 11).getValue() === 'Submitted') return { ok: true, note: 'already submitted' };
  const pg = sheet_('Progress', ['Reg ID', 'Name', 'Domain', 'Last saved', 'MCQ answered', 'MCQ score so far', 'Coding marks so far', 'Practical chars', 'Tab warnings', 'Payload (JSON)']);
  (d.coding || []).forEach(c => { c.code = String(c.code || '').slice(0, 6000); });
  (d.practical || []).forEach(p => { p.answer = String(p.answer || '').slice(0, 4000); });
  let json = JSON.stringify(d); if (json.length > 49000) json = JSON.stringify(Object.assign({}, d, { coding: (d.coding || []).map(c => Object.assign({}, c, { code: String(c.code).slice(0, 1500) })) }));
  const answered = String(d.answers || '').split(' ').filter(x => x && !/^\d+:-/.test(x)).length;
  const pchars = (d.practical || []).reduce((n, p) => n + String(p.answer || '').length, 0);
  const pids = pg.getLastRow() > 1 ? pg.getRange(2, 1, pg.getLastRow() - 1, 1).getValues().map(r => r[0]) : [];
  const k = pids.indexOf(d.id), row = k < 0 ? pg.getLastRow() + 1 : k + 2;
  pg.getRange(row, 1, 1, 10).setValues([[d.id, st.getRange(srow, 3).getValue(), st.getRange(srow, 7).getValue(), new Date(), answered, d.mcqScore, d.codingMarks, pchars, d.warnings, json.slice(0, 49500)]]);
  pg.getRange(row, 4).setNumberFormat('dd-mmm-yyyy hh:mm:ss');
  return { ok: true };
}
/* Menu: Korlance > Recover unsubmitted tests. For students whose final submit never reached the sheet, it
   fills their Students/Answers/Code/Practical rows from the last autosave. */
function recoverUnsubmitted() {
  const ss = SpreadsheetApp.getActiveSpreadsheet(), pg = ss.getSheetByName('Progress');
  if (!pg || pg.getLastRow() < 2) { SpreadsheetApp.getActive().toast('No autosaved progress found'); return; }
  let n = 0;
  withLock_(() => {
    const st = sheet_('Students', HEADERS), pending = {};
    st.getRange(2, 1, st.getLastRow() - 1, 11).getValues().forEach(r => { if (r[10] !== 'Submitted') pending[r[0]] = true; });
    pg.getRange(2, 1, pg.getLastRow() - 1, 10).getValues().forEach(r => {
      if (!pending[r[0]] || !r[9]) return;
      try { const d = JSON.parse(r[9]); d.reason = 'Recovered from autosave (student did not submit)'; if (submit_(d).ok) n++; } catch (e) {}
    });
  });
  tryRefresh_();
  SpreadsheetApp.getActive().toast(n + ' unsubmitted test(s) recovered from autosave');
}
