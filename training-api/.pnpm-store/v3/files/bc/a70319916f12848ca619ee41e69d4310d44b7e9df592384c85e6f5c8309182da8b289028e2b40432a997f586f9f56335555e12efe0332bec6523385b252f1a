"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var lintSchema_exports = {};
__export(lintSchema_exports, {
  getLintWarnings: () => getLintWarnings,
  getLintWarningsAsText: () => getLintWarningsAsText,
  handleLintPanic: () => handleLintPanic,
  lintSchema: () => lintSchema,
  warningToString: () => warningToString
});
module.exports = __toCommonJS(lintSchema_exports);
var import_chalk = __toESM(require("chalk"));
var import_panic = require("../panic");
var import_wasm = require("../wasm");
function lintSchema({ schema }) {
  const lintResult = import_wasm.prismaFmt.lint(schema);
  const lintDiagnostics = JSON.parse(lintResult);
  return lintDiagnostics;
}
__name(lintSchema, "lintSchema");
function handleLintPanic(tryCb, { schema }) {
  try {
    return tryCb();
  } catch (e) {
    const { message, stack } = (0, import_panic.getWasmError)(e);
    const panic = new import_panic.RustPanic(
      message,
      stack,
      "@prisma/prisma-fmt-wasm lint",
      import_panic.ErrorArea.FMT_CLI,
      void 0,
      schema
    );
    throw panic;
  }
}
__name(handleLintPanic, "handleLintPanic");
function getLintWarnings(lintDiagnostics) {
  return lintDiagnostics.filter(isWarning);
}
__name(getLintWarnings, "getLintWarnings");
function getLintWarningsAsText(lintDiagnostics) {
  const lintWarnings = getLintWarnings(lintDiagnostics);
  const textLines = [];
  if (lintWarnings.length > 0) {
    textLines.push(import_chalk.default.yellow(`
Prisma schema warning${lintWarnings.length > 1 ? "s" : ""}:`));
    for (const warning of lintWarnings) {
      textLines.push(warningToString(warning));
    }
  }
  return textLines.join("\n");
}
__name(getLintWarningsAsText, "getLintWarningsAsText");
function warningToString(warning) {
  return import_chalk.default.yellow(`- ${warning.text}`);
}
__name(warningToString, "warningToString");
function isWarning(diagnostic) {
  return diagnostic.is_warning;
}
__name(isWarning, "isWarning");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getLintWarnings,
  getLintWarningsAsText,
  handleLintPanic,
  lintSchema,
  warningToString
});
