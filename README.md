# Korlance Test Camp - Setup Guide (Tamil + English)

## Files
index.html, style.css, app.js, config.js  -> website
qa.js qb.js qc.js qd.js                   -> 19 domains x 30 MCQ
coding.js                                 -> 22 hard coding problems (5-10 test cases each)
Code.gs                                   -> Google Sheet backend (paste in Apps Script)
logo.jpg                                  -> Korlance logo

## STEP 1 - Google Sheet
1. sheets.new -> name it "Korlance Test Camp Results".
2. Extensions > Apps Script. Delete default code, paste all of Code.gs. Save.
3. Run function `doGet` once -> Allow permissions (Drive + Sheets).

## STEP 2 - Deploy backend
1. Deploy > New deployment > type: Web app.
2. Execute as: Me. Who has access: Anyone. Deploy.
3. Copy the Web App URL (ends with /exec) and paste it in config.js -> APPS_SCRIPT_URL.
   (If you edit Code.gs later: Deploy > Manage deployments > Edit > New version.)

## STEP 3 - Host free with the name "korlancetestcamp"
Option A - Netlify (easiest): app.netlify.com/drop -> drag the whole folder -> Site settings > Change site name -> korlancetestcamp
           URL: https://korlancetestcamp.netlify.app
Option B - GitHub Pages (see chat steps): create repo "korlancetestcamp", upload all files, Settings > Pages > Deploy from branch main.
           URL: https://<your-username>.github.io/korlancetestcamp

## What gets saved in the Sheet ("Students" tab)
Reg ID, time, name, college, department, scroll no, domain, email, mobile, clickable "Open Resume" link,
status, MCQ score, coding 1/2 (passed/total), coding marks, total, tab warnings + log, time taken, submit reason.
Extra tabs: "Answers" (every MCQ answer) and "Code" (submitted code per problem).

## Compiler notes
- Python, Java, C, C++, JavaScript run on Judge0 CE (free public server, may be slow if many students submit at once).
  For a big drive, get a Judge0 key (RapidAPI) and set JUDGE0_URL + JUDGE0_HEADERS in config.js.
- SQL (Data Analytics) runs in the browser using SQLite (MySQL-style helpers DATEDIFF, CONCAT, YEAR, MONTH, DAY added).
  A real MySQL server is not available free in the browser.
- Coding is given only to domains that need it: Full Stack, Data Science, Cloud, AIML, Cyber Security,
  Python-DS, Python-ML, Data Analytics (SQL), IoT, Embedded, App Development.
