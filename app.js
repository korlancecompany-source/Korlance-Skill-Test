(function () {
"use strict";
const C = window.CONFIG, QB = window.QB || {}, CODING = window.CODING || {}, PRAC = window.PRACTICAL || {};
const DOMAINS = [
 ["fs","Full Stack Web Development"],["ds","Data Science"],["cc","Cloud Computing"],["ai","Artificial Intelligence & Machine Learning (AIML)"],
 ["ux","UI-UX"],["cad","Auto CAD & CATIA"],["cs","Cyber Security"],["vl","VLSI"],["pds","Python with Data Science"],["pml","Python with Machine Learning"],
 ["hr","Human Resource"],["da","Data Analytics"],["dm","Digital Marketing"],["iot","Internet of Things (IOT)"],["es","Embedded System"],
 ["hev","Hybrid Electric Vehicles"],["app","App Development"],["ag","Agriculture Domains"],["asr","Auto CAD, SketchUp, Revit"]
];
const DNAME = Object.fromEntries(DOMAINS);
const LANG = { python:{n:"Python 3",id:71,mode:"python"}, java:{n:"Java",id:62,mode:"text/x-java"}, c:{n:"C",id:50,mode:"text/x-csrc"},
  cpp:{n:"C++",id:54,mode:"text/x-c++src"}, javascript:{n:"JavaScript (Node)",id:63,mode:"javascript"}, sql:{n:"SQL (MySQL-style)",id:0,mode:"text/x-sql"} };
const STARTER = {
 python:'import sys\n\ndef main():\n    lines = sys.stdin.read().split("\\n")\n    # TODO: write your solution\n    print()\n\nmain()\n',
 java:'import java.util.*;\nimport java.io.*;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: write your solution\n    }\n}\n',
 c:'#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    // TODO: write your solution\n    return 0;\n}\n',
 cpp:'#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    // TODO: write your solution\n    return 0;\n}\n',
 javascript:'const lines = require("fs").readFileSync(0, "utf8").split("\\n");\n// TODO: write your solution\nconsole.log();\n',
 sql:'-- Write your SELECT query here\nSELECT \n'
};
const $ = s => document.querySelector(s);
const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const show = id => { ["reg","resume","instr","test","done"].forEach(n => $("#screen-" + n).classList.toggle("hidden", n !== id)); window.scrollTo(0, 0); };
const SKEY = "korlance_session_v1";
{ const hc = $("#h_chips"), nm = DOMAINS.map(d => d[1].split(" (")[0]);
  if (hc) hc.innerHTML = nm.slice(0, 9).map(n => `<span>${n}</span>`).join("") + (nm.length > 9 ? `<span>+${nm.length - 9} more</span>` : ""); }
function goFs() { if (C.REQUIRE_FULLSCREEN && !document.fullscreenElement) { try { const p = document.documentElement.requestFullscreen(); if (p && p.catch) p.catch(() => {}); } catch (e) {} } }

let S = { student:null, id:null, key:"", paper:[], ans:[], cur:0, section:"mcq", coding:[], prac:[], cp:0, warns:0, log:[], startAt:0, endAt:0,
          timer:null, active:false, submitted:false, lastV:0, editor:null, sqlP:null, busy:false };

/* ---------------- boot ---------------- */
const dsel = $("#f_domain");
DOMAINS.forEach(([k, n]) => dsel.insertAdjacentHTML("beforeend", `<option value="${k}">${esc(n)}</option>`));
if (!C.APPS_SCRIPT_URL) $("#demoBar").classList.remove("hidden");
$("#i_max").textContent = C.MAX_TAB_WARNINGS;
try { const old = JSON.parse(localStorage.getItem(SKEY) || "null");
  if (old && !old.submitted && old.endAt) { S._old = old; $("#resumeTxt").textContent = `${old.student.name}, your ${DNAME[old.key]} test is still in progress.`; show("resume"); } } catch (e) {}

/* already submitted on this device -> show the final page again */
const DONE_KEY = "korlance_done";
try { const dn = JSON.parse(localStorage.getItem(DONE_KEY) || "null");
  if (dn && dn.id) { S.student = { name:dn.name, scroll:dn.scroll, email:dn.email }; S.key = dn.key; S.id = dn.id; S.submitted = true; S.active = false; showFinal(dn.at, true); } } catch (e) {}

/* ---------------- backend ---------------- */
async function api(payload) {
  if (!C.APPS_SCRIPT_URL) return { ok:true, id:"DEMO-" + Date.now().toString(36).toUpperCase(), demo:true };
  const r = await fetch(C.APPS_SCRIPT_URL, { method:"POST", headers:{ "Content-Type":"text/plain;charset=utf-8" }, body:JSON.stringify(payload) });
  return r.json();
}
const fileToB64 = f => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(String(r.result).split(",")[1]); r.onerror = rej; r.readAsDataURL(f); });

/* ---------------- registration ---------------- */
$("#regForm").addEventListener("submit", async e => {
  e.preventDefault();
  const v = id => $("#" + id).value.trim(), err = $("#regErr"), btn = $("#regBtn");
  const fail = m => { err.textContent = m; err.classList.remove("hidden"); };
  err.classList.add("hidden");
  const d = { name:v("f_name"), college:v("f_college"), dept:v("f_dept"), scroll:v("f_scroll"), domain:v("f_domain"), email:v("f_email").toLowerCase(), phone:v("f_phone") };
  if (!d.name || !d.college || !d.dept || !d.scroll || !d.domain) return fail("Please fill all the fields.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email)) return fail("Enter a valid email address.");
  if (!/^[6-9]\d{9}$/.test(d.phone)) return fail("Enter a valid 10-digit mobile number.");
  const f = $("#f_resume").files[0];
  /* resume is optional */
  if (f && !/\.(pdf|doc|docx)$/i.test(f.name)) return fail("Resume must be a PDF, DOC or DOCX file.");
  if (f && f.size > C.MAX_RESUME_MB * 1048576) return fail(`Resume must be under ${C.MAX_RESUME_MB} MB.`);
  btn.disabled = true; btn.innerHTML = '<span class="spin"></span> Saving...';
  try {
    const b64 = f ? await fileToB64(f) : "";
    const res = await api({ action:"register", ...d, domainName:DNAME[d.domain], resume:f ? { name:f.name, mime:f.type || "application/octet-stream", data:b64 } : null });
    if (res.duplicate) {
      S.student = { name:d.name, scroll:d.scroll, email:d.email }; S.key = res.domainName; S.id = res.id; S.submitted = true;
      btn.disabled = false; btn.textContent = "Continue →";
      showFinal(res.at ? new Date(res.at).toISOString() : new Date().toISOString(), true, "", null, res.status !== "Submitted"); return;
    }
    if (!res.ok) throw new Error(res.error || "Registration failed");
    S.student = d; S.id = res.id; S.key = d.domain;
    $("#i_name").textContent = d.name;
    const hasCode = (CODING[d.domain] || []).length > 0, mins = C.TOTAL_MINUTES;
    $("#i_info").innerHTML = `<div><b>${esc(DNAME[d.domain].split(" (")[0])}</b>Your domain</div><div><b>30</b>MCQ questions</div>` +
      (hasCode ? `<div><b>${CODING[d.domain].length}</b>Coding problems</div>` : (PRAC[d.domain] ? `<div><b>${PRAC[d.domain].length}</b>Practical tasks</div>` : `<div><b>-</b>No coding round</div>`)) + `<div><b>${mins} min</b>Total time</div>`;
    show("instr");
  } catch (ex) { fail(ex.message.includes("Failed to fetch") ? "Network error. Check your internet and try again." : ex.message); }
  btn.disabled = false; btn.textContent = "Continue →";
});
$("#agree").addEventListener("change", e => $("#startBtn").disabled = !e.target.checked);

/* ---------------- start / resume ---------------- */
$("#startBtn").addEventListener("click", async () => {
  goFs();
  const k = S.key, pool = QB[k] || [];
  S.paper = shuffle(pool).slice(0, 30).map(q => { const opts = shuffle(q.slice(1)); return { q:q[0], opts, ans:opts.indexOf(q[1]) }; });
  S.ans = S.paper.map(() => -1);
  S.coding = (CODING[k] || []).map(p => ({ p, lang:p.langs[0], code:{}, res:null, passed:0, total:p.tests.length, dirty:false }));
  S.prac = S.coding.length ? [] : (PRAC[k] || []).map(p => ({ t:p.title, q:p.q, a:"" }));
  const mins = C.TOTAL_MINUTES;
  S.startAt = Date.now(); S.endAt = S.startAt + mins * 60000; S.warns = 0; S.log = [];
  beginTest();
});
$("#resumeBtn").addEventListener("click", async () => {
  const o = S._old; Object.assign(S, o); S.student = o.student;
  S.coding.forEach(c => { c.p = (CODING[S.key] || []).find(p => p.id === c.pid); });
  S.coding = S.coding.filter(c => c.p); S.prac = S.prac || [];
  goFs();
  $("#i_name").textContent = S.student.name; beginTest(true);
});
function beginTest(resumed) {
  S.active = true; S.submitted = false; S.section = "mcq";
  document.body.classList.add("testing");
  $("#t_domain").textContent = DNAME[S.key] + " | " + S.student.name;
  const tabs = $("#tabs"); tabs.innerHTML = `<div class="tab on" data-s="mcq">MCQ (30)</div>` + (S.coding.length ? `<div class="tab" data-s="code">Coding (${S.coding.length})</div>` : "") + (S.prac.length ? `<div class="tab" data-s="prac">Practical (${S.prac.length})</div>` : "");
  tabs.onclick = e => { const t = e.target.closest(".tab"); if (t) switchSection(t.dataset.s); };
  show("test"); renderQ(); updWarn(); tick(); clearInterval(S.timer); S.timer = setInterval(tick, 1000);
  attachGuards();
  if (resumed) violation("Page reloaded");
  save();
}
function switchSection(s) {
  S.section = s; document.querySelectorAll(".tab").forEach(t => t.classList.toggle("on", t.dataset.s === s));
  $("#v_mcq").classList.toggle("hidden", s !== "mcq"); $("#v_code").classList.toggle("hidden", s !== "code"); $("#v_prac").classList.toggle("hidden", s !== "prac");
  if (s === "code") renderCode();
  if (s === "prac") renderPrac();
}
function tick() {
  const left = Math.max(0, S.endAt - Date.now()), m = Math.floor(left / 60000), s = Math.floor(left % 60000 / 1000);
  const el = $("#t_time"); el.textContent = `⏱ ${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`; el.classList.toggle("low", left < 300000);
  if (left <= 0 && !S.submitted && !S.busy) submitTest("Time over (auto-submitted)");
}
function save() {
  if (S.submitted) return;
  try { localStorage.setItem(SKEY, JSON.stringify({ student:S.student, id:S.id, key:S.key, paper:S.paper, ans:S.ans, cur:S.cur, warns:S.warns, log:S.log, prac:S.prac, startAt:S.startAt, endAt:S.endAt,
    coding:S.coding.map(c => ({ pid:c.p.id, lang:c.lang, code:c.code, res:c.res, passed:c.passed, total:c.total, dirty:c.dirty })), submitted:false })); } catch (e) {}
}

/* ---------------- MCQ ---------------- */
function renderQ() {
  const q = S.paper[S.cur];
  $("#q_no").textContent = `QUESTION ${S.cur + 1} OF ${S.paper.length}`;
  $("#q_text").textContent = q.q;
  $("#q_opts").innerHTML = q.opts.map((o, i) => `<div class="opt ${S.ans[S.cur] === i ? "sel" : ""}" data-i="${i}"><div class="l">${"ABCD"[i]}</div><span class="t">${esc(o)}</span></div>`).join("");
  $("#pgrid").innerHTML = S.paper.map((_, i) => `<button data-i="${i}" class="${S.ans[i] >= 0 ? "ans" : ""} ${i === S.cur ? "cur" : ""}">${i + 1}</button>`).join("");
  const n = S.ans.filter(a => a >= 0).length; $("#q_count").textContent = `${n} of ${S.paper.length} answered`;
  $("#q_prev").disabled = S.cur === 0;
  const last = S.cur === S.paper.length - 1;
  $("#q_next").textContent = last ? (S.coding.length ? "Save & Go to Coding Round →" : S.prac.length ? "Save & Go to Practical Round →" : "Save Answer ✓") : "Save & Next →";
  $("#toCode").classList.toggle("hidden", !(S.coding.length || S.prac.length)); $("#toCode").textContent = S.coding.length ? "Finished MCQ? Go to Coding Round →" : "Finished MCQ? Go to Practical Round →";
}
$("#q_opts").addEventListener("click", e => { const o = e.target.closest(".opt"); if (!o) return; S.ans[S.cur] = +o.dataset.i; renderQ(); save(); });
$("#pgrid").addEventListener("click", e => { const b = e.target.closest("button"); if (b) { S.cur = +b.dataset.i; renderQ(); save(); } });
$("#q_prev").onclick = () => { if (S.cur > 0) { S.cur--; renderQ(); } };
$("#q_next").onclick = () => { if (S.cur < S.paper.length - 1) { S.cur++; renderQ(); save(); } else if (S.coding.length || S.prac.length) { save(); switchSection(S.coding.length ? "code" : "prac"); } else { renderQ(); save(); } };
$("#toCode").onclick = () => { save(); switchSection(S.coding.length ? "code" : "prac"); window.scrollTo(0, 0); };
function renderPrac() {
  $("#v_prac").innerHTML = S.prac.map((p, i) => `<div class="pcard"><small>PRACTICAL TASK ${i + 1} OF ${S.prac.length}</small><h3>${esc(p.t)}</h3><p>${esc(p.q)}</p>
    <textarea data-i="${i}" placeholder="Type your answer here. Be clear and step by step. You can write code, steps or points." spellcheck="false">${esc(p.a)}</textarea><div class="cnt" id="pc${i}">${p.a.length} characters</div></div>`).join("") +
    `<p class="pnote">Practical answers are reviewed and marked by the Korlance team. Your answers save automatically.</p>`;
  document.querySelectorAll("#v_prac textarea").forEach(t => t.oninput = () => { const i = +t.dataset.i; S.prac[i].a = t.value; $("#pc" + i).textContent = t.value.length + " characters"; clearTimeout(S._pt); S._pt = setTimeout(save, 600); });
}
$("#q_clear").onclick = () => { S.ans[S.cur] = -1; renderQ(); save(); };

/* ---------------- Coding UI ---------------- */
function curProb() { return S.coding[S.cp]; }
function renderCode() {
  $("#ptabs").innerHTML = S.coding.map((c, i) => `<div class="ptab ${i === S.cp ? "on" : ""}" data-i="${i}">Problem ${i + 1}<em>${c.res ? c.passed + "/" + c.total : ""}</em></div>`).join("");
  const c = curProb(), p = c.p, samples = p.tests.filter(t => !t.hidden);
  let h = `<span class="badge">${esc(p.difficulty)}</span><h3>${esc(p.title)}</h3><div>${esc(p.desc).replace(/\n/g, "<br>")}</div>
    <h5>Input format</h5><pre>${esc(p.input)}</pre><h5>Output format</h5><pre>${esc(p.output)}</pre><h5>Constraints</h5><pre>${esc(p.constraints)}</pre>`;
  if (p.type === "sql") h += `<h5>Sample data (Test 1)</h5><pre>${esc(p.tests[0].setup.slice(0, 700))}${p.tests[0].setup.length > 700 ? " ..." : ""}</pre>`;
  else samples.forEach((t, i) => h += `<h5>Sample ${i + 1}</h5><b style="font-size:12px">Input</b><pre>${esc(t.input)}</pre><b style="font-size:12px">Output</b><pre>${esc(t.output)}</pre>`);
  h += `<h5>Evaluation</h5><div style="font-size:13px">${p.tests.length} test cases (${p.tests.filter(t => t.hidden).length} hidden). Marks are given by test cases passed.</div>`;
  $("#prob").innerHTML = h;
  const sel = $("#langSel"); sel.innerHTML = p.langs.map(l => `<option value="${l}" ${l === c.lang ? "selected" : ""}>${LANG[l].n}</option>`).join(""); sel.disabled = p.langs.length === 1;
  $("#cinLabel").classList.toggle("hidden", p.type === "sql"); $("#cin").classList.toggle("hidden", p.type === "sql");
  $("#runBtn").innerHTML = p.type === "sql" ? "▶ Run Query (Test 1)" : "▶ Run";
  if (p.type !== "sql") $("#cin").value = samples[0] ? samples[0].input : "";
  mountEditor(); showResult(c);
}
function mountEditor() {
  const c = curProb();
  if (!S.editor) {
    S.editor = CodeMirror($("#editor"), { lineNumbers:true, theme:"dracula", indentUnit:4, tabSize:4, indentWithTabs:false, lineWrapping:false,
      extraKeys:{ Tab: cm => cm.somethingSelected() ? cm.indentSelection("add") : cm.replaceSelection("    ", "end") } });
    S.editor.on("change", () => { const cc = curProb(); if (!cc || S.loading) return; cc.code[cc.lang] = S.editor.getValue(); cc.dirty = true; clearTimeout(S.sv); S.sv = setTimeout(save, 600); });
    if (!C.ALLOW_PASTE_IN_EDITOR) { ["paste", "drop"].forEach(ev => S.editor.getWrapperElement().addEventListener(ev, e => { e.preventDefault(); e.stopPropagation(); }, true)); }
    else $("#edHint").textContent = "";
  }
  S.loading = true; S.editor.setOption("mode", LANG[c.lang].mode);
  S.editor.setValue(c.code[c.lang] != null ? c.code[c.lang] : STARTER[c.lang]); S.loading = false;
  setTimeout(() => S.editor.refresh(), 30);
}
$("#ptabs").addEventListener("click", e => { const t = e.target.closest(".ptab"); if (t) { S.cp = +t.dataset.i; renderCode(); } });
$("#langSel").onchange = e => { const c = curProb(); c.lang = e.target.value; mountEditor(); save(); };
$("#resetBtn").onclick = () => { const c = curProb(); c.code[c.lang] = STARTER[c.lang]; mountEditor(); };

/* ---------------- Judge0 ---------------- */
const J0H = () => Object.assign({ "Content-Type":"application/json" }, C.JUDGE0_HEADERS || {});
async function runBatch(code, lang, inputs) {
  const subs = inputs.map(i => ({ source_code:code, language_id:LANG[lang].id, stdin:i, cpu_time_limit:3, wall_time_limit:8, memory_limit:256000 }));
  let r = await fetch(`${C.JUDGE0_URL}/submissions/batch?base64_encoded=false`, { method:"POST", headers:J0H(), body:JSON.stringify({ submissions:subs }) });
  if (!r.ok) throw new Error("Compiler server error (" + r.status + "). Try again in a few seconds.");
  const tokens = (await r.json()).map(x => x.token);
  const url = `${C.JUDGE0_URL}/submissions/batch?base64_encoded=false&fields=token,stdout,stderr,compile_output,message,status,time&tokens=${tokens.join(",")}`;
  for (let k = 0; k < 45; k++) {
    await new Promise(res => setTimeout(res, k < 3 ? 900 : 1500));
    r = await fetch(url, { headers:J0H() }); if (!r.ok) continue;
    const d = (await r.json()).submissions; if (d && d.every(x => x.status && x.status.id > 2)) return tokens.map(t => d.find(x => x.token === t));
  }
  throw new Error("Compiler timed out. Please try again.");
}
const norm = s => String(s == null ? "" : s).replace(/\r/g, "").split("\n").map(l => l.replace(/\s+$/, "")).join("\n").replace(/\n+$/, "");
function verdict(r, exp) {
  const id = r.status.id;
  if (id === 6) return { ok:false, why:"Compile Error", detail:r.compile_output };
  if (id === 5) return { ok:false, why:"Time Limit Exceeded" };
  if (id > 6) return { ok:false, why:"Runtime Error", detail:r.stderr || r.message };
  const got = norm(r.stdout); return got === norm(exp) ? { ok:true, got } : { ok:false, why:"Wrong Answer", got };
}

/* ---------------- SQL (sql.js) ---------------- */
async function sqlLib() {
  if (!S.sqlP) S.sqlP = initSqlJs({ locateFile: f => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${f}` });
  return S.sqlP;
}
function newDb(SQL, setup) {
  const db = new SQL.Database();
  const d = x => Date.parse(String(x).slice(0, 10) + "T00:00:00Z");
  db.create_function("DATEDIFF", (a, b) => Math.round((d(a) - d(b)) / 864e5));
  db.create_function("CONCAT", (...a) => a.join(""));
  db.create_function("YEAR", a => +String(a).slice(0, 4)); db.create_function("MONTH", a => +String(a).slice(5, 7)); db.create_function("DAY", a => +String(a).slice(8, 10));
  db.run(setup); return db;
}
function sqlExec(db, q) { const r = db.exec(q); return r.length ? r[r.length - 1] : { columns:[], values:[] }; }
const sqlNorm = r => JSON.stringify(r.values.map(row => row.map(v => typeof v === "number" ? Math.round(v * 1e6) / 1e6 : v)));
function tableHtml(r) {
  if (!r.columns.length) return "<i>(no rows returned)</i>";
  return `<table class="tbl"><tr>${r.columns.map(c => `<th>${esc(c)}</th>`).join("")}</tr>${r.values.slice(0, 30).map(v => `<tr>${v.map(x => `<td>${esc(x)}</td>`).join("")}</tr>`).join("")}</table>${r.values.length > 30 ? "<i>showing 30 rows</i>" : ""}`;
}
function guardSql(q) { if (!/^\s*(--[^\n]*\n\s*)*(select|with)\b/i.test(q)) throw new Error("Only SELECT / WITH queries are allowed."); }

/* ---------------- run buttons ---------------- */
function setBusy(b, on, label) { b.disabled = on; if (on) { b.dataset.t = b.innerHTML; b.innerHTML = '<span class="spin"></span> ' + label; } else if (b.dataset.t) b.innerHTML = b.dataset.t; }
function showResult(c) {
  const el = $("#res"); if (!c.res) { el.innerHTML = ""; return; }
  el.innerHTML = c.res;
}
$("#runBtn").onclick = async () => {
  const c = curProb(), p = c.p, code = S.editor.getValue(), b = $("#runBtn"), el = $("#res");
  setBusy(b, true, "Running..."); el.innerHTML = "";
  try {
    if (p.type === "sql") {
      guardSql(code); const SQL = await sqlLib(), db = newDb(SQL, p.tests[0].setup);
      const r = sqlExec(db, code), ref = sqlExec(db, p.ref), ok = sqlNorm(r) === sqlNorm(ref);
      el.innerHTML = `<div class="rrow ${ok ? "p" : "f"}"><b class="${ok ? "p" : "f"}">${ok ? "Output matches expected (Test 1)" : "Output differs from expected (Test 1)"}</b></div><b style="font-size:12px">Your output</b><br>${tableHtml(r)}${ok ? "" : `<b style="font-size:12px">Expected</b><br>${tableHtml(ref)}`}`;
    } else {
      const [r] = await runBatch(code, c.lang, [$("#cin").value]);
      const out = r.status.id === 6 ? r.compile_output : (r.stdout || "") + (r.stderr ? "\n[stderr]\n" + r.stderr : "");
      el.innerHTML = `<div class="rrow"><b>${esc(r.status.description)}</b> ${r.time ? "| " + r.time + "s" : ""}</div><pre>${esc(out || "(no output)")}</pre>`;
    }
  } catch (ex) { el.innerHTML = `<div class="err">${esc(ex.message)}</div>`; }
  setBusy(b, false);
};
async function evaluate(c) {
  const p = c.p, code = c.code[c.lang] != null ? c.code[c.lang] : STARTER[c.lang], rows = [];
  let passed = 0;
  if (p.type === "sql") {
    guardSql(code); const SQL = await sqlLib();
    p.tests.forEach((t, i) => {
      let ok = false, why = "Wrong Answer", got = "", exp = "";
      try { const db = newDb(SQL, t.setup), r = sqlExec(db, code), ref = sqlExec(db, p.ref); ok = sqlNorm(r) === sqlNorm(ref); got = tableHtml(r); exp = tableHtml(ref); } catch (ex) { why = "Query Error: " + ex.message; }
      if (ok) passed++; rows.push({ i, hidden:t.hidden, ok, why, htmlGot:got, htmlExp:exp });
    });
  } else {
    const rs = await runBatch(code, c.lang, p.tests.map(t => t.input));
    rs.forEach((r, i) => { const t = p.tests[i], v = verdict(r, t.output); if (v.ok) passed++; rows.push({ i, hidden:t.hidden, input:t.input, exp:t.output, ...v }); });
  }
  c.passed = passed; c.total = p.tests.length; c.dirty = false;
  let h = `<div class="sum">Passed ${passed} / ${c.total} test cases</div>`;
  rows.forEach(r => {
    h += `<div class="rrow ${r.ok ? "p" : "f"}"><b class="${r.ok ? "p" : "f"}">${r.ok ? "✔ Passed" : "✘ " + esc(r.why)}</b> &nbsp; Test ${r.i + 1}${r.hidden ? " (hidden)" : " (sample)"}`;
    if (!r.ok && !r.hidden) h += r.htmlGot != null ? `<br>${r.htmlGot}<br>Expected:${r.htmlExp}` : `<br><small>Input</small><pre>${esc(r.input)}</pre><small>Expected</small><pre>${esc(r.exp)}</pre><small>Your output</small><pre>${esc(r.got != null ? r.got : r.detail || "")}</pre>`;
    else if (!r.ok && r.detail) h += `<pre>${esc(String(r.detail).slice(0, 400))}</pre>`;
    h += `</div>`;
  });
  c.res = h; return h;
}
$("#runAllBtn").onclick = async () => {
  const c = curProb(), b = $("#runAllBtn"); setBusy(b, true, "Evaluating..."); $("#res").innerHTML = "";
  try { await evaluate(c); showResult(c); renderTabsOnly(); save(); } catch (ex) { $("#res").innerHTML = `<div class="err">${esc(ex.message)}</div>`; }
  setBusy(b, false);
};
function renderTabsOnly() { $("#ptabs").innerHTML = S.coding.map((c, i) => `<div class="ptab ${i === S.cp ? "on" : ""}" data-i="${i}">Problem ${i + 1}<em>${c.res ? c.passed + "/" + c.total : ""}</em></div>`).join(""); }

/* ---------------- proctoring ---------------- */
function attachGuards() {
  if (S.guards) return; S.guards = true;
  document.addEventListener("visibilitychange", onVis); window.addEventListener("blur", onBlur);
  document.addEventListener("fullscreenchange", onFs);
  ["contextmenu", "copy", "cut", "paste"].forEach(ev => document.addEventListener(ev, onBlock, true));
  window.addEventListener("beforeunload", onUnload); document.addEventListener("keydown", onKey, true);
}
function detachGuards() {
  S.guards = false; document.removeEventListener("visibilitychange", onVis); window.removeEventListener("blur", onBlur);
  document.removeEventListener("fullscreenchange", onFs); ["contextmenu", "copy", "cut", "paste"].forEach(ev => document.removeEventListener(ev, onBlock, true));
  window.removeEventListener("beforeunload", onUnload); document.removeEventListener("keydown", onKey, true); document.body.classList.remove("testing");
}
const onVis = () => { if (document.hidden) violation("Switched tab / minimised window"); };
const onBlur = () => violation("Window lost focus");
const onFs = () => { if (!document.fullscreenElement && C.REQUIRE_FULLSCREEN && S.active) violation("Exited full-screen"); };
const onBlock = e => { if (e.target.closest && e.target.closest("#f_name,#cin")) return; e.preventDefault(); };
const onUnload = e => { if (S.active && !S.submitted) { e.preventDefault(); e.returnValue = ""; } };
const onKey = e => { const k = e.key.toLowerCase(); if (e.key === "F12" || (e.ctrlKey && e.shiftKey && "ijc".includes(k)) || (e.ctrlKey && k === "u")) e.preventDefault(); };
function updWarn() { const w = $("#t_warn"); w.textContent = `Warnings ${S.warns}/${C.MAX_TAB_WARNINGS}`; w.classList.toggle("warn", S.warns > 0); }
function violation(reason) {
  if (!S.active || S.submitted || S.busy) return;
  const now = Date.now(); if (now - S.lastV < 1500) return; S.lastV = now;
  S.warns++; S.log.push(reason + " @ " + new Date().toLocaleTimeString()); updWarn(); save();
  if (S.warns >= C.MAX_TAB_WARNINGS) { submitTest("Auto-submitted: " + C.MAX_TAB_WARNINGS + " tab-switch warnings"); return; }
  const left = C.MAX_TAB_WARNINGS - S.warns;
  modal("⚠️", `Warning ${S.warns} of ${C.MAX_TAB_WARNINGS}`, `${reason}. Stay on this page during the test. <b>${left} more warning${left > 1 ? "s" : ""}</b> and your test will be submitted automatically.`,
    [["I understand, continue", "btn", () => { closeModal(); goFs(); }]]);
}

/* ---------------- modal ---------------- */
function modal(ic, h, p, btns) {
  $("#m_ic").textContent = ic; $("#m_h").textContent = h; $("#m_p").innerHTML = p; const row = $("#m_row"); row.innerHTML = "";
  btns.forEach(([t, cls, fn]) => { const b = document.createElement("button"); b.className = "btn " + (cls || ""); b.textContent = t; b.onclick = fn; row.appendChild(b); });
  $("#modal").classList.remove("hidden");
}
const closeModal = () => $("#modal").classList.add("hidden");

/* ---------------- submit ---------------- */
$("#submitBtn").onclick = () => {
  const un = S.ans.filter(a => a < 0).length;
  const codeInfo = S.coding.length ? `<br>Coding: ${S.coding.filter(c => c.res).length} of ${S.coding.length} problems evaluated (unevaluated code is auto-checked on submit).` : "";
  const pracInfo = S.prac.length ? `<br>Practical: ${S.prac.filter(p => p.a.trim()).length} of ${S.prac.length} tasks answered.` : "";
  modal("📝", "Submit your test?", `You have <b>${un}</b> unanswered MCQ${un === 1 ? "" : "s"}.${codeInfo}${pracInfo}<br>You cannot change answers after submitting.`,
    [["Go back", "ghost", closeModal], ["Yes, Submit", "ok", () => { closeModal(); submitTest("Submitted by student"); }]]);
};
async function submitTest(reason) {
  if (S.submitted || S.busy) return; S.busy = true; closeModal();
  modal("⏳", "Submitting your test...", "Evaluating your code and saving your answers. Please do not close this window.", []);
  S.active = false; clearInterval(S.timer);
  const t = $("#modal"); void t;
  for (const c of S.coding) { if (c.dirty || (!c.res && (c.code[c.lang] || "").trim() && c.code[c.lang] !== STARTER[c.lang])) { try { await evaluate(c); } catch (e) {} } }
  const mcq = S.paper.reduce((n, q, i) => n + (S.ans[i] === q.ans ? 1 : 0), 0);
  const cod = S.coding.map(c => ({ id:c.p.id, title:c.p.title, lang:c.lang, passed:c.passed, total:c.total, marks:+(10 * c.passed / c.total).toFixed(1), code:c.code[c.lang] || "" }));
  const codeMarks = cod.reduce((n, c) => n + c.marks, 0);
  const payload = { action:"submit", id:S.id, email:S.student.email, domain:S.key, mcqScore:mcq, mcqTotal:S.paper.length, coding:cod, codingMarks:+codeMarks.toFixed(1), codingMax:cod.length * 10,
    totalScore:+(mcq + codeMarks).toFixed(1), maxScore:S.paper.length + cod.length * 10, practical:S.prac.map(p => ({ title:p.t, question:p.q, answer:p.a })), warnings:S.warns, warnLog:S.log.join(" | "), reason,
    minutes:+((Date.now() - S.startAt) / 60000).toFixed(1),
    answers:S.paper.map((q, i) => `${i + 1}:${S.ans[i] < 0 ? "-" : "ABCD"[S.ans[i]]}${S.ans[i] === q.ans ? "+" : ""}`).join(" ") };
  S.payload = payload; try { localStorage.setItem("korlance_backup", JSON.stringify({ student:S.student, payload })); } catch (e) {}
  let ok = false, lastErr = "";
  for (let a = 0; a < 4 && !ok; a++) { try { const r = await api(payload); if (r.ok) ok = true; else lastErr = r.error; } catch (e) { lastErr = e.message; await new Promise(r => setTimeout(r, 1500 * (a + 1))); } }
  S.busy = false; closeModal(); detachGuards(); if (document.fullscreenElement) { try { document.exitFullscreen(); } catch (e) {} }
  if (ok) { S.submitted = true; try { localStorage.removeItem(SKEY); localStorage.removeItem("korlance_backup"); } catch (e) {} finishScreen(reason, payload); }
  else {
    S.submitted = true; try { localStorage.removeItem(SKEY); } catch (e) {}
    $("#d_ic").textContent = "⚠️"; $("#d_h").textContent = "Network problem while saving";
    $("#d_p").textContent = "Your answers are safe on this device. Please connect to the internet and press Retry. Do not close this tab.";
    $("#d_actions").innerHTML = `<button class="btn" id="retry">Retry Submit</button>`;
    $("#retry").onclick = async () => { $("#retry").disabled = true; try { const r = await api(S.payload); if (r.ok) { try { localStorage.removeItem("korlance_backup"); } catch (e) {} finishScreen(reason, S.payload); } else alert("Server said: " + r.error); } catch (e) { alert("Still offline. Try again."); } $("#retry").disabled = false; };
    show("done");
  }
}
function finishScreen(reason, p) {
  const at = new Date().toISOString();
  try { localStorage.setItem(DONE_KEY, JSON.stringify({ id:S.id, key:S.key, name:S.student.name, scroll:S.student.scroll, email:S.student.email, at })); localStorage.removeItem(SKEY); } catch (e) {}
  showFinal(at, false, reason, p);
}
function showFinal(at, again, reason, p, started) {
  const ic = $("#d_ic"); ic.textContent = "\u2713"; ic.classList.add("ok");
  $("#d_h").textContent = started ? "Attempt Already Recorded" : "Assessment Submitted";
  let t = started ? "This email or mobile number has already been used to attempt this assessment. Only one attempt is allowed. The Korlance team will contact you if needed. You may now close this window." : again ? "You have already completed this assessment. Your responses have been recorded. The Korlance team will contact you with the results. You may now close this window."
    : "Thank you! Your responses have been recorded successfully. A confirmation email is being sent to your registered email address (please check your Spam folder too). The Korlance team will contact you with the results. You may now close this window.";
  if (!again && /Auto-submitted|Time over/.test(reason || "")) t += `<br><span style="color:#b4232a">${esc(reason)}</span>`;
  if (!again && p && C.SHOW_SCORE_TO_STUDENT) t += `<br>Score: <b>${p.totalScore} / ${p.maxScore}</b>`;
  $("#d_p").innerHTML = t;
  const st = S.student, row = (k, v) => `<tr><td>${k}</td><td><b>${esc(String(v))}</b></td></tr>`;
  $("#d_tbl").innerHTML = row("Name", st.name) + row("Domain", (DNAME[S.key] || S.key).split(" (")[0]) + row("Register No", st.scroll) + row("Email", st.email) + row("Reg ID", S.id) + row(started ? "Attempted at" : "Submitted at", new Date(at).toLocaleString("en-IN"));
  $("#d_actions").innerHTML = ""; show("done");
}
})();
