/**
 * KORLANCE TEST CAMP - Google Apps Script backend
 * Bind this script to your Google Sheet (Extensions > Apps Script), paste this code, then Deploy > Web app.
 * Creates sheets: "Students" (main results), "Answers" (MCQ answer strings), "Code" (submitted code).
 * Resumes are stored in a Drive folder; the sheet shows a clickable "Open Resume" link.
 */
const RESUME_FOLDER = 'Korlance Resumes';
const HEADERS = ['Reg ID','Registered At','Name','College','Department','Scroll / Register No','Domain','Email','Mobile','Resume',
  'Status','MCQ Score','MCQ Total','Coding 1','Coding 2','Coding Marks','Coding Max','Total Score','Max Score','Tab Warnings','Warning Log','Time Taken (min)','Submit Reason','Submitted At'];

function doGet() { return ContentService.createTextOutput('Korlance Test Camp backend is running.'); }

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(25000);
  try {
    const d = JSON.parse(e.postData.contents);
    if (d.action === 'register') return out(register_(d));
    if (d.action === 'submit') return out(submit_(d));
    return out({ ok: false, error: 'Unknown action' });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  } finally { lock.releaseLock(); }
}
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

function register_(d) {
  const sh = sheet_('Students', HEADERS);
  const rows = sh.getLastRow() > 1 ? sh.getRange(2, 1, sh.getLastRow() - 1, HEADERS.length).getValues() : [];
  const email = String(d.email).toLowerCase().trim();
  const phone = String(d.phone).replace(/\D/g, '').slice(-10);
  for (const r of rows) {
    const sameEmail = String(r[7]).toLowerCase().trim() === email;
    const samePhone = phone && String(r[8]).replace(/\D/g, '').slice(-10) === phone;
    if (sameEmail || samePhone)
      return { ok: false, duplicate: true, id: r[0], domainName: r[6], status: r[10], at: r[23] || r[1] || '' };
  }
  const id = 'KTC-' + Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyMMdd') + '-' + String(sh.getLastRow()).padStart(4, '0');
  let file = null;
  if (d.resume && d.resume.data) {
    const ext = (d.resume.name.split('.').pop() || 'pdf').toLowerCase();
    const safe = s => String(s).replace(/[^A-Za-z0-9]+/g, '_').slice(0, 30);
    const blob = Utilities.newBlob(Utilities.base64Decode(d.resume.data), d.resume.mime, safe(d.scroll) + '_' + safe(d.name) + '_' + safe(d.domain) + '.' + ext);
    file = folder_().createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  }
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
  if (d.coding.length) {
    const cs = sheet_('Code', ['Reg ID', 'Name', 'Problem', 'Language', 'Passed', 'Total', 'Marks', 'Submitted code']);
    d.coding.forEach(c => cs.appendRow([d.id, sh.getRange(row, 3).getValue(), c.title, c.lang, c.passed, c.total, c.marks, String(c.code).slice(0, 45000)]));
  }
  return { ok: true };
}
