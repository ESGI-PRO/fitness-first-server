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
var maxBy_exports = {};
__export(maxBy_exports, {
  maxBy: () => maxBy
});
module.exports = __toCommonJS(maxBy_exports);
function maxBy(items, callback) {
  if (items.length === 0) {
    return void 0;
  }
  let result = items[0];
  let max = callback(items[0]);
  for (let i = 1; i < items.length; i++) {
    const value = callback(items[i]);
    if (value > max) {
      max = value;
      result = items[i];
    }
  }
  return result;
}
__name(maxBy, "maxBy");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  maxBy
});
