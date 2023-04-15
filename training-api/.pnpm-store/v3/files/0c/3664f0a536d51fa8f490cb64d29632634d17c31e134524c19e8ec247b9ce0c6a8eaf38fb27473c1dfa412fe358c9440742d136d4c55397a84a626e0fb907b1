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
var getDmmf_exports = {};
__export(getDmmf_exports, {
  GetDmmfError: () => GetDmmfError,
  getDMMF: () => getDMMF
});
module.exports = __toCommonJS(getDmmf_exports);
var import_debug = __toESM(require("@prisma/debug"));
var import_chalk = __toESM(require("chalk"));
var E = __toESM(require("fp-ts/Either"));
var import_function = require("fp-ts/lib/function");
var TE = __toESM(require("fp-ts/TaskEither"));
var import_fs = __toESM(require("fs"));
var import_ts_pattern = require("ts-pattern");
var import_panic = require("../panic");
var import_wasm = require("../wasm");
var import_errorHelpers = require("./errorHelpers");
var import_queryEngineCommons = require("./queryEngineCommons");
const debug = (0, import_debug.default)("prisma:getDMMF");
class GetDmmfError extends Error {
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
[Context: getDmmf]`;
    super((0, import_errorHelpers.addVersionDetailsToErrorMessage)(errorMessageWithContext));
  }
}
__name(GetDmmfError, "GetDmmfError");
async function getDMMF(options) {
  warnOnDeprecatedFeatureFlag(options.previewFeatures);
  const debugErrorType = (0, import_queryEngineCommons.createDebugErrorType)(debug, "getDmmfWasm");
  debug(`Using getDmmf Wasm`);
  const dmmfPipeline = (0, import_function.pipe)(
    TE.tryCatch(
      () => {
        if (options.datamodel) {
          debug("Using given datamodel");
          return Promise.resolve(options.datamodel);
        }
        debug(`Reading datamodel from the given datamodel path ${options.datamodelPath}`);
        return import_fs.default.promises.readFile(options.datamodelPath, { encoding: "utf-8" });
      },
      (e) => ({
        type: "read-datamodel-path",
        reason: "Error while trying to read the datamodel path",
        error: e,
        datamodelPath: options.datamodelPath
      })
    ),
    TE.chainW((datamodel) => {
      return (0, import_function.pipe)(
        E.tryCatch(
          () => {
            if (process.env.FORCE_PANIC_QUERY_ENGINE_GET_DMMF) {
              debug("Triggering a Rust panic...");
              import_wasm.prismaFmt.debug_panic();
            }
            const params = JSON.stringify({
              prismaSchema: datamodel,
              noColor: Boolean(process.env.NO_COLOR)
            });
            const data = import_wasm.prismaFmt.get_dmmf(params);
            return data;
          },
          (e) => ({
            type: "wasm-error",
            reason: "(get-dmmf wasm)",
            error: e
          })
        ),
        E.map((result) => ({ result })),
        E.chainW(
          ({ result }) => E.tryCatch(
            () => JSON.parse(result),
            (e) => ({
              type: "parse-json",
              reason: "Unable to parse JSON",
              error: e
            })
          )
        ),
        TE.fromEither
      );
    })
  );
  const dmmfEither = await dmmfPipeline();
  if (E.isRight(dmmfEither)) {
    debug("dmmf data retrieved without errors in getDmmf Wasm");
    const { right: data } = dmmfEither;
    return Promise.resolve(data);
  }
  const error = (0, import_ts_pattern.match)(dmmfEither.left).with({ type: "read-datamodel-path" }, (e) => {
    debugErrorType(e);
    return new GetDmmfError({
      _tag: "unparsed",
      message: `${e.error.message}
Datamodel path: "${e.datamodelPath}"`,
      reason: e.reason
    });
  }).with({ type: "wasm-error" }, (e) => {
    debugErrorType(e);
    if ((0, import_panic.isWasmPanic)(e.error)) {
      const { message, stack } = (0, import_panic.getWasmError)(e.error);
      const panic = new import_panic.RustPanic(
        message,
        stack,
        "@prisma/prisma-fmt-wasm get_dmmf",
        import_panic.ErrorArea.FMT_CLI,
        options.prismaPath,
        options.datamodel
      );
      return panic;
    }
    const errorOutput = e.error.message;
    return new GetDmmfError((0, import_queryEngineCommons.parseQueryEngineError)({ errorOutput, reason: e.reason }));
  }).with({ type: "parse-json" }, (e) => {
    debugErrorType(e);
    return new GetDmmfError({ _tag: "unparsed", message: e.error.message, reason: e.reason });
  }).exhaustive();
  throw error;
}
__name(getDMMF, "getDMMF");
function warnOnDeprecatedFeatureFlag(previewFeatures) {
  const getMessage = /* @__PURE__ */ __name((flag) => `${import_chalk.default.blueBright(
    "info"
  )} The preview flag "${flag}" is not needed anymore, please remove it from your schema.prisma`, "getMessage");
  const removedFeatureFlagMap = {
    insensitiveFilters: getMessage("insensitiveFilters"),
    atomicNumberOperations: getMessage("atomicNumberOperations"),
    connectOrCreate: getMessage("connectOrCreate"),
    transaction: getMessage("transaction"),
    nApi: getMessage("nApi"),
    transactionApi: getMessage("transactionApi"),
    uncheckedScalarInputs: getMessage("uncheckedScalarInputs"),
    nativeTypes: getMessage("nativeTypes"),
    createMany: getMessage("createMany"),
    groupBy: getMessage("groupBy"),
    referentialActions: getMessage("referentialActions"),
    microsoftSqlServer: getMessage("microsoftSqlServer"),
    selectRelationCount: getMessage("selectRelationCount"),
    orderByRelation: getMessage("orderByRelation"),
    orderByAggregateGroup: getMessage("orderByAggregateGroup")
  };
  previewFeatures?.forEach((f) => {
    const removedMessage = removedFeatureFlagMap[f];
    if (removedMessage && !process.env.PRISMA_HIDE_PREVIEW_FLAG_WARNINGS) {
      console.warn(removedMessage);
    }
  });
}
__name(warnOnDeprecatedFeatureFlag, "warnOnDeprecatedFeatureFlag");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GetDmmfError,
  getDMMF
});
