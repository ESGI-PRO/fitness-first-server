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
var responseToError_exports = {};
__export(responseToError_exports, {
  responseToError: () => responseToError
});
module.exports = __toCommonJS(responseToError_exports);
var import_PrismaClientInitializationError = require("../../../common/errors/PrismaClientInitializationError");
var import_PrismaClientKnownRequestError = require("../../../common/errors/PrismaClientKnownRequestError");
var import_BadRequestError = require("../BadRequestError");
var import_EngineHealthcheckTimeoutError = require("../EngineHealthcheckTimeoutError");
var import_EngineStartupError = require("../EngineStartupError");
var import_EngineVersionNotSupportedError = require("../EngineVersionNotSupportedError");
var import_GatewayTimeoutError = require("../GatewayTimeoutError");
var import_InteractiveTransactionError = require("../InteractiveTransactionError");
var import_InvalidRequestError = require("../InvalidRequestError");
var import_NotFoundError = require("../NotFoundError");
var import_SchemaMissingError = require("../SchemaMissingError");
var import_ServerError = require("../ServerError");
var import_UnauthorizedError = require("../UnauthorizedError");
var import_UsageExceededError = require("../UsageExceededError");
async function getResponseErrorBody(response) {
  let text;
  try {
    text = await response.text();
  } catch {
    return { type: "EmptyError" };
  }
  try {
    const error = JSON.parse(text);
    if (typeof error === "string") {
      switch (error) {
        case "InternalDataProxyError":
          return { type: "DataProxyError", body: error };
        default:
          return { type: "UnknownTextError", body: error };
      }
    }
    if (typeof error === "object" && error !== null) {
      if ("is_panic" in error && "message" in error && "error_code" in error) {
        return { type: "QueryEngineError", body: error };
      }
      if ("EngineNotStarted" in error || "InteractiveTransactionMisrouted" in error || "InvalidRequestError" in error) {
        const reason = Object.values(error)[0].reason;
        if (typeof reason === "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(reason)) {
          return { type: "UnknownJsonError", body: error };
        }
        return { type: "DataProxyError", body: error };
      }
    }
    return { type: "UnknownJsonError", body: error };
  } catch {
    return text === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: text };
  }
}
__name(getResponseErrorBody, "getResponseErrorBody");
async function responseToError(response, clientVersion) {
  if (response.ok)
    return void 0;
  const info = { clientVersion, response };
  const error = await getResponseErrorBody(response);
  if (error.type === "QueryEngineError") {
    throw new import_PrismaClientKnownRequestError.PrismaClientKnownRequestError(error.body.message, { code: error.body.error_code, clientVersion });
  }
  if (error.type === "DataProxyError") {
    if (error.body === "InternalDataProxyError") {
      throw new import_ServerError.ServerError(info, "Internal Data Proxy error");
    }
    if ("EngineNotStarted" in error.body) {
      if (error.body.EngineNotStarted.reason === "SchemaMissing") {
        return new import_SchemaMissingError.SchemaMissingError(info);
      }
      if (error.body.EngineNotStarted.reason === "EngineVersionNotSupported") {
        throw new import_EngineVersionNotSupportedError.EngineVersionNotSupportedError(info);
      }
      if ("EngineStartupError" in error.body.EngineNotStarted.reason) {
        const { msg, logs } = error.body.EngineNotStarted.reason.EngineStartupError;
        throw new import_EngineStartupError.EngineStartupError(info, msg, logs);
      }
      if ("KnownEngineStartupError" in error.body.EngineNotStarted.reason) {
        const { msg, error_code } = error.body.EngineNotStarted.reason.KnownEngineStartupError;
        throw new import_PrismaClientInitializationError.PrismaClientInitializationError(msg, clientVersion, error_code);
      }
      if ("HealthcheckTimeout" in error.body.EngineNotStarted.reason) {
        const { logs } = error.body.EngineNotStarted.reason.HealthcheckTimeout;
        throw new import_EngineHealthcheckTimeoutError.HealthcheckTimeoutError(info, logs);
      }
    }
    if ("InteractiveTransactionMisrouted" in error.body) {
      const messageByReason = {
        IDParseError: "Could not parse interactive transaction ID",
        NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID",
        TransactionStartError: "Could not start interactive transaction"
      };
      throw new import_InteractiveTransactionError.InteractiveTransactionError(info, messageByReason[error.body.InteractiveTransactionMisrouted.reason]);
    }
    if ("InvalidRequestError" in error.body) {
      throw new import_InvalidRequestError.InvalidRequestError(info, error.body.InvalidRequestError.reason);
    }
  }
  if (response.status === 401 || response.status === 403) {
    throw new import_UnauthorizedError.UnauthorizedError(info, buildErrorMessage(import_UnauthorizedError.UNAUTHORIZED_DEFAULT_MESSAGE, error));
  }
  if (response.status === 404) {
    return new import_NotFoundError.NotFoundError(info, buildErrorMessage(import_NotFoundError.NOT_FOUND_DEFAULT_MESSAGE, error));
  }
  if (response.status === 429) {
    throw new import_UsageExceededError.UsageExceededError(info, buildErrorMessage(import_UsageExceededError.USAGE_EXCEEDED_DEFAULT_MESSAGE, error));
  }
  if (response.status === 504) {
    throw new import_GatewayTimeoutError.GatewayTimeoutError(info, buildErrorMessage(import_GatewayTimeoutError.GATEWAY_TIMEOUT_DEFAULT_MESSAGE, error));
  }
  if (response.status >= 500) {
    throw new import_ServerError.ServerError(info, buildErrorMessage(import_ServerError.SERVER_ERROR_DEFAULT_MESSAGE, error));
  }
  if (response.status >= 400) {
    throw new import_BadRequestError.BadRequestError(info, buildErrorMessage(import_BadRequestError.BAD_REQUEST_DEFAULT_MESSAGE, error));
  }
  return void 0;
}
__name(responseToError, "responseToError");
function buildErrorMessage(defaultMessage, errorBody) {
  if (errorBody.type === "EmptyError") {
    return defaultMessage;
  }
  return `${defaultMessage}: ${JSON.stringify(errorBody)}`;
}
__name(buildErrorMessage, "buildErrorMessage");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  responseToError
});
