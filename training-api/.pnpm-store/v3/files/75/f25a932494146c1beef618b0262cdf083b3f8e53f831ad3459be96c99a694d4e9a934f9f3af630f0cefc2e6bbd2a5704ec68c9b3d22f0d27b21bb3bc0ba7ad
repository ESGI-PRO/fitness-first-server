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
var PrismaClientRustError_exports = {};
__export(PrismaClientRustError_exports, {
  PrismaClientRustError: () => PrismaClientRustError
});
module.exports = __toCommonJS(PrismaClientRustError_exports);
var import_log = require("./utils/log");
class PrismaClientRustError extends Error {
  constructor({ clientVersion, error }) {
    const backtrace = (0, import_log.getBacktrace)(error);
    super(backtrace ?? "Unknown error");
    this._isPanic = (0, import_log.isPanic)(error);
    this.clientVersion = clientVersion;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
  isPanic() {
    return this._isPanic;
  }
}
__name(PrismaClientRustError, "PrismaClientRustError");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PrismaClientRustError
});
