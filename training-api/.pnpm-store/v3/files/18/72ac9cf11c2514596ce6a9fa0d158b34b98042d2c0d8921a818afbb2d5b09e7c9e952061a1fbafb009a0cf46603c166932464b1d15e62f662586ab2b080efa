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
var queryEngineCommons_exports = {};
__export(queryEngineCommons_exports, {
  createDebugErrorType: () => createDebugErrorType,
  parseQueryEngineError: () => parseQueryEngineError,
  unlinkTempDatamodelPath: () => unlinkTempDatamodelPath
});
module.exports = __toCommonJS(queryEngineCommons_exports);
var import_chalk = __toESM(require("chalk"));
var E = __toESM(require("fp-ts/Either"));
var import_function = require("fp-ts/lib/function");
var TE = __toESM(require("fp-ts/TaskEither"));
var import_fs = __toESM(require("fs"));
var import_ts_pattern = require("ts-pattern");
function unlinkTempDatamodelPath(options, tempDatamodelPath) {
  return TE.tryCatch(
    () => {
      if (!options.datamodelPath && tempDatamodelPath) {
        return import_fs.default.promises.unlink(tempDatamodelPath);
      }
      return Promise.resolve(void 0);
    },
    (e) => ({
      type: "unlink-temp-datamodel-path",
      reason: "Unable to delete temporary datamodel path",
      error: e
    })
  );
}
__name(unlinkTempDatamodelPath, "unlinkTempDatamodelPath");
const createDebugErrorType = /* @__PURE__ */ __name((debug, fnName) => ({ type, reason, error }) => {
  debug(`error of type "${type}" in ${fnName}:
`, { reason, error });
}, "createDebugErrorType");
function createSchemaValidationError(reason) {
  return `${import_chalk.default.redBright.bold("Prisma schema validation")} - ${reason}`;
}
__name(createSchemaValidationError, "createSchemaValidationError");
function parseQueryEngineError({ errorOutput, reason }) {
  const actualError = (0, import_function.pipe)(
    E.tryCatch(
      () => JSON.parse(errorOutput),
      () => ({ _tag: "unparsed", message: errorOutput, reason })
    ),
    E.map((errorOutputAsJSON) => {
      const defaultMessage = import_chalk.default.redBright(errorOutputAsJSON.message);
      const getConfigErrorInit = (0, import_ts_pattern.match)(errorOutputAsJSON).with({ error_code: "P1012" }, (eJSON) => {
        return {
          reason: createSchemaValidationError(reason),
          errorCode: eJSON.error_code
        };
      }).with({ error_code: import_ts_pattern.P.string }, (eJSON) => {
        return {
          reason,
          errorCode: eJSON.error_code
        };
      }).otherwise(() => {
        return {
          reason
        };
      });
      return { _tag: "parsed", message: defaultMessage, ...getConfigErrorInit };
    }),
    E.getOrElseW(import_function.identity)
  );
  return actualError;
}
__name(parseQueryEngineError, "parseQueryEngineError");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createDebugErrorType,
  parseQueryEngineError,
  unlinkTempDatamodelPath
});
