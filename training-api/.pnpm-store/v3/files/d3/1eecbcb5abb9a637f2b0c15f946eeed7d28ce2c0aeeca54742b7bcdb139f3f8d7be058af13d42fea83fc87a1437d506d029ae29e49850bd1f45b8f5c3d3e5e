"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var log_exports = {};
__export(log_exports, {
  convertLog: () => convertLog,
  getBacktrace: () => getBacktrace,
  getMessage: () => getMessage,
  isPanic: () => isPanic,
  isRustErrorLog: () => isRustErrorLog,
  isRustLog: () => isRustLog
});
module.exports = __toCommonJS(log_exports);
function getMessage(log) {
  if (typeof log === "string") {
    return log;
  } else {
    return log.message;
  }
}
__name(getMessage, "getMessage");
function getBacktrace(log) {
  if (log.fields?.message) {
    let str = log.fields?.message;
    if (log.fields?.file) {
      str += ` in ${log.fields.file}`;
      if (log.fields?.line) {
        str += `:${log.fields.line}`;
      }
      if (log.fields?.column) {
        str += `:${log.fields.column}`;
      }
    }
    if (log.fields?.reason) {
      str += `
${log.fields?.reason}`;
    }
    return str;
  }
  return "Unknown error";
}
__name(getBacktrace, "getBacktrace");
function isPanic(err) {
  return err.fields?.message === "PANIC";
}
__name(isPanic, "isPanic");
function isRustLog(e) {
  return e.timestamp && typeof e.level === "string" && typeof e.target === "string";
}
__name(isRustLog, "isRustLog");
function isRustErrorLog(e) {
  return isRustLog(e) && (e.level === "error" || e.fields?.message?.includes("fatal error"));
}
__name(isRustErrorLog, "isRustErrorLog");
function convertLog(rustLog) {
  const isQuery = isQueryLog(rustLog.fields);
  const level = isQuery ? "query" : rustLog.level.toLowerCase();
  return {
    ...rustLog,
    level,
    timestamp: new Date(rustLog.timestamp)
  };
}
__name(convertLog, "convertLog");
function isQueryLog(fields) {
  return Boolean(fields.query);
}
__name(isQueryLog, "isQueryLog");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  convertLog,
  getBacktrace,
  getMessage,
  isPanic,
  isRustErrorLog,
  isRustLog
});
