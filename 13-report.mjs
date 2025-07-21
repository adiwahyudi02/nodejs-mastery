// report
// the report feature provides ability to make report when error happen in node.js

import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = "13-report.json";

function sampleError() {
  throw new Error("Ups");
}

sampleError();
