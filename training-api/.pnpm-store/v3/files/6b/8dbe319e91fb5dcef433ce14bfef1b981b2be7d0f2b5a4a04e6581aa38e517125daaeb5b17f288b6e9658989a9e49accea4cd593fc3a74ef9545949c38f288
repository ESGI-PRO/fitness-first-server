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
var getInteractiveTransactionId_exports = {};
__export(getInteractiveTransactionId_exports, {
  getInteractiveTransactionId: () => getInteractiveTransactionId
});
module.exports = __toCommonJS(getInteractiveTransactionId_exports);
function getInteractiveTransactionId(transaction) {
  if (transaction?.kind === "itx") {
    return transaction.options.id;
  }
  return void 0;
}
__name(getInteractiveTransactionId, "getInteractiveTransactionId");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getInteractiveTransactionId
});
