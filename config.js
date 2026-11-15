/* ============ KORLANCE TEST CAMP - SETTINGS (edit only this file) ============ */
window.CONFIG = {
  // 1) Paste your Google Apps Script Web App URL here (see README step 2). Leave "" for demo mode (nothing is saved).
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxG7d9YzTntz0HnMdcS8uvRYFydvbi9Bztn2loN1iuys_AKlBw2V1Q-LZbJnDXTrRdr/exec",

  // 2) Code compiler (Judge0 CE). Public free server below. If it is slow/limited, see README to use your own key.
  JUDGE0_URL: "https://ce.judge0.com",
  JUDGE0_HEADERS: {},          // e.g. RapidAPI: {"X-RapidAPI-Key":"xxxx","X-RapidAPI-Host":"judge0-ce.p.rapidapi.com"}

  // 3) Test rules
  TOTAL_MINUTES: 60,           // ONE shared timer for MCQ + coding together
  MAX_TAB_WARNINGS: 3,         // on this warning the test auto-submits
  REQUIRE_FULLSCREEN: true,    // leaving fullscreen also counts as a warning
  ALLOW_PASTE_IN_EDITOR: false,
  MAX_RESUME_MB: 3,
  SHOW_SCORE_TO_STUDENT: false,
  REQUIRE_ACCESS_CODE: true,   // students must type the access code (the code itself is set in Code.gs)
  CERTIFICATE: false,          // participation certificate (PDF) after the test

  BRAND: "Korlance Test Camp"
};
