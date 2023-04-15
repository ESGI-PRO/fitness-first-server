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
var validate_exports = {};
__export(validate_exports, {
  ValidateError: () => ValidateError,
  validate: () => validate
});
module.exports = __toCommonJS(validate_exports);
var import_debug = __toESM(require("@prisma/debug"));
var import_chalk = __toESM(require("chalk"));
var E = __toESM(require("fp-ts/Either"));
var import_function = require("fp-ts/lib/function");
var import_ts_pattern = require("ts-pattern");
var import_panic = require("../panic");
var import_wasm = require("../wasm");
var import_errorHelpers = require("./errorHelpers");
var import_queryEngineCommons = require("./queryEngineCommons");
const debug = (0, import_debug.default)("prisma:validate");
class ValidateError extends Error {
  constructor(params) {
    const constructedErrorMessage = (0, import_ts_pattern.match)(params).with({ _tag: "parsed" }, ({ errorCode, message, reason }) => {
      const errorCodeMessage = errorCode ? `Error code: ${errorCode}` : "";
      return `${reason}
${errorCodeMessage}
${message}`;
    }).with({ _tag: "unparsed" }, ({ message, reason }) => {
      const detailsHeader = import_chalk.default.red.bold("Details:");
      return `${reason}
${detailsHeader} ${message}`;
    }).exhaustive();
    const errorMessageWithContext = `${constructedErrorMessage}
[Context: validate]`;
    super((0, import_errorHelpers.addVersionDetailsToErrorMessage)(errorMessageWithContext));
  }
}
__name(ValidateError, "ValidateError");
function validate(options) {
  const debugErrorType = (0, import_queryEngineCommons.createDebugErrorType)(debug, "validateWasm");
  debug(`Using validate Wasm`);
  const validateEither = (0, import_function.pipe)(
    E.tryCatch(
      () => {
        if (process.env.FORCE_PANIC_QUERY_ENGINE_GET_DMMF) {
          debug("Triggering a Rust panic...");
          import_wasm.prismaFmt.debug_panic();
        }
        const params = JSON.stringify({
          prismaSchema: options.datamodel,
          noColor: Boolean(process.env.NO_COLOR)
        });
        import_wasm.prismaFmt.validate(params);
      },
      (e) => ({
        type: "wasm-error",
        reason: "(validate wasm)",
        error: e
      })
    )
  );
  if (E.isRight(validateEither)) {
    return;
  }
  const error = (0, import_ts_pattern.match)(validateEither.left).with({ type: "wasm-error" }, (e) => {
    debugErrorType(e);
    console.error("");
    if ((0, import_panic.isWasmPanic)(e.error)) {
      const { message, stack } = (0, import_panic.getWasmError)(e.error);
      const panic = new import_panic.RustPanic(
        message,
        stack,
        "@prisma/prisma-fmt-wasm validate",
        import_panic.ErrorArea.FMT_CLI,
        void 0,
        options.datamodel
      );
      return panic;
    }
    const errorOutput = e.error.message;
    return new ValidateError((0, import_queryEngineCommons.parseQueryEngineError)({ errorOutput, reason: e.reason }));
  }).exhaustive();
  throw error;
}
__name(validate, "validate");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ValidateError,
  validate
});
