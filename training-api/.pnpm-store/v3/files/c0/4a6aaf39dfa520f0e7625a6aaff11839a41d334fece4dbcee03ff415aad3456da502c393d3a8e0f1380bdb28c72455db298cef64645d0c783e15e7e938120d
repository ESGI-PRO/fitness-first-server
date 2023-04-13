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
var InteractiveTransactionError_exports = {};
__export(InteractiveTransactionError_exports, {
  INTERACTIVE_TRANSACTION_ERROR_DEFAULT_MESSAGE: () => INTERACTIVE_TRANSACTION_ERROR_DEFAULT_MESSAGE,
  InteractiveTransactionError: () => InteractiveTransactionError
});
module.exports = __toCommonJS(InteractiveTransactionError_exports);
var import_DataProxyAPIError = require("./DataProxyAPIError");
var import_setRetryable = require("./utils/setRetryable");
const INTERACTIVE_TRANSACTION_ERROR_DEFAULT_MESSAGE = "Interactive transaction error";
class InteractiveTransactionError extends import_DataProxyAPIError.DataProxyAPIError {
  constructor(info, message = INTERACTIVE_TRANSACTION_ERROR_DEFAULT_MESSAGE) {
    super(message, (0, import_setRetryable.setRetryable)(info, false));
    this.name = "InteractiveTransactionError";
    this.code = "P5015";
  }
}
__name(InteractiveTransactionError, "InteractiveTransactionError");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  INTERACTIVE_TRANSACTION_ERROR_DEFAULT_MESSAGE,
  InteractiveTransactionError
});
